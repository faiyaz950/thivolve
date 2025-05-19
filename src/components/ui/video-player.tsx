"use client";
import { useEffect, useRef } from 'react';
import Image from 'next/image'; // Import next/image

interface VideoPlayerProps {
  src: string;
  poster?: string;
  posterAiHint?: string; // Added for AI hint for the poster
  className?: string;
}

export function VideoPlayer({ src, poster, posterAiHint, className }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // If a poster URL is provided, use it. Otherwise, if an AI hint is provided for the poster, construct a placeholder.
  const posterUrl = poster; 

  return (
    <div className={`w-full aspect-video overflow-hidden rounded-lg shadow-xl ${className}`}>
      <video
        ref={videoRef}
        src={src}
        poster={posterUrl}
        className="w-full h-full object-cover"
        playsInline
        controls
        loop
        muted // Muted autoplay is generally allowed by browsers
        // autoPlay // Consider user experience for autoplay
        data-ai-hint={posterAiHint} // Pass the hint to the video element itself, or use it for the Image component if you abstract the poster more
      >
        Your browser does not support the video tag.
      </video>
      {/* 
        If you want to use next/image for the poster specifically before video loads,
        you might need more complex logic to show/hide it.
        For simplicity, the video tag's poster attribute is used.
        If using next/image for poster:
        {posterUrl && (
          <Image 
            src={posterUrl} 
            alt="Video poster" 
            layout="fill" 
            objectFit="cover" 
            data-ai-hint={posterAiHint} 
          />
        )}
      */}
    </div>
  );
}
