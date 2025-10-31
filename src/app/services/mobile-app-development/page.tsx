
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

const introduction = "In the digital age of 2025, where smartphones are the primary gateway to consumer interactions, a powerful mobile app can propel your business to unprecedented heights, fostering loyalty, streamlining operations, and unlocking new revenue streams. We specialize in crafting innovative, performance-optimized mobile applications that deeply engage your target audience while aligning seamlessly with your overarching business objectives—from boosting user retention by 50% to enabling real-time analytics for data-driven decisions. Whether you're ideating a groundbreaking consumer app, enhancing an existing enterprise solution, or pivoting to hybrid models for cost efficiency, our end-to-end expertise ensures you're supported at every turn. With a portfolio boasting 150+ apps across industries like fintech, healthcare, e-commerce, and edtech—delivering an average 4.8/5 App Store rating and 35% faster time-to-market—we turn abstract concepts into tangible, market-leading products that thrive in app stores and beyond.";

const appServices = [
    {
        title: "Custom iOS App Development",
        description: "Harness the elegance and precision of Apple's ecosystem to build stunning, high-performance iOS apps that delight users with buttery-smooth interactions and unwavering reliability. Leveraging the latest in SwiftUI and Objective-C, we create apps that are not only visually immersive but also fortified with enterprise-grade security, ensuring compliance with Apple's stringent guidelines and delivering native experiences that capitalize on features like ARKit, Core ML, and HealthKit for industries such as wellness and retail.",
        icon: <AppWindow className="w-8 h-8" />,
        keyFeatures: [
            "Intuitive UI/UX design tailored to iOS Human Interface Guidelines, incorporating haptic feedback and gesture-based navigation for immersive engagement.",
            "Rigorous performance optimization: Code profiling with Instruments, memory leak detection, and 60fps animations to handle high-demand scenarios like video streaming or real-time collaboration.",
            "Streamlined App Store submission: Metadata optimization, beta testing via TestFlight, and ASO (App Store Optimization) strategies to boost discoverability and downloads.",
            "Comprehensive post-launch support: Analytics integration (Firebase/Crashlytics), iterative updates based on user feedback, and 24/7 monitoring for uptime exceeding 99.9%.",
            "Integration with Apple-specific services: iCloud syncing, Siri Shortcuts, and Apple Pay for seamless, secure transactions.",
            "Scalability for growth: Modular architecture supporting in-app purchases, subscriptions, and future expansions like WatchOS or Vision Pro compatibility."
        ]
    },
    {
        title: "Custom Android App Development",
        description: "Tap into the world's largest mobile platform with versatile, scalable Android apps designed for diverse devices and user behaviors. Our proficiency in Java and Kotlin empowers your business to reach billions, from budget smartphones in emerging markets to flagship devices, with robust features that support offline functionality, personalization, and integration with Google services for enhanced accessibility and monetization.",
        icon: <Smartphone className="w-8 h-8" />,
        keyFeatures: [
            "Material Design 3 implementation for modern, adaptive interfaces with dynamic theming, elevation, and motion design that aligns with Android's ecosystem.",
            "Extensive device compatibility testing across 5,000+ configurations using emulators and real hardware (e.g., Samsung, Pixel, OnePlus) to ensure flawless performance from Android 8.0 to 15+.",
            "Google Play Store compliance: A/B testing for store listings, policy audits, and phased rollouts to minimize risks and maximize organic installs.",
            "Robust backend integration: Firebase for real-time databases, Google Cloud for AI/ML, and API connections to CRMs like Salesforce for synchronized data flows.",
            "Security enhancements: Biometric auth (fingerprint/face unlock), encrypted local storage, and vulnerability scanning with tools like OWASP ZAP.",
            "Monetization tools: AdMob for interstitials/rewarded videos, in-app billing, and analytics-driven A/B testing to optimize revenue per user."
        ]
    },
    {
        title: "Cross-Platform App Development (e.g., React Native, Flutter)",
        description: "Accelerate your go-to-market strategy by developing feature-rich apps from a single codebase that perform natively on both iOS and Android, slashing development costs by up to 40% and timelines by 30% without sacrificing quality. Frameworks like React Native and Flutter enable code reusability while delivering pixel-perfect UIs and high-speed rendering, ideal for startups and mid-sized firms seeking broad reach with minimal maintenance overhead.",
        icon: <Layers className="w-8 h-8" />,
        keyFeatures: [
            "Rapid development cycles: Hot reloading and modular components for quick iterations, reducing build times from weeks to days.",
            "Cost-effective solutions: Shared logic for business rules, reducing team size needs while maintaining separate native modules for platform-specific tweaks.",
            "Native-like performance: Dart (Flutter) or JavaScript (React Native) bridges for hardware access, achieving 55-60fps animations and low-latency interactions.",
            "Broader audience reach: Simultaneous launches on dual stores, with unified analytics via Amplitude or Mixpanel for cross-platform insights.",
            "Hotfix capabilities: Over-the-air updates without resubmissions, ensuring swift responses to bugs or features.",
            "Ecosystem integrations: Third-party plugins for maps (Google Maps), payments (Stripe), and push notifications (OneSignal) across platforms."
        ]
    },
     {
        title: "Progressive Web Apps (PWAs)",
        description: "Bridge the gap between web and native with PWAs that offer app-like functionality—such as offline access, push notifications, and home-screen installation—without the silos of app stores. These platform-agnostic solutions are perfect for content-heavy apps, e-commerce pilots, or global audiences, providing instant updates and reduced development friction while leveraging modern web standards like Service Workers and WebAssembly.",
        icon: <Globe className="w-8 h-8" />,
        keyFeatures: [
            "Offline capabilities: Caching strategies with IndexedDB and background sync for uninterrupted experiences, even on spotty connections.",
            "Push notifications via Web Push API, integrated with FCM/APNs for personalized re-engagement, boosting retention by 20-30%.",
            "Responsive design: Adaptive layouts using CSS Grid/Flexbox and media queries for seamless scaling across devices, from mobiles to tablets.",
            "No app store required: Direct deployment via HTTPS servers, with manifest files for install prompts and icon customization.",
            "Performance boosts: Lighthouse-optimized scores (90+), lazy loading, and AMP integration for faster initial loads under 3 seconds.",
            "Analytics and SEO: Built-in tracking with Google Analytics 4 and crawlable content for organic discoverability, unlike traditional apps."
        ]
    },
    {
        title: "App UI/UX Design",
        description: "We don't just code apps—we architect experiences that are as aesthetically captivating as they are intuitively navigable, turning one-time users into lifelong advocates. Our design philosophy prioritizes empathy, blending behavioral psychology with visual storytelling to craft interfaces that reduce cognitive load, accelerate task completion, and elevate brand perception through micro-interactions and personalized flows.",
        icon: <Palette className="w-8 h-8" />,
        keyFeatures: [
            "In-depth user research: Surveys, interviews, and analytics audits to build detailed personas and journey maps.",
            "Wireframing and prototyping: Low-to-high fidelity mocks in Figma or Adobe XD, with interactive prototypes for early validation.",
            "User testing: Usability sessions with tools like UserTesting.com, heatmaps via Hotjar, and A/B variants to refine based on real feedback.",
            "Visually appealing interfaces: Custom iconography, gradient animations, and dark/light mode toggles for modern, inclusive aesthetics.",
            "Accessibility compliance: WCAG 2.2 standards, voice-over support, and color contrast checks for diverse users.",
            "Design system creation: Reusable component libraries (e.g., Storybook) for consistency across app versions and future projects."
        ]
    },
    {
        title: "App Maintenance & Support",
        description: "Our commitment extends far beyond launch—we provide ongoing vigilance to keep your app resilient, relevant, and revenue-generating in a landscape of evolving OS updates, user expectations, and security threats. From proactive monitoring to feature roadmaps, we ensure your investment yields compounding returns, with SLAs guaranteeing 99.5% uptime and response times under 4 hours.",
        icon: <Settings className="w-8 h-8" />,
        keyFeatures: [
            "Swift bug fixing: Automated CI/CD pipelines for regression testing and hotfixes, resolving 95% of issues within 24 hours.",
            "Performance monitoring: Real-time dashboards with New Relic or Datadog, alerting on crashes, load times, and battery drain.",
            "Security updates: Regular audits for vulnerabilities (e.g., OWASP Mobile Top 10), encryption upgrades, and compliance with GDPR/ CCPA.",
            "Feature enhancements: Quarterly sprints for new integrations like AR/VR or AI chatbots, based on user analytics and market trends.",
            "Technical support: Dedicated account managers, knowledge bases, and training webinars for your in-house team.",
            "Scalability tuning: Cloud migrations (AWS Amplify/Azure) and load balancing to support user growth from 10K to 1M+ MAUs."
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
                                    <span className="font-semibold">Get a Free Consultation</span>
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
                            "group relative p-8 bg-gradient-to-br from-neutral-800/40 via-neutral-900/60 to-black/80 backdrop-blur-xl rounded-3xl border border-white/5 shadow-2xl transition-all duration-1000",
                            introRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        )}>
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed text-center group-hover:text-neutral-200 transition-colors duration-300">
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
                                Why Choose Us for Mobile App Development?
                            </h2>
                            <p className="text-lg md:text-xl text-neutral-400 max-w-4xl mx-auto leading-relaxed">
                                In a sea of development firms, we stand out by blending artistry, engineering, and strategy to deliver apps that don't just function—they flourish. Here's what powers our 98% client retention rate.
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

    