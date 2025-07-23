"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Eye, ArrowRight, Award, CheckCircle, TrendingUp, Users, Star, Calendar, Globe, Smartphone, ShoppingCart, BarChart3 } from 'lucide-react';
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
  technologies: string[];
  duration: string;
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
  technologies,
  duration,
  href, 
  index, 
  isVisible 
}) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      const timer = setTimeout(() => setHasAnimated(true), index * 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible, index, hasAnimated]);

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'web application':
        return Globe;
      case 'mobile development':
        return Smartphone;
      case 'digital marketing':
        return BarChart3;
      default:
        return Award;
    }
  };

  const CategoryIcon = getCategoryIcon(category);

  return (
    <div
      className={cn(
        "group relative bg-gradient-to-br from-neutral-800/40 via-neutral-900/60 to-black/80 backdrop-blur-xl rounded-3xl border border-white/5 overflow-hidden transition-all duration-700 transform-gpu hover:scale-[1.02] hover:border-white/20 hover:shadow-2xl hover:shadow-primary/20",
        hasAnimated ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-16 rotate-1"
      )}
      style={{ 
        transitionDelay: `${index * 150}ms`,
        background: 'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0.8) 100%)'
      }}
    >
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1 -left-1 w-2 h-2 bg-primary/20 rounded-full animate-pulse" />
        <div className="absolute -bottom-1 -right-1 w-1 h-1 bg-primary/30 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 -left-1 w-1 h-1 bg-white/20 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
        <div className="absolute top-4 right-12 w-1 h-1 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
      </div>
      
      {/* Project image with enhanced effects */}
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          data-ai-hint={aiHint}
          width={400}
          height={225}
          className="object-cover w-full h-full group-hover:scale-110 transition-all duration-700 filter group-hover:brightness-110"
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Multi-layer overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Enhanced category badge */}
        <div className="absolute top-6 left-6">
          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/90 to-primary/70 backdrop-blur-md rounded-full border border-primary/30 shadow-lg group-hover:shadow-xl group-hover:shadow-primary/40 transition-all duration-500">
            <CategoryIcon className="w-4 h-4 text-white" />
            <p className="text-sm font-bold text-white uppercase tracking-wider">
              {category}
            </p>
          </div>
        </div>

        {/* Duration badge */}
        <div className="absolute top-6 right-6">
          <div className="flex items-center gap-1 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full border border-white/10">
            <Calendar className="w-3 h-3 text-neutral-300" />
            <p className="text-xs font-medium text-neutral-300">
              {duration}
            </p>
          </div>
        </div>

        {/* Rating stars */}
        <div className="absolute bottom-6 left-6 flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
          ))}
        </div>
        
        {/* Glow effect on image */}
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500" />
      </div>
      
      {/* Content section with enhanced styling */}
      <div className="relative p-8">
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-3 leading-tight group-hover:text-primary transition-all duration-500">
              {title}
            </h3>
            
            <p className="text-neutral-400 text-base leading-relaxed group-hover:text-neutral-300 transition-colors duration-500">
              {description}
            </p>
          </div>
          
          {/* Enhanced results section */}
          <div className="relative p-4 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl border border-primary/10 group-hover:border-primary/30 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-primary/20">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/20 rounded-xl group-hover:bg-primary/30 transition-all duration-500">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-1">Impact</p>
                <p className="text-sm font-bold text-white group-hover:text-primary transition-colors duration-500">
                  {results}
                </p>
              </div>
            </div>
          </div>

          {/* Technologies used */}
          <div className="space-y-3">
            <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Technologies</p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, techIndex) => (
                <div
                  key={tech}
                  className="px-3 py-1.5 bg-neutral-800/60 border border-neutral-700/50 rounded-lg text-xs font-medium text-neutral-300 group-hover:bg-neutral-700/60 group-hover:border-neutral-600/50 group-hover:text-white transition-all duration-500"
                  style={{ transitionDelay: `${techIndex * 50}ms` }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
          
          {/* Enhanced CTA Link */}
          <div className="pt-2">
            <Link 
              href={href}
              className="group/link inline-flex items-center gap-3 text-primary hover:text-white transition-all duration-500 font-bold relative"
            >
              <span className="text-lg">View Case Study</span>
              <div className="relative">
                <div className="p-3 bg-primary/10 rounded-2xl border border-primary/20 group-hover/link:border-primary/40 group-hover/link:bg-primary/20 transition-all duration-500 group-hover/link:scale-110 group-hover/link:shadow-lg group-hover/link:shadow-primary/30">
                  <ArrowRight className="h-5 w-5 transition-transform duration-500 group-hover/link:translate-x-1" />
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-primary/20 rounded-2xl opacity-0 group-hover/link:opacity-50 blur-xl transition-all duration-500" />
              </div>
              
              {/* Animated underline */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/60 group-hover/link:w-full transition-all duration-700" />
            </Link>
          </div>
        </div>
        
        {/* Corner accent */}
        <div className="absolute bottom-4 right-4 w-3 h-3 bg-primary/40 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      {/* Enhanced border glow effect */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
           style={{
             background: 'linear-gradient(135deg, transparent, rgba(255,255,255,0.05), transparent)',
             mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
             maskComposite: 'xor'
           }} />
    </div>
  );
};

const StatCard = ({ icon: Icon, value, label, description, isVisible, index }: {
  icon: React.ElementType;
  value: string;
  label: string;
  description: string;
  isVisible: boolean;
  index: number;
}) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      const timer = setTimeout(() => setHasAnimated(true), index * 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible, index, hasAnimated]);

  return (
    <div
      className={cn(
        "group relative text-center p-8 bg-gradient-to-br from-neutral-800/40 via-neutral-900/60 to-black/80 backdrop-blur-xl rounded-2xl border border-white/5 overflow-hidden transition-all duration-700 transform-gpu hover:scale-105 hover:border-white/20 hover:shadow-2xl hover:shadow-primary/20",
        hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ 
        transitionDelay: `${index * 100}ms`,
        background: 'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0.8) 100%)'
      }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Icon */}
      <div className="relative flex justify-center items-center mb-4">
        <div className="relative p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/10 group-hover:border-primary/30 transition-all duration-500 group-hover:scale-110">
          <Icon className="h-8 w-8 text-primary group-hover:text-primary/90 transition-all duration-500 filter drop-shadow-lg" />
          <div className="absolute inset-0 bg-primary/20 rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-all duration-500" />
        </div>
      </div>
      
      {/* Value */}
      <div className="relative mb-3">
        <p className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-neutral-300 group-hover:from-primary group-hover:via-white group-hover:to-primary transition-all duration-500 filter drop-shadow-lg">
          {value}
        </p>
      </div>
      
      {/* Label */}
      <p className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors duration-500">
        {label}
      </p>
      
      {/* Description */}
      <p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors duration-500 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const projectsData = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHx3ZWIlMjBhcHAlMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzQ4MDM5NjM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    aiHint: 'web app dashboard',
    category: 'Web Application',
    title: 'Enterprise Resource Planning System',
    description: 'Comprehensive ERP solution built for a manufacturing client to streamline operations, inventory management, and boost productivity across all departments.',
    results: '40% increase in operational efficiency',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    duration: '6 months',
    href: '/portfolio',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1550792436-181701c71f63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxtb2JpbGUlMjBhcHAlMjBoZWFsdGhjYXJlfGVufDB8fHx8MTc0ODAzOTYzOHww&ixlib=rb-4.1.0&q=80&w=1080',
    aiHint: 'mobile app healthcare',
    category: 'Mobile Development',
    title: 'Telehealth Mobile Application',
    description: 'Revolutionary mobile app enabling remote patient monitoring, virtual consultations, and seamless healthcare provider communication.',
    results: '85% patient satisfaction increase',
    technologies: ['React Native', 'Firebase', 'WebRTC', 'MongoDB'],
    duration: '8 months',
    href: '/portfolio',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1504270997636-07ddfbd48945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwY2FtcGFpZ258ZW58MHx8fHwxNzQ4MDM5NjM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    aiHint: 'digital marketing campaign',
    category: 'Digital Marketing',
    title: 'E-commerce Growth Strategy',
    description: 'Complete digital marketing transformation including SEO optimization, content strategy, and conversion rate optimization for online retail success.',
    results: '300% organic traffic growth',
    technologies: ['Google Analytics', 'SEMrush', 'HubSpot', 'Shopify'],
    duration: '4 months',
    href: '/portfolio',
  },
];

