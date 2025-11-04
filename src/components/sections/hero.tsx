"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MobileNav } from '@/components/layout/mobile-nav';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, Star, Menu, Play, Smartphone, Globe, Code, Palette, Megaphone, Bot, ChevronDown, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const heroMainHeadlineText = "WE HELP BUSINESS";
const animatedSentences = [
  'Improve their Online Presence',
  'Build Bridges to Success',
  'Switch from Offline to Online',
  'Generate More Sales',
  'Scale Their Operations',
];

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1698047682129-c3e217ac08b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtfGVufDB8fHx8MTc0Nzk5ODc4NXww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Modern office team collaborating",
    hint: "modern office team"
  },
  {
    src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx1eCUyMGRlc2lnbiUyMHByb2Nlc3N8ZW58MHx8fHwxNzQ4ODUwMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "UX design process sketch",
    hint: "ux design process"
  },
  {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzfGVufDB8fHx8fDE3NDg4NTAwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Data analytics dashboard",
    hint: "data analytics"
  },
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5fGVufDB8fHx8fDE3NDg4NTAwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Business strategy session",
    hint: "business strategy"
  },
];

const navLinks = [
  { href: "/about-us", label: "About Us" },
  { href: "/our-work", label: "Our Work" },
  { href: "/#contact", label: "Contact Us" },
];

const services = [
    { slug: 'mobile-app-development', title: "Mobile App Development", icon: Smartphone, description: "Native & Cross-platform apps" },
    { slug: 'website-development', title: "Website Development", icon: Globe, description: "Responsive & Modern websites" },
    { slug: 'custom-software-development', title: "Custom Software Development", icon: Code, description: "Tailored business solutions" },
    { slug: 'graphics-design', title: "Graphics Design", icon: Palette, description: "Creative visual content" },
    { slug: 'seo-and-digital-marketing', title: "SEO & Digital Marketing", icon: Megaphone, description: "Grow your online reach" },
    { slug: 'ai-services', title: "AI Services", icon: Bot, description: "Intelligent automation" },
];

const mobileNavLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/#services", label: "Services" },
  ...services.map(s => ({ href: `/services/${s.slug}`, label: `  ${s.title}` })),
  { href: "/our-work", label: "Our Work" },
  { href: "/#contact", label: "Contact Us" },
];

