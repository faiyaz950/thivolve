import { Smartphone, Globe, LineChart, Palette, Users, HeartPulse, CreditCard, ShieldCheck, BrainCircuit, CheckCircle2, Server, Cloud, Shield, BarChart2, Code, MonitorSmartphone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

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

export function ServicesOverview() {
  return (
    <section
      id="services"
      className="py-16 md:py-24 text-foreground bg-[#0A0D1B] relative"
      style={{ backgroundImage: `url('/servicesbackground.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
      data-ai-hint="The background image is set to backy.png from the public folder"
    >
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {btrussMainServices.map((service) => {
            const MainIcon = service.icon || CheckCircle2; // Fallback icon
            return (
              <div
                key={service.title}
                className="relative"
              >
                <div className="flex flex-col">
                  <div className="flex items-center mb-2">
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    <span className="ml-2 text-white text-2xl">→</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.details}</p>
                </div>
                <div className="absolute bottom-0 left-0 w-1/3 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}