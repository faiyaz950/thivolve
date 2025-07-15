
import { services, type Service } from '@/lib/services-data';
import { notFound } from 'next/navigation';
import { Footer } from '@/components/layout/footer';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

// Generate static pages for each service at build time
export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Generate metadata for each service page
export async function generateMetadata({ params }: ServicePageProps) {
  const service = services.find(s => s.slug === params.slug);
  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }
  return {
    title: `${service.title} | Btruss Digital Hub`,
    description: service.description,
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find(s => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
        {/* Simple Header */}
        <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between max-w-screen-xl">
                 <Link href="/" className="flex items-center">
                    <Image
                    src="/btrussslogo.png"
                    alt="Btruss Logo"
                    width={120}
                    height={30}
                    priority
                    />
                </Link>
                <Link href="/#contact" className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition-colors">
                    Contact Us
                </Link>
            </div>
        </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 bg-cover bg-center text-white" style={{ backgroundImage: "url('/service-hero-bg.jpg')" }} data-ai-hint="abstract blue background">
             <div className="absolute inset-0 bg-black/60"></div>
             <div className="relative container mx-auto px-4 max-w-screen-lg text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight animate-fade-in" style={{ animationDelay: '200ms' }}>{service.title}</h1>
                <p className="mt-6 text-lg sm:text-xl text-neutral-200 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '400ms' }}>
                   {service.description}
                </p>
            </div>
        </section>

        {/* Details Section */}
        <section className="py-16 md:py-24 bg-white text-foreground">
            <div className="container mx-auto px-4 max-w-screen-xl">
                <div className="max-w-4xl mx-auto">
                     <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">What We Offer</h2>
                     <div className="space-y-10">
                        {service.details.map((detail, index) => (
                            <div 
                                key={index} 
                                className="flex flex-col md:flex-row items-start gap-8 p-8 rounded-xl shadow-lg border border-border/70 hover:shadow-primary/20 hover:border-primary/50 transition-all duration-300 animate-fade-in"
                                style={{ animationDelay: `${200 * (index + 1)}ms` }}
                                >
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary">
                                        <CheckCircle2 className="w-8 h-8 text-primary" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold mb-3">{detail.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{detail.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-muted/50">
             <div className="container mx-auto px-4 max-w-screen-md text-center">
                 <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
                 <p className="text-muted-foreground mb-8 text-lg">
                    Let's discuss how our {service.title} can help you achieve your business goals.
                 </p>
                 <Link href="/#contact" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-primary rounded-md hover:bg-primary/90 transition-transform hover:scale-105 shadow-lg">
                     Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
                 </Link>
             </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
