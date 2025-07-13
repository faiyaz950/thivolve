
export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  details: {
    title: string;
    description: string;
    technologies?: string[];
  }[];
}

export const services: Service[] = [
  {
    slug: 'it-services',
    title: "IT Services",
    shortDescription: "We leverage technology to provide cutting-edge solutions that elevate your business, from web development to digital marketing.",
    longDescription: "Our comprehensive IT services are designed to empower your business with the technology it needs to succeed in a digital-first world. We cover everything from initial concept to final deployment and ongoing support.",
    details: [
      {
        title: "Mobile Application Development",
        description: "We build high-performance, user-friendly mobile apps for both iOS and Android. Whether you need a native app for maximum performance or a hybrid app for cross-platform reach, we have the expertise to deliver.",
        technologies: ["React Native", "Flutter", "Swift (iOS)", "Kotlin (Android)"]
      },
      {
        title: "Website Development",
        description: "From stunning marketing sites to complex web applications, we create responsive, fast, and secure websites that drive engagement and results. Our solutions are tailored to your specific business goals.",
        technologies: ["Next.js", "React", "Node.js", "Tailwind CSS", "WordPress"]
      },
      {
        title: "Digital Marketing",
        description: "Our digital marketing services are designed to increase your online visibility, attract more customers, and boost your revenue. We specialize in SEO, content marketing, and social media strategy.",
        technologies: ["SEO", "SEM", "Content Strategy", "Social Media Marketing"]
      },
      {
        title: "Graphics Designing",
        description: "We create compelling visual identities and marketing materials that capture your brand's essence. From logos and branding guides to digital ads and print materials, our designs make an impact.",
        technologies: ["Adobe Creative Suite", "Figma", "Canva"]
      }
    ]
  },
  {
    slug: 'healthcare-services',
    title: "Healthcare Services",
    shortDescription: "Our healthcare solutions prioritize quality and accessibility, supporting individuals and organizations with care that improves lives.",
    longDescription: "We provide comprehensive support services to the healthcare sector, focusing on improving patient outcomes and operational efficiency through technology and dedicated personnel.",
    details: [
       {
        title: "Medical Billing & Coding",
        description: "Accurate and timely medical billing and coding services to ensure smooth revenue cycle management for healthcare providers.",
      },
      {
        title: "Telehealth Platform Support",
        description: "Technical and administrative support for telehealth platforms, ensuring seamless virtual consultations for patients and doctors.",
      },
      {
        title: "Healthcare IT Staffing",
        description: "Providing skilled IT professionals who understand the unique challenges and compliance requirements of the healthcare industry.",
      }
    ]
  },
  {
    slug: 'credit-card-sales',
    title: "Credit Card Sales",
    shortDescription: "We provide secure, convenient payment solutions to help businesses thrive, streamlining transactions for enhanced customer satisfaction.",
    longDescription: "Our team specializes in connecting customers with the right financial products to meet their needs, offering a range of credit cards with various benefits.",
    details: [
       {
        title: "Direct Sales & Lead Generation",
        description: "Expert sales teams to promote and sell credit card products through direct marketing and qualified lead generation.",
      },
      {
        title: "Customer Onboarding",
        description: "A streamlined process for customer application, verification, and onboarding to ensure a positive start to their journey.",
      },
      {
        title: "Partnership with Financial Institutions",
        description: "We collaborate with leading banks and financial institutions to offer a diverse portfolio of credit card options.",
      }
    ]
  },
  {
    slug: 'insurance-sales',
    title: "Insurance Sales",
    shortDescription: "Protecting your future is our priority. We offer comprehensive insurance plans tailored to provide peace of mind.",
    longDescription: "We offer a wide array of insurance products to protect what matters most to you, from personal health to business assets, ensuring you have the right coverage.",
    details: [
      {
        title: "Life & Health Insurance",
        description: "Personalized life and health insurance plans to secure the financial future and well-being of individuals and families.",
      },
      {
        title: "General Insurance",
        description: "Comprehensive coverage for homes, vehicles, and travel, protecting you against unforeseen events and losses.",
      },
      {
        title: "Business & Commercial Insurance",
        description: "Tailored insurance solutions for businesses to mitigate risks related to operations, assets, and employees.",
      }
    ]
  },
  {
    slug: 'ai-services',
    title: "AI Services",
    shortDescription: "Leveraging cutting-edge AI to create intelligent solutions for data analysis, automation, and actionable business insights.",
    longDescription: "We help businesses harness the power of Artificial Intelligence to automate processes, gain deep insights from data, and create innovative products and services.",
    details: [
      {
        title: "AI-Powered Automation",
        description: "Implementing intelligent automation solutions to streamline repetitive tasks, reduce errors, and improve operational efficiency.",
      },
      {
        title: "Data Analysis & Insights",
        description: "Utilizing machine learning models to analyze complex datasets, identify trends, and provide actionable insights for strategic decision-making.",
      },
      {
        title: "Custom AI Model Development",
        description: "Building and training custom AI and machine learning models tailored to your specific business challenges and objectives.",
      }
    ]
  },
  {
    slug: 'resource-outsource',
    title: "Resource Outsource",
    shortDescription: "Supplying skilled professionals and critical expertise for both short-term and long-term projects, boosting your team's capacity.",
    longDescription: "Our resource outsourcing services provide you with the flexibility to scale your team with skilled professionals exactly when you need them, without the overhead of permanent hires.",
    details: [
       {
        title: "IT Staff Augmentation",
        description: "Supplement your in-house team with our expert developers, project managers, and QA engineers for specific projects or long-term needs.",
      },
      {
        title: "Customer Support Outsourcing",
        description: "Providing dedicated teams for technical and customer support, ensuring your customers receive timely and effective assistance.",
      },
      {
        title: "Back-Office Support",
        description: "Handling essential back-office tasks such as data entry, processing, and administrative duties to let you focus on your core business.",
      }
    ]
  }
];
