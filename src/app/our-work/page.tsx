
"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Eye, ArrowRight, Award, CheckCircle, TrendingUp, Users, Star,
  Calendar, Globe, Smartphone, BarChart3, Clock, Target, Palette, Code, Megaphone, Bot
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

interface Project {
  imageUrl: string;
  aiHint: string;
  category: 'Web Application' | 'Mobile Development' | 'Windows Application' | 'Digital Marketing' | 'Graphic Design' | 'AI Services' | 'Custom Software Development';
  title: string;
  description: string;
  detailedDescription: string;
  problemStatement: string;
  solution: string;
  results: string;
  technologies: string[];
  duration: string;
  href: string;
}

const projectsData: Project[] = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    aiHint: 'web app dashboard',
    category: 'Web Application',
    title: 'Enterprise Resource Planning System',
    description: 'Comprehensive ERP solution built for a manufacturing client to streamline operations.',
    detailedDescription: 'A complete ERP system designed to integrate all facets of a manufacturing operation, from inventory management to human resources, into a single, cohesive platform. This solution provided real-time data analytics and automated workflows to enhance decision-making and reduce operational overhead.',
    problemStatement: 'The client was struggling with siloed data across multiple departments, leading to inefficiencies, communication gaps, and costly errors in production and inventory management.',
    solution: 'We developed a custom, cloud-based ERP system with a modular architecture. Key modules included inventory tracking with real-time stock alerts, a CRM for sales management, an HR portal for employee management, and a finance module for automated invoicing and reporting. The system featured a central dashboard with real-time analytics and role-based access control.',
    results: '40% increase in operational efficiency',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
    duration: '6 months',
    href: '#',
  },
  {
    imageUrl: '/testseries.jpeg',
    aiHint: 'windows desktop test series app',
    category: 'Windows Application',
    title: 'Test Series Desktop App',
    description: 'Robust Windows-based test series application for students to prepare for competitive exams.',
    detailedDescription: 'A secure, offline-first desktop application that allows students to take timed mock tests, review their performance with detailed analytics, and access a large question bank without needing a constant internet connection.',
    problemStatement: 'Students in remote areas with poor internet connectivity needed a reliable platform to practice for exams. Existing web-based solutions were inaccessible and often slow.',
    solution: 'We built a native Windows application using WPF that stores test data locally. The app features a secure test-taking environment to prevent cheating, instant score generation, and detailed performance reports with question-wise analysis. An online sync feature allows students to download new tests and upload results when connected.',
    results: 'Used by 10k+ students with 92% satisfaction rate',
    technologies: ['.NET', 'WPF', 'SQLite', 'WinForms'],
    duration: '5 months',
    href: '#',
  },
  {
    imageUrl: '/gtslogo.png',
    aiHint: 'gts car rental mobile app',
    category: 'Mobile Development',
    title: 'GTS Car Rental App',
    description: 'Ola/Uber-style mobile app for booking cars and tracking rides in real-time.',
    detailedDescription: 'A comprehensive ride-hailing application for iOS and Android that connects passengers with drivers. The app includes features like real-time GPS tracking, in-app payments, ride scheduling, and a rating system for both drivers and passengers.',
    problemStatement: 'The client aimed to enter the competitive ride-sharing market with a user-friendly and reliable platform that offered a superior experience to existing services in their target region.',
    solution: 'We developed native iOS and Android apps for passengers and drivers. The solution included a powerful backend to manage bookings, track locations, and process payments. We integrated Google Maps API for navigation, Stripe for payments, and a real-time chat feature for communication between passenger and driver.',
    results: 'Tripled user base within 3 months | 60,000+ downloads',
    technologies: ['Flutter', 'Firebase', 'Google Maps API', 'Stripe'],
    duration: '7 months',
    href: '#',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    aiHint: 'ai based fashion ecommerce website',
    category: 'Web Application',
    title: 'Golobolosys Fashion Website',
    description: 'AI-powered responsive fashion website with smart recommendations and e-commerce.',
    detailedDescription: 'A high-end e-commerce platform for a luxury fashion brand, featuring an AI-powered recommendation engine, virtual try-on features, and a seamless, visually rich shopping experience.',
    problemStatement: 'The brand needed to elevate its online presence to match its luxury status and provide a personalized shopping experience that could increase customer engagement and conversion rates.',
    solution: 'We built a headless e-commerce site using Next.js for the frontend and Shopify as the backend. We developed a custom AI model that analyzes user browsing behavior to provide personalized product recommendations. A virtual try-on feature was integrated using AR.js, allowing users to visualize products on themselves.',
    results: 'Increased conversion rate by 65%',
    technologies: ['Next.js', 'TailwindCSS', 'Shopify API', 'AI/ML', 'Stripe'],
    duration: '3 months',
    href: '#',
  },
    {
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    aiHint: 'colorful mobile game app interface',
    category: 'Mobile Development',
    title: 'Rainbow Game App',
    description: 'Colorful mobile game with dynamic levels and leaderboard integration.',
    detailedDescription: 'An addictive puzzle game for iOS and Android with procedurally generated levels, ensuring a unique experience every time. The game features vibrant graphics, intuitive controls, and social integration with global leaderboards.',
    problemStatement: 'The gaming market is saturated. The client wanted a simple yet engaging game that could stand out with its visuals and have high replayability to retain users.',
    solution: 'We developed the game using Unity, which allowed for cross-platform deployment. We implemented a procedural level generation algorithm and integrated Google Play Games and Apple Game Center for achievements and leaderboards. AdMob was integrated for monetization through rewarded ads.',
    results: 'Featured on Play Store | 4.8 star rating with 25k+ reviews',
    technologies: ['Unity', 'C#', 'Firebase', 'AdMob'],
    duration: '4 months',
    href: '#',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    aiHint: 'ai based erp software business dashboard',
    category: 'Custom Software Development',
    title: 'Custom ERP Software',
    description: 'AI-powered ERP system to manage HR, sales, procurement, and finances with intelligent automation.',
    detailedDescription: 'A bespoke ERP platform for a mid-sized enterprise, designed to automate and integrate core business functions. The software included AI-driven forecasting for sales and inventory, and an automated workflow engine.',
    problemStatement: 'The client was using multiple disconnected software tools for different functions, leading to data redundancy and a lack of a unified view of the business operations, which hampered strategic planning.',
    solution: 'We built a web-based ERP system using Laravel and Vue.js. An AI module was developed with Python to provide predictive analytics for sales forecasting. The system featured role-based dashboards, automated report generation, and was deployed on a scalable cloud infrastructure using Docker.',
    results: 'Saved 1,200+ man-hours per year',
    technologies: ['Laravel', 'Vue.js', 'Python (AI)', 'Docker', 'MySQL'],
    duration: '9 months',
    href: '#',
  },
  {
    imageUrl: '/digi.png',
    aiHint: 'digital marketing campaign',
    category: 'Digital Marketing',
    title: 'Global Brand Campaign',
    description: 'A multi-channel digital marketing strategy to boost brand awareness and lead generation.',
    detailedDescription: 'A comprehensive digital marketing campaign for a B2B SaaS company launching a new product. The campaign spanned SEO, content marketing, PPC, and social media to establish market presence and generate a pipeline of qualified leads.',
    problemStatement: 'The client was launching a new product in a competitive market and needed to quickly build brand awareness and generate high-quality leads to secure early adopters.',
    solution: 'We executed a multi-pronged strategy. This included technical SEO to optimize the new product website, a content marketing plan with blog posts and whitepapers, targeted Google Ads and LinkedIn ad campaigns, and an influencer outreach program on social media. We used HubSpot for lead nurturing and analytics.',
    results: '200% increase in leads in 3 months',
    technologies: ['SEO', 'PPC', 'HubSpot', 'Content Marketing'],
    duration: 'Ongoing',
    href: '#',
  },
  {
    imageUrl: '/graph.png',
    aiHint: 'corporate branding design',
    category: 'Graphic Design',
    title: 'Corporate Rebranding',
    description: 'Complete visual identity overhaul for a financial services firm.',
    detailedDescription: 'A full rebranding project for an established financial services firm to modernize its image and appeal to a younger demographic. The project included a new logo, brand guidelines, website design, and a complete set of marketing collateral.',
    problemStatement: 'The client’s brand identity was outdated and did not resonate with a new generation of investors. They needed a fresh, modern, and trustworthy look to reposition themselves in the market.',
    solution: 'We conducted extensive market research and brand workshops to define the new brand strategy. A new logo and visual identity were designed, emphasizing trust and modernity. We created a comprehensive brand book, redesigned their website, and produced a full suite of digital and print marketing materials, ensuring a consistent brand message across all channels.',
    results: '35% increase in brand recognition',
    technologies: ['Adobe Illustrator', 'Photoshop', 'InDesign', 'Figma'],
    duration: '2 months',
    href: '#',
  }
];

