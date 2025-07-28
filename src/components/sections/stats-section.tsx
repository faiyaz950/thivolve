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
      const timer = setTimeout(() => startAnimation(), index * 150);
      hasAnimated.current = true;
      return () => clearTimeout(timer);
    }
  }, [isVisible, startAnimation, index]);

  return (
    <div
      className={cn(
        "group relative text-center p-6 md:p-8 bg-gradient-to-br from-neutral-900/60 via-neutral-950/80 to-black/90 backdrop-blur-2xl rounded-3xl border border-white/[0.08] overflow-hidden transition-all duration-700 transform-gpu hover:scale-[1.02] hover:border-white/20 hover:shadow-2xl hover:shadow-primary/10",
        isVisible ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-12 rotate-1"
      )}
      style={{ 
        transitionDelay: `${index * 150}ms`,
        background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0.9) 100%)',
        boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.05), 0 1px 3px 0 rgba(0,0,0,0.7)'
      }}
    >
      {/* Premium glass morphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
      
      {/* Subtle animated border */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
           style={{
             background: 'conic-gradient(from 180deg at 50% 50%, transparent 0deg, rgba(255,255,255,0.05) 180deg, transparent 360deg)',
             padding: '1px',
             mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
             maskComposite: 'xor'
           }} />
      
      {/* Floating orbs effect */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <div className="absolute top-3 right-3 w-1 h-1 bg-primary/40 rounded-full animate-pulse" />
        <div className="absolute bottom-4 left-3 w-0.5 h-0.5 bg-white/30 rounded-full animate-ping" style={{ animationDelay: '1.5s' }} />
      </div>
      
      {/* Icon container with premium styling */}
      <div className="relative flex justify-center items-center mb-5">
        <div className="relative p-3 bg-gradient-to-br from-primary/[0.08] via-primary/[0.03] to-transparent rounded-2xl border border-primary/[0.06] group-hover:border-primary/20 transition-all duration-500 group-hover:scale-105">
          <Icon className="h-10 w-10 md:h-11 md:w-11 text-primary group-hover:text-primary/95 transition-all duration-500 filter drop-shadow-sm group-hover:drop-shadow-lg" />
          
          {/* Subtle inner glow */}
          <div className="absolute inset-0 bg-primary/10 rounded-2xl opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500" />
        </div>
      </div>
      
      {/* Count display with refined styling */}
      <div className="relative mb-3">
        <p className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-neutral-300 group-hover:from-primary/90 group-hover:via-white group-hover:to-primary/90 transition-all duration-500 filter drop-shadow-sm tracking-tight">
          {count}{plus && '+'}
        </p>
        
        {/* Refined underline animation */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent group-hover:w-16 transition-all duration-700" />
      </div>
      
      {/* Label with enhanced typography */}
      <p className="text-xs md:text-sm font-semibold text-neutral-400 group-hover:text-neutral-300 transition-all duration-500 tracking-wider uppercase">
        {label}
      </p>
      
      {/* Premium inner shadow */}
      <div className="absolute inset-0 rounded-3xl shadow-inner opacity-20" style={{
        boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.5), inset 0 -1px 1px rgba(255,255,255,0.02)'
      }} />
    </div>
  );
};

export function StatsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const stats = [
    { end: 26, label: "Happy Clients", Icon: Smile, plus: true },
    { end: 31, label: "Projects Completed", Icon: Briefcase, plus: true },
    { end: 3, label: "Years Experience", Icon: Calendar, plus: true },
    { end: 20, label: "Team Members", Icon: Users, plus: true },
    { end: 6, label: "Industries Served", Icon: Building, plus: true },
  ];

  return (
    <section
      ref={ref}
      id="stats"
      className="relative py-16 md:py-24 bg-black overflow-hidden"
    >
      {/* Refined background layers */}
      <div className="absolute inset-0">
        {/* Primary background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950/90 to-black" />
        
        {/* Subtle accent gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/[0.008] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.005] to-transparent" />
        
        {/* Premium mesh background */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/3 left-1/5 w-72 h-72 bg-primary/[0.06] rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-1/3 right-1/5 w-64 h-64 bg-primary/[0.04] rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '3s' }} />
        </div>
        
        {/* Refined grid pattern */}
        <div className="absolute inset-0 opacity-[0.008]" style={{
          backgroundImage: `radial-gradient(circle at 20px 20px, white 0.5px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative container mx-auto px-6 max-w-7xl">
        {/* Premium header section */}
        <div className={cn(
          "text-center mb-12 md:mb-16 transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        )}>
          <div className="relative inline-block mb-4">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-neutral-400 tracking-tight">
              Our Achievements
            </h2>
            
            {/* Refined decorative elements */}
            <div className="absolute -top-2 -left-2 w-2 h-2 bg-primary/60 rounded-full animate-pulse" />
            <div className="absolute -top-1 -right-3 w-1 h-1 bg-primary/40 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
          </div>
          
          <div className="relative max-w-2xl mx-auto">
            <p className="text-base md:text-lg text-neutral-400 leading-relaxed font-light">
              Our success is measured by the numbers that matter most—satisfied clients, successful projects, and lasting partnerships.
            </p>
            
            {/* Elegant accent line */}
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent mx-auto mt-5 animate-pulse" style={{ animationDuration: '3s' }} />
          </div>
        </div>
        
        {/* Optimized stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-5">
          {stats.map((stat, index) => (
            <StatItem key={stat.label} {...stat} isVisible={isVisible} index={index} />
          ))}
        </div>
      </div>
      
      {/* Refined bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
    </section>
  );
}