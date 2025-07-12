
"use client";

import { useState, useEffect } from 'react';
import { useActionState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormValues } from '@/lib/schemas';
import { submitContactForm, type FormState } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, ArrowRight, Eye } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const initialState: FormState = {
  message: '',
  status: 'idle',
};

interface ProjectCardProps {
  imageUrl: string;
  aiHint: string;
  category: string;
  title: string;
  href: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, aiHint, category, title, href, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 150);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={cn(
        "group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-card border border-border/30 flex flex-col transform-gpu",
        "hover:-translate-y-2",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          data-ai-hint={aiHint}
          width={400}
          height={300}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-sm font-semibold text-primary mb-1 uppercase tracking-wider">{category}</p>
        <h3 className="text-xl font-semibold text-card-foreground mb-4 line-clamp-2 flex-grow">{title}</h3>
        <Button variant="link" asChild className="text-card-foreground/80 hover:text-primary p-0 h-auto font-medium self-start group-hover:translate-x-1 transition-transform">
          <Link href={href}>
            VIEW CASE STUDY <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

const allProjectsData = [
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
  {
    imageUrl: 'https://source.unsplash.com/400x300/?ai,robotics',
    aiHint: 'ai robotics',
    category: 'AI Integration',
    title: 'Automated Warehouse Logistics with AI-Powered Robotics',
    href: '#',
  },
  {
    imageUrl: 'https://source.unsplash.com/400x300/?finance,app',
    aiHint: 'finance app',
    category: 'Fintech',
    title: 'Personal Finance Management App with Budgeting Tools',
    href: '#',
  },
  {
    imageUrl: 'https://source.unsplash.com/400x300/?cloud,security',
    aiHint: 'cloud security',
    category: 'Cybersecurity',
    title: 'Cloud Infrastructure Security Overhaul for a Tech Startup',
    href: '#',
  },
];


export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projectsToShow = showAllProjects ? allProjectsData : allProjectsData.slice(0, 3);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  useEffect(() => {
    if (state.status === 'success') {
      toast({
        title: "Message Sent!",
        description: state.message,
      });
      form.reset();
    } else if (state.status === 'error') {
      toast({
        title: "Error Sending Message",
        description: state.message || "An error occurred. Please try again.",
        variant: "destructive",
      });
    }
  }, [state, toast, form]);

  const contactDetails = [
    { icon: Mail, text: "info@btruss.com", href: "mailto:info@btruss.com" },
    { icon: Phone, text: "+91 123 456 7890", href: "tel:+911234567890" },
    { icon: MapPin, text: "123 Innovation Drive, Tech Park, Bangalore, India", href: "#" },
  ];

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/bullu.jpg')" }}
      data-ai-hint="The background image is set to bullu.jpg from the public folder"
    >
      <div className="container mx-auto px-4 max-w-screen-xl">
        {/* "Our Work" Content Start */}
        <div id="our-work-content" className="mb-20 md:mb-32">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Work</h2>
            <p className="text-lg text-neutral-200 mx-auto max-w-3xl leading-relaxed">
              We take pride in delivering impactful solutions that drive success for our clients. Explore some of our recent projects.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsToShow.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
          {!showAllProjects && (
            <div className="text-center mt-12 md:mt-16">
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => setShowAllProjects(true)}
                className="border-white text-white hover:bg-white/10 hover:border-white/80 transition-all duration-300 hover:scale-105 group"
              >
                View All Projects <Eye className="ml-2 h-5 w-5 transition-transform group-hover:rotate-12" />
              </Button>
            </div>
          )}
        </div>
        {/* "Our Work" Content End */}

        {/* "Contact Us" Content Start */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">Contact Us</h2>
          <p className="text-lg max-w-2xl text-white/90 mx-auto leading-relaxed">
            Get a hold of our team to help you with our services. We&apos;re here to answer any questions you may have.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-semibold text-white mb-6">Get in Touch</h3>
            <p className="text-white/80 mb-8 text-lg leading-relaxed">
              Whether you have a question about our services, want to discuss a project, or just want to say hello, we&apos;d love to hear from you.
            </p>
            <div className="space-y-6">
              {contactDetails.map((item, index) => (
                <a
                  key={index}
                  href={item.href} 
                  className="flex items-center justify-center md:justify-start text-white/80 hover:text-white transition-colors group text-lg"
                  target={item.href.startsWith('mailto:') || item.href.startsWith('tel:') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                >
                  <item.icon className="w-6 h-6 mr-4 text-primary flex-shrink-0" />
                  <span>{item.text}</span>
                </a>
              ))}
            </div>
          </div>

          <form
            action={formAction}
            onSubmit={form.handleSubmit(data => {
                const formData = new FormData();
                Object.keys(data).forEach(key => {
                  formData.append(key, (data as any)[key]);
                });
                formAction(formData);
              })}
            className="space-y-6 p-8 bg-card rounded-lg shadow-xl border border-border/50"
            id="contact-btruss-form"
          >
            <div>
              <Label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-1">Full Name</Label>
              <Input
                id="name"
                {...form.register('name')}
                placeholder="Your Name"
                className="bg-background border-input-border focus:border-primary focus:ring-primary rounded-md text-foreground"
              />
              {form.formState.errors.name && (
                <p className="text-sm text-destructive mt-1">{form.formState.errors.name.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-1">Email Address</Label>
              <Input
                id="email"
                type="email"
                {...form.register('email')}
                placeholder="you@example.com"
                className="bg-background border-input-border focus:border-primary focus:ring-primary rounded-md text-foreground"
              />
              {form.formState.errors.email && (
                <p className="text-sm text-destructive mt-1">{form.formState.errors.email.message}</p>
              )}
            </div>

             <input type="hidden" {...form.register('service')} value="general_inquiry" />

            <div>
              <Label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-1">Message</Label>
              <Textarea
                id="message"
                {...form.register('message')}
                placeholder="How can we help you?"
                rows={5}
                className="bg-background border-input-border focus:border-primary focus:ring-primary rounded-md text-foreground"
              />
              {form.formState.errors.message && (
                <p className="text-sm text-destructive mt-1">{form.formState.errors.message.message}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-base py-3 rounded-md transition-transform hover:scale-105"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
