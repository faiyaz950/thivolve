
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MobileNav } from '@/components/layout/mobile-nav';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, Star, Menu, Play } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

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
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzfGVufDB8fHx8MTc0ODg1MDAwMHww&ixlib=rb-4.1.0&q=80&w=1080",
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
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/#services", label: "Services" },
  { href: "/portfolio", label: "Our Work" },
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
  const heroRef = useScrollAnimation({ threshold: 0.1 });

  // Initial load animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Enhanced animation for main headline letters
  useEffect(() => {
    if (!isLoaded) return;
    
    const timers = heroMainHeadlineText.split('').map((_, index) =>
      setTimeout(() => {
        setMainHeadlineLetters(prev => {
          const newLetters = [...prev];
          if (newLetters[index]) {
            newLetters[index].show = true;
          }
          return newLetters;
        });
      }, index * 80 + 500)
    );
    return () => timers.forEach(clearTimeout);
  }, [isLoaded]);

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
          0%, 100% { box-shadow: 0 0 20px rgba(var(--primary), 0.3); }
          50% { box-shadow: 0 0 40px rgba(var(--primary), 0.6), 0 0 60px rgba(var(--primary), 0.3); }
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
      `}</style>

      <section 
        ref={heroRef.ref}
        className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-br from-slate-900 via-black to-slate-900"
      >
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0">
          {/* Hero Image Slider with lighter overlay */}
          <div className="absolute inset-0">
            {heroImages.map((image, index) => (
              <div key={index} className="absolute inset-0">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className={cn(
                    "object-cover transition-all duration-1500 ease-in-out",
                    index === currentImageIndex ? "opacity-60 scale-105" : "opacity-0 scale-100"
                  )}
                  priority={index === 0}
                />
                {/* Lighter overlay to show more image */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br from-black/40 via-black/25 to-primary/10 transition-opacity duration-1500",
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                )} />
              </div>
            ))}
          </div>

          {/* Lighter gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-slate-900/40 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Dynamic grid pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `
              radial-gradient(circle at 25px 25px, white 1px, transparent 0),
              radial-gradient(circle at 75px 75px, rgba(var(--primary), 0.3) 0.5px, transparent 0)
            `,
            backgroundSize: '50px 50px, 100px 100px'
          }} />
        </div>

        {/* Enhanced Header Bar */}
        <header className="relative z-50 w-full">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent backdrop-blur-2xl border-b border-white/10" />
          
          <div className="relative container mx-auto px-6 py-5">
            <div className="flex items-center justify-between">
              {/* Enhanced Logo */}
              <Link href="/" className="relative group">
                <Image
                  src="/whitelogo.png"
                  alt="Btruss Logo"
                  width={50}
                  height={50}
                  className="w-20 h-20 object-contain transition-all duration-300 group-hover:scale-105"
                />
              </Link>

              {/* Enhanced Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-1">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative group py-3 px-4 text-neutral-300 hover:text-white transition-all duration-300 rounded-lg font-medium"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="relative z-10">{link.label}</span>
                    <div className="absolute inset-x-0 bottom-1 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100" />
                  </Link>
                ))}
              </nav>

              {/* Enhanced CTA & Mobile Menu */}
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  className="hidden sm:flex border-primary/50 bg-gradient-to-r from-primary/10 to-transparent text-white hover:bg-primary/20 hover:border-primary/70 transition-all duration-300 hover:scale-105 backdrop-blur-sm animate-pulse-glow font-medium"
                  asChild
                >
                  <Link href="#contact" className="flex items-center gap-2">
                    <Play className="h-4 w-4" />
                    Book a Meeting
                  </Link>
                </Button>

                <Button
                  variant="ghost" 
                  size="icon"
                  className="md:hidden text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>

          {/* Enhanced Mobile Navigation */}
          <div className={cn(
            "md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-white/10 transition-all duration-500 transform origin-top",
            mobileMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
          )}>
            <nav className="container mx-auto px-6 py-6">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-white hover:text-primary transition-all duration-300 py-3 text-lg font-medium border-b border-white/5 hover:border-primary/20 hover:pl-2 hover:bg-primary/5 rounded-lg px-4"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-white/10">
                  <Button
                    variant="outline"
                    className="w-full border-primary/50 bg-gradient-to-r from-primary/10 to-transparent text-white hover:bg-primary/20 hover:border-primary/70 font-medium"
                    asChild
                  >
                    <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                      Book a Meeting
                    </Link>
                  </Button>
                </div>
              </div>
            </nav>
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
                  ? "bg-primary scale-125 shadow-lg shadow-primary/50"
                  : "bg-white/30 hover:bg-primary/70"
              )}
            >
              <div className="sr-only">{image.hint}</div>
            </button>
          ))}
        </div>

        {/* Enhanced Main Content */}
        <div className="relative z-20 flex-1 flex items-center justify-center px-6">
          <div className={cn(
            "text-center max-w-6xl mx-auto transition-all duration-1000 transform",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            {/* Enhanced Headline */}
            <div className="relative mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[0.9] drop-shadow-2xl mb-4">
                {mainHeadlineLetters.map((item, index) => (
                  <span
                    key={index}
                    className={cn(
                      "inline-block transition-all duration-700 transform-gpu hover:scale-110 cursor-default",
                      item.show 
                        ? "opacity-100 translate-y-0 scale-100 text-white" 
                        : "opacity-0 translate-y-8 scale-75 text-primary/30"
                    )}
                    style={{ 
                      transitionDelay: `${index * 80}ms`,
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      fontWeight: '700'
                    }}
                  >
                    {item.char === " " ? "\u00A0" : item.char}
                  </span>
                ))}
              </h1>
            </div>

            {/* Enhanced Animated Sentence */}
            <div className="relative mb-12">
              <h2 className={cn(
                "text-xl md:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent transition-all duration-800 transform-gpu",
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

              {/* Enhanced animated underline */}
              <div className={cn(
                "absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-800 rounded-full",
                isSentenceVisible ? "w-32 opacity-100" : "w-0 opacity-0"
              )} />
            </div>

            {/* Enhanced Description */}
            <div className="relative mb-12">
              <p className="text-base md:text-lg text-neutral-300 leading-relaxed max-w-4xl mx-auto"
                style={{ 
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  fontWeight: '400'
                }}>
                Btruss transforms your vision into reality with innovative{' '}
                <span className="text-primary font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">IT solutions</span>,{' '}
                <span className="text-primary font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">healthcare technology</span>,{' '}
                <span className="text-primary font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">finance systems</span>, and{' '}
                <span className="text-primary font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">security services</span>.
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button
                size="lg"
                className="group relative bg-gradient-to-r from-primary via-primary/90 to-primary hover:from-primary/90 hover:via-primary hover:to-primary/90 text-white border-0 transition-all duration-700 hover:scale-110 hover:shadow-2xl hover:shadow-primary/40 px-8 py-6 text-lg font-semibold overflow-hidden"
                asChild
              >
                <Link href="#contact" className="flex items-center gap-3 relative z-10"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  <span>Book a Meeting</span>
                  <ArrowRight className="h-6 w-6 transition-all duration-500 group-hover:translate-x-3 group-hover:rotate-12" />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="group relative border-2 border-primary/60 text-white hover:bg-primary/20 hover:text-white hover:border-primary/80 transition-all duration-700 hover:scale-110 hover:shadow-2xl hover:shadow-primary/30 backdrop-blur-lg bg-gradient-to-r from-primary/10 via-transparent to-primary/10 px-8 py-6 text-lg font-semibold overflow-hidden"
                asChild
              >
                <Link href="/portfolio" className="flex items-center gap-3 relative z-10"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  <span>View Our Work</span>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3].map((star) => (
                      <Star
                        key={star}
                        className="h-4 w-4 fill-primary text-primary transition-all duration-500 group-hover:scale-125 group-hover:rotate-12"
                        style={{ animationDelay: `${star * 150}ms` }}
                      />
                    ))}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-5 h-8 border-2 border-primary/60 rounded-full flex justify-center">
            <div className="w-0.5 h-2 bg-primary rounded-full mt-1.5 animate-pulse" />
          </div>
          <span className="text-primary/60 text-xs font-medium">Scroll</span>
        </div>
      </section>
    </>
  );
}
