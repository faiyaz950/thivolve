"use client";
import { useEffect, useRef } from 'react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
}

export function VideoPlayer({ src, poster, className }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className={`w-full aspect-video overflow-hidden rounded-lg shadow-xl ${className}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-cover"
        playsInline
        controls
        loop
        muted // Muted autoplay is generally allowed by browsers
        // autoPlay // Consider user experience for autoplay
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
