import { VideoPlayer } from '@/components/ui/video-player';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ServiceCard } from '@/components/ui/service-card';
import { MonitorSmartphone, HeartPulse, CreditCard, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: MonitorSmartphone,
    title: "IT Services",
    description: "We leverage technology to provide cutting-edge solutions that elevate your business. From startups to enterprises, we craft IT solutions that deliver results.",
    subServices: ["Mobile Application Development", "Website Development", "Web Application Development", "Digital Marketing", "Graphic Designing Services"]
  },
  {
    icon: HeartPulse,
    title: "Healthcare Services",
    description: "Our healthcare solutions prioritize quality and accessibility, supporting individuals and organizations with care that improves lives. We’re committed to innovative approaches that ensure a healthier tomorrow for all."
  },
  {
    icon: CreditCard,
    title: "Credit Card Sales",
    description: "We provide secure, convenient payment solutions to help businesses thrive. Our credit card sales services streamline transactions, offering fast and reliable systems that enhance customer satisfaction and boost revenue."
  },
  {
    icon: ShieldCheck,
    title: "Insurance Sales",
    description: "Protecting your future is our priority. We offer comprehensive insurance plans tailored to your needs, providing peace of mind through expert guidance and dependable coverage for life’s uncertainties."
  }
];

export function ServicesOverview() {
  return (
    <section id="services" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Comprehensive Services</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            At Btruss Services Pvt Ltd, we’re dedicated to delivering innovative and reliable solutions that empower our clients across multiple industries. With a focus on excellence, we offer a diverse range of services tailored to your needs, blending technology, care, and expertise to drive success and security.
          </p>
        </div>
        
        <VideoPlayer 
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" 
          poster="https://placehold.co/1280x720.png"
          posterAiHint="dynamic abstract visual collage diverse company services futuristic IT network caring healthcare symbol secure financial graph protective insurance shield modern interconnected theme teal blue accents"
          className="mb-16 rounded-xl" // Added rounded-xl
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              subServices={service.subServices}
            />
          ))}
        </div>
        
        <div className="text-center">
           <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
            Btruss Services Pvt Ltd is your trusted partner, combining innovation and dedication to meet your goals. Whether it’s advancing your digital strategy, improving healthcare, simplifying payments, or securing your future, we’re here to deliver with excellence.
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground" 
            asChild
          >
            <Link href="#contact">Discuss Your Project</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
