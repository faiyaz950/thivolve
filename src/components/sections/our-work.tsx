"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Eye, ArrowRight, Award, CheckCircle, TrendingUp, Users, Star,
  Calendar, Globe, Smartphone, BarChart3, Clock, Target, Palette, Sparkles
} from 'lucide-react';
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
  imageUrl, aiHint, category, title, description, results,
  technologies, duration, href, index, isVisible
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
      case 'web application': return Globe;
      case 'mobile development': return Smartphone;
      case 'windows application': return BarChart3;
      case 'digital marketing': return TrendingUp;
      case 'graphic design': return Palette;
      default: return Award;
    }
  };

  const CategoryIcon = getCategoryIcon(category);

  return (
    <div
      className={cn(
        "group relative w-full bg-gradient-to-br from-neutral-900/90 via-black to-neutral-950 backdrop-blur-2xl rounded-2xl border border-white/10 overflow-hidden transition-all duration-700 transform-gpu hover:scale-[1.03] hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/25",
        hasAnimated ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-16 rotate-1"
      )}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      {/* Animated Gradient Border */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/30 via-blue-500/30 to-primary/30 blur-xl animate-spin-slow" style={{ animationDuration: '6s' }} />
      </div>

      {/* Card Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700" />

      {/* Image Section */}
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          data-ai-hint={aiHint}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-all duration-700 filter brightness-90 group-hover:brightness-100"
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />
        
        {/* Shine Effect on Hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3 z-10">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-primary via-primary/90 to-primary/80 backdrop-blur-xl rounded-full border border-primary/40 shadow-lg shadow-primary/30 group-hover:shadow-primary/50 transition-all duration-500">
            <CategoryIcon className="w-3.5 h-3.5 text-white flex-shrink-0" />
            <p className="text-[11px] font-bold text-white uppercase tracking-wider leading-none whitespace-nowrap">{category}</p>
          </div>
        </div>
        
        {/* Duration Badge */}
        <div className="absolute top-3 right-3 z-10">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-black/70 backdrop-blur-xl rounded-full border border-white/10 shadow-lg">
            <Clock className="w-3.5 h-3.5 text-primary flex-shrink-0" />
            <p className="text-[11px] text-neutral-200 font-medium leading-none whitespace-nowrap">{duration}</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative p-5 space-y-4">
        {/* Title */}
        <h3 className="text-lg font-black text-white leading-tight line-clamp-2 group-hover:text-primary transition-colors duration-500">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-neutral-400 leading-relaxed line-clamp-2 group-hover:text-neutral-300 transition-colors duration-500">
          {description}
        </p>
        
        {/* Results Section */}
        <div className="relative p-3 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-xl border border-primary/20 overflow-hidden group-hover:border-primary/40 transition-all duration-500">
          {/* Background Pulse */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative flex items-start gap-2.5">
            <div className="p-1.5 bg-primary/20 rounded-lg flex-shrink-0 group-hover:bg-primary/30 transition-colors duration-500">
              <TrendingUp className="w-4 h-4 text-primary" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wider mb-1">Impact</p>
              <p className="text-xs font-bold text-white leading-snug">{results}</p>
            </div>
          </div>
        </div>
        
        {/* Technologies */}
        <div>
          <p className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wider mb-2">Tech Stack</p>
          <div className="flex flex-wrap gap-1.5">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="px-2.5 py-1 bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 border border-neutral-700/50 rounded-lg text-[11px] font-medium text-neutral-300 whitespace-nowrap hover:border-primary/40 hover:text-white transition-all duration-300"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
        
        {/* View Link */}
        <div className="pt-2">
          <Link
            href="/our-work"
            className="inline-flex items-center gap-2 text-primary hover:text-white text-sm font-bold transition-all duration-500 group/link"
          >
            <span>View Details</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary transition-all duration-700" />
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
        "group relative text-center p-5 bg-gradient-to-br from-neutral-900/70 via-black to-neutral-950 rounded-xl border border-white/10 transition-all duration-700 hover:scale-105 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/20 overflow-hidden",
        hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Animated Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Icon */}
      <div className="relative mb-3">
        <div className="inline-flex p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-500">
          <Icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-500" />
        </div>
        {/* Icon Glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
      
      {/* Stats */}
      <div className="relative">
        <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400 mb-1 group-hover:from-primary group-hover:to-primary/70 transition-all duration-500">
          {value}
        </p>
        <p className="text-sm font-bold text-white mb-1 leading-tight">{label}</p>
        <p className="text-xs text-neutral-400 leading-tight group-hover:text-neutral-300 transition-colors duration-500">{description}</p>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/80 transition-all duration-700" />
    </div>
  );
};

