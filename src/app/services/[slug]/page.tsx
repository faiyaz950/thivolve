
import { services, type Service } from '@/lib/services-data';
import { notFound } from 'next/navigation';
import { Footer } from '@/components/layout/footer';
import { ArrowRight, ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
          <div className="container mx-auto px-4 max-w-screen-xl h-20 flex items-center justify-between">
              <Link href="/" className="flex items-center">
                <Image
                  src="/btrussslogo.png"
                  alt="Btruss Logo"
                  width={120}
                  height={30}
                  priority
                />
              </Link>
              <nav className="flex items-center text-sm font-medium text-muted-foreground">
                <Link href="/" className="flex items-center hover:text-primary transition-colors">
                  <Home className="w-4 h-4 mr-1" />
                  Home
                </Link>
                <ChevronRight className="w-4 h-4 mx-1" />
                <span className="text-foreground">{service.title}</span>
              </nav>
          </div>
      </header>
      <main className="flex-grow">
        <section 
          className="py-20 md:py-32 bg-cover bg-center text-white" 
          style={{ backgroundImage: `url('/bluebg.jpg')` }}
          data-ai-hint="blue abstract background"
        >
          <div className="container mx-auto px-4 max-w-screen-xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{service.title}</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90">
              {service.shortDescription}
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 max-w-screen-xl">
            <div className="grid md:grid-cols-12 gap-8 lg:gap-16">
                <div className="md:col-span-8">
                    <h2 className="text-3xl font-bold mb-6 text-foreground">Service Details</h2>
                    <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                       {service.details.map((detail, index) => (
                           <div key={index}>
                               <h3 className="text-xl font-semibold text-foreground mb-2">{detail.title}</h3>
                               <p>{detail.description}</p>
                           </div>
                       ))}
                    </div>
                </div>
                <aside className="md:col-span-4">
                    <div className="sticky top-28 bg-card border border-border p-6 rounded-xl shadow-sm">
                        <h3 className="text-xl font-semibold text-card-foreground mb-4">All Services</h3>
                        <ul className="space-y-2">
                            {services.map((s) => (
                                <li key={s.slug}>
                                    <Link href={`/services/${s.slug}`} className={`flex items-center justify-between p-3 rounded-md transition-colors ${s.slug === params.slug ? 'bg-primary text-primary-foreground' : 'hover:bg-accent hover:text-accent-foreground'}`}>
                                        <span>{s.title}</span>
                                        <ChevronRight className="w-4 h-4" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
