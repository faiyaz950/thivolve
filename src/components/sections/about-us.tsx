import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function AboutUs() {
  return (
    <section id="about-us" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">About Btruss Digital Hub</h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              At Btruss Services Pvt Ltd, we are more than just a service provider; we are your strategic partner in navigating the complexities of the digital and business landscape. Our mission is to empower your organization with innovative, reliable, and tailored solutions that drive growth, efficiency, and peace of mind.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With a foundation built on expertise, integrity, and a client-centric approach, we specialize in a diverse array of services, including cutting-edge IT solutions, compassionate healthcare support, secure financial services, and comprehensive insurance sales. We are committed to excellence in everything we do.
            </p>
            <Button 
              size="lg" 
              variant="default" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8" 
              asChild
            >
              <Link href="#contact">Learn More</Link>
            </Button>
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl order-1 md:order-2">
            <Image 
              src="https://placehold.co/600x450.png" 
              alt="Team collaborating in a modern Btruss office" 
              data-ai-hint="modern office diverse team discussion bright natural light"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
