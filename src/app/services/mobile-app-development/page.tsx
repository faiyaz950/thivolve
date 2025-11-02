"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle, Smartphone, Star, Play, Award, Target, Zap, Heart, CreditCard, Shield, Globe, Sparkles, ChevronDown, Clock, Users, TrendingUp, Lightbulb, BarChart3, Rocket, MessageCircle, Calendar, CheckCheck, ArrowUp, Filter, Search, Layers, Settings, Monitor, PieChart, Trophy, Gauge, AppWindow, GitBranch, TestTube2, Palette, LifeBuoy } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { Briefcase, BookOpen, Plane, Utensils, Gamepad2 } from 'lucide-react';


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
    title: "Transforming Ideas into Intuitive Mobile Experiences",
    subtitle: "Your Vision, Our Code: Crafting Cutting-Edge Mobile Applications.",
    description: "Deliver seamless user experiences and drive business growth with our expert mobile app development services for iOS, Android, and cross-platform solutions that captivate users and scale with your ambitions.",
    image: {
        src: "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NDg0MDM2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
        alt: "Mobile application development interface on a screen",
        hint: "mobile development"
    }
};

const introduction = "In the digital age of 2025, a powerful mobile app can propel your business to new heights. We specialize in crafting innovative, performance-optimized mobile applications that deeply engage your target audience while aligning with your business objectives, delivering an average 4.8/5 App Store rating and a 35% faster time-to-market.";

const appServices = [
    {
        title: "iOS App Development",
        description: "Harness Apple's ecosystem to build stunning, high-performance iOS apps that delight users with smooth interactions and enterprise-grade security.",
        icon: <AppWindow className="w-8 h-8" />,
        keyFeatures: [
            "Intuitive UI/UX design following Human Interface Guidelines.",
            "Rigorous performance optimization with Instruments.",
            "Streamlined App Store submission & ASO strategies.",
            "Integration with Apple services like iCloud, Siri & Apple Pay."
        ]
    },
    {
        title: "Android App Development",
        description: "Tap into the world's largest mobile platform with versatile, scalable Android apps designed for diverse devices and user behaviors.",
        icon: <Smartphone className="w-8 h-8" />,
        keyFeatures: [
            "Material Design 3 for modern, adaptive interfaces.",
            "Extensive device compatibility testing (5,000+ configs).",
            "Google Play Store compliance and A/B testing.",
            "Robust backend integration with Firebase & Google Cloud."
        ]
    },
    {
        title: "Cross-Platform Development",
        description: "Accelerate your go-to-market strategy with a single codebase for both iOS and Android, slashing costs by up to 40%.",
        icon: <Layers className="w-8 h-8" />,
        keyFeatures: [
            "Rapid development with React Native or Flutter.",
            "Cost-effective, shared logic for business rules.",
            "Native-like performance (55-60fps animations).",
            "Broader audience reach with simultaneous launches."
        ]
    },
     {
        title: "Progressive Web Apps (PWAs)",
        description: "Bridge the gap between web and native with PWAs that offer app-like functionality without the hassle of app stores.",
        icon: <Globe className="w-8 h-8" />,
        keyFeatures: [
            "Offline capabilities with Service Workers & IndexedDB.",
            "Push notifications for personalized re-engagement.",
            "Direct deployment, no app store needed.",
            "Performance-optimized with Lighthouse scores over 90."
        ]
    },
    {
        title: "App UI/UX Design",
        description: "We architect experiences that are as captivating as they are intuitive, turning one-time users into lifelong advocates.",
        icon: <Palette className="w-8 h-8" />,
        keyFeatures: [
            "In-depth user research, personas, and journey maps.",
            "Interactive wireframing and prototyping (Figma/Adobe XD).",
            "Usability testing with real user feedback.",
            "Accessibility compliance (WCAG 2.2 standards)."
        ]
    },
    {
        title: "App Maintenance & Support",
        description: "Our commitment extends beyond launch. We provide ongoing vigilance to keep your app resilient, relevant, and revenue-generating.",
        icon: <Settings className="w-8 h-8" />,
        keyFeatures: [
            "Swift bug fixing with CI/CD and hotfixes.",
            "Real-time performance monitoring (New Relic/Datadog).",
            "Regular security audits and updates.",
            "Quarterly sprints for feature enhancements."
        ]
    }
];

