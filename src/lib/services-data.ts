
export interface ServiceDetail {
  slug: string;
  title: string;
  icon?: string;
  description: string;
  backgroundImage: string;
  subDetails?: string[];
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  details: ServiceDetail[];
}

export const services: Service[] = [
  {
    slug: 'it-services',
    title: "IT Services",
    description: "From custom software to stunning websites, we provide comprehensive IT services to build and enhance your digital presence.",
    details: [
      {
        slug: "website-development",
        title: "Website Development",
        icon: "website-development",
        description: "We create modern, responsive, and SEO-friendly websites tailored to your brand. Our expertise covers both static and dynamic sites, ensuring high performance and user engagement.",
        backgroundImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGV2ZWxvcG1lbnR8ZW58MHx8fHwxNzQ4MzM2MzgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        subDetails: [
          "Static Websites: Fast, secure, and reliable sites ideal for portfolios, brochures, and information-based content.",
          "Dynamic Websites: Feature-rich, interactive websites with content management systems (CMS), e-commerce functionality, and user accounts.",
          "Modern Tech Stack: Utilizing React, Next.js, and other modern frameworks to build scalable and maintainable web applications.",
          "SEO-Friendly Architecture: Built from the ground up with search engine optimization best practices in mind."
        ]
      },
      {
        slug: "mobile-application-development",
        title: "Mobile Application Development",
        icon: "mobile-application-development",
        description: "Engage your customers on the go with our native and hybrid mobile apps. We build intuitive, high-performance applications for both iOS and Android platforms.",
        backgroundImage: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NDgzMzYzODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
        subDetails: [
          "Native Android (Kotlin/Java): Building robust and scalable apps using the latest Android technologies.",
          "Native iOS (Swift/SwiftUI): Crafting seamless experiences for Apple devices with modern development practices.",
          "Hybrid - React Native: Cost-effective solutions using a single codebase to target multiple platforms without compromising quality.",
          "Hybrid - Flutter: High-performance, cross-platform apps with beautiful, natively compiled interfaces."
        ]
      },
      {
        slug: "digital-marketing",
        title: "Digital Marketing & SEO",
        icon: "digital-marketing",
        description: "Expand your reach with our data-driven digital marketing strategies. We specialize in SEO, SEM, content marketing, and social media to boost your online visibility and generate leads.",
        backgroundImage: "https://images.unsplash.com/photo-1557862921-37829c790f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nfGVufDB8fHx8MTc0ODM5MzM4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
        subDetails: [
          "Search Engine Optimization (SEO): Improving your website's ranking on search engines through on-page, off-page, and technical SEO.",
          "Search Engine Marketing (SEM): Running targeted pay-per-click (PPC) campaigns on Google Ads to drive immediate traffic.",
          "Content Marketing Strategy: Creating valuable content (blogs, videos, infographics) to attract and retain your target audience.",
          "Social Media Management: Building and managing your brand's presence on social media platforms to engage with your community."
        ]
      },
      {
        slug: "graphics-designing",
        title: "Graphics Designing",
        icon: "graphics-designing",
        description: "Our creative team crafts compelling visual identities, logos, marketing materials, and UI/UX designs that resonate with your audience and elevate your brand.",
        backgroundImage: "https://images.unsplash.com/photo-1626785774573-4b799315345d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxncmFwaGljcyUyMGRlc2lnbmluZ3xlbnwwfHx8fDE3NDgzMzYzODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
        subDetails: [
          "Brand Identity & Logo Design: Creating a memorable and cohesive visual identity that represents your brand's values.",
          "Marketing & Advertising Graphics: Designing eye-catching visuals for social media, print ads, banners, and brochures.",
          "UI/UX Design: Crafting intuitive and user-friendly interfaces for websites and mobile applications that provide an exceptional user experience.",
          "Illustration and Iconography: Custom illustrations and icons to make your digital products unique and engaging."
        ]
      }
    ]
  },
  {
    slug: 'healthcare-services',
    title: "Healthcare Services",
    description: "Specialized support solutions for the healthcare industry, focusing on quality, efficiency, and compassionate care.",
    details: [
      {
        slug: "medical-billing",
        title: "Medical Billing & Coding",
        description: "Our certified professionals ensure accurate and timely medical billing and coding, maximizing revenue and ensuring compliance for healthcare providers.",
        backgroundImage: "https://images.unsplash.com/photo-1576091160550-2173dba9996a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlfGVufDB8fHx8MTc0ODAzOTYzOHww&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        slug: "telehealth-support",
        title: "Telehealth Support",
        description: "We provide technical and administrative support for telehealth platforms, ensuring seamless virtual consultations for both patients and doctors.",
        backgroundImage: "https://images.unsplash.com/photo-1584820844314-19a93a45c7b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx0ZWxlaGVhbHRofGVufDB8fHx8MTc0ODM5MzM4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        slug: "patient-support",
        title: "Patient Support Services",
        description: "Offering compassionate and efficient patient support, including appointment scheduling, inquiry handling, and follow-ups to enhance patient satisfaction.",
        backgroundImage: "https://images.unsplash.com/photo-1530497111126-7f21e8740f31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwYXRpZW50JTIwc3VwcG9ydHxlbnwwfHx8fDE3NDgzOTMzODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      }
    ]
  },
  {
    slug: 'credit-card-sales',
    title: "Credit Card Sales",
    description: "Expert sales solutions to connect customers with the right financial products to meet their needs.",
    details: [
      {
        slug: "direct-sales",
        title: "Direct Sales & Acquisition",
        description: "Our trained sales teams excel at direct customer acquisition for a range of credit card products, tailored to different consumer segments.",
        backgroundImage: "https://images.unsplash.com/photo-1601597111158-2f8e6308fe83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjcmVkaXQlMjBjYXJkfGVufDB8fHx8MTc0ODM5MzM4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        slug: "partner-management",
        title: "Partner Channel Management",
        description: "We establish and manage strategic partnerships with retail and corporate channels to expand market reach and drive credit card sales.",
        backgroundImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwYXJ0bmVyJTIwbWFuYWdlbWVudHxlbnwwfHx8fDE3NDgzMzYzODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        slug: "lead-generation-cc",
        title: "Lead Generation",
        description: "Utilizing digital and traditional marketing techniques to generate high-quality leads for credit card sales teams, ensuring a steady pipeline of potential customers.",
        backgroundImage: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxsZWFkJTIwZ2VuZXJhdGlvbnxlbnwwfHx8fDE3NDgzOTMzODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      }
    ]
  },
  {
    slug: 'insurance-sales',
    title: "Insurance Sales",
    description: "Comprehensive insurance solutions to provide financial security and peace of mind for individuals and businesses.",
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

    