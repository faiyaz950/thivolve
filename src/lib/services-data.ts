
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
            src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjb2RlfGVufDB8fHx8MTc0ODQwMzYwMHww&ixlib=rb-4.1.0&q=80&w=1080",
            alt: "Code on a screen",
            hint: "web code"
          }
        },
        {
          title: "Modern Mobile Applications",
          description: "Engage your customers on the go with our intuitive, high-performance native and hybrid mobile apps for both iOS and Android.",
          image: {
            src: "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NDg0MDM2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
            alt: "Mobile application development interface on a screen",
            hint: "mobile development"
          }
        },
        {
          title: "Effective Digital Marketing",
          description: "Expand your reach and generate qualified leads with our data-driven digital marketing, SEO, and content strategies.",
          image: {
            src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBhbmFseXRpY3N8ZW58MHx8fHwxNzQ4NDAzNjAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
            alt: "Digital marketing analytics on a dashboard",
            hint: "marketing analytics"
          }
        },
        {
          title: "Creative Graphics Designing",
          description: "Our creative team translates your brand's essence into compelling visual identities, from logos to polished UI/UX designs.",
          image: {
            src: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWdufGVufDB8fHx8MTc0ODQwMzYwMHww&ixlib=rb-4.1.0&q=80&w=1080",
            alt: "Abstract graphic design elements",
            hint: "graphic design"
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
        backgroundImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHdlYnNpdGUlMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTc0ODQwMzYwMHww&ixlib=rb-4.1.0&q=80&w=1080",
        subDetails: [
          { title: "Key Features", description: "Our solutions feature fully responsive designs for mobile, tablet, and desktop, fast loading speeds through code optimization and image compression, SEO-friendly architecture, intuitive user interfaces for easy navigation, and enhanced security features including SSL certificates and secure coding practices. We also integrate user-friendly Content Management Systems (CMS) for easy content updates." },
          { title: "Technologies We Use", description: "Our expertise spans across multiple technologies. For the frontend, we use HTML5, CSS3, JavaScript, React, Next.js, and Angular. On the backend, we work with PHP, Node.js, Python, and .NET. Our database solutions include MySQL, PostgreSQL, and MongoDB. We are also proficient with various CMS platforms like WordPress, Drupal, and can build custom solutions." },
          { title: "Our Process", description: "Our structured development process begins with Planning & Analysis, where we gather requirements and define the project scope. We then move to Design & Wireframing for user experience design and visual mockups. The Development phase involves clean coding and responsive implementation. This is followed by rigorous cross-browser Testing and quality assurance, and finally, we handle the website Launch & provide ongoing Support." }
        ]
      },
      {
        slug: "mobile-application-development",
        title: "Mobile App Development",
        icon: "mobile-application-development",
        description: "With a mobile-first approach, we develop innovative and engaging mobile applications. Whether you are a startup or an established business, our mobile apps provide your customers with an exceptional experience.",
        backgroundImage: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTc0ODQwMzYwMHww&ixlib=rb-4.1.0&q=80&w=1080",
        subDetails: [
          { title: "Platform Expertise", description: "We specialize in Native iOS development using Swift and Objective-C, and Native Android development with Kotlin and Java. We also build Cross-Platform applications using React Native and Flutter, as well as Progressive Web Apps (PWA) that offer an app-like experience using web technologies." },
          { title: "App Categories", description: "We have experience building a wide range of applications, including E-commerce, Business & Productivity, Educational, Healthcare, Social Networking, Food & Restaurant, Travel & Tourism, and Gaming apps." },
          { title: "Development Features", description: "Our apps are built with a focus on user-centric design (intuitive UI/UX), performance optimization for speed and smoothness, robust security implementation with data encryption and secure authentication, seamless API integration with third-party services and payment gateways, push notifications for real-time user engagement, and powerful analytics integration for tracking user behavior and insights." },
          { title: "Development Process", description: "Our comprehensive process starts with Concept & Strategy, including idea validation and market research. This is followed by UI/UX Design with wireframes and prototypes. We use an Agile methodology for development, conduct rigorous functional and performance Testing, manage App Store submission and approval, and provide continuous Maintenance and support." }
        ]
      },
      {
        slug: "digital-marketing",
        title: "Digital Marketing",
        icon: "digital-marketing",
        description: "We implement result-driven digital marketing strategies to increase your business's online visibility. From boosting organic traffic to conversion optimization, our team helps you achieve your marketing goals.",
        backgroundImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTc0ODQwMzYwMHww&ixlib=rb-4.1.0&q=80&w=1080",
        subDetails: [
          { title: "SEO Services", description: "We offer On-Page SEO (content optimization, meta tags, internal linking), Off-Page SEO (link building, directory submissions, guest posting), Technical SEO (website speed, mobile-friendliness), Local SEO (Google My Business), E-commerce SEO (product page optimization), and comprehensive SEO Audits." },
          { title: "Digital Marketing Services", description: "Our services include Search Engine Marketing (SEM) with Google Ads and Bing Ads management, Social Media Marketing on platforms like Facebook, Instagram, and LinkedIn, Content Marketing including blog writing and video content, Email Marketing campaigns, targeted Pay-Per-Click (PPC) advertising, and Online Reputation Management." },
          { title: "Our Approach", description: "Our data-driven approach involves detailed Market Research, creating a customized Strategy, hands-on Implementation of campaigns, continuous Monitoring of performance, providing regular progress Reports with insights, and ongoing Optimization to refine our strategies for the best results." },
          { title: "Key Benefits", description: "Partnering with us leads to increased organic traffic and higher search engine rankings, better conversion rates and ROI, enhanced brand visibility and awareness, improved customer engagement and retention, and valuable data-driven insights for decision making." }
        ]
      },
      {
        slug: "graphics-designing",
        title: "Graphics Designing",
        icon: "graphics-designing",
        description: "We provide professional graphic design services that make your brand visually appealing and memorable. From creative concepts to final execution, our designers convert your vision into reality.",
        backgroundImage: "https://images.unsplash.com/photo-1572044162444-24c95621ec34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwYWJzdHJhY3R8ZW58MHx8fHwxNzQ4NDAzNjAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        subDetails: [
          { title: "Design Services", description: "We provide a wide range of design services including unique Logo Design, complete Brand Identity packages with style guides, Print Design for brochures and business cards, Web Design (UI/UX), Social Media Graphics, Packaging Design, and other Marketing Materials like advertisements and presentations." },
          { title: "Logo Design Process", description: "Our logo design process includes a detailed Brief & Research phase to understand your brand, Concept Development where we create multiple logo concepts, a Refinement stage for incorporating client feedback, and Finalization with delivery in various formats and comprehensive Brand Guidelines." },
          { title: "Design Expertise", description: "Our team is proficient in the Adobe Creative Suite (Photoshop, Illustrator, InDesign), modern UI/UX tools like Figma and Sketch, Print Production, Brand Strategy, Typography, and Color Theory to create a cohesive and effective visual identity." },
          { title: "Deliverables", description: "We provide final designs in multiple formats including vector files and high-resolution images. You'll receive Print-Ready Files, Web-Optimized Graphics, comprehensive Brand Guidelines detailing logo usage and color codes, and the editable Source Files for future use." }
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
            src: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neXxlbnwwfHx8fDE3NDg0MDM2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
            alt: "Medical technology and equipment",
            hint: "medical technology"
          }
        },
        {
          title: "Seamless Telehealth Support",
          description: "Our technical and administrative support ensures that virtual consultations are smooth and reliable for both patients and doctors.",
          image: {
            src: "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx0ZWxlaGVhbHRoJTIwYmFja2dyb3VuZHxlbnwwfHx8fDE3NDg0MDM2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
            alt: "Telehealth interface on a laptop screen",
            hint: "telehealth interface"
          }
        }
      ]
    },
    details: [
      {
        slug: "medical-billing",
        title: "Medical Billing & Coding",
        description: "Our certified professionals ensure accurate and timely medical billing and coding, maximizing revenue and ensuring compliance for healthcare providers.",
        backgroundImage: "https://images.unsplash.com/photo-1631217871297-57025275ea45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwYmlsbGluZ3xlbnwwfHx8fDE3NDg0MDM2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        slug: "telehealth-support",
        title: "Telehealth Support",
        description: "We provide technical and administrative support for telehealth platforms, ensuring seamless virtual consultations for both patients and doctors.",
        backgroundImage: "https://images.unsplash.com/photo-1579684385127-6c17937c1275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx0ZWxlaGVhbHRofGVufDB8fHx8fDE3NDg0MDM2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        slug: "patient-support",
        title: "Patient Support Services",
        description: "Offering compassionate and efficient patient support, including appointment scheduling, inquiry handling, and follow-ups to enhance patient satisfaction.",
        backgroundImage: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwYXRpZW50JTIwY2FyZXxlbnwwfHx8fDE3NDg0MDM2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
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
            src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjcmVkaXQlMjBjYXJkcyUyMHBheW1lbnR8ZW58MHx8fHwxNzQ4NDAzNjAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
            alt: "Abstract image of credit card and payment terminal",
            hint: "credit card payment"
          }
        },
        {
          title: "Driving Growth Through Lead Generation",
          description: "We generate high-quality leads for sales teams, ensuring a steady pipeline of potential customers.",
          image: {
            src: "https://images.unsplash.com/photo-1604882355155-b133b5864a7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzYWxlcyUyMGdyb3d0aCUyMGNoYXJ0fGVufDB8fHx8MTc0ODQwMzYwMHww&ixlib=rb-4.1.0&q=80&w=1080",
            alt: "A chart showing sales growth",
            hint: "sales growth chart"
          }
        }
      ]
    },
    details: [
      {
        slug: "direct-sales",
        title: "Direct Sales & Acquisition",
        description: "Our trained sales teams excel at direct customer acquisition for a range of credit card products, tailored to different consumer segments.",
        backgroundImage: "https://images.unsplash.com/photo-1631217871297-57025275ea45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwYmlsbGluZ3xlbnwwfHx8fDE3NDg0MDM2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        slug: "partner-management",
        title: "Partner Channel Management",
        description: "We establish and manage strategic partnerships with retail and corporate channels to expand market reach and drive credit card sales.",
        backgroundImage: "https://images.unsplash.com/photo-1590650213165-d140a3f9c693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwYXJ0bmVyc2hpcCUyMG5ldHdvcmt8ZW58MHx8fHwxNzQ4NDAzNjAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        slug: "lead-generation-cc",
        title: "Lead Generation",
        description: "Utilizing digital and traditional marketing techniques to generate high-quality leads for credit card sales teams, ensuring a steady pipeline of potential customers.",
        backgroundImage: "https://images.unsplash.com/photo-1543286386-713bdd548da4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxsZWFkJTIwZ2VuZXJhdGlvbiUyMGFuYWx5dGljc3xlbnwwfHx8fDE3NDg0MDM2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
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
            src: "https://images.unsplash.com/photo-1560931868-b39f6cdc964d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxpbnN1cmFuY2UlMjBwcm90ZWN0aW9ufGVufDB8fHx8MTc0ODQwMzYwMHww&ixlib=rb-4.1.0&q=80&w=1080",
            alt: "Illustration of a shield protecting assets",
            hint: "insurance protection"
          }
        },
        {
          title: "Corporate Insurance Solutions",
          description: "Customized group insurance plans and corporate solutions to help businesses protect their employees and assets.",
          image: {
            src: "https://images.unsplash.com/photo-1586944692739-0cb993a45c33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjcnBvcmF0ZSUyMGFzc2V0c3xlbnwwfHx8fDE3NDg0MDM2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
            alt: "Modern office building representing corporate assets",
            hint: "corporate assets"
          }
        }
      ]
    },
    details: [
      {
        slug: "life-health-insurance",
        title: "Life & Health Insurance",
        description: "Providing personalized life and health insurance plans to protect individuals and families against unforeseen events and medical emergencies.",
        backgroundImage: "https://images.unsplash.com/photo-1579684385127-6c17937c1275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx0ZWxlaGVhbHRofGVufDB8fHx8fDE3NDg0MDM2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        slug: "general-insurance",
        title: "General Insurance",
        description: "Offering a wide range of general insurance products, including auto, home, and travel insurance, to safeguard your valuable assets.",
        backgroundImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBsYW5uaW5nfGVufDB8fHx8MTc0ODQwMzYwMHww&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        slug: "corporate-insurance",
        title: "Corporate Insurance Solutions",
        description: "Customized group insurance plans and corporate solutions to help businesses protect their employees and assets.",
        backgroundImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHdlYnNpdGUlMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTc0ODQwMzYwMHww&ixlib=rb-4.1.0&q=80&w=1080",
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
            src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDB8fHx8MTc0ODQwMzYwMHww&ixlib=rb-4.1.0&q=80&w=1080",
            alt: "Abstract artificial intelligence concept with robotics",
            hint: "artificial intelligence"
          }
        },
        {
          title: "Unlock the Power of Your Data",
          description: "Our data analysis services transform complex datasets into clear, actionable insights that drive business growth.",
          image: {
            src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHlzaXN8ZW58MHx8fHwxNzQ4NDAzNjAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
            alt: "Data analysis dashboards on a screen",
            hint: "data analysis"
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
        backgroundImage: "https://images.unsplash.com/photo-1593349480503-68153e4c843e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aW9uJTIwcm9ib3RpY3N8ZW58MHx8fHwxNzQ4NDAzNjAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        slug: "data-analysis",
        icon: "data-analysis",
        title: "Data Analysis & Insights",
        description: "Leveraging machine learning to analyze complex datasets, identify trends, and provide actionable insights that inform strategic business decisions.",
        backgroundImage: "https://images.unsplash.com/photo-1543286386-713bdd548da4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxsZWFkJTIwZ2VuZXJhdGlvbiUyMGFuYWx5dGljc3xlbnwwfHx8fDE3NDg0MDM2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        slug: "custom-ai",
        icon: "custom-ai",
        title: "Custom AI Solutions",
        description: "From natural language processing (NLP) for chatbots to computer vision for image analysis, we build bespoke AI solutions to solve your unique challenges.",
        backgroundImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjbnN1bSUyMGFpJTIwc29sdXRpb25zfGVufDB8fHx8MTc0ODQwMzYwMHww&ixlib=rb-4.1.0&q=80&w=1080",
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
            src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxyZXNvdXJjZSUyMG1hbmFnZW1lbnR8ZW58MHx8fHwxNzQ4NDAzNjAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
            alt: "Abstract image of resource and talent management",
            hint: "resource management"
          }
        },
        {
          title: "Streamline Your Recruitment Process",
          description: "Our Recruitment Process Outsourcing (RPO) finds the best talent while you focus on your core business.",
          image: {
            src: "https://images.unsplash.com/photo-1552960562-bab847650a94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxyZWNydWl0bWVudCUyMHN0cmF0ZWd5fGVufDB8fHx8fDE3NDg0MDM2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
            alt: "A strategic diagram for recruitment",
            hint: "recruitment strategy"
          }
        }
      ]
    },
    details: [
      {
        slug: "it-staffing",
        title: "IT Staff Augmentation",
        description: "Access our pool of vetted IT professionals, including developers, designers, and project managers, to supplement your existing team for short-term or long-term projects.",
        backgroundImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHdlYnNpdGUlMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTc0ODQwMzYwMHww&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        slug: "bpo-services",
        title: "BPO Services",
        description: "Outsource your business processes to us. We offer reliable and cost-effective solutions for customer support, data entry, and back-office operations.",
        backgroundImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxyZXNvdXJjZSUyMG1hbmFnZW1lbnR8ZW58MHx8fHwxNzQ4NDAzNjAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        slug: "rpo-services",
        title: "Recruitment Process Outsourcing (RPO)",
        description: "We manage your entire recruitment lifecycle, from sourcing and screening to onboarding, allowing you to focus on your core business while we find the best talent for you.",
        backgroundImage: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxyZWNydWl0bWVudHxlbnwwfHx8fDE3NDg0MDM2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      }
    ]
  }
];
