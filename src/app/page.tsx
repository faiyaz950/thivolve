
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { AboutUs } from '@/components/sections/about-us';
import { ServicesOverview } from '@/components/sections/services-overview';
import { StatsSection } from '@/components/sections/stats-section';
import { OurWork } from '@/components/sections/our-work';
import { ContactForm } from '@/components/sections/contact-form';
import { VideoSection } from '@/components/sections/video-section';
import { OurClients } from '@/components/sections/our-clients';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Header component is integrated into Hero */}
      <main className="flex-grow">
        <Hero />
        <ServicesOverview />
        <StatsSection />
        <AboutUs />
        <VideoSection />
        <OurWork />
        <OurClients />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
