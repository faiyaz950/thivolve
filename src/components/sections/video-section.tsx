"use client";

import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export function VideoSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const youtubeVideoId = "QsY8fnvMn6c"; 
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&loop=1&playlist=${youtubeVideoId}&controls=0&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3&enablejsapi=1`;

  return (
    <section 
      ref={ref}
      className="relative w-full h-[30rem] md:h-[40rem] lg:h-[50rem] overflow-hidden group bg-black"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Video Background */}
        <div className="absolute inset-0">
          <iframe
            src={youtubeEmbedUrl}
            title="Video Background"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full object-cover"
          />
        </div>

        {/* Multi-layer gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }} />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Video Controls */}
      <div className="absolute top-6 right-6 z-40 flex space-x-3">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="bg-black/50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-110"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </button>
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="bg-black/50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-110"
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      </div>

      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-10" />

      {/* Floating animation particles */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-primary/40 rounded-full animate-ping" style={{ animationDuration: '3s', animationDelay: '0s' }} />
        <div className="absolute top-3/4 right-1/5 w-1 h-1 bg-primary/60 rounded-full animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-4/5 w-1.5 h-1.5 bg-primary/30 rounded-full animate-ping" style={{ animationDuration: '5s', animationDelay: '2s' }} />
      </div>
    </section>
  );
}