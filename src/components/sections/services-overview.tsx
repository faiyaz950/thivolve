"use client";

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
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
  { src: "https://images.unsplash.com/photo-1618236122998-3a2b7ae7e1df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxhYnN0cmFjdCUyMGxvZ298ZW58MHx8fHwxNzQ4MzM2MzgwfDA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Abstract Sphere Logo", hint: "abstract logo" },
  { src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxsb2dvfGVufDB8fHx8MTc0ODM5MzM4N3ww&ixlib=rb-4.1.0&q=80&w=1080", alt: "Geometric Company Logo", hint: "company logo" },
  { src: "https://images.unsplash.com/photo-1549268393-2144e991ba42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxtb25vZ3JhbSUyMGxvZ298ZW58MHx8fHwxNzQ4MzM2MzgwfDA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Monogram Logo", hint: "monogram logo" },
  { src: "https://images.unsplash.com/photo-1606135887196-99e693e5a5c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxtaW5pbWFsaXN0JTIwbG9nb3xlbnwwfHx8fDE3NDgzMzYzODB8MA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Minimalist Brand Logo", hint: "minimalist logo" },
  { src: "https://images.unsplash.com/photo-1611117775522-5a3371954152?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxzeW1ib2wlMjBsb2dvfGVufDB8fHx8MTc0ODM5MzQyMnww&ixlib=rb-4.1.0&q=80&w=1080", alt: "Symbolic Tech Logo", hint: "symbol logo" },
  { src: "https://images.unsplash.com/photo-1524311518928-857c436c6413?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxmaW5hbmNlJTIwbG9nb3xlbnwwfHx8fDE3NDgzMzYzODB8MA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Finance Corp Logo", hint: "finance logo" },
  { src: "https://images.unsplash.com/photo-1622359997463-13abb42a63e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxoZWFsdGhjYXJlJTIwbG9nb3xlbnwwfHx8fDE3NDgzMzYzODB8MA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Healthcare Brand Logo", hint: "healthcare logo" },
];


export function ServicesOverview() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="services"
      ref={ref}
      className={cn(
        "relative py-20 md:py-32 text-foreground bg-black overflow-hidden animate-on-scroll",
        isVisible && "is-visible"
      )}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Multiple gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-radial from-primary/[0.03] via-transparent to-transparent" />
        
        {/* Animated floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl animate-pulse opacity-60" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-primary/3 rounded-full filter blur-3xl animate-pulse opacity-40" style={{ animationDuration: '12s', animationDelay: '4s' }} />
        <div className="absolute top-1/2 left-1/6 w-64 h-64 bg-white/[0.01] rounded-full filter blur-2xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `radial-gradient(circle at 30px 30px, white 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }} />
        
        {/* Animated gradient mesh */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-primary/[0.02] to-transparent animate-pulse" style={{ animationDuration: '6s' }} />
        </div>
      </div>

      <div className="relative container mx-auto px-6 max-w-screen-xl">
        {/* Services Section */}
        <div className="mb-20 md:mb-28">
          {/* Enhanced header */}
          <div className={cn(
            "text-center mb-16 md:mb-20 transition-all duration-1000 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}>
            <div className="relative inline-block">
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-500 mb-6 tracking-tight">
                Our Services
              </h2>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-4 h-4 bg-primary rounded-full animate-ping opacity-75" />
              <div className="absolute -top-3 -right-8 w-3 h-3 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
            </div>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service, index) => {
              return (
                <Link 
                  href={`/services/${service.slug}`} 
                  key={service.slug} 
                  className={cn(
                    "group block p-8 bg-gradient-to-br from-neutral-900/30 via-black/50 to-neutral-900/30 backdrop-blur-xl rounded-3xl border border-white/5 hover:border-white/10 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 relative overflow-hidden",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                  )}
                  style={{ transitionDelay: `${index * 150 + 400}ms` }}
                >
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  
                  {/* Animated border glow */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                       style={{
                         background: 'linear-gradient(135deg, transparent, rgba(255,255,255,0.05), transparent)',
                         mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                         maskComposite: 'xor'
                       }} />
                  
                  {/* Floating particles */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-6 w-1 h-1 bg-white/20 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: '1s' }} />
                  
                  <div className="relative z-10">
                    <h3 className="flex items-center text-xl md:text-2xl font-bold text-white mb-4 transition-all duration-500 group-hover:text-primary group-hover:scale-105">
                      <span className="flex-1">{service.title}</span>
                      <div className="ml-4 p-2 bg-primary/10 rounded-xl border border-primary/20 group-hover:border-primary/40 group-hover:bg-primary/20 transition-all duration-500 group-hover:scale-110">
                        <ArrowRight className="h-5 w-5 text-primary transition-transform duration-500 group-hover:translate-x-1 group-hover:scale-110" />
                      </div>
                    </h3>
                    
                    <p className="text-neutral-400 text-base leading-relaxed mb-6 group-hover:text-neutral-300 transition-colors duration-500">
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
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Partners Section */}
        <div id="partners" className={cn(
          "transition-all duration-1000 delay-800",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
          {/* Enhanced partners header */}
          <div className="text-center mb-16 md:mb-20">
            <div className="relative inline-block">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-300 to-neutral-600 mb-4 tracking-tight">
                Our Clients and Brands We Partner With
              </h2>
              
              {/* Decorative underline */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
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
                <div
                  key={index}
                  className="flex-shrink-0 w-72 mx-6 flex items-center justify-center p-8 bg-gradient-to-br from-neutral-900/20 via-black/40 to-neutral-900/20 backdrop-blur-xl rounded-2xl border border-white/5 hover:border-white/15 shadow-lg hover:shadow-primary/20 transition-all duration-500 aspect-video hover:-translate-y-2 hover:scale-105 group relative overflow-hidden"
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
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}