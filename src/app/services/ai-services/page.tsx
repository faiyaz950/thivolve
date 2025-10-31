"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle, Smartphone, Star, Play, Award, Target, Zap, Heart, CreditCard, Shield, Globe, Sparkles, ChevronDown, Clock, Users, TrendingUp, Lightbulb, BarChart3, Rocket, MessageCircle, Calendar, CheckCheck, ArrowUp, Filter, Search, Layers, Settings, Monitor, PieChart, Trophy, Gauge, AppWindow, GitBranch, TestTube2, Palette, LifeBuoy, Bot, Cpu } from 'lucide-react';
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
    title: "Pioneering Intelligent Futures: Comprehensive AI Services for Business Transformation",
    subtitle: "Unlock AI's Potential: Innovate, Automate, and Scale with Intelligent Solutions.",
    description: "Empower your organization with cutting-edge AI services that integrate seamlessly with cloud ecosystems, harness data-driven insights, and ensure ethical, scalable deployment to drive unprecedented growth in 2025 and beyond.",
    image: {
        src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDB8fHx8MTc0ODQwMzYwMHww&ixlib=rb-4.1.0&q=80&w=1080",
        alt: "Abstract artificial intelligence concept with robotics",
        hint: "artificial intelligence"
    }
};

const introduction = "In 2025, Artificial Intelligence (AI) has solidified its role as the bedrock of modern IT services, catalyzing innovation, operational efficiency, and informed decision-making across every sector imaginable—from healthcare diagnostics to financial fraud prevention. With the global AI market poised for explosive growth at a compound annual growth rate (CAGR) of 31.5% from 2025 to 2033, reaching an estimated USD 3,497.26 billion by 2033, AI investments are supercharging IT budgets and reshaping competitive landscapes. Leading providers like Infosys, Accenture, and niche consultancies are at the forefront, prioritizing generative AI for creative augmentation, intelligent automation to streamline workflows, and enterprise-wide adoption that balances human ingenuity with machine precision. Our AI services are meticulously designed around 2025's pivotal trends: human-AI collaboration for augmented productivity, multimodal models that process text, image, and voice in unison, and ROI-centric implementations that deliver measurable outcomes like 40% cost reductions or 3x faster insights generation. Whether you're a Fortune 500 executive plotting digital metamorphosis or a startup seeking an AI edge, we craft bespoke solutions that embed intelligence into your core operations, ensuring compliance, security, and sustainability. Backed by our track record of 300+ AI deployments yielding an average 35% uplift in efficiency metrics, we transform data into destiny.";

