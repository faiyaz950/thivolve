"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle, Megaphone, Star, Play, Award, Target, Zap, Heart, CreditCard, Shield, Globe, Sparkles, ChevronDown, Clock, Users, TrendingUp, Lightbulb, BarChart3, Rocket, MessageCircle, Calendar, CheckCheck, ArrowUp, Filter, Search, Layers, Settings, Monitor, PieChart, Trophy, Gauge, AppWindow, GitBranch, TestTube2, Brush, PenTool, Image as ImageIcon, LineChart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';

const useScrollAnimation = ({ threshold = 0.1 }: { threshold?: number }) => {
    const ref = useRef<HTMLDivElement>(null);
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


const heroContent = {
    title: "SEO & Digital Marketing",
    subtitle: "Driving Growth Through Data-Driven Strategies",
    description: "Expand your reach, generate qualified leads, and boost your revenue with our comprehensive, data-driven digital marketing and SEO services.",
    image: {
        src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBhbmFseXRpY3N8ZW58MHx8fHwxNzQ4NDAzNjAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        alt: "Digital marketing analytics on a dashboard",
        hint: "marketing analytics"
    }
};

const marketingServices = [
    {
        title: "Search Engine Optimization (SEO)",
        description: "Boost your organic traffic and rank higher on search engines with our on-page, off-page, and technical SEO expertise.",
        icon: <Search className="w-8 h-8" />,
        tactics: ["Keyword Research", "Link Building", "Content Optimization", "Local SEO"]
    },
    {
        title: "Pay-Per-Click (PPC) Advertising",
        description: "Get immediate, targeted traffic with expertly managed PPC campaigns on Google Ads, Bing Ads, and social media platforms.",
        icon: <LineChart className="w-8 h-8" />,
        tactics: ["Campaign Management", "Ad Copywriting", "Bid Management", "Conversion Tracking"]
    },
    {
        title: "Social Media Marketing (SMM)",
        description: "Build and engage your community with strategic content, targeted advertising, and influencer marketing on platforms like Facebook, Instagram, and LinkedIn.",
        icon: <Users className="w-8 h-8" />,
        tactics: ["Content Creation", "Community Management", "Social Ads", "Analytics"]
    },
     {
        title: "Content Marketing",
        description: "Attract, engage, and convert your target audience with high-quality, relevant content including blog posts, videos, and ebooks.",
        icon: <PenTool className="w-8 h-8" />,
        tactics: ["Strategy", "Creation", "Distribution", "Analytics"]
    }
];

const marketingProcess = [
    { number: "01", title: "Audit & Analysis", description: "We conduct a thorough audit of your current digital presence and competitor landscape to identify opportunities.", icon: <PieChart /> },
    { number: "02", title: "Strategy Development", description: "We create a tailored, data-driven marketing strategy with clear KPIs and a detailed roadmap.", icon: <Target /> },
    { number: "03", title: "Campaign Execution", description: "Our team launches and manages your campaigns, continuously optimizing for performance and ROI.", icon: <Rocket /> },
    { number: "04", title: "Reporting & Refinement", description: "We provide transparent, detailed reports and use the insights to constantly refine our approach for better results.", icon: <BarChart3 /> }
];


const faqs = [
    {
        question: "How long does it take to see results from SEO?",
        answer: "SEO is a long-term strategy. While some improvements can be seen in the first few weeks, it typically takes 4-6 months to see significant, lasting results in organic traffic and rankings. The exact timeline depends on your industry, competition, and the current state of your website."
    },
    {
        question: "What is the difference between SEO and SEM?",
        answer: "SEO (Search Engine Optimization) focuses on improving your website's organic (unpaid) rankings in search results. SEM (Search Engine Marketing) is a broader term that includes SEO as well as paid advertising methods like PPC (Pay-Per-Click) to increase search engine visibility."
    },
    {
        question: "How do you measure the success of a digital marketing campaign?",
        answer: "We measure success based on the Key Performance Indicators (KPIs) we establish during the strategy phase. These can include metrics like website traffic, conversion rates, cost per acquisition (CPA), return on ad spend (ROAS), and keyword rankings."
    },
    {
        question: "What is your pricing model for digital marketing services?",
        answer: "Our pricing is flexible and tailored to your specific needs. We offer monthly retainers for ongoing services like SEO and SMM, as well as project-based pricing for specific campaigns. Contact us for a custom quote."
    }
];


export default function SeoAndDigitalMarketingPage() {
    const heroRef = useScrollAnimation({ threshold: 0.1 });
    const servicesRef = useScrollAnimation({ threshold: 0.2 });
    const processRef = useScrollAnimation({ threshold: 0.2 });
    const faqRef = useScrollAnimation({ threshold: 0.2 });
    const ctaRef = useScrollAnimation({ threshold: 0.2 });

    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

    const renderSplitColorTitle = (title: string) => {
        const words = title.split(' ');
        const midPoint = Math.ceil(words.length / 2);
        return (
            <>
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400">
                    {words.slice(0, midPoint).join(' ')}
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/90 to-orange-500">
                    {' ' + words.slice(midPoint).join(' ')}
                </span>
            </>
        );
    };

    return (
        <div className="min-h-screen bg-black text-white">
            <Header />

            <main className="flex-grow">
                {/* Hero Section */}
                <section
                    ref={heroRef.ref}
                    className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
                >
                    <div className="absolute inset-0">
                        <Image
                            src={heroContent.image.src}
                            alt={heroContent.image.alt}
                            fill
                            className="object-cover opacity-30"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/90" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                        <div className="absolute inset-0 opacity-20">
                            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/30 to-orange-500/20 rounded-full filter blur-3xl animate-pulse" />
                            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-primary/30 rounded-full filter blur-3xl animate-pulse" />
                        </div>
                    </div>

                    <div className={cn(
                        "relative z-20 text-center px-6 max-w-4xl mx-auto transition-all duration-1000",
                        heroRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}>
                        <div className="relative inline-block mb-6">
                            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-tight">
                                {renderSplitColorTitle(heroContent.title)}
                            </h1>
                            <div className="absolute -top-6 -left-6 w-4 h-4 bg-primary rounded-full animate-ping" />
                        </div>
                         <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-12 max-w-3xl mx-auto">
                            {heroContent.description}
                        </p>
                        <Button
                            variant="outline"
                            size="lg"
                            className="group relative border-2 border-primary/40 text-white hover:bg-primary/10 hover:text-white hover:border-primary/60 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 backdrop-blur-sm bg-gradient-to-r from-primary/10 to-transparent px-8 py-6 text-lg"
                            asChild
                        >
                            <Link href="/#contact" className="flex items-center gap-3">
                                <span className="font-semibold">Get a Free Marketing Analysis</span>
                                <ArrowRight className="h-6 w-6 transition-all duration-500 group-hover:translate-x-2" />
                            </Link>
                        </Button>
                    </div>
                </section>

                {/* Marketing Services Section */}
                <section
                    ref={servicesRef.ref}
                    className="relative py-20 md:py-32 bg-black overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-black" />
                    <div className="relative container mx-auto px-6 max-w-screen-xl">
                        <div className={cn(
                            "text-center mb-16 md:mb-20 transition-all duration-1000",
                            servicesRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        )}>
                            <h2 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400 mb-6 tracking-tight">
                                Our Digital Marketing Services
                            </h2>
                            <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                                A suite of services designed to deliver measurable results and maximize your return on investment.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {marketingServices.map((service, index) => (
                                <div key={service.title} className={cn(
                                    "group relative bg-gradient-to-br from-neutral-800/20 via-neutral-900/30 to-black/40 backdrop-blur-xl rounded-2xl border border-white/5 p-8 hover:border-white/10 transition-all duration-700 hover:scale-105",
                                    servicesRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                )} style={{ transitionDelay: `${index * 150}ms` }}>
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                                    <div className="flex items-center gap-4 mb-4">
                                      <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl border border-primary/30 text-primary group-hover:scale-110 transition-transform duration-300">
                                          {service.icon}
                                      </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                                    <p className="text-neutral-400 text-sm leading-relaxed mb-4">{service.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {service.tactics.map(tactic => (
                                            <span key={tactic} className="px-2 py-1 bg-neutral-700/50 text-neutral-300 text-xs rounded-md">{tactic}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                
                {/* Our Marketing Process Section */}
                <section
                    ref={processRef.ref}
                    className="relative py-20 md:py-32 bg-gradient-to-br from-neutral-950 to-black overflow-hidden"
                >
                    <div className="relative container mx-auto px-6 max-w-screen-xl">
                        <div className={cn(
                            "text-center mb-16 md:mb-20 transition-all duration-1000",
                            processRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        )}>
                             <h2 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400 mb-6 tracking-tight">
                                Our Strategic Process
                            </h2>
                            <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                                A results-oriented process designed for clarity, efficiency, and maximum impact.
                            </p>
                        </div>
                        <div className="relative">
                             <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden md:block" />
                            <div className="grid md:grid-cols-4 gap-8 relative">
                                {marketingProcess.map((step, index) => (
                                    <div key={step.title} className={cn(
                                        "group text-center transition-all duration-1000",
                                        processRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                                    )} style={{ transitionDelay: `${index * 200}ms` }}>
                                         <div className="relative mb-6">
                                            <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
                                                <div className="absolute w-16 h-16 bg-gradient-to-r from-primary to-orange-500 rounded-full animate-pulse blur-lg group-hover:scale-110 transition-transform" />
                                                <div className="relative w-14 h-14 flex items-center justify-center bg-neutral-900 rounded-full border-2 border-primary/50 text-xl font-bold text-primary">{step.number}</div>
                                            </div>
                                        </div>
                                        <div className="p-2 bg-gradient-to-br from-neutral-800/20 to-black/30 backdrop-blur-sm rounded-xl">
                                          <div className="p-6 bg-neutral-900/80 rounded-lg border border-white/10">
                                            <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                                            <p className="text-sm text-neutral-400">{step.description}</p>
                                          </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                

                {/* FAQ Section */}
                <section
                    ref={faqRef.ref}
                    className="relative py-20 md:py-32 bg-black overflow-hidden"
                >
                    <div className="relative container mx-auto px-6 max-w-4xl">
                        <div className={cn(
                            "text-center mb-16 md:mb-20 transition-all duration-1000",
                            faqRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        )}>
                            <h2 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400 mb-6 tracking-tight">
                                Frequently Asked Questions
                            </h2>
                        </div>
                        <div className="space-y-6">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className={cn(
                                        "group bg-gradient-to-br from-neutral-800/20 via-neutral-900/30 to-black/40 backdrop-blur-xl rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-700",
                                        faqRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                    )}
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                >
                                    <button
                                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                                        className="w-full text-left p-6 flex items-center justify-between group-hover:text-primary transition-colors duration-300"
                                    >
                                        <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                                        <ChevronDown
                                            className={cn(
                                                "w-5 h-5 text-primary transition-transform duration-300 flex-shrink-0",
                                                expandedFaq === index ? "rotate-180" : ""
                                            )}
                                        />
                                    </button>
                                    {expandedFaq === index && (
                                        <div className="px-6 pb-6">
                                            <div className="pt-4 border-t border-white/10">
                                                <p className="text-neutral-400 leading-relaxed">{faq.answer}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section
                    ref={ctaRef.ref}
                    className="relative py-20 md:py-32 bg-gradient-to-br from-neutral-950 to-black text-center"
                >
                     <div className={cn(
                        "relative container mx-auto px-6 max-w-4xl transition-all duration-1000",
                        ctaRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}>
                        <h2 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400 mb-6 tracking-tight">
                            Ready to Grow Your Business?
                        </h2>
                        <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-12">
                           Let's build a winning strategy to achieve your marketing goals. Contact us today for a free consultation.
                        </p>
                        <Button
                            variant="default"
                            size="lg"
                            className="group relative bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 px-8 py-6 text-lg"
                            asChild
                        >
                            <Link href="/#contact" className="flex items-center gap-3">
                                <span className="font-semibold">Request a Quote</span>
                                <ArrowRight className="h-6 w-6 transition-all duration-500 group-hover:translate-x-2" />
                            </Link>
                        </Button>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
