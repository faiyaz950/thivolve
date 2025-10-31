
"use client";

import { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle, Smartphone, Star, Play, Award, Target, Zap, Heart, CreditCard, Shield, Globe, Sparkles, ChevronDown, Clock, Users, TrendingUp, Lightbulb, BarChart3, Rocket, MessageCircle, Calendar, CheckCheck, ArrowUp, Filter, Search, Layers, Settings, Monitor, PieChart, Trophy, Gauge, AppWindow, GitBranch, TestTube2 } from 'lucide-react';
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
    title: "Mobile App Development",
    subtitle: "Bringing Your Vision to Life on Every Screen",
    description: "We build intuitive, high-performance native and hybrid mobile apps for both iOS and Android. Engage your customers on the go with solutions that are fast, reliable, and scalable.",
    image: {
        src: "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NDg0MDM2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
        alt: "Mobile application development interface on a screen",
        hint: "mobile development"
    }
};

const platformExpertise = [
    {
        title: "Native iOS Development",
        description: "Harness the full power of the Apple ecosystem with apps built in Swift and Objective-C for unparalleled performance and user experience.",
        icon: <AppWindow className="w-8 h-8" />,
        technologies: ["Swift", "Objective-C", "Xcode", "Core Data"]
    },
    {
        title: "Native Android Development",
        description: "Reach the world's largest mobile audience with robust and scalable Android apps developed in Kotlin and Java.",
        icon: <Smartphone className="w-8 h-8" />,
        technologies: ["Kotlin", "Java", "Android Studio", "Jetpack Compose"]
    },
    {
        title: "Cross-Platform Development",
        description: "Maximize reach and minimize cost with a single codebase for both iOS and Android using frameworks like React Native and Flutter.",
        icon: <Layers className="w-8 h-8" />,
        technologies: ["React Native", "Flutter", "Dart", "JavaScript"]
    },
     {
        title: "Progressive Web Apps (PWA)",
        description: "Deliver an app-like experience on the web with PWAs that are fast, reliable, and installable on any device.",
        icon: <Globe className="w-8 h-8" />,
        technologies: ["React", "Angular", "Vue.js", "Service Workers"]
    }
];

const appCategories = [
    { title: "E-commerce & Retail", icon: <CreditCard /> },
    { title: "Business & Productivity", icon: <Briefcase /> },
    { title: "Healthcare & Fitness", icon: <Heart /> },
    { title: "Social Networking", icon: <Users /> },
    { title: "Education & E-learning", icon: <BookOpen /> },
    { title: "Travel & Tourism", icon: <Plane /> },
    { title: "Food & Restaurant", icon: <Utensils /> },
    { title: "Gaming & Entertainment", icon: <Gamepad2 /> }
];

import { Briefcase, BookOpen, Plane, Utensils, Gamepad2 } from 'lucide-react';


