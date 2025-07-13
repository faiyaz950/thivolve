
export interface ServiceDetail {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string; // The one from services-overview
  details: ServiceDetail[];
}

export const services: Service[] = [
    { 
        slug: 'it-services', 
        title: "IT Services", 
        shortDescription: "End-to-end technology solutions to build, innovate, and grow your business in the digital age.",
        description: "We leverage technology to provide cutting-edge solutions that elevate your business, from web development to digital marketing.",
        details: [
            {
                title: "Website Development",
                description: "We build responsive, high-performance websites tailored to your brand. Our technology stack includes modern frameworks like React and Next.js, ensuring a scalable and robust online presence."
            },
            {
                title: "Mobile Application Development",
                description: "Crafting intuitive and engaging mobile apps for both iOS and Android. We develop native applications using Swift/Kotlin and hybrid applications with frameworks like React Native and Flutter to reach a wider audience."
            },
            {
                title: "Digital Marketing",
                description: "Our digital marketing services are designed to increase your online visibility and drive growth. We specialize in SEO, PPC, content marketing, and social media strategies to connect you with your target audience."
            },
            {
                title: "Graphics Designing",
                description: "Creating stunning visual identities that resonate with your audience. From logos and branding to marketing materials, our designs are crafted to make a lasting impression."
            }
        ]
    },
    { 
        slug: 'healthcare-services', 
        title: "Healthcare Services", 
        shortDescription: "Providing compassionate and efficient healthcare support to improve patient outcomes and streamline operations.",
        description: "Our healthcare solutions prioritize quality and accessibility, supporting individuals and organizations with care that improves lives.",
        details: [
            {
                title: "Medical Billing & Coding",
                description: "Accurate and compliant medical billing and coding services to optimize revenue cycles for healthcare providers."
            },
            {
                title: "Telehealth Platform Support",
                description: "Technical and administrative support for telehealth platforms, ensuring seamless virtual care delivery for patients and doctors."
            },
        ]
    },
    { 
        slug: 'credit-card-sales', 
        title: "Credit Card Sales", 
        shortDescription: "Strategic sales solutions to connect customers with the right financial products to meet their needs.",
        description: "We provide secure, convenient payment solutions to help businesses thrive, streamlining transactions for enhanced customer satisfaction.",
        details: [
             {
                title: "Merchant Services",
                description: "Providing businesses with reliable and secure credit card processing solutions, including POS systems and online payment gateways."
            },
            {
                title: "Co-branded Card Programs",
                description: "Developing and managing co-branded credit card programs to enhance brand loyalty and provide value to customers."
            },
        ]
    },
    { 
        slug: 'insurance-sales', 
        title: "Insurance Sales", 
        shortDescription: "Offering a wide range of insurance products to protect what matters most to you and your business.",
        description: "Protecting your future is our priority. We offer comprehensive insurance plans tailored to provide peace of mind.",
        details: [
            {
                title: "Personal Insurance",
                description: "A comprehensive suite of personal insurance products, including auto, home, and life insurance, to safeguard your family's future."
            },
            {
                title: "Commercial Insurance",
                description: "Tailored insurance solutions for businesses of all sizes, covering liability, property, and workers' compensation."
            },
        ]
    },
    { 
        slug: 'ai-services', 
        title: "AI Services", 
        shortDescription: "Harnessing the power of Artificial Intelligence to unlock data-driven insights and automate complex processes.",
        description: "Leveraging cutting-edge AI to create intelligent solutions for data analysis, automation, and actionable business insights.",
        details: [
            {
                title: "Machine Learning Models",
                description: "Developing custom machine learning models to solve unique business challenges, from predictive analytics to natural language processing."
            },
            {
                title: "AI-Powered Automation",
                description: "Implementing AI-driven automation to streamline workflows, reduce operational costs, and improve efficiency."
            },
        ]
    },
    { 
        slug: 'resource-outsource', 
        title: "Resource Outsource", 
        shortDescription: "Providing skilled professionals to augment your team and accelerate your project timelines.",
        description: "Supplying skilled professionals and critical expertise for both short-term and long-term projects, boosting your team's capacity.",
        details: [
            {
                title: "IT Staff Augmentation",
                description: "Access our pool of talented developers, project managers, and QA engineers to fill skill gaps in your team."
            },
            {
                title: "Business Process Outsourcing (BPO)",
                description: "Outsource non-core business processes to us, allowing you to focus on your primary business objectives while we handle the rest."
            },
        ]
    }
];
