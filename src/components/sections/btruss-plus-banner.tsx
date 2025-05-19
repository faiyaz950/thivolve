import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function BtrussPlusBanner() {
  return (
    <section className="py-12 md:py-16 bg-careem-dark-green-banner text-primary-foreground">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12 rounded-xl bg-black/10">
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Btruss+ Benefits</h2>
            <p className="text-lg sm:text-xl text-primary-foreground/80 mb-6">
              Unlock exclusive services, priority support, and special offers with our premium Btruss+ membership. Elevate your experience today.
            </p>
            <Button 
              variant="outline"
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-careem-dark-green-banner font-semibold px-8"
              asChild
            >
              <Link href="#contact">Discover Btruss+</Link>
            </Button>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <Image
              src="https://placehold.co/300x200.png"
              alt="Btruss Plus Benefits Illustration"
              width={300}
              height={200}
              className="rounded-lg shadow-md"
              data-ai-hint="abstract benefits graphic premium membership concept"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
