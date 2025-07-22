"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Eye, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface ProjectCardProps {
  imageUrl: string;
  aiHint: string;
  category: string;
  title: string;
  href: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, aiHint, category, title, href, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 150);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={cn(
        "group relative rounded-xl overflow-hidden shadow-lg hover:shadow-primary/40 transition-all duration-500 bg-neutral-900/50 backdrop-blur-sm border border-white/10 flex flex-col transform-gpu",
        "hover:-translate-y-2 hover:border-primary/50",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
    >
      <Link href={href} className="absolute inset-0 z-10" aria-label={`View case study for ${title}`}></Link>
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          data-ai-hint={aiHint}
          width={400}
          height={300}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
        <p className="text-sm font-semibold text-primary mb-1 uppercase tracking-wider">{category}</p>
        <h3 className="text-lg font-bold text-white mb-2 leading-tight line-clamp-2">{title}</h3>
        <div className="flex items-center text-sm font-medium text-white/80 transition-colors group-hover:text-primary z-20 relative">
          VIEW CASE STUDY <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
};

const allProjectsData = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHx3ZWIlMjBhcHAlMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzQ4MDM5NjM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    aiHint: 'web app dashboard',
    category: 'Web Application',
    title: 'Enterprise Resource Planning System for Manufacturing Client',
    href: '#',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1550792436-181701c71f63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxtb2JpbGUlMjBhcHAlMjBoZWFsdGhjYXJlfGVufDB8fHx8MTc0ODAzOTYzOHww&ixlib=rb-4.1.0&q=80&w=1080',
    aiHint: 'mobile app healthcare',
    category: 'Mobile Development',
    title: 'Telehealth Mobile App for Remote Patient Monitoring',
    href: '#',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1504270997636-07ddfbd48945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwY2FtcGFpZ258ZW58MHx8fHwxNzQ4MDM5NjM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    aiHint: 'digital marketing campaign',
    category: 'Digital Marketing',
    title: 'Successful SEO & Content Strategy for E-commerce Brand',
    href: '#',
  },
  {
    imageUrl: 'https://source.unsplash.com/400x300/?ai,robotics',
    aiHint: 'ai robotics',
    category: 'AI Integration',
    title: 'Automated Warehouse Logistics with AI-Powered Robotics',
    href: '#',
  },
  {
    imageUrl: 'https://source.unsplash.com/400x300/?finance,app',
    aiHint: 'finance app',
    category: 'Fintech',
    title: 'Personal Finance Management App with Budgeting Tools',
    href: '#',
  },
  {
    imageUrl: 'https://source.unsplash.com/400x300/?cloud,security',
    aiHint: 'cloud security',
    category: 'Cybersecurity',
    title: 'Cloud Infrastructure Security Overhaul for a Tech Startup',
    href: '#',
  },
];

export function OurWork() {
  const { ref, isVisible } = useScrollAnimation();
  const [showAllProjects, setShowAllProjects] = useState(false);
  const projectsToShow = showAllProjects ? allProjectsData : allProjectsData.slice(0, 3);

  return (
    <section
      id="our-work"
      ref={ref}
      className={cn(
        "py-16 md:py-24 bg-cover bg-center text-white animate-on-scroll",
        isVisible && "is-visible"
      )}
      style={{ backgroundImage: "url('/tiger.png')" }}
      data-ai-hint="The background image is set to tiger.png from the public folder"
    >
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Work</h2>
          <p className="text-lg text-neutral-200 mx-auto max-w-3xl leading-relaxed">
            We take pride in delivering impactful solutions that drive success for our clients. Explore some of our recent projects.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsToShow.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
        {!showAllProjects && (
          <div className="text-center mt-12 md:mt-16">
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => setShowAllProjects(true)}
              className="border-white text-primary hover:bg-white/10 hover:text-white transition-all duration-300 hover:scale-105 group"
            >
              View All Projects <Eye className="ml-2 h-5 w-5 transition-transform group-hover:rotate-12" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
