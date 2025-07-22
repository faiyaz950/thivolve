"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MobileNav } from '@/components/layout/mobile-nav';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, Star, Sparkles } from 'lucide-react';

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
    src: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHx1eCUyMGRlc2lnbiUyMHByb2Nlc3N8ZW58MHx8fHwxNzQ3OTk4Nzg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "UX design process sketch",
    hint: "ux design process"
  },
  {
    src: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxkYXRhJTIwYW5hbHl0aWNzfGVufDB8fHx8MTc0Nzk0NzE0OHww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Data analytics dashboard",
    hint: "data analytics"
  },
  {
    src: "https://images.unsplash.com/photo-1529119368496-2dfda6ec2804?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5fGVufDB8fHx8MTc0Nzk5ODc4NXww&ixlib=rb-4.1.0&q=80&w=1080",
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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timers = mainHeadlineLetters.map((_, index) =>
      setTimeout(() => {
        setMainHeadlineLetters(prev => {
          const newLetters = [...prev];
          if (newLetters[index]) {
            newLetters[index].show = true;
          }
          return newLetters;
        });
      }, index * 80 + 800) // Slightly faster animation
    );
    return () => timers.forEach(clearTimeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    }, 6000); // Slower transition for better UX
    return () => clearInterval(imageSliderInterval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen text-white flex flex-col items-center justify-center overflow-hidden">
      {/* Enhanced Background with Multiple Layers */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80 z-10"></div>
        
        {/* Secondary gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 z-10"></div>
        
        {/* Animated mesh gradient background */}
        <div className="absolute inset-0 z-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse opacity-60" style={{ animationDuration: '6s' }} />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl animate-pulse opacity-40" style={{ animationDuration: '8s', animationDelay: '2s' }} />
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-white/5 rounded-full filter blur-3xl animate-pulse opacity-30" style={{ animationDuration: '10s', animationDelay: '4s' }} />
        </div>

        {/* Image Slider */}
        <div
          className="flex transition-transform duration-1000 ease-in-out h-full"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {heroImages.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0 h-full relative">
              <Image
                src={image.src}
                alt={image.alt}
                data-ai-hint={image.hint}
                fill
                className="object-cover transition-all duration-1000"
                sizes="100vw"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Enhanced grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] z-10" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Enhanced Header Bar */}
      <div className="absolute top-0 left-0 right-0 z-30 w-full bg-gradient-to-b from-black/40 via-black/20 to-transparent backdrop-blur-md border-b border-white/5 transition-all duration-300">
        <div className="container flex h-20 max-w-screen-xl items-center justify-between mx-auto px-4 sm:px-6 lg:px-8 gap-4">
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <Image
                src="/btrussslogo.png"
                alt="Btruss Logo"
                width={120}
                height={30}
                priority
                className="drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all duration-300"
              />
              <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 blur-xl transition-all duration-300" />
            </div>
          </Link>

          <nav className="hidden md:flex flex-grow justify-center items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative text-sm font-medium text-white/90 hover:text-white transition-all duration-300 group"
              >
                <span className="relative z-10">{link.label}</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              className="hidden md:inline-flex border-2 border-white/30 text-white bg-white/5 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 backdrop-blur-sm group"
              asChild
            >
              <Link href="#contact" className="flex items-center gap-2">
                <span>Book a Meeting</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <MobileNav navLinks={navLinks} triggerClassName="text-white hover:bg-white/10 border border-white/20" />
          </div>
        </div>
      </div>

      {/* Enhanced Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={cn(
              "relative w-3 h-3 rounded-full transition-all duration-500 ease-in-out group",
              index === currentImageIndex 
                ? "bg-primary scale-125 shadow-lg shadow-primary/50" 
                : "bg-white/40 hover:bg-white/70 hover:scale-110"
            )}
          >
            {index === currentImageIndex && (
              <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-50" />
            )}
          </button>
        ))}
      </div>

      {/* Enhanced Main Content */}
      <div className="relative z-20 container mx-auto px-4 max-w-screen-lg text-center py-20 md:py-28 flex-grow flex flex-col justify-center mt-16 sm:mt-8">
        <div className="max-w-4xl mx-auto">
          {/* Enhanced Headline */}
          <div className={cn(
            "transition-all duration-1000 delay-300",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <h1 className="mb-6">
              <span className="block text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4">
                {mainHeadlineLetters.map((item, index) => (
                  <span
                    key={index}
                    className={cn(
                      "inline-block drop-shadow-lg",
                      item.show ? "animate-letter-in" : "opacity-0",
                      index < 8 ? "text-white" : "text-primary"
                    )}
                    style={{ animationFillMode: 'forwards', animationDelay: `${index * 0.05}s` }}
                  >
                    {item.char === " " ? "\u00A0" : item.char}
                  </span>
                ))}
              </span>
              
              {/* Enhanced Animated Sentence */}
              <div className="relative">
                <span
                  className={cn(
                    "block text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-primary tracking-tight leading-tight transition-all duration-700 ease-in-out",
                    isSentenceVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}
                  style={{ minHeight: '2.5em' }}
                >
                  {animatedSentences[currentSentenceIndex]}
                </span>
                
                {/* Animated underline */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-700"
                     style={{ width: isSentenceVisible ? '60%' : '0%' }} />
              </div>
            </h1>

            {/* Enhanced Description */}
            <div className="relative max-w-2xl mx-auto mb-10">
              <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed font-light">
                Btruss transforms your vision into reality with innovative{' '}
                <span className="text-primary font-medium">IT solutions</span>,{' '}
                <span className="text-primary font-medium">healthcare technology</span>,{' '}
                <span className="text-primary font-medium">finance systems</span>, and{' '}
                <span className="text-primary font-medium">security services</span>.
              </p>
              
              {/* Decorative accent */}
              <div className="flex justify-center items-center gap-3 mt-6">
                <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse" />
                <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-primary/60 to-transparent animate-pulse" />
                <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="group relative bg-primary text-white hover:bg-primary/90 px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 hover:scale-105 text-base sm:text-lg overflow-hidden"
                asChild
              >
                <Link href="#contact" className="flex items-center gap-3">
                  {/* Button glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-white/10 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <span className="relative z-10">Book a Meeting</span>
                  <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  
                  {/* Sparkle effect */}
                  <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: '3s' }} />
                  </div>
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="group border-2 border-white/30 text-white bg-white/5 hover:bg-white/10 hover:border-primary/60 transition-all duration-300 hover:scale-105 px-8 py-4 rounded-xl font-semibold backdrop-blur-sm"
                asChild
              >
                <Link href="/portfolio" className="flex items-center gap-3">
                  <span>View Our Work</span>
                  <div className="flex gap-1">
                    {[1, 2, 3].map((star) => (
                      <Star
                        key={star}
                        className="w-4 h-4 text-yellow-400 fill-current opacity-0 group-hover:opacity-100 transition-all duration-300"
                        style={{ transitionDelay: `${star * 100}ms` }}
                      />
                    ))}
                  </div>
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className={cn(
              "mt-12 transition-all duration-1000 delay-1000",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-neutral-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>50+ Happy Clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <span>3+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                  <span>6 Industries Served</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none z-15" />
    </section>
  );
}