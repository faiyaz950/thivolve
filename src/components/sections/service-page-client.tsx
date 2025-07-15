
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
import { notFound } from 'next/navigation';
import { services } from '@/lib/services-data';


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
  const [isVisible, setIsVisible] = useState(false);
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!service?.hero?.slides || service.hero.slides.length === 0) return;

    const displayDuration = 4000;

    const slideInterval = setInterval(() => {
      setIsContentVisible(false);
      setTimeout(() => {
        setCurrentSlideIndex(prevIndex => (prevIndex + 1) % (service.hero?.slides.length || 1));
        setIsContentVisible(true);
      }, 500); // fade duration
    }, displayDuration);

    return () => clearInterval(slideInterval);
  }, [service]);


  if (!service) {
    return (
      <div className="flex h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-blue-950 to-black">
        <div className="relative">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
          <div className="absolute inset-0 h-16 w-16 animate-ping rounded-full border-4 border-solid border-primary/30"></div>
        </div>
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
        <span className="bg-gradient-to-r from-primary via-red-500 to-orange-500 bg-clip-text text-transparent">{secondHalf}</span>
      </>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-blue-950/20 to-black text-white overflow-x-hidden">
      {/* Header with enhanced animations */}
      <header className={`fixed top-0 z-50 w-full bg-black/30 backdrop-blur-xl transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="container mx-auto px-4 h-20 flex items-center justify-between max-w-screen-xl">
           <Link href="/" className="flex items-center space-x-2 group">
            <div className="transform group-hover:scale-110 transition-transform duration-300">
              <Image
                  src="/btrusssl.png"
                  alt="Btruss Logo"
                  width={120}
                  height={30}
                  priority
                  className="filter drop-shadow-lg"
              />
            </div>
          </Link>
          
          <div className="hidden md:flex flex-grow justify-center items-center">
             <nav className="flex space-x-6 lg:space-x-8">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-sm font-medium text-white/90 hover:text-white transition-all duration-300 hover:scale-105 relative group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-red-500 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                ))}
            </nav>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              className={`hidden md:inline-flex border-white text-white bg-transparent hover:bg-gradient-to-r hover:from-primary hover:to-red-500 hover:text-white hover:border-transparent transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: '500ms' }}
              asChild
            >
              <Link href="#contact">Book a Meeting</Link>
            </Button>
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-all duration-300 ml-2 hover:scale-110"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
          </div>
        </div>

        {/* Enhanced mobile menu */}
        <div className={`md:hidden bg-black/90 backdrop-blur-xl border-t border-gray-700/50 transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <nav className="container mx-auto px-4 py-4 space-y-2">
            {navLinks.map((link, index) => (
               <Link 
                 key={link.href} 
                 href={link.href} 
                 onClick={() => setIsMenuOpen(false)} 
                 className={`block py-3 text-white/80 hover:text-white transition-all duration-300 hover:translate-x-2 ${isMenuOpen ? 'animate-fade-in-up' : ''}`}
                 style={{ animationDelay: `${index * 100}ms` }}
               >
                 {link.label}
               </Link>
            ))}
            <Button 
              variant="outline" 
              className="w-full mt-4 border-white text-white bg-transparent hover:bg-gradient-to-r hover:from-primary hover:to-red-500 hover:border-transparent transition-all duration-300" 
              asChild
              onClick={() => setIsMenuOpen(false)}
            >
              <Link href="#contact">Book a Meeting</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* Enhanced hero section */}
        <section className="relative h-screen overflow-hidden">
          {/* Animated background overlay */}
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70 z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
            
            {/* Animated particles */}
            <div className="absolute inset-0 z-5">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 2}s`
                  }}
                />
              ))}
            </div>

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
                        className="object-cover scale-105 transition-transform duration-[10s] ease-out hover:scale-110"
                        priority={index === 0}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Enhanced content */}
          <div className="relative z-20 h-full flex items-center justify-center">
            <div className="container mx-auto px-4 max-w-4xl text-center text-white">
               <div 
                className="transition-all duration-700 ease-in-out transform"
                style={{ 
                  opacity: isContentVisible ? 1 : 0,
                  transform: isContentVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)'
                }}
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
                  {currentSlide ? renderSplitColorTitle(currentSlide.title) : ''}
                </h1>
              </div>
              <div 
                className="transition-all duration-700 ease-in-out transform"
                style={{ 
                  opacity: isContentVisible ? 1 : 0,
                  transform: isContentVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)'
                }}
              >
                <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto drop-shadow-lg" style={{minHeight: '4.5rem'}}>
                  {currentSlide?.description}
                </p>
              </div>
              
              {/* Animated scroll indicator */}
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-white/70 rounded-full animate-pulse mt-2"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced slide indicators */}
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
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentSlideIndex
                      ? 'bg-gradient-to-r from-primary to-red-500 scale-125 shadow-lg shadow-primary/50' 
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </section>

        {/* Enhanced service details section */}
        <section id="service-details" className="py-20 bg-gradient-to-br from-gray-900 via-blue-950/10 to-black relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="container mx-auto px-4 max-w-screen-xl relative z-10">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                Our <span className="bg-gradient-to-r from-primary via-red-500 to-orange-500 bg-clip-text text-transparent">{serviceCategoryTitle}</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Explore our comprehensive digital solutions designed to elevate your business to new heights.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-red-500 mx-auto mt-6 rounded-full"></div>
            </div>
            
            <Tabs defaultValue={details[0].slug} className="w-full">
              {/* Enhanced tab list */}
              <div className="mb-20">
                <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-transparent p-0">
                  {details.map((detail, index) => (
                    <TabsTrigger
                      key={detail.slug}
                      value={detail.slug}
                      className={`group bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 border border-neutral-700/50 data-[state=active]:bg-gradient-to-br data-[state=active]:from-primary/90 data-[state=active]:to-red-500/90 data-[state=active]:text-white data-[state=active]:border-primary/50 data-[state=active]:shadow-lg data-[state=active]:shadow-primary/25 text-white h-auto p-8 rounded-2xl transition-all duration-300 hover:bg-gradient-to-br hover:from-neutral-700/80 hover:to-neutral-800/80 hover:scale-105 hover:shadow-xl backdrop-blur-sm animate-fade-in-up`}
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className="flex flex-col items-center text-center gap-4">
                        <div className="transform group-hover:scale-110 group-data-[state=active]:scale-110 transition-transform duration-300">
                          {getIcon(detail.icon, "w-8 h-8 text-primary group-data-[state=active]:text-white transition-colors duration-300")}
                        </div>
                        <span className="font-semibold text-sm md:text-base leading-tight">{detail.title}</span>
                      </div>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {/* Enhanced tab content with clear separation */}
              <div className="space-y-8">
                {details.map((detail, index) => (
                  <TabsContent 
                    key={detail.slug} 
                    value={detail.slug} 
                    className="mt-10 mb-10 pb-20 animate-fade-in-up"
                  >
                    <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900/90 to-black/90 shadow-2xl border border-neutral-800/50 backdrop-blur-sm hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                      {/* Enhanced image section */}
                      <div className="relative h-80 md:h-96 overflow-hidden">
                        <Image
                          src={detail.backgroundImage}
                          alt={`${detail.title} background`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
                        
                        {/* Animated overlay elements */}
                        <div className="absolute inset-0 opacity-20">
                          <div className="absolute top-10 left-10 w-20 h-20 bg-primary/30 rounded-full blur-xl animate-pulse"></div>
                          <div className="absolute bottom-10 right-10 w-32 h-32 bg-red-500/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                        </div>

                        <div className="absolute inset-0 flex items-end p-8 md:p-12">
                          <div className="text-white animate-fade-in-up">
                            <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                              {getIcon(detail.icon, "w-16 h-16 text-white drop-shadow-2xl")}
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">{detail.title}</h2>
                            <div className="w-24 h-1.5 bg-gradient-to-r from-red-500 to-primary rounded-full"></div>
                          </div>
                        </div>
                      </div>

                      {/* Enhanced content section */}
                      <div className="p-8 md:p-12">
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-4xl">
                          {detail.description}
                        </p>

                        {detail.subDetails && detail.subDetails.length > 0 && (
                           <Accordion type="single" collapsible className="w-full">
                              {detail.subDetails.map((subDetail, i) => (
                                  <AccordionItem key={i} value={`item-${i}`} className="border-neutral-800/50 mb-2 last:mb-0">
                                      <AccordionTrigger className="text-lg font-medium text-white/90 hover:text-white hover:no-underline [&[data-state=open]]:text-white transition-all duration-300 py-6 group">
                                          <div className="flex items-center text-left">
                                              <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center flex-shrink-0 mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                                  <CheckCircle className="w-5 h-5 text-white" />
                                              </div>
                                              <span className="group-hover:translate-x-1 transition-transform duration-300">{subDetail.title}</span>
                                          </div>
                                      </AccordionTrigger>
                                      <AccordionContent className="pt-2 pb-4 pl-14 text-base md:text-lg text-gray-400 leading-relaxed animate-fade-in-up">
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
              </div>
            </Tabs>
          </div>
        </section>

        {/* Enhanced CTA section */}
        <section className="py-24 bg-gradient-to-r from-black via-blue-950/50 to-black text-white relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
            <div className="space-y-8 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg">
                Ready to Start Your <span className="bg-gradient-to-r from-primary via-red-500 to-orange-500 bg-clip-text text-transparent">Project?</span>
              </h2>
              <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                Let's discuss how our expertise in <span className="text-primary font-semibold">{serviceCategoryTitle}</span> can elevate your business to the next level.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                 <Link href="/#contact">
                  <Button variant="outline" className="border-2 border-white text-white bg-transparent px-10 py-4 rounded-full font-semibold hover:bg-gradient-to-r hover:from-primary hover:to-red-500 hover:border-transparent transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl hover:shadow-primary/25">
                    <span>Get a Free Consultation</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
                <Link href="/#our-work">
                  <Button variant="outline" className="border-2 border-white text-white bg-transparent px-10 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                    View Portfolio
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 max-w-screen-xl relative z-10">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="animate-fade-in-up">
              <Link href="/" className="flex items-center space-x-2 mb-6 group">
                 <div className="transform group-hover:scale-110 transition-transform duration-300">
                   <Image
                      src="/btrusssl.png"
                      alt="Btruss Logo"
                      width={100}
                      height={25}
                      className="filter drop-shadow-lg"
                    />
                 </div>
              </Link>
              <p className="text-gray-400 leading-relaxed">
                Transforming businesses through innovative digital solutions and cutting-edge technology.
              </p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h3 className="font-semibold mb-6 text-lg">Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/services/it-services" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">IT Services</Link></li>
                <li><Link href="/services/healthcare-services" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Healthcare</Link></li>
                <li><Link href="/services/ai-services" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">AI Solutions</Link></li>
                <li><Link href="/services/resource-outsource" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Outsourcing</Link></li>
              </ul>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <h3 className="font-semibold mb-6 text-lg">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/#about-us" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">About</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Careers</Link></li>
                <li><Link href="/#our-work" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Our Work</Link></li>
                <li><Link href="/#contact" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Contact</Link></li>
              </ul>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <h3 className="font-semibold mb-6 text-lg">Connect</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800/50 pt-8 text-center text-gray-400 animate-fade-in-up">
            {currentYear && <p>© {currentYear} Btruss. All rights reserved.</p>}
          </div>
        </div>
      </footer>

      {/* Add custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .hover\\:shadow-3xl:hover {
          box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
}

    