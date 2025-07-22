
"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';

const allProjectsData = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHx3ZWIlMjBhcHAlMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzQ4MDM5NjM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    aiHint: 'web app dashboard',
    category: 'Web Application',
    title: 'Enterprise Resource Planning System',
    description: 'A comprehensive ERP system for a manufacturing client to streamline their operations, from inventory to sales.',
    href: '#',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1550792436-181701c71f63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxtb2JpbGUlMjBhcHAlMjBoZWFsdGhjYXJlfGVufDB8fHx8MTc0ODAzOTYzOHww&ixlib=rb-4.1.0&q=80&w=1080',
    aiHint: 'mobile app healthcare',
    category: 'Mobile Development',
    title: 'Telehealth Mobile App',
    description: 'A user-friendly mobile app for remote patient monitoring, connecting doctors and patients seamlessly.',
    href: '#',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1504270997636-07ddfbd48945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwY2FtcGFpZ258ZW58MHx8fHwxNzQ4MDM5NjM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    aiHint: 'digital marketing campaign',
    category: 'Digital Marketing',
    title: 'SEO & Content Strategy for E-commerce',
    description: 'A successful digital marketing campaign that doubled organic traffic and increased sales for an e-commerce brand.',
    href: '#',
  },
  {
    imageUrl: 'https://source.unsplash.com/400x300/?ai,robotics',
    aiHint: 'ai robotics',
    category: 'AI Integration',
    title: 'Automated Warehouse Logistics',
    description: 'AI-powered robotics solution to automate warehouse logistics, increasing efficiency and reducing errors.',
    href: '#',
  },
  {
    imageUrl: 'https://source.unsplash.com/400x300/?finance,app',
    aiHint: 'finance app',
    category: 'Fintech',
    title: 'Personal Finance Management App',
    description: 'An intuitive app with budgeting tools, financial planning, and secure transaction tracking for personal finance.',
    href: '#',
  },
  {
    imageUrl: 'https://source.unsplash.com/400x300/?cloud,security',
    aiHint: 'cloud security',
    category: 'Cybersecurity',
    title: 'Cloud Infrastructure Security Overhaul',
    description: 'A complete security overhaul for a tech startup, protecting their cloud infrastructure from threats.',
    href: '#',
  },
  {
    imageUrl: 'https://source.unsplash.com/400x300/?data,visualization',
    aiHint: 'data visualization',
    category: 'Data Analysis',
    title: 'Interactive Data Visualization Dashboard',
    description: 'A custom dashboard for a large enterprise to visualize complex data sets and make informed decisions.',
    href: '#',
  },
  {
    imageUrl: 'https://source.unsplash.com/400x300/?branding,design',
    aiHint: 'branding design',
    category: 'Graphics Designing',
    title: 'Complete Rebranding for a Retail Chain',
    description: 'A full rebranding project including logo, packaging, and digital assets for a major retail chain.',
    href: '#',
  }
];

const categories = ['All', ...new Set(allProjectsData.map(p => p.category))];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? allProjectsData
    : allProjectsData.filter(p => p.category === activeFilter);

  return (
    <div className="bg-background text-foreground">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[300px] text-white flex items-center justify-center">
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvcmt8ZW58MHx8fHwxNzQ4ODUwMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Portfolio showcase background"
                data-ai-hint="business work"
                fill
                className="object-cover"
                priority
            />
            <div className="relative z-20 text-center p-4">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">Our Portfolio</h1>
                <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-neutral-200 drop-shadow-md">
                    Explore our collection of innovative projects and success stories.
                </p>
            </div>
        </section>

        {/* Portfolio Gallery Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 max-w-screen-xl">
            {/* Filter Buttons */}
            <div className="flex justify-center flex-wrap gap-4 mb-12">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={activeFilter === category ? 'default' : 'outline'}
                  onClick={() => setActiveFilter(category)}
                  className="rounded-full px-6 transition-all duration-300"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-primary/40 transition-all duration-500 bg-secondary border border-border/20 flex flex-col transform-gpu hover:-translate-y-2"
                >
                  <Link href={project.href} className="absolute inset-0 z-10" aria-label={`View case study for ${project.title}`}></Link>
                  <div className="relative w-full aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      data-ai-hint={project.aiHint}
                      width={400}
                      height={300}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">{project.category}</p>
                    <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">{project.title}</h3>
                    <p className="text-muted-foreground flex-grow mb-4">{project.description}</p>
                    <div className="flex items-center text-sm font-medium text-foreground transition-colors group-hover:text-primary z-20 relative mt-auto">
                      VIEW CASE STUDY <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary">
            <div className="container mx-auto px-4 max-w-screen-md text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Have a project in mind?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                    Let's work together to bring your vision to life. Contact us for a free consultation.
                </p>
                <Button size="lg" asChild className="hover:scale-105 transition-transform">
                    <Link href="/#contact">
                        Get in Touch
                    </Link>
                </Button>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
