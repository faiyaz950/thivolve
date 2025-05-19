import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { AboutUs } from '@/components/sections/about-us'; // "Why Choose Us"
import { PartnersBanner } from '@/components/sections/partners-banner';
import { ServicesOverview } from '@/components/sections/services-overview'; // "Explore All Services"
import { OurProducts } from '@/components/sections/our-products'; // "Our Products"
import { FAQ } from '@/components/sections/faq';
import { CallToAction } from '@/components/sections/call-to-action';


export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AboutUs />
        <PartnersBanner />
        <ServicesOverview />
        <OurProducts />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
