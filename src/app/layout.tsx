
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
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulate loading time or wait for initial assets
    const primaryTimer = setTimeout(() => {
      setIsLoading(false); // Trigger fade-out of loading screen
    }, 2000); // Duration loading screen is fully visible (logo scaled in)

    // After fade-out animation completes, set content to visible to prevent overlap
    // Fade-out is 0.5s (500ms)
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 2000 + 500); // Total time before content is fully revealed and loading screen is gone

    return () => {
      clearTimeout(primaryTimer);
      clearTimeout(contentTimer);
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
        <LoadingScreen show={isLoading} />
        {/* Render children but control visibility to prevent hydration errors */}
        <div style={{ visibility: showContent ? 'visible' : 'hidden' }}>
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
