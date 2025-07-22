
"use client";

import { useEffect, useRef } from 'react';
import { Users, Briefcase, Calendar, Smile, Building } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { useCountUp } from '@/hooks/use-count-up';
import { cn } from '@/lib/utils';

const StatItem = ({ end, label, Icon, plus = true }: { end: number; label: string; Icon: React.ElementType; plus?: boolean; }) => {
  const { count, startAnimation } = useCountUp(end, 2000);
  const ref = useRef(false);

  useEffect(() => {
    // This effect will be triggered by the parent's visibility state
    if (!ref.current) {
        startAnimation();
        ref.current = true;
    }
  }, [startAnimation]);

  return (
    <div className="text-center">
      <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
      <p className="text-4xl md:text-5xl font-bold text-white">
        {count}{plus && '+'}
      </p>
      <p className="text-lg text-neutral-300 mt-2">{label}</p>
    </div>
  );
};

export function StatsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.5 });

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
      className={cn(
        "py-16 md:py-24 bg-neutral-900 text-white animate-on-scroll",
        isVisible && "is-visible"
      )}
    >
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {isVisible && stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
