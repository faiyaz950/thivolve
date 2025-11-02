"use client";

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

const clients = [
  { name: "Tirupati", logo: "/tirupati_logo_transparent.png" },
  { name: "Globolosys", logo: "/globolosys.png" },
  { name: "Thivolve", logo: "/btrussslogo.png" },
  { name: "GTS", logo: "/gtslogo.png" },
  { name: "Malogo", logo: "/malogo.png" },
  { name: "Alphaw", logo: "/alphaw.png" },
  { name: "Ceragon", logo: "/ceragon.png" },
  { name: "Steelmann", logo: "/steelmann.png" },
  { name: "Emergentt", logo: "/emergentt.png" },
];

// Triple duplicate for smoother infinite scroll
const duplicatedClients = [...clients, ...clients, ...clients];

export function OurClients() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      id="our-clients"
      className="relative py-24 md:py-36 bg-black text-white overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full filter blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full filter blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="relative container mx-auto px-6 max-w-screen-xl">
        {/* Enhanced Header Section */}
        <div className={cn(
          "text-center mb-20 md:mb-28 transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="relative inline-block mb-6">
            {/* Decorative Elements */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-primary/10 rounded-full filter blur-3xl animate-pulse" />
            
            <div className="relative">
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-neutral-500 tracking-tight leading-tight">
                Our Clients &
              </h2>
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary tracking-tight leading-tight mt-2">
                Trusted Partners
              </h2>
            </div>
            
            {/* Enhanced Underline */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full blur-md animate-pulse" />
          </div>
          
          <p className="text-xl md:text-2xl text-neutral-300 max-w-4xl mx-auto mt-10 leading-relaxed font-light">
            We pride ourselves on delivering{' '}
            <span className="text-primary font-semibold">exceptional project outcomes</span>{' '}
            through our unwavering commitment to quality and excellence.
          </p>
        </div>

        {/* Enhanced Slider with Better Cards */}
        <div className="relative">
          {/* Gradient Masks for smoother fade */}
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />
          
          <div className="w-full inline-flex flex-nowrap overflow-hidden">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-6 animate-infinite-scroll hover:[animation-play-state:paused]">
              {duplicatedClients.map((client, index) => (
                <li key={`client-${index}`}>
                  <div
                    className={cn(
                      "group relative flex items-center justify-center h-64 w-96 bg-gradient-to-br from-neutral-800/60 via-neutral-900/80 to-black backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden transition-all duration-700 hover:scale-110 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/30 cursor-pointer",
                      isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                    )}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {/* Card Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-transparent transition-all duration-700" />
                    
                    {/* Animated Border Gradient */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 via-blue-400/20 to-primary/20 animate-spin-slow" style={{ animationDuration: '8s' }} />
                    </div>
                    
                    {/* Logo Container with Enhanced Padding */}
                    <div className="relative z-10 p-12 flex items-center justify-center w-full h-full">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={280}
                        height={120}
                        className="filter brightness-90 grayscale group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-700 group-hover:scale-110 object-contain max-w-full max-h-full drop-shadow-2xl"
                      />
                    </div>
                    
                    {/* Shine Effect on Hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    </div>
                    
                    {/* Bottom Accent Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/80 transition-all duration-700" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.333%);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
}
