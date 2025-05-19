import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { MobileNav } from './mobile-nav'; // Will create this component

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-xl items-center justify-between mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image 
            src="/btruss-logo.png" 
            alt="Btruss Digital Hub Logo" 
            width={150} 
            height={40} // Adjusted size
            className="h-10 w-auto" // Adjusted class for consistency
          />
        </Link>
        
        <div className="flex items-center space-x-4">
          <Button 
            variant="default" 
            className="hidden sm:flex bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2 text-xs font-semibold rounded-md shadow-sm hover:shadow-md transition-all"
            asChild
          >
            <Link href="#contact">Get Quotation</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
