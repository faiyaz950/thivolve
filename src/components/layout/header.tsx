import Link from 'next/link';
import Image from 'next/image';
import { MobileNav } from './mobile-nav';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#our-work", label: "Our Work" },
  { href: "#contact", label: "Contact Us" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-background/95 backdrop-blur-sm shadow-sm">
      <div className="container flex h-20 max-w-screen-xl items-center justify-between mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="https://placehold.co/130x32.png?text=BtrussTemp"
            alt="Btruss Logo (Temporary Placeholder)"
            width={130}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <Button variant="default" className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 transition-transform hover:scale-105" asChild>
            <Link href="#contact">Book a Meeting</Link>
          </Button>
          <MobileNav navLinks={navLinks} />
        </div>
      </div>
    </header>
  );
}
