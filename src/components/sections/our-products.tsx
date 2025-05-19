import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    title: "Event Management System",
    description: "Streamline every step of event planning, from registration to post-event analysis, all in one place.",
    imageUrl: "https://placehold.co/600x400/1A237E/FFFFFF.png?text=Event+System",
    imageHint: "dashboard interface event management dark theme charts",
    tags: ["Software", "Productivity", "Events"]
  },
  {
    id: 2,
    title: "Survey Management System",
    description: "Create, distribute, and analyze surveys effortlessly. Gather valuable insights to make informed decisions.",
    imageUrl: "https://placehold.co/600x400/1A237E/FFFFFF.png?text=Survey+Tool",
    imageHint: "survey creation tool analytics dark mode professional",
    tags: ["SaaS", "Analytics", "Feedback"]
  },
  {
    id: 3,
    title: "Certification Management System",
    description: "Manage certification programs, track progress, and issue digital credentials with ease and security.",
    imageUrl: "https://placehold.co/600x400/1A237E/FFFFFF.png?text=Certs+Platform",
    imageHint: "certification platform user profile dark theme modern",
    tags: ["Platform", "Education", "Compliance"]
  },
  {
    id: 4,
    title: "Awards Management System",
    description: "A comprehensive solution to design, manage, and judge award programs effectively and transparently.",
    imageUrl: "https://placehold.co/600x400/1A237E/FFFFFF.png?text=Awards+Software",
    imageHint: "awards management dashboard elegant dark interface",
    tags: ["Software", "Recognition", "Contests"]
  }
];

export function OurProducts() {
  return (
    <section id="products" className="py-16 md:py-24 bg-inlogic-dark-bg text-inlogic-text-light">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 block">Products</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Products Available in the Market</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="flex flex-col bg-inlogic-card-dark text-inlogic-text-light rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-border/30">
              {/* <CardHeader className="p-0">
                <div className="relative aspect-[16/9]">
                  <Image 
                    src={product.imageUrl} 
                    alt={product.title} 
                    data-ai-hint={product.imageHint}
                    layout="fill" 
                    objectFit="cover" 
                    className="rounded-t-lg"
                  />
                </div>
              </CardHeader> */}
              <CardContent className="flex-grow p-6">
                <CardTitle className="text-2xl font-semibold text-primary mb-3">{product.title}</CardTitle>
                <CardDescription className="text-muted-foreground mb-4 line-clamp-3">{product.description}</CardDescription>
                {/* <div className="flex flex-wrap gap-2 mb-4">
                  {product.tags.map(tag => (
                    <span key={tag} className="text-xs bg-muted text-muted-foreground font-medium px-2.5 py-1 rounded-full">{tag}</span>
                  ))}
                </div> */}
              </CardContent>
              <CardFooter className="p-6 pt-0">
                 <Button 
                  variant="default" 
                  className="bg-background text-foreground hover:bg-muted hover:text-foreground transition-colors duration-300 hover:scale-105" 
                  asChild
                >
                   <Link href="#">Read more <ArrowRight className="ml-2 h-4 w-4" /></Link>
                 </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-16">
          <Button 
            variant="outline" 
            size="lg"
            className="border-border text-foreground hover:bg-muted hover:text-foreground transition-colors duration-300 hover:scale-105"
            asChild
          >
            <Link href="#products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
