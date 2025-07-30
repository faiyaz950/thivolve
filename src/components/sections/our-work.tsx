"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Eye, ArrowRight, Award, CheckCircle, TrendingUp, Users, Star,
  Calendar, Globe, Smartphone, BarChart3, Clock, Target
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
      case 'digital marketing': return BarChart3;
      default: return Award;
    }
  };

  const CategoryIcon = getCategoryIcon(category);

  return (
    <div
      className={cn(
        "group relative w-full bg-gradient-to-br from-neutral-800/40 via-neutral-900/60 to-black/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/5 overflow-hidden transition-all duration-700 transform-gpu hover:scale-[1.02] hover:border-white/20 hover:shadow-2xl hover:shadow-primary/20",
        hasAnimated ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-16 rotate-1"
      )}
      style={{
        transitionDelay: `${index * 150}ms`,
        background: 'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0.8) 100%)'
      }}
    >
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute top-3 sm:top-6 left-3 sm:left-4 md:left-6">
          <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-primary/90 to-primary/70 backdrop-blur-md rounded-full border border-primary/30 shadow-lg">
            <CategoryIcon className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
            <p className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">{category}</p>
          </div>
        </div>
        <div className="absolute top-3 sm:top-6 right-3 sm:right-4 md:right-6">
          <div className="flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 bg-black/60 backdrop-blur-md rounded-full border border-white/10">
            <Calendar className="w-3 h-3 text-neutral-300" />
            <p className="text-xs text-neutral-300">{duration}</p>
          </div>
        </div>
      </div>
      <div className="relative p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-white leading-tight">{title}</h3>
        <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">{description}</p>
        <div className="p-3 sm:p-4 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-xl sm:rounded-2xl border border-primary/10">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="p-1.5 sm:p-2 bg-primary/20 rounded-lg sm:rounded-xl">
              <TrendingUp className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-1">Impact</p>
              <p className="text-sm font-bold text-white">{results}</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">Technologies</p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="px-2 sm:px-3 py-1 sm:py-1.5 bg-neutral-800/60 border border-neutral-700/50 rounded-md sm:rounded-lg text-xs text-neutral-300"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-primary hover:text-white text-sm font-bold transition-all duration-500"
        >
          <span>View Case Study</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
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
        "group text-center p-4 sm:p-6 md:p-8 bg-gradient-to-br from-neutral-800/40 via-neutral-900/60 to-black/80 rounded-xl sm:rounded-2xl border border-white/5 transition-all duration-700",
        hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="mb-3 sm:mb-4">
        <div className="inline-flex p-3 sm:p-4 bg-primary/10 rounded-xl sm:rounded-2xl">
          <Icon className="h-6 sm:h-8 w-6 sm:w-8 text-primary" />
        </div>
      </div>
      <p className="text-2xl sm:text-3xl font-black text-white mb-2">{value}</p>
      <p className="text-base sm:text-lg font-bold text-white mb-1">{label}</p>
      <p className="text-sm text-neutral-400">{description}</p>
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
    href: '#our-work',
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
    href: '#our-work',
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
    href: '#our-work',
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
    href: '#our-work',
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
    href: '#our-work',
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
    href: '#our-work',
  },
];

// Updated achievement stats
const achievementStats = [
  { icon: Clock, value: "3+", label: "Years Experience", description: "Building digital solutions" },
  { icon: TrendingUp, value: "200%", label: "Growth Rate", description: "Average client improvement" },
  { icon: Star, value: "4.9/5", label: "Client Rating", description: "Exceeding expectations" },
  { icon: Target, value: "98%", label: "Success Rate", description: "Quality guaranteed" },
];

export function OurWork() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} id="our-work" className="py-12 sm:py-16 md:py-24 bg-black text-white overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-screen-xl">
        {/* Title Section - Mobile Optimized */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="relative inline-block">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400 mb-4 sm:mb-6 tracking-tight">
              Our Work
            </h2>
            <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-2 sm:w-3 h-2 sm:h-3 bg-primary rounded-full animate-ping" />
            <div className="absolute -top-1 sm:-top-2 -right-3 sm:-right-6 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <div className="relative max-w-3xl mx-auto">
            <p className="text-base sm:text-lg md:text-xl text-neutral-400 leading-relaxed font-light px-4 sm:px-0">
              A showcase of impactful work across platforms, showcasing innovation, scalability, and performance.
            </p>
            <div className="w-16 sm:w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4 sm:mt-6 animate-pulse" />
          </div>
        </div>

        {/* Stats - Mobile Responsive Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-16">
          {achievementStats.map((stat, index) => (
            <StatCard key={stat.label} {...stat} isVisible={isVisible} index={index} />
          ))}
        </div>

        {/* Project Cards - Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}