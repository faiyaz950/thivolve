import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "E-commerce Platform Overhaul",
    description: "Transformed a client's online store, boosting user engagement and sales through modern UX.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "e-commerce dashboard modern UI clean product listings",
    tags: ["Web Development", "UX/UI", "E-commerce"]
  },
  {
    id: 2,
    title: "Healthcare Patient Portal",
    description: "Developed a secure and intuitive portal for patients to manage appointments and records.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "mobile app healthcare patient portal user-friendly interface",
    tags: ["Mobile App", "Healthcare", "Security"]
  },
  {
    id: 3,
    title: "Startup Marketing Success",
    description: "Launched a targeted digital marketing campaign leading to significant growth for a new venture.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "digital marketing analytics growth chart startup success",
    tags: ["Digital Marketing", "Strategy", "Startups"]
  }
];

export function OurWork() {
  return (
    <section id="our-work" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="flex justify-between items-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Work</h2>
          <Link href="#" className="text-primary font-semibold hover:underline flex items-center group">
            View all <ArrowRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-card rounded-xl">
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
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs bg-secondary text-secondary-foreground font-medium px-2.5 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                 <Button variant="link" className="p-0 text-primary hover:text-primary/80 font-semibold" asChild>
                   <Link href="#">Read more</Link>
                 </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
