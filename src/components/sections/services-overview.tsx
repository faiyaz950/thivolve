import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Settings2, HeartPulse, CreditCard, ShieldCheck, BrainCircuit, Users, Smartphone, Laptop, MonitorPlay, Megaphone, Palette } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  subServices?: { name: string, icon: LucideIcon }[];
  href: string;
}

const services: Service[] = [
  {
    icon: Settings2,
    title: "IT Services",
    description: "Leveraging technology to provide cutting-edge solutions that elevate your business, from startups to enterprises.",
    subServices: [
      { name: "Mobile App Development", icon: Smartphone },
      { name: "Website Development", icon: MonitorPlay },
      { name: "Web Application Development", icon: Laptop },
      { name: "Digital Marketing", icon: Megaphone },
      { name: "Graphic Designing", icon: Palette },
    ],
    href: "#contact-cta",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Services",
    description: "Prioritizing quality and accessibility, supporting individuals and organizations with care that improves lives.",
    href: "#contact-cta",
  },
  {
    icon: CreditCard,
    title: "Credit Card Sales",
    description: "Secure, convenient payment solutions to help businesses thrive and streamline transactions.",
    href: "#contact-cta",
  },
  {
    icon: ShieldCheck,
    title: "Insurance Sales",
    description: "Comprehensive insurance plans tailored to your needs, providing peace of mind and dependable coverage.",
    href: "#contact-cta",
  },
  {
    icon: BrainCircuit,
    title: "AI Services",
    description: "Utilizing modern AI technologies to create intelligent solutions for data analysis, automation, and insights.",
    href: "#contact-cta",
  },
  {
    icon: Users,
    title: "Resource Outsource",
    description: "Providing skilled professionals and expertise for short-term and long-term projects to boost your team's performance.",
    href: "#contact-cta",
  },
];

export function ServicesOverview() {
  return (
    <section id="services" className="py-16 md:py-24 bg-inlogic-light-bg text-inlogic-text-dark">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 block">Services</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Explore All Services We Offer to Customers</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            At Btruss Services Pvt Ltd, we’re dedicated to delivering innovative and reliable solutions that empower our clients across multiple industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col bg-card text-card-foreground rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <service.icon className="w-10 h-10 text-primary" />
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                {service.subServices && (
                  <ul className="space-y-1.5 text-sm text-muted-foreground mb-4">
                    {service.subServices.map(sub => (
                      <li key={sub.name} className="flex items-center">
                        <sub.icon className="w-4 h-4 mr-2 text-primary/80" />
                        {sub.name}
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <Button 
                  variant="default" 
                  className="w-full bg-inlogic-button-dark text-white hover:bg-black transition-colors duration-300 hover:scale-105" 
                  asChild
                >
                  <Link href={service.href}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            variant="outline" 
            size="lg"
            className="border-foreground/30 text-foreground/80 hover:bg-foreground/10 hover:text-foreground transition-colors duration-300 hover:scale-105"
            asChild
          >
            <Link href="#services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
