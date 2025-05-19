import { VideoPlayer } from '@/components/ui/video-player';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function ServicesOverview() {
  return (
    <section id="services" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Services in Action</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch how we blend technology, care, and expertise to drive success and security for your business.
          </p>
        </div>
        
        <VideoPlayer 
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" 
          poster="https://placehold.co/1280x720.png"
          className="mb-12"
        />

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            We offer a comprehensive suite of services including IT Solutions, Healthcare Services, Credit Card Sales, and Insurance Sales. Each tailored to meet your unique needs.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
            <Link href="#contact">Discuss Your Project</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
