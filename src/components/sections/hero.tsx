
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

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [typedText, setTypedText] = useState('');
  const heroMainHeadline = "We Help Business";

  useEffect(() => {
    // Typing animation for "We Help Business"
    let currentHeroText = '';
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex < heroMainHeadline.length) {
        currentHeroText += heroMainHeadline[charIndex];
        setTypedText(currentHeroText);
        charIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150); // Adjust typing speed (ms per character)

    // Cleanup for typing animation
    return () => clearInterval(typingInterval);
  }, [heroMainHeadline]); // Runs once when heroMainHeadline (which is const) is defined

  useEffect(() => {
    // Animation for cycling sentences
    const displayDuration = 3000; // Time each sentence is fully visible (ms)
    const fadeDuration = 500;    // Duration of fade animation (ms)

    const sentenceInterval = setInterval(() => {
      setIsVisible(false); // Start fade out

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % animatedSentences.length);
        setIsVisible(true); // Start fade in for the new sentence
      }, fadeDuration);
    }, displayDuration + fadeDuration); // Total time for one sentence cycle

    // Cleanup for sentence animation
    return () => clearInterval(sentenceInterval);
  }, []); // Runs once on mount for sentence animation

  return (
    <section id="home" className="py-20 md:py-28 lg:py-32 bg-background text-foreground">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="mb-2"> {/* Adjusted from mb-6 */}
              <span
                className="block text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-primary"
              >
                {typedText}
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
