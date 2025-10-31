
"use client";

import { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle, Code, Megaphone, Palette, Smartphone, Bot, DatabaseZap, Star, Play, Award, Target, Zap, Heart, CreditCard, Shield, Globe, Sparkles, ChevronDown, Clock, Users, TrendingUp, Lightbulb, BarChart3, Rocket, MessageCircle, Calendar, CheckCheck, ArrowUp, Filter, Search, Layers, Settings, Monitor, PieChart, Trophy, Gauge } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { Service, ServiceDetail, SubDetail, HeroSlide } from '@/lib/services-data';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';

// Custom hook for scroll animation
const useScrollAnimation = ({ threshold = 0.1 }: { threshold?: number }) => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return { ref, isVisible };
};

// Icon mapping function
const getIcon = (iconName: string | undefined, className: string) => {
    const iconProps = { className };
    switch (iconName) {
    case 'website-development': return <Code {...iconProps} />;
    case 'mobile-application-development': return <Smartphone {...iconProps} />;
    case 'digital-marketing': return <Megaphone {...iconProps} />;
    case 'graphics-designing': return <Palette {...iconProps} />;
    case 'ai-automation': return <Bot {...iconProps} />;
    case 'data-analysis': return <DatabaseZap {...iconProps} />;
    default: return <Star {...iconProps} />;
    }
};

const ItServicesPage = ({ service }: { service: Service }) => {
  const { ref: heroRef, isVisible: isHeroVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: aboutRef, isVisible: isAboutVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: servicesRef, isVisible: isServicesVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: ctaRef, isVisible: isCtaVisible } = useScrollAnimation({ threshold: 0.4 });

  const { title, description, details } = service;

  return (
    <div className="bg-black text-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
            <div className="absolute inset-0">
                <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGJhY2tncm91bmR8ZW58MHx8fHwxNzQ4ODUwMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Abstract technology background"
                fill
                className="object-cover opacity-20"
                priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black" />
            </div>
            <div className={cn("relative z-10 p-6 transition-all duration-1000", isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")}>
                <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400 mb-6">
                {title}
                </h1>
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-neutral-300">
                {description}
                </p>
                <div className="mt-10">
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90 transition-transform hover:scale-105">
                        <Link href="#contact">Get a Free Consultation</Link>
                    </Button>
                </div>
            </div>
        </section>

        {/* About IT Services Section */}
        <section ref={aboutRef} className="py-20 md:py-28 bg-neutral-950">
            <div className="container mx-auto px-6 max-w-screen-xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className={cn("transition-all duration-1000", isAboutVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10")}>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Partner in Digital Transformation</h2>
                        <p className="text-neutral-400 leading-relaxed">
                        At Btruss, we don't just build websites or apps; we build digital experiences that drive growth. Our team of expert developers, designers, and strategists are dedicated to understanding your unique business needs and delivering tailored solutions that exceed expectations. We are committed to leveraging the latest technologies to give you a competitive edge.
                        </p>
                    </div>
                    <div className={cn("relative transition-all duration-1000 delay-200", isAboutVisible ? "opacity-100 scale-100" : "opacity-0 scale-90")}>
                        <Image src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwwfHx8fDE3NDg4NTAwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="Team collaborating" width={600} height={400} className="rounded-2xl object-cover" />
                    </div>
                </div>
            </div>
        </section>

        {/* Core IT Services Section */}
        <section ref={servicesRef} className="py-20 md:py-28 bg-black">
            <div className="container mx-auto px-6 max-w-screen-xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold">Our Core IT Offerings</h2>
                    <p className="text-neutral-400 mt-4 max-w-2xl mx-auto">From concept to launch, we provide end-to-end services to bring your digital ideas to life.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {details.map((service, index) => (
                        <div key={service.slug} className={cn("p-8 bg-neutral-900 rounded-xl border border-neutral-800 transition-all duration-500 hover:border-primary hover:shadow-2xl hover:shadow-primary/20", isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')} style={{transitionDelay: `${index * 150}ms`}}>
                            <div className="text-primary mb-4">
                                {getIcon(service.icon, "w-10 h-10")}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                            <p className="text-neutral-400 text-sm mb-4">{service.description}</p>
                            <Button variant="link" asChild className="p-0 text-primary">
                                <Link href={`/services/it-services#${service.slug}`}>Learn More <ArrowRight className="w-4 h-4 ml-2" /></Link>
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Detailed Service Descriptions */}
        {details.map((detail, index) => (
            <section key={detail.slug} id={detail.slug} className={`py-20 md:py-28 ${index % 2 === 0 ? 'bg-neutral-950' : 'bg-black'}`}>
                <div className="container mx-auto px-6 max-w-screen-xl">
                    <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? '' : 'md:grid-flow-col-dense'}`}>
                        <div className={`relative ${index % 2 === 0 ? '' : 'md:col-start-2'}`}>
                            <Image src={detail.backgroundImage} alt={detail.title} width={600} height={400} className="rounded-2xl object-cover" />
                        </div>
                        <div className={`${index % 2 === 0 ? '' : 'md:col-start-1'}`}>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">{detail.title}</h2>
                            {detail.subDetails?.map(sub => (
                                <div key={sub.title} className="mt-6">
                                    <h4 className="font-semibold text-lg text-primary">{sub.title}</h4>
                                    <p className="text-neutral-400 mt-2">{sub.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        ))}

        {/* CTA Section */}
        <section ref={ctaRef} className="py-20 md:py-32 text-center bg-black">
            <div className={cn("container mx-auto px-6 transition-all duration-1000", isCtaVisible ? "opacity-100 scale-100" : "opacity-0 scale-90")}>
                <h2 className="text-3xl md:text-4xl font-bold">Ready to start your next project?</h2>
                <p className="text-neutral-400 mt-4 max-w-2xl mx-auto">Let's discuss how we can help you achieve your business goals. Get in touch with us for a free, no-obligation quote.</p>
                <div className="mt-8">
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90 transition-transform hover:scale-105">
                        <Link href="/#contact">Contact Us Today</Link>
                    </Button>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ItServicesPage;
