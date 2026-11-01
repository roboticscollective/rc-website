"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Volume2, VolumeX } from "lucide-react";

export interface Clip {
  src: string;
  /** Still frame shown before/between playback (also the reduced-motion view). */
  poster: string;
  /** Clip has a meaningful audio track: show a tap-for-sound button. */
  sound?: boolean;
}

interface LabVideoProps {
  /** One clip loops; several clips play one after another, cross-fading. */
  clips: Clip[];
  /** Hero tiles: preload the first still frame so it paints immediately. */
  priority?: boolean;
  className?: string;
}

const FADE_MS = 400;

/**
 * Muted video tile with viewfinder corners. Plays only while on screen
 * (saves mobile data/battery) and stays on its still frame for users who
 * prefer reduced motion.
 */
export function LabVideo({ clips, priority = false, className = "" }: LabVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const visible = useRef(false);
  const reducedMotion = useRef(false);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [unmuted, setUnmuted] = useState(false);
  const multi = clips.length > 1;

  const tryPlay = () => {
    const video = ref.current;
    if (!video || !visible.current || reducedMotion.current) return;
    video.play().catch(() => {
      /* autoplay blocked (e.g. iOS Low Power Mode) — still frame stays */
    });
  };

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible.current = entry.isIntersecting;
        if (entry.isIntersecting) tryPlay();
        else video.pause();
      },
      { threshold: 0.25 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  // A new clip was selected: start it (no-op until the tile is on screen).
  useEffect(() => {
    tryPlay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  // Browsers only allow sound after a tap. Unmuting restarts the clip so the
  // viewer hears it from the beginning; it mutes again when the clip ends.
  const toggleSound = () => {
    const video = ref.current;
    if (!video) return;
    if (unmuted) {
      video.muted = true;
      setUnmuted(false);
      return;
    }
    video.muted = false;
    video.currentTime = 0;
    setUnmuted(true);
    video.play().catch(() => {});
  };

  const handleEnded = () => {
    if (unmuted && ref.current) {
      ref.current.muted = true;
      setUnmuted(false);
    }
    if (!multi) return;
    setPlaying(false); // fade the video out to the next clip's still frame
    setTimeout(() => setIndex((i) => (i + 1) % clips.length), FADE_MS);
  };

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-dark-surface ring-1 ring-white/10 ${className}`}
    >
      {/* Still frames as optimized images: paint right away, and cross-fade
          between clips while the next video loads. */}
      {clips.map((clip, i) => (
        <Image
          key={clip.poster}
          src={clip.poster}
          alt=""
          fill
          priority={priority && i === 0}
          sizes="(min-width: 1024px) 25vw, 55vw"
          className={`object-cover transition-opacity duration-500 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <video
        ref={ref}
        src={clips[index].src}
        muted
        loop={!multi}
        playsInline
        preload="metadata"
        aria-hidden="true"
        onPlaying={() => setPlaying(true)}
        onEnded={handleEnded}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity ${
          playing ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDuration: `${FADE_MS}ms` }}
      />

      {clips[index].sound && (
        <button
          type="button"
          onClick={toggleSound}
          aria-label={unmuted ? "Mute video" : "Play video with sound"}
          aria-pressed={unmuted}
          className="absolute bottom-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-colors hover:bg-black/80"
        >
          {unmuted ? <Volume2 size={18} /> : <VolumeX size={18} />}
        </button>
      )}

      {/* Viewfinder corners */}
      <span aria-hidden="true" className="pointer-events-none absolute left-2.5 top-2.5 h-3 w-3 border-l border-t border-white/70" />
      <span aria-hidden="true" className="pointer-events-none absolute right-2.5 top-2.5 h-3 w-3 border-r border-t border-white/70" />
      <span aria-hidden="true" className="pointer-events-none absolute bottom-2.5 left-2.5 h-3 w-3 border-b border-l border-white/70" />
      <span aria-hidden="true" className="pointer-events-none absolute bottom-2.5 right-2.5 h-3 w-3 border-b border-r border-white/70" />
    </div>
  );
}

export default LabVideo;