const developmentFeatures = [
    {
        icon: <Sparkles className="w-8 h-8" />,
        title: "User-Centric Design (UI/UX)",
        description: "We create intuitive and beautiful interfaces that provide a seamless and engaging user experience, driving user adoption and retention."
    },
    {
        icon: <Rocket className="w-8 h-8" />,
        title: "Performance Optimization",
        description: "Our apps are engineered for speed, responsiveness, and efficiency, ensuring a smooth experience even under heavy load."
    },
    {
        icon: <Shield className="w-8 h-8" />,
        title: "Robust Security",
        description: "We implement enterprise-grade security measures, including data encryption and secure authentication, to protect your app and your users."
    },
    {
        icon: <GitBranch className="w-8 h-8" />,
        title: "Seamless API Integration",
        description: "We integrate with third-party services, payment gateways, and custom backend systems to extend your app's functionality."
    },
    {
        icon: <BarChart3 className="w-8 h-8" />,
        title: "Powerful Analytics",
        description: "Gain valuable insights into user behavior and app performance with integrated analytics to make data-driven decisions."
    },
    {
        icon: <TestTube2 className="w-8 h-8" />,
        title: "Agile Development & Testing",
        description: "Our agile methodology and rigorous testing ensure high-quality, bug-free releases and continuous improvement."
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
    const platformsRef = useScrollAnimation({ threshold: 0.2 });
    const featuresRef = useScrollAnimation({ threshold: 0.2 });
    const categoriesRef = useScrollAnimation({ threshold: 0.2 });
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
                                <span className="font-semibold">Get a Free Consultation</span>
                                <ArrowRight className="h-6 w-6 transition-all duration-500 group-hover:translate-x-2" />
                            </Link>
                        </Button>
                    </div>
                </section>

                {/* Platform Expertise Section */}
                <section
                    ref={platformsRef.ref}
                    className="relative py-20 md:py-32 bg-black overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-black" />
                    <div className="relative container mx-auto px-6 max-w-screen-xl">
                        <div className={cn(
                            "text-center mb-16 md:mb-20 transition-all duration-1000",
                            platformsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        )}>
                            <h2 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400 mb-6 tracking-tight">
                                Our Platform Expertise
                            </h2>
                            <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                                We build for every major platform to ensure your app reaches its target audience, wherever they are.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {platformExpertise.map((platform, index) => (
                                <div key={platform.title} className={cn(
                                    "group relative bg-gradient-to-br from-neutral-800/20 via-neutral-900/30 to-black/40 backdrop-blur-xl rounded-2xl border border-white/5 p-8 hover:border-white/10 transition-all duration-700 hover:scale-105",
                                    platformsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                )} style={{ transitionDelay: `${index * 150}ms` }}>
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                                    <div className="flex items-center gap-4 mb-4">
                                      <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl border border-primary/30 text-primary group-hover:scale-110 transition-transform duration-300">
                                          {platform.icon}
                                      </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">{platform.title}</h3>
                                    <p className="text-neutral-400 text-sm leading-relaxed mb-4">{platform.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {platform.technologies.map(tech => (
                                            <span key={tech} className="px-2 py-1 bg-neutral-700/50 text-neutral-300 text-xs rounded-md">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                
                {/* Development Features Section */}
                <section
                    ref={featuresRef.ref}
                    className="relative py-20 md:py-32 bg-gradient-to-br from-neutral-950 to-black overflow-hidden"
                >
                    <div className="relative container mx-auto px-6 max-w-screen-xl">
                        <div className={cn(
                            "text-center mb-16 md:mb-20 transition-all duration-1000",
                            featuresRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        )}>
                             <h2 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400 mb-6 tracking-tight">
                                Core Development Features
                            </h2>
                            <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                                Every app we build is packed with features designed for success, from intuitive design to robust performance.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {developmentFeatures.map((feature, index) => (
                                <div key={feature.title} className={cn(
                                    "group relative bg-gradient-to-br from-neutral-800/20 via-neutral-900/30 to-black/40 backdrop-blur-xl rounded-2xl border border-white/5 p-8 hover:border-white/10 transition-all duration-700 hover:scale-105",
                                    featuresRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                )} style={{ transitionDelay: `${index * 150}ms` }}>
                                     <div className="flex items-center gap-4 mb-4">
                                      <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl border border-primary/30 text-primary group-hover:scale-110 transition-transform duration-300">
                                          {feature.icon}
                                      </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                                    <p className="text-neutral-400 text-sm leading-relaxed">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                
                {/* App Categories Section */}
                 <section
                    ref={categoriesRef.ref}
                    className="relative py-20 md:py-32 bg-black overflow-hidden"
                >
                    <div className="relative container mx-auto px-6 max-w-screen-xl">
                       <div className={cn(
                            "text-center mb-16 md:mb-20 transition-all duration-1000",
                            categoriesRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        )}>
                             <h2 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400 mb-6 tracking-tight">
                                Industries We Serve
                            </h2>
                            <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                                We have a proven track record of building successful applications across a wide range of industries.
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4">
                           {appCategories.map((category, index) => (
                                <div key={category.title} className={cn(
                                    "flex items-center gap-3 px-6 py-3 bg-gradient-to-br from-neutral-800/40 to-black/60 backdrop-blur-xl rounded-xl border border-white/10 transition-all duration-500 hover:scale-105 hover:bg-primary/10 hover:border-primary/30",
                                     categoriesRef.isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                                )} style={{ transitionDelay: `${index * 100}ms` }}>
                                    {React.cloneElement(category.icon, { className: "w-5 h-5 text-primary" })}
                                    <span className="text-sm font-medium text-neutral-200">{category.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section
                    ref={faqRef.ref}
                    className="relative py-20 md:py-32 bg-gradient-to-br from-neutral-950 to-black overflow-hidden"
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
                    className="relative py-20 md:py-32 bg-black text-center"
                >
                     <div className={cn(
                        "relative container mx-auto px-6 max-w-4xl transition-all duration-1000",
                        ctaRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}>
                        <h2 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400 mb-6 tracking-tight">
                            Ready to Build Your App?
                        </h2>
                        <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-12">
                            Let's turn your idea into a reality. Contact us today for a free consultation and let's discuss how we can build an amazing mobile app for your business.
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
