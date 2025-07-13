
import { Cpu, HeartPulse, ShieldCheck, CreditCard, BrainCircuit, Users, Smartphone, Globe, BarChart2, Palette, PenTool, Search } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ServiceDetail {
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  heroImage: string;
  details: ServiceDetail[];
}

export const services: Service[] = [
  {
    slug: 'it-services',
    title: "IT Services",
    description: "We leverage technology to provide cutting-edge solutions that elevate your business, from web development to digital marketing.",
    icon: Cpu,
    heroImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxpdCUyMHNlcnZpY2VzJTIwYmFubmVyfGVufDB8fHx8MTc0ODAzOTYzOHww&ixlib=rb-4.1.0&q=80&w=1080',
    details: [
      {
        icon: Smartphone,
        title: 'Mobile Application Development',
        description: 'Creating intuitive and high-performance mobile apps for both iOS and Android platforms.',
        points: ['Native iOS & Android Development', 'Hybrid App Development (React Native, Flutter)', 'UI/UX Design for Mobile', 'App Store Deployment & Maintenance']
      },
      {
        icon: Globe,
        title: 'Website Development',
        description: 'Building responsive, scalable, and secure websites tailored to your business needs.',
        points: ['Custom Frontend & Backend Development', 'E-commerce Solutions', 'Content Management Systems (CMS)', 'API Integration & Development']
      },
      {
        icon: BarChart2,
        title: 'Digital Marketing',
        description: 'Boosting your online presence and driving growth through strategic digital marketing campaigns.',
        points: ['Search Engine Optimization (SEO)', 'Pay-Per-Click (PPC) Advertising', 'Social Media Marketing', 'Content Strategy & Marketing']
      },
      {
        icon: Palette,
        title: 'Graphics Designing',
        description: 'Crafting stunning visuals that define your brand identity and captivate your audience.',
        points: ['Logo Design & Branding', 'Marketing & Advertising Materials', 'UI/UX for Web & Mobile', 'Illustrations & Infographics']
      }
    ]
  },
  {
    slug: 'healthcare-services',
    title: "Healthcare Services",
    description: "Our healthcare solutions prioritize quality and accessibility, supporting individuals and organizations with care that improves lives.",
    icon: HeartPulse,
    heroImage: 'https://images.unsplash.com/photo-1576091160550-2173dba9996a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neXxlbnwwfHx8fDE3NDgwMzk2Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    details: [
      {
        icon: PenTool,
        title: 'Medical Scribing',
        description: 'Providing real-time documentation support to physicians, improving efficiency and patient focus.',
        points: ['Live Charting during Patient Encounters', 'HIPAA Compliant Processes', 'Reduced Administrative Burden for Doctors', 'Improved Chart Quality and Accuracy']
      },
      {
        icon: Search,
        title: 'Risk Adjustment',
        description: 'Ensuring accurate risk assessment for proper reimbursement and patient care management.',
        points: ['Comprehensive Chart Reviews', 'Accurate HCC Coding', 'Data Analytics for Risk Prediction', 'Compliance with CMS Guidelines']
      }
    ]
  },
  {
    slug: 'credit-card-sales',
    title: "Credit Card Sales",
    description: "We provide secure, convenient payment solutions to help businesses thrive, streamlining transactions for enhanced customer satisfaction.",
    icon: CreditCard,
    heroImage: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBzZXJ2aWNlc3xlbnwwfHx8fDE3NDgwMzk2Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    details: [
       {
        icon: CreditCard,
        title: 'Personal & Business Cards',
        description: 'Offering a wide range of credit cards to suit different financial needs and lifestyles.',
        points: ['Rewards & Cashback Cards', 'Travel & Airline Miles Cards', 'Business & Corporate Cards', 'Secured & Student Cards']
      }
    ]
  },
  {
    slug: 'insurance-sales',
    title: "Insurance Sales",
    description: "Protecting your future is our priority. We offer comprehensive insurance plans tailored to provide peace of mind.",
    icon: ShieldCheck,
    heroImage: 'https://images.unsplash.com/photo-1560518883-ce09059ee355?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxpbnN1cmFuY2UlMjBwcm90ZWN0aW9ufGVufDB8fHx8fDE3NDgwMzk2Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    details: [
       {
        icon: ShieldCheck,
        title: 'Life & Health Insurance',
        description: 'Secure your family\'s future and cover medical expenses with our comprehensive policies.',
        points: ['Term & Whole Life Insurance', 'Individual & Family Health Plans', 'Critical Illness Coverage', 'Accident & Disability Insurance']
      }
    ]
  },
  {
    slug: 'ai-services',
    title: "AI Services",
    description: "Leveraging cutting-edge AI to create intelligent solutions for data analysis, automation, and actionable business insights.",
    icon: BrainCircuit,
    heroImage: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDB8fHx8fDE3NDgwMzk2Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    details: [
       {
        icon: BrainCircuit,
        title: 'Machine Learning & Automation',
        description: 'Building custom AI models to solve complex problems and automate repetitive tasks.',
        points: ['Predictive Analytics', 'Natural Language Processing (NLP)', 'Computer Vision Solutions', 'Robotic Process Automation (RPA)']
      }
    ]
  },
  {
    slug: 'resource-outsource',
    title: "Resource Outsource",
    description: "Supplying skilled professionals and critical expertise for both short-term and long-term projects, boosting your team's capacity.",
    icon: Users,
    heroImage: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxyZXNvdXJjZSUyMG91dHNvdXJjaW5nfGVufDB8fHx8fDE3NDgwMzk2Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    details: [
       {
        icon: Users,
        title: 'Staff Augmentation',
        description: 'Find the right talent to complement your team and accelerate your project timelines.',
        points: ['IT & Software Developers', 'Healthcare Professionals', 'Digital Marketers & Designers', 'Project Managers & Consultants']
      }
    ]
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}
