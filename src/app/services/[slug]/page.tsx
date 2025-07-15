
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    if (!service?.hero?.images) return;
    const imageSliderInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % (service.hero.images.length || 1));
    }, 5000);
    return () => clearInterval(imageSliderInterval);
  }, [service]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }
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
                    src="/btrussslogo.png"
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
        <section className="relative h-[60vh] md:h-[70vh] text-white flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute inset-0 w-full h-full z-0">
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            {service.hero?.images && (
              <>
                <div
                  className="flex transition-transform duration-700 ease-in-out h-full"
                  style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                >
                  {service.hero.images.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0 h-full relative">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        data-ai-hint={image.hint}
                        fill
                        className="object-cover"
                        sizes="100vw"
                        priority={index === 0}
                      />
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                  {service.hero.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      aria-label={`Go to slide ${index + 1}`}
                      className={cn(
                        "w-3 h-3 rounded-full transition-all duration-300 ease-in-out",
                        index === currentImageIndex ? "bg-primary scale-125" : "bg-white/50 hover:bg-white/80"
                      )}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="relative z-20 container mx-auto px-4 max-w-screen-lg text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight animate-fade-in" style={{ animationDelay: '200ms' }}>
              {service.hero?.title || service.title}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '400ms' }}>
              {service.hero?.description || service.description}
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

  