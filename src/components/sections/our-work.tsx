"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Eye, ArrowRight, Award, CheckCircle, TrendingUp, Users, Star,
  Calendar, Globe, Smartphone, BarChart3
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
      case 'digital marketing': return BarChart3;
      default: return Award;
    }
  };

  const CategoryIcon = getCategoryIcon(category);

  return (
    <div
      className={cn(
        "group relative w-full bg-gradient-to-br from-neutral-800/40 via-neutral-900/60 to-black/80 backdrop-blur-xl rounded-3xl border border-white/5 overflow-hidden transition-all duration-700 transform-gpu hover:scale-[1.02] hover:border-white/20 hover:shadow-2xl hover:shadow-primary/20",
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
        <div className="absolute top-6 left-4 sm:left-6">
          <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-primary/90 to-primary/70 backdrop-blur-md rounded-full border border-primary/30 shadow-lg">
            <CategoryIcon className="w-4 h-4 text-white" />
            <p className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">{category}</p>
          </div>
        </div>
        <div className="absolute top-6 right-4 sm:right-6">
          <div className="flex items-center gap-1 px-2 sm:px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full border border-white/10">
            <Calendar className="w-3 h-3 text-neutral-300" />
            <p className="text-xs text-neutral-300">{duration}</p>
          </div>
        </div>
      </div>
      <div className="relative p-6 sm:p-8 space-y-6">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight">{title}</h3>
        <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">{description}</p>
        <div className="p-4 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl border border-primary/10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-xl">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-1">Impact</p>
              <p className="text-sm font-bold text-white">{results}</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">Technologies</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="px-3 py-1.5 bg-neutral-800/60 border border-neutral-700/50 rounded-lg text-xs text-neutral-300"
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
        "group text-center p-6 sm:p-8 bg-gradient-to-br from-neutral-800/40 via-neutral-900/60 to-black/80 rounded-2xl border border-white/5 transition-all duration-700",
        hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="mb-4">
        <div className="inline-flex p-4 bg-primary/10 rounded-2xl">
          <Icon className="h-8 w-8 text-primary" />
        </div>
      </div>
      <p className="text-3xl font-black text-white mb-2">{value}</p>
      <p className="text-lg font-bold text-white mb-1">{label}</p>
      <p className="text-sm text-neutral-400">{description}</p>
    </div>
  );
};

const projectsData = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?...',
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
    imageUrl: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
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
    imageUrl: 'https://images.unsplash.com/photo-1556741533-f6acd647d2fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    aiHint: 'gts car rental mobile app',
    category: 'Mobile Development',
    title: 'GTS Car Rental App',
    description: 'Ola/Uber-style mobile app for booking cars and tracking rides.',
    results: 'Tripled user base within 3 months of launch',
    technologies: ['Flutter', 'Firebase', 'Google Maps API', 'Stripe'],
    duration: '7 months',
    href: '#our-work',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    aiHint: 'fashion ecommerce brand website',
    category: 'Web Application',
    title: 'Golobolosys Fashion Website',
    description: 'Responsive website for Golobolosys Fashion with e-commerce integration.',
    results: 'Increased conversion rate by 65%',
    technologies: ['Next.js', 'TailwindCSS', 'Sanity CMS', 'Stripe'],
    duration: '3 months',
    href: '#our-work',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1605902711622-cfb43c4437d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    aiHint: 'mobile game app rainbow theme',
    category: 'Mobile Development',
    title: 'Rainbow Game App',
    description: 'Colorful mobile game with dynamic levels and leaderboard integration.',
    results: '50,000+ downloads within first 2 months',
    technologies: ['Unity', 'C#', 'Firebase', 'AdMob'],
    duration: '4 months',
    href: '#our-work',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1581091012184-7a4c7d0ef8c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    aiHint: 'erp software business dashboard',
    category: 'Web Application',
    title: 'Custom ERP Software',
    description: 'ERP system to manage HR, sales, procurement, and finances.',
    results: 'Saved 1,200+ man-hours per year',
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'Docker'],
    duration: '9 months',
    href: '#our-work',
  },
];

const achievementStats = [
  { icon: CheckCircle, value: "100+", label: "Projects Completed", description: "Delivered across industries" },
  { icon: Users, value: "50+", label: "Happy Clients", description: "Long-term partnerships" },
  { icon: Star, value: "4.9/5", label: "Client Rating", description: "Exceeding expectations" },
  { icon: TrendingUp, value: "95%", label: "Success Rate", description: "On-time and budget" },
];

export function OurWork() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} id="our-work" className="py-16 sm:py-24 bg-black text-white overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-screen-xl">
        {/* Title like original Our Work section */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400 mb-6 tracking-tight">
              Our Work
            </h2>
            <div className="absolute -top-4 -left-4 w-3 h-3 bg-primary rounded-full animate-ping" />
            <div className="absolute -top-2 -right-6 w-2 h-2 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <div className="relative max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-neutral-400 leading-relaxed font-light">
              A showcase of impactful work across platforms, showcasing innovation, scalability, and performance.
            </p>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6 animate-pulse" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievementStats.map((stat, index) => (
            <StatCard key={stat.label} {...stat} isVisible={isVisible} index={index} />
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
