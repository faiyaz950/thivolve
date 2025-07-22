"use client";

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

const services = [
    { slug: 'it-services', title: "IT Services", description: "We leverage technology to provide cutting-edge solutions that elevate your business, from web development to digital marketing." },
    { slug: 'healthcare-services', title: "Healthcare Services", description: "Our healthcare solutions prioritize quality and accessibility, supporting individuals and organizations with care that improves lives." },
    { slug: 'credit-card-sales', title: "Credit Card Sales", description: "We provide secure, convenient payment solutions to help businesses thrive, streamlining transactions for enhanced customer satisfaction." },
    { slug: 'insurance-sales', title: "Insurance Sales", description: "Protecting your future is our priority. We offer comprehensive insurance plans tailored to provide peace of mind." },
    { slug: 'ai-services', title: "AI Services", description: "Leveraging cutting-edge AI to create intelligent solutions for data analysis, automation, and actionable business insights." },
    { slug: 'resource-outsource', title: "Resource Outsource", description: "Supplying skilled professionals and critical expertise for both short-term and long-term projects, boosting your team's capacity." }
];

const partnerLogos = [
  { src: "https://images.unsplash.com/photo-1618236122998-3a2b7ae7e1df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxhYnN0cmFjdCUyMGxvZ298ZW58MHx8fHwxNzQ4MzM2MzgwfDA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Abstract Sphere Logo", hint: "abstract logo" },
  { src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxsb2dvfGVufDB8fHx8MTc0ODM5MzM4N3ww&ixlib=rb-4.1.0&q=80&w=1080", alt: "Geometric Company Logo", hint: "company logo" },
  { src: "https://images.unsplash.com/photo-1549268393-2144e991ba42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxtb25vZ3JhbSUyMGxvZ298ZW58MHx8fHwxNzQ4MzM2MzgwfDA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Monogram Logo", hint: "monogram logo" },
  { src: "https://images.unsplash.com/photo-1606135887196-99e693e5a5c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxtaW5pbWFsaXN0JTIwbG9nb3xlbnwwfHx8fDE3NDgzMzYzODB8MA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Minimalist Brand Logo", hint: "minimalist logo" },
  { src: "https://images.unsplash.com/photo-1611117775522-5a3371954152?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxzeW1ib2wlMjBsb2dvfGVufDB8fHx8MTc0ODM5MzQyMnww&ixlib=rb-4.1.0&q=80&w=1080", alt: "Symbolic Tech Logo", hint: "symbol logo" },
  { src: "https://images.unsplash.com/photo-1524311518928-857c436c6413?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxmaW5hbmNlJTIwbG9nb3xlbnwwfHx8fDE3NDgzMzYzODB8MA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Finance Corp Logo", hint: "finance logo" },
  { src: "https://images.unsplash.com/photo-1622359997463-13abb42a63e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxoZWFsdGhjYXJlJTIwbG9nb3xlbnwwfHx8fDE3NDgzMzYzODB8MA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Healthcare Brand Logo", hint: "healthcare logo" },
];


export function ServicesOverview() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="services"
      ref={ref}
      className={cn(
        "py-16 md:py-24 text-foreground bg-cover bg-center animate-on-scroll",
        isVisible && "is-visible"
      )}
      style={{ backgroundImage: `url('/newbgtaar.jpg')`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
      data-ai-hint="The background image is set to newbgtaar.jpg from the public folder"
    >
      <div className="container mx-auto px-4 max-w-screen-xl">
        {/* --- Services Content --- */}
        <div className="mb-16 md:mb-24">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-3">Our Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {services.map((service) => {
              return (
                <Link href={`/services/${service.slug}`} key={service.slug} className="group block">
                  <h3 className="flex items-center text-xl font-semibold text-white mb-3 transition-colors group-hover:text-primary">
                    {service.title}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </h3>
                  <p className="text-neutral-300 text-base leading-relaxed mb-4">{service.description}</p>
                  <div className="w-16 h-0.5 bg-primary/70 transition-all duration-300 group-hover:w-24 group-hover:bg-primary"></div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* --- Partners Content --- */}
        <div id="partners">
           <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12 md:mb-16">
            Our Clients and Brands We Partner With
          </h2>

          <div
            className="relative w-full overflow-hidden"
            style={{
              maskImage: 'linear-gradient(to right, transparent, white 20%, white 80%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, white 20%, white 80%, transparent)',
            }}
          >
            <div className="flex w-max animate-infinite-scroll">
              {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-64 mx-4 flex items-center justify-center p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-lg hover:shadow-primary/30 transition-all duration-300 aspect-video hover:-translate-y-1"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={150}
                    height={60}
                    className="object-contain h-12 md:h-16 w-auto brightness-0 invert"
                    data-ai-hint={logo.hint}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
