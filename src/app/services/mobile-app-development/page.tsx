
import { ServicePageClient } from '@/components/sections/service-page-client';
import { services } from '@/lib/services-data';

export default function MobileAppDevelopmentPage() {
  const service = services.find(s => s.slug === 'it-services');
  const serviceDetail = service?.details.find(d => d.slug === 'mobile-application-development');

  if (!service || !serviceDetail) {
    return <div>Service not found</div>;
  }
  
  const pageData = {
    ...service,
    details: [serviceDetail]
  }

  return <ServicePageClient service={pageData} />;
}
