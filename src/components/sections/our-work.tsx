"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Eye, ArrowRight, Award, CheckCircle, TrendingUp, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface ProjectCardProps {
  imageUrl: string;
  aiHint: string;
  category: string;
  title: string;
  description: string;
  results: string;
  href: string;
  index: number;
  isVisible: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  imageUrl, 
  aiHint, 
  category, 
  title, 
  description, 
  results, 
  href, 
  index, 
  isVisible 
}) => {
  return (
    <div
      className={cn(
        "group relative p-8 bg-gradient-to-br from-neutral-800/40 via-neutral-900/60 to-black/80 backdrop-blur-xl rounded-3xl border border-white/5 overflow-hidden transition-all duration-700 transform-gpu hover:scale-105 hover:border-white/15 hover:shadow-2xl hover:shadow-primary/20",
        isVisible ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-16 rotate-3"
      )}
      style={{ 
        transitionDelay: `${index * 150}ms`,
        background: 'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0.8) 100%)'
      }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1 -left-1 w-2 h-2 bg-primary/20 rounded-full animate-pulse" />
        <div className="absolute -bottom-1 -right-1 w-1 h-1 bg-primary/30 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 -left-1 w-1 h-1 bg-white/20 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Project image */}
      <div className="relative w-full aspect-[16/9] mb-6 rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all duration-500">
        <Image
          src={imageUrl}
          alt={title}
          data-ai-hint={aiHint}
          width={400}
          height={225}
          className="object-cover w-full h-full group-hover:scale-110 transition-all duration-700 filter group-hover:brightness-110"
        />
        
        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <div className="px-3 py-1.5 bg-primary/90 backdrop-blur-md rounded-full border border-primary/20 shadow-lg">
            <p className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1">
              <Award className="w-3 h-3" />
              {category}
            </p>
          </div>
        </div>
        
        {/* Glow effect on image */}
        <div className="absolute inset-0 bg-primary/20 rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-all duration-500" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-primary transition-all duration-500">
          {title}
        </h3>
        
        <p className="text-neutral-400 text-base leading-relaxed mb-4 group-hover:text-neutral-300 transition-colors duration-500">
          {description}
        </p>
        
        {/* Results section */}
        <div className="flex items-center gap-2 mb-6 p-3 bg-gradient-to-r from-primary/10 to-transparent rounded-xl border border-primary/10 group-hover:border-primary/30 transition-all duration-500">
          <div className="p-1.5 bg-primary/20 rounded-lg">
            <TrendingUp className="w-4 h-4 text-primary" />
          </div>
          <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors duration-500">
            {results}
          </span>
        </div>
        
        {/* CTA Link */}
        <Link 
          href={href}
          className="group/link inline-flex items-center gap-3 text-primary hover:text-white transition-all duration-500 font-semibold relative"
        >
          <span>View Case Study</span>
          <div className="p-2 bg-primary/10 rounded-xl border border-primary/20 group-hover/link:border-primary/40 group-hover/link:bg-primary/20 transition-all duration-500 group-hover/link:scale-110">
            <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover/link:translate-x-1" />
          </div>
          
          {/* Animated underline */}
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/60 group-hover/link:w-full transition-all duration-500" />
        </Link>
      </div>
      
      {/* Subtle border glow effect */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
           style={{
             background: 'linear-gradient(135deg, transparent, rgba(255,255,255,0.03), transparent)',
             mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
             maskComposite: 'xor'
           }} />
    </div>
  );
};

const projectsData = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHx3ZWIlMjBhcHAlMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzQ4MDM5NjM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    aiHint: 'web app dashboard',
    category: 'Web Application',
    title: 'Enterprise Resource Planning System',
    description: 'Comprehensive ERP solution built for a manufacturing client to streamline operations and boost productivity.',
    results: '40% increase in operational efficiency',
    href: '/portfolio',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1550792436-181701c71f63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxtb2JpbGUlMjBhcHAlMjBoZWFsdGhjYXJlfGVufDB8fHx8MTc0ODAzOTYzOHww&ixlib=rb-4.1.0&q=80&w=1080',
    aiHint: 'mobile app healthcare',
    category: 'Mobile Development',
    title: 'Telehealth Mobile Application',
    description: 'Revolutionary mobile app enabling remote patient monitoring and virtual consultations for healthcare providers.',
    results: '85% patient satisfaction increase',
    href: '/portfolio',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1504270997636-07ddfbd48945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwY2FtcGFpZ258ZW58MHx8fHwxNzQ4MDM5NjM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    aiHint: 'digital marketing campaign',
    category: 'Digital Marketing',
    title: 'E-commerce Growth Strategy',
    description: 'Complete digital marketing transformation including SEO optimization and content strategy for online retail success.',
    results: '300% organic traffic growth',
    href: '/portfolio',
  },
];

export function OurWork() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      id="our-work"
      ref={ref}
      className="relative py-20 md:py-32 bg-black overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/[0.02] to-transparent" />
        
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
          <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '3s' }} />
        </div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative container mx-auto px-6 max-w-screen-xl">
        {/* Enhanced header section */}
        <div className={cn(
          "text-center mb-16 md:mb-20 transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="relative inline-block">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400 mb-6 tracking-tight">
              Our Work
            </h2>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-3 h-3 bg-primary rounded-full animate-ping" />
            <div className="absolute -top-2 -right-6 w-2 h-2 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          
          <div className="relative max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-neutral-400 leading-relaxed font-light mb-8">
              Discover how we transform ideas into exceptional digital solutions. Each project represents our commitment to innovation, quality, and client success.
            </p>
            
            {/* Success metrics */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <span className="text-white font-semibold">100+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <span className="text-white font-semibold">50+ Happy Clients</span>
              </div>
            </div>
            
            {/* Subtle accent line */}
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6 animate-pulse" />
          </div>
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16 md:mb-20">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} isVisible={isVisible} />
          ))}
        </div>
        
        {/* Enhanced CTA section */}
        <div className={cn(
          "text-center transition-all duration-1000 delay-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <div className="relative inline-block">
            {/* Background elements */}
            <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-2xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <Button 
              variant="outline" 
              size="lg" 
              className="group relative border-2 border-white/20 text-white hover:bg-primary/10 hover:text-white hover:border-primary/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 backdrop-blur-sm bg-white/5 px-8 py-4"
              asChild
            >
              <Link href="/portfolio" className="flex items-center gap-3">
                <Eye className="h-5 w-5 transition-all duration-500 group-hover:scale-110" />
                <span className="font-semibold text-lg">View Complete Portfolio</span>
                <div className="p-1.5 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all duration-500">
                  <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                </div>
              </Link>
            </Button>
            
            {/* Decorative elements around button */}
            <div className="absolute -top-3 -left-3 w-2 h-2 bg-primary/40 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -bottom-3 -right-3 w-2 h-2 bg-primary/40 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          
          <p className="text-neutral-500 mt-6 text-sm">
            Ready to start your next project? Let's create something amazing together.
          </p>
        </div>
      </div>
      
      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}