const aiServices = [
    {
        title: "AI Consulting & Strategy",
        description: "Navigate the complexities of AI adoption with expert guidance on crafting bespoke roadmaps that align with your strategic imperatives, mitigate risks, and maximize value. Our consulting delves into organizational readiness, ethical frameworks, and investment justification, helping you prioritize initiatives that yield quick wins while building for long-term resilience in an era of regulatory scrutiny and technological flux.",
        icon: <Bot className="w-8 h-8" />,
        keyFeatures: [
            "AI Strategy Advisory: Comprehensive workshops and audits to define AI vision, use case prioritization, and phased implementation plans.",
            "Ethical AI Governance: Development of governance frameworks compliant with global standards (GDPR, EU AI Act, NIST AI RMF).",
            "Maturity Assessments: In-depth evaluations using benchmarks like Gartner's AI Maturity Model.",
            "ROI Evaluation: Custom financial modeling with KPIs like NPV, IRR, and payback periods.",
            "Change Management Integration: Stakeholder training programs and cultural shift strategies to ensure smooth adoption."
        ]
    },
    {
        title: "Development & Engineering",
        description: "From concept to code, we engineer bespoke AI and machine learning (ML) solutions that power your innovations, leveraging open-source and proprietary frameworks to build models that learn, adapt, and evolve. Our focus on generative AI enables unprecedented creativity, while robust engineering ensures models are production-ready, scalable, and integrated with your existing tech stack.",
        icon: <GitBranch className="w-8 h-8" />,
        keyFeatures: [
            "Custom AI/ML Model Development using TensorFlow, PyTorch, or Hugging Face.",
            "Generative AI Implementation: Fine-tuning LLMs like GPT-4o for domain-specific applications.",
            "Neural Network Design: Architecting transformers, CNNs, or GANs for tasks from robotics to cybersecurity.",
            "Version Control & Collaboration with DVC (Data Version Control).",
            "Edge AI Optimization for low-latency inference on devices."
        ]
    },
    {
        title: "Data & Analytics",
        description: "Unlock the full potential of your data assets by engineering pipelines that fuel AI with clean, accessible, and real-time intelligence. We transform raw data into strategic foresight, enabling predictive capabilities that anticipate market shifts, optimize supply chains, and personalize customer journeys with precision analytics.",
        icon: <BarChart3 className="w-8 h-8" />,
        keyFeatures: [
            "Data Engineering for AI: Building ETL/ELT pipelines with Apache Spark or Airflow.",
            "Predictive Analytics: Time-series forecasting with Prophet or LSTM models.",
            "Big Data AI Pipelines: Streaming integrations via Kafka and Flink for real-time processing.",
            "Advanced Visualization with Tableau or Power BI, incorporating AI-driven narratives.",
            "Data Governance: Metadata management, lineage tracking, and anonymization techniques."
        ]
    },
    {
        title: "Specialized AI Applications",
        description: "Tailor AI to solve domain-specific challenges with advanced applications that interpret human language, perceive visual data, and converse naturally. These solutions enhance user interactions, automate knowledge extraction, and integrate effortlessly with enterprise systems for hyper-personalized experiences.",
        icon: <Layers className="w-8 h-8" />,
        keyFeatures: [
            "Natural Language Processing (NLP) for tasks like sentiment analysis and automated contract review.",
            "Computer Vision with YOLO or Vision Transformers for quality control or medical imaging.",
            "Conversational AI (Chatbots/Virtual Assistants) on Rasa or Dialogflow.",
            "Multimodal Integration for text-to-image generation or video captioning.",
            "CRM/ERP Synergies for real-time personalization and lead scoring."
        ]
    },
    {
        title: "Integration & Operations",
        description: "Seamlessly weave AI into your operational fabric, from legacy systems to cloud-native environments, ensuring reliability, security, and agility. Our MLOps practices bridge development and deployment, while hybrid automation (RPA + AI) eliminates silos and accelerates digital transformation.",
        icon: <Settings className="w-8 h-8" />,
        keyFeatures: [
            "AI Integration Services: API orchestration with MuleSoft or Kong.",
            "MLOps & DevOps for AI: CI/CD pipelines with Kubeflow or MLflow for automated retraining.",
            "Process Automation (RPA + AI) with UiPath or Automation Anywhere.",
            "Monitoring & Security with Prometheus, Grafana, and Adversarial Robustness Toolbox.",
            "Scalability Engineering on Kubernetes with auto-scaling and disaster recovery."
        ]
    },
    {
        title: "Emerging & Industry-Specific",
        description: "Stay ahead of the curve with forward-looking AI that fuses with IoT for intelligent ecosystems or tailors intelligence to your industry's unique demands. From predictive maintenance in manufacturing to ethical AI in finance, we deliver vertical-optimized solutions that drive competitive differentiation and innovation.",
        icon: <Sparkles className="w-8 h-8" />,
        keyFeatures: [
            "AIoT (AI + IoT) Solutions for smart factories or predictive health monitoring.",
            "Multimodal AI (e.g., Text-to-Visual) with models like DALL-E 3.",
            "Sector-Tailored AI for Healthcare, Finance, and Manufacturing.",
            "Sustainability Focus with Green AI practices.",
            "Proof-of-Concept Accelerators for rapid validation in regulated sectors."
        ]
    }
];

const developmentProcess = [
    { number: "01", title: "Discovery & Ideation", description: "Immersive sessions to map pain points, gather requirements, and brainstorm use cases, culminating in a prioritized backlog and ethical impact assessment.", icon: <Search /> },
    { number: "02", title: "Prototyping & Validation", description: "Low-code PoCs with tools like Google Colab, user testing via surveys and A/B pilots, refining based on feedback loops.", icon: <TestTube2 /> },
    { number: "03", title: "Development & Integration", description: "Parallel sprints for model building, data pipelines, and system hooks, with daily integrations and code reviews for quality.", icon: <GitBranch /> },
    { number: "04", title: "Testing & Assurance", description: "Multi-faceted QA—unit tests for models, integration for APIs, ethical audits for bias, and stress testing for scalability—targeting 99.9% reliability.", icon: <CheckCheck /> },
    { number: "05", title: "Deployment & Launch", description: "Phased rollouts with blue-green strategies, training handovers, and live monitoring dashboards for immediate value realization.", icon: <Rocket /> },
    { number: "06", title: "Optimization & Evolution", description: "Continuous MLOps cycles, quarterly reviews with KPI dashboards, and adaptive retraining to evolve with new data and regulations.", icon: <TrendingUp /> }
];

