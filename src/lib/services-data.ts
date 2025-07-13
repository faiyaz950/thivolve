
export interface Service {
  slug: string;
  title: string;
  longDescription: string;
  details: {
    title: string;
    description:string;
    technologies?: string[];
  }[];
}

export const services: Service[] = [
  {
    slug: 'it-services',
    title: 'IT Services',
    longDescription: 'We leverage cutting-edge technology to provide comprehensive IT solutions that elevate your business, from custom software development to strategic digital marketing campaigns.',
    details: [
        {
            title: 'Website Development',
            description: 'Creating stunning, responsive, and high-performance websites tailored to your brand. Our solutions are built on modern frameworks to ensure scalability and an excellent user experience.',
            technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
        },
        {
            title: 'Mobile Application Development',
            description: 'Building native and hybrid mobile applications for iOS and Android. We focus on creating intuitive, engaging, and reliable apps that meet your users\' needs.',
            technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
        },
        {
            title: 'Digital Marketing',
            description: 'Boosting your online presence through targeted SEO, content marketing, and social media strategies. We help you reach your audience and convert leads into loyal customers.',
            technologies: ['SEO', 'Google Analytics', 'Content Strategy', 'Social Media'],
        },
        {
            title: 'Graphics Designing',
            description: 'Crafting compelling visual identities, from logos to complete branding packages. Our designs are creative, memorable, and aligned with your business goals.',
            technologies: ['Adobe Creative Suite', 'Figma', 'UI/UX Design'],
        }
    ]
  },
  {
    slug: 'healthcare-services',
    title: 'Healthcare Services',
    longDescription: 'Our healthcare solutions prioritize quality, accessibility, and efficiency, supporting individuals and organizations with technology that improves patient outcomes and streamlines operations.',
    details: [
        {
            title: 'Telemedicine Platforms',
            description: 'Developing secure and user-friendly telemedicine solutions to connect patients with healthcare providers remotely.',
        },
        {
            title: 'Electronic Health Records (EHR)',
            description: 'Implementing and customizing EHR systems to manage patient data efficiently and securely.',
        }
    ]
  },
  {
    slug: 'credit-card-sales',
    title: 'Credit Card Sales',
    longDescription: 'We provide secure, convenient, and tailored payment solutions to help businesses thrive. Our services streamline transactions and enhance customer satisfaction.',
    details: [
        {
            title: 'Payment Gateway Integration',
            description: 'Integrating robust payment gateways into your websites and applications for seamless transactions.',
        },
        {
            title: 'Point of Sale (POS) Systems',
            description: 'Providing modern POS systems that simplify in-person sales and inventory management.',
        }
    ]
  },
  {
    slug: 'insurance-sales',
    title: 'Insurance Sales',
    longDescription: 'Protecting your future is our priority. We offer comprehensive insurance plans and digital platforms tailored to provide peace of mind and simplify policy management.',
    details: [
        {
            title: 'Policy Management Portals',
            description: 'Creating online portals for customers to manage their insurance policies, file claims, and make payments.',
        },
        {
            title: 'Automated Underwriting Systems',
            description: 'Developing AI-powered systems to automate the insurance underwriting process, improving speed and accuracy.',
        }
    ]
  },
  {
    slug: 'ai-services',
    title: 'AI Services',
    longDescription: 'Leveraging cutting-edge artificial intelligence to create intelligent solutions for data analysis, process automation, and generating actionable business insights.',
    details: [
        {
            title: 'Machine Learning Models',
            description: 'Building custom machine learning models to solve complex business problems and predict future trends.',
            technologies: ['Python', 'TensorFlow', 'scikit-learn'],
        },
        {
            title: 'Natural Language Processing (NLP)',
            description: 'Implementing NLP solutions for chatbots, sentiment analysis, and text analytics to enhance customer interaction.',
        }
    ]
  },
  {
    slug: 'resource-outsource',
    title: 'Resource Outsourcing',
    longDescription: 'Supplying skilled professionals and critical expertise for both short-term and long-term projects, boosting your team\'s capacity and enabling you to scale effectively.',
    details: [
        {
            title: 'Dedicated Development Teams',
            description: 'Providing dedicated teams of developers, designers, and project managers to act as an extension of your in-house team.',
        },
        {
            title: 'IT Staff Augmentation',
            description: 'Filling skill gaps in your team with our expert professionals on a flexible basis.',
        }
    ]
  },
];
