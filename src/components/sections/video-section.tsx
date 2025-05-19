"use client";

import { PlayCircle } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused || videoRef.current.ended) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    videoElement.addEventListener('play', handlePlay);
    videoElement.addEventListener('pause', handlePause);
    videoElement.addEventListener('ended', handleEnded);

    return () => {
      videoElement.removeEventListener('play', handlePlay);
      videoElement.removeEventListener('pause', handlePause);
      videoElement.removeEventListener('ended', handleEnded);
    };
  }, []);


  return (
    <section className="relative w-full h-[30rem] md:h-[40rem] lg:h-[50rem] overflow-hidden group">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        poster="https://placehold.co/1920x1080.png"
        data-ai-hint="tech services montage"
        loop
        muted
        playsInline
      >
        {/* Replace with your actual video source */}
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
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause video" : "Play video"}
          className="p-3 bg-primary/80 hover:bg-primary text-white rounded-full transition-all duration-300 transform group-hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black/50"
        >
          <PlayCircle size={48} className={`transition-transform duration-300 ${isPlaying ? 'rotate-90' : ''}`} />
        </button>
      </div>
      <style jsx>{`
        .shadow-text {
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }
      `}</style>
    </section>
  );
}
