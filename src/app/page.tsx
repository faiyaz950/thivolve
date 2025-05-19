import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { ServicesOverview } from '@/components/sections/services-overview';
import { Testimonials } from '@/components/sections/testimonials';
import { ContactForm } from '@/components/sections/contact-form';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ServicesOverview />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
