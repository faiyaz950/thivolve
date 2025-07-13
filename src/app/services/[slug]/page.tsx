
import { services, type Service } from '@/lib/services-data';
import { notFound } from 'next/navigation';
import { Footer } from '@/components/layout/footer';
import { ArrowRight } from 'lucide-react';

// This function tells Next.js which pages to build at build time
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound(); // Triggers a 404 page if service slug is not found
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-grow">
        <section 
          className="py-24 md:py-32 bg-cover bg-center text-white" 
          style={{ backgroundImage: "url('/bluebgm.jpg')" }}
        >
          <div className="container mx-auto px-4 max-w-screen-xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">{service.title}</h1>
            <p className="text-lg sm:text-xl text-neutral-200 max-w-3xl">{service.longDescription}</p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 max-w-screen-xl">
                <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">What We Offer</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {service.details.map((detail, index) => (
                        <div key={index} className="group p-6 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                            <h3 className="flex items-center text-xl font-semibold text-foreground mb-3">
                                {detail.title}
                            </h3>
                            <p className="text-muted-foreground text-base leading-relaxed mb-4">{detail.description}</p>
                            {detail.technologies && (
                                <div>
                                    <h4 className="font-semibold text-foreground/80 mb-2">Technologies:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {detail.technologies.map((tech, techIndex) => (
                                            <span key={techIndex} className="bg-secondary text-secondary-foreground px-3 py-1 text-sm rounded-full">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
