"use client";

import { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle, Code, Megaphone, Palette, Smartphone, Bot, DatabaseZap, Star, Play, Award, Target, Zap, Heart, CreditCard, Shield, Globe, Sparkles, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { notFound } from 'next/navigation';
import type { Service, ServiceDetail, SubDetail, HeroSlide } from '@/lib/services-data';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { VideoSection } from '@/components/sections/video-section';


// Custom hook for scroll animation
const useScrollAnimation = ({ threshold = 0.1 }: { threshold?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return { ref, isVisible };
};

// Icon mapping function
const getIcon = (iconName: string | undefined, className: string) => {
  const iconProps = { className };
  switch (iconName) {
    case 'website-development': return <Code {...iconProps} />;
    case 'mobile-application-development': return <Smartphone {...iconProps} />;
    case 'digital-marketing': return <Megaphone {...iconProps} />;
    case 'graphics-designing': return <Palette {...iconProps} />;
    case 'ai-automation': return <Bot {...iconProps} />;
    case 'data-analysis': return <DatabaseZap {...iconProps} />;
    case 'health-services': return <Heart {...iconProps} />;
    case 'credit-card-sales': return <CreditCard {...iconProps} />;
    case 'insurance-services': return <Shield {...iconProps} />;
    default: return <Star {...iconProps} />;
  }
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/#services", label: "Services" },
  { href: "/#our-work", label: "Our Work" },
  { href: "/#contact", label: "Contact Us" },
];


export default function ServicePageClient({ service }: { service: Service }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isContentVisible, setIsContentVisible] = useState(true);

  const heroRef = useScrollAnimation({ threshold: 0.1 });
  const detailsRef = useScrollAnimation({ threshold: 0.2 });
  const featuresRef = useScrollAnimation({ threshold: 0.2 });
  const processRef = useScrollAnimation({ threshold: 0.2 });
  const ctaRef = useScrollAnimation({ threshold: 0.2 });


  useEffect(() => {
    if (!service?.hero?.slides || service.hero.slides.length === 0) return;
    const interval = setInterval(() => {
      setIsContentVisible(false);
      setTimeout(() => {
        setCurrentSlideIndex((prev) => (prev + 1) % (service.hero.slides.length || 1));
        setIsContentVisible(true);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, [service]);

  if (!service || !service.details || service.details.length === 0) {
    return notFound();
  }
  
  const { hero, details, title: serviceCategoryTitle } = service;
  const currentSlide = hero?.slides?.[currentSlideIndex] ?? hero?.slides?.[0];

  const renderSplitColorTitle = (title: string) => {
    const words = title.split(' ');
    const midPoint = Math.ceil(words.length / 2);
    return (
      <>
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400">
          {words.slice(0, midPoint).join(' ')}
        </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/90 to-orange-500">
          {' ' + words.slice(midPoint).join(' ')}
        </span>
      </>
    );
  };
  
  const defaultImage = {
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx0ZWFtfGVufDB8fHx8MTc0ODg1MDAwMHww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Team working together",
      width: 1920,
      height: 1080,
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section
          ref={heroRef.ref}
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0">
            {/* Background Image */}
            <div className="absolute inset-0 transition-opacity duration-1000">
                <Image
                    src={currentSlide?.image?.src || defaultImage.src}
                    alt={currentSlide?.image?.alt || defaultImage.alt}
                    fill
                    className="object-cover opacity-30"
                    priority
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/90" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/30 to-orange-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
              <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-primary/30 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-orange-500/10 to-primary/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
            </div>
            
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, white 1px, transparent 0)`,
              backgroundSize: '50px 50px'
            }} />
          </div>

          <div className={cn(
            "relative z-20 text-center px-6 max-w-6xl mx-auto transition-all duration-1000",
            heroRef.isVisible && isContentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div className="relative inline-block mb-8">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight leading-tight">
                {currentSlide ? renderSplitColorTitle(currentSlide.title) : (
                  <>
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400">
                      {serviceCategoryTitle.split(' ')[0]}
                    </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/90 to-orange-500">
                      {' ' + serviceCategoryTitle.split(' ').slice(1).join(' ')}
                    </span>
                  </>
                )}
              </h1>
              
              {/* Floating Elements */}
              <div className="absolute -top-8 -left-8 w-6 h-6 bg-gradient-to-r from-primary to-orange-500 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
              <div className="absolute -top-6 -right-10 w-4 h-4 bg-gradient-to-r from-purple-500 to-primary rounded-full animate-pulse" style={{ animationDelay: '1s', animationDuration: '2s' }} />
              <div className="absolute -bottom-4 left-1/4 w-3 h-3 bg-gradient-to-r from-orange-500 to-primary rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
            </div>
            
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-light mb-12 max-w-4xl mx-auto">
              {currentSlide?.description || `Transform your business with our cutting-edge ${serviceCategoryTitle} solutions that drive growth and innovation.`}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button
                variant="outline"
                size="lg"
                className="group relative border-2 border-primary/40 text-white hover:bg-primary/10 hover:text-white hover:border-primary/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 backdrop-blur-sm bg-gradient-to-r from-primary/10 to-transparent px-8 py-6 text-lg rounded-2xl overflow-hidden"
                asChild
              >
                <Link href="#service-details" className="flex items-center gap-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex items-center gap-4">
                    <Sparkles className="h-6 w-6 transition-all duration-500 group-hover:rotate-12" />
                    <span className="font-semibold">Explore Solutions</span>
                    <ArrowRight className="h-6 w-6 transition-all duration-500 group-hover:translate-x-2" />
                  </div>
                </Link>
              </Button>
            </div>
            
            {hero?.slides && hero.slides.length > 1 && (
              <div className="flex gap-4 justify-center mb-8">
                {hero.slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsContentVisible(false);
                      setTimeout(() => {
                        setCurrentSlideIndex(index);
                        setIsContentVisible(true);
                      }, 500);
                    }}
                    className={cn(
                      "w-4 h-4 rounded-full border-2 border-white/20 transition-all duration-300 hover:scale-125",
                      index === currentSlideIndex
                        ? "bg-gradient-to-r from-primary to-orange-500 border-primary/50 scale-125"
                        : "bg-white/30 hover:bg-white/50"
                    )}
                    aria-label={`Slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
            
            <div className="w-40 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto animate-pulse rounded-full" />
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce">
            <div className="text-sm text-neutral-400 font-medium tracking-wide">Scroll to explore</div>
            <ChevronDown className="w-6 h-6 text-primary animate-pulse" />
          </div>
        </section>

        {/* Service Details Section */}
        <section
          id="service-details"
          ref={detailsRef.ref}
          className="relative py-20 md:py-32 bg-black overflow-hidden"
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-black" />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/[0.02] to-transparent" />
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
            </div>
          </div>

          <div className="relative container mx-auto px-6 max-w-screen-xl">
            <div className={cn(
              "text-center mb-16 md:mb-20 transition-all duration-1000",
              detailsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              <div className="relative inline-block">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400 mb-6 tracking-tight">
                  {serviceCategoryTitle} <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Solutions</span>
                </h2>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
              </div>
              <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto mt-6 leading-relaxed">
                {service.description}
              </p>
            </div>

            <Tabs defaultValue={details[0]?.slug} className="w-full">
              <TabsList className="flex flex-wrap justify-center gap-4 bg-transparent mb-12">
                {details.map((detail, index) => (
                  <TabsTrigger
                    key={detail.slug}
                    value={detail.slug}
                    className={cn(
                      "group flex items-center gap-3 px-6 py-3 bg-gradient-to-br from-neutral-800/40 via-neutral-900/60 to-black/80 backdrop-blur-xl rounded-xl border border-white/10 hover:bg-primary/10 hover:border-primary/30 transition-all duration-500 hover:scale-105",
                      detailsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
                      "data-[state=active]:bg-gradient-to-br data-[state=active]:from-primary/20 data-[state=active]:to-primary/10 data-[state=active]:border-primary/50"
                    )}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="p-1 bg-primary/20 rounded-lg border border-primary/30 group-hover:scale-110 transition-transform duration-300">
                      {getIcon(detail.icon, "w-4 h-4 text-primary")}
                    </div>
                    <span className="text-sm font-medium">{detail.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {details.map((detail, index) => (
                <TabsContent
                  key={detail.slug}
                  value={detail.slug}
                  className={cn(
                    "mt-0 transition-all duration-1000",
                    detailsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  )}
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="group relative bg-gradient-to-br from-neutral-800/20 via-neutral-900/30 to-black/40 backdrop-blur-xl rounded-3xl border border-white/5 p-8 md:p-12 overflow-hidden hover:border-white/10 transition-all duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-50" />
                    <div className="relative grid md:grid-cols-5 gap-8">
                      <div className="md:col-span-2">
                         <div className="relative group rounded-2xl overflow-hidden border border-white/10 group-hover:border-primary/20 transition-all duration-500 aspect-square">
                           <Image
                               src={detail.backgroundImage || defaultImage.src}
                               alt={`${detail.title} illustration`}
                               width={600}
                               height={600}
                               className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 filter group-hover:brightness-110"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                           <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                         </div>
                      </div>
                      <div className="md:col-span-3 space-y-8">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl border border-primary/30 group-hover:scale-110 transition-transform duration-300">
                            {getIcon(detail.icon, "w-6 h-6 text-primary")}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white">{detail.title}</h3>
                          </div>
                        </div>
                        <p className="text-base text-neutral-300 leading-relaxed">{detail.description || 'No description available.'}</p>
                        {detail.subDetails && Array.isArray(detail.subDetails) && detail.subDetails.length > 0 && (
                          <div className="space-y-6">
                            {detail.subDetails.map((subDetail, i) => (
                              <div key={i} className="group p-6 bg-gradient-to-br from-neutral-800/30 via-neutral-900/40 to-black/50 backdrop-blur-sm rounded-xl border border-white/10 hover:border-primary/20 transition-all duration-500">
                                <div className="flex items-start gap-4 mb-4">
                                  <div className="p-1 bg-primary/20 rounded-lg border border-primary/30 mt-1">
                                    <CheckCircle className="w-4 h-4 text-primary" />
                                  </div>
                                  <div className="flex-1">
                                    <h5 className="text-white font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                                      {subDetail.title || 'Untitled'}
                                    </h5>
                                    <p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300 leading-relaxed mb-4">
                                      {subDetail.description || 'No description available.'}
                                    </p>
                                  </div>
                                </div>

                                {subDetail.features && subDetail.features.length > 0 && (
                                  <div className="mb-4">
                                    <h6 className="text-primary font-medium mb-2 text-sm">Key Features:</h6>
                                    <ul className="space-y-1">
                                      {subDetail.features.map((feature, idx) => (
                                        <li key={idx} className="text-xs text-neutral-400 flex items-start gap-2">
                                          <CheckCircle className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                                          <span>{feature}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {subDetail.benefits && subDetail.benefits.length > 0 && (
                                  <div className="mb-4">
                                    <h6 className="text-primary font-medium mb-2 text-sm">Benefits:</h6>
                                    <ul className="space-y-1">
                                      {subDetail.benefits.map((benefit, idx) => (
                                        <li key={idx} className="text-xs text-neutral-400 flex items-start gap-2">
                                          <Star className="w-3 h-3 text-orange-500 mt-0.5 flex-shrink-0" />
                                          <span>{benefit}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {subDetail.whyChooseUs && subDetail.whyChooseUs.length > 0 && (
                                  <div>
                                    <h6 className="text-primary font-medium mb-2 text-sm">Why Choose Us:</h6>
                                    <ul className="space-y-1">
                                      {subDetail.whyChooseUs.map((reason, idx) => (
                                        <li key={idx} className="text-xs text-neutral-400 flex items-start gap-2">
                                          <Award className="w-3 h-3 text-yellow-500 mt-0.5 flex-shrink-0" />
                                          <span>{reason}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                          <Button
                            variant="outline"
                            className="group border-primary/50 hover:bg-primary/10 hover:scale-105 transition-all duration-300 bg-gradient-to-r from-primary/5 to-transparent"
                            asChild
                          >
                            <Link href="/#contact" className="flex gap-2">
                              Get Started
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-6 right-6 w-3 h-3 bg-primary/40 rounded-full animate-pulse" />
                    <div className="absolute bottom-6 left-6 w-2 h-2 bg-white/20 rounded-full animate-ping" />
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Video Section */}
        <VideoSection />
        
        {/* CTA Section */}
        <section
          ref={ctaRef.ref}
          className="relative py-20 md:py-32 bg-gradient-to-br from-black to-neutral-900 overflow-hidden"
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/[0.02] to-transparent" />
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
              <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
            </div>
          </div>
          <div className={cn(
            "relative container mx-auto px-6 max-w-5xl text-center transition-all duration-1000",
            ctaRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div className="relative inline-block mb-8">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400 mb-6 tracking-tight">
                Transform Your <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Business</span>
              </h2>
              <div className="absolute -top-6 -left-6 w-4 h-4 bg-primary rounded-full animate-ping" />
              <div className="absolute -top-4 -right-8 w-3 h-3 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-light mb-12 max-w-4xl mx-auto">
              Ready to elevate your business with our expert {serviceCategoryTitle} solutions? Let's build something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                variant="outline"
                size="lg"
                className="group relative border-2 border-primary/40 text-white hover:bg-primary/10 hover:text-white hover:border-primary/60 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 backdrop-blur-sm bg-gradient-to-r from-primary/10 to-transparent px-8 py-6 text-lg"
                asChild
              >
                <Link href="/#contact" className="flex items-center gap-3">
                  <span className="font-semibold">Start Your Project</span>
                  <ArrowRight className="h-6 w-6 transition-all duration-500 group-hover:translate-x-2" />
                </Link>
              </Button>
            </div>
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-8 animate-pulse" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
