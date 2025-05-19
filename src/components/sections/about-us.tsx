// This component is repurposed for the "Why Choose Us" section
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function AboutUs() {
  return (
    <section id="about-us" className="py-16 md:py-24 bg-inlogic-light-bg text-inlogic-text-dark">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 block">About Btruss</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Why Choose Btruss IT Solutions?</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We are service-oriented to satisfying local solutions that are innovative. Our main business scope is IT. We are committed to providing our clients with cutting-edge IT solutions that enhance efficiency, foster growth, and ensure security.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team of experts leverages the latest technologies and industry best practices to deliver tailored services that meet your unique business needs. Partner with us to navigate the complexities of the digital landscape.
            </p>
             <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300 hover:scale-105" 
              asChild
            >
              <Link href="#contact-cta">Learn More</Link>
            </Button>
          </div>
          <div className="space-y-8">
            <div className="bg-card p-6 rounded-lg shadow-lg border border-border/20">
              <h3 className="text-xl font-semibold text-primary mb-2">Our Mission</h3>
              <p className="text-card-foreground text-opacity-80">
                To empower businesses with innovative and reliable IT solutions, fostering growth and efficiency through technology and expertise.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg border border-border/20">
              <h3 className="text-xl font-semibold text-primary mb-2">Our Vision</h3>
              <p className="text-card-foreground text-opacity-80">
                To be a leading IT service provider, recognized for our commitment to client success, technological excellence, and ethical practices.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg border border-border/20">
              <h3 className="text-xl font-semibold text-primary mb-2">Our Values</h3>
              <p className="text-card-foreground text-opacity-80">
                Integrity, Innovation, Customer-Centricity, Excellence, and Collaboration drive every aspect of our operations and client interactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
