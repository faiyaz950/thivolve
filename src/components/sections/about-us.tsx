import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function AboutUs() {
  return (
    <section id="about-us" className="py-16 md:py-24 bg-secondary text-foreground">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Thinking Outside the Box with Btruss</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Btruss, we believe innovation is key to unlocking potential. We are a modern IT, healthcare, and financial services company, specializing in crafting bespoke solutions that drive growth and efficiency. Our team thrives on tackling complex challenges with creative strategies, ensuring our clients stay ahead in a dynamic landscape.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We are service-oriented, committed to providing local solutions that are not only innovative but also reliable and impactful. Our core business spans IT development, healthcare support, credit card and insurance sales, AI integration, and resource outsourcing.
            </p>
             <Button 
              variant="link" 
              className="text-primary font-semibold p-0 h-auto text-base hover:underline" 
              asChild
            >
              <Link href="#services">
                EXPLORE OUR SERVICES <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div>
            <Image
              src="https://placehold.co/600x450.png"
              alt="Creative team brainstorming"
              data-ai-hint="creative collaboration"
              width={600}
              height={450}
              className="rounded-lg shadow-xl object-cover w-full h-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
