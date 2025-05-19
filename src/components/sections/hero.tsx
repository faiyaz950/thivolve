import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Hero() {
  return (
    <section id="home" className="py-20 md:py-28 lg:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-foreground mb-6">
              Btruss: Elevating Your <span className="text-primary">Digital Strategy</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto md:mx-0 mb-8">
              From vision to digital reality, we partner with businesses to craft innovative IT solutions, enhance healthcare services, streamline financial processes, and secure futures. Discover how Btruss transforms challenges into opportunities.
            </p>
            <Button 
              size="lg" 
              className="bg-foreground text-background hover:bg-foreground/80 px-8 py-3 rounded-md font-semibold shadow-md hover:shadow-lg transition-transform hover:scale-105 text-base" 
              asChild
            >
              <Link href="#contact">Book a Meeting</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 sm:col-span-1">
              <Image 
                src="https://placehold.co/600x400.png" 
                alt="Modern office collaboration"
                data-ai-hint="modern office team"
                width={600}
                height={400}
                className="rounded-lg shadow-xl aspect-video object-cover w-full h-auto transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="col-span-2 sm:col-span-1 flex flex-col gap-4">
              <Image 
                src="https://placehold.co/300x200.png" 
                alt="UX design process"
                data-ai-hint="ux design process"
                width={300}
                height={200}
                className="rounded-lg shadow-xl aspect-video object-cover w-full h-auto transform hover:scale-105 transition-transform duration-300"
              />
              <Image 
                src="https://placehold.co/300x180.png" 
                alt="Data analytics dashboard"
                data-ai-hint="data analytics"
                width={300}
                height={180}
                className="rounded-lg shadow-xl aspect-[16/10] object-cover w-full h-auto transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
