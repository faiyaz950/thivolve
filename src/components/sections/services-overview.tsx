
import { CheckCircle2, Smartphone, Globe, LineChart, Palette, Users, HeartPulse, CreditCard, ShieldCheck, BrainCircuit } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface MainService {
  title: string;
  details: string;
  subServices?: ServiceItem[];
}

const btrussMainServices: MainService[] = [
  {
    title: "IT Services",
    details: "We leverage technology to provide cutting-edge solutions that elevate your business. Our offerings include:",
    // Sub-services removed as per user request
  },
  {
    title: "Healthcare Services",
    details: "Our healthcare solutions prioritize quality and accessibility, supporting individuals and organizations with care that improves lives.",
  },
  {
    title: "Credit Card Sales",
    details: "We provide secure, convenient payment solutions to help businesses thrive, streamlining transactions for enhanced customer satisfaction.",
  },
  {
    title: "Insurance Sales",
    details: "Protecting your future is our priority. We offer comprehensive insurance plans tailored to provide peace of mind.",
  },
  {
    title: "AI Services",
    details: "Leveraging cutting-edge AI to create intelligent solutions for data analysis, automation, and actionable business insights.",
  },
  {
    title: "Resource Outsource",
    details: "Supplying skilled professionals and critical expertise for both short-term and long-term projects, boosting your team's capacity.",
  }
];


export function ServicesOverview() {
  const serviceIcons: Record<string, LucideIcon> = {
    "IT Services": Smartphone,
    "Healthcare Services": HeartPulse,
    "Credit Card Sales": CreditCard,
    "Insurance Sales": ShieldCheck,
    "AI Services": BrainCircuit,
    "Resource Outsource": Users,
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 red-line-accent">Our Services</h2>
          <p className="text-lg text-muted-foreground mx-auto max-w-2xl">
            Btruss Services Pvt Ltd empowers your growth by delivering innovative and reliable solutions across multiple industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {btrussMainServices.map((service) => {
            const MainIcon = serviceIcons[service.title] || CheckCircle2;
            return (
              <div
                key={service.title}
                className="p-6 rounded-lg border border-border/70 shadow-sm bg-card transform hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out flex flex-col"
              >
                <div className="flex items-start mb-3">
                  <MainIcon className="w-7 h-7 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.details}</p>
                  </div>
                </div>
                {/* Conditional rendering for subServices remains, but IT Services won't have them */}
                {service.subServices && (
                  <ul className="space-y-2.5 pl-11 mt-3">
                    {sub.subServices.map((subItem) => (
                      <li key={subItem.title} className="flex items-start text-sm">
                        <subItem.icon className="w-4 h-4 text-primary mr-2.5 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium text-foreground/90">{subItem.title}:</span>
                          <span className="text-muted-foreground ml-1">{subItem.description}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
