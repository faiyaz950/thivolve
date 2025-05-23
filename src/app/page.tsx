
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { AboutUs } from '@/components/sections/about-us';
import { VideoSection } from '@/components/sections/video-section';
import { ServicesOverview } from '@/components/sections/services-overview';
import { OurWork } from '@/components/sections/our-work';
import { PartnersBanner } from '@/components/sections/partners-banner';
import { ContactForm } from '@/components/sections/contact-form';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Header component is removed */}
      <main className="flex-grow">
        <Hero />
        <AboutUs />
        <VideoSection />
        <ServicesOverview />
        <OurWork />
        <PartnersBanner />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
