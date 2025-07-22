"use client";

import { useEffect, useRef } from 'react';
import { Users, Briefcase, Calendar, Smile, Building } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { useCountUp } from '@/hooks/use-count-up';
import { cn } from '@/lib/utils';

const StatItem = ({ end, label, Icon, plus = true, isVisible, index }: { end: number; label: string; Icon: React.ElementType; plus?: boolean; isVisible: boolean; index: number; }) => {
  const { count, startAnimation } = useCountUp(end, 2000);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      const timer = setTimeout(() => startAnimation(), index * 200);
      hasAnimated.current = true;
      return () => clearTimeout(timer);
    }
  }, [isVisible, startAnimation, index]);

  return (
    <div
      className={cn(
        "group relative text-center p-8 bg-gradient-to-br from-neutral-800/40 via-neutral-900/60 to-black/80 backdrop-blur-xl rounded-2xl border border-white/5 overflow-hidden transition-all duration-700 transform-gpu hover:scale-105 hover:border-white/20 hover:shadow-2xl hover:shadow-primary/20",
        isVisible ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-16 rotate-3"
      )}
      style={{ 
        transitionDelay: `${index * 200}ms`,
        background: 'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0.8) 100%)'
      }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1 -left-1 w-2 h-2 bg-primary/20 rounded-full animate-pulse" />
        <div className="absolute -bottom-1 -right-1 w-1 h-1 bg-primary/30 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 -left-1 w-1 h-1 bg-white/20 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Icon container with enhanced styling */}
      <div className="relative flex justify-center items-center mb-6">
        <div className="relative p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/10 group-hover:border-primary/30 transition-all duration-500 group-hover:scale-110">
          <Icon className="h-12 w-12 text-primary group-hover:text-primary/90 transition-all duration-500 filter drop-shadow-lg group-hover:drop-shadow-2xl" />
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-primary/20 rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-all duration-500 animate-pulse" />
        </div>
      </div>
      
      {/* Count display with enhanced styling */}
      <div className="relative mb-4">
        <p className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-neutral-300 group-hover:from-primary group-hover:via-white group-hover:to-primary transition-all duration-500 filter drop-shadow-lg">
          {count}{plus && '+'}
        </p>
        
        {/* Animated underline */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-full transition-all duration-700" />
      </div>
      
      {/* Label with enhanced typography */}
      <p className="text-sm md:text-base font-medium text-neutral-400 group-hover:text-neutral-300 transition-all duration-500 tracking-wide uppercase letterspacing-wider">
        {label}
      </p>
      
      {/* Subtle border glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
           style={{
             background: 'linear-gradient(135deg, transparent, rgba(255,255,255,0.03), transparent)',
             mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
             maskComposite: 'xor'
           }} />
    </div>
  );
};

export function StatsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const stats = [
    { end: 50, label: "Happy Clients", Icon: Smile, plus: true },
    { end: 50, label: "Projects Completed", Icon: Briefcase, plus: true },
    { end: 3, label: "Years Experience", Icon: Calendar, plus: true },
    { end: 20, label: "Team Members", Icon: Users, plus: true },
    { end: 6, label: "Industries Served", Icon: Building, plus: true },
  ];

  return (
    <section
      ref={ref}
      id="stats"
      className="relative py-20 md:py-32 bg-black overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/[0.02] to-transparent" />
        
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        </div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative container mx-auto px-6 max-w-screen-xl">
        {/* Enhanced header section */}
        <div className={cn(
          "text-center mb-16 md:mb-20 transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="relative inline-block">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400 mb-6 tracking-tight">
              Our Achievements
            </h2>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-3 h-3 bg-primary rounded-full animate-ping" />
            <div className="absolute -top-2 -right-6 w-2 h-2 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          
          <div className="relative max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-neutral-400 leading-relaxed font-light">
              Our success is measured by the numbers that matter most—satisfied clients, successful projects, and lasting partnerships.
            </p>
            
            {/* Subtle accent line */}
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6 animate-pulse" />
          </div>
        </div>
        
        {/* Stats grid with enhanced spacing and layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {stats.map((stat, index) => (
            <StatItem key={stat.label} {...stat} isVisible={isVisible} index={index} />
          ))}
        </div>
      </div>
      
      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}