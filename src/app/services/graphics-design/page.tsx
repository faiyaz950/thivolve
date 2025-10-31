
import { ServicePageClient } from '@/components/sections/service-page-client';
import { services } from '@/lib/services-data';

export default function GraphicsDesignPage() {
  const service = services.find(s => s.slug === 'it-services');
  const serviceDetail = service?.details.find(d => d.slug === 'graphics-designing');

  if (!service || !serviceDetail) {
    return <div>Service not found</div>;
  }
  
  const pageData = {
    ...service,
    details: [serviceDetail]
  }

  return <ServicePageClient service={pageData} />;
}
