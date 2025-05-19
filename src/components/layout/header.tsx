import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-primary text-xl sm:text-2xl">Btruss Digital Hub</span>
        </Link>
        <nav className="flex items-center space-x-2 sm:space-x-4">
          <Button variant="ghost" asChild>
            <Link href="#services">Services</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#testimonials">Testimonials</Link>
          </Button>
          <Button variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
            <Link href="#contact">Contact Us</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