const projectsData = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    aiHint: 'web app dashboard',
    category: 'Web Application',
    title: 'Enterprise Resource Planning System',
    description: 'Comprehensive ERP solution built for a manufacturing client.',
    results: '40% increase in operational efficiency',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    duration: '6 months',
    href: '/our-work',
  },
  {
    imageUrl: '/testseries.jpeg',
    aiHint: 'windows desktop test series app',
    category: 'Windows Application',
    title: 'Test Series Desktop App',
    description: 'Robust Windows-based test series application for students.',
    results: 'Used by 10k+ students with 92% satisfaction rate',
    technologies: ['.NET', 'WPF', 'SQLite', 'WinForms'],
    duration: '5 months',
    href: '/our-work',
  },
  {
    imageUrl: '/gtslogo.png',
    aiHint: 'gts car rental mobile app',
    category: 'Mobile Development',
    title: 'GTS Car Rental App',
    description: 'Ola/Uber-style mobile app for booking cars and tracking rides.',
    results: 'Tripled user base within 3 months of launch | 60,000+ downloads on Play Store',
    technologies: ['Flutter', 'Firebase', 'Google Maps API', 'Stripe'],
    duration: '7 months',
    href: '/our-work',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    aiHint: 'ai based fashion ecommerce website',
    category: 'Web Application',
    title: 'Golobolosys Fashion Website',
    description: 'AI-powered responsive fashion website with smart recommendations and e-commerce integration.',
    results: 'Increased conversion rate by 65%',
    technologies: ['Next.js', 'TailwindCSS', 'AI/ML', 'Stripe'],
    duration: '3 months',
    href: '/our-work',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    aiHint: 'colorful mobile game app interface',
    category: 'Mobile Development',
    title: 'Rainbow Game App',
    description: 'Colorful mobile game with dynamic levels and leaderboard integration.',
    results: 'Featured on Play Store | 4.8 star rating with 25k+ reviews',
    technologies: ['Unity', 'C#', 'Firebase', 'AdMob'],
    duration: '4 months',
    href: '/our-work',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    aiHint: 'ai based erp software business dashboard',
    category: 'Web Application',
    title: 'Custom ERP Software',
    description: 'AI-powered ERP system to manage HR, sales, procurement, and finances with intelligent automation.',
    results: 'Saved 1,200+ man-hours per year',
    technologies: ['Laravel', 'Vue.js', 'AI/ML', 'Docker'],
    duration: '9 months',
    href: '/our-work',
  },
  {
    imageUrl: '/digi.png',
    aiHint: 'digital marketing campaign',
    category: 'Digital Marketing',
    title: 'Global Brand Campaign',
    description: 'A multi-channel digital marketing strategy to boost brand awareness and lead generation for a new tech product.',
    results: '200% increase in leads in 3 months',
    technologies: ['SEO', 'PPC', 'Social Media', 'Content Marketing'],
    duration: 'Ongoing',
    href: '/our-work',
  },
  {
    imageUrl: '/graph.png',
    aiHint: 'corporate branding design',
    category: 'Graphic Design',
    title: 'Corporate Rebranding',
    description: 'Complete visual identity overhaul for a financial services firm, including logo, brand guidelines, and marketing materials.',
    results: '35% increase in brand recognition',
    technologies: ['Adobe Illustrator', 'Photoshop', 'InDesign', 'Figma'],
    duration: '2 months',
    href: '/our-work',
  }
];

const achievementStats = [
  { icon: Clock, value: "3+", label: "Years Experience", description: "Building digital solutions" },
  { icon: TrendingUp, value: "200%", label: "Growth Rate", description: "Average client improvement" },
  { icon: Star, value: "4.9/5", label: "Client Rating", description: "Exceeding expectations" },
  { icon: Target, value: "98%", label: "Success Rate", description: "Quality guaranteed" },
];

export function OurWork() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} id="our-work" className="relative py-24 bg-black text-white overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/3 via-transparent to-transparent" />
        
        {/* Animated Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full filter blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="relative container mx-auto px-6 max-w-7xl">
        {/* Enhanced Title Section */}
        <div className={cn(
          "text-center mb-16 transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="relative inline-block mb-8">
            {/* Decorative Elements */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-primary/10 rounded-full filter blur-3xl animate-pulse" />
            
            <div className="relative">
              <h2 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-neutral-500 tracking-tight leading-tight mb-2">
                Our Work
              </h2>
              <div className="flex items-center justify-center gap-2 mt-3">
                <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                <p className="text-lg text-primary font-bold uppercase tracking-widest">Portfolio Excellence</p>
                <Sparkles className="w-5 h-5 text-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>
            
            {/* Enhanced Underline */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full blur-md animate-pulse" />
          </div>
          
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed font-light">
            A showcase of <span className="text-primary font-semibold">impactful work</span> across platforms, demonstrating innovation, scalability, and performance excellence.
          </p>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {achievementStats.map((stat, index) => (
            <StatCard key={stat.label} {...stat} isVisible={isVisible} index={index} />
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          {projectsData.slice(0, 3).map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} isVisible={isVisible} />
          ))}
        </div>

        {/* Enhanced CTA Button */}
        <div className={cn(
          "text-center transition-all duration-1000 delay-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <Button asChild size="lg" className="group relative bg-gradient-to-r from-primary via-primary to-primary/90 hover:from-primary/90 hover:via-primary hover:to-primary text-white transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40 px-10 py-7 text-lg font-bold rounded-xl overflow-hidden">
            <Link href="/our-work" className="flex items-center gap-3">
              {/* Button Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              
              <span className="relative z-10">View All Our Work</span>
              <ArrowRight className="relative z-10 h-6 w-6 transition-all duration-500 group-hover:translate-x-2" />
            </Link>
          </Button>
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
          animation: spin-slow 6s linear infinite;
        }
      `}</style>
    </section>
  );
}