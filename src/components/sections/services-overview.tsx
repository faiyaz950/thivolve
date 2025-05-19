import { ServiceCard } from '@/components/ui/service-card';
import { Cpu, Stethoscope, CreditCard, ShieldCheck, Smartphone, Globe, AppWindow, Megaphone, Palette } from 'lucide-react';

const services = [
  {
    id: 'it',
    icon: Cpu,
    title: 'IT Services',
    description: 'We leverage technology to provide cutting-edge solutions that elevate your business. From startups to enterprises, we craft IT solutions that deliver results.',
    subServices: [
      'Mobile Application Development',
      'Website Development',
      'Web Application Development',
      'Digital Marketing',
      'Graphic Designing Services',
    ],
  },
  {
    id: 'healthcare',
    icon: Stethoscope,
    title: 'Healthcare Services',
    description: 'Our healthcare solutions prioritize quality and accessibility, supporting individuals and organizations with care that improves lives. We’re committed to innovative approaches that ensure a healthier tomorrow for all.',
  },
  {
    id: 'credit-card',
    icon: CreditCard,
    title: 'Credit Card Sales',
    description: 'We provide secure, convenient payment solutions to help businesses thrive. Our credit card sales services streamline transactions, offering fast and reliable systems that enhance customer satisfaction and boost revenue.',
  },
  {
    id: 'insurance',
    icon: ShieldCheck,
    title: 'Insurance Sales',
    description: 'Protecting your future is our priority. We offer comprehensive insurance plans tailored to your needs, providing peace of mind through expert guidance and dependable coverage for life’s uncertainties.',
  },
];

export function ServicesOverview() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">Our Comprehensive Services</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Blending technology, care, and expertise to drive your success and security.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              subServices={service.subServices}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
