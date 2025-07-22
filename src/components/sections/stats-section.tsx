
"use client";

import { useEffect, useRef, useState } from 'react';
import { Users, Briefcase, Calendar, Smile, Building } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { useCountUp } from '@/hooks/use-count-up';
import { cn } from '@/lib/utils';

const StatItem = ({ end, label, Icon, plus = true, isVisible, index }: { end: number; label: string; Icon: React.ElementType; plus?: boolean; isVisible: boolean; index: number }) => {
  const { count, startAnimation } = useCountUp(end, 2000);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
        startAnimation();
        hasAnimated.current = true;
    }
  }, [isVisible, startAnimation]);

  return (
    <div 
      className={cn(
        "text-center p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg transition-all duration-500 transform-gpu",
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative w-16 h-16 mx-auto mb-4 flex items-center justify-center">
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg animate-pulse"></div>
        <Icon className="relative h-10 w-10 text-primary drop-shadow-lg" />
      </div>
      <p className="text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-md">
        {count}{plus && '+'}
      </p>
      <p className="text-lg text-neutral-300 mt-2">{label}</p>
    </div>
  );
};

export function StatsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

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
      className="py-16 md:py-24 bg-cover bg-center text-white overflow-hidden"
      style={{ backgroundImage: "url('/darkblack.png')" }}
      data-ai-hint="The background image is set to darkblack.png from the public folder"
    >
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-500" style={{ opacity: isVisible ? 1 : 0 }}>
            Proven Track Record
          </h2>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto transition-all duration-500" style={{ opacity: isVisible ? 1 : 0, transitionDelay: '200ms' }}>
            Our success is measured by the numbers that matter.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <StatItem key={stat.label} {...stat} isVisible={isVisible} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
