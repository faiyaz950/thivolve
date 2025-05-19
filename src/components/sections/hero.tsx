import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary">
            Welcome to Btruss Digital Hub
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Btruss Services Pvt Ltd, we’re dedicated to delivering innovative and reliable solutions that empower our clients across multiple industries. With a focus on excellence, we offer a diverse range of services tailored to your needs, blending technology, care, and expertise to drive success and security.
          </p>
          <div className="flex space-x-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link href="#services">Our Services</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
           <Image 
            src="https://placehold.co/600x400.png" 
            alt="Btruss Services modern office" 
            data-ai-hint="modern office technology"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      </div>
    </section>
  );
}
