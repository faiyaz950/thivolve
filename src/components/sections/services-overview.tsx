"use client";

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

const services = [
    { slug: 'it-services#mobile-application-development', title: "Mobile App Development", description: "Engage your customers on the go with our intuitive, high-performance native and hybrid mobile apps for both iOS and Android." },
    { slug: 'it-services#website-development', title: "Website Development", description: "We craft responsive, high-performance websites and complex web applications that drive user engagement and deliver business results." },
    { slug: 'it-services#graphics-designing', title: "Web / Graphics Design", description: "Our creative team translates your brand's essence into compelling visual identities, from logos to polished UI/UX designs." },
    { slug: 'it-services#digital-marketing', title: "SEO & Digital Marketing", description: "Expand your reach and generate qualified leads with our data-driven digital marketing, SEO, and content strategies." },
];

const ServiceCard = ({ service, index, isVisible }: {
  service: typeof services[0];
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
    <Link 
      href={`/services/${service.slug}`} 
      className={cn(
        "group relative block p-8 bg-gradient-to-br from-neutral-800/40 via-neutral-900/60 to-black/80 backdrop-blur-xl rounded-2xl border border-white/5 overflow-hidden transition-all duration-700 transform-gpu hover:scale-105 hover:border-white/20 hover:shadow-2xl hover:shadow-primary/20",
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
      
      {/* Content */}
      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300 flex-1">
            {service.title}
          </h3>
          
          {/* Icon container with enhanced styling */}
          <div className="relative flex justify-center items-center ml-4">
            <div className="relative p-3 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/10 group-hover:border-primary/30 transition-all duration-500 group-hover:scale-110">
              <ArrowRight className="h-5 w-5 text-primary group-hover:text-primary/90 transition-all duration-500 filter drop-shadow-lg group-hover:drop-shadow-2xl group-hover:translate-x-1" />
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 rounded-xl opacity-0 group-hover:opacity-50 blur-xl transition-all duration-500 animate-pulse" />
            </div>
          </div>
        </div>
        
        <p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300 leading-relaxed mb-6">
          {service.description}
        </p>
        
        {/* Enhanced progress bar */}
        <div className="relative">
          <div className="w-20 h-1 bg-neutral-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-700 group-hover:w-32 w-16"></div>
          </div>
          
          {/* Glowing effect */}
          <div className="absolute inset-0 w-20 h-1 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm group-hover:w-32"></div>
        </div>
        
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
    </Link>
  );
};


export function ServicesOverview() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-20 md:py-32 bg-black text-white overflow-hidden"
    >
      {/* Enhanced background effects matching About Us */}
      <div className="absolute inset-0">
        {/* Multi-layer gradients */}
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
        {/* Services Section */}
        <div className="mb-24 md:mb-40">
          {/* Enhanced header matching About Us */}
          <div className={cn(
            "text-center mb-16 md:mb-20 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div className="relative inline-block">
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400 mb-6 tracking-tight">
                Our Services
              </h2>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-3 h-3 bg-primary rounded-full animate-ping" />
              <div className="absolute -top-2 -right-6 w-2 h-2 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            
            <div className="relative max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-neutral-400 leading-relaxed font-light">
                Comprehensive solutions designed to drive innovation, efficiency, and growth across diverse industries with cutting-edge technology and expert service.
              </p>
              
              {/* Subtle accent line */}
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6 animate-pulse" />
            </div>
          </div>
          
          {/* Services Grid - matching About Us style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.slug}
                service={service}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Enhanced bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
    </section>
  );
}
