"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MobileNav } from '@/components/layout/mobile-nav';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, Star, Sparkles, Menu } from 'lucide-react';
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
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5fGVufDB8fHx8MTc0ODg1MDAwMHww&ixlib=rb-4.1.0&q=80&w=1080",
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
  const heroRef = useScrollAnimation({ threshold: 0.1 });

  // Animation for main headline letters - starts immediately when component mounts
  useEffect(() => {
    // Show all letters immediately first (fallback)
    setMainHeadlineLetters(heroMainHeadlineText.split('').map(char => ({ char, show: true })));
    
    // Then animate them in sequence
    const timers = heroMainHeadlineText.split('').map((_, index) =>
      setTimeout(() => {
        setMainHeadlineLetters(prev => {
          const newLetters = [...prev];
          if (newLetters[index]) {
            newLetters[index].show = true;
          }
          return newLetters;
        });
      }, index * 60 + 200) // Faster animation
    );
    return () => timers.forEach(clearTimeout);
  }, []); // Empty dependency array to run only once on mount

  useEffect(() => {
    const displayDuration = 3500;
    const fadeDuration = 600;
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
    }, 6000);
    return () => clearInterval(imageSliderInterval);
  }, []);

  return (
    <section 
      ref={heroRef.ref}
      className="relative min-h-screen flex flex-col overflow-hidden bg-black"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Hero Image Slider */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              fill
              className={cn(
                "object-cover transition-all duration-1000",
                index === currentImageIndex ? "opacity-20" : "opacity-0"
              )}
              priority={index === 0}
            />
          ))}
        </div>

        {/* Multi-layer gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Enhanced Header Bar */}
      <header className="relative z-50 w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent backdrop-blur-xl border-b border-white/5" />
        
        <div className="relative container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Only whitelogo.png without text */}
            <Link href="/" className="relative group">
              <div className="flex items-center">
                <div className="relative">
                  <Image
                    src="/whitelogo.png"
                    alt="Btruss Logo"
                    width={45}
                    height={45}
                    className="w-11 h-11 object-contain transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary/60 rounded-full animate-ping" />
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative group py-2 px-1 text-neutral-300 hover:text-white transition-all duration-300"
                >
                  <span className="relative z-10 font-medium">{link.label}</span>
                  <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              ))}
            </nav>

            {/* CTA & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="hidden sm:flex border-primary/40 text-white hover:bg-primary/10 hover:border-primary/60 transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link href="#contact">
                  Book a Meeting
                </Link>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost" 
                size="icon"
                className="md:hidden text-white hover:bg-white/10"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 transform origin-top",
          mobileMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
        )}>
          <nav className="container mx-auto px-6 py-6">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-primary transition-colors duration-300 py-2 text-lg font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10">
                <Button
                  variant="outline"
                  className="w-full border-primary/40 text-white hover:bg-primary/10 hover:border-primary/60"
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

      {/* Navigation Dots */}
      <div className="absolute top-1/2 right-6 transform -translate-y-1/2 z-40 flex flex-col space-y-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={cn(
              "relative w-3 h-3 rounded-full transition-all duration-500 ease-in-out group",
              index === currentImageIndex
                ? "bg-primary scale-125 shadow-lg shadow-primary/30"
                : "bg-white/20 hover:bg-primary/60 hover:scale-110"
            )}
          >
            {index === currentImageIndex && (
              <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75" />
            )}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-5xl mx-auto">
          {/* Headline - Always visible with animation */}
          <div className="relative mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight drop-shadow-2xl">
              {mainHeadlineLetters.map((item, index) => (
                <span
                  key={index}
                  className={cn(
                    "inline-block transition-all duration-500 transform-gpu",
                    item.show ? "opacity-100 translate-y-0 scale-100" : "opacity-30 translate-y-4 scale-95"
                  )}
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  {item.char === " " ? "\u00A0" : item.char}
                </span>
              ))}
            </h1>

            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-4 h-4 bg-primary rounded-full animate-ping" />
            <div className="absolute -top-4 -right-8 w-3 h-3 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          {/* Animated Sentence */}
          <div className="relative mb-12">
            <h2 className={cn(
              "text-2xl md:text-3xl lg:text-4xl font-bold text-primary transition-all duration-600 transform-gpu",
              isSentenceVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              {animatedSentences[currentSentenceIndex]}
            </h2>

            {/* Animated underline */}
            <div className={cn(
              "absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-600",
              isSentenceVisible ? "w-32 opacity-100" : "w-0 opacity-0"
            )} />
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-light mb-12 max-w-4xl mx-auto">
            Btruss transforms your vision into reality with innovative{' '}
            <span className="text-primary font-medium">IT solutions</span>,{' '}
            <span className="text-primary font-medium">healthcare technology</span>,{' '}
            <span className="text-primary font-medium">finance systems</span>, and{' '}
            <span className="text-primary font-medium">security services</span>.
          </p>

          {/* Decorative accent */}
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-12 animate-pulse" />

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              className="group relative bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white border-0 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 px-8 py-6 text-lg"
              asChild
            >
              <Link href="#contact" className="flex items-center gap-3">
                <span className="font-semibold">Book a Meeting</span>
                <ArrowRight className="h-6 w-6 transition-all duration-500 group-hover:translate-x-2" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="group relative border-2 border-primary/40 text-white hover:bg-primary/10 hover:text-white hover:border-primary/60 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 backdrop-blur-sm bg-gradient-to-r from-primary/10 to-transparent px-8 py-6 text-lg"
              asChild
            >
              <Link href="/portfolio" className="flex items-center gap-3">
                <span className="font-semibold">View Our Work</span>
                <div className="flex items-center gap-1">
                  {[1, 2, 3].map((star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 fill-primary text-primary transition-all duration-300 group-hover:scale-110"
                      style={{ animationDelay: `${star * 100}ms` }}
                    />
                  ))}
                </div>
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-neutral-400">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary animate-pulse" />
              <span className="font-medium">50+ Happy Clients</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-neutral-600" />
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-primary fill-primary" />
              <span className="font-medium">3+ Years Experience</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-neutral-600" />
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">6</span>
              </div>
              <span className="font-medium">Industries Served</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  );
}