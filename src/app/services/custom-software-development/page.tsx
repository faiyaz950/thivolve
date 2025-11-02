"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle, Code, Star, Play, Award, Target, Zap, Heart, CreditCard, Shield, Globe, Sparkles, ChevronDown, Clock, Users, TrendingUp, Lightbulb, BarChart3, Rocket, MessageCircle, Calendar, CheckCheck, ArrowUp, Filter, Search, Layers, Settings, Monitor, PieChart, Trophy, Gauge, AppWindow, GitBranch, TestTube2, Palette, LifeBuoy, Cpu } from 'lucide-react';
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
    title: "Tailored Innovation: Custom Software Development Services for Your Unique Needs",
    subtitle: "Engineered for Excellence: Custom Software That Powers Your Business Forward.",
    description: "Transform your operational challenges into scalable, secure software solutions designed exclusively for your business, driving efficiency, innovation, and competitive advantage in a dynamic digital landscape.",
    image: {
        src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50fGVufDB8fHx8MTc0ODQwMzYwMHww&ixlib=rb-4.1.0&q=80&w=1080",
        alt: "Custom software development code on a screen",
        hint: "software development"
    }
};

const introduction = "In an era where off-the-shelf solutions fall short, custom software is the catalyst for differentiation and agility. We translate your vision into robust, maintainable, and scalable code that complies with industry standards and future-proofs your tech stack.";

const customSoftwareServices = [
    {
        title: "Enterprise Software Development",
        description: "Build comprehensive, modular enterprise applications that unify your organization's siloed processes, from CRM to supply chain.",
        icon: <AppWindow className="w-8 h-8" />,
        keyFeatures: [
            "Full-stack development (MERN, .NET).",
            "Advanced workflow automation with BPMN tools.",
            "Role-based access control (RBAC) & multi-tenancy.",
            "Cloud-native deployment (AWS, Azure, GCP)."
        ]
    },
    {
        title: "Web Application Development",
        description: "Craft dynamic, responsive web apps like collaborative tools, e-learning platforms, or SaaS products that perform flawlessly.",
        icon: <Globe className="w-8 h-8" />,
        keyFeatures: [
            "SPA frameworks (Vue.js, Angular).",
            "API-first design (RESTful/GraphQL).",
            "Progressive Web App (PWA) capabilities.",
            "OAuth 2.0, JWT, and CSRF protection."
        ]
    },
    {
        title: "Desktop & Cross-Platform Applications",
        description: "Develop robust desktop apps for specialized workflows (e.g., CAD, inventory) with native performance and cross-platform compatibility.",
        icon: <Monitor className="w-8 h-8" />,
        keyFeatures: [
            "High-performance apps with Electron or Qt/C++.",
            "Offline-first synchronization (IndexedDB/SQLite).",
            "Hardware integrations (USB, GPU).",
            "Auto-update mechanisms for seamless patches."
        ]
    },
    {
        title: "API & Backend Development",
        description: "Engineer scalable backends and APIs to power your applications with enterprise-grade reliability, data orchestration, and business logic.",
        icon: <Code className="w-8 h-8" />,
        keyFeatures: [
            "Serverless backends (AWS Lambda, Google Cloud Functions).",
            "Database optimization (NoSQL, PostgreSQL).",
            "Event-driven architectures (Kafka, RabbitMQ).",
            "OpenAPI/Swagger for API documentation."
        ]
    },
    {
        title: "Legacy System Modernization",
        description: "Revitalize outdated legacy systems by migrating them to modern, cloud-native architectures, preserving data integrity and minimizing downtime.",
        icon: <Zap className="w-8 h-8" />,
        keyFeatures: [
            "Strangler pattern for gradual refactoring.",
            "Zero-loss data migration strategies.",
            "Containerization with Docker & Kubernetes.",
            "Hybrid integration with middleware like MuleSoft."
        ]
    },
    {
        title: "Software Testing & QA Services",
        description: "Ensure your custom software is bulletproof through rigorous, automated testing for functionality, security, and usability.",
        icon: <TestTube2 className="w-8 h-8" />,
        keyFeatures: [
            "Automated testing (Selenium, JUnit, Postman).",
            "CI/CD integration with Jenkins or GitHub Actions.",
            "Security & penetration testing.",
            "Performance benchmarking & load testing."
        ]
    }
];

