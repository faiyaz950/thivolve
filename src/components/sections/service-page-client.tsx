
"use client";

import type { Service } from '@/lib/services-data';
import { useState, useEffect, useCallback } from 'react';
import { ArrowRight, CheckCircle, Code, Megaphone, Palette, Smartphone, Sparkles, Wand2, Bot, DatabaseZap, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const getIcon = (iconName: string | undefined, className: string) => {
  const iconProps = { className };
  switch (iconName) {
    case 'website-development': return <Code {...iconProps} />;
    case 'mobile-application-development': return <Smartphone {...iconProps} />;
    case 'digital-marketing': return <Megaphone {...iconProps} />;
    case 'graphics-designing': return <Palette {...iconProps} />;
    case 'ai-automation': return <Bot {...iconProps} />;
    case 'data-analysis': return <DatabaseZap {...iconProps} />;
    case 'custom-ai': return <Wand2 {...iconProps} />;
    default: return <Sparkles {...iconProps} />;
  }
};

export function ServicePageClient({ service }: { service: Service }) {
  const [particleStyles, setParticleStyles] = useState<React.CSSProperties[]>([]);

  useEffect(() => {
    const newStyles = Array.from({ length: 20 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${2 + Math.random() * 2}s`,
    }));
    setParticleStyles(newStyles);
  }, []);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isContentVisible, setIsContentVisible] = useState(true);

  useEffect(() => {
    if (!service?.hero?.slides?.length) return;

    const displayDuration = 5000;

    const slideInterval = setInterval(() => {
      setIsContentVisible(false);
      setTimeout(() => {
        setCurrentSlideIndex(prevIndex => (prevIndex + 1) % service.hero!.slides.length);
        setIsContentVisible(true);
      }, 500);
    }, displayDuration);

    return () => clearInterval(slideInterval);
  }, [service?.hero?.slides]);

  if (!service || !service.details?.length) {
    notFound();
  }

  const { hero, details, title: serviceCategoryTitle } = service;
  const currentSlide = hero?.slides?.[currentSlideIndex];
  const heroImage = hero?.slides?.[0]?.image;

  return (
    <div className="bg-background text-foreground">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px] text-white flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            {heroImage && (
              <Image
                  src={heroImage.src}
                  alt={heroImage.alt}
                  data-ai-hint={heroImage.hint}
                  fill
                  className="object-cover animate-parallax"
                  priority
              />
            )}
             <div className="absolute inset-0 z-5">
              {particleStyles.map((style, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
                  style={style}
                />
              ))}
            </div>
            <div className="relative z-20 text-center p-4">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">{service.title}</h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-neutral-200 drop-shadow-md">
                    {service.description}
                </p>
            </div>
        </section>

        {/* Services Tabs and Content Section */}
        <section
          id="service-details"
          className="py-16 md:py-24 bg-cover bg-center text-white"
          style={{ backgroundImage: "url('/bluebg.jpg')" }}
          data-ai-hint="The background image is set to bluebg.jpg from the public folder"
        >
          <div className="container mx-auto px-4 max-w-screen-xl">
             <div className="text-center mb-12">
                <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">Our {serviceCategoryTitle}</h2>
                <p className="text-lg max-w-2xl text-white/90 mx-auto leading-relaxed">
                   Explore our comprehensive digital solutions designed to elevate your business to new heights.
                </p>
              </div>

            <Tabs defaultValue={details[0].slug} className="w-full">
              <div className="my-16">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-transparent p-0">
                  {details.map((detail, index) => (
                    <TabsTrigger
                      key={detail.slug}
                      value={detail.slug}
                      className="group bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 border border-neutral-700/50 data-[state=active]:bg-gradient-to-br data-[state=active]:from-primary/90 data-[state=active]:to-red-500/90 data-[state=active]:text-white data-[state=active]:border-primary/50 data-[state=active]:shadow-lg data-[state=active]:shadow-primary/25 text-white h-auto p-8 rounded-2xl transition-all duration-300 hover:bg-gradient-to-br hover:from-neutral-700/80 hover:to-neutral-800/80 hover:scale-105 hover:shadow-xl backdrop-blur-sm animate-fade-in-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="mb-4 bg-primary/10 p-3 rounded-full border border-primary/30 group-data-[state=active]:bg-white/20">
                           {getIcon(detail.icon, "w-8 h-8 text-primary group-data-[state=active]:text-white transition-colors")}
                        </div>
                        <span className="font-semibold text-base">{detail.title}</span>
                      </div>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {/* Tab Content */}
              <div className="pb-20">
                {details.map((detail, index) => (
                  <TabsContent key={detail.slug} value={detail.slug} className="mt-10 mb-10">
                    <div 
                      className="bg-card/80 p-8 md:p-12 rounded-xl shadow-2xl border border-border/10 backdrop-blur-md animate-fade-in-up"
                      style={{ animationDelay: `${index * 100 + 200}ms` }}
                    >
                      <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
                        <div className="md:col-span-1">
                          <Image
                            src={detail.backgroundImage}
                            alt={`${detail.title} background`}
                            width={400}
                            height={500}
                            className="object-cover rounded-lg w-full h-full shadow-lg"
                          />
                        </div>
                        
                        <div className="md:col-span-2">
                           <div className="flex items-center mb-4">
                            {getIcon(detail.icon, "w-8 h-8 text-primary mr-4")}
                            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground">{detail.title}</h2>
                          </div>
                          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            {detail.description}
                          </p>

                          {detail.subDetails && detail.subDetails.length > 0 && (
                            <Accordion type="single" collapsible className="w-full space-y-4">
                              {detail.subDetails.map((subDetail, i) => (
                                <AccordionItem key={i} value={`item-${i}`} className="bg-background/50 rounded-lg border-border/50 px-6">
                                  <AccordionTrigger className="text-lg font-semibold text-card-foreground hover:no-underline">
                                    <div className="flex items-center">
                                      <CheckCircle className="h-5 w-5 text-primary mr-3" />
                                      {subDetail.title}
                                    </div>
                                  </AccordionTrigger>
                                  <AccordionContent className="text-base text-muted-foreground leading-relaxed pt-2 pl-9">
                                    {subDetail.description}
                                  </AccordionContent>
                                </AccordionItem>
                              ))}
                            </Accordion>
                          )}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </div>
            </Tabs>
          </div>
        </section>


        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-gradient-to-r from-black to-blue-950/50">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
             Let's discuss how our expertise in {serviceCategoryTitle} can elevate your business. Get in touch for a free consultation.
            </p>
            <Button size="lg" asChild variant="outline" className="text-white border-white hover:bg-white hover:text-black">
              <Link href="/#contact">
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

