
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MobileNav } from '@/components/layout/mobile-nav';

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/#services", label: "Services" },
  { href: "/#our-work", label: "Our Work" },
  { href: "/#contact", label: "Contact Us" },
];

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30 w-full bg-black/30 backdrop-blur-md transition-colors duration-300">
        <div className="container flex h-20 max-w-screen-xl items-center justify-between mx-auto px-4 sm:px-6 lg:px-8 gap-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/btrussslogo.png"
              alt="Btruss Logo"
              width={120}
              height={30}
              priority
              className="drop-shadow-lg"
            />
          </Link>

          <nav className="hidden md:flex flex-grow justify-center items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              className="hidden md:inline-flex border-white text-white bg-transparent hover:bg-white hover:text-black transition-colors hover:scale-105"
              asChild
            >
              <Link href="/#contact">Book a Meeting</Link>
            </Button>
            <MobileNav navLinks={navLinks} triggerClassName="text-white hover:bg-white/20" />
          </div>
        </div>
      </header>
  );
}
