
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

  useEffect(() => {
    const displayDuration = 3000; // Time each sentence is fully visible (ms)
    const fadeDuration = 500;    // Duration of fade animation (ms)

    const interval = setInterval(() => {
      setIsVisible(false); // Start fade out

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % animatedSentences.length);
        setIsVisible(true); // Start fade in for the new sentence
      }, fadeDuration);
    }, displayDuration + fadeDuration); // Total time for one sentence cycle

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section id="home" className="py-20 md:py-28 lg:py-32 bg-background text-foreground">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="mb-6">
              <span
                className="block text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-primary"
              >
                We Help Business
              </span>
              <span
                className={cn(
                  "block text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight leading-tight mt-1 sm:mt-2 transition-opacity duration-500 ease-in-out",
                  isVisible ? "opacity-100" : "opacity-0"
                )}
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
            <div className="col-span-2 sm:col-span-1">
              <Image
                src="/one.png"
                alt="Btruss related image"
                data-ai-hint="modern office team"
                width={600}
                height={400}
                className="rounded-lg shadow-xl aspect-video object-cover w-full h-auto transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="col-span-2 sm:col-span-1 flex flex-col gap-4">
              <Image
                src="/two.png"
                alt="Btruss related image"
                data-ai-hint="ux design process"
                width={300}
                height={200}
                className="rounded-lg shadow-xl aspect-video object-cover w-full h-auto transform hover:scale-105 transition-transform duration-300"
              />
              <Image
                src="/three.png"
                alt="Data analytics dashboard"
                data-ai-hint="data analytics"
                width={300}
                height={180}
                className="rounded-lg shadow-xl aspect-[16/10] object-cover w-full h-auto transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
