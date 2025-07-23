"use client";

import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles, Star } from 'lucide-react';

const videoHeadlineText = "WATCH OUR STORY";
const animatedSentences = [
  'Innovation in Every Project',
  'Transforming Digital Dreams',
  'Building Tomorrow Today',
  'Excellence Through Technology',
  'Your Success is Our Mission',
];

export function VideoSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [isSentenceVisible, setIsSentenceVisible] = useState(true);
  const [headlineLetters, setHeadlineLetters] = useState<{ char: string; show: boolean }[]>(
    videoHeadlineText.split('').map(char => ({ char, show: false }))
  );
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const youtubeVideoId = "QsY8fnvMn6c"; 
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&loop=1&playlist=${youtubeVideoId}&controls=0&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3&enablejsapi=1`;

  // Animation for headline letters - triggers when section becomes visible
  useEffect(() => {
    if (isVisible) {
      // Show all letters immediately first (fallback)
      setHeadlineLetters(videoHeadlineText.split('').map(char => ({ char, show: true })));
      
      // Then animate them in sequence
      const timers = videoHeadlineText.split('').map((_, index) =>
        setTimeout(() => {
          setHeadlineLetters(prev => {
            const newLetters = [...prev];
            if (newLetters[index]) {
              newLetters[index].show = true;
            }
            return newLetters;
          });
        }, index * 80 + 300)
      );
      return () => timers.forEach(clearTimeout);
    }
  }, [isVisible]);

  // Animated sentences
  useEffect(() => {
    if (isVisible) {
      const displayDuration = 3500;
      const fadeDuration = 600;
      const sentenceInterval = setInterval(() => {
        setIsSentenceVisible(false);
        setTimeout(() => {
          setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % animatedSentences.length);
          setIsSentenceVisible(true);
        }, fadeDuration);
      }, displayDuration + fadeDuration);
      return () => clearInterval(sentenceInterval);
    }
  }, [isVisible]);

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
            title="Btruss Services Showcase"
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

      {/* Main Content Overlay */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-4">
        <div className={cn(
          "max-w-4xl mx-auto transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {/* Headline with letter animation */}
          <div className="relative mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-2xl">
              {headlineLetters.map((item, index) => (
                <span
                  key={index}
                  className={cn(
                    "inline-block transition-all duration-500 transform-gpu",
                    item.show ? "opacity-100 translate-y-0 scale-100" : "opacity-30 translate-y-4 scale-95"
                  )}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  {item.char === " " ? "\u00A0" : item.char}
                </span>
              ))}
            </h2>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-3 h-3 bg-primary rounded-full animate-ping" />
            <div className="absolute -top-2 -right-6 w-2 h-2 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          {/* Animated Sentence */}
          <div className="relative mb-8">
            <h3 className={cn(
              "text-xl md:text-2xl lg:text-3xl font-bold text-primary transition-all duration-600 transform-gpu drop-shadow-lg",
              isSentenceVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              {animatedSentences[currentSentenceIndex]}
            </h3>

            {/* Animated underline */}
            <div className={cn(
              "absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-600",
              isSentenceVisible ? "w-24 opacity-100" : "w-0 opacity-0"
            )} />
          </div>

          {/* Description */}
          <p className="text-base md:text-lg text-neutral-200 leading-relaxed font-light mb-8 max-w-3xl mx-auto drop-shadow-lg">
            Experience our journey of{' '}
            <span className="text-primary font-medium">digital transformation</span>,{' '}
            <span className="text-primary font-medium">innovative solutions</span>, and{' '}
            <span className="text-primary font-medium">client success stories</span>.
          </p>

          {/* Decorative accent */}
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8 animate-pulse" />

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-neutral-300">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              <span className="font-medium drop-shadow">Award Winning Projects</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-neutral-500" />
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-primary fill-primary" />
              <span className="font-medium drop-shadow">Client Satisfaction</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-neutral-500" />
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">∞</span>
              </div>
              <span className="font-medium drop-shadow">Endless Possibilities</span>
            </div>
          </div>
        </div>
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