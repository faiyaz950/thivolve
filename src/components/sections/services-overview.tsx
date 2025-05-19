import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Briefcase, HeartPulse, CreditCard, ShieldCheck, Tv, Bot, Palette, Search, Users, Building, ShoppingCart, Utensils } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ServiceItem {
  icon: LucideIcon;
  name: string;
}

interface ServiceCardProps {
  bgColorClass: string;
  textColorClass: string;
  title: string;
  items: ServiceItem[];
  href: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ bgColorClass, textColorClass, title, items, href }) => (
  <Link href={href} className={`group block rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col ${bgColorClass} ${textColorClass}`}>
    <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
    <ul className="space-y-2 mb-6 flex-grow">
      {items.map((item) => (
        <li key={item.name} className="flex items-center">
          <item.icon className="w-5 h-5 mr-3_5 shrink-0" />
          <span className="text-sm md:text-base">{item.name}</span>
        </li>
      ))}
    </ul>
    <div className="mt-auto text-right">
      <ArrowRight className="w-8 h-8 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-transform duration-300" />
    </div>
  </Link>
);

const servicesData = [
  {
    bgColorClass: "bg-careem-blue", // Specific blue from globals.css variable
    textColorClass: "text-white",
    title: "IT Services",
    items: [
      { icon: Tv, name: "Web Development" },
      { icon: Bot, name: "Mobile App Development" },
      { icon: Palette, name: "Graphic Designing" },
      { icon: Search, name: "Digital Marketing" },
    ],
    href: "#contact",
  },
  {
    bgColorClass: "bg-careem-light-green", // Specific light green
    textColorClass: "text-careem-text-primary", // Dark text on light green
    title: "Healthcare Services",
    items: [
      { icon: Users, name: "Patient Management" },
      { icon: Building, name: "Clinic Solutions" },
      { icon: HeartPulse, name: "Wellness Programs" },
    ],
    href: "#contact",
  },
  {
    bgColorClass: "bg-careem-purple", // Specific purple
    textColorClass: "text-white",
    title: "Credit Card Sales",
    items: [
      { icon: CreditCard, name: "Payment Gateways" },
      { icon: ShoppingCart, name: "Merchant Accounts" },
      { icon: Briefcase, name: "Business Cards" },
    ],
    href: "#contact",
  },
  {
    bgColorClass: "bg-careem-dark-blue", // Specific dark blue
    textColorClass: "text-white",
    title: "Insurance Sales",
    items: [
      { icon: ShieldCheck, name: "Business Insurance" },
      { icon: HeartPulse, name: "Health Coverage" }, // Re-using, consider specific insurance icons
      { icon: Utensils, name: "Liability Protection" }, // Utensils as generic placeholder, replace if better found
    ],
    href: "#contact",
  },
];

export function ServicesOverview() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="text-left mb-12 md:mb-16 max-w-xl">
           <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Comprehensive Solutions</h2>
           <p className="text-lg text-muted-foreground">
             Driving success with tailored services in IT, Healthcare, Finance, and Insurance.
           </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
         <div className="text-center mt-16">
          <Button 
            size="lg" 
            variant="default"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-3 text-base" 
            asChild
          >
            <Link href="#contact">Discuss Your Needs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
