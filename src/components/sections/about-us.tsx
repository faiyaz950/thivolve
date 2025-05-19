import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function AboutUs() {
  return (
    <section id="about-us" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">About Btruss Digital Hub</h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              At Btruss Services Pvt Ltd, we are more than just a service provider; we are your strategic partner in navigating the complexities of the digital and business landscape. Our mission is to empower your organization with innovative, reliable, and tailored solutions that drive growth, efficiency, and peace of mind.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With a foundation built on expertise, integrity, and a client-centric approach, we specialize in a diverse array of services, including cutting-edge IT solutions, compassionate healthcare support, secure financial services, and comprehensive insurance sales. We are committed to excellence in everything we do.
            </p>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
              <Link href="#contact">Learn More</Link>
            </Button>
          </div>
          <div className="relative aspect-square rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105">
            <Image 
              src="https://placehold.co/500x500.png" 
              alt="Our dedicated team at Btruss Digital Hub" 
              data-ai-hint="diverse team office"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
