
"use client";

import { useState, useEffect, useRef } from 'react';
import { notFound } from 'next/navigation';
import { services, Service } from '@/lib/services-data';
import { ArrowRight, CheckCircle, Code, Megaphone, Palette, Smartphone, Sparkles, Wand2, Bot, DatabaseZap, Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const getIcon = (iconName: string | undefined) => {
  const iconClass = "w-12 h-12 text-white drop-shadow-lg";
  
  switch (iconName) {
    case 'website-development': return <Code className={iconClass} />;
    case 'mobile-application-development': return <Smartphone className={iconClass} />;
    case 'digital-marketing': return <Megaphone className={iconClass} />;
    case 'graphics-designing': return <Palette className={iconClass} />;
    case 'ai-automation': return <Bot className={iconClass} />;
    case 'data-analysis': return <DatabaseZap className={iconClass} />;
    case 'custom-ai': return <Wand2 className={iconClass} />;
    default: return <Sparkles className={iconClass} />;
  }
};

export default function ModernServicesPage({ params }: { params: { slug: string } }) {
  const [service, setService] = useState<Service | null>(null);
  const [activeSection, setActiveSection] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isTitleVisible, setIsTitleVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const foundService = services.find(s => s.slug === params.slug);
    if (!foundService) {
      notFound();
    }
    setService(foundService);
    if (foundService?.details?.[0]?.slug) {
      setActiveSection(foundService.details[0].slug);
    }
  }, [params.slug]);

  useEffect(() => {
    if (!service?.hero?.images || service.hero.images.length === 0) return;
    const imageSliderInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % (service.hero?.images.length || 1));
    }, 5000);
    return () => clearInterval(imageSliderInterval);
  }, [service]);

  useEffect(() => {
    if (!service?.hero?.animatedTitles || service.hero.animatedTitles.length === 0) return;
    const displayDuration = 3000;
    const fadeDuration = 500;
    const titleInterval = setInterval(() => {
      setIsTitleVisible(false);
      setTimeout(() => {
        setCurrentTitleIndex(prevIndex => (prevIndex + 1) % (service.hero?.animatedTitles?.length || 1));
        setIsTitleVisible(true);
      }, fadeDuration);
    }, displayDuration + fadeDuration);
    return () => clearInterval(titleInterval);
  }, [service]);


  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!service) return;
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observerRef.current?.observe(ref);
    });

    return () => {
      if (observerRef.current) {
        Object.values(sectionRefs.current).forEach((ref) => {
          if (ref) observerRef.current?.unobserve(ref);
        });
      }
    };
  }, [service]);

  if (!service) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-900">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
      </div>
    );
  }

  const { hero, details, title: serviceCategoryTitle } = service;

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
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <Link href="/#services" className="text-white/80 hover:text-white transition-colors font-medium">Services</Link>
              <Link href="/#about-us" className="text-white/80 hover:text-white transition-colors font-medium">About</Link>
              <Link href="/#contact" className="text-white/80 hover:text-white transition-colors font-medium">Contact</Link>
            </nav>
            <Link href="/#contact">
              <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium">
                Contact Us
              </button>
            </Link>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black/80 backdrop-blur-lg border-t border-gray-700">
            <nav className="container mx-auto px-4 py-4 space-y-2">
              <Link href="/#services" onClick={() => setIsMenuOpen(false)} className="block py-2 text-white/80 hover:text-white transition-colors">Services</Link>
              <Link href="/#about-us" onClick={() => setIsMenuOpen(false)} className="block py-2 text-white/80 hover:text-white transition-colors">About</Link>
              <Link href="/#contact" onClick={() => setIsMenuOpen(false)} className="block py-2 text-white/80 hover:text-white transition-colors">Contact</Link>
              <Link href="/#contact">
                <button onClick={() => setIsMenuOpen(false)} className="w-full mt-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full font-medium">
                  Contact Us
                </button>
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <section className="relative h-screen overflow-hidden">
          <div 
            className="absolute inset-0 w-full h-full"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60 z-10"></div>
            {hero && hero.images.length > 0 && (
              <div className="relative h-full overflow-hidden">
                <div
                  className="flex transition-transform duration-1000 ease-out h-full"
                  style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                >
                  {hero.images.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0 h-full relative">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover scale-105 transition-transform duration-700"
                        data-ai-hint={image.hint}
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
                className="animate-fade-in-up"
                style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-red-400 via-primary to-red-400 bg-clip-text text-transparent transition-opacity duration-500 ease-in-out" style={{ minHeight: '1.2em', display: 'inline-block', opacity: isTitleVisible ? 1 : 0 }}>
                    {hero?.animatedTitles && hero.animatedTitles.length > 0 ? hero.animatedTitles[currentTitleIndex] : hero?.title}
                  </span>
                </h1>
              </div>
              <div 
                className="animate-fade-in-up"
                style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
              >
                <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
                  {hero?.description}
                </p>
              </div>
              <div 
                className="animate-fade-in-up"
                style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
              >
                 <Link href="/#contact">
                    <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2">
                      <span>Get Started</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
              </div>
            </div>
          </div>

          {hero && hero.images.length > 1 && (
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
              {hero.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </section>

        <section id="service-details" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4 max-w-screen-xl">
            <div className="grid lg:grid-cols-12 gap-12">
              <aside className="lg:col-span-3">
                <div className="sticky top-28">
                  <div className="bg-gradient-to-br from-red-600 to-red-800 p-6 rounded-2xl text-white mb-8 shadow-lg">
                    <h3 className="text-xl font-bold mb-2">Our {serviceCategoryTitle}</h3>
                    <p className="text-red-100">Comprehensive digital solutions</p>
                  </div>
                  
                  <nav className="space-y-2">
                    {details.map((detail, index) => (
                      <a
                        key={detail.slug}
                        href={`#${detail.slug}`}
                        className={`group block p-4 rounded-xl transition-all duration-300 border-2 ${
                          activeSection === detail.slug
                            ? 'bg-gradient-to-r from-red-900/50 to-red-800/50 border-red-700 text-white'
                            : 'border-transparent hover:bg-neutral-800 hover:border-neutral-700'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                            activeSection === detail.slug
                              ? 'bg-gradient-to-r from-red-600 to-red-700 text-white'
                              : 'bg-neutral-700 text-neutral-300 group-hover:bg-red-800 group-hover:text-white'
                          }`}>
                            {index + 1}
                          </div>
                          <span className="font-medium text-neutral-300 group-hover:text-white">{detail.title}</span>
                        </div>
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>

              <div className="lg:col-span-9">
                <div className="space-y-16">
                  {details.map((detail) => (
                    <div
                      key={detail.slug}
                      id={detail.slug}
                      ref={(el) => (sectionRefs.current[detail.slug] = el)}
                      className="scroll-mt-24"
                    >
                      <div className="group relative overflow-hidden rounded-3xl bg-neutral-900 shadow-xl hover:shadow-2xl transition-all duration-500 border border-neutral-800">
                        <div className="relative h-80 overflow-hidden">
                          <img
                            src={detail.backgroundImage}
                            alt={`${detail.title} background`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                          
                          <div className="absolute inset-0 flex items-end p-8">
                            <div className="text-white">
                              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                {getIcon(detail.icon)}
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
                                            <div className="flex items-center">
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
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold">Ready to Start Your Project?</h2>
              <p className="text-xl text-red-100 max-w-2xl mx-auto">
                Let's discuss how our expertise in {serviceCategoryTitle} can elevate your business to the next level.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <Link href="/#contact">
                  <button className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center space-x-2">
                    <span>Get a Free Consultation</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <Link href="/#our-work">
                  <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-all duration-300">
                    View Portfolio
                  </button>
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
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}
