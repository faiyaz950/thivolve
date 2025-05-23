
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
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

export function Hero() {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [isSentenceVisible, setIsSentenceVisible] = useState(true);
  
  const [mainHeadlineLetters, setMainHeadlineLetters] = useState<{ char: string; show: boolean }[]>(
    heroMainHeadlineText.split('').map(char => ({ char, show: false }))
  );

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    mainHeadlineLetters.forEach((_, index) => {
      setTimeout(() => {
        setMainHeadlineLetters(prev => {
          const newLetters = [...prev];
          if (newLetters[index]) {
            newLetters[index].show = true;
          }
          return newLetters;
        });
      }, index * 100); // 100ms delay between each letter
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run once on mount

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
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(imageSliderInterval);
  }, []);

  return (
    <section id="home" className="py-20 md:py-28 lg:py-32 bg-background text-foreground">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="mb-2"> 
              <span
                className="block text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-primary mb-1 sm:mb-2"
              >
                {mainHeadlineLetters.map((item, index) => (
                  <span
                    key={index}
                    className={cn(
                      "inline-block",
                      item.show ? "animate-letter-in" : "opacity-0"
                    )}
                    style={{ animationFillMode: 'forwards' }}
                  >
                    {item.char === " " ? "\u00A0" : item.char}
                  </span>
                ))}
              </span>
              <span
                className={cn(
                  "block text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight leading-tight mt-1 sm:mt-2 transition-opacity duration-500 ease-in-out",
                  isSentenceVisible ? "opacity-100" : "opacity-0"
                )}
                style={{ minHeight: '2.5em' }} // Adjust minHeight based on typical sentence height to reduce layout shift
              >
                {animatedSentences[currentSentenceIndex]}
              </span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto md:mx-0 mb-8">
              From vision to digital reality, we partner with businesses to craft innovative IT solutions, enhance healthcare services, streamline financial processes, and secure futures. Discover how Btruss transforms challenges into opportunities.
            </p>
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/80 px-8 py-3 rounded-md font-semibold shadow-md hover:shadow-lg transition-transform hover:scale-105 text-base"
              asChild
            >
              <Link href="#contact">Book a Meeting</Link>
            </Button>
          </div>

          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-lg shadow-xl group">
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
                    sizes="(max-width: 767px) 100vw, 50vw"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
            {/* Dots for navigation */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all duration-300 ease-in-out",
                    index === currentImageIndex ? "bg-primary scale-125" : "bg-white/70 hover:bg-white"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
