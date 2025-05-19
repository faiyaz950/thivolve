import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-xl items-center justify-between mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image 
            src="/btruss-logo.png" 
            alt="Btruss Digital Hub Logo" 
            width={180} 
            height={48}
            className="h-12 w-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          <Button variant="ghost" asChild className="text-xs font-medium text-foreground hover:bg-accent/10 hover:text-accent">
            <Link href="/">HOME</Link>
          </Button>
          <Button variant="ghost" asChild className="text-xs font-medium text-foreground hover:bg-accent/10 hover:text-accent">
            <Link href="#about-us">ABOUT US</Link>
          </Button>
          <Button variant="ghost" asChild className="text-xs font-medium text-foreground hover:bg-accent/10 hover:text-accent">
            <Link href="#services">SERVICES</Link>
          </Button>
          <Button variant="ghost" asChild className="text-xs font-medium text-foreground hover:bg-accent/10 hover:text-accent">
            <Link href="#our-work">OUR WORK</Link>
          </Button>
          <Button variant="ghost" asChild className="text-xs font-medium text-foreground hover:bg-accent/10 hover:text-accent">
            <Link href="#contact">CONTACT US</Link>
          </Button>
        </nav>
        <Button 
          variant="default" 
          className="bg-accent hover:bg-accent/90 text-accent-foreground px-5 py-2 text-xs font-semibold rounded-md shadow-md hover:shadow-lg transition-all" 
          asChild
        >
          <Link href="#contact">Book A Meeting</Link>
        </Button>
        {/* TODO: Add mobile navigation menu */}
      </div>
    </header>
  );
}
