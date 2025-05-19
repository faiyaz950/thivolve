
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Settings2, HeartPulse, CreditCard, ShieldCheck, BrainCircuit, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface CoreService {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

const coreServicesData: CoreService[] = [
  {
    id: 1,
    icon: Settings2,
    title: "IT Services",
    description: "Comprehensive IT solutions including app/web development, digital marketing, and graphic design to elevate your business and drive innovation.",
    href: "#contact-cta",
  },
  {
    id: 2,
    icon: HeartPulse,
    title: "Healthcare Services",
    description: "Dedicated to providing quality and accessible healthcare solutions, supporting individuals and organizations with compassionate and innovative care.",
    href: "#contact-cta",
  },
  {
    id: 3,
    icon: CreditCard,
    title: "Credit Card Sales",
    description: "Secure and convenient payment processing solutions designed to help businesses thrive by streamlining transactions and enhancing customer satisfaction.",
    href: "#contact-cta",
  },
  {
    id: 4,
    icon: ShieldCheck,
    title: "Insurance Sales",
    description: "Offering tailored comprehensive insurance plans to protect your future, providing peace of mind through expert guidance and dependable coverage.",
    href: "#contact-cta",
  },
  {
    id: 5,
    icon: BrainCircuit,
    title: "AI Services",
    description: "Leveraging cutting-edge AI technologies to create intelligent solutions for data analysis, process automation, and actionable business insights.",
    href: "#contact-cta",
  },
  {
    id: 6,
    icon: Users,
    title: "Resource Outsource",
    description: "Supplying skilled professionals and critical expertise for both short-term and long-term projects, boosting your team's capacity and performance.",
    href: "#contact-cta",
  }
];

export function OurProducts() { // Component name remains OurProducts, section ID remains 'products'
  return (
    <section id="products" className="py-16 md:py-24 bg-inlogic-dark-bg text-inlogic-text-light">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 block">Service Spotlight</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Core Service Offerings</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {coreServicesData.map((service) => (
            <Card key={service.id} className="flex flex-col bg-inlogic-card-dark text-inlogic-text-light rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-border/30">
              <CardHeader className="p-6 pb-3">
                <div className="flex items-start space-x-4">
                  <service.icon className="w-10 h-10 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <CardTitle className="text-2xl font-semibold text-primary mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground text-base">{service.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardFooter className="p-6 pt-4 mt-auto flex justify-end">
                 <Button 
                  variant="default" 
                  className="bg-background text-foreground hover:bg-muted hover:text-muted-foreground transition-colors duration-300 hover:scale-105" 
                  asChild
                >
                   <Link href={service.href}>Read more <ArrowRight className="ml-2 h-4 w-4" /></Link>
                 </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        {/* "View All" button removed from this section
        <div className="text-center mt-16">
          <Button 
            variant="outline" 
            size="lg"
            className="border-border text-foreground hover:bg-muted hover:text-foreground transition-colors duration-300 hover:scale-105"
            asChild
          >
            <Link href="#products">View All Services</Link>
          </Button>
        </div>
        */}
      </div>
    </section>
  );
}
