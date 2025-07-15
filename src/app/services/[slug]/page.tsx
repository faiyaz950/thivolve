
"use client";

import { services, type Service } from '@/lib/services-data';
import { notFound } from 'next/navigation';
import { Footer } from '@/components/layout/footer';
import { ArrowRight, CheckCircle, Code, Megaphone, Palette, Smartphone, Sparkles, Wand2, Bot, DatabaseZap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

// Cannot be used with 'use client'
// export async function generateMetadata({ params }: ServicePageProps) {
//   const service = services.find(s => s.slug === params.slug);
//   if (!service) {
//     return {
//       title: 'Service Not Found',
//     }
//   }
//   return {
//     title: `${service.title} | Btruss Digital Hub`,
//     description: service.description,
//   }
// }

const getIcon = (iconName: string | undefined) => {
    const iconClass = "w-12 h-12 text-primary";
    if (!iconName) return <Sparkles className={iconClass} />;
    
    switch (iconName) {
        case 'website-development':
            return <Code className={iconClass} />;
        case 'mobile-application-development':
            return <Smartphone className={iconClass} />;
        case 'digital-marketing':
            return <Megaphone className={iconClass} />;
        case 'graphics-designing':
            return <Palette className={iconClass} />;
        case 'ai-automation':
            return <Bot className={iconClass} />;
        case 'data-analysis':
             return <DatabaseZap className={iconClass} />;
        case 'custom-ai':
            return <Wand2 className={iconClass} />;
        default:
            return <Sparkles className={iconClass} />;
    }
};

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find(s => s.slug === params.slug);
  const [activeSection, setActiveSection] = useState<string>('');
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' } // Adjust threshold to trigger when section is in middle of viewport
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      Object.values(sectionRefs.current).forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [service]);


  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
        <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between max-w-screen-xl">
                 <Link href="/" className="flex items-center">
                    <Image
                    src="/btrusssl.png"
                    alt="Btruss Logo"
                    width={120}
                    height={30}
                    priority
                    />
                </Link>
                <Link href="/#contact" className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition-colors">
                    Contact Us
                </Link>
            </div>
        </header>

      <main className="flex-grow">
        <section className="relative py-24 md:py-32 bg-black text-white overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src={service.details[0]?.backgroundImage || "https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2h8ZW58MHx8fHwxNzQ4MzM2MzgwfDA&ixlib=rb-4.1.0&q=80&w=1080"}
                    alt="Service background"
                    fill
                    className="object-cover opacity-30"
                    data-ai-hint="abstract tech background"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
            </div>
             <div className="relative container mx-auto px-4 max-w-screen-lg text-center z-10">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight animate-fade-in" style={{ animationDelay: '200ms' }}>{service.title}</h1>
                <p className="mt-6 text-lg sm:text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '400ms' }}>
                   {service.description}
                </p>
            </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 max-w-screen-xl">
                <div className="grid md:grid-cols-12 gap-8 lg:gap-16">
                    <aside className="md:col-span-3 lg:col-span-3">
                         <div className="sticky top-28">
                            <h3 className="text-lg font-semibold text-primary mb-4 red-line-accent">Offerings</h3>
                            <ul className="space-y-2">
                                {service.details.map(detail => (
                                    <li key={detail.slug}>
                                        <a href={`#${detail.slug}`} 
                                           className={cn(
                                                "flex items-center p-3 rounded-md transition-all duration-300 text-base font-medium border-l-4",
                                                activeSection === detail.slug 
                                                    ? 'bg-primary/10 text-primary border-primary' 
                                                    : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground border-transparent'
                                           )}
                                        >
                                            <span>{detail.title}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    <div className="md:col-span-9 lg:col-span-9">
                         <div className="space-y-20">
                            {service.details.map((detail, index) => (
                                <div
                                  key={detail.slug}
                                  id={detail.slug}
                                  ref={(el) => (sectionRefs.current[detail.slug] = el)}
                                  className="scroll-mt-24"
                                >
                                    <div className="relative overflow-hidden rounded-xl shadow-lg border border-border/20 bg-card">
                                      <div className="relative min-h-[250px] md:min-h-[350px] flex items-end p-8 bg-black/50 text-white">
                                        <div className="absolute inset-0 z-0 animate-parallax">
                                            <Image 
                                                src={detail.backgroundImage} 
                                                alt={`${detail.title} background`}
                                                fill
                                                className="object-cover transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                                        </div>

                                        <div className="relative z-10">
                                            <div className="mb-4">{getIcon(detail.icon)}</div>
                                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{detail.title}</h2>
                                        </div>
                                      </div>

                                      <div className="p-8 space-y-6">
                                        <p className="text-lg text-muted-foreground leading-relaxed">
                                          {detail.description}
                                        </p>
                                        
                                        {detail.subDetails && detail.subDetails.length > 0 && (
                                            <div className="grid sm:grid-cols-2 gap-6 pt-4 border-t border-border">
                                                {detail.subDetails.map((subDetail, i) => (
                                                    <div key={i} className="flex items-start space-x-3">
                                                        <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0"/>
                                                        <p className="text-foreground/90">{subDetail}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                      </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30 border-t border-border">
             <div className="container mx-auto px-4 max-w-screen-md text-center">
                 <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
                 <p className="text-muted-foreground mb-8 text-lg">
                    Let's discuss how our expertise in {service.title} can elevate your business.
                 </p>
                 <Link href="/#contact" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-primary rounded-md hover:bg-primary/90 transition-transform hover:scale-105 shadow-lg">
                     Get a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                 </Link>
             </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

    
