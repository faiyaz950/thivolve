"use client";

// This component is effectively replaced by the CallToAction section for the "Inlogic" design.
// However, it might still be linked from somewhere or used if "Contact Us" has a dedicated page.
// For now, I'll keep its styling consistent with the new dark theme if it were to be used.

import { useEffect } from 'react';
import { useActionState } from 'react'; // Corrected import
// import { useFormStatus } from 'react-dom'; // Not used in this simplified version
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormValues } from '@/lib/schemas';
import { submitContactForm, type FormState } from '@/app/actions'; // Assuming actions.ts is still relevant
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const initialState: FormState = {
  message: '',
  status: 'idle',
};

// SubmitButton can be simplified or removed if not using useFormStatus
// function SubmitButton() {
//   const { pending } = useFormStatus();
//   return (
//     <Button type="submit" disabled={pending} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-base py-3 rounded-md transition-transform hover:scale-105">
//       {pending ? 'Submitting...' : 'Send Message'}
//     </Button>
//   );
// }

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      service: '',
      message: '',
    },
  });

  useEffect(() => {
    if (state.status === 'success') {
      toast({
        title: "Success!",
        description: state.message,
      });
      form.reset();
    } else if (state.status === 'error') {
      toast({
        title: "Error",
        description: state.message || "An error occurred. Please try again.",
        variant: "destructive",
      });
    }
  }, [state, toast, form]);

  const services = [
    { value: 'it_services', label: 'IT Services' },
    { value: 'healthcare_services', label: 'Healthcare Services' },
    { value: 'credit_card_sales', label: 'Credit Card Sales' },
    { value: 'insurance_sales', label: 'Insurance Sales' },
    { value: 'ai_services', label: 'AI Services' },
    { value: 'resource_outsource', label: 'Resource Outsource' },
    { value: 'other', label: 'Other Inquiry' },
  ];

  return (
    <section id="contact-page-form" className="py-16 md:py-24 bg-inlogic-dark-bg text-inlogic-text-light">
      <div className="container mx-auto px-4 max-w-xl">
        <Card className="shadow-xl rounded-lg bg-inlogic-card-dark border-border/50">
          <CardHeader className="text-center p-8">
            <CardTitle className="text-3xl sm:text-4xl font-bold text-foreground">Full Contact Form</CardTitle>
            <CardDescription className="mt-3 text-lg text-muted-foreground">
              Use this form for detailed inquiries. For quick demos, see the section above.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8 pt-0">
            <form action={formAction} className="space-y-6" onSubmit={form.handleSubmit(() => formAction(new FormData(form.control._formValues)))}>
              <div>
                <Label htmlFor="name" className="text-foreground font-medium mb-1.5 block">Full Name</Label>
                <Input 
                  id="name" 
                  {...form.register('name')} 
                  placeholder="John Doe" 
                  className="bg-background border-border focus:border-primary focus:ring-primary rounded-md text-base"
                />
                {form.formState.errors.name && (
                  <p className="text-sm text-destructive mt-1">{form.formState.errors.name.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email" className="text-foreground font-medium mb-1.5 block">Email Address</Label>
                <Input 
                  id="email" 
                  type="email" 
                  {...form.register('email')} 
                  placeholder="you@example.com" 
                  className="bg-background border-border focus:border-primary focus:ring-primary rounded-md text-base"
                />
                {form.formState.errors.email && (
                  <p className="text-sm text-destructive mt-1">{form.formState.errors.email.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="service" className="text-foreground font-medium mb-1.5 block">Service of Interest</Label>
                <Select onValueChange={(value) => form.setValue('service', value)} value={form.watch('service')}>
                  <SelectTrigger id="service" className="bg-background border-border focus:border-primary focus:ring-primary text-foreground rounded-md text-base">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover text-popover-foreground border-border rounded-md">
                    {services.map(service => (
                      <SelectItem key={service.value} value={service.value} className="focus:bg-primary/20 focus:text-primary rounded-sm">
                        {service.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                 <input type="hidden" {...form.register('service')} />
              </div>

              <div>
                <Label htmlFor="message" className="text-foreground font-medium mb-1.5 block">Message</Label>
                <Textarea 
                  id="message" 
                  {...form.register('message')} 
                  placeholder="Your detailed message..." 
                  rows={5} 
                  className="bg-background border-border focus:border-primary focus:ring-primary rounded-md text-base"
                />
                {form.formState.errors.message && (
                  <p className="text-sm text-destructive mt-1">{form.formState.errors.message.message}</p>
                )}
              </div>
              
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-base py-3 rounded-md transition-transform hover:scale-105">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

