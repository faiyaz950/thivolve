
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MobileNav } from '@/components/layout/mobile-nav';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/#services", label: "Services" },
  { href: "/portfolio", label: "Our Work" },
  { href: "/#contact", label: "Contact Us" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 transform-gpu",
      isScrolled 
        ? "bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50" 
        : "bg-black/20 backdrop-blur-md"
    )}>
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Animated border glow */}
      <div className={cn(
        "absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity duration-500",
        isScrolled && "opacity-100"
      )} />
      
      <div className="relative container flex h-20 max-w-screen-xl items-center justify-between mx-auto px-4 sm:px-6 lg:px-8 gap-4">
        {/* Logo with enhanced effects */}
        <Link href="/" className="group flex items-center relative">
          <div className="relative">
            {/* Logo glow effect */}
            <div className="absolute inset-0 bg-primary/20 rounded-lg opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500 scale-110" />
            <Image
              src="/whitelogo.png"
              alt="Btruss Logo"
              width={124}
              height={31}
              priority
              className="relative drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-500 group-hover:scale-105"
            />
          </div>
        </Link>

        {/* Navigation with enhanced styling */}
        <nav className="hidden md:flex flex-grow justify-center items-center space-x-8 lg:space-x-10">
          {navLinks.map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              className="group relative text-sm font-medium text-white/80 hover:text-white transition-all duration-300"
            >
              <span className="relative z-10 px-3 py-2 rounded-lg transition-all duration-300 group-hover:bg-white/5">
                {link.label}
              </span>
              
              {/* Hover effect underline */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-full transition-all duration-500" />
              
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* CTA Button with enhanced design */}
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="group hidden md:inline-flex relative border-2 border-white/20 text-white bg-white/5 hover:bg-primary/10 hover:text-white hover:border-primary/40 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 backdrop-blur-sm font-medium px-6 py-2.5 rounded-lg overflow-hidden"
            asChild
          >
            <Link href="/#contact" className="relative flex items-center gap-2">
              {/* Background shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              
              <span className="relative z-10">Book a Meeting</span>
              
              {/* Subtle indicator dot */}
              <div className="relative z-10 w-2 h-2 bg-primary/60 rounded-full animate-pulse" />
            </Link>
          </Button>
          
          {/* Mobile navigation with enhanced styling */}
          <div className="md:hidden">
            <MobileNav 
              navLinks={navLinks} 
              triggerClassName="text-white hover:bg-white/10 transition-all duration-300 border border-white/20 hover:border-white/40 backdrop-blur-sm" 
            />
          </div>
        </div>
      </div>
      
      {/* Progress bar for scroll */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/5">
        <div 
          className="h-full bg-gradient-to-r from-primary/60 via-primary to-primary/60 transition-all duration-300 origin-left"
          style={{ 
            transform: `scaleX(${Math.min(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight), 1)})` 
          }}
        />
      </div>
    </header>
  );
}
