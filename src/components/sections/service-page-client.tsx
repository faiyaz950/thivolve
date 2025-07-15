
"use client";

import type { Service } from '@/lib/services-data';
import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Code, Megaphone, Palette, Smartphone, Sparkles, Wand2, Bot, DatabaseZap, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const getIcon = (iconName: string | undefined, className: string) => {
  const iconProps = { className };
  switch (iconName) {
    case 'website-development': return <Code {...iconProps} />;
    case 'mobile-application-development': return <Smartphone {...iconProps} />;
    case 'digital-marketing': return <Megaphone {...iconProps} />;
    case 'graphics-designing': return <Palette {...iconProps} />;
    case 'ai-automation': return <Bot {...iconProps} />;
    case 'data-analysis': return <DatabaseZap {...iconProps} />;
    case 'custom-ai': return <Wand2 {...iconProps} />;
    default: return <Sparkles {...iconProps} />;
  }
};

const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/#about-us", label: "About Us" },
    { href: "/#services", label: "Services" },
    { href: "/#our-work", label: "Our Work" },
    { href: "/#contact", label: "Contact Us" },
];

export function ServicePageClient({ service }: { service: Service }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isContentVisible, setIsContentVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    if (!service?.hero?.slides || service.hero.slides.length === 0) return;

    const displayDuration = 4000;
    const fadeDuration = 500;

    const slideInterval = setInterval(() => {
      setIsContentVisible(false);
      setTimeout(() => {
        setCurrentSlideIndex(prevIndex => (prevIndex + 1) % (service.hero?.slides.length || 1));
        setIsContentVisible(true);
      }, fadeDuration);
    }, displayDuration + fadeDuration);

    return () => clearInterval(slideInterval);
  }, [service]);

  if (!service) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-900">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
      </div>
    );
  }

  const { hero, details, title: serviceCategoryTitle } = service;
  const currentSlide = hero?.slides[currentSlideIndex];

  const renderSplitColorTitle = (title: string) => {
    const middleIndex = Math.ceil(title.length / 2);
    const firstHalf = title.slice(0, middleIndex);
    const secondHalf = title.slice(middleIndex);
    return (
      <>
        <span className="text-white">{firstHalf}</span>
        <span className="text-primary">{secondHalf}</span>
      </>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <header className="fixed top-0 z-50 w-full bg-black/20 backdrop-blur-md transition-colors duration-300">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between max-w-screen-xl">
           <Link href="/" className="flex items-center space-x-2">
            <Image
                src="/btrusssl.png"
                alt="Btruss Logo"
                width={120}
                height={30}
                priority
            />
          </Link>
          
          <div className="hidden md:flex flex-grow justify-center items-center">
             <nav className="flex space-x-6 lg:space-x-8">
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
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              className="hidden md:inline-flex border-white text-white bg-transparent hover:bg-white hover:text-black transition-colors"
              asChild
            >
              <Link href="#contact">Book a Meeting</Link>
            </Button>
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors ml-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black/80 backdrop-blur-lg border-t border-gray-700">
            <nav className="container mx-auto px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                 <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="block py-2 text-white/80 hover:text-white transition-colors">{link.label}</Link>
              ))}
              <Button 
                variant="outline" 
                className="w-full mt-4 border-white text-white" 
                asChild
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href="#contact">Book a Meeting</Link>
              </Button>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <section className="relative h-screen overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60 z-10"></div>
            {hero && hero.slides.length > 0 && (
              <div className="relative h-full overflow-hidden">
                 <div
                  className="flex transition-transform duration-1000 ease-out h-full"
                  style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}
                >
                  {hero.slides.map((slide, index) => (
                    <div key={index} className="w-full flex-shrink-0 h-full relative">
                      <Image
                        src={slide.image.src}
                        alt={slide.image.alt}
                        data-ai-hint={slide.image.hint}
                        fill
                        className="object-cover scale-105"
                        priority={index === 0}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="relative z-20 h-full flex items-center justify-center">
            <div className="container mx-auto px-4 max-w-4xl text-center text-white">
               <div 
                className="transition-opacity duration-500 ease-in-out"
                style={{ opacity: isContentVisible ? 1 : 0 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  {currentSlide ? renderSplitColorTitle(currentSlide.title) : ''}
                </h1>
              </div>
              <div 
                className="transition-opacity duration-500 ease-in-out"
                style={{ opacity: isContentVisible ? 1 : 0 }}
              >
                <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto" style={{minHeight: '4.5rem'}}>
                  {currentSlide?.description}
                </p>
              </div>
            </div>
          </div>

          {hero && hero.slides.length > 1 && (
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
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
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlideIndex
                      ? 'bg-primary scale-125' 
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </section>

        <section id="service-details" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4 max-w-screen-xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Our {serviceCategoryTitle}</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Explore our comprehensive digital solutions designed to elevate your business.
              </p>
            </div>
            
            <Tabs defaultValue={details[0].slug} className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-4 bg-transparent p-0 mb-10">
                {details.map((detail) => (
                  <TabsTrigger
                    key={detail.slug}
                    value={detail.slug}
                    className="group bg-neutral-800/50 border border-neutral-700 data-[state=active]:bg-primary/90 data-[state=active]:text-primary-foreground data-[state=active]:border-primary text-white h-auto p-4 rounded-xl transition-all hover:bg-neutral-700"
                  >
                    <div className="flex flex-col items-center text-center gap-3">
                      {getIcon(detail.icon, "w-8 h-8 text-primary group-data-[state=active]:text-white transition-colors")}
                      <span className="font-semibold">{detail.title}</span>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>

              {details.map((detail) => (
                <TabsContent key={detail.slug} value={detail.slug} className="mt-10 mb-10">
                  <div className="group relative overflow-hidden rounded-3xl bg-neutral-900 shadow-xl border border-neutral-800">
                    <div className="relative h-80 overflow-hidden">
                      <Image
                        src={detail.backgroundImage}
                        alt={`${detail.title} background`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      <div className="absolute inset-0 flex items-end p-8">
                        <div className="text-white">
                          <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                            {getIcon(detail.icon, "w-12 h-12 text-white drop-shadow-lg")}
                          </div>
                          <h2 className="text-4xl font-bold mb-2">{detail.title}</h2>
                          <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-primary rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    <div className="p-8">
                      <p className="text-lg text-gray-300 leading-relaxed mb-8">
                        {detail.description}
                      </p>

                      {detail.subDetails && detail.subDetails.length > 0 && (
                         <Accordion type="single" collapsible className="w-full">
                            {detail.subDetails.map((subDetail, i) => (
                                <AccordionItem key={i} value={`item-${i}`} className="border-neutral-800">
                                    <AccordionTrigger className="text-lg font-medium text-white/90 hover:text-primary hover:no-underline [&[data-state=open]]:text-primary">
                                        <div className="flex items-center text-left">
                                            <div className="w-6 h-6 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                                                <CheckCircle className="w-4 h-4 text-white" />
                                            </div>
                                            <span>{subDetail.title}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pt-2 pl-10 text-base text-gray-400">
                                        {subDetail.description}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                      )}
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>

          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-black via-blue-950/50 to-black text-white relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold">Ready to Start Your Project?</h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Let's discuss how our expertise in {serviceCategoryTitle} can elevate your business to the next level.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <Link href="/#contact">
                  <Button variant="outline" className="border-2 border-white text-white bg-transparent px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center space-x-2">
                    <span>Get a Free Consultation</span>
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/#our-work">
                  <Button variant="outline" className="border-2 border-white text-white bg-transparent px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300">
                    View Portfolio
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                 <Image
                    src="/btrusssl.png"
                    alt="Btruss Logo"
                    width={100}
                    height={25}
                  />
              </Link>
              <p className="text-gray-400">
                Transforming businesses through innovative digital solutions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/services/it-services" className="hover:text-white transition-colors">IT Services</Link></li>
                <li><Link href="/services/healthcare-services" className="hover:text-white transition-colors">Healthcare</Link></li>
                <li><Link href="/services/ai-services" className="hover:text-white transition-colors">AI Solutions</Link></li>
                <li><Link href="/services/resource-outsource" className="hover:text-white transition-colors">Outsourcing</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/#about-us" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/#our-work" className="hover:text-white transition-colors">Our Work</Link></li>
                <li><Link href="/#contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Btruss. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
