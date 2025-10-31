
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
    title: "Visualizing Your Brand: Creative Graphic Design Services",
    subtitle: "Make a Lasting Impression: Stunning Visuals for Your Brand.",
    description: "Strengthen your brand identity and engage your audience with professional and impactful graphic designs that captivate and convert.",
    image: {
        src: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWdufGVufDB8fHx8MTc0ODQwMzYwMHww&ixlib=rb-4.1.0&q=80&w=1080",
        alt: "Abstract graphic design elements",
        hint: "graphic design"
    }
};

const designServices = [
    {
        title: "Logo Design & Brand Identity",
        description: "We create a unique and memorable logo for your business that authentically reflects your core values, mission, and vision. In addition to the logo, we develop comprehensive brand guidelines to ensure consistency across all touchpoints.",
        icon: <Award className="w-8 h-8" />,
        tools: ["3-5 Logo Concepts", "Brand Style Guide", "Stationery Suite", "Vector Files (AI, EPS, SVG)"]
    },
    {
        title: "Website & App UI/UX Design",
        description: "We design intuitive, user-friendly, and visually appealing website interfaces that enhance user satisfaction and boost conversion rates. Our process ensures your site is not only beautiful but also functional and accessible on all devices.",
        icon: <AppWindow className="w-8 h-8" />,
        tools: ["Wireframing", "Interactive Prototyping", "High-Fidelity Mockups", "Responsive Design", "Accessibility Compliance"]
    },
    {
        title: "Marketing Collateral Design",
        description: "Elevate your marketing efforts with custom-designed materials such as brochures, flyers, posters, and presentations. These assets are crafted to align perfectly with your brand messaging, driving leads and sales.",
        icon: <TrendingUp className="w-8 h-8" />,
        tools: ["Brochures & Flyers", "Business Cards", "Social Media Graphics", "Email Templates", "Presentation Decks"]
    },
     {
        title: "Social Media Graphics",
        description: "We produce engaging, brand-consistent graphics for your social media platforms. These visuals are designed to spark conversations, increase shares, and build a loyal community.",
        icon: <ImageIcon className="w-8 h-8" />,
        tools: ["Custom Templates", "Engaging Post Designs", "Ad Creatives", "Profile & Cover Images", "Analytics-Driven Optimization"]
    },
    {
        title: "Infographic Design",
        description: "Transform complex data and information into easy-to-digest, visually stunning infographics that educate and entertain your audience. Ideal for content marketing and knowledge sharing.",
        icon: <BarChart3 className="w-8 h-8" />,
        tools: ["Data Visualization", "Custom Illustrations", "Clear Information Hierarchy", "Brand Consistency", "Interactive Versions"]
    },
    {
        title: "Print Design",
        description: "For traditional media, we deliver high-quality, print-optimized designs including magazine ads, product packaging, and large-format prints like hoardings or billboards.",
        icon: <Brush className="w-8 h-8" />,
        tools: ["Magazine Layouts", "Packaging Design", "Outdoor Advertising", "Print-Ready Files (PDF/X)", "Eco-Friendly Options"]
    }
];

const designProcess = [
    { number: "01", title: "Brief & Research", description: "We start by diving deep into your requirements, analyzing your target audience, competitors, and brand assets to build a solid foundation.", icon: <Search /> },
    { number: "02", title: "Concept Development", description: "Our team brainstorms and sketches initial design concepts, exploring creative directions to align with your goals while pushing innovative boundaries.", icon: <Lightbulb /> },
    { number: "03", title: "Feedback & Revisions", description: "Transparency is key. We share progress and use your input to refine elements like colors, layouts, or messaging until it's perfect.", icon: <PenTool /> },
    { number: "04", title: "Finalization & Delivery", description: "Once approved, we polish the designs and deliver a complete asset package including source files, usage rights, and implementation guides.", icon: <CheckCheck /> }
];