const whyChooseUsData = [
    {
        icon: Cpu,
        title: "Proven Expertise",
        description: "A 50+ strong team of PhD-level AI scientists, certified architects (AWS/GCP), and domain specialists with 10+ years, having powered unicorns in gen AI and edge computing."
    },
    {
        icon: Zap,
        title: "Innovation at Scale",
        description: "Access to proprietary toolkits and partnerships with NVIDIA, OpenAI, and IBM, ensuring bleeding-edge capabilities like quantum-inspired optimization."
    },
    {
        icon: Shield,
        title: "Ethical & Secure by Design",
        description: "Zero-tolerance for bias with automated fairness checks; fortified with ISO 42001 AI management and end-to-end encryption."
    },
    {
        icon: BarChart3,
        title: "ROI-Centric Delivery",
        description: "Transparent pricing from $50K pilots to $1M+ enterprise suites, with guaranteed 3:1 ROI via performance clauses and post-project audits."
    },
    {
        icon: Users,
        title: "Collaborative Partnership",
        description: "Embedded PMs, co-innovation labs, and 24/7 support via Slack/Jira for seamless alignment and knowledge transfer."
    },
    {
        icon: Award,
        title: "Future-Proof Agility",
        description: "Modular designs for easy upgrades, plus foresight reports on trends like agentic AI or neuromorphic computing."
    }
];

const faqs = [
    {
        question: "How long does a typical AI project take?",
        answer: "Project timelines vary based on complexity and scope. Simple projects typically take 4-6 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed timelines during the planning phase."
    },
    {
        question: "Do you provide ongoing support and maintenance?",
        answer: "Yes, we offer comprehensive support packages including bug fixes, security updates, performance monitoring, and feature enhancements. Our support team is available 24/7 for critical issues."
    },
    {
        question: "Can you integrate with existing systems?",
        answer: "Absolutely! We specialize in seamless integrations with existing systems, databases, and third-party services. Our team has experience with various APIs and integration patterns."
    },
    {
        question: "What's included in the project cost?",
        answer: "Our pricing includes project planning, design, development, testing, deployment, documentation, and initial support. Additional features or extended support can be added as needed."
    }
];


export default function AIServicesPage() {
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
                                size="lg"
                                className="group relative bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 px-8 py-6 text-lg"
                                asChild
                            >
                                <Link href="/#contact" className="flex items-center gap-3">
                                    <span className="font-semibold">Schedule a Free AI Strategy Session</span>
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
                                    <span className="font-semibold">Explore Our AI Case Studies</span>
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

                {/* AI Services Section */}
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
                                Our AI Services
                            </h2>
                            <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                                A complete ecosystem of AI solutions to drive innovation and efficiency.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {aiServices.map((service, index) => (
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
                
                {/* Our AI Process Section */}
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
                                Our AI Process
                            </h2>
                            <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                                We deploy a structured yet agile methodology, blending design thinking with DevOps principles, to deliver AI solutions in 6-18 weeks.
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
                                Why Choose Us for AI Services?
                            </h2>
                            <p className="text-lg md:text-xl text-neutral-400 max-w-4xl mx-auto leading-relaxed">
                                In a landscape where 70% of AI projects falter, we excel by prioritizing outcomes over hype, delivering 95% on-time projects with a 4.9/5 satisfaction score.
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
                           Ready to Infuse Intelligence into Your Enterprise?
                        </h2>
                        <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-12">
                           Seize the AI advantage—claim your complimentary 45-minute audit and receive a personalized maturity scorecard plus trend forecast. Let's architect your intelligent tomorrow, starting today!
                        </p>
                        <Button
                            variant="default"
                            size="lg"
                            className="group relative bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 px-8 py-6 text-lg"
                            asChild
                        >
                            <Link href="/#contact" className="flex items-center gap-3">
                                <span className="font-semibold">Request a Custom AI Roadmap</span>
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