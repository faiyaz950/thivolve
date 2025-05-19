import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary via-primary/90 to-green-400 text-primary-foreground py-24 md:py-32 lg:py-40">
      <div className="container mx-auto px-4 text-center max-w-screen-md">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
          Btruss Digital Hub
        </h1>
        <p className="mt-4 md:mt-6 text-xl sm:text-2xl md:text-3xl font-light max-w-2xl mx-auto">
          The everything app for your business success.
        </p>
        <p className="mt-6 md:mt-8 text-base sm:text-lg text-primary-foreground/80 max-w-xl mx-auto">
          Innovative solutions in IT, Healthcare, Finance, and Insurance, all tailored to elevate your enterprise.
        </p>
        <div className="mt-8 md:mt-10">
          <Button 
            size="lg" 
            className="bg-background hover:bg-background/90 text-foreground px-8 py-3 rounded-md font-semibold shadow-md hover:shadow-lg transition-all text-base" 
            asChild
          >
            <Link href="#services">Explore Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