const achievementStats = [
  {
    icon: CheckCircle,
    value: "100+",
    label: "Projects Completed",
    description: "Successfully delivered across various industries"
  },
  {
    icon: Users,
    value: "50+",
    label: "Happy Clients",
    description: "Long-term partnerships built on trust"
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Client Rating",
    description: "Consistently exceeding expectations"
  },
  {
    icon: TrendingUp,
    value: "95%",
    label: "Success Rate",
    description: "Projects delivered on time and budget"
  }
];

export function OurWork() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      id="our-work"
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
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
          <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '3s' }} />
          <div className="absolute top-2/3 right-1/3 w-72 h-72 bg-primary/8 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }} />
        </div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative container mx-auto px-6 max-w-screen-xl">
        {/* Enhanced header matching About Us style */}
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
            <p className="text-lg md:text-xl text-neutral-400 leading-relaxed font-light">
              Discover how we transform ideas into exceptional digital solutions. Each project represents our commitment to innovation, quality, and measurable client success.
            </p>
            
            {/* Subtle accent line */}
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6 animate-pulse" />
          </div>
        </div>

        {/* Achievement stats section */}
        <div className={cn(
          "mb-20 md:mb-32 transition-all duration-1000 delay-300",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievementStats.map((stat, index) => (
              <StatCard
                key={stat.label}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                description={stat.description}
                isVisible={isVisible}
                index={index}
              />
            ))}
          </div>
        </div>
        
        {/* Projects section */}
        <div className={cn(
          "mb-16 md:mb-20 transition-all duration-1000 delay-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="text-center mb-16">
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400 mb-4 tracking-tight">
              Featured Projects
            </h3>
            <p className="text-lg md:text-xl text-neutral-400 leading-relaxed font-light max-w-2xl mx-auto">
              A showcase of our most impactful work, demonstrating our expertise across different industries and technologies.
            </p>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6 animate-pulse" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
            {projectsData.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} isVisible={isVisible} />
            ))}
          </div>
        </div>
        
        {/* Enhanced CTA section */}
        <div className={cn(
          "text-center transition-all duration-1000 delay-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <div className="relative max-w-2xl mx-auto mb-12">
            <h4 className="text-3xl md:text-4xl font-black text-white mb-4">
              Ready to Start Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
                Next Project?
              </span>
            </h4>
            <p className="text-neutral-400 text-lg mb-8">
              Let's collaborate to create something exceptional. Our team is ready to bring your vision to life.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="group relative border-2 border-primary/30 text-white hover:bg-primary/10 hover:text-white hover:border-primary/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 backdrop-blur-sm bg-gradient-to-r from-primary/5 to-transparent px-8 py-4"
              asChild
            >
              <Link href="/portfolio" className="flex items-center gap-3">
                <Eye className="h-5 w-5 transition-all duration-500 group-hover:scale-110" />
                <span className="font-semibold text-lg">View Complete Portfolio</span>
                <div className="relative">
                  <ArrowRight className="h-5 w-5 transition-all duration-500 group-hover:translate-x-2" />
                  <ArrowRight className="absolute inset-0 h-5 w-5 opacity-0 group-hover:opacity-30 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                </div>
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              className="group relative bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white border-none transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40 px-8 py-4"
              asChild
            >
              <Link href="/contact" className="flex items-center gap-3">
                <span className="font-semibold text-lg">Start Your Project</span>
                <div className="relative">
                  <ArrowRight className="h-5 w-5 transition-all duration-500 group-hover:translate-x-2" />
                  <ArrowRight className="absolute inset-0 h-5 w-5 opacity-0 group-hover:opacity-30 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                </div>
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}