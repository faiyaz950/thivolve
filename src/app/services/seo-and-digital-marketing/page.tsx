
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle, Megaphone, Star, Play, Award, Target, Zap, Heart, CreditCard, Shield, Globe, Sparkles, ChevronDown, Clock, Users, TrendingUp, Lightbulb, BarChart3, Rocket, MessageCircle, Calendar, CheckCheck, ArrowUp, Filter, Search, Layers, Settings, Monitor, PieChart, Trophy, Gauge, AppWindow, GitBranch, TestTube2, Brush, PenTool, Image as ImageIcon, LineChart, Mail } from 'lucide-react';
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
    title: "Maximize Your Online Reach: SEO & Digital Marketing Solutions",
    subtitle: "Get Discovered Online: Drive Traffic, Generate Leads, and Boost Sales.",
    description: "Reach your brand to the right audience with comprehensive digital marketing strategies and accelerate your online growth in today's competitive digital world.",
    image: {
        src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBhbmFseXRpY3N8ZW58MHx8fHwxNzQ4NDAzNjAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        alt: "Digital marketing analytics on a dashboard",
        hint: "marketing analytics"
    }
};

const introduction = "In today's fast-paced digital landscape, simply having a website isn't enough— it needs to be visible, engaging, and optimized to stand out. Our SEO and Digital Marketing services empower your business to climb to the top of search results, generate qualified leads, and maximize ROI through proven, data-driven strategies. We bridge the gap between your brand and where your customers are actively searching and interacting online, whether on search engines, social platforms, or email inboxes. With a blend of cutting-edge tools, industry best practices, and personalized campaigns, we've helped over 200 clients across e-commerce, B2B, and service-based sectors achieve up to 300% growth in organic traffic and a 45% increase in conversion rates. From startups scaling their presence to enterprises refining their funnels, we tailor solutions that deliver measurable success and long-term dominance.";

const marketingServices = [
    {
        title: "Search Engine Optimization (SEO)",
        description: "Elevate your website's search engine rankings and drive sustainable organic traffic by targeting high-intent keywords and fixing technical hurdles. Our holistic approach combines on-page tweaks, off-page authority building, and technical audits to position you at the top of Google, Bing, and other engines, ensuring long-term visibility without relying solely on paid ads.",
        icon: <Search className="w-8 h-8" />,
        keyFeatures: [
            "In-depth keyword research using tools like Ahrefs and SEMrush.",
            "On-page optimization: Meta tags, header structures, content enhancements.",
            "Technical SEO audit: Site speed, mobile responsiveness, schema markup.",
            "Ethical link-building strategies to build domain authority.",
            "Local SEO for brick-and-mortar businesses.",
            "Monthly performance reporting with traffic trends and ranking progress."
        ]
    },
    {
        title: "Social Media Marketing (SMM)",
        description: "Amplify your brand awareness, foster vibrant communities, and enhance customer interactions across platforms like Facebook, Instagram, LinkedIn, Twitter (X), and TikTok. We craft engaging campaigns that resonate with your audience, turning followers into advocates and driving real business outcomes.",
        icon: <Users className="w-8 h-8" />,
        keyFeatures: [
            "Customized social media strategy and content calendars.",
            "Content creation: Posts, stories, reels/videos, and user-generated content.",
            "Targeted ad campaigns with audience segmentation and retargeting.",
            "Community management and sentiment analysis.",
            "Performance analytics and ROI tracking.",
            "Influencer collaborations and hashtag campaigns."
        ]
    },
    {
        title: "Pay-Per-Click (PPC) Advertising",
        description: "Unlock instant visibility and laser-targeted traffic through Google Ads, Microsoft Advertising, and social platforms. We optimize your ad spend for peak performance, ensuring every click contributes to conversions while scaling campaigns based on real-time data for superior ROI.",
        icon: <LineChart className="w-8 h-8" />,
        keyFeatures: [
            "Full ad campaign setup and account structuring.",
            "Strategic keyword bidding and negative keyword lists.",
            "Compelling ad copywriting and A/B testing.",
            "Landing page optimization for higher conversion rates.",

            "Continuous tracking & optimization with Google Analytics.",
            "Cross-platform remarketing strategies."
        ]
    },
    {
        title: "Content Marketing",
        description: "Captivate your audience with high-quality, relevant content—such as blogs, articles, videos, and infographics—that not only attracts visitors but also educates, nurtures leads, and establishes your brand as an industry authority.",
        icon: <PenTool className="w-8 h-8" />,
        keyFeatures: [
            "Comprehensive content strategy with topic clustering.",
            "Expert blog and article writing optimized for E-E-A-T.",
            "Multimedia production: Videos, infographics, and podcasts.",
            "Guest posting and syndication for backlinks and exposure.",
            "Content promotion via email, social media, and paid boosts.",
            "Content repurposing for multi-channel efficiency."
        ]
    },
    {
        title: "Email Marketing",
        description: "Forge direct, personalized connections with customers and leads through targeted email campaigns that nurture relationships and drive repeat business. From welcome series to abandoned cart recoveries, we design sequences that boost open rates, clicks, and lifetime value.",
        icon: <Mail className="w-8 h-8" />,
        keyFeatures: [
            "Email list management, segmentation, and cleaning.",
            "Campaign design with mobile-first responsiveness.",
            "A/B testing for subjects, send times, and CTAs.",
            "Automation setup: Drip campaigns and behavioral triggers.",
            "Performance analytics with open/click rates and revenue attribution.",
            "Compliance with CAN-SPAM and GDPR."
        ]
    },
    {
        title: "Analytics & Reporting",
        description: "Gain crystal-clear insights into your digital marketing performance to make informed decisions and demonstrate value. We set up robust tracking systems and deliver actionable reports that highlight wins, uncover opportunities, and guide strategy pivots for sustained growth.",
        icon: <BarChart3 className="w-8 h-8" />,
        keyFeatures: [
            "Google Analytics 4 setup and event tracking.",
            "Custom dashboards in Google Data Studio or Tableau.",
            "Monthly/quarterly performance reports with executive summaries.",
            "Competitor analysis using tools like SpyFu.",
            "Actionable insights from heatmaps and session recordings.",
            "ROI calculators tying marketing spend to revenue."
        ]
    }
];

