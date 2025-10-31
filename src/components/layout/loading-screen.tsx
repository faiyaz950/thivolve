"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';
import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface LoadingScreenProps extends HTMLAttributes<HTMLDivElement> {
  show?: boolean;
}

export function LoadingScreen({ className, show = true, ...props }: LoadingScreenProps) {
  const [logoVisible, setLogoVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    if (show) {
      // Stagger the animations
      setTimeout(() => setLogoVisible(true), 300);
      setTimeout(() => setTextVisible(true), 800);
      
      // Animate progress bar
      const interval = setInterval(() => {
        setProgressWidth(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 1;
        });
      }, 40);
      
      return () => clearInterval(interval);
    }
  }, [show]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black transition-all duration-500 ease-out overflow-hidden",
        show ? "opacity-100" : "opacity-0 pointer-events-none",
        className
      )}
      {...props}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Multiple gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/[0.02] to-transparent" />
        
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/6 w-64 h-64 bg-white/[0.01] rounded-full filter blur-2xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        </div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-12">
        {/* Logo container with enhanced styling */}
        <div className={cn(
          "relative transition-all duration-1000 ease-out",
          logoVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
        )}>
          {/* Glow effect behind logo */}
          <div className="absolute inset-0 bg-primary/20 rounded-3xl opacity-0 animate-pulse blur-2xl" style={{ 
            transform: 'scale(1.5)',
            animationDuration: '3s',
            animationDelay: '1s'
          }} />
          
          {/* Logo backdrop */}
          <div className="relative p-8 bg-gradient-to-br from-neutral-900/40 via-black/60 to-neutral-900/40 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl">
            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-3xl opacity-0 animate-pulse" 
                 style={{
                   background: 'linear-gradient(135deg, transparent, rgba(255,255,255,0.1), transparent)',
                   mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                   maskComposite: 'xor',
                   animationDuration: '2s'
                 }} />
            
            {/* Floating particles */}
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-primary/40 rounded-full animate-ping" />
            <div className="absolute -bottom-1 -right-1 w-1 h-1 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 -right-2 w-1 h-1 bg-white/30 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
            
            <Image
              src="/thiweblogo.png"
              alt="Btruss Logo"
              width={300}
              height={70}
              className="relative z-10 filter drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Loading text with gradient effect */}
        <div className={cn(
          "text-center transition-all duration-1000 ease-out delay-300",
          textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400 mb-2 tracking-wide">
            Loading Experience
          </h2>
          <p className="text-sm md:text-base text-neutral-500 font-medium tracking-wider uppercase">
            Preparing something amazing
          </p>
        </div>

        {/* Enhanced progress bar */}
        <div className={cn(
          "relative w-80 transition-all duration-1000 ease-out delay-500",
          textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          {/* Progress container */}
          <div className="relative h-1 bg-neutral-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
            {/* Progress fill */}
            <div 
              className="h-full bg-gradient-to-r from-primary via-primary/80 to-primary rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progressWidth}%` }}
            >
              {/* Animated shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
            </div>
            
            {/* Glow effect */}
            <div 
              className="absolute top-0 h-full bg-primary/30 rounded-full blur-sm transition-all duration-300 ease-out"
              style={{ width: `${progressWidth}%` }}
            />
          </div>
          
          {/* Progress percentage */}
          <div className="flex justify-center mt-4">
            <span className="text-xs font-medium text-neutral-400 tabular-nums">
              {Math.round(progressWidth)}%
            </span>
          </div>
        </div>

        {/* Animated dots indicator */}
        <div className={cn(
          "flex space-x-2 transition-all duration-1000 ease-out delay-700",
          textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="w-2 h-2 bg-primary/60 rounded-full animate-pulse"
              style={{ 
                animationDelay: `${index * 0.3}s`,
                animationDuration: '1.5s'
              }}
            />
          ))}
        </div>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      
      {/* Top fade effect */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none" />
    </div>
  );
}