const developmentProcess = [
    { number: "01", title: "Discovery & Planning", description: "In-depth requirements elicitation, user story mapping, and feasibility studies to deliver a detailed SRS and MVP scope.", icon: <Search /> },
    { number: "02", title: "Design & Prototyping", description: "Collaborative wireframing, architectural blueprints, and interactive prototypes for stakeholder validation and early risk mitigation.", icon: <Palette /> },
    { number: "03", title: "Development Sprints", description: "Bi-weekly cycles of coding, peer reviews, and integration, employing TDD and pair programming to build incrementally.", icon: <GitBranch /> },
    { number: "04", title: "Testing & QA", description: "Parallel automated and manual testing, including security audits, ensuring 95% code coverage and zero critical bugs.", icon: <TestTube2 /> },
    { number: "05", title: "Deployment & Release", description: "Automated deployments via blue-green strategies on CI/CD pipelines, with canary releases for progressive rollouts.", icon: <Rocket /> },
    { number: "06", title: "Maintenance & Iteration", description: "Ongoing support with bug bounties, feature backlogs, and quarterly enhancements, plus training for your team.", icon: <LifeBuoy /> }
];

const whyChooseUsData = [
    {
        icon: Cpu,
        title: "Domain Expertise",
        description: "A 30+ team of certified architects and developers with 8-15 years of experience across 20+ industries."
    },
    {
        icon: Zap,
        title: "Agile & Scalable Tech",
        description: "Cutting-edge stacks with modular designs that scale from prototypes to petabyte-handling behemoths."
    },
    {
        icon: Shield,
        title: "Security-First Mindset",
        description: "End-to-end encryption, zero-trust models, and annual pentests to reduce breach risks by 90%."
    },
    {
        icon: TrendingUp,
        title: "Cost-Effective Innovation",
        description: "Transparent pricing with 20-30% savings via offshore-onsite hybrids and open-source leverage."
    },
    {
        icon: Users,
        title: "Client Empowerment",
        description: "Daily stand-ups, shared repositories, and co-ownership via OKRs, empowering you with 100% visibility."
    },
    {
        icon: BarChart3,
        title: "Proven Impact",
        description: "Case studies showcase 50% faster processing or 40% revenue lifts, with NPS scores averaging 4.8/5."
    }
];

const faqs = [
    {
        question: "How long does a typical custom software project take?",
        answer: "Timelines vary greatly based on complexity. A simple MVP might take 2-4 months, while a complex enterprise system could take a year or more. We provide a detailed project plan with milestones after the discovery phase."
    },
    {
        question: "How do you ensure the quality of the software?",
        answer: "We employ a multi-layered QA strategy that includes unit testing, integration testing, end-to-end testing, and manual QA. Our CI/CD pipeline includes automated tests to catch regressions early."
    },
    {
        question: "Do I own the source code?",
        answer: "Yes, upon final payment, you will have full ownership of the source code and intellectual property for the custom software we develop for you."
    },
    {
        question: "What kind of post-launch support do you offer?",
        answer: "We offer a standard 90-day warranty period for bug fixes. Beyond that, we provide flexible monthly or annual support retainers for ongoing maintenance, updates, and feature enhancements."
    }
];


