import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function InnovateWithBtruss() {
  return (
    <section id="innovate" className="py-16 md:py-24 bg-secondary"> {/* Light mint green background */}
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
            <Image 
              src="https://placehold.co/600x450.png" 
              alt="Developer working on cutting-edge technology at Btruss" 
              data-ai-hint="developer code modern tech close up screen"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Innovate with Btruss</h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Btruss is creating cutting-edge technology, every day. We are on a mission to simplify and improve the lives of people and build an awesome organisation that inspires. Join us in our journey to make a difference.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We tackle complex challenges with creative solutions, leveraging the latest advancements to deliver impactful results for our clients and the community. Our team is passionate about pushing boundaries and shaping the future.
            </p>
            <Button 
              size="lg" 
              variant="default" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8" 
              asChild
            >
              <Link href="#contact">Explore Careers</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
