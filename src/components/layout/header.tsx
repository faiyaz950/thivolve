import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-xl items-center justify-between mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          {/* In a real scenario, this might be an SVG or Image component */}
          <span className="text-2xl sm:text-3xl font-bold text-foreground">Btruss Digital Hub</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
          <Button variant="ghost" asChild className="text-sm font-medium text-foreground hover:bg-accent/10 hover:text-accent">
            <Link href="/">HOME</Link>
          </Button>
          <Button variant="ghost" asChild className="text-sm font-medium text-foreground hover:bg-accent/10 hover:text-accent">
            <Link href="#about-us">ABOUT US</Link>
          </Button>
          <Button variant="ghost" asChild className="text-sm font-medium text-foreground hover:bg-accent/10 hover:text-accent">
            <Link href="#services">SERVICES</Link>
          </Button>
          <Button variant="ghost" asChild className="text-sm font-medium text-foreground hover:bg-accent/10 hover:text-accent">
            <Link href="#our-work">OUR WORK</Link>
          </Button>
          <Button variant="ghost" asChild className="text-sm font-medium text-foreground hover:bg-accent/10 hover:text-accent">
            <Link href="#contact">CONTACT US</Link>
          </Button>
        </nav>
        <Button variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 text-sm font-semibold rounded-md shadow-md hover:shadow-lg transition-all" asChild>
          <Link href="#contact">Book A Meeting</Link>
        </Button>
        {/* TODO: Add mobile navigation menu */}
      </div>
    </header>
  );
}
