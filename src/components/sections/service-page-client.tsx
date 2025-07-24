"use client";

import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Code, Megaphone, Palette, Smartphone, Sparkles, Wand2, Bot, DatabaseZap, Menu, X, Star, Shield, Globe, Zap, Users, Award, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { notFound } from 'next/navigation';
import { services, type Service } from '@/lib/services-data';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

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

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/#services", label: "Services" },
  { href: "/portfolio", label: "Our Work" },
  { href: "/#contact", label: "Contact Us" },
];

// Service Feature Card Component
const ServiceFeatureCard = ({ feature, index, isVisible }: {
  feature: any;
  index: number;
  isVisible: boolean;
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
        "group relative transition-all duration-700 transform-gpu",
        hasAnimated ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-110" />
      <div className="relative bg-gradient-to-br from-neutral-800/40 via-neutral-900/60 to-black/80 backdrop-blur-xl rounded-3xl border border-white/5 p-8 overflow-hidden hover:border-white/20 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-700 hover:scale-105">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative mb-6">
          <div className="relative w-16 h-16 mx-auto rounded-2xl overflow-hidden border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-500 group-hover:scale-110 bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
            {getIcon(feature.icon, "w-8 h-8 text-primary group-hover:text-primary/90 transition-colors duration-300")}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/60 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        <div className="relative text-center">
          <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
            {feature.title}
          </h3>
          <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300 leading-relaxed">
            {feature.description}
          </p>
        </div>
        <div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full animate-ping" />
        <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
};

export function ServicePageClient({ service }: { service: Service }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isContentVisible, setIsContentVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  // Scroll animation hooks for all sections
  const heroRef = useScrollAnimation({ threshold: 0.1 });
  const detailsRef = useScrollAnimation({ threshold: 0.2 });
  const featuresRef = useScrollAnimation({ threshold: 0.2 });
  const processRef = useScrollAnimation({ threshold: 0.2 });
  const ctaRef = useScrollAnimation({ threshold: 0.2 });
  const footerRef = useScrollAnimation({ threshold: 0.2 });

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  useEffect(() => {
    if (!service?.hero?.slides || service.hero.slides.length === 0) return;

    const displayDuration = 4000;
    const slideInterval = setInterval(() => {
      setIsContentVisible(false);
      setTimeout(() => {
        setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % (service.hero?.slides.length || 1));
        setIsContentVisible(true);
      }, 500);
    }, displayDuration);

    return () => clearInterval(slideInterval);
  }, [service]);

  if (!service) {
    return notFound();
  }

  const { hero, details, title: serviceCategoryTitle } = service;
  const currentSlide = hero?.slides[currentSlideIndex];

  const renderSplitColorTitle = (title: string) => {
    const words = title.split(' ');
    const midPoint = Math.ceil(words.length / 2);
    const firstHalf = words.slice(0, midPoint).join(' ');
    const secondHalf = words.slice(midPoint).join(' ');
    
    return (
      <>
        <span className="text-white">{firstHalf}</span>
        {secondHalf && (
          <>
            <span className="text-white"> </span>
            <span className="bg-gradient-to-r from-primary via-red-500 to-orange-500 bg-clip-text text-transparent">{secondHalf}</span>
          </>
        )}
      </>
    );
  };

  // Mock feature data for demonstration
  const serviceFeatures = [
    {
      icon: 'website-development',
      title: 'Cutting-Edge Technology',
      description: 'Leveraging the latest technologies and frameworks to build robust, scalable solutions.'
    },
    {
      icon: 'mobile-application-development',
      title: 'Expert Team',
      description: 'Our skilled professionals bring years of experience and proven expertise to every project.'
    },
    {
      icon: 'digital-marketing',
      title: '24/7 Support',
      description: 'Round-the-clock support and maintenance to ensure your solutions run smoothly.'
    },
    {
      icon: 'graphics-designing',
      title: 'Custom Solutions',
      description: 'Tailored approaches designed specifically for your unique business requirements.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Enhanced Header */}
      <header className="fixed top-0 z-50 w-full bg-black/80 backdrop-blur-xl border-b border-white/5 transition-all duration-700">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between max-w-screen-xl">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="transform group-hover:scale-110 transition-transform duration-300">
              <Image
                src="/btrussslogo.png"
                alt="Btruss Logo"
                width={120}
                height={30}
                priority
                className="drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]"
              />
            </div>
          </Link>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-neutral-300 hover:text-primary transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-transparent group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className="hidden md:inline-flex border-2 border-primary/40 text-white hover:bg-primary/10 hover:text-white hover:border-primary/60 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 backdrop-blur-sm bg-gradient-to-r from-primary/10 to-transparent"
              asChild
            >
              <Link href="/#contact">Book a Meeting</Link>
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-all duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <div className={cn(
          "md:hidden bg-black/95 backdrop-blur-xl border-t border-white/5 transition-all duration-300",
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        )}>
          <nav className="container mx-auto px-6 py-4 space-y-3">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "block py-2 text-neutral-300 hover:text-primary transition-all duration-300",
                  isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {link.label}
              </Link>
            ))}
            <Button
              variant="outline"
              className="w-full mt-4 border-2 border-primary/40 text-white bg-transparent hover:bg-primary/10 hover:border-primary/60 transition-all duration-300"
              asChild
              onClick={() => setIsMenuOpen(false)}
            >
              <Link href="/#contact">Book a Meeting</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* Enhanced Hero Section */}
        <section 
          ref={heroRef.ref}
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0">
            {hero && hero.slides.length > 0 && (
              <div className="relative h-full">
                <div
                  className="flex transition-transform duration-1000 ease-out h-full"
                  style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}
                >
                  {hero.slides.map((slide, index) => (
                    <div key={index} className="w-full flex-shrink-0 h-full relative">
                      <Image
                        src={slide.image.src}
                        alt={slide.image.alt}
                        fill
                        className="object-cover opacity-30"
                        priority={index === 0}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/90" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute inset-0 opacity-40">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
              <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '4s' }} />
            </div>
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, white 1px, transparent 0)`,
              backgroundSize: '50px 50px'
            }} />
          </div>

          <div className={cn(
            "relative z-20 text-center px-6 max-w-5xl mx-auto transition-all duration-1000",
            heroRef.isVisible && isContentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div className="relative inline-block mb-8">
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400 tracking-tight leading-tight">
                {currentSlide ? renderSplitColorTitle(currentSlide.title) : serviceCategoryTitle}
              </h1>
              <div className="absolute -top-8 -left-8 w-6 h-6 bg-primary rounded-full animate-ping" />
              <div className="absolute -top-6 -right-10 w-4 h-4 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
            </div>
            <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed font-light mb-12 max-w-4xl mx-auto">
              {currentSlide?.description || `Unlock the full potential of your business with our cutting-edge ${serviceCategoryTitle} services, designed to deliver exceptional results and drive growth.`}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                variant="outline"
                size="lg"
                className="group relative border-2 border-primary/40 text-white hover:bg-primary/10 hover:text-white hover:border-primary/60 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 backdrop-blur-sm bg-gradient-to-r from-primary/10 to-transparent px-8 py-6 text-lg"
                asChild
              >
                <Link href="#service-details" className="flex items-center gap-3">
                  <span className="font-semibold">Explore Solutions</span>
                  <ArrowRight className="h-6 w-6 transition-all duration-500 group-hover:translate-x-2" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group relative border-2 border-white/20 text-white hover:bg-white/10 hover:text-white hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-white/20 backdrop-blur-sm px-8 py-6 text-lg"
                asChild
              >
                <Link href="/#contact" className="flex items-center gap-3">
                  <span className="font-semibold">Get Started</span>
                  <Star className="h-6 w-6 transition-all duration-500 group-hover:rotate-12" />
                </Link>
              </Button>
            </div>
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-12 animate-pulse" />
          </div>

          {hero && hero.slides.length > 1 && (
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
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
                    "w-3 h-3 rounded-full transition-all duration-300 border border-white/20",
                    index === currentSlideIndex 
                      ? "bg-primary scale-125 shadow-lg shadow-primary/50" 
                      : "bg-white/30 hover:bg-white/60 hover:scale-110"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </section>

        {/* ENHANCED SOLUTIONS SECTION */}
        <section 
          id="service-details" 
          ref={detailsRef.ref} 
          className="relative py-20 md:py-32 bg-black overflow-hidden"
        >
          {/* Advanced Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950/90 to-black" />
            
            {/* Enhanced geometric patterns */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full" style={{
                backgroundImage: `
                  radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                  radial-gradient(circle at 80% 80%, rgba(239, 68, 68, 0.08) 0%, transparent 50%),
                  radial-gradient(circle at 40% 60%, rgba(251, 146, 60, 0.06) 0%, transparent 50%)
                `,
              }} />
            </div>
            
            {/* Animated orbs */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-1/4 right-1/6 w-96 h-96 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
              <div className="absolute bottom-1/3 left-1/6 w-80 h-80 bg-gradient-to-br from-red-500/15 via-red-500/8 to-transparent rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }} />
              <div className="absolute top-2/3 right-1/3 w-64 h-64 bg-gradient-to-br from-orange-500/12 via-orange-500/6 to-transparent rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 opacity-20">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-primary/60 rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${3 + Math.random() * 4}s`,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="relative container mx-auto px-6 max-w-screen-xl">
            {/* Enhanced Section Header */}
            <div className={cn(
              "text-center mb-20 md:mb-28 transition-all duration-1000",
              detailsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              <div className="relative inline-block mb-8">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-full blur-2xl opacity-60" />
                <div className="relative inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-full text-primary text-sm font-semibold backdrop-blur-xl">
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  <span>Premium Solutions</span>
                  <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
                </div>
              </div>
              
              <h2 className="text-5xl sm:text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-neutral-300 mb-8 tracking-tight leading-tight">
                <span className="relative">
                  {serviceCategoryTitle}
                  <span className="bg-gradient-to-r from-primary via-red-500 to-orange-500 bg-clip-text text-transparent"> Solutions</span>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl text-neutral-300 max-w-4xl mx-auto leading-relaxed font-light mb-8">
                Comprehensive technology solutions designed to transform your business operations, enhance efficiency, and drive sustainable growth in the digital era.
              </p>
              
              {/* Stats Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12 p-8 bg-gradient-to-r from-neutral-900/60 via-black/80 to-neutral-900/60 backdrop-blur-xl rounded-2xl border border-white/10">
                {[
                  { number: "500+", label: "Projects Delivered", icon: <Award className="w-5 h-5" /> },
                  { number: "99.9%", label: "Uptime Guarantee", icon: <Shield className="w-5 h-5" /> },
                  { number: "24/7", label: "Support Available", icon: <Clock className="w-5 h-5" /> },
                  { number: "150+", label: "Happy Clients", icon: <Users className="w-5 h-5" /> }
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                      </div>
                      <div className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-500 to-orange-500">
                        {stat.number}
                      </div>
                    </div>
                    <div className="text-sm text-neutral-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Unified Tabbed Interface for All Services */}
            <div className="space-y-12">
              <div className={cn(
                "text-center transition-all duration-1000",
                detailsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )} style={{ transitionDelay: "400ms" }}>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                  Explore Our <span className="bg-gradient-to-r from-primary via-red-500 to-orange-500 bg-clip-text text-transparent">Solutions</span>
                </h3>
                <p className="text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
                  Discover our comprehensive range of specialized services designed to meet your unique business requirements.
                </p>
              </div>

              <Tabs defaultValue={details[0]?.slug} className="w-full">
                {/* Enhanced Tab Navigation */}
                <div className="mb-12 overflow-x-auto">
                  <TabsList className="inline-flex w-full min-w-max bg-gradient-to-r from-neutral-900/50 via-black/70 to-neutral-900/50 backdrop-blur-xl rounded-2xl border border-white/10 p-2 gap-2">
                    {details.map((detail, index) => (
                      <TabsTrigger
                        key={detail.slug}
                        value={detail.slug}
                        className={cn(
                          "group relative flex items-center gap-3 px-6 py-4 bg-transparent text-neutral-300 transition-all duration-500 hover:text-white data-[state=active]:text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/20 data-[state=active]:via-primary/10 data-[state=active]:to-transparent rounded-xl border border-transparent hover:border-white/10 data-[state=active]:border-primary/30 hover:scale-105",
                          detailsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        )}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        {/* Icon */}
                        <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg border border-primary/20 group-hover:border-primary/40 group-data-[state=active]:border-primary/60 transition-all duration-300 group-hover:scale-110">
                          {getIcon(detail.icon, "w-5 h-5 text-primary")}
                        </div>
                        
                        {/* Text */}
                        <div className="text-left">
                          <div className="font-semibold text-sm text-white">
                            {detail.title}
                          </div>
                          <div className="text-xs text-neutral-400 group-hover:text-neutral-300 group-data-[state=active]:text-neutral-200 transition-colors duration-300">
                            Premium Solution
                          </div>
                        </div>

                        {/* Active indicator */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-data-[state=active]:opacity-100 transition-opacity duration-500 rounded-xl" />
                        <div className="absolute top-2 right-2 w-2 h-2 bg-primary/60 rounded-full animate-pulse opacity-0 group-data-[state=active]:opacity-100 transition-opacity duration-500" />
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>

                {/* Enhanced Tab Content */}
                {details.map((detail, index) => (
                  <TabsContent
                    key={detail.slug}
                    value={detail.slug}
                    className={cn(
                      "mt-0 transition-all duration-1000",
                      detailsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}
                    style={{ transitionDelay: `${(index + 2) * 150}ms` }}
                  >
                    <div className="group relative bg-gradient-to-br from-neutral-800/40 via-neutral-900/70 to-black/90 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-700">
                      {/* Background Effects */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-red-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative grid lg:grid-cols-5 gap-8 lg:gap-12 p-8 lg:p-12">
                        {/* Image Section */}
                        <div className="lg:col-span-2">
                          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm group-hover:border-primary/20 transition-all duration-700 aspect-square">
                            <Image
                              src={detail.backgroundImage}
                              alt={`${detail.title} illustration`}
                              fill
                              className="object-cover transition-all duration-700 group-hover:scale-110 filter group-hover:brightness-110"
                            />
                            
                            {/* Image overlays */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            {/* Floating elements on image */}
                            <div className="absolute top-4 left-4 p-3 bg-black/40 backdrop-blur-sm rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                              {getIcon(detail.icon, "w-6 h-6 text-primary")}
                            </div>
                            
                            <div className="absolute bottom-4 right-4 px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full border border-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-500">
                              <span className="text-primary text-sm font-semibold">Premium</span>
                            </div>
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="lg:col-span-3 space-y-8">
                          {/* Header */}
                          <div className="relative">
                            <div className="flex items-center gap-4 mb-6">
                              <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl border border-primary/20 group-hover:border-primary/40 transition-all duration-500 group-hover:scale-110">
                                {getIcon(detail.icon, "w-6 h-6 text-primary")}
                              </div>
                              <div>
                                <h3 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400 tracking-tight">
                                  {detail.title}
                                </h3>
                                <div className="flex items-center gap-2 mt-2">
                                  <div className="w-16 h-1 bg-gradient-to-r from-primary to-transparent rounded-full" />
                                  <div className="text-primary text-sm font-semibold">Enterprise Ready</div>
                                </div>
                              </div>
                            </div>
                            
                            <p className="text-lg text-neutral-300 leading-relaxed group-hover:text-neutral-200 transition-colors duration-300">
                              {detail.description}
                            </p>
                          </div>

                          {/* Advanced Features Grid */}
                          {detail.subDetails && detail.subDetails.length > 0 && (
                            <div className="space-y-6">
                              <div className="flex items-center gap-3">
                                <Globe className="w-6 h-6 text-primary" />
                                <h4 className="text-xl font-bold text-white">
                                  Advanced Capabilities
                                </h4>
                              </div>
                              
                              <div className="grid md:grid-cols-2 gap-4">
                                {detail.subDetails.map((subDetail, i) => (
                                  <div
                                    key={i}
                                    className="group/card relative p-6 bg-gradient-to-br from-white/5 via-white/3 to-transparent rounded-2xl border border-white/10 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 hover:scale-[1.02]"
                                  >
                                    {/* Card background effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-2xl" />
                                    
                                    <div className="relative">
                                      {/* Header */}
                                      <div className="flex items-start gap-4 mb-4">
                                        <div className="mt-1 p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg border border-primary/20 group-hover/card:border-primary/40 transition-all duration-300 group-hover/card:scale-110">
                                          <CheckCircle className="w-4 h-4 text-primary" />
                                        </div>
                                        <div className="flex-1">
                                          <h5 className="text-white font-semibold mb-2 group-hover/card:text-primary transition-colors duration-300">
                                            {subDetail.title}
                                          </h5>
                                          <p className="text-neutral-300 text-sm leading-relaxed group-hover/card:text-neutral-200 transition-colors duration-300">
                                            {subDetail.description}
                                          </p>
                                        </div>
                                      </div>
                                      
                                      {/* Progress indicator */}
                                      <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-primary to-red-500 rounded-full transform -translate-x-full group-hover/card:translate-x-0 transition-transform duration-700" style={{ width: '70%' }} />
                                      </div>
                                    </div>

                                    {/* Decorative elements */}
                                    <div className="absolute top-3 right-3 w-2 h-2 bg-primary/40 rounded-full animate-pulse opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* CTA Section */}
                          <div className="pt-6 border-t border-white/10">
                            <div className="flex flex-col sm:flex-row gap-4">
                              <Button
                                variant="outline"
                                className="flex-1 border-2 border-primary/30 text-white bg-primary/5 hover:bg-primary/15 hover:border-primary/50 transition-all duration-300 hover:scale-105 group/btn"
                                asChild
                              >
                                <Link href="/#contact" className="flex items-center justify-center gap-2">
                                  <span>Get Started</span>
                                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                </Link>
                              </Button>
                              <Button
                                variant="outline"
                                className="flex-1 border-2 border-white/20 text-white bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
                                asChild
                              >
                                <Link href="/portfolio">View Examples</Link>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Decorative elements */}
                      <div className="absolute top-6 right-6 w-3 h-3 bg-primary/40 rounded-full animate-pulse" />
                      <div className="absolute bottom-6 left-6 w-2 h-2 bg-white/20 rounded-full animate-ping" />
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>

            {/* Enhanced Bottom CTA */}
            <div className={cn(
              "mt-20 text-center p-8 bg-gradient-to-r from-neutral-900/60 via-black/80 to-neutral-900/60 backdrop-blur-xl rounded-3xl border border-white/10 transition-all duration-1000",
              detailsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )} style={{ transitionDelay: "1000ms" }}>
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium mb-4">
                  <Star className="w-4 h-4 animate-pulse" />
                  <span>Ready to Transform?</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Let's Build Something <span className="bg-gradient-to-r from-primary via-red-500 to-orange-500 bg-clip-text text-transparent">Amazing</span>
                </h3>
                <p className="text-neutral-300 max-w-2xl mx-auto">
                  Our expert team is ready to help you implement the perfect solution for your business needs.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Button
                  variant="outline"
                  className="flex-1 border-2 border-primary/30 text-white bg-primary/5 hover:bg-primary/15 hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
                  asChild
                >
                  <Link href="/#contact" className="flex items-center justify-center gap-2">
                    <span>Start Your Project</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-2 border-white/20 text-white bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <Link href="/portfolio">View Portfolio</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Features Section */}
        <section 
          ref={featuresRef.ref} 
          className="relative py-20 md:py-32 bg-gradient-to-br from-neutral-900/50 via-black to-neutral-900/50 overflow-hidden"
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-black" />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/[0.03] to-transparent" />
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-primary/15 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
              <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-orange-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '4s' }} />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/5 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />
            </div>
          </div>

          <div className="relative container mx-auto px-6 max-w-screen-xl">
            <div className={cn(
              "text-center mb-16 md:mb-20 transition-all duration-1000",
              featuresRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400 mb-6 tracking-tight">
                Why Choose Our {serviceCategoryTitle}?
              </h2>
              <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed font-light">
                Experience the difference with our industry-leading approach, cutting-edge technology, and proven track record of success.
              </p>
              <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: <Sparkles className="w-8 h-8" />,
                  title: "Innovation First",
                  description: "We leverage the latest technologies and methodologies to deliver cutting-edge solutions that keep you ahead of the competition."
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: "Proven Results",
                  description: "Our track record speaks for itself with 99% client satisfaction rate and measurable ROI improvements across all projects."
                },
                {
                  icon: <Bot className="w-8 h-8" />,
                  title: "AI-Powered Solutions",
                  description: "Integrate artificial intelligence and automation to streamline processes and unlock new possibilities for your business."
                },
                {
                  icon: <DatabaseZap className="w-8 h-8" />,
                  title: "Data-Driven Insights",
                  description: "Make informed decisions with comprehensive analytics and reporting that provide actionable business intelligence."
                },
                {
                  icon: <Wand2 className="w-8 h-8" />,
                  title: "Custom Solutions",
                  description: "Every solution is tailored to your unique needs, ensuring perfect alignment with your business goals and requirements."
                },
                {
                  icon: <ArrowRight className="w-8 h-8" />,
                  title: "Future-Ready",
                  description: "Build scalable solutions that grow with your business and adapt to changing market demands and opportunities."
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className={cn(
                    "group relative p-8 bg-gradient-to-br from-neutral-800/40 via-neutral-900/60 to-black/80 backdrop-blur-xl rounded-2xl border border-white/5 hover:border-white/20 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-105",
                    featuresRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  <div className="relative">
                    <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className={cn(
              "grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-gradient-to-r from-neutral-900/50 via-black/70 to-neutral-900/50 backdrop-blur-xl rounded-3xl border border-white/10 transition-all duration-1000",
              featuresRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )} style={{ transitionDelay: "900ms" }}>
              {[
                { number: "500+", label: "Projects Completed" },
                { number: "99%", label: "Client Satisfaction" },
                { number: "24/7", label: "Support Available" },
                { number: "50+", label: "Expert Team Members" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-primary via-red-500 to-orange-500 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-neutral-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section 
          ref={processRef.ref}
          className="relative py-20 md:py-32 bg-black overflow-hidden"
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-black" />
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '9s' }} />
              <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '11s', animationDelay: '5s' }} />
            </div>
          </div>

          <div className="relative container mx-auto px-6 max-w-screen-xl">
            <div className={cn(
              "text-center mb-16 md:mb-20 transition-all duration-1000",
              processRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400 mb-6 tracking-tight">
                Our Process
              </h2>
              <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed font-light">
                A streamlined approach that ensures quality, efficiency, and exceptional results at every step of your project journey.
              </p>
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description: "We analyze your requirements, goals, and challenges to create a comprehensive project roadmap."
                },
                {
                  step: "02",
                  title: "Strategy",
                  description: "Develop a tailored strategy with clear milestones, timelines, and success metrics for your project."
                },
                {
                  step: "03",
                  title: "Execution",
                  description: "Our expert team implements the solution using agile methodologies and best practices."
                },
                {
                  step: "04",
                  title: "Delivery",
                  description: "Launch your solution with comprehensive testing, training, and ongoing support for success."
                }
              ].map((process, index) => (
                <div
                  key={index}
                  className={cn(
                    "group relative text-center p-8 transition-all duration-1000",
                    processRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-primary/30">
                      <span className="text-2xl font-black text-primary">
                        {process.step}
                      </span>
                    </div>
                    {index < 3 && (
                      <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                    {process.title}
                  </h3>
                  <p className="text-neutral-300 leading-relaxed">
                    {process.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section 
          ref={ctaRef.ref}
          className="relative py-24 bg-gradient-to-br from-black via-neutral-950 to-black overflow-hidden"
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-black" />
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/15 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
              <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-orange-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '3s' }} />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }} />
            </div>
          </div>

          <div className={cn(
            "relative container mx-auto px-6 max-w-4xl text-center transition-all duration-1000",
            ctaRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Ready to Get Started?</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400 mb-6 tracking-tight">
              Transform Your Business Today
            </h2>
            <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Join hundreds of successful businesses who trust our {serviceCategoryTitle} expertise. Let's discuss how we can drive your success with tailored solutions that deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary/30 text-white bg-primary/5 hover:bg-primary/15 hover:border-primary/50 transition-all duration-300 hover:scale-105 group backdrop-blur-xl"
                asChild
              >
                <Link href="/#contact" className="flex items-center gap-3">
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/20 text-white bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 backdrop-blur-xl"
                asChild
              >
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-16">
              {[
                {
                  icon: <Bot className="w-6 h-6" />,
                  title: "Free Consultation",
                  description: "Get expert advice tailored to your needs"
                },
                {
                  icon: <CheckCircle className="w-6 h-6" />,
                  title: "Quick Response",
                  description: "We respond within 24 hours"
                },
                {
                  icon: <Sparkles className="w-6 h-6" />,
                  title: "Custom Solutions",
                  description: "Tailored to your business requirements"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    "group p-6 bg-gradient-to-br from-neutral-800/40 via-neutral-900/60 to-black/80 backdrop-blur-xl rounded-xl border border-white/5 hover:border-white/20 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:scale-105",
                    ctaRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-neutral-300 text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer 
        ref={footerRef.ref}
        className="relative bg-gradient-to-br from-black via-neutral-950 to-black text-white py-20 overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-black" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-orange-500/5 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '9s', animationDelay: '4s' }} />
          </div>
        </div>

        <div className="relative container mx-auto px-6 max-w-screen-xl">
          <div className={cn(
            "text-center mb-16 p-8 bg-gradient-to-r from-neutral-900/50 via-black/70 to-neutral-900/50 backdrop-blur-xl rounded-3xl border border-white/10 transition-all duration-1000",
            footerRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
              Get the latest insights, industry trends, and exclusive updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-primary/50 transition-all duration-300"
              />
              <Button
                variant="outline"
                className="border-2 border-primary/30 text-white bg-primary/5 hover:bg-primary/15 hover:border-primary/50 transition-all duration-300 px-6"
              >
                Subscribe
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className={cn(
              "transition-all duration-1000",
              footerRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              <Link href="/" className="flex items-center space-x-2 mb-6 group">
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/btrussslogo.png"
                    alt="Btruss Logo"
                    width={120}
                    height={30}
                    className="filter drop-shadow-lg"
                  />
                </div>
              </Link>
              <p className="text-neutral-300 leading-relaxed mb-6">
                Empowering businesses with innovative digital solutions and cutting-edge technology that drives growth and success.
              </p>
              <div className="flex space-x-4">
                {[
                  { href: "#", icon: "LinkedIn" },
                  { href: "#", icon: "Twitter" },
                  { href: "#", icon: "GitHub" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gradient-to-br from-neutral-800/40 via-neutral-900/60 to-black/80 backdrop-blur-xl rounded-lg border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 hover:scale-110"
                  >
                    <span className="text-xs font-medium">{social.icon[0]}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className={cn(
              "transition-all duration-1000",
              footerRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )} style={{ transitionDelay: '200ms' }}>
              <h3 className="font-semibold text-lg mb-6 text-white">Services</h3>
              <ul className="space-y-3 text-neutral-300">
                <li><Link href="/services/it-services" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block group"><span className="group-hover:text-primary">IT Services</span></Link></li>
                <li><Link href="/services/healthcare-services" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block group"><span className="group-hover:text-primary">Healthcare</span></Link></li>
                <li><Link href="/services/ai-services" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block group"><span className="group-hover:text-primary">AI Solutions</span></Link></li>
                <li><Link href="/services/resource-outsource" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block group"><span className="group-hover:text-primary">Outsourcing</span></Link></li>
              </ul>
            </div>

            <div className={cn(
              "transition-all duration-1000",
              footerRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )} style={{ transitionDelay: '400ms' }}>
              <h3 className="font-semibold text-lg mb-6 text-white">Company</h3>
              <ul className="space-y-3 text-neutral-300">
                <li><Link href="/about-us" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block group"><span className="group-hover:text-primary">About</span></Link></li>
                <li><Link href="#" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block group"><span className="group-hover:text-primary">Careers</span></Link></li>
                <li><Link href="/portfolio" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block group"><span className="group-hover:text-primary">Our Work</span></Link></li>
                <li><Link href="/#contact" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block group"><span className="group-hover:text-primary">Contact</span></Link></li>
              </ul>
            </div>

            <div className={cn(
              "transition-all duration-1000",
              footerRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )} style={{ transitionDelay: '600ms' }}>
              <h3 className="font-semibold text-lg mb-6 text-white">Resources</h3>
              <ul className="space-y-3 text-neutral-300">
                <li><Link href="#" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block group"><span className="group-hover:text-primary">Blog</span></Link></li>
                <li><Link href="#" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block group"><span className="group-hover:text-primary">Case Studies</span></Link></li>
                <li><Link href="#" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block group"><span className="group-hover:text-primary">White Papers</span></Link></li>
                <li><Link href="#" className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block group"><span className="group-hover:text-primary">Support</span></Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-neutral-300 text-center md:text-left">
                {currentYear !== null && <p>© {currentYear} Btruss. All rights reserved.</p>}
              </div>
              <div className="flex space-x-8 text-sm text-neutral-300">
                <Link href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
                <Link href="#" className="hover:text-white transition-colors duration-300">Terms of Service</Link>
                <Link href="#" className="hover:text-white transition-colors duration-300">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.1);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.2);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.7s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #000;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #ef4444);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #dc2626);
        }
      `}</style>
    </div>
  );
}
