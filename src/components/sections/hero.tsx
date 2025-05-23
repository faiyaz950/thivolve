
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MobileNav } from '@/components/layout/mobile-nav'; // Ensure MobileNav is imported
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const heroMainHeadlineText = "WE HELP BUSINESS";
const animatedSentences = [
  'Improve their Online Presences',
  'Building Bridge to success',
  'Switch from offline to online',
  'Generate More Sales',
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

// NavLinks definition moved from Header.tsx
const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#our-work", label: "Our Work" },
  { href: "#contact", label: "Contact Us" },
];

export function Hero() {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [isSentenceVisible, setIsSentenceVisible] = useState(true);
  const [mainHeadlineLetters, setMainHeadlineLetters] = useState<{ char: string; show: boolean }[]>(
    heroMainHeadlineText.split('').map(char => ({ char, show: false }))
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timers = mainHeadlineLetters.map((_, index) =>
      setTimeout(() => {
        setMainHeadlineLetters(prev => {
          const newLetters = [...prev];
          if (newLetters[index]) {
            newLetters[index].show = true;
          }
          return newLetters;
        });
      }, index * 100 + 500)
    );
    return () => timers.forEach(clearTimeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const displayDuration = 3000;
    const fadeDuration = 500;
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
    }, 5000);
    return () => clearInterval(imageSliderInterval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen text-white flex flex-col items-center justify-center overflow-hidden">
      {/* Integrated Header Bar */}
      <div className="absolute top-0 left-0 right-0 z-30 w-full bg-transparent transition-colors duration-300">
        <div className="container flex h-20 max-w-screen-xl items-center justify-between mx-auto px-4 sm:px-6 lg:px-8 gap-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/btruss-logo.png"
              alt="Btruss Logo"
              width={130}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </Link>

          <nav className="hidden md:flex flex-grow justify-center items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              className="hidden md:inline-flex border-white text-white bg-transparent hover:bg-white hover:text-black transition-colors hover:scale-105"
              asChild
            >
              <Link href="#contact">Book a Meeting</Link>
            </Button>
            <MobileNav navLinks={navLinks} triggerClassName="text-white hover:bg-white/20" />
          </div>
        </div>
      </div>

      {/* Background Image Slider */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div> {/* Dark overlay */}
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {heroImages.map((image, index) => (
            <div key={image.src} className="w-full flex-shrink-0 h-full relative">
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
        {/* Dots for navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {heroImages.map((_, index) => (
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
      </div>

      {/* Foreground Text Content - ensure this is above the overlay if needed, or that overlay has sufficient z-index */}
      <div className="relative z-20 container mx-auto px-4 max-w-screen-lg text-center py-20 md:py-28 flex-grow flex flex-col justify-center mt-10 sm:mt-0"> {/* Added mt for spacing from new header bar */}
        <div className="max-w-3xl mx-auto">
          <h1 className="mb-2">
            <span
              className="block text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-2 sm:mb-3"
            >
              {mainHeadlineLetters.map((item, index) => (
                <span
                  key={index}
                  className={cn(
                    "inline-block",
                    item.show ? "animate-letter-in" : "opacity-0",
                     // "WE HELP " (including space at index 7) is 8 characters long.
                    index < 8 ? "text-neutral-100" : "text-primary"
                  )}
                  style={{ animationFillMode: 'forwards', animationDelay: `${index * 0.05}s` }}
                >
                  {item.char === " " ? "\u00A0" : item.char}
                </span>
              ))}
            </span>
            <span
              className={cn(
                "block text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-100 tracking-tight leading-tight mt-1 sm:mt-2 transition-opacity duration-500 ease-in-out",
                isSentenceVisible ? "opacity-100" : "opacity-0"
              )}
              style={{ minHeight: '2.5em' }} 
            >
              {animatedSentences[currentSentenceIndex]}
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-neutral-200 max-w-xl mx-auto mb-10 leading-relaxed">
            Btruss transforms your vision into reality with innovative IT, healthcare, finance, and security solutions.
          </p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-3.5 rounded-md font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-base sm:text-lg"
            asChild
          >
            <Link href="#contact">Book a Meeting</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