const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Web Application': return Globe;
      case 'Mobile Development': return Smartphone;
      case 'Windows Application': return BarChart3;
      case 'Digital Marketing': return Megaphone;
      case 'Graphic Design': return Palette;
      case 'Custom Software Development': return Code;
      case 'AI Services': return Bot;
      default: return Award;
    }
};

const ProjectDetailCard = ({ project, index, isVisible }: { project: Project; index: number; isVisible: boolean }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  
  useEffect(() => {
    if (isVisible && !hasAnimated) {
      const timer = setTimeout(() => setHasAnimated(true), index * 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible, index, hasAnimated]);
  
  const CategoryIcon = getCategoryIcon(project.category);

  return (
    <div
      className={cn(
        "group relative bg-gradient-to-br from-neutral-900/50 via-black to-neutral-900/50 rounded-3xl border border-white/10 overflow-hidden transition-all duration-1000 transform-gpu",
        hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div>
        <div className="relative aspect-[16/9]">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        </div>
        <div className="p-8 md:p-12 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                <CategoryIcon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">{project.category}</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">{project.title}</h3>
            <p className="text-neutral-400 leading-relaxed mb-6">{project.detailedDescription}</p>

            <div className="space-y-6 mb-8">
              <div>
                <h4 className="font-bold text-white mb-2">The Challenge</h4>
                <p className="text-neutral-400 text-sm leading-relaxed">{project.problemStatement}</p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">Our Solution</h4>
                <p className="text-neutral-400 text-sm leading-relaxed">{project.solution}</p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="p-4 bg-gradient-to-r from-primary/10 to-transparent rounded-xl border border-primary/10 mb-6">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/20 rounded-lg"><TrendingUp className="w-5 h-5 text-primary" /></div>
                    <div>
                        <p className="text-sm font-medium text-neutral-400">Result</p>
                        <p className="font-bold text-white">{project.results}</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map(tech => (
                <span key={tech} className="px-3 py-1 bg-neutral-800 text-neutral-300 text-xs font-medium rounded-full border border-neutral-700">{tech}</span>
              ))}
            </div>

            <div className="flex items-center gap-4 text-neutral-400 text-sm">
                <div className="flex items-center gap-2"><Calendar className="w-4 h-4"/><span>{project.duration}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default function OurWorkPage() {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

    return (
        <div className="bg-black text-white">
            <Header />
            <main>
                <section
                    ref={ref}
                    className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex items-center justify-center overflow-hidden"
                >
                    <div className="absolute inset-0">
                        <Image
                            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwd29ya2luZ3xlbnwwfHx8fDE3NDg4NTAwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                            alt="Team collaborating on a project"
                            fill
                            className="object-cover opacity-20"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                    </div>

                    <div className={cn(
                        "relative z-20 text-center px-6 max-w-4xl mx-auto transition-all duration-1000",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}>
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400 tracking-tight">
                            Our Portfolio
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-neutral-300 leading-relaxed max-w-3xl mx-auto">
                            We build solutions that drive results. Explore a selection of our projects that showcase our commitment to innovation, quality, and client success.
                        </p>
                    </div>
                </section>

                <section className="py-20 md:py-32 bg-black">
                    <div className="container mx-auto px-6 max-w-screen-xl">
                        <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
                            {projectsData.map((project, index) => (
                                <ProjectDetailCard key={project.title} project={project} index={index} isVisible={isVisible} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
