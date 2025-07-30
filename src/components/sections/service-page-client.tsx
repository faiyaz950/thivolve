"use client";

import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Code, Megaphone, Palette, Smartphone, Bot, DatabaseZap, Menu, X, Star, Play, Award, Target, Zap, Heart, CreditCard, Shield } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { notFound } from 'next/navigation';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import type { Service } from '@/lib/services-data';

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

// Enhanced Feature Card Component
const FeatureCard = ({ feature, index, isVisible }: { feature: any; index: number; isVisible: boolean }) => {
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
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-110" />
      <div className="relative bg-gradient-to-br from-neutral-800/40 via-neutral-900/60 to-black/80 backdrop-blur-xl rounded-2xl border border-white/5 p-6 overflow-hidden hover:border-white/20 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-700 hover:scale-105">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative flex items-center gap-4">
          <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl border border-primary/20 group-hover:border-primary/40 transition-all duration-500 group-hover:scale-110">
            {getIcon(feature.icon, "w-6 h-6 text-primary group-hover:text-primary/90 transition-colors duration-300")}
            <div className="absolute inset-0 bg-primary/20 rounded-xl opacity-0 group-hover:opacity-50 blur-lg transition-all duration-500" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors duration-300 mb-1">
              {feature.title}
            </h3>
            <p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300 leading-relaxed">
              {feature.description}
            </p>
          </div>
        </div>
        <div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
        <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/20 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
};

// Enhanced Process Step Component
const ProcessStep = ({ process, index, isVisible }: { process: any; index: number; isVisible: boolean }) => {
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
        hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
      <div className="relative bg-gradient-to-br from-neutral-800/40 via-neutral-900/60 to-black/80 backdrop-blur-xl rounded-2xl border border-white/5 p-6 text-center overflow-hidden hover:border-white/20 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-700 hover:scale-105">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center border border-primary/30 group-hover:border-primary/40 group-hover:scale-110 transition-all duration-500">
            <span className="text-xl font-bold text-primary">{process.step}</span>
            <div className="absolute inset-0 bg-primary/20 rounded-full opacity-0 group-hover:opacity-50 blur-lg transition-all duration-500" />
          </div>
          <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors duration-300 mb-2">
            {process.title}
          </h3>
          <p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300 leading-relaxed">
            {process.description}
          </p>
        </div>
        <div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
      </div>
    </div>
  );
};

