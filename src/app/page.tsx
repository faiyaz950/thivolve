import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { AboutUs } from '@/components/sections/about-us';
import { ServicesOverview } from '@/components/sections/services-overview';
import { OurWork } from '@/components/sections/our-work';
import { Testimonials } from '@/components/sections/testimonials';
import { ContactForm } from '@/components/sections/contact-form';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AboutUs />
        <ServicesOverview />
        <OurWork />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
