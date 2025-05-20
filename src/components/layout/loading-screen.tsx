
"use client";

import Image from 'next/image';
import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface LoadingScreenProps extends HTMLAttributes<HTMLDivElement> {
  show?: boolean;
}

export function LoadingScreen({ className, show = true, ...props }: LoadingScreenProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ease-out",
        // The `animate-fade-in` is for the initial appearance.
        // The `animate-fade-out` is applied when `show` becomes false.
        // Tailwind's JIT handles these based on the animation config.
        // The `show` prop changing will trigger re-render and if `animate-fade-out` is defined correctly,
        // it should apply. The `pointer-events-none` is good for after it's faded.
        show ? "opacity-100" : "opacity-0 pointer-events-none animate-fade-out",
        className
      )}
      // Apply fade-in animation only once when it's initially shown
      // This can be tricky with just conditional class.
      // Let's ensure the initial state is simply visible if `show` is true,
      // and fade-out happens when `show` turns false.
      // The `RootLayout` handles the timing.
      // The `animate-fade-in` can be on the component itself if it's always mounted but visibility toggled.
      // Or, if mounted conditionally, it doesn't need initial animate-fade-in class.
      // Given the RootLayout logic, it's simpler if this component just reacts to `show`.
      // Let's remove animate-fade-in from here and let it be instant, then rely on animate-fade-out.
      // Or, ensure `animate-fade-in` is only applied on initial mount when `show` is true.
      // The current `RootLayout` mounts it immediately with `show=true`.
      // So, an initial fade-in for the screen itself is good.
      style={show ? { animation: 'fadeIn 0.3s ease-out forwards' } : {}} // Explicit initial fade-in for the screen
      {...props}
    >
      <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}> {/* Logo scales in after screen fades in */}
        <Image
          src="/btruss-logo.png"
          alt="Btruss Logo"
          width={200}
          height={60} 
          className="h-16 w-auto"
          priority
        />
      </div>
    </div>
  );
}