export default function ServicePageClient({ service }: { service: Service }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isContentVisible, setIsContentVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentYear, setCurrentYear] = useState<number | null>(null);

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
    const interval = setInterval(() => {
      setIsContentVisible(false);
      setTimeout(() => {
        setCurrentSlideIndex((prev) => (prev + 1) % service.hero.slides.length);
        setIsContentVisible(true);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, [service]);

  if (!service || !service.details || service.details.length === 0) return notFound();

  const { hero, details, title: serviceCategoryTitle } = service;
  const currentSlide = hero?.slides && hero.slides.length > 0 ? hero.slides[currentSlideIndex] : null;

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

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Enhanced Header */}
      <header className="w-full bg-black/95 backdrop-blur-md transition-all duration-500 ease-out shadow-lg shadow-primary/20 h-16">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between max-w-7xl">
          <Link href="/" className="group flex items-center relative" aria-label="Btruss Home">
            <Image
              src="/btrussslogo.png"
              alt="Btruss Logo"
              width={100}
              height={25}
              priority
              className="group-hover:scale-105 group-hover:rotate-3 transition-transform duration-500 ease-out group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
            />
            <div className="absolute inset-0 bg-primary/20 rounded-full filter blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
          </Link>

          <nav className="hidden md:flex gap-10 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative text-sm font-semibold text-neutral-200 hover:text-primary group transition-colors duration-300 ease-out"
                aria-current={link.href === "/" ? "page" : undefined}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-orange-500 group-hover:w-full transition-all duration-500 ease-out rounded-full" />
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="hidden md:block relative border-2 border-primary/60 text-white hover:bg-primary/20 hover:border-primary/80 hover:scale-105 transition-all duration-500 ease-out bg-gradient-to-r from-primary/10 to-transparent backdrop-blur-md px-6 py-2 text-base font-semibold group animate-glow"
              asChild
              aria-label="Book a Meeting"
            >
              <Link href="/#contact">
                Book a Meeting
                <span className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-neutral-200" />}
            </button>
          </div>
        </div>

        <div
          className={cn(
            "md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ease-out z-40",
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
          onClick={() => setIsMenuOpen(false)}
        />

        <nav
          className={cn(
            "md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 fixed top-16 left-0 w-full transition-all duration-500 ease-out z-50 shadow-lg",
            isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          )}
        >
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "block py-3 text-lg font-medium text-neutral-200 hover:text-primary transition-all duration-300 ease-out",
                  isMenuOpen ? "opacity-100 translate-x-0 animate-slide-in-right" : "opacity-0 -translate-x-6"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
                aria-current={link.href === "/" ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
            <Button
              variant="outline"
              className="w-full mt-6 border-2 border-primary/60 hover:bg-primary/20 hover:border-primary/80 transition-all duration-500 ease-out bg-gradient-to-r from-primary/10 to-transparent text-base font-semibold group"
              asChild
            >
              <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>
                Book a Meeting
                <span className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
            </Button>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section
          ref={heroRef.ref}
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0">
            {hero?.slides && hero.slides.length > 0 && (
              <div className="h-full transition-transform duration-1000" style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}>
                {hero.slides.map((slide, index) => (
                  <Image
                    key={index}
                    src={slide.image.src}
                    alt={slide.image.alt}
                    fill
                    className="object-cover opacity-20"
                    priority={index === 0}
                  />
                ))}
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
              <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
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
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight leading-tight">
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
              <div className="absolute -top-6 -left-6 w-4 h-4 bg-primary rounded-full animate-ping" />
              <div className="absolute -top-4 -right-8 w-3 h-3 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed font-light mb-12 max-w-4xl mx-auto">
              {currentSlide?.description || `Transform your business with our cutting-edge ${serviceCategoryTitle} solutions that drive growth and innovation.`}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
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
                className="group relative border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-white/20 backdrop-blur-sm bg-gradient-to-r from-white/5 to-transparent px-8 py-6 text-lg"
                asChild
              >
                <Link href="/#contact" className="flex items-center gap-3">
                  <span className="font-semibold">Get Started</span>
                  <Play className="h-6 w-6 transition-all duration-500 group-hover:scale-110" />
                </Link>
              </Button>
            </div>
            {hero?.slides && hero.slides.length > 1 && (
              <div className="flex gap-3 justify-center">
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
                      "w-3 h-3 rounded-full border border-white/20 transition-all duration-300",
                      index === currentSlideIndex
                        ? "bg-primary scale-125 border-primary/50"
                        : "bg-white/30 hover:bg-white/50 hover:scale-110"
                    )}
                  />
                ))}
              </div>
            )}
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-8 animate-pulse" />
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
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400 mb-6 tracking-tight">
                  {serviceCategoryTitle} <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Solutions</span>
                </h2>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
              </div>
              <p className="text-xl text-neutral-400 max-w-3xl mx-auto mt-6 leading-relaxed">
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
                        <div className="group relative rounded-2xl overflow-hidden border border-white/10 group-hover:border-primary/20 transition-all duration-500 aspect-square">
                          <Image
                            src={detail.backgroundImage || 'https://placehold.co/600x600.png'}
                            alt={`${detail.title} illustration`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700 filter group-hover:brightness-110"
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
                            <h3 className="text-3xl font-bold text-white">{detail.title}</h3>
                            <p className="text-sm text-primary font-medium">Premium Solution</p>
                          </div>
                        </div>
                        <p className="text-lg text-neutral-300 leading-relaxed">{detail.description || 'No description available.'}</p>
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

        {/* Features Section */}
        <section
          ref={featuresRef.ref}
          className="relative py-20 md:py-32 bg-gradient-to-br from-neutral-900/50 via-black to-neutral-900/50 overflow-hidden"
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/[0.01] to-transparent" />
            <div className="absolute inset-0 opacity-20">
              <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
            </div>
          </div>
          <div className="relative container mx-auto px-6 max-w-screen-xl">
            <div className={cn(
              "text-center mb-16 md:mb-20 transition-all duration-1000",
              featuresRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              <div className="relative inline-block">
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400 mb-6 tracking-tight">
                  Why Choose <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Us?</span>
                </h2>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
              </div>
              <p className="text-xl text-neutral-400 max-w-3xl mx-auto mt-6 leading-relaxed">
                Our expertise and innovative approach ensure your success with tailored solutions that drive real results.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  icon: 'website-development',
                  title: 'Innovative Technology',
                  description: 'Leveraging cutting-edge tools and frameworks for robust, future-ready solutions.'
                },
                {
                  icon: 'mobile-application-development',
                  title: 'Expert Team',
                  description: 'Skilled professionals with years of proven expertise and industry knowledge.'
                },
                {
                  icon: 'digital-marketing',
                  title: '24/7 Support',
                  description: 'Round-the-clock assistance ensuring seamless operations and quick resolutions.'
                },
                {
                  icon: 'graphics-designing',
                  title: 'Custom Solutions',
                  description: 'Tailored approaches designed to meet your unique business requirements and goals.'
                },
                {
                  icon: 'ai-automation',
                  title: 'AI Integration',
                  description: 'Smart automation and AI-powered features to streamline your business processes.'
                },
                {
                  icon: 'data-analysis',
                  title: 'Scalable Growth',
                  description: 'Solutions that evolve and scale with your business as it grows and expands.'
                }
              ].map((feature, index) => (
                <FeatureCard
                  key={index}
                  feature={feature}
                  index={index}
                  isVisible={featuresRef.isVisible}
                />
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
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/[0.02] to-transparent" />
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '7s' }} />
            </div>
          </div>
          <div className="relative container mx-auto px-6 max-w-screen-xl">
            <div className={cn(
              "text-center mb-16 md:mb-20 transition-all duration-1000",
              processRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              <div className="relative inline-block">
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400 mb-6 tracking-tight">
                  Our <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Process</span>
                </h2>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
              </div>
              <p className="text-xl text-neutral-400 max-w-3xl mx-auto mt-6 leading-relaxed">
                A streamlined, proven methodology that ensures quality delivery and exceptional results every time.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {[
                {
                  step: "01",
                  title: "Discovery & Analysis",
                  description: "Deep dive into your business needs, goals, and challenges to create a comprehensive project roadmap."
                },
                {
                  step: "02",
                  title: "Strategy & Planning",
                  description: "Develop a tailored strategic plan with clear milestones, timelines, and deliverables."
                },
                {
                  step: "03",
                  title: "Design & Development",
                  description: "Implement cutting-edge solutions using agile methodologies and best practices."
                },
                {
                  step: "04",
                  title: "Testing & Launch",
                  description: "Rigorous testing, seamless deployment, and comprehensive ongoing support and maintenance."
                }
              ].map((process, index) => (
                <ProcessStep
                  key={index}
                  process={process}
                  index={index}
                  isVisible={processRef.isVisible}
                />
              ))}
            </div>
          </div>
        </section>

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
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400 mb-6 tracking-tight">
                Transform Your <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Business</span>
              </h2>
              <div className="absolute -top-6 -left-6 w-4 h-4 bg-primary rounded-full animate-ping" />
              <div className="absolute -top-4 -right-8 w-3 h-3 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed font-light mb-12 max-w-4xl mx-auto">
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

      {/* Footer */}
      <footer
        ref={footerRef.ref}
        className="relative py-16 md:py-20 bg-black text-white overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-black" />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/[0.01] to-transparent" />
        </div>
        <div className="relative container mx-auto px-6 max-w-screen-xl">
          <div className={cn(
            "grid md:grid-cols-4 gap-8 lg:gap-12 mb-12 transition-all duration-1000",
            footerRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div className="md:col-span-1">
              <Link href="/" className="group flex items-center mb-6">
                <Image
                  src="/btrussslogo.png"
                  alt="Btruss Logo"
                  width={120}
                  height={30}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <p className="text-neutral-400 mb-6 leading-relaxed">
                Empowering businesses with comprehensive health, finance, and insurance solutions.
              </p>
              <div className="flex gap-4">
                {['LinkedIn', 'Twitter', 'GitHub', 'Instagram'].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="group w-10 h-10 bg-gradient-to-br from-neutral-800/50 to-neutral-900/70 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-primary/10 hover:border-primary/30 flex items-center justify-center text-neutral-300 hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <span className="font-semibold text-sm">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-6 text-white">Our Services</h3>
              <ul className="space-y-3 text-neutral-400">
                {['Health Services', 'Credit Card Sales', 'Insurance Services', 'Health Checkups', 'Diagnostic Tests', 'Life Insurance', 'Term Plans'].map((item, index) => (
                  <li key={index}>
                    <Link
                      href={`/services/${item.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}
                      className="hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                      <span>{item}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-6 text-white">Company</h3>
              <ul className="space-y-3 text-neutral-400">
                {[
                  { label: 'About Us', href: '/about-us' },
                  { label: 'Careers', href: '/careers' },
                  { label: 'Our Work', href: '/#our-work' },
                  { label: 'Contact', href: '/#contact' }
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-6 text-white">Contact Info</h3>
              <ul className="space-y-3 text-neutral-400">
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-primary/20 rounded-lg border border-primary/30 mt-1">
                    <span className="w-4 h-4 text-primary text-xs">📍</span>
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">Address</p>
                    <p className="text-sm">123 Business Street, Patna, Bihar, India</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-primary/20 rounded-lg border border-primary/30 mt-1">
                    <span className="w-4 h-4 text-primary text-xs">📞</span>
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">Phone</p>
                    <Link href="tel:+911234567890" className="text-sm hover:text-primary transition-colors duration-300">
                      +91 123 456 7890
                    </Link>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-primary/20 rounded-lg border border-primary/30 mt-1">
                    <span className="w-4 h-4 text-primary text-xs">✉️</span>
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">Email</p>
                    <Link href="mailto:info@btruss.com" className="text-sm hover:text-primary transition-colors duration-300">
                      info@btruss.com
                    </Link>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-primary/20 rounded-lg border border-primary/30 mt-1">
                    <span className="w-4 h-4 text-primary text-xs">🕒</span>
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">Business Hours</p>
                    <p className="text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-sm">Sat: 10:00 AM - 4:00 PM</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-neutral-400">
              {currentYear && `© ${currentYear} Btruss Services Pvt Ltd. All rights reserved.`}
            </p>
            <div className="flex gap-8 text-sm text-neutral-400">
              <Link href="#" className="hover:text-primary transition-colors duration-300">Privacy Policy</Link>
              <Link href="#" className="hover:text-primary transition-colors duration-300">Terms of Service</Link>
              <Link href="#" className="hover:text-primary transition-colors duration-300">Cookie Policy</Link>
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

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.6);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out forwards;
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

        *:focus {
          outline: 2px solid rgba(59, 130, 246, 0.5);
          outline-offset: 2px;
        }
      `}</style>
    </div>
  );
}
