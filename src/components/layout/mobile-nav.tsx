
"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#services", label: "Services Overview" },
  { href: "#products", label: "Our Services" }, // Changed label, href remains #products
  { href: "#faq", label: "FAQ" },
  { href: "#contact-cta", label: "Contact Us" },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="sm:hidden text-foreground hover:bg-accent/20">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-xs bg-background p-0 text-foreground border-l border-border/50">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-border/50">
            <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
              <Image 
                src="/btruss-logo.png" 
                alt="Btruss Logo" 
                width={120} 
                height={30}
                className="h-8 w-auto"
              />
            </Link>
            <SheetClose asChild>
              <Button variant="ghost" size="icon" className="text-foreground hover:bg-accent/20">
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </SheetClose>
          </div>
          <nav className="flex-grow p-6 space-y-4">
            {navLinks.map((link) => (
              <SheetClose key={link.href} asChild>
                <Link
                  href={link.href}
                  className="block text-lg font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </SheetClose>
            ))}
          </nav>
          <div className="p-6 border-t border-border/50">
            <SheetClose asChild>
              <Button 
                variant="default" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-transform hover:scale-105"
                asChild
                onClick={() => setIsOpen(false)}
              >
                <Link href="#contact-cta">Book a Demo</Link>
              </Button>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
