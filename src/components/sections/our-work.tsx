import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: "Innovative Web Platform",
    description: "Developed a scalable web platform for a leading e-commerce client, enhancing user engagement by 40%.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "clean intuitive dashboard UI e-commerce web platform product listings analytics light theme professional",
    tags: ["Web Development", "UX/UI Design", "E-commerce"]
  },
  {
    id: 2,
    title: "Mobile Health App",
    description: "Created a user-friendly mobile application for healthcare providers to streamline patient management.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "mockup user-friendly mobile healthcare app smartphone patient vitals appointment scheduling calm color palette",
    tags: ["Mobile App", "Healthcare", "Flutter"]
  },
  {
    id: 3,
    title: "Digital Marketing Campaign",
    description: "Executed a successful digital marketing strategy for a startup, achieving a 200% ROI in 6 months.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "vibrant digital marketing campaign results tablet growth charts key performance indicators dynamic visuals",
    tags: ["Digital Marketing", "SEO", "Social Media"]
  }
];

export function OurWork() {
  return (
    <section id="our-work" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Portfolio</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover a selection of projects that showcase our commitment to quality, innovation, and client success.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-0">
                <div className="relative aspect-video">
                  <Image 
                    src={project.imageUrl} 
                    alt={project.title} 
                    data-ai-hint={project.imageHint}
                    layout="fill" 
                    objectFit="cover" 
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <CardTitle className="text-xl font-semibold text-foreground mb-2">{project.title}</CardTitle>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs bg-primary/10 text-primary font-medium px-2 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                 {/* <Button variant="link" className="p-0 text-primary hover:text-primary/80" asChild>
                   <Link href={`/work/${project.id}`}>View Case Study</Link>
                 </Button> */}
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
            <Link href="#contact">Start Your Project With Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