const whyChooseUsData = [
    {
        icon: Sparkles,
        title: "Creative Excellence",
        description: "Our designs are innovative and trend-forward, blending modern techniques with timeless appeal to resonate emotionally with your audience."
    },
    {
        icon: Award,
        title: "Experienced Designers",
        description: "A diverse team of certified graphic designers with 5-15 years in the field, having delivered 500+ projects with a 98% client satisfaction rate."
    },
    {
        icon: Layers,
        title: "Brand Consistency",
        description: "We obsess over uniformity—every pixel aligns with your guidelines, creating a unified ecosystem that builds trust and recall across channels."
    },
    {
        icon: Clock,
        title: "Timely Delivery",
        description: "We respect deadlines with built-in buffers for revisions, using project management tools to track progress. 95% of our projects are delivered on or ahead of schedule."
    },
    {
        icon: Users,
        title: "Client Collaboration",
        description: "You're not just a client; you're a co-creator. We prioritize open communication, incorporating your ideas at every stage."
    },
    {
        icon: Target,
        title: "Results-Oriented",
        description: "Beyond aesthetics, our designs are backed by metrics—expect 20-50% uplifts in engagement from our social graphics or collateral."
    }
];


const faqs = [
    {
        question: "What is your design process like?",
        answer: "We follow a collaborative, iterative approach. We start with a detailed discovery phase to understand your requirements, analyze your audience and competitors. Then we move to concept development, present mood boards, and refine designs based on your feedback through 1-2 revision rounds before final delivery."
    },
    {
        question: "What files will I receive at the end of the project?",
        answer: "You will receive a complete asset package including source files (e.g., AI, PSD, Figma), high-resolution raster images (JPG, PNG), scalable vector graphics (SVG), and comprehensive brand guidelines for usage."
    },
    {
        question: "How long does a typical graphic design project take?",
        answer: "A typical project takes 2-6 weeks, depending on the scope and complexity. A simple logo might be faster, while a full branding package will take longer. We provide a detailed timeline after the initial brief."
    },
    {
        question: "How do you handle revisions and feedback?",
        answer: "We prioritize transparency. We share progress via shared drives or tools like InVision and typically include 1-2 rounds of revisions in our project scope to ensure you are completely satisfied with the final outcome."
    }
];


export default function GraphicsDesignPage() {
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
                                    <span className="font-semibold">Get a Design Quote</span>
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
                                    <span className="font-semibold">Explore Our Portfolio</span>
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
                               A strong visual identity sets your business apart from the competition and communicates your message effectively, fostering trust and recognition among your audience. Our creative graphic design services are tailored to reflect your brand's unique personality, values, and vision, leaving an unforgettable impression on your target audience. Whether it's crafting a timeless logo, developing a comprehensive branding package, or designing eye-catching marketing materials, we handle every aspect of your design needs with precision and creativity. With years of experience working across industries—from startups to established enterprises—we ensure your visuals not only look exceptional but also drive tangible results like increased engagement and brand loyalty.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Design Services Section */}
                <section
                    ref={servicesRef.ref}
                    className="relative py-20 md:py-32 bg-gradient-to-br from-neutral-950 to-black overflow-hidden"
                >
                    <div className="absolute inset-0" />
                    <div className="relative container mx-auto px-6 max-w-screen-xl">
                        <div className={cn(
                            "text-center mb-16 md:mb-20 transition-all duration-1000",
                            servicesRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        )}>
                            <h2 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400 mb-6 tracking-tight">
                                Our Graphic Designing Services
                            </h2>
                            <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                                A full spectrum of design services to build a powerful and consistent brand presence.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    className="relative py-20 md:py-32 bg-black overflow-hidden"
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
                                A collaborative and structured process that ensures creative excellence and alignment with your goals. We follow a collaborative, iterative approach to ensure every project exceeds expectations.
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
                                In a crowded market, standing out requires more than just pretty pictures—it demands strategy, skill, and partnership. Here's what sets us apart.
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
                           Let's Bring Your Brand to Life Visually!
                        </h2>
                        <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-12">
                           Ready to transform your ideas into visuals that inspire action? Schedule a free 30-minute consultation today, and let's discuss how we can elevate your brand. Your first concept sketch is on us!
                        </p>
                        <Button
                            variant="default"
                            size="lg"
                            className="group relative bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 px-8 py-6 text-lg"
                            asChild
                        >
                            <Link href="/#contact" className="flex items-center gap-3">
                                <span className="font-semibold">Contact Us for a Creative Solution</span>
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
