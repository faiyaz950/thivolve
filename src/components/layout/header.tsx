import Link from 'next/link';
import Image from 'next/image';
import { MobileNav } from './mobile-nav';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background shadow-md">
      <div className="container flex h-20 max-w-screen-xl items-center justify-between mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image 
            src="/btruss-logo.png" // Assuming btruss-logo.png is in /public
            alt="Btruss Logo" 
            width={120} // Adjusted for a typical logo size in a dark header
            height={30}
            className="h-8 w-auto" 
          />
        </Link>
        
        <div className="flex items-center space-x-2">
          {/* Search bar omitted for simplicity, can be added later */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
