
"use client"; // Required for useState and useEffect

import type { Metadata } from 'next'; // Keep if you have static metadata
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { LoadingScreen } from '@/components/layout/loading-screen';
import { useState, useEffect } from 'react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// Static metadata can be defined outside if needed, or remove if fully dynamic
// export const metadata: Metadata = {
//   title: 'Btruss Digital Hub',
//   description: 'Innovative and reliable solutions by Btruss Services Pvt Ltd',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Simulate loading time or wait for initial assets
    const timer = setTimeout(() => {
      setIsLoading(false); // Trigger fade-out of loading screen
    }, 2000); // Duration loading screen is fully visible

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        {/* Title and meta description can be managed here for client components or via Next.js Metadata API for server components */}
        <title>Btruss Digital Hub</title>
        <meta name="description" content="Innovative and reliable solutions by Btruss Services Pvt Ltd" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {isMounted && <LoadingScreen show={isLoading} />}
        <div style={{ visibility: !isLoading && isMounted ? 'visible' : 'hidden' }}>
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
