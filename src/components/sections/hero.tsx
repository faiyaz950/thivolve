
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const animatedSentences = [
  'Improve their Online Presences',
  'Building Bridge to success',
  'Switch from offline to online',
  'Generate More Sales',
];

const heroMainHeadlineText = "WE HELP BUSINESS";

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  const [mainHeadlineLetters, setMainHeadlineLetters] = useState<{ char: string; show: boolean }[]>(
    heroMainHeadlineText.split('').map(char => ({ char, show: false }))
  );

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
      setIsVisible(false); 
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % animatedSentences.length);
        setIsVisible(true); 
      }, fadeDuration);
    }, displayDuration + fadeDuration); 

    return () => clearInterval(sentenceInterval);
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
                  isVisible ? "opacity-100" : "opacity-0"
                )}
                style={{ minHeight: '2.5em' }} 
              >
                {animatedSentences[currentIndex]}
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

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://placehold.co/300x200.png"
              alt="Modern office team collaborating"
              data-ai-hint="modern office team"
              width={300}
              height={200}
              className="rounded-lg shadow-xl aspect-video object-cover w-full h-auto transform hover:scale-105 transition-transform duration-300"
            />
            <Image
              src="https://placehold.co/300x200.png"
              alt="UX design process sketch"
              data-ai-hint="ux design process"
              width={300}
              height={200}
              className="rounded-lg shadow-xl aspect-video object-cover w-full h-auto transform hover:scale-105 transition-transform duration-300"
            />
            <Image
              src="https://placehold.co/300x200.png"
              alt="Data analytics dashboard"
              data-ai-hint="data analytics"
              width={300}
              height={200}
              className="rounded-lg shadow-xl aspect-video object-cover w-full h-auto transform hover:scale-105 transition-transform duration-300"
            />
            <Image
              src="https://placehold.co/300x200.png"
              alt="Business strategy session"
              data-ai-hint="business strategy"
              width={300}
              height={200}
              className="rounded-lg shadow-xl aspect-video object-cover w-full h-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
