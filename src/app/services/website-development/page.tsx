"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle, Code, Star, Award, Target, Zap, Globe, Sparkles, ChevronDown, Clock, Users, TrendingUp, Lightbulb, BarChart3, Rocket, MessageCircle, Calendar, Settings, PieChart, Trophy, Gauge, GitBranch, TestTube2, Search, Cpu, Database, Palette, Smartphone, Shield, Monitor, CreditCard, LifeBuoy, Layers } from 'lucide-react';
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
    title: "Crafting Digital Excellence: Custom Website Development Services",
    subtitle: "Your Online Identity Starts Here: Beautiful, Functional, and High-Performing Websites.",
    description: "Showcase your business online with a professional, user-friendly, and search engine-optimized website that captivates visitors and drives results.",
    image: {
        src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjb2RlfGVufDB8fHx8MTc0ODQwMzYwMHww&ixlib=rb-4.1.0&q=80&w=1080",
        alt: "Code on a screen",
        hint: "web code"
    }
};

const introduction = "In today's hyper-competitive digital marketplace, a robust online presence isn't just an option—it's a necessity for survival and growth. A well-crafted website serves as the digital storefront of your brand, enhancing credibility, generating high-quality leads, and directly supporting your business objectives like increased sales, user engagement, and customer retention. At our core, we specialize in building websites that go beyond aesthetics: they're visually stunning, technically robust, secure against threats, and scalable to accommodate your evolving needs. Whether you're launching a startup's first site, overhauling an enterprise platform, or integrating e-commerce capabilities, our custom solutions are powered by the latest technologies and user-centric design principles. With a proven track record of delivering 250+ projects—resulting in an average 40% uplift in user engagement and 25% boost in conversions—we transform your vision into a high-performing digital asset that works tirelessly for your success.";

