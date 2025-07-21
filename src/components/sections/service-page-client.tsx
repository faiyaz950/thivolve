
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
  const heroImage = hero?.slides?.[0]?.image; // Use first slide image for static hero

  return (
    <div className="bg-background text-foreground">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px] text-white flex items-center justify-center">
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            {heroImage && (
              <Image
                  src={heroImage.src}
                  alt={heroImage.alt}
                  data-ai-hint={heroImage.hint}
                  fill
                  className="object-cover"
                  priority
              />
            )}
            <div className="relative z-20 text-center p-4">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">{service.title}</h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-neutral-200 drop-shadow-md">
                    {service.description}
                </p>
            </div>
        </section>

        {/* Services Tabs and Content Section */}
        <section id="service-details" className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 max-w-screen-xl">

            <Tabs defaultValue={details[0].slug} className="w-full">
              {/* Tab Triggers */}
              <div className="flex justify-center mb-12 md:mb-16">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-secondary p-0">
                  {details.map((detail) => (
                    <TabsTrigger
                      key={detail.slug}
                      value={detail.slug}
                      className="text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-md rounded-md px-4 py-2 text-sm md:text-base font-semibold"
                    >
                      {detail.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {/* Tab Content */}
              <div>
                {details.map((detail) => (
                  <TabsContent key={detail.slug} value={detail.slug}>
                    <div className="bg-background p-8 md:p-12 rounded-xl shadow-2xl border border-border/10">
                      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                        {/* Left Side: Image */}
                        <div className="md:col-span-1">
                          <Image
                            src={detail.backgroundImage}
                            alt={`${detail.title} background`}
                            width={400}
                            height={500}
                            className="object-cover rounded-lg w-full h-full"
                          />
                        </div>
                        
                        {/* Right Side: Details */}
                        <div className="md:col-span-2">
                           <div className="flex items-center mb-4">
                            {getIcon(detail.icon, "w-8 h-8 text-primary mr-4")}
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground">{detail.title}</h2>
                          </div>
                          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            {detail.description}
                          </p>

                          {detail.subDetails && detail.subDetails.length > 0 && (
                            <Accordion type="single" collapsible className="w-full space-y-4">
                              {detail.subDetails.map((subDetail, i) => (
                                <AccordionItem key={i} value={`item-${i}`} className="bg-secondary/50 rounded-lg border-border/50 px-6">
                                  <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
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
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our expertise in {serviceCategoryTitle} can elevate your business. Get in touch for a free consultation.
            </p>
            <Button size="lg" asChild>
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
