"use client";

import { useEffect, useRef } from 'react';
import { Users, Briefcase, Calendar, Smile, Building, Sparkles, TrendingUp } from 'lucide-react';
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
        "group relative text-center p-5 bg-gradient-to-br from-neutral-900/70 via-black to-neutral-950 backdrop-blur-2xl rounded-2xl border border-white/10 overflow-hidden transition-all duration-700 transform-gpu hover:scale-105 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/25",
        isVisible ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-12 rotate-1"
      )}
      style={{ 
        transitionDelay: `${index * 150}ms`,
      }}
    >
      {/* Animated Gradient Border */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/30 via-blue-500/30 to-primary/30 blur-xl animate-spin-slow" style={{ animationDuration: '6s' }} />
      </div>

      {/* Card Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      {/* Shine Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
      
      {/* Icon Container */}
      <div className="relative flex justify-center items-center mb-4">
        <div className="relative p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl border border-primary/20 group-hover:border-primary/40 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
          <Icon className="h-8 w-8 text-primary group-hover:text-primary/90 transition-all duration-500" />
          
          {/* Icon Glow */}
          <div className="absolute inset-0 bg-primary/30 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
        </div>
        
        {/* Orbiting Particles */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 border border-primary/10 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700" />
        </div>
      </div>
      
      {/* Count Display */}
      <div className="relative mb-2">
        <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-neutral-400 group-hover:from-primary group-hover:via-white group-hover:to-primary transition-all duration-500 tracking-tight">
          {count}{plus && '+'}
        </p>
        
        {/* Count Glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-3xl font-black text-primary opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500">
            {count}{plus && '+'}
          </div>
        </div>
        
        {/* Animated Underline */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-12 transition-all duration-700" />
      </div>
      
      {/* Label */}
      <p className="text-xs font-semibold text-neutral-400 group-hover:text-neutral-200 transition-all duration-500 tracking-wide uppercase leading-tight">
        {label}
      </p>
      
      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/80 transition-all duration-700" />

      {/* Corner Decorations */}
      <div className="absolute top-2 right-2 w-1 h-1 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500" />
      <div className="absolute bottom-2 left-2 w-1 h-1 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500" style={{ animationDelay: '0.5s' }} />
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
      className="relative py-20 bg-black overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        
        {/* Animated Orbs */}
        <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-primary/10 rounded-full filter blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-[350px] h-[350px] bg-blue-500/10 rounded-full filter blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="relative container mx-auto px-6 max-w-7xl">
        {/* Enhanced Header */}
        <div className={cn(
          "text-center mb-14 transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        )}>
          <div className="relative inline-block mb-6">
            {/* Top Decorative Glow */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-primary/10 rounded-full filter blur-3xl animate-pulse" />
            
            <div className="relative">
              <h2 className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-neutral-500 tracking-tight leading-tight mb-2">
                Our Achievements
              </h2>
              <div className="flex items-center justify-center gap-2 mt-2">
                <TrendingUp className="w-4 h-4 text-primary animate-pulse" />
                <p className="text-base text-primary font-bold uppercase tracking-widest">Numbers That Matter</p>
                <TrendingUp className="w-4 h-4 text-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>
            
            {/* Enhanced Underline */}
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full blur-md animate-pulse" />
          </div>
          
          <p className="text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed font-light">
            Our success is measured by the <span className="text-primary font-semibold">numbers that matter</span> most—satisfied clients, successful projects, and lasting partnerships.
          </p>
        </div>
        
        {/* Stats Grid - Compact & Modern */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {stats.map((stat, index) => (
            <StatItem key={stat.label} {...stat} isVisible={isVisible} index={index} />
          ))}
        </div>

        {/* Growth Indicator Badge */}
        <div className={cn(
          "text-center mt-12 transition-all duration-1000 delay-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-full backdrop-blur-xl">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-neutral-300 font-medium text-sm">
              Growing <span className="text-primary font-bold">200%+</span> Year Over Year
            </span>
            <Sparkles className="w-4 h-4 text-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
      </div>
      
      {/* Bottom Fade Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 6s linear infinite;
        }
      `}</style>
    </section>
  );
}