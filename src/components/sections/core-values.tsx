"use client";

import { useState, useEffect } from 'react';
import { Award, Target, Users, Lightbulb, Heart, Shield, Sparkles, Star } from 'lucide-react';
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
        "group relative text-center p-6 bg-gradient-to-br from-neutral-900/80 via-black to-neutral-950 backdrop-blur-2xl rounded-2xl border border-white/10 overflow-hidden transition-all duration-700 transform-gpu hover:scale-[1.05] hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/30",
        hasAnimated ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-16 rotate-2"
      )}
      style={{ 
        transitionDelay: `${index * 150}ms`,
      }}
    >
      {/* Animated Gradient Border */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/30 via-blue-500/30 to-primary/30 blur-xl animate-spin-slow" style={{ animationDuration: '8s' }} />
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
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent -translate-x-full -translate-y-full group-hover:translate-x-full group-hover:translate-y-full transition-transform duration-1000" />
      </div>
      
      {/* Icon Container */}
      <div className="relative flex justify-center items-center mb-5">
        <div className="relative p-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl border border-primary/20 group-hover:border-primary/40 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
          <Icon className="h-8 w-8 text-primary group-hover:text-primary/90 transition-all duration-500" />
          
          {/* Icon Glow */}
          <div className="absolute inset-0 bg-primary/30 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
        </div>
        
        {/* Orbiting Ring */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 border border-primary/10 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700" />
        </div>

        {/* Floating Stars */}
        <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <Sparkles className="w-3 h-3 text-primary animate-pulse" />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative">
        <h3 className="text-lg font-black text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-primary transition-all duration-500 leading-tight">
          {title}
        </h3>
        
        <p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors duration-500 leading-relaxed">
          {description}
        </p>
        
        {/* Animated Progress Bar */}
        <div className="relative mt-4">
          <div className="w-16 h-0.5 bg-neutral-800 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-700 group-hover:w-full w-10"></div>
          </div>
          
          {/* Glowing Trail */}
          <div className="absolute inset-0 flex justify-center">
            <div className="w-16 h-0.5 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm group-hover:w-full"></div>
          </div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/80 transition-all duration-700" />

      {/* Corner Decorations */}
      <div className="absolute top-2 left-2 w-1 h-1 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500" />
      <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500" style={{ animationDelay: '0.5s' }} />
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
      {/* Enhanced Header Section */}
      <div className="text-center mb-16">
        <div className="relative inline-block mb-6">
          {/* Top Decorative Glow */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-primary/10 rounded-full filter blur-3xl animate-pulse" />
          
          <div className="relative">
            <h3 className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-neutral-500 tracking-tight leading-tight mb-2">
              Our Core Values
            </h3>
            <div className="flex items-center justify-center gap-2 mt-3">
              <Star className="w-4 h-4 text-primary animate-pulse" />
              <p className="text-base text-primary font-bold uppercase tracking-widest">Principles We Live By</p>
              <Star className="w-4 h-4 text-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
          
          {/* Enhanced Underline */}
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full blur-md animate-pulse" />
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          <p className="text-lg text-neutral-300 leading-relaxed font-light">
            The <span className="text-primary font-semibold">principles that guide</span> everything we do and drive our commitment to excellence in every project we undertake.
          </p>
        </div>
      </div>
      
      {/* Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Trust Badge */}
      <div className={cn(
        "text-center mt-12 transition-all duration-1000 delay-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}>
        <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-full backdrop-blur-xl">
          <Shield className="w-4 h-4 text-primary" />
          <span className="text-neutral-300 font-medium text-base">
            Trusted by <span className="text-primary font-bold">26+</span> Happy Clients Worldwide
          </span>
          <Shield className="w-4 h-4 text-primary" />
        </div>
      </div>

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
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}