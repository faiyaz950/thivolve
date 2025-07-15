
export interface SubDetail {
  title: string;
  description: string;
}
export interface ServiceDetail {
  slug: string;
  title: string;
  icon?: string;
  description: string;
  backgroundImage: string;
  subDetails?: SubDetail[];
}

export interface HeroSlide {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    hint: string;
  };
}

export interface ServiceHero {
  slides: HeroSlide[];
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  hero?: ServiceHero;
  details: ServiceDetail[];
}

export const services: Service[] = [
  {
    slug: 'it-services',
    title: "IT Services",
    description: "From custom software to stunning websites, we provide comprehensive IT services to build and enhance your digital presence.",
    hero: {
      slides: [
        {
          title: "Custom Web Development",
          description: "We craft responsive, high-performance websites and complex web applications that drive user engagement and deliver business results.",
          image: {
            src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGV2ZWxvcG1lbnR8ZW58MHx8fHwxNzQ4MzM2MzgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
            alt: "Team working on website development",
            hint: "website development team"
          }
        },
        {
          title: "Modern Mobile Applications",
          description: "Engage your customers on the go with our intuitive, high-performance native and hybrid mobile apps for both iOS and Android.",
          image: {
            src: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NDgzMzYzODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
            alt: "Mobile application development interface",
            hint: "mobile app development"
          }
        },
        {
          title: "Effective Digital Marketing",
          description: "Expand your reach and generate qualified leads with our data-driven digital marketing, SEO, and content strategies.",
          image: {
            src: "https://images.unsplash.com/photo-1557862921-37829c790f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nfGVufDB8fHx8MTc0ODM5MzM4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
            alt: "Digital marketing strategy session",
            hint: "digital marketing"
          }
        },
        {
          title: "Creative Graphics Designing",
          description: "Our creative team translates your brand's essence into compelling visual identities, from logos to polished UI/UX designs.",
          image: {
            src: "https://images.unsplash.com/photo-1626785774573-4b799315345d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHxncmFwaGljcyUyMGRlc2lnbmluZ3xlbnwwfHx8fDE3NDgzMzYzODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
            alt: "Graphic designer working on a project",
            hint: "graphics designing"
          }
        }
      ]
    },
    details: [
      {
        slug: "website-development",
        title: "Website Development",
        icon: "website-development",
        description: "We build modern, responsive, and user-friendly websites that perfectly represent your brand identity. Our expert developers use the latest technologies to ensure your website is fast, secure, and search engine optimized.",
        backgroundImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGV2ZWxvcG1lbnR8ZW58MHx8fHwxNzQ4MzM2MzgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        subDetails: [
          { title: "Key Features", description: "Fully Responsive Design (mobile, tablet, desktop), Fast Loading Speeds, SEO-Friendly Architecture, User-Friendly Interface, Enhanced Security Features (SSL), and seamless Content Management System (CMS) integration." },
          { title: "Technologies We Use", description: "Frontend: HTML5, CSS3, JavaScript, React, Angular. Backend: PHP, Node.js, Python, .NET. Databases: MySQL, PostgreSQL, MongoDB. CMS: WordPress, Drupal, and custom solutions." },
          { title: "Our Process", description: "Our structured process includes Planning & Analysis, Design & Wireframing, Development, rigorous Testing, and finally Launch & ongoing Support to ensure a seamless delivery." }
        ]
      },
      {
        slug: "mobile-application-development",
        title: "Mobile App Development",
        icon: "mobile-application-development",
        description: "With a mobile-first approach, we develop innovative and engaging mobile applications. Whether you are a startup or an established business, our mobile apps provide your customers with an exceptional experience.",
        backgroundImage: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NDgzMzYzODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
        subDetails: [
          { title: "Platform Expertise", description: "We specialize in Native iOS (Swift, Objective-C), Native Android (Java, Kotlin), Cross-Platform (React Native, Flutter), and Progressive Web Apps (PWA)." },
          { title: "App Categories", description: "We build a wide range of applications including E-commerce, Business & Productivity, Educational, Healthcare, Social Networking, Food & Restaurant, Travel, and Gaming apps." },
          { title: "Development Features", description: "Our apps feature User-Centric Design, Performance Optimization, robust Security Implementation, API Integration, Push Notifications, and powerful Analytics Integration." },
          { title: "Development Process", description: "We follow a comprehensive process: Concept & Strategy, UI/UX Design, Agile Development, rigorous Testing, App Store Deployment, and continuous Maintenance." }
        ]
      },
      {
        slug: "digital-marketing",
        title: "Digital Marketing",
        icon: "digital-marketing",
        description: "We implement result-driven digital marketing strategies to increase your business's online visibility. From boosting organic traffic to conversion optimization, our team helps you achieve your marketing goals.",
        backgroundImage: "https://images.unsplash.com/photo-1557862921-37829c790f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nfGVufDB8fHx8MTc0ODM5MzM4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
        subDetails: [
          { title: "SEO Services", description: "We offer On-Page SEO (content optimization, meta tags), Off-Page SEO (link building, guest posting), Technical SEO, Local SEO, E-commerce SEO, and comprehensive SEO Audits." },
          { title: "Digital Marketing Services", description: "Our services include Search Engine Marketing (SEM), Social Media Marketing (Facebook, Instagram), Content Marketing, Email Marketing, Pay-Per-Click (PPC), and Online Reputation Management." },
          { title: "Our Approach", description: "Our data-driven approach involves Market Research, Strategy Development, Implementation, continuous Monitoring, detailed Reporting, and ongoing Optimization for best results." },
          { title: "Key Benefits", description: "Partnering with us leads to increased organic traffic, higher conversion rates, enhanced brand visibility, improved customer engagement, and data-driven decision making." }
        ]
      },
      {
        slug: "graphics-designing",
        title: "Graphics Designing",
        icon: "graphics-designing",
        description: "We provide professional graphic design services that make your brand visually appealing and memorable. From creative concepts to final execution, our designers convert your vision into reality.",
        backgroundImage: "https://images.unsplash.com/photo-1626785774573-4b799315345d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHxncmFwaGljcyUyMGRlc2lnbmluZ3xlbnwwfHx8fDE3NDgzMzYzODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
        subDetails: [
          { title: "Design Services", description: "We provide Logo Design, complete Brand Identity packages, Print Design (brochures, flyers), Web Design (UI/UX), Social Media Graphics, Packaging Design, and other Marketing Materials." },
          { title: "Logo Design Process", description: "Our logo process includes a detailed Brief & Research, Concept Development, client Feedback & Refinement, Finalization, and creating Brand Guidelines for consistent use." },
          { title: "Design Expertise", description: "Our team is proficient in Adobe Creative Suite (Photoshop, Illustrator, InDesign), UI/UX Tools (Figma, Sketch), Print Production, Brand Strategy, Typography, and Color Theory." },
          { title: "Deliverables", description: "We provide final designs in multiple formats (Vector, high-res images), Print-Ready Files, Web-Optimized Graphics, comprehensive Brand Guidelines, and editable Source Files." }
        ]
      }
    ]
  },
  {
    slug: 'healthcare-services',
    title: "Healthcare Services",
    description: "Specialized support solutions for the healthcare industry, focusing on quality, efficiency, and compassionate care.",
    hero: {
      slides: [
        {
          title: "Empowering Modern Healthcare",
          description: "We provide the essential backbone for healthcare services, ensuring efficiency, compliance, and quality patient care.",
          image: {
            src: "https://images.unsplash.com/photo-1576091160550-2173dba9996a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlfGVufDB8fHx8MTc0ODAzOTYzOHww&ixlib=rb-4.1.0&q=80&w=1080",
            alt: "Doctor using a laptop",
            hint: "healthcare technology"
          }
        },
        {
          title: "Seamless Telehealth Support",
          description: "Our technical and administrative support ensures that virtual consultations are smooth and reliable for both patients and doctors.",
          image: {
            src: "https://images.unsplash.com/photo-1584820844314-19a93a45c7b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHx0ZWxlaGVhbHRofGVufDB8fHx8MTc0ODM5MzM4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
            alt: "Telehealth consultation on a tablet",
            hint: "telehealth"
          }
        }
      ]
    },
    details: [
      {
        slug: "medical-billing",
        title: "Medical Billing & Coding",
        description: "Our certified professionals ensure accurate and timely medical billing and coding, maximizing revenue and ensuring compliance for healthcare providers.",
        backgroundImage: "https://images.unsplash.com/photo-1576091160550-2173dba9996a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHxoZWFsdGhjYXJlfGVufDB8fHx8MTc0ODAzOTYzOHww&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        slug: "telehealth-support",
        title: "Telehealth Support",
        description: "We provide technical and administrative support for telehealth platforms, ensuring seamless virtual consultations for both patients and doctors.",
        backgroundImage: "https://images.unsplash.com/photo-1584820844314-19a93a45c7b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHx0ZWxlaGVhbHRofGVufDB8fHx8MTc0ODM5MzM4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        slug: "patient-support",
        title: "Patient Support Services",
        description: "Offering compassionate and efficient patient support, including appointment scheduling, inquiry handling, and follow-ups to enhance patient satisfaction.",
        backgroundImage: "https://images.unsplash.com/photo-1530497111126-7f21e8740f31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHxwYXRpZW50JTIwc3VwcG9ydHxlbnwwfHx8fDE3NDgzOTMzODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      }
    ]
  },
  {
    slug: 'credit-card-sales',
    title: "Credit Card Sales",
    description: "Expert sales solutions to connect customers with the right financial products to meet their needs.",
    hero: {
      slides: [
        {
          title: "Connecting Customers with Financial Freedom",
          description: "Our expert teams drive secure and convenient payment solutions for today's dynamic market.",
          image: {
            src: "https://images.unsplash.com/photo-1601597111158-2f8e6308fe83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjcmVkaXQlMjBjYXJkfGVufDB8fHx8MTc0ODM5MzM4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
            alt: "Person holding a credit card",
            hint: "credit card"
          }
        },
        {
          title: "Driving Growth Through Lead Generation",
          description: "We generate high-quality leads for sales teams, ensuring a steady pipeline of potential customers.",
          image: {
            src: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHxsZWFkJTIwZ2VuZXJhdGlvbnxlbnwwfHx8fDE3NDgzOTMzODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
            alt: "Sales team in a meeting",
            hint: "sales team"
          }
        }
      ]
    },
    details: [
      {
        slug: "direct-sales",
        title: "Direct Sales & Acquisition",
        description: "Our trained sales teams excel at direct customer acquisition for a range of credit card products, tailored to different consumer segments.",
        backgroundImage: "https://images.unsplash.com/photo-1601597111158-2f8e6308fe83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHxjcmVkaXQlMjBjYXJkfGVufDB8fHx8MTc0ODM5MzM4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        slug: "partner-management",
        title: "Partner Channel Management",
        description: "We establish and manage strategic partnerships with retail and corporate channels to expand market reach and drive credit card sales.",
        backgroundImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHxwYXJ0bmVyJTIwbWFuYWdlbWVudHxlbnwwfHx8fDE3NDgzMzYzODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        slug: "lead-generation-cc",
        title: "Lead Generation",
        description: "Utilizing digital and traditional marketing techniques to generate high-quality leads for credit card sales teams, ensuring a steady pipeline of potential customers.",
        backgroundImage: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHxsZWFkJTIwZ2VuZXJhdGlvbnxlbnwwfHx8fDE3NDgzOTMzODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      }
    ]
  },
  {
    slug: 'insurance-sales',
    title: "Insurance Sales",
    description: "Comprehensive insurance solutions to provide financial security and peace of mind for individuals and businesses.",
     hero: {
      slides: [
        {
          title: "Protecting Your Future with Confidence",
          description: "We offer comprehensive, tailored insurance plans that provide lasting security and peace of mind.",
          image: {
            src: "https://images.unsplash.com/photo-1560520455-f2a05a8d3b36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxpbnN1cmFuY2V8ZW58MHx8fHwxNzQ4MzM2MzgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
            alt: "Family protected under an umbrella illustration",
            hint: "insurance protection"
          }
        },
        {
          title: "Corporate Insurance Solutions",
          description: "Customized group insurance plans and corporate solutions to help businesses protect their employees and assets.",
          image: {
            src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHxjcnBvcmF0ZSUyMGluc3VyYW5jZXxlbnwwfHx8fDE3NDgzMzYzODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
            alt: "Business professionals signing a document",
            hint: "corporate insurance"
          }
        }
      ]
    },
    details: [
      {
        slug: "life-health-insurance",
        title: "Life & Health Insurance",
        description: "Providing personalized life and health insurance plans to protect individuals and families against unforeseen events and medical emergencies.",
        backgroundImage: "https://images.unsplash.com/photo-1560520455-f2a05a8d3b36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxpbnN1cmFuY2V8ZW58MHx8fHwxNzQ4MzM2MzgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        slug: "general-insurance",
        title: "General Insurance",
        description: "Offering a wide range of general insurance products, including auto, home, and travel insurance, to safeguard your valuable assets.",
        backgroundImage: "https://images.unsplash.com/photo-1559902347-64936b856c6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHxnZW5lcmFsJTIwaW5zdXJhbmNlfGVufDB8fHx8MTc0ODM5MzM4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        slug: "corporate-insurance",
        title: "Corporate Insurance Solutions",
        description: "Customized group insurance plans and corporate solutions to help businesses protect their employees and assets.",
        backgroundImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHxjcnBvcmF0ZSUyMGluc3VyYW5jZXxlbnwwfHx8fDE3NDgzMzYzODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      }
    ]
  },
  {
    slug: 'ai-services',
    title: "AI Services",
    description: "Harnessing the power of Artificial Intelligence to automate processes, derive insights, and drive innovation.",
    hero: {
      slides: [
        {
          title: "Intelligent Automation & Insights",
          description: "Leverage our cutting-edge AI solutions to unlock data-driven strategies and boost operational efficiency.",
          image: {
            src: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDB8fHx8MTc0ODM5MzM4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
            alt: "Abstract artificial intelligence concept",
            hint: "artificial intelligence"
          }
        },
        {
          title: "Unlock the Power of Your Data",
          description: "Our data analysis services transform complex datasets into clear, actionable insights that drive business growth.",
          image: {
            src: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHlzaXN8ZW58MHx8fHwxNzQ4MzM2MzgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
            alt: "Team analyzing data on a screen",
            hint: "data analysis team"
          }
        }
      ]
    },
    details: [
      {
        slug: "ai-automation",
        icon: "ai-automation",
        title: "AI-Powered Automation",
        description: "We develop custom AI models to automate repetitive tasks, streamline workflows, and increase operational efficiency across your business.",
        backgroundImage: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDB8fHx8MTc0ODM5MzM4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        slug: "data-analysis",
        icon: "data-analysis",
        title: "Data Analysis & Insights",
        description: "Leveraging machine learning to analyze complex datasets, identify trends, and provide actionable insights that inform strategic business decisions.",
        backgroundImage: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHlzaXN8ZW58MHx8fHwxNzQ4MzM2MzgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        slug: "custom-ai",
        icon: "custom-ai",
        title: "Custom AI Solutions",
        description: "From natural language processing (NLP) for chatbots to computer vision for image analysis, we build bespoke AI solutions to solve your unique challenges.",
        backgroundImage: "https://images.unsplash.com/photo-1593349480503-68153e4c843e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHxjvbnN1bSUyMGFpJTIwc29sdXRpb25zfGVufDB8fHx8MTc0ODM5MzM4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      }
    ]
  },
  {
    slug: 'resource-outsource',
    title: "Resource Outsource",
    description: "Providing skilled professionals and flexible staffing solutions to augment your team and scale your operations.",
    hero: {
      slides: [
        {
          title: "Augment Your Team with Expert Talent",
          description: "Scale your operations seamlessly with our flexible staffing and expert talent outsourcing solutions.",
          image: {
            src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxyZXNvdXJjZSUyMG91dHNvdXJjaW5nfGVufDB8fHx8MTc0ODM5MzM4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
            alt: "Business team in a meeting",
            hint: "team meeting"
          }
        },
        {
          title: "Streamline Your Recruitment Process",
          description: "Our Recruitment Process Outsourcing (RPO) finds the best talent while you focus on your core business.",
          image: {
            src: "https://images.unsplash.com/photo-1556740758-90de374c12ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxyZWNydWl0bWVudCUyMHByb2Nlc3N8ZW58MHx8fHwxNzQ4MzM2MzgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
            alt: "Recruitment process with sticky notes",
            hint: "recruitment process"
          }
        }
      ]
    },
    details: [
      {
        slug: "it-staffing",
        title: "IT Staff Augmentation",
        description: "Access our pool of vetted IT professionals, including developers, designers, and project managers, to supplement your existing team for short-term or long-term projects.",
        backgroundImage: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxyZXNvdXJjZSUyMG91dHNvdXJjaW5nfGVufDB8fHx8MTc0ODM5MzM4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        slug: "bpo-services",
        title: "BPO Services",
        description: "Outsource your business processes to us. We offer reliable and cost-effective solutions for customer support, data entry, and back-office operations.",
        backgroundImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHxiaXAlMjBzZXJ2aWNlc3xlbnwwfHx8fDE3NDgzMzYzODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        slug: "rpo-services",
        title: "Recruitment Process Outsourcing (RPO)",
        description: "We manage your entire recruitment lifecycle, from sourcing and screening to onboarding, allowing you to focus on your core business while we find the best talent for you.",
        backgroundImage: "https://images.unsplash.com/photo-1556740758-90de374c12ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxyZWNydWl0bWVudCUyMHByb2Nlc3N8ZW58MHx8fHwxNzQ4MzM2MzgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      }
    ]
  }
];
