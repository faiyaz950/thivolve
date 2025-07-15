
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
        description: "We create modern, responsive, and SEO-friendly websites tailored to your brand. Our expertise covers e-commerce, portfolios, and complex web applications, ensuring high performance and user engagement.",
        backgroundImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGV2ZWxvcG1lbnR8ZW58MHx8fHwxNzQ4MzM2MzgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        subDetails: [
          { title: "Static & Dynamic Websites", description: "We build fast, secure static sites for portfolios and brochures, as well as interactive, CMS-driven dynamic sites for blogs, corporate portals, and complex business applications." },
          { title: "E-commerce Solutions", description: "Our team creates feature-rich online stores with secure payment gateways, intuitive inventory management, and a seamless user experience to maximize your sales." },
          { title: "Modern Tech Stack", description: "We leverage cutting-edge technologies like React, Next.js, and Node.js to build scalable, high-performance, and maintainable web applications for the future." },
          { title: "SEO-Friendly Architecture", description: "Every website is built from the ground up with search engine optimization best practices in mind, ensuring your business achieves maximum visibility on search engines." }
        ]
      },
      {
        slug: "mobile-application-development",
        title: "Mobile App Development",
        icon: "mobile-application-development",
        description: "Engage your customers on the go with our native and hybrid mobile apps. We build intuitive, high-performance applications for both iOS and Android platforms, from concept to launch.",
        backgroundImage: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NDgzMzYzODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
        subDetails: [
          { title: "Native Android Development", description: "Building robust, scalable, and high-performance apps for the world's most popular mobile OS using modern technologies like Kotlin and Java with Android Studio." },
          { title: "Native iOS Development", description: "Crafting seamless, elegant, and powerful experiences for Apple's ecosystem using the latest Swift and SwiftUI frameworks with Xcode." },
          { title: "Cross-Platform (React Native)", description: "Delivering cost-effective solutions by using a single codebase to target multiple platforms (iOS & Android) without compromising on quality or user experience." },
          { title: "Cross-Platform (Flutter)", description: "Creating beautiful, natively compiled applications for mobile, web, and desktop from a single, unified codebase, ensuring a consistent and fluid user interface." }
        ]
      },
      {
        slug: "digital-marketing",
        title: "Digital Marketing",
        icon: "digital-marketing",
        description: "Expand your reach with our data-driven digital marketing strategies. We specialize in SEO, SEM, content marketing, and social media to boost your online visibility, generate qualified leads, and grow your revenue.",
        backgroundImage: "https://images.unsplash.com/photo-1557862921-37829c790f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nfGVufDB8fHx8MTc0ODM5MzM4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
        subDetails: [
          { title: "Search Engine Optimization (SEO)", description: "Improving your website's organic ranking and visibility through comprehensive on-page, off-page, and technical SEO strategies tailored to your business goals." },
          { title: "Search Engine Marketing (SEM)", description: "Driving immediate, targeted traffic and maximizing ROI through expert management of Google Ads, Bing Ads, and other pay-per-click (PPC) campaigns." },
          { title: "Content Marketing Strategy", description: "Creating and distributing valuable, relevant, and consistent content (blogs, videos, case studies) to attract, engage, and retain your target audience." },
          { title: "Social Media Management", description: "Building and managing your brand's presence across relevant social media platforms to foster community, drive engagement, and support business objectives." }
        ]
      },
      {
        slug: "graphics-designing",
        title: "Graphics Designing",
        icon: "graphics-designing",
        description: "Our creative team translates your brand's essence into compelling visual identities, from logos and marketing materials to polished UI/UX designs that create a lasting impression and enhance user experience.",
        backgroundImage: "https://images.unsplash.com/photo-1626785774573-4b799315345d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHxncmFwaGljcyUyMGRlc2lnbmluZ3xlbnwwfHx8fDE3NDgzMzYzODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
        subDetails: [
          { title: "Brand Identity & Logo Design", description: "Developing a memorable and cohesive visual identity system, including logos, color palettes, and typography, that powerfully represents your brand's core values." },
          { title: "Marketing & Advertising Graphics", description: "Designing eye-catching and effective visuals for digital and print, including social media campaigns, display ads, brochures, and banners." },
          { title: "UI/UX Design", description: "Crafting intuitive, user-centered, and beautiful interfaces for websites and mobile applications that prioritize usability and enhance the overall user experience." },
          { title: "Custom Illustrations & Icons", description: "Creating unique and ownable visual assets, such as custom illustrations and icon sets, that make your digital products stand out from the competition." }
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
        backgroundImage: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDB8fHx8MTc0ODM5MzM4N3ww&ixlib-rb-4.1.0&q=80&w=1080",
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
        backgroundImage: "https://images.unsplash.com/photo-1593349480503-68153e4c843e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHxjvbnN1bSUyMGFpJTIwc29sdXRpb25zfGVufDB8fHx8MTc0ODM5MzM4N3ww&ixlib-rb-4.1.0&q=80&w=1080",
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
