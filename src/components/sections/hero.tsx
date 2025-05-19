import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image'; // Keep for potential background pattern

export function Hero() {
  return (
    <section 
      className="relative bg-inlogic-dark-bg text-inlogic-text-light py-24 md:py-32 lg:py-40 overflow-hidden"
      style={{ backgroundImage: "url('https://placehold.co/1920x1080/1A237E/1A237E.png?text=.')", backgroundSize: 'cover', backgroundPosition: 'center' }} // Placeholder for subtle pattern
      data-ai-hint="abstract network background dark tech particles"
    >
      <div 
        className="absolute inset-0 bg-black/50" // Semi-transparent overlay for text readability
      ></div>
      <div className="container mx-auto px-4 text-center sm:text-left max-w-screen-xl relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-white">
              Trusted IT Support & <span className="text-primary">Consulting Services</span>
            </h1>
            <p className="mt-6 md:mt-8 text-lg sm:text-xl text-gray-300 max-w-xl">
              At Btruss IT Solutions, our mission is to provide you with IT solutions that transform your business. Since 20XX, we've focused on linking instructive insights with industry expertise to solve complex issues.
            </p>
            <div className="mt-8 md:mt-10">
              <Button 
                size="lg" 
                variant="default" // Default is red
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-md font-semibold shadow-md hover:shadow-lg transition-transform hover:scale-105 text-base" 
                asChild
              >
                <Link href="#about-us">View Company Profile</Link>
              </Button>
            </div>
          </div>
          {/* Optional: Right side can have an image or remain empty for focus on text */}
          {/* 
          <div className="hidden md:block">
            <Image 
              src="https://placehold.co/600x400.png" 
              alt="IT Consulting"
              data-ai-hint="modern office technology abstract"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
          */}
        </div>
      </div>
    </section>
  );
}
