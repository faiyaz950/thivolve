
import { notFound } from 'next/navigation';
import { getServiceBySlug, services } from '@/lib/services-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface ServicePageParams {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageParams) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} | Btruss Digital Hub`,
    description: service.description,
  };
}

export default function ServicePage({ params }: ServicePageParams) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
        <header className="absolute top-0 left-0 right-0 z-30 w-full bg-black/30 backdrop-blur-md">
            <div className="container flex h-20 max-w-screen-xl items-center justify-between mx-auto px-4 sm:px-6 lg:px-8">
                 <Link href="/" className="flex items-center">
                    <Image
                    src="/btrussslogo.png"
                    alt="Btruss Logo"
                    width={120}
                    height={30}
                    priority
                    />
                </Link>
                <Button asChild>
                    <Link href="/#contact">Contact Us</Link>
                </Button>
            </div>
        </header>

      <main className="flex-grow">
        {/* Service Hero Section */}
        <section
          className="relative pt-32 pb-20 md:pt-40 md:pb-28 text-white bg-cover bg-center"
          style={{ backgroundImage: `url(${service.heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="container mx-auto px-4 max-w-screen-xl relative z-20 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              {service.title}
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed">
              {service.description}
            </p>
          </div>
        </section>

        {/* Service Details Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 max-w-screen-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.details.map((detail, index) => (
                <Card key={index} className="bg-card border-border/50 shadow-lg hover:shadow-primary/20 transition-shadow duration-300 transform hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                       <div className="p-2 bg-primary/10 rounded-full">
                         <detail.icon className="w-6 h-6 text-primary" />
                       </div>
                       <CardTitle className="text-xl font-semibold text-card-foreground">{detail.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{detail.description}</p>
                    <ul className="space-y-2">
                      {detail.points.map((point, pIndex) => (
                        <li key={pIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Other Services Section */}
         <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 max-w-screen-xl">
             <h2 className="text-3xl sm:text-4xl font-bold text-center text-secondary-foreground mb-12">
              Explore Our Other Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 text-center">
                {services
                .filter(s => s.slug !== params.slug)
                .map(otherService => (
                    <Link key={otherService.slug} href={`/services/${otherService.slug}`}>
                        <div className="group p-6 bg-card rounded-lg shadow-md hover:shadow-xl hover:bg-primary/5 transition-all duration-300 transform hover:-translate-y-2">
                         <otherService.icon className="w-10 h-10 mx-auto text-primary mb-4 transition-transform group-hover:scale-110" />
                        <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">{otherService.title}</h3>
                        </div>
                    </Link>
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
