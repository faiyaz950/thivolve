
"use client";

import { useRef } from 'react'; // Keep useRef if you might need to interact with video programmatically, otherwise it can be removed.

export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative w-full h-[30rem] md:h-[40rem] lg:h-[50rem] overflow-hidden group">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        poster="https://source.unsplash.com/1920x1080/?tech,services,montage"
        data-ai-hint="tech services montage"
        loop
        muted
        playsInline
        autoPlay // Added for automatic playback
      >
        {/* Replace with your actual video source for Btruss Services Showcase */}
        <source src="https://placehold.co/1920x1080.mp4/000000/FFFFFF?text=Btruss+Services+Showcase" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight shadow-text">
          Btruss: Your Partner in <span className="text-primary">Digital Transformation</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8 shadow-text">
          Leveraging cutting-edge technology to build innovative solutions for a smarter future.
        </p>
        {/* Play button and associated logic have been removed */}
      </div>
      <style jsx>{`
        .shadow-text {
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }
      `}</style>
    </section>
  );
}
