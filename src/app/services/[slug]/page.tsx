
import { notFound } from 'next/navigation';
import { services, type Service } from '@/lib/services-data';
import ServicePageClient from '@/components/sections/service-page-client';
import ItServicesPage from '@/components/sections/it-services-page';

export default function ModernServicesPage({ params }: { params: { slug: string } }) {
  const service = services.find(s => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  // Conditionally render a different component for 'it-services'
  if (params.slug === 'it-services') {
    return <ItServicesPage service={service} />;
  }

  // Render the default service page for all other slugs
  return <ServicePageClient service={service} />;
}
