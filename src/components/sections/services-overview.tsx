import { Smartphone, Globe, LineChart, Palette, Users, HeartPulse, CreditCard, ShieldCheck, BrainCircuit, CheckCircle2, Server, Cloud, Shield, BarChart2, Code, MonitorSmartphone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Image from 'next/image';

interface MainService {
  title: string;
  details: string;
  icon: LucideIcon;
  subServices?: string[];
}

const btrussMainServices: MainService[] = [
  {
    title: "IT Services",
    details: "We leverage technology to provide cutting-edge solutions that elevate your business. Our offerings include:",
    icon: MonitorSmartphone,
  },
  {
    title: "Healthcare Services",
    details: "Our healthcare solutions prioritize quality and accessibility, supporting individuals and organizations with care that improves lives.",
    icon: HeartPulse,
  },
  {
    title: "Credit Card Sales",
    details: "We provide secure, convenient payment solutions to help businesses thrive, streamlining transactions for enhanced customer satisfaction.",
    icon: CreditCard,
  },
  {
    title: "Insurance Sales",
    details: "Protecting your future is our priority. We offer comprehensive insurance plans tailored to provide peace of mind.",
    icon: ShieldCheck,
  },
  {
    title: "AI Services",
    details: "Leveraging cutting-edge AI to create intelligent solutions for data analysis, automation, and actionable business insights.",
    icon: BrainCircuit,
  },
  {
    title: "Resource Outsource",
    details: "Supplying skilled professionals and critical expertise for both short-term and long-term projects, boosting your team's capacity.",
    icon: Users,
  }
];

// Content from former partners-banner.tsx
const partnerLogos = [
  {
    src: "https://images.unsplash.com/photo-1614959604920-935a03f0116e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxjb21wYW55JTIwbG9nbyUyMG1vbm9jaHJvbWV8ZW58MHx8fHwxNzQ4MDc0ODI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Company Logo Monochrome",
    hint: "company logo monochrome"
  },
  {
    src: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHx0ZWNoJTIwY2xpZW50JTIwbG9nb3xlbnwwfHx8fDE3NDgxNzM0MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Tech Client Logo",
    hint: "tech client logo"
  },
  {
    src: "https://images.unsplash.com/photo-1458819714733-e5ab3d536722?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwYXJ0bmVyJTIwbG9nbyUyMHNpbXBsZXxlbnwwfHx8fDE3NDgwNzQ4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Simple Partner Logo",
    hint: "partner logo simple"
  },
  {
    src: "https://images.unsplash.com/photo-1612222869049-d8ec83637a3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxjb3Jwb3JhdGUlMjBwYXJ0bmVyJTIwbG9nb3xlbnwwfHx8fDE3NDgwNzQ4MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Corporate Partner Logo Mark",
    hint: "corporate partner logo"
  },
  {
    src: "https://images.unsplash.com/photo-1487260211189-670c54da558d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxzdGFydHVwJTIwbG9nbyUyMG1pbmltYWxpc3R8ZW58MHx8fHwxNzQ4MDc0ODI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Minimalist Startup Logo",
    hint: "startup logo minimalist"
  },
  {
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxlbnRlcnByaXNlJTIwY2xpZW50JTIwYnJhbmR8ZW58MHx8fHwxNzQ4MDc0ODI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Enterprise Client Brand Symbol",
    hint: "enterprise client brand"
  },
  {
    src: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjb21wYW55JTIwbG9nbyUyMG1vbm9jaHJvbWV8ZW58MHx8fHwxNzQ4MDc0ODI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Abstract Company Logo",
    hint: "company logo monochrome"
  },
  {
    src: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHx0ZWNoJTIwY2xpZW50JTIwbG9nb3xlbnwwfHx8fDE3NDgxNzM0MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Tech Company Mark",
    hint: "tech client logo"
  },
  {
    src: "https://images.unsplash.com/photo-1586810146927-6503e5eb48fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxwYXJ0bmVyJTIwbG9nbyUyMHNpbXBsZXxlbnwwfHx8fDE3NDgwNzQ4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Simple Partner Mark",
    hint: "partner logo simple"
  },
  {
    src: "https://images.unsplash.com/photo-1504791635568-fa4993808e0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxjb3Jwb3JhdGUlMjBwYXJ0bmVyJTIwbG9nb3xlbnwwfHx8fDE3NDgwNzQ4MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Corporate Partner Icon",
    hint: "corporate partner logo"
  },
  {
    src: "https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxzdGFydHVwJTIwbG9nbyUyMG1pbmltYWxpc3R8ZW58MHx8fHwxNzQ4MDc0ODI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Minimalist Startup Icon",
    hint: "startup logo minimalist"
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxlbnRlcnByaXNlJTIwY2xpZW50JTIwYnJhbmR8ZW58MHx8fHwxNzQ4MDc0ODI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Enterprise Brand Mark",
    hint: "enterprise client brand"
  },
];
// End of content from former partners-banner.tsx


export function ServicesOverview() {
  return (
    <section
      id="services"
      className="py-16 md:py-24 text-foreground bg-cover bg-center"
      style={{ backgroundImage: `url('/newbgtaar.jpg')`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
      data-ai-hint="The background image is set to newbgtaar.jpg from the public folder"
    >
      <div className="container mx-auto px-4 max-w-screen-xl">
        {/* --- Services Content --- */}
        <div className="mb-16 md:mb-24">
          <div className="mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Our Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {btrussMainServices.map((service) => {
              const MainIcon = service.icon || CheckCircle2; // Fallback icon
              return (
                <div
                  key={service.title}
                  className="p-6 rounded-lg border border-border/70 shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out flex flex-col bg-card"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-primary/10 mr-4">
                      <MainIcon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">{service.title}</h3>
                  </div>
                  <p className="text-card-foreground/80 text-base leading-relaxed">{service.details}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- Partners Content --- */}
        <div id="partners">
           <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12 md:mb-16">
            Our Clients and Brands We Partner With
          </h2>

          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0%,#000_10%,#000_90%,transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
              {partnerLogos.map((logo, index) => (
                <li key={index}>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={150}
                    height={60}
                    className="object-contain h-10 md:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                    data-ai-hint={logo.hint}
                  />
                </li>
              ))}
            </ul>
            {/* Duplicate for seamless scroll */}
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
              {partnerLogos.map((logo, index) => (
                <li key={`duplicate-${index}`}>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={150}
                    height={60}
                    className="object-contain h-10 md:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                    data-ai-hint={logo.hint}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
