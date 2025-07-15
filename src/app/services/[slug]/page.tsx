
import { services, type Service } from '@/lib/services-data';
import { notFound } from 'next/navigation';
import { Footer } from '@/components/layout/footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, CheckCircle2, Code, Megaphone, Palette, Smartphone, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

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

const getIcon = (slug: string) => {
    switch (slug) {
        case 'website-development':
            return <Code className="w-8 h-8 text-primary" />;
        case 'mobile-application-development':
            return <Smartphone className="w-8 h-8 text-primary" />;
        case 'digital-marketing':
            return <Megaphone className="w-8 h-8 text-primary" />;
        case 'graphics-designing':
            return <Palette className="w-8 h-8 text-primary" />;
        default:
            return <Sparkles className="w-8 h-8 text-primary" />;
    }
};

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find(s => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
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
        <section className="relative py-24 md:py-32 bg-cover bg-center text-white" style={{ backgroundImage: "url('/service-hero-bg.jpg')" }} data-ai-hint="abstract blue background">
             <div className="absolute inset-0 bg-black/60"></div>
             <div className="relative container mx-auto px-4 max-w-screen-lg text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight animate-fade-in" style={{ animationDelay: '200ms' }}>{service.title}</h1>
                <p className="mt-6 text-lg sm:text-xl text-neutral-200 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '400ms' }}>
                   {service.description}
                </p>
            </div>
        </section>

        <section className="py-16 md:py-24 bg-white text-foreground">
            <div className="container mx-auto px-4 max-w-screen-xl">
                <div className="grid md:grid-cols-5 gap-16">
                    <div className="md:col-span-3">
                         <h2 className="text-3xl sm:text-4xl font-bold mb-8">What We Offer</h2>
                         <Accordion type="single" collapsible className="w-full space-y-6">
                            {service.details.map((detail, index) => (
                                <AccordionItem 
                                    key={detail.slug} 
                                    value={detail.slug}
                                    className="border-none"
                                >
                                    <div 
                                        className="bg-cover bg-center rounded-xl shadow-lg border border-border/70 overflow-hidden transition-all duration-300 animate-fade-in hover:shadow-primary/20" 
                                        style={{ backgroundImage: `url(${detail.backgroundImage})`, animationDelay: `${200 * (index + 1)}ms`}}
                                    >
                                        <div className="bg-black/60 p-6 backdrop-blur-sm">
                                            <AccordionTrigger className="w-full text-left text-white hover:no-underline">
                                                <div className="flex items-center gap-4">
                                                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary">
                                                        {getIcon(detail.slug)}
                                                    </div>
                                                    <div>
                                                        <h3 className="text-2xl font-semibold">{detail.title}</h3>
                                                    </div>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="pt-4 text-neutral-200">
                                                <p className="mb-4 leading-relaxed">{detail.description}</p>
                                                <ul className="space-y-2 list-inside list-disc pl-2">
                                                    {detail.subDetails?.map((sub, i) => (
                                                        <li key={i} className="leading-relaxed">{sub}</li>
                                                    ))}
                                                </ul>
                                            </AccordionContent>
                                        </div>
                                    </div>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    <aside className="md:col-span-2">
                         <div className="sticky top-28 bg-muted/30 p-8 rounded-xl border border-border">
                            <h3 className="text-2xl font-bold mb-6">All Services</h3>
                            <ul className="space-y-3">
                                {services.map(s => (
                                    <li key={s.slug}>
                                        <Link href={`/services/${s.slug}`} className={`flex items-center justify-between p-4 rounded-md transition-colors text-lg font-medium ${s.slug === params.slug ? 'bg-primary text-primary-foreground' : 'bg-background hover:bg-accent hover:text-accent-foreground'}`}>
                                            <span>{s.title}</span>
                                            <ArrowRight className="h-5 w-5" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </section>

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

    