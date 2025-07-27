"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { getCldVideoUrl } from "next-cloudinary";

export const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const [sectionBounds, setSectionBounds] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });

  // Update bounds when component mounts or window resizes
  useEffect(() => {
    const updateBounds = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setSectionBounds({
          left: rect.left,
          top: rect.top,
          width: rect.width,
          height: rect.height,
        });
      }
    };

    updateBounds();
    window.addEventListener("resize", updateBounds);

    return () => {
      window.removeEventListener("resize", updateBounds);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Calculate normalized mouse position relative to the section (0-1 range)
  const normalizedX =
    (mousePosition.x - sectionBounds.left) / sectionBounds.width;
  const normalizedY =
    (mousePosition.y - sectionBounds.top) / sectionBounds.height;

  // Calculate the movement of each glow based on cursor position
  // Limit the movement to keep glows in their general area
  const topLeftGlowPosition = {
    x: `calc(25% + ${normalizedX * 40 - 20}px)`,
    y: `calc(25% + ${normalizedY * 40 - 20}px)`,
    scale:
      1 +
      (normalizedX > 0.1 &&
      normalizedX < 0.4 &&
      normalizedY > 0.1 &&
      normalizedY < 0.4
        ? 0.15
        : 0),
  };

  const bottomRightGlowPosition = {
    x: `calc(75% + ${normalizedX * 40 - 20}px)`,
    y: `calc(75% + ${normalizedY * 40 - 20}px)`,
    scale:
      1 +
      (normalizedX > 0.6 &&
      normalizedX < 0.9 &&
      normalizedY > 0.6 &&
      normalizedY < 0.9
        ? 0.15
        : 0),
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        {/* Gradient overlay that fades from 70% to 100% opacity of the background color */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background backdrop-blur-[1px] z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute w-full h-full object-cover z-0 transform -translate-y-8"
        >
          <source
            src={getCldVideoUrl({
              src: "hero_bg_video_vyk4sj",
              format: "webm",
              quality: "auto"
            })}
            type="video/webm"
          />
          <source
            src={getCldVideoUrl({
              src: "hero_bg_video_vyk4sj",
              format: "mp4",
              quality: "auto"
            })}
            type="video/mp4"
          />
        </video>
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/20 rounded-full filter blur-3xl animate-pulse-slow z-20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl animate-pulse-slow z-20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-30">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-6xl sm:text-6xl md:text-7xl lg:text-7xl font-bold mb-6">
            <span className="block glow">
              <span className="text-primary">together</span>, we shape the
              future of robotics
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
            We are a community-driven collective, empowering each other to
            explore, build, and innovate through open collaboration.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects">
              <Button
                variant="default"
                className="px-8 py-6 text-lg rounded-3xl"
                size="lg"
              >
                Explore Our Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
