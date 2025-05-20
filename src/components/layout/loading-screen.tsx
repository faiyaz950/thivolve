
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
        show ? "opacity-100" : "opacity-0 pointer-events-none animate-fade-out",
        className
      )}
      style={show ? { animation: 'fadeIn 0.3s ease-out forwards' } : {}}
      {...props}
    >
      <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}> {/* This will use the updated scaleIn animation */}
        <Image
          src="/btrusssl.png"
          alt="Btruss Logo"
          width={300}
          height={70} 
          className=""
          priority // Ensures the logo is preloaded
        />
      </div>
    </div>
  );
}
