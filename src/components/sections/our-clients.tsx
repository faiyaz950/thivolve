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

// Duplicate clients for a seamless loop
const duplicatedClients = [...clients, ...clients];

export function OurClients() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      id="our-clients"
      className="relative py-20 md:py-32 bg-black text-white overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/[0.01] to-transparent" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse" />
        </div>
      </div>

      <div className="relative container mx-auto px-6 max-w-screen-xl">
        <div className={cn(
          "text-center mb-16 md:mb-20 transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="relative inline-block">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400 mb-6 tracking-tight">
              Our Clients and Trusted Partners
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
          </div>
          <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto mt-6 leading-relaxed">
            We pride ourselves on delivering exceptional project outcomes to these clients through our commitment to quality and excellence.
          </p>
        </div>

        <div
          className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
        >
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll">
            {duplicatedClients.map((client, index) => (
              <li key={`client-${index}`}>
                <div
                  className={cn(
                    "group relative flex items-center justify-center p-8 h-48 w-80 bg-gradient-to-br from-neutral-800/40 via-neutral-900/60 to-black/80 backdrop-blur-xl rounded-2xl border border-white/5 overflow-hidden transition-all duration-700 hover:scale-105 hover:border-white/20 hover:shadow-2xl hover:shadow-primary/20",
                     isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                  )}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={200}
                    height={80}
                    className="filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110 object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
