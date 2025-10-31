
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle, Palette, Star, Play, Award, Target, Zap, Heart, CreditCard, Shield, Globe, Sparkles, ChevronDown, Clock, Users, TrendingUp, Lightbulb, BarChart3, Rocket, MessageCircle, Calendar, CheckCheck, ArrowUp, Filter, Search, Layers, Settings, Monitor, PieChart, Trophy, Gauge, AppWindow, GitBranch, TestTube2, Brush, PenTool, Image as ImageIcon } from 'lucide-react';
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
    title: "Graphics Design",
    subtitle: "Creating Visual Stories That Resonate",
    description: "Our creative team translates your brand's essence into compelling visual identities, from memorable logos to polished UI/UX designs that captivate and engage.",
    image: {
        src: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWdufGVufDB8fHx8MTc0ODQwMzYwMHww&ixlib=rb-4.1.0&q=80&w=1080",
        alt: "Abstract graphic design elements",
        hint: "graphic design"
    }
};

const designServices = [
    {
        title: "Logo Design & Brand Identity",
        description: "Craft a memorable first impression with a unique logo and a comprehensive brand identity that reflects your vision and values.",
        icon: <Award className="w-8 h-8" />,
        tools: ["Logo Concepts", "Brand Guidelines", "Stationery"]
    },
    {
        title: "Website & App UI/UX Design",
        description: "Design intuitive and visually stunning interfaces for websites and mobile apps that provide a seamless user journey.",
        icon: <AppWindow className="w-8 h-8" />,
        tools: ["Wireframing", "Prototyping", "User Testing", "Responsive Design"]
    },
    {
        title: "Marketing & Advertising Graphics",
        description: "Support your campaigns with compelling visuals, including social media posts, ad creatives, brochures, and presentations.",
        icon: <TrendingUp className="w-8 h-8" />,
        tools: ["Social Media Kits", "Ad Banners", "Brochures", "Email Templates"]
    },
     {
        title: "Illustration & Iconography",
        description: "Enhance your digital presence with custom illustrations and icons that add personality and clarity to your brand's message.",
        icon: <PenTool className="w-8 h-8" />,
        tools: ["Custom Icons", "Spot Illustrations", "Character Design"]
    }
];

const designProcess = [
    { number: "01", title: "Discovery & Brief", description: "Understanding your vision, audience, and goals.", icon: <Search /> },
    { number: "02", title: "Concept & Ideation", description: "Exploring creative directions and initial design concepts.", icon: <Lightbulb /> },
    { number: "03", title: "Design & Refinement", description: "Bringing concepts to life and refining them with your feedback.", icon: <Brush /> },
    { number: "04", title: "Finalization & Delivery", description: "Preparing and delivering all final assets in required formats.", icon: <CheckCheck /> }
];


const faqs = [
    {
        question: "What is your design process like?",
        answer: "Our process is collaborative and iterative. We start with a discovery phase to understand your needs, move to concept development, and then refine the designs based on your feedback until we achieve the perfect result."
    },
    {
        question: "What files will I receive at the end of the project?",
        answer: "You will receive all necessary files for both web and print, including source files (e.g., AI, PSD, Figma), high-resolution raster images (JPG, PNG), and scalable vector graphics (SVG)."
    },
    {
        question: "How many revisions are included in a project?",
        answer: "We typically include two to three rounds of revisions in our standard design projects. Our goal is to ensure you are completely satisfied with the final outcome, and we're flexible to accommodate more if needed."
    },
    {
        question: "Can you work with my existing brand guidelines?",
        answer: "Absolutely. We are experts at creating new designs that align perfectly with your established brand identity, ensuring consistency across all your materials."
    }
];


export default function GraphicsDesignPage() {
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
                                <span className="font-semibold">Get a Design Quote</span>
                                <ArrowRight className="h-6 w-6 transition-all duration-500 group-hover:translate-x-2" />
                            </Link>
                        </Button>
                    </div>
                </section>

                {/* Design Services Section */}
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
                                Our Graphic Design Services
                            </h2>
                            <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                                A full spectrum of design services to build a powerful and consistent brand presence.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {designServices.map((service, index) => (
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
                                        {service.tools.map(tool => (
                                            <span key={tool} className="px-2 py-1 bg-neutral-700/50 text-neutral-300 text-xs rounded-md">{tool}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                
                {/* Our Design Process Section */}
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
                                Our Design Process
                            </h2>
                            <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                                A collaborative and structured process that ensures creative excellence and alignment with your goals.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden md:block" />
                            <div className="space-y-12">
                                {designProcess.map((step, index) => (
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
                            Ready to Elevate Your Brand?
                        </h2>
                        <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-12">
                            Let's collaborate to create stunning visuals that tell your story and captivate your audience. Contact us today for a creative consultation.
                        </p>
                        <Button
                            variant="default"
                            size="lg"
                            className="group relative bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 px-8 py-6 text-lg"
                            asChild
                        >
                            <Link href="/#contact" className="flex items-center gap-3">
                                <span className="font-semibold">Contact Us</span>
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

    