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
      const timer = setTimeout(() => startAnimation(), index * 100);
      hasAnimated.current = true;
      return () => clearTimeout(timer);
    }
  }, [isVisible, startAnimation, index]);

  return (
    <div
      className={cn(
        "text-center p-6 bg-neutral-900/50 backdrop-blur-sm rounded-xl border border-white/10 transition-all duration-500 transform-gpu",
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex justify-center items-center mb-4">
        <Icon className="h-10 w-10 text-primary" />
      </div>
      <p className="text-4xl md:text-5xl font-bold text-white">
        {count}{plus && '+'}
      </p>
      <p className="text-sm text-neutral-400 mt-2">{label}</p>
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
      className="py-16 md:py-24 bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/darkblack.png')" }}
    >
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Achievements</h2>
          <p className="text-lg text-neutral-300 mx-auto max-w-2xl">
            Our success is measured by the numbers that matter most—satisfied clients, successful projects, and lasting partnerships.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <StatItem key={stat.label} {...stat} isVisible={isVisible} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
