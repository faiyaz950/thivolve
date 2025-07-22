"use client";

import { useEffect } from 'react';
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
import { Mail, Phone, MapPin } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

const initialState: FormState = {
  message: '',
  status: 'idle',
};

export function ContactForm() {
  const { ref, isVisible } = useScrollAnimation();
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();

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
      ref={ref}
      className={cn(
        "py-16 md:py-24 bg-cover bg-center text-white animate-on-scroll",
        isVisible && "is-visible"
      )}
      style={{ backgroundImage: "url('/bluebg.jpg')" }}
      data-ai-hint="The background image is set to bluebg.jpg from the public folder"
    >
      <div className="container mx-auto px-4 max-w-screen-xl">
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