const marketingProcess = [
    { number: "01", title: "Strategy Development", description: "We kick off with a deep-dive audit of your current online presence, business objectives, and target audience to craft a personalized roadmap with KPIs, timelines, and budget allocations.", icon: <Target /> },
    { number: "02", title: "Implementation", description: "With strategy in hand, we roll out campaigns, from content production and ad launches to SEO tweaks and email builds, using collaborative tools for seamless execution.", icon: <Rocket /> },
    { number: "03", title: "Optimization", description: "Real-time monitoring via dashboards flags underperformers early. We apply data-backed tweaks weekly, aiming for continuous improvement and quick wins.", icon: <TrendingUp /> },
    { number: "04", title: "Analysis & Reporting", description: "At milestones, we compile in-depth reports with visualizations, key learnings, and recommendations. Quarterly reviews discuss pivots, celebrate successes, and align on future sprints.", icon: <PieChart /> }
];

const whyChooseUsData = [
    {
        icon: BarChart3,
        title: "Data-Driven Approach",
        description: "Every decision stems from robust analytics and A/B testing, not guesswork. We leverage AI for predictive insights to keep your strategies ahead of algorithm updates."
    },
    {
        icon: Award,
        title: "Experienced Marketers",
        description: "Our team of 15+ certified experts brings 10+ years of hands-on experience across niches, from SaaS to retail, with a track record of 4.9/5 client ratings."
    },
    {
        icon: Eye,
        title: "Transparent Reporting",
        description: "No black boxes. Enjoy weekly snapshots, monthly deep-dives, and access to live dashboards so you're always informed and empowered."
    },
    {
        icon: Rocket,
        title: "Measurable Results",
        description: "We prioritize tangible outcomes: 150% average traffic growth, 30%+ lead gen uplift, and ROI multiples of 4:1 or better, backed by case studies."
    },
    {
        icon: Layers,
        title: "Holistic Strategy",
        description: "We don't silo services. Our integrated ecosystem syncs SEO with PPC, content with social, and email with analytics for amplified synergy and cost efficiency."
    },
    {
        icon: Settings,
        title: "Scalable & Flexible",
        description: "From one-off audits to full-funnel retainers, we adapt to your budget and goals without lock-in contracts. Get started with a free strategy session."
    }
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
    const introRef = useScrollAnimation({ threshold: 0.2 });
    const servicesRef = useScrollAnimation({ threshold: 0.2 });
    const processRef = useScrollAnimation({ threshold: 0.2 });
    const whyChooseUsRef = useScrollAnimation({ threshold: 0.2 });
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
                                {renderSplitColorTitle(heroContent.subtitle)}
                            </h1>
                            <div className="absolute -top-6 -left-6 w-4 h-4 bg-primary rounded-full animate-ping" />
                        </div>
                         <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-12 max-w-3xl mx-auto">
                            {heroContent.description}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                             <Button
                                variant="default"
                                size="lg"
                                className="group relative bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 px-8 py-6 text-lg"
                                asChild
                            >
                                <Link href="/#contact" className="flex items-center gap-3">
                                    <span className="font-semibold">Get a Free Digital Marketing Audit</span>
                                    <ArrowRight className="h-6 w-6 transition-all duration-500 group-hover:translate-x-2" />
                                </Link>
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="group relative border-2 border-primary/40 text-white hover:bg-primary/10 hover:text-white hover:border-primary/60 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 backdrop-blur-sm bg-gradient-to-r from-primary/10 to-transparent px-8 py-6 text-lg"
                                asChild
                            >
                                <Link href="/#our-work" className="flex items-center gap-3">
                                    <span className="font-semibold">Grow Your Business Online</span>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Introduction Section */}
                <section
                    ref={introRef.ref}
                    className="relative py-20 md:py-32 bg-black overflow-hidden"
                >
                    <div className="relative container mx-auto px-6 max-w-4xl text-center">
                         <div className={cn(
                            "transition-all duration-1000",
                            introRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        )}>
                            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
                                {introduction}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Marketing Services Section */}
                <section
                    ref={servicesRef.ref}
                    className="relative py-20 md:py-32 bg-gradient-to-br from-neutral-950 to-black overflow-hidden"
                >
                    <div className="relative container mx-auto px-6 max-w-screen-xl">
                        <div className={cn(
                            "text-center mb-16 md:mb-20 transition-all duration-1000",
                            servicesRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        )}>
                            <h2 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400 mb-6 tracking-tight">
                                Our SEO & Digital Marketing Services
                            </h2>
                            <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                                A suite of services designed to deliver measurable results and maximize your return on investment.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                                    <ul className="space-y-2">
                                        {service.keyFeatures.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                                                <span className="text-sm text-neutral-300">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                
                {/* Our Marketing Process Section */}
                <section
                    ref={processRef.ref}
                    className="relative py-20 md:py-32 bg-black overflow-hidden"
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
                                A results-focused, agile methodology to adapt to market shifts and your evolving needs. Our process ensures transparency and collaboration every step of the way.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden md:block" />
                            <div className="space-y-12">
                                {marketingProcess.map((step, index) => (
                                    <div key={step.title} className={cn(
                                        "relative flex flex-col md:flex-row items-center gap-8 transition-all duration-1000",
                                        processRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12',
                                        index % 2 !== 0 && 'md:flex-row-reverse'
                                    )} style={{ transitionDelay: `${index * 200}ms` }}>
                                        <div className="flex-1">
                                            <div className="bg-gradient-to-br from-neutral-800/40 to-black/60 p-8 rounded-2xl border border-white/10 backdrop-blur-lg">
                                                <div className="flex items-center gap-4 mb-4">
                                                    <div className="p-2 bg-primary/20 rounded-lg border border-primary/30 text-primary">{step.icon}</div>
                                                    <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                                                </div>
                                                <p className="text-neutral-300">{step.description}</p>
                                            </div>
                                        </div>
                                        <div className="relative w-16 h-16 flex items-center justify-center">
                                            <div className="absolute w-16 h-16 bg-gradient-to-r from-primary to-orange-500 rounded-full animate-pulse blur-lg" />
                                            <div className="relative w-12 h-12 flex items-center justify-center bg-neutral-900 rounded-full border-2 border-primary/50 text-xl font-bold text-primary">{step.number}</div>
                                        </div>
                                        <div className="flex-1 hidden md:block" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section
                    ref={whyChooseUsRef.ref}
                    className="relative py-20 md:py-32 bg-gradient-to-br from-neutral-950 to-black overflow-hidden"
                >
                    <div className="relative container mx-auto px-6 max-w-screen-xl">
                        <div className={cn(
                            "text-center mb-16 md:mb-20 transition-all duration-1000",
                            whyChooseUsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        )}>
                            <h2 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400 mb-6 tracking-tight">
                                Why Choose Us?
                            </h2>
                            <p className="text-lg md:text-xl text-neutral-400 max-w-4xl mx-auto leading-relaxed">
                                Partnering with us means gaining a strategic ally dedicated to your success in the ever-evolving digital arena. Here's what differentiates our approach.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {whyChooseUsData.map((feature, index) => (
                                <div key={feature.title} className={cn(
                                    "group relative bg-gradient-to-br from-neutral-800/20 via-neutral-900/30 to-black/40 backdrop-blur-xl rounded-2xl border border-white/5 p-8 hover:border-white/10 transition-all duration-700 hover:scale-105",
                                    whyChooseUsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                )} style={{ transitionDelay: `${index * 150}ms` }}>
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                                     <div className="flex items-center gap-4 mb-4">
                                      <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl border border-primary/30 text-primary group-hover:scale-110 transition-transform duration-300">
                                          <feature.icon className="w-8 h-8"/>
                                      </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                                    <p className="text-neutral-400 text-sm leading-relaxed">{feature.description}</p>
                                </div>
                            ))}
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
                            Ready to Dominate Your Niche?
                        </h2>
                        <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-12">
                           Don't let competitors steal your spotlight—claim your free 30-minute strategy session today and receive a personalized growth blueprint. Let's turn clicks into customers and data into dollars!
                        </p>
                        <Button
                            variant="default"
                            size="lg"
                            className="group relative bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 px-8 py-6 text-lg"
                            asChild
                        >
                            <Link href="/#contact" className="flex items-center gap-3">
                                <span className="font-semibold">Request a Custom Proposal</span>
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


    