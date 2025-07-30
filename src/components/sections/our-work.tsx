"use client";

import { useState, useEffect } from 'react';
import {
  Eye, ArrowRight, Award, CheckCircle, TrendingUp, Users, Star,
  Calendar, Globe, Smartphone, BarChart3, Clock, Target, Palette
} from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';


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
  const [imageError, setImageError] = useState(false);

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
        "group relative w-full bg-gradient-to-br from-neutral-800/40 via-neutral-900/60 to-black/80 backdrop-blur-xl rounded-xl sm:rounded-2xl lg:rounded-3xl border border-white/5 overflow-hidden transition-all duration-700 transform-gpu hover:scale-[1.02] hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/20",
        hasAnimated ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-16 rotate-1"
      )}
      style={{
        transitionDelay: `${index * 150}ms`,
        background: 'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0.8) 100%)'
      }}
    >
      {/* Image Section */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[4/3] lg:aspect-[16/9] overflow-hidden">
        {!imageError ? (
          <img
            src={imageUrl}
            alt={title}
            data-ai-hint={aiHint}
            className="object-cover w-full h-full group-hover:scale-110 transition-all duration-700 filter group-hover:brightness-110"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
            <div className="text-center">
              <CategoryIcon className="w-12 h-12 text-purple-400 mx-auto mb-2" />
              <p className="text-sm text-neutral-400">{category}</p>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-2 sm:top-3 lg:top-4 left-2 sm:left-3 lg:left-4">
          <div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-purple-500/90 to-blue-500/70 backdrop-blur-md rounded-full border border-purple-400/30 shadow-lg">
            <CategoryIcon className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
            <p className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider leading-none">{category}</p>
          </div>
        </div>
        
        {/* Duration Badge */}
        <div className="absolute top-2 sm:top-3 lg:top-4 right-2 sm:right-3 lg:right-4">
          <div className="flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 bg-black/60 backdrop-blur-md rounded-full border border-white/10">
            <Calendar className="w-3 h-3 text-neutral-300" />
            <p className="text-xs text-neutral-300 leading-none">{duration}</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative p-3 sm:p-4 lg:p-6 xl:p-8 space-y-3 sm:space-y-4 lg:space-y-6">
        {/* Title */}
        <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-black text-white leading-tight line-clamp-2">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-sm sm:text-base text-neutral-400 leading-relaxed line-clamp-3">
          {description}
        </p>
        
        {/* Results */}
        <div className="p-3 sm:p-4 bg-gradient-to-r from-purple-500/10 via-purple-500/5 to-transparent rounded-xl border border-purple-500/10">
          <div className="flex items-start gap-2 sm:gap-3">
            <div className="p-1.5 sm:p-2 bg-purple-500/20 rounded-lg flex-shrink-0 mt-0.5">
              <TrendingUp className="w-4 sm:w-5 h-4 sm:h-5 text-purple-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-1">Impact</p>
              <p className="text-sm font-bold text-white leading-snug">{results}</p>
            </div>
          </div>
        </div>
        
        {/* Technologies */}
        <div>
          <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">Technologies</p>
          <div className="flex flex-wrap gap-1.5">
            {technologies.slice(0, 6).map((tech) => (
              <div
                key={tech}
                className="px-2 sm:px-3 py-1 sm:py-1.5 bg-neutral-800/60 border border-neutral-700/50 rounded-md text-xs text-neutral-300 leading-none"
              >
                {tech}
              </div>
            ))}
            {technologies.length > 6 && (
              <div className="px-2 sm:px-3 py-1 sm:py-1.5 bg-neutral-700/60 border border-neutral-600/50 rounded-md text-xs text-neutral-400 leading-none">
                +{technologies.length - 6}
              </div>
            )}
          </div>
        </div>
        
        {/* View Case Study Link */}
        <button
          onClick={() => window.location.href = href}
          className="inline-flex items-center gap-2 text-purple-400 hover:text-white text-sm font-bold transition-all duration-500 group/link"
        >
          <span>View Case Study</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
        </button>
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
        "group text-center p-3 sm:p-4 lg:p-6 xl:p-8 bg-gradient-to-br from-neutral-800/40 via-neutral-900/60 to-black/80 rounded-xl sm:rounded-2xl border border-white/5 transition-all duration-700 hover:border-white/20 hover:scale-105",
        hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="mb-2 sm:mb-3 lg:mb-4">
        <div className="inline-flex p-2 sm:p-3 lg:p-4 bg-purple-500/10 rounded-xl">
          <Icon className="h-5 sm:h-6 lg:h-8 w-5 sm:w-6 lg:w-8 text-purple-400" />
        </div>
      </div>
      <p className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-1 sm:mb-2">{value}</p>
      <p className="text-sm sm:text-base lg:text-lg font-bold text-white mb-1">{label}</p>
      <p className="text-xs sm:text-sm text-neutral-400 leading-snug">{description}</p>
    </div>
  );
};

const projectsData = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    aiHint: 'web app dashboard',
    category: 'Web Application',
    title: 'Enterprise Resource Planning System',
    description: 'Comprehensive ERP solution built for a manufacturing client with advanced analytics and automation.',
    results: '40% increase in operational efficiency',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Redis'],
    duration: '6 months',
    href: '#our-work',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    aiHint: 'windows desktop test series app',
    category: 'Windows Application',
    title: 'Test Series Desktop App',
    description: 'Robust Windows-based test series application for students with offline capabilities and detailed analytics.',
    results: 'Used by 10k+ students with 92% satisfaction rate',
    technologies: ['.NET', 'WPF', 'SQLite', 'WinForms', 'SignalR'],
    duration: '5 months',
    href: '#our-work',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    aiHint: 'gts car rental mobile app',
    category: 'Mobile Development',
    title: 'GTS Car Rental App',
    description: 'Ola/Uber-style mobile app for booking cars and tracking rides with real-time GPS and payment integration.',
    results: 'Tripled user base within 3 months of launch | 60,000+ downloads on Play Store',
    technologies: ['Flutter', 'Firebase', 'Google Maps API', 'Stripe', 'Push notifications'],
    duration: '7 months',
    href: '#our-work',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    aiHint: 'ai based fashion ecommerce website',
    category: 'Web Application',
    title: 'Golobolosys Fashion Website',
    description: 'AI-powered responsive fashion website with smart recommendations and seamless e-commerce integration.',
    results: 'Increased conversion rate by 65%',
    technologies: ['Next.js', 'TailwindCSS', 'AI/ML', 'Stripe', 'Prisma'],
    duration: '3 months',
    href: '#our-work',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    aiHint: 'colorful mobile game app interface',
    category: 'Mobile Development',
    title: 'Rainbow Game App',
    description: 'Colorful mobile game with dynamic levels, leaderboard integration, and social features.',
    results: 'Featured on Play Store | 4.8 star rating with 25k+ reviews',
    technologies: ['Unity', 'C#', 'Firebase', 'AdMob', 'Analytics'],
    duration: '4 months',
    href: '#our-work',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    aiHint: 'ai based erp software business dashboard',
    category: 'Web Application',
    title: 'Custom ERP Software',
    description: 'AI-powered ERP system to manage HR, sales, procurement, and finances with intelligent automation and reporting.',
    results: 'Saved 1,200+ man-hours per year',
    technologies: ['Laravel', 'Vue.js', 'AI/ML', 'Docker', 'MySQL', 'Redis'],
    duration: '9 months',
    href: '#our-work',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    aiHint: 'digital marketing campaign',
    category: 'Digital Marketing',
    title: 'Global Brand Campaign',
    description: 'A multi-channel digital marketing strategy to boost brand awareness and lead generation for a new tech product.',
    results: '200% increase in leads in 3 months',
    technologies: ['SEO', 'PPC', 'Social Media', 'Content Marketing', 'Analytics'],
    duration: 'Ongoing',
    href: '#our-work',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    aiHint: 'corporate branding design',
    category: 'Graphic Design',
    title: 'Corporate Rebranding',
    description: 'Complete visual identity overhaul for a financial services firm, including logo, brand guidelines, and marketing materials.',
    results: '35% increase in brand recognition',
    technologies: ['Adobe Illustrator', 'Photoshop', 'InDesign', 'Figma', 'Brand Strategy'],
    duration: '2 months',
    href: '#our-work',
  }
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
    <section ref={ref} id="our-work" className="py-8 sm:py-12 lg:py-16 xl:py-24 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 max-w-7xl">
        {/* Title Section - Fully Responsive */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="relative inline-block">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400 mb-3 sm:mb-4 lg:mb-6 tracking-tight leading-none">
              Our Work
            </h2>
            <div className="absolute -top-1 sm:-top-2 lg:-top-4 -left-1 sm:-left-2 lg:-left-4 w-2 sm:w-3 h-2 sm:h-3 bg-purple-500 rounded-full animate-ping" />
            <div className="absolute -top-0.5 sm:-top-1 lg:-top-2 -right-2 sm:-right-3 lg:-right-6 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-purple-400/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-0">
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-neutral-400 leading-relaxed font-light">
              A showcase of impactful work across platforms, demonstrating innovation, scalability, and performance excellence.
            </p>
            <div className="w-12 sm:w-16 lg:w-24 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mt-3 sm:mt-4 lg:mt-6 animate-pulse" />
          </div>
        </div>

        {/* Stats - Mobile-First Responsive Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4 xl:gap-6 mb-8 sm:mb-12 lg:mb-16">
          {achievementStats.map((stat, index) => (
            <StatCard key={stat.label} {...stat} isVisible={isVisible} index={index} />
          ))}
        </div>

        {/* Project Cards - Responsive Grid with Better Mobile Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}