const developmentProcess = [
    { number: "01", title: "Discovery & Strategy", description: "We immerse ourselves in your world through stakeholder interviews, competitive benchmarking, and SWOT analyses to define MVPs, monetization models, and success metrics—culminating in a detailed project roadmap and Gantt chart.", icon: <Search /> },
    { number: "02", title: "UI/UX Design", description: "Collaborative ideation yields wireframes, high-fidelity mockups, and clickable prototypes, refined through 2-3 feedback loops and usability testing with 20+ participants to ensure intuitive flows.", icon: <Palette /> },
    { number: "03", title: "Development", description: "Sprints focus on front-end (UI components) and back-end (APIs, databases like Firebase/MongoDB) coding, with daily stand-ups, code reviews via GitHub, and integration testing for seamless feature delivery.", icon: <GitBranch /> },
    { number: "04", title: "Testing", description: "Multi-layered QA includes unit tests (Jest), end-to-end automation (Appium), security scans (Burp Suite), and beta releases for real-user validation, targeting zero critical bugs at launch.", icon: <TestTube2 /> },
    { number: "05", title: "Deployment", description: "Orchestrated rollouts to App Store/Google Play, including ASO, crash reporting setup, and phased releases to monitor initial metrics like DAU and retention.", icon: <Rocket /> },
    { number: "06", title: "Post-Launch Support", description: "90-day warranty for refinements, followed by retainer options; includes analytics reviews, OS update adaptations, and growth hacking sessions to iterate based on post-launch data.", icon: <LifeBuoy /> }
];

import { Cpu } from 'lucide-react';

const whyChooseUsData = [
    {
        icon: Cpu,
        title: "Experienced Team",
        description: "A 25+ member squad of certified developers (Apple/Google certified), designers, and PMs with 7-15 years in mobile, hailing from top firms like Google and Meta, versed in niches from gaming to telemedicine."
    },
    {
        icon: Zap,
        title: "Cutting-Edge Technologies",
        description: "We wield the latest—Swift 6, Kotlin Multiplatform, Flutter 3.0, and emerging tools like Jetpack Compose—for apps that are future-proof against trends like 5G, foldables, and edge AI."
    },
    {
        icon: Users,
        title: "Client-Centric Approach",
        description: "Your goals are our north star; we embed you via shared workspaces (Notion/Slack), flexible scoping, and ROI-focused pivots, ensuring 100% alignment."
    },
    {
        icon: CheckCheck,
        title: "Quality Assurance",
        description: "End-to-end testing suites catch 99.7% of defects, with ISO 27001-certified processes for secure, reliable deliverables that outperform industry benchmarks."
    },
    {
        icon: BarChart3,
        title: "Transparent Communication",
        description: "Weekly progress reports, milestone-based invoicing, and 24/7 access to a client portal—no surprises, just synchronized success."
    },
    {
        icon: TrendingUp,
        title: "Proven Scalability & ROI",
        description: "From bootstrapped MVPs ($10K starters) to enterprise suites ($100K+), our apps drive 2-4x engagement lifts, backed by case studies like a fintech app hitting 500K downloads in year one."
    },
    {
        icon: Sparkles,
        title: "Innovation Guarantee",
        description: "Free tech audits and concept ideation sessions to infuse your project with bleeding-edge features like blockchain wallets or metaverse integrations."
    }
];

const faqs = [
    {
        question: "How long does it take to build a mobile app?",
        answer: "The timeline for mobile app development varies based on complexity. A simple app might take 2-3 months, while a more complex app with a custom backend could take 6 months or more. We provide a detailed timeline after the initial discovery phase."
    },
    {
        question: "How much does it cost to develop a mobile app?",
        answer: "The cost depends on various factors like features, platforms (iOS, Android, or both), and complexity of the design. We provide a detailed quote after understanding your requirements. Contact us for a free consultation and estimate."
    },
    {
        question: "Do you provide support and maintenance after the app is launched?",
        answer: "Yes, we offer flexible support and maintenance packages to ensure your app remains up-to-date with the latest OS versions, bug-free, and secure. We can also work with you to add new features over time."
    },
    {
        question: "Will my app be published on the App Store and Google Play?",
        answer: "Absolutely. We handle the entire submission process for both the Apple App Store and Google Play Store, ensuring your app meets all guidelines and is successfully published."
    }
];


export default function MobileAppDevelopmentPage() {
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
                                    <span className="font-semibold">Get a Free Consultation</span>
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
                                    <span className="font-semibold">View Our Portfolio</span>
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

                {/* App Development Services Section */}
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
                                Our Mobile App Development Services
                            </h2>
                            <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                                A full spectrum of services to build, launch, and maintain a powerful mobile presence.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {appServices.map((service, index) => (
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
                                Our agile, iterative process is designed for flexibility and excellence, typically spanning 8-16 weeks for full-cycle projects, with bi-weekly demos to foster collaboration and mitigate risks.
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
                                Why Choose Us for Mobile App Development?
                            </h2>
                            <p className="text-lg md:text-xl text-neutral-400 max-w-4xl mx-auto leading-relaxed">
                                In a sea of development firms, we stand out by blending artistry, engineering, and strategy to deliver apps that don't just function—they flourish. Here's what powers our 98% client retention rate.
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
                           Ready to Build Your Next Big App?
                        </h2>
                        <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-12">
                           Ignite your mobile revolution—schedule a no-obligation 30-minute ideation session now, complete with a custom feasibility report and prototype sketch. Let's code the future together; your breakthrough app awaits!
                        </p>
                        <Button
                            variant="default"
                            size="lg"
                            className="group relative bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 px-8 py-6 text-lg"
                            asChild
                        >
                            <Link href="/#contact" className="flex items-center gap-3">
                                <span className="font-semibold">Request a Quote Today</span>
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
