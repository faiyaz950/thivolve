import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center max-w-screen-xl">
        <div className="space-y-8 text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-muted-foreground leading-tight">
            We help businesses
          </h1>
          <p className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight -mt-2 sm:-mt-3">
            Transformative Digital Alchemy
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
            It&apos;s either you be part of the change or be at the front making it all happen. Btruss Digital Hub is where creative genius meets strategic mastery, all wrapped up in a warm, friendly atmosphere that feels just like home.
          </p>
          <div className="flex space-x-4">
            <Button size="lg" className="bg-foreground text-background hover:bg-foreground/80 px-8 py-3 rounded-md font-semibold shadow-md hover:shadow-lg transition-all" asChild>
              <Link href="#contact">BOOK A MEETING</Link>
            </Button>
            {/* Optional secondary button can be added here if needed */}
          </div>
        </div>
        <div className="md:mt-0 mt-12 space-y-6">
          <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105">
            <Image 
              src="https://placehold.co/600x375.png" 
              alt="Team collaboration with sticky notes" 
              data-ai-hint="team collaboration"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105">
              <Image 
                src="https://placehold.co/400x225.png" 
                alt="Modern office meeting" 
                data-ai-hint="business meeting"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105">
              <Image 
                src="https://placehold.co/400x225.png" 
                alt="Developer working on code" 
                data-ai-hint="developer coding"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