const webServices = [
    {
        title: "Custom Website Design & Development",
        description: "We craft bespoke websites tailored precisely to your unique business requirements, branding guidelines, and user expectations. Starting from scratch, our team ideates, designs, and develops fully custom solutions that stand out in crowded markets, ensuring seamless integration of features like interactive elements, dynamic content, and third-party APIs for a truly personalized online experience.",
        icon: <Palette className="w-8 h-8" />,
        keyFeatures: [
            "Fully unique, brand-aligned designs created with tools like Figma and Adobe XD for pixel-perfect prototypes.",
            "Scalable architecture using modern frameworks (e.g., React.js for front-end, Node.js/Express for back-end) to handle traffic spikes and future expansions.",
            "Secure coding practices, including OWASP compliance, encryption for sensitive data, and vulnerability scanning with tools like SonarQube.",
            "Fully responsive layouts that adapt fluidly across devices, with accessibility standards (WCAG 2.1) for inclusive user experiences.",
            "Custom functionalities such as contact forms, booking systems, or API integrations (e.g., CRM like Salesforce or payment processors).",
            "Performance optimization: Lazy loading, CDN integration, and Core Web Vitals scoring for lightning-fast load times under 2 seconds."
        ]
    },
    {
        title: "E-commerce Website Development",
        description: "Build powerful online stores that not only display your products with flair but also streamline transactions, manage inventory in real-time, and foster customer loyalty through personalized shopping journeys. We focus on creating intuitive e-commerce platforms that minimize cart abandonment and maximize revenue, whether for B2B wholesalers or direct-to-consumer brands.",
        icon: <CreditCard className="w-8 h-8" />,
        keyFeatures: [
            "Seamless payment gateway integrations (Stripe, PayPal, Razorpay) with multi-currency and tax compliance support.",
            "Advanced product catalog management: Dynamic filtering, wishlists, variant options (sizes/colors), and high-res zoom galleries.",
            "Secure checkout processes with PCI-DSS compliance, fraud detection, and one-click purchases for frictionless conversions.",
            "Real-time inventory tracking synced with ERP systems, automated stock alerts, and supplier integrations.",
            "Customer account portals for order history, personalized recommendations via AI-driven algorithms, and loyalty program tie-ins.",
            "Analytics-ready setup with Google Analytics e-commerce tracking, heatmaps, and A/B testing for ongoing revenue optimization."
        ]
    },
    {
        title: "CMS Development (e.g., WordPress, Shopify, Drupal)",
        description: "Empower your team to manage website content effortlessly without needing coding expertise by developing robust Content Management Systems (CMS). We customize platforms like WordPress for blogs and portfolios, Shopify for e-commerce, or Drupal for complex enterprise sites, ensuring they're intuitive, extensible, and aligned with your workflow for efficient updates and scalability.",
        icon: <Database className="w-8 h-8" />,
        keyFeatures: [
            "Drag-and-drop content editing interfaces with WYSIWYG editors for non-technical users.",
            "Plugin and module integrations (e.g., WooCommerce for WordPress, apps for Shopify) for added functionalities like SEO tools or forms.",
            "Granular user roles and permissions to control access, from editors to admins, with audit logs for security.",
            "Theme customization: Fully bespoke themes built on frameworks like Gutenberg or Headless CMS for modern, performant sites.",
            "Built-in SEO optimization: Clean URLs, XML sitemaps, meta management, and schema markup for better search visibility.",
            "Multi-site and multilingual support (e.g., WPML for WordPress) for global audiences, with automated backups via plugins like UpdraftPlus."
        ]
    },
    {
        title: "Responsive Web Design",
        description: "Create adaptive websites that deliver flawless experiences across all devices—from desktops and tablets to smartphones—ensuring no user is left behind. This mobile-first methodology is crucial for user satisfaction, reducing bounce rates, and improving SEO rankings, as Google prioritizes responsive sites in its algorithm.",
        icon: <Smartphone className="w-8 h-8" />,
        keyFeatures: [
            "Mobile-first design philosophy: Prototyping starts with smallest screens, scaling up for larger ones using CSS media queries and Flexbox/Grid.",
            "Fluid layouts with relative units (em/rem/vw) for proportional scaling and breakpoint testing across 10+ device emulations.",
            "Optimized images and media: WebP/AVIF formats, responsive srcsets, and lazy loading to cut data usage by up to 50%.",
            "Cross-browser compatibility testing (Chrome, Firefox, Safari, Edge) with tools like BrowserStack for consistent rendering.",
            "Touch-friendly navigation, gesture support, and progressive enhancement for older devices.",
            "Performance auditing with Lighthouse scores targeting 90+ for accessibility, best practices, and SEO."
        ]
    },
    {
        title: "Website Redesign & Revamp",
        description: "Breathe new life into your outdated website by modernizing its look, enhancing functionality, and elevating the overall user experience. Our redesign process audits your current site, identifies pain points, and delivers a refreshed version that aligns with contemporary trends, boosts engagement, and future-proofs your digital presence.",
        icon: <Sparkles className="w-8 h-8" />,
        keyFeatures: [
            "Contemporary UI/UX overhaul with micro-interactions, intuitive navigation, and A/B-tested layouts for higher retention.",
            "Performance tuning: Code refactoring, database optimization, and caching strategies (e.g., Redis) to slash load times by 60%.",
            "Upgraded technology stack: Migration to modern CMS or frameworks like Next.js, with API-first architectures for agility.",
            "Enhanced SEO: Keyword audits, content restructuring, and internal linking improvements to recover lost rankings.",
            "Data migration: Seamless transfer of user data, content, and analytics without downtime, using tools like phpMyAdmin.",
            "User testing phases with heatmapping (Hotjar) and surveys to validate improvements pre-launch."
        ]
    },
    {
        title: "Website Maintenance & Support",
        description: "Keep your website running at peak efficiency long after launch with our comprehensive maintenance packages. We handle everything from routine updates to proactive security measures, ensuring minimal downtime, compliance with evolving standards, and ongoing enhancements to support your business as it grows.",
        icon: <Settings className="w-8 h-8" />,
        keyFeatures: [
            "Automated daily/weekly backups to cloud storage (AWS S3/Google Drive) with one-click restores.",
            "Continuous security monitoring via tools like Sucuri or Wordfence, including malware scans and firewall configurations.",
            "Timely software updates: Core CMS, plugins, themes, and server-side patches to patch vulnerabilities.",
            "Content and feature updates: Hourly support for adding pages, fixing issues, or integrating new tools.",
            "24/7 technical support via ticketing (Zendesk) or priority chat, with SLAs guaranteeing responses under 2 hours.",
            "Monthly health reports: Uptime stats, speed metrics, and recommendations for proactive tweaks."
        ]
    }
];

const developmentProcess = [
    { number: "01", title: "Requirement Gathering", description: "We conduct in-depth discovery sessions via calls, surveys, or workshops to map your business goals, target personas, competitive analysis, and technical specs—delivering a project brief and timeline within 3-5 days.", icon: <Search /> },
    { number: "02", title: "Information Architecture & Wireframing", description: "Architect the site's structure (sitemaps, user flows) and create low-fidelity wireframes using tools like Balsamiq, iterating based on your feedback to ensure logical navigation and content hierarchy.", icon: <GitBranch /> },
    { number: "03", title: "UI/UX Design", description: "Translate concepts into high-fidelity mockups and prototypes (Figma/Sketch), focusing on branding, accessibility, and emotional resonance—complete with 2 rounds of revisions and usability testing with 5-10 target users.", icon: <Palette /> },
    { number: "04", title: "Development", description: "Parallel front-end (HTML/CSS/JS) and back-end (PHP/Python/Node) coding in sprints, with version control via Git and daily stand-ups to track progress and integrate features like databases (MySQL/MongoDB).", icon: <Code /> },
    { number: "05", title: "Testing", description: "Rigorous QA across functionalities (unit/integration tests with Jest/Selenium), compatibility (multi-device/browser), performance (load testing with JMeter), and security (penetration testing)—aiming for 99% bug-free deployment.", icon: <TestTube2 /> },
    { number: "06", title: "Deployment", description: "Secure go-live on your preferred hosting (AWS, Vercel, or shared), with staging environments for final approvals, DNS configuration, and SSL certificate installation for HTTPS.", icon: <Rocket /> },
    { number: "07", title: "Post-Launch Support", description: "30-day free warranty for tweaks, followed by optional retainers; includes training sessions on CMS usage and quarterly audits to adapt to new trends like PWAs or AI chatbots.", icon: <LifeBuoy /> }
];