export default function CustomSoftwareDevelopmentPage() {
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
                    className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20"
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
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
                                {renderSplitColorTitle(heroContent.subtitle)}
                            </h1>
                            <div className="absolute -top-6 -left-6 w-4 h-4 bg-primary rounded-full animate-ping" />
                        </div>
                         <p className="text-base md:text-lg text-neutral-300 leading-relaxed mb-12 max-w-3xl mx-auto">
                            {heroContent.description}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                variant="default"
                                size="lg"
                                className="group relative bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg"
                                asChild
                            >
                                <Link href="/#contact" className="flex items-center gap-3">
                                    <span className="font-semibold">Kickstart Your Custom Project</span>
                                    <ArrowRight className="h-5 sm:h-6 w-5 sm:w-6 transition-all duration-500 group-hover:translate-x-2" />
                                </Link>
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="group relative border-2 border-primary/40 text-white hover:bg-primary/10 hover:text-white hover:border-primary/60 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 backdrop-blur-sm bg-gradient-to-r from-primary/10 to-transparent px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg"
                                asChild
                            >
                                <Link href="/#our-work" className="flex items-center gap-3">
                                    <span className="font-semibold">Browse Our Portfolio</span>
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
                     <div className="relative container mx-auto px-6 max-w-4xl">
                        <div className={cn(
                            "group relative p-6 sm:p-8 bg-gradient-to-br from-neutral-800/40 via-neutral-900/60 to-black/80 backdrop-blur-xl rounded-3xl border border-white/5 shadow-2xl transition-all duration-1000",
                            introRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        )}>
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                            <p className="text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed text-center group-hover:text-neutral-200 transition-colors duration-300">
                                {introduction}
                            </p>
                            <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full blur-xl animate-pulse" />
                            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-primary/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}} />
                        </div>
                    </div>
                </section>

                {/* Custom Software Services Section */}
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
                                Our Custom Software Services
                            </h2>
                            <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                                A complete ecosystem of software solutions to drive innovation and efficiency.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {customSoftwareServices.map((service, index) => (
                                <div key={service.title} className={cn(
                                    "group relative bg-gradient-to-br from-neutral-800/20 via-neutral-900/30 to-black/40 backdrop-blur-xl rounded-2xl border border-white/5 p-6 sm:p-8 hover:border-white/10 transition-all duration-700 hover:scale-105",
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
                
                {/* Our Development Process Section */}
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
                                Our Development Process
                            </h2>
                            <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                                We embrace an agile, iterative framework inspired by Scrum and Kanban, tailored to your project's scale, typically spanning 3-9 months.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden md:block" />
                            <div className="space-y-12">
                                {developmentProcess.map((step, index) => (
                                    <div key={step.title} className={cn(
                                        "relative flex flex-col md:flex-row items-center gap-8 transition-all duration-1000",
                                        processRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12',
                                        index % 2 !== 0 && 'md:flex-row-reverse'
                                    )} style={{ transitionDelay: `${index * 200}ms` }}>
                                        <div className="flex-1 w-full">
                                            <div className="bg-gradient-to-br from-neutral-800/40 to-black/60 p-6 sm:p-8 rounded-2xl border border-white/10 backdrop-blur-lg">
                                                <div className="flex items-center gap-4 mb-4">
                                                    <div className="p-2 bg-primary/20 rounded-lg border border-primary/30 text-primary">{step.icon}</div>
                                                    <h3 className="text-xl sm:text-2xl font-bold text-white">{step.title}</h3>
                                                </div>
                                                <p className="text-neutral-300">{step.description}</p>
                                            </div>
                                        </div>
                                        <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
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
                                Why Choose Us for Custom Software?
                            </h2>
                            <p className="text-lg md:text-xl text-neutral-400 max-w-4xl mx-auto leading-relaxed">
                               With 98% project success rates and a decade of bespoke engineering, we don't just build software—we architect your competitive moat.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {whyChooseUsData.map((feature, index) => (
                                <div key={feature.title} className={cn(
                                    "group relative bg-gradient-to-br from-neutral-800/20 via-neutral-900/30 to-black/40 backdrop-blur-xl rounded-2xl border border-white/5 p-6 sm:p-8 hover:border-white/10 transition-all duration-700 hover:scale-105",
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
                           Ready to Code Your Custom Advantage?
                        </h2>
                        <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-12">
                           Don't settle for generic—unlock bespoke brilliance with a complimentary 60-minute scoping session, including a high-level architecture diagram and ROI projection.
                        </p>
                        <Button
                            variant="default"
                            size="lg"
                            className="group relative bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 px-8 py-6 text-lg"
                            asChild
                        >
                            <Link href="/#contact" className="flex items-center gap-3">
                                <span className="font-semibold">Request a Free Project Assessment</span>
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
