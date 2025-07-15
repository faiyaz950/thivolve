
"use client";

import { ArrowRight, Eye } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
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
  { src: "https://images.unsplash.com/photo-1614959604920-935a03f0116e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxjb21wYW55JTIwbG9nbyUyMG1vbm9jaHJvbWV8ZW58MHx8fHwxNzQ4MDc0ODI1fDA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Innovate Inc. Logo", hint: "company logo monochrome" },
  { src: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHx0ZWNoJTIwY2xpZW50JTIwbG9nbyxlbnwwfHx8fDE3NDgxNzM0MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Quantum Tech Logo", hint: "tech client logo" },
  { src: "https://images.unsplash.com/photo-1458819714733-e5ab3d536722?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwYXJ0bmVyJTIwbG9nbyUyMHNpbXBsZXxlbnwwfHx8fDE3NDgwNzQ4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Apex Solutions Logo", hint: "partner logo simple" },
  { src: "https://images.unsplash.com/photo-1612222869049-d8ec83637a3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxjb3Jwb3JhdGUlMjBwYXJ0bmVyJTIwbG9nb3xlbnwwfHx8fDE3NDgwNzQ4MjV8MA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Stellar Corp Logo", hint: "corporate partner logo" },
  { src: "https://images.unsplash.com/photo-1487260211189-670c54da558d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxzdGFydHVwJTIwbG9nbyUyMG1pbmltYWxpc3R8ZW58MHx8fHwxNzQ4MDc0ODI2fDA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Momentum Startup Logo", hint: "startup logo minimalist" },
  { src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxlbnRlcnByaXNlJTIwY2xpZW50JTIwYnJhbmR8ZW58MHx8fHwxNzQ4MDc0ODI2fDA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Global Trust Enterprise Logo", hint: "enterprise client brand" },
  { src: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNvbXBhbnklMjBsb2dvfGVufDB8fHx8MTc0ODA3NDgyNXww&ixlib=rb-4.1.0&q=80&w=1080", alt: "Visionary Abstract Logo", hint: "company logo abstract" },
  { src: "https://source.unsplash.com/150x60/?logo,tech", alt: "FutureNet Logo", hint: "tech logo" },
  { src: "https://source.unsplash.com/150x60/?logo,finance", alt: "Gold Standard Finance", hint: "finance logo" },
];


export function ServicesOverview() {
    const [showAll, setShowAll] = useState(false);

    const logosToShow = showAll ? partnerLogos : partnerLogos.slice(0, 1);
  return (
    <section
      id="services"
      className="py-16 md:py-24 text-foreground bg-cover bg-center"
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
            className={cn(
                "grid gap-8 transition-all duration-700 ease-in-out",
                showAll
                ? "grid-cols-2 md:grid-cols-3"
                : "grid-cols-1"
            )}
            >
            {logosToShow.map((logo, index) => (
              <div
                key={index}
                className={cn(
                    "group relative flex items-center justify-center p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-lg hover:shadow-primary/30 transition-all duration-300 aspect-video hover:-translate-y-1",
                    !showAll && index > 0 ? "hidden" : "animate-fade-in",
                    showAll ? "animate-scale-in" : ""
                )}
                style={{animationDelay: `${index * 100}ms`}}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={60}
                  className="object-contain h-10 w-auto opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  data-ai-hint={logo.hint}
                />
              </div>
            ))}
          </div>
          {!showAll && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAll(true)}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90"
              >
                View All
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
