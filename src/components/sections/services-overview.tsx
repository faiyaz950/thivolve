"use client";

import { ArrowRight, Smartphone, Globe, Palette, Megaphone, Bot, Code, Sparkles, Zap } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

const services = [
    { slug: 'mobile-app-development', title: "Mobile App Development", description: "Engage your customers on the go with our intuitive, high-performance native and hybrid mobile apps for both iOS and Android.", icon: Smartphone },
    { slug: 'website-development', title: "Website Development", description: "We craft responsive, high-performance websites and complex web applications that drive user engagement and deliver business results.", icon: Globe },
    { slug: 'custom-software-development', title: "Custom Software Development", description: "Scalable and secure software solutions designed exclusively for your business to drive efficiency and innovation.", icon: Code },
    { slug: 'graphics-design', title: "Graphics Design", description: "Our creative team translates your brand's essence into compelling visual identities, from logos to polished UI/UX designs.", icon: Palette },
    { slug: 'seo-and-digital-marketing', title: "SEO & Digital Marketing", description: "Expand your reach and generate qualified leads with our data-driven digital marketing, SEO, and content strategies.", icon: Megaphone },
    { slug: 'ai-services', title: "AI Services", description: "Harness the power of Artificial Intelligence to automate processes, derive insights, and drive innovation.", icon: Bot },
];

const ServiceCard = ({ service, index, isVisible }: {
  service: typeof services[0];
  index: number;
  isVisible: boolean;
}) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      const timer = setTimeout(() => setHasAnimated(true), index * 150);
      return () => clearTimeout(timer);
    }
  }, [isVisible, index, hasAnimated]);
  
  const Icon = service.icon;

  return (
    <Link 
      href={`/services/${service.slug}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group relative block p-6 bg-gradient-to-br from-neutral-900/80 via-black to-neutral-950 backdrop-blur-2xl rounded-2xl border border-white/10 overflow-hidden transition-all duration-700 transform-gpu hover:scale-[1.03] hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/25",
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
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Shine Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>

      {/* Content */}
      <div className="relative">
        {/* Icon and Arrow Section */}
        <div className="flex items-start justify-between mb-5">
          {/* Service Icon */}
          <div className="relative">
            <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl border border-primary/20 group-hover:border-primary/40 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
              <Icon className="h-6 w-6 text-primary group-hover:text-primary/90 transition-colors duration-500" />
            </div>
            {/* Icon Glow */}
            <div className="absolute inset-0 bg-primary/20 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
          </div>

          {/* Arrow Icon */}
          <div className="relative">
            <div className="p-2.5 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/10 group-hover:border-primary/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
              <ArrowRight className="h-5 w-5 text-primary transition-all duration-500 group-hover:translate-x-1" />
            </div>
            {/* Arrow Glow */}
            <div className="absolute inset-0 bg-primary/30 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500" />
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-primary transition-all duration-500 mb-3 leading-tight">
            {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors duration-500 leading-relaxed mb-5 line-clamp-3">
          {service.description}
        </p>
        
        {/* Enhanced Progress Bar */}
        <div className="relative">
          <div className="relative w-20 h-1 bg-neutral-800 rounded-full overflow-hidden">
            <div className="absolute inset-0 h-full bg-gradient-to-r from-primary via-primary/80 to-primary rounded-full transition-all duration-700 group-hover:w-full w-14"></div>
          </div>
          
          {/* Glowing Trail */}
          <div className="absolute inset-0 w-20 h-1 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm group-hover:w-full"></div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/80 transition-all duration-700" />

      {/* Corner Decorations */}
      <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500" />
      <div className="absolute bottom-2 left-2 w-1 h-1 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500" style={{ animationDelay: '0.5s' }} />
    </Link>
  );
};


export function ServicesOverview() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-24 bg-black text-white overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        
        {/* Animated Orbs */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full filter blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full filter blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="relative container mx-auto px-6 max-w-7xl">
        {/* Enhanced Header */}
        <div className={cn(
          "text-center mb-16 transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="relative inline-block mb-8">
            {/* Top Decorative Glow */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-primary/10 rounded-full filter blur-3xl animate-pulse" />
            
            <div className="relative">
              <h2 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-neutral-500 tracking-tight leading-tight mb-2">
                Our Services
              </h2>
              <div className="flex items-center justify-center gap-2 mt-3">
                <Zap className="w-5 h-5 text-primary animate-pulse" />
                <p className="text-lg text-primary font-bold uppercase tracking-widest">Solutions That Scale</p>
                <Zap className="w-5 h-5 text-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>
            
            {/* Enhanced Underline */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full blur-md animate-pulse" />
          </div>
          
          <p className="text-xl text-neutral-300 max-w-4xl mx-auto leading-relaxed font-light">
            Comprehensive solutions designed to drive <span className="text-primary font-semibold">innovation, efficiency, and growth</span> across diverse industries with cutting-edge technology.
          </p>
        </div>

        {/* Services Grid - Compact & Modern */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.slug}
              service={service}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Optional: Service Count Badge */}
        <div className={cn(
          "text-center mt-16 transition-all duration-1000 delay-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-full backdrop-blur-xl">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-neutral-300 font-medium text-lg">
              <span className="text-primary font-bold">{services.length}</span> Powerful Services to Transform Your Business
            </span>
            <Sparkles className="w-4 h-4 text-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
      </div>
      
      {/* Bottom Fade Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />

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
    </section>
  );
}