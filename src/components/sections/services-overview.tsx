"use client";

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

const services = [
    { slug: 'it-services', title: "IT Services", description: "We leverage technology to provide cutting-edge solutions that elevate your business, from web development to digital marketing." },
    { slug: 'healthcare-services', title: "Healthcare Services", description: "Our healthcare solutions prioritize quality and accessibility, supporting individuals and organizations with care that improves lives." },
    { slug: 'credit-card-sales', title: "Credit Card Sales", description: "We provide secure, convenient payment solutions to help businesses thrive, streamlining transactions for enhanced customer satisfaction." },
    { slug: 'insurance-sales', title: "Insurance Sales", description: "Protecting your future is our priority. We offer comprehensive insurance plans tailored to provide peace of mind." },
    { slug: 'ai-services', title: "AI Services", description: "Leveraging cutting-edge AI to create intelligent solutions for data analysis, automation, and actionable business insights." },
    { slug: 'resource-outsource', title: "Resource Outsource", description: "Supplying skilled professionals and critical expertise for both short-term and long-term projects, boosting your team's capacity." }
];

const partnerLogos = [
  { src: "/bajalo.png", alt: "Bajalo Logo", hint: "bajalo logo" },
  { src: "/globolosys.png", alt: "Globolosys Logo", hint: "globolosys logo" },
  { src: "/gtslogo.png", alt: "GTS Logo", hint: "gts logo" },
  { src: "/hdfc.png", alt: "HDFC Bank Logo", hint: "hdfc logo" },
  { src: "/tirupati_logo_transparent.png", alt: "Tirupati Logo", hint: "tirupati logo" },
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

const PartnerCard = ({ logo, isVisible, index }: {
  logo: typeof partnerLogos[0];
  isVisible: boolean;
  index: number;
}) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      const timer = setTimeout(() => setHasAnimated(true), index * 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, index, hasAnimated]);

  return (
    <div
      className={cn(
        "flex-shrink-0 w-72 mx-6 flex items-center justify-center p-8 bg-gradient-to-br from-neutral-800/40 via-neutral-900/60 to-black/80 backdrop-blur-xl rounded-2xl border border-white/5 shadow-lg hover:shadow-primary/20 transition-all duration-500 aspect-video hover:-translate-y-2 hover:scale-105 group relative overflow-hidden hover:border-white/15",
        hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ 
        transitionDelay: `${index * 50}ms`,
        background: 'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0.8) 100%)'
      }}
    >
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      
      {/* Animated corners */}
      <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-primary/20 group-hover:border-primary/60 transition-colors duration-500 rounded-tl-lg" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-primary/20 group-hover:border-primary/60 transition-colors duration-500 rounded-br-lg" />
      
      <Image
        src={logo.src}
        alt={logo.alt}
        width={180}
        height={80}
        className="relative z-10 object-contain h-16 md:h-20 w-auto brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-500 filter group-hover:drop-shadow-lg"
        data-ai-hint={logo.hint}
      />
    </div>
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
        <div className="mb-20 md:mb-32">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
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

        {/* Partners Section - matching About Us style */}
        <div className={cn(
          "transition-all duration-1000 delay-900",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {/* Enhanced header section */}
          <div className="text-center mb-16 md:mb-20">
            <div className="relative inline-block">
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400 mb-6 tracking-tight">
                Our Partners
              </h3>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-3 h-3 bg-primary rounded-full animate-ping" />
              <div className="absolute -top-2 -right-6 w-2 h-2 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            
            <div className="relative max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-neutral-400 leading-relaxed font-light">
                Trusted by leading brands and organizations who rely on our expertise to deliver exceptional results and drive their success forward.
              </p>
              
              {/* Subtle accent line */}
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6 animate-pulse" />
            </div>
          </div>

          {/* Enhanced scrolling logos */}
          <div
            className="relative w-full overflow-hidden rounded-2xl"
            style={{
              maskImage: 'linear-gradient(to right, transparent, white 15%, white 85%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, white 15%, white 85%, transparent)',
            }}
          >
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/[0.02] to-transparent animate-pulse" style={{ animationDuration: '4s' }} />
            
            <div className="flex w-max animate-infinite-scroll hover:animate-pause">
              {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, index) => (
                <PartnerCard
                  key={index}
                  logo={logo}
                  isVisible={isVisible}
                  index={index % partnerLogos.length}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
