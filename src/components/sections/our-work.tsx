
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  imageUrl: string;
  aiHint: string;
  category: string;
  title: string;
  href: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, aiHint, category, title, href }) => {
  return (
    <div className="group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-card border border-border/30 flex flex-col">
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          data-ai-hint={aiHint}
          width={400}
          height={300}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-sm font-semibold text-primary mb-1 uppercase tracking-wide">{category}</p>
        <h3 className="text-xl font-semibold text-card-foreground mb-3 line-clamp-2">{title}</h3>
        <div className="mt-auto">
          <Button variant="link" asChild className="text-card-foreground/80 hover:text-primary p-0 h-auto font-medium group-hover:translate-x-1 transition-transform">
            <Link href={href}>
              VIEW CASE STUDY <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

const projectsData: ProjectCardProps[] = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHx3ZWIlMjBhcHAlMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzQ4MDM5NjM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    aiHint: 'web app dashboard',
    category: 'Web Application',
    title: 'Enterprise Resource Planning System for Manufacturing Client',
    href: '#',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1550792436-181701c71f63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxtb2JpbGUlMjBhcHAlMjBoZWFsdGhjYXJlfGVufDB8fHx8MTc0ODAzOTYzOHww&ixlib=rb-4.1.0&q=80&w=1080',
    aiHint: 'mobile app healthcare',
    category: 'Mobile Development',
    title: 'Telehealth Mobile App for Remote Patient Monitoring',
    href: '#',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1504270997636-07ddfbd48945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwY2FtcGFpZ258ZW58MHx8fHwxNzQ4MDM5NjM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    aiHint: 'digital marketing campaign',
    category: 'Digital Marketing',
    title: 'Successful SEO & Content Strategy for E-commerce Brand',
    href: '#',
  },
];

export function OurWork() {
  return (
    <section
      id="our-work"
      className="py-16 md:py-24 text-white"
      style={{
        backgroundImage: "url('https://source.unsplash.com/1600x900/?dark,texture,abstract')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Our Work</h2>
          <p className="text-lg text-neutral-300 mx-auto max-w-2xl">
            View what we have been up to. We take pride in delivering impactful solutions that drive success for our clients.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
         <div className="text-center mt-12 md:mt-16">
          <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white/10 hover:border-white/80 transition-colors duration-300">
            <Link href="#">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