const whyChooseUsData = [
    {
        icon: Cpu,
        title: "Expert Developers",
        description: "A dedicated team of 20+ full-stack developers and designers with 5-12 years of experience, certified in AWS, Google Cloud, and Adobe—specializing in niches like fintech, healthcare, and SaaS for compliant, innovative builds."
    },
    {
        icon: Zap,
        title: "Modern Technologies",
        description: "We leverage cutting-edge stacks (e.g., JAMstack for speed, Progressive Web Apps for offline access) and best practices like CI/CD pipelines, ensuring your site is future-ready for emerging tech like Web3 or voice search."
    },
    {
        icon: TrendingUp,
        title: "SEO-Friendly Websites",
        description: "Every project includes on-page optimization from day one—structured data, fast indexing, and mobile-first indexing—to help you rank higher organically, often seeing first-page results within 3-6 months."
    },
    {
        icon: Shield,
        title: "Security Focus",
        description: "We prioritize fortress-level protection with HTTPS, GDPR compliance, regular audits, and DDoS mitigation, reducing breach risks by 95% compared to standard sites."
    },
    {
        icon: Layers,
        title: "Scalable Solutions",
        description: "Designed for growth, our sites handle 10x traffic surges via auto-scaling cloud infrastructure, modular code, and easy plugin ecosystems—perfect for startups exploding into enterprises."
    },
    {
        icon: Award,
        title: "Client-Centric Delivery",
        description: "100% on-time delivery rate with transparent pricing (starting at $5,000 for basics), no hidden fees, and satisfaction guarantees—plus, free post-launch audits."
    },
    {
        icon: BarChart3,
        title: "Proven ROI",
        description: "Our sites deliver 3-5x returns through integrated analytics, conversion funnels, and A/B tools, backed by case studies showing 35% average revenue growth."
    }
];


const faqs = [
    {
        question: "What is the typical process for a website development project?",
        answer: "Our process starts with a discovery phase to understand your goals, followed by UI/UX design, development, testing, and launch. We work in sprints, providing regular updates and incorporating your feedback throughout the project."
    },
    {
        question: "How long does it take to build a website?",
        answer: "A standard marketing website typically takes 4-8 weeks, while a more complex web application or e-commerce site can take 3-6 months or longer. We provide a detailed timeline after the initial discovery phase."
    },
    {
        question: "Will my website be mobile-friendly?",
        answer: "Absolutely. We follow a mobile-first design approach, ensuring your website looks and functions perfectly on all devices, including desktops, tablets, and smartphones."
    },
    {
        question: "Do you provide ongoing maintenance and support after the website is launched?",
        answer: "Yes, we offer various maintenance packages to ensure your website remains secure, up-to-date, and optimized for performance. We can also provide ongoing support for content updates and feature enhancements."
    }
];


export default function WebsiteDevelopmentPage() {
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
                        "relative z-20 text-center px-6 max-w-4xl mx-auto transition-all duration-1000 pt-20",
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
                                size="default"
                                className="group relative bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 px-8 py-6 text-base"
                                asChild
                            >
                                <Link href="/#contact" className="flex items-center gap-3">
                                    <span className="font-semibold">Start Your Website Project</span>
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
                                    <span className="font-semibold">See Our Web Portfolio</span>
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

                {/* Web Development Services Section */}
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
                                Our Website Development Services
                            </h2>
                            <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                                A comprehensive suite of services to build, launch, and maintain a powerful digital presence.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {webServices.map((service, index) => (
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
                                We adhere to an agile, client-centric methodology that minimizes risks and maximizes value, typically spanning 4-12 weeks depending on complexity.
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
                                Why Choose Us for Website Development?
                            </h2>
                            <p className="text-lg md:text-xl text-neutral-400 max-w-4xl mx-auto leading-relaxed">
                                In an industry flooded with templated solutions, we deliver custom excellence that scales with you. Here's why clients trust us for their digital foundations.
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
                            Build a Powerful Online Presence
                        </h2>
                        <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-12">
                           Ready to elevate your digital footprint? Book a complimentary 45-minute discovery call now, and we'll provide a tailored proposal plus a free site audit. Let's code your success story—your dream site is just one click away!
                        </p>
                        <Button
                            variant="default"
                            size="lg"
                            className="group relative bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 px-8 py-6 text-lg"
                            asChild
                        >
                            <Link href="/#contact" className="flex items-center gap-3">
                                <span className="font-semibold">Request a Free Quote Today</span>
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
