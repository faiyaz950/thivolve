"use client";

import { useState, useEffect } from 'react';
import { Award, Target, Users, Lightbulb, Heart, Shield } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';


const CoreValueCard = ({ icon: Icon, title, description, index, isVisible }: {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
  isVisible: boolean;
}) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      const timer = setTimeout(() => setHasAnimated(true), index * 150);
      return () => clearTimeout(timer);
    }
  }, [isVisible, index, hasAnimated]);

  return (
    <div
      className={cn(
        "group relative text-center p-8 bg-gradient-to-br from-neutral-800/40 via-neutral-900/60 to-black/80 backdrop-blur-xl rounded-2xl border border-white/5 overflow-hidden transition-all duration-700 transform-gpu hover:scale-105 hover:border-white/20 hover:shadow-2xl hover:shadow-primary/20",
        hasAnimated ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-16 rotate-3"
      )}
      style={{ 
        transitionDelay: `${index * 150}ms`,
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
          <Icon className="h-8 w-8 text-primary group-hover:text-primary/90 transition-all duration-500 filter drop-shadow-lg group-hover:drop-shadow-2xl" />
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-primary/20 rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-all duration-500 animate-pulse" />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300 text-center">
          {title}
        </h3>
        
        <p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300 leading-relaxed text-center">
          {description}
        </p>
        
        {/* Animated underline */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-full transition-all duration-700" />
      </div>
      
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

export function CoreValues() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const coreValues = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We embrace cutting-edge technologies to deliver solutions that keep you ahead of the competition."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our priority. We build lasting partnerships through exceptional service and support."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We maintain the highest standards in everything we do, ensuring reliable and impactful results."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every solution is designed with measurable outcomes and tangible business value in mind."
    },
    {
      icon: Heart,
      title: "Passionate Team",
      description: "Our dedicated professionals bring expertise, creativity, and commitment to every project."
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "We prioritize data security and build trust through transparency and reliable service delivery."
    }
  ];

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-1000 delay-900",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      {/* Enhanced header section */}
      <div className="text-center mb-16 md:mb-20">
        <div className="relative inline-block">
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400 mb-6 tracking-tight">
            Our Core Values
          </h3>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-3 h-3 bg-primary rounded-full animate-ping" />
          <div className="absolute -top-2 -right-6 w-2 h-2 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed font-light">
            The principles that guide everything we do and drive our commitment to excellence in every project we undertake.
          </p>
          
          {/* Subtle accent line */}
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6 animate-pulse" />
        </div>
      </div>
      
      {/* Values grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
        {coreValues.map((value, index) => (
          <CoreValueCard
            key={value.title}
            icon={value.icon}
            title={value.title}
            description={value.description}
            index={index}
            isVisible={isVisible}
          />
        ))}
      </div>
    </div>
  );
}
