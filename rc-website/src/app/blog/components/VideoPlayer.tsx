"use client";

import { buildVideoUrl, buildImageUrl } from "@/lib/sanity";

interface VideoPlayerProps {
  file: any;
  caption?: string;
  poster?: any;
}

export function VideoPlayer({ file, caption, poster }: VideoPlayerProps) {
  const videoUrl = buildVideoUrl(file);
  const posterUrl = poster ? buildImageUrl(poster) : undefined;

  if (!videoUrl) {
    return (
      <div className="bg-card border border-red-500/20 rounded-lg p-6 text-center my-8">
        <p className="text-red-400">Unable to load video</p>
      </div>
    );
  }

  return (
    <div className="my-8">
      <div className="relative w-full overflow-hidden rounded-lg bg-black shadow-lg">
        <video
          controls
          className="w-full h-auto"
          poster={posterUrl}
          preload="metadata"
        >
          <source src={videoUrl} type="video/mp4" />
          <source src={videoUrl} type="video/webm" />
          <source src={videoUrl} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
      {caption && (
        <p className="text-sm text-gray-400 text-center mt-3 italic">
          {caption}
        </p>
      )}
    </div>
  );
}