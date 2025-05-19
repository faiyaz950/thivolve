"use client";

import { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormValues } from '@/lib/schemas';
import { submitContactForm, type FormState } from '@/app/actions';
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

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
      {pending ? 'Submitting...' : 'Send Message'}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
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
      state.issues?.forEach(issue => {
         // This is a basic way to show field-specific errors.
         // For a more robust solution, you'd map issues to form fields.
        console.error("Validation Issue:", issue);
      });
    }
  }, [state, toast, form]);

  const services = [
    { value: 'it_services', label: 'IT Services' },
    { value: 'healthcare_services', label: 'Healthcare Services' },
    { value: 'credit_card_sales', label: 'Credit Card Sales' },
    { value: 'insurance_sales', label: 'Insurance Sales' },
    { value: 'other', label: 'Other Inquiry' },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card className="shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl sm:text-4xl font-bold text-primary">Get in Touch</CardTitle>
            <CardDescription className="mt-2 text-lg text-muted-foreground">
              Have questions or want to discuss a project? We're here to help.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="space-y-6" onSubmit={form.handleSubmit(() => formAction(new FormData(form.control._formValues)))}>
              <div>
                <Label htmlFor="name" className="text-foreground">Full Name</Label>
                <Input 
                  id="name" 
                  {...form.register('name')} 
                  placeholder="John Doe" 
                  className="mt-1 bg-card"
                />
                {form.formState.errors.name && (
                  <p className="text-sm text-destructive mt-1">{form.formState.errors.name.message}</p>
                )}
                 {state.fields?.name && state.issues && !form.formState.errors.name && (
                   <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.toLowerCase().includes('name'))}</p>
                 )}
              </div>

              <div>
                <Label htmlFor="email" className="text-foreground">Email Address</Label>
                <Input 
                  id="email" 
                  type="email" 
                  {...form.register('email')} 
                  placeholder="you@example.com" 
                  className="mt-1 bg-card"
                />
                {form.formState.errors.email && (
                  <p className="text-sm text-destructive mt-1">{form.formState.errors.email.message}</p>
                )}
                 {state.fields?.email && state.issues && !form.formState.errors.email && (
                   <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.toLowerCase().includes('email'))}</p>
                 )}
              </div>

              <div>
                <Label htmlFor="service" className="text-foreground">Service of Interest (Optional)</Label>
                <Select onValueChange={(value) => form.setValue('service', value)} value={form.watch('service')}>
                  <SelectTrigger id="service" className="mt-1 bg-card">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map(service => (
                      <SelectItem key={service.value} value={service.value}>
                        {service.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                 <input type="hidden" {...form.register('service')} />
              </div>

              <div>
                <Label htmlFor="message" className="text-foreground">Message</Label>
                <Textarea 
                  id="message" 
                  {...form.register('message')} 
                  placeholder="Your message..." 
                  rows={5} 
                  className="mt-1 bg-card"
                />
                {form.formState.errors.message && (
                  <p className="text-sm text-destructive mt-1">{form.formState.errors.message.message}</p>
                )}
                 {state.fields?.message && state.issues && !form.formState.errors.message && (
                   <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.toLowerCase().includes('message'))}</p>
                 )}
              </div>
              
              <SubmitButton />
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
