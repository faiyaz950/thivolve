
import { notFound } from 'next/navigation';
import { services, type Service } from '@/lib/services-data';
import ServicePageClient from '@/components/sections/service-page-client';

export default function ModernServicesPage({ params }: { params: { slug: string } }) {
  const service = services.find(s => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  // Render the default service page for all other slugs
  return <ServicePageClient service={service} />;
}