export function Hero() {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [isSentenceVisible, setIsSentenceVisible] = useState(true);
  const [mainHeadlineLetters, setMainHeadlineLetters] = useState<{ char: string; show: boolean }[]>(
    heroMainHeadlineText.split('').map(char => ({ char, show: false }))
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useScrollAnimation({ threshold: 0.1 });

  // Scroll detection for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initial load animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // One-time animation for main headline letters with slide-in effect
  useEffect(() => {
    if (!isLoaded || animationCompleted) return;
    
    const timers = heroMainHeadlineText.split('').map((_, index) =>
      setTimeout(() => {
        setMainHeadlineLetters(prev => {
          const newLetters = [...prev];
          if (newLetters[index]) {
            newLetters[index].show = true;
          }
          return newLetters;
        });
      }, index * 150 + 800)
    );

    const completionTimer = setTimeout(() => {
      setAnimationCompleted(true);
    }, heroMainHeadlineText.length * 150 + 1500);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(completionTimer);
    };
  }, [isLoaded, animationCompleted]);

  useEffect(() => {
    const displayDuration = 4000;
    const fadeDuration = 800;
    const sentenceInterval = setInterval(() => {
      setIsSentenceVisible(false);
      setTimeout(() => {
        setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % animatedSentences.length);
        setIsSentenceVisible(true);
      }, fadeDuration);
    }, displayDuration + fadeDuration);
    return () => clearInterval(sentenceInterval);
  }, []);

  useEffect(() => {
    const imageSliderInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 7000);
    return () => clearInterval(imageSliderInterval);
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(239, 68, 68, 0.3); }
          50% { box-shadow: 0 0 40px rgba(239, 68, 68, 0.6), 0 0 60px rgba(239, 68, 68, 0.3); }
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        
        @keyframes slideInScale {
          0% { 
            opacity: 0;
            transform: translateX(-30px) scale(0.8);
          }
          50% {
            opacity: 0.7;
            transform: translateX(5px) scale(1.1);
          }
          100% { 
            opacity: 1;
            transform: translateX(0px) scale(1);
          }
        }
        
        .animate-slide-in-scale {
          animation: slideInScale 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        .animate-shimmer {
          animation: shimmer 3s linear infinite;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 1000px 100%;
        }
      `}</style>

      <section 
        ref={heroRef.ref}
        className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-br from-slate-900 via-black to-slate-900"
      >
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0">
          {/* Hero Image Slider */}
          <div className="absolute inset-0">
            {heroImages.map((image, index) => (
              <div key={index} className="absolute inset-0">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className={cn(
                    "object-cover transition-all duration-1500 ease-in-out",
                    index === currentImageIndex ? "opacity-80 scale-105" : "opacity-0 scale-100"
                  )}
                  priority={index === 0}
                />
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br from-black/20 via-black/10 to-red-500/5 transition-opacity duration-1500",
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                )} />
              </div>
            ))}
          </div>

          <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-slate-900/20 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: `
              radial-gradient(circle at 25px 25px, white 1px, transparent 0),
              radial-gradient(circle at 75px 75px, rgba(239, 68, 68, 0.3) 0.5px, transparent 0)
            `,
            backgroundSize: '50px 50px, 100px 100px'
          }} />

          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/30 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
          </div>
        </div>

        {/* New Premium Header Design */}
        <header className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled 
            ? "bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50" 
            : "bg-transparent"
        )}>
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between h-20">
              {/* Logo with glassmorphism effect */}
              <Link href="/" className="relative group">
                <div className={cn(
                  "absolute inset-0 rounded-2xl transition-all duration-500",
                  scrolled ? "bg-red-500/5" : "bg-white/5"
                )}>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="relative px-4 py-2">
                  <Image
                    src="/thivolvelogos.png"
                    alt="Thivolve Logo"
                    width={120}
                    height={120}
                    className="w-20 h-20 md:w-24 md:h-24 object-contain transition-all duration-500 group-hover:scale-110 drop-shadow-2xl"
                  />
                </div>
              </Link>

              {/* Premium Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-2">
                <Link
                  href="/"
                  className="relative group px-5 py-2.5 text-white/90 hover:text-white transition-all duration-300 font-medium text-sm"
                >
                  <span className="relative z-10">Home</span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-12 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent transition-all duration-300" />
                </Link>
                
                {/* Premium Services Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="group relative px-5 py-2.5 text-white/90 hover:text-white transition-all duration-300 font-medium text-sm flex items-center gap-2 outline-none">
                      <span className="relative z-10">Services</span>
                      <ChevronDown className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100" />
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-16 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent transition-all duration-300" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    className="w-[420px] bg-black/95 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/50 rounded-2xl p-3 mt-2"
                    align="start"
                  >
                    <div className="grid grid-cols-2 gap-2">
                      {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                          <DropdownMenuItem key={service.slug} asChild>
                            <Link 
                              href={`/services/${service.slug}`} 
                              className="group relative flex flex-col items-start gap-2 p-4 cursor-pointer rounded-xl transition-all duration-300 hover:bg-gradient-to-br hover:from-red-500/10 hover:to-red-500/5 border border-transparent hover:border-red-500/20"
                              style={{ animationDelay: `${index * 50}ms` }}
                            >
                              <div className="flex items-center gap-3 w-full">
                                <div className="relative">
                                  <div className="absolute inset-0 bg-red-500/20 rounded-lg blur-sm group-hover:blur-md transition-all duration-300" />
                                  <div className="relative bg-gradient-to-br from-red-500/20 to-red-500/10 p-2.5 rounded-lg group-hover:scale-110 transition-transform duration-300">
                                    <Icon className="h-5 w-5 text-red-500" />
                                  </div>
                                </div>
                                <div className="flex-1">
                                  <div className="text-white font-semibold text-sm group-hover:text-red-400 transition-colors duration-300">
                                    {service.title}
                                  </div>
                                </div>
                              </div>
                              <p className="text-xs text-white/50 group-hover:text-white/70 transition-colors duration-300 pl-1">
                                {service.description}
                              </p>
                              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500/0 via-red-500/5 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer" />
                            </Link>
                          </DropdownMenuItem>
                        );
                      })}
                    </div>
                    <div className="mt-3 pt-3 border-t border-white/10">
                      <Link 
                        href="/#services"
                        className="flex items-center justify-center gap-2 text-sm text-red-400 hover:text-red-300 transition-colors duration-300 py-2 group"
                      >
                        <span>View All Services</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>

                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative group px-5 py-2.5 text-white/90 hover:text-white transition-all duration-300 font-medium text-sm"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="relative z-10">{link.label}</span>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-12 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent transition-all duration-300" />
                  </Link>
                ))}
              </nav>

              {/* CTA & Mobile Menu */}
              <div className="flex items-center gap-4">
                <Button
                  size="sm"
                  className="hidden sm:flex relative overflow-hidden group bg-transparent hover:bg-red-500/10 border border-red-500/30 hover:border-red-500/50 text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/20 font-medium px-6 py-2.5 rounded-xl"
                  asChild
                >
                  <Link href="#contact" className="flex items-center gap-2 relative z-10">
                    <Sparkles className="h-4 w-4 text-red-400" />
                    <span>Book a Meeting</span>
                     <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                  </Link>
                </Button>

                <div className="md:hidden">
                  <MobileNav 
                    navLinks={mobileNavLinks} 
                    triggerClassName="text-white hover:bg-white/10 transition-all duration-300 border border-white/20 hover:border-white/40 backdrop-blur-sm rounded-xl" 
                  />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Enhanced Navigation Dots */}
        <div className="absolute top-1/2 right-6 transform -translate-y-1/2 z-40 flex flex-col space-y-4">
          {heroImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={cn(
                "relative w-3 h-3 rounded-full transition-all duration-700 ease-out group hover:scale-125",
                index === currentImageIndex
                  ? "bg-red-500 scale-125 shadow-lg shadow-red-500/50"
                  : "bg-white/30 hover:bg-red-500/70"
              )}
            >
              <div className="sr-only">{image.hint}</div>
            </button>
          ))}
        </div>

        {/* Enhanced Main Content */}
        <div className="relative z-20 flex-1 flex items-center justify-center px-6 pt-32 pb-24">
          <div className={cn(
            "text-center max-w-6xl mx-auto transition-all duration-1000 transform",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            {/* Enhanced Headline */}
            <div className="relative mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400 tracking-tight leading-[0.9] drop-shadow-2xl mb-4">
                {mainHeadlineLetters.map((item, index) => {
                  return (
                    <span
                      key={index}
                      className={cn(
                        "inline-block transition-all duration-300 transform-gpu hover:scale-110 cursor-default relative",
                        item.show 
                          ? "opacity-100 translate-y-0 scale-100 text-white animate-slide-in-scale" 
                          : "opacity-0 translate-y-12 scale-50 text-red-500/20"
                      )}
                      style={{ 
                        transitionDelay: `${index * 150}ms`,
                        fontFamily: 'system-ui, -apple-system, sans-serif',
                        fontWeight: '900',
                        animationDelay: `${index * 150}ms`,
                        filter: item.show ? 'drop-shadow(0 0 10px rgba(239, 68, 68, 0.3))' : 'none'
                      }}
                    >
                      {item.char === " " ? "\u00A0" : item.char}
                    </span>
                  );
                })}
              </h1>
              
              <div className="absolute -top-6 -left-6 w-4 h-4 bg-red-500 rounded-full animate-ping" />
              <div className="absolute -top-4 -right-8 w-3 h-3 bg-red-500/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute -bottom-4 left-1/4 w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            {/* Animated Sentence */}
            <div className="relative mb-12">
              <h2 className={cn(
                "text-xl md:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-red-500 via-red-500/80 to-red-500 bg-clip-text text-transparent transition-all duration-800 transform-gpu",
                isSentenceVisible 
                  ? "opacity-100 translate-y-0 scale-100" 
                  : "opacity-0 translate-y-6 scale-95"
              )}
              style={{ 
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontWeight: '600'
              }}>
                {animatedSentences[currentSentenceIndex]}
              </h2>

              <div className={cn(
                "absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent transition-all duration-800 rounded-full",
                isSentenceVisible ? "w-32 opacity-100" : "w-0 opacity-0"
              )} />
            </div>

            {/* Description */}
            <div className="relative mb-12">
              <p className="text-base md:text-lg text-neutral-300 leading-relaxed max-w-4xl mx-auto"
                style={{ 
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  fontWeight: '400'
                }}>
                Thivolve transforms your vision into reality with a suite of innovative IT solutions, from custom software and websites to engaging mobile apps and strategic digital marketing.
              </p>
            </div>

            {/* Fixed CTA Buttons - Get Started hover issue resolved */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button
                size="lg"
                className="group relative bg-gradient-to-r from-red-500 via-red-500/90 to-red-500 hover:from-red-600 hover:via-red-600 hover:to-red-600 border-0 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-red-500/50 px-8 py-6 text-lg font-semibold overflow-hidden rounded-2xl"
                asChild
              >
                <Link href="#contact" className="flex items-center gap-3 relative z-10 text-white"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  <span className="text-white">Get Started</span>
                  <ArrowRight className="h-6 w-6 text-white transition-all duration-500 group-hover:translate-x-3 group-hover:rotate-12" />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="group relative border-2 border-red-500/60 text-white hover:bg-red-500/20 hover:text-white hover:border-red-500/80 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-red-500/30 backdrop-blur-lg bg-gradient-to-r from-red-500/10 via-transparent to-red-500/10 px-8 py-6 text-lg font-semibold overflow-hidden rounded-2xl"
                asChild
              >
                <Link href="/our-work" className="flex items-center gap-3 relative z-10"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  <span>View Our Work</span>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3].map((star) => (
                      <Star
                        key={star}
                        className="h-4 w-4 fill-red-500 text-red-500 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12"
                        style={{ animationDelay: `${star * 150}ms` }}
                      />
                    ))}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/20 to-red-500/0 transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                </Link>
              </Button>
            </div>

            {/* Accent line */}
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto animate-pulse" />
          </div>
        </div>

        {/* Enhanced Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-5 h-8 border-2 border-red-500/60 rounded-full flex justify-center">
            <div className="w-0.5 h-2 bg-red-500 rounded-full mt-1.5 animate-pulse" />
          </div>
          <span className="text-red-500/60 text-xs font-medium">Scroll</span>
        </div>
      </section>
    </>
  );
}
