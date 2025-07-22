
"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface NavLink {
  href: string;
  label: string;
}

interface MobileNavProps {
  navLinks: NavLink[];
  triggerClassName?: string;
}

export function MobileNav({ navLinks, triggerClassName }: MobileNavProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className={cn(
            "md:hidden text-white hover:bg-white/20",
            triggerClassName
          )}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent 
        side="right" 
        className="w-full max-w-xs bg-neutral-900/90 backdrop-blur-md p-0 text-white border-l border-neutral-700"
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-neutral-700">
            <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
              <Image 
                src="/btrusssl.png" 
                alt="Btruss Logo" 
                width={120} 
                height={30}
                className="h-8 w-auto drop-shadow-lg"
              />
            </Link>
            <SheetClose asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
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
                  className="block text-lg font-medium text-white/90 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </SheetClose>
            ))}
          </nav>
          <div className="p-6 border-t border-neutral-700">
            <SheetClose asChild>
              <Button 
                variant="default" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-transform hover:scale-105"
                asChild
                onClick={() => setIsOpen(false)}
              >
                <Link href="#contact">Book a Meeting</Link>
              </Button>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
