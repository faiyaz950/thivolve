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
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

        const initialState: FormState = {
message: '',
status: 'idle',
        };

        const ContactItem = ({ icon: Icon, text, href, index, isVisible }: {
icon: React.ElementType;
text: string;
href: string;
index: number;
isVisible: boolean;
}) => {
        return (
    <a
href={href}
className={cn(
        "group relative flex items-center space-x-4 p-6 bg-gradient-to-br from-neutral-800/40 via-neutral-900/60 to-black/80 backdrop-blur-xl rounded-2xl border border-white/5 overflow-hidden transition-all duration-700 hover:scale-105 hover:border-white/20 hover:shadow-2xl hover:shadow-primary/20 transform-gpu",
        isVisible ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-12 rotate-1"
)}
style={{
transitionDelay: `${index * 150}ms`,
background: 'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0.8) 100%)'
        }}
        >
        {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1 -left-1 w-2 h-2 bg-primary/20 rounded-full animate-pulse" />
        <div className="absolute -bottom-1 -right-1 w-1 h-1 bg-primary/30 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
      </div>

        {/* Icon container */}
      <div className="relative flex-shrink-0">
        <div className="relative p-3 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/10 group-hover:border-primary/30 transition-all duration-500 group-hover:scale-110">
          <Icon className="h-6 w-6 text-primary group-hover:text-primary/90 transition-all duration-500 filter drop-shadow-lg" />

        {/* Glow effect */}
          <div className="absolute inset-0 bg-primary/20 rounded-xl opacity-0 group-hover:opacity-50 blur-xl transition-all duration-500 animate-pulse" />
        </div>
      </div>

        {/* Text content */}
      <div className="relative flex-1 min-w-0">
        <p className="text-sm md:text-base text-neutral-300 group-hover:text-white transition-colors duration-500 break-words">
        {text}
        </p>
      </div>

        {/* Subtle border glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
style={{
background: 'linear-gradient(135deg, transparent, rgba(255,255,255,0.03), transparent)',
mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
maskComposite: 'xor'
        }} />
    </a>
        );
        };

export function ContactForm() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
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
    { icon: Mail, text: "info@btrussservices.com", href: "mailto:info@btrussservices.com" },
    { icon: Phone, text: "+91 93552 46234", href: "tel:+919355246234" },
    { icon: MapPin, text: "Plot NO 6,\n" +
            "First Floor Bhagwati Garden Extension, Dwarka Mor New Delhi, 110059", href: "#" },
  ];

    return (
            <section
    ref={ref}
    id="contact"
    className="relative py-20 md:py-32 bg-black overflow-hidden"
            >
            {/* Animated background elements */}
            <div className="absolute inset-0">
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-black" />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/[0.02] to-transparent" />

            {/* Animated mesh gradient */}
            <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        </div>

            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, white 1px, transparent 0)`,
    backgroundSize: '50px 50px'
        }} />
      </div>

            <div className="relative container mx-auto px-6 max-w-screen-xl">
            {/* Enhanced header section */}
            <div className={cn(
            "text-center mb-16 md:mb-20 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    )}>
            <div className="relative inline-block">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400 mb-6 tracking-tight">
            Contact Us
            </h2>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-3 h-3 bg-primary rounded-full animate-ping" />
            <div className="absolute -top-2 -right-6 w-2 h-2 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

            <div className="relative max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-neutral-400 leading-relaxed font-light">
            Get a hold of our team to help you with our services. We're here to answer any questions you may have.
            </p>

            {/* Subtle accent line */}
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6 animate-pulse" />
            </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Contact Info Section */}
            <div className={cn(
            "transition-all duration-1000 delay-300",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
    )}>
            <div className="relative mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-500 mb-4">
            Get in Touch
              </h3>

            {/* Animated underline */}
            <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-primary/60 animate-pulse mb-6" />

            <p className="text-base md:text-lg text-neutral-400 leading-relaxed">
            Whether you have a question about our services, want to discuss a project, or just want to say hello, we'd love to hear from you.
            </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
            {contactDetails.map((item, index) => (
                    <ContactItem
                    key={index}
                    icon={item.icon}
                    text={item.text}
                    href={item.href}
                    index={index}
                    isVisible={isVisible}
                            />
              ))}
            </div>
            </div>

            {/* Contact Form Section */}
            <div className={cn(
            "transition-all duration-1000 delay-500",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
    )}>
            <form
    onSubmit={form.handleSubmit((data) => {
                const formData = new FormData();
    Object.keys(data).forEach(key => {
            formData.append(key, (data as any)[key]);
                });
    formAction(formData);
              })}
    className="relative p-8 bg-gradient-to-br from-neutral-800/40 via-neutral-900/60 to-black/80 backdrop-blur-xl rounded-3xl border border-white/5 shadow-2xl overflow-hidden"
    id="contact-btruss-form"
    style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0.8) 100%)'
              }}
            >
    {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3 opacity-50" />

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-6 right-6 w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
            <div className="absolute bottom-8 left-8 w-1 h-1 bg-white/20 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 right-8 w-1 h-1 bg-primary/40 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
              </div>

            <div className="relative z-10 space-y-6">
            {/* Form Fields */}
            <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-neutral-300">
            Full Name
            </Label>
            <Input
    id="name"
    {...form.register('name')}
    className="bg-black/50 border-white/10 text-white placeholder:text-neutral-500 focus:border-primary/50 focus:ring-primary/20 transition-all duration-300 rounded-xl h-12"
    placeholder="Enter your full name"
            />
            {form.formState.errors.name && (
                    <p className="text-sm text-red-400 mt-1">{form.formState.errors.name.message}</p>
                  )}
                </div>

            <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-neutral-300">
            Email Address
            </Label>
            <Input
    id="email"
    type="email"
    {...form.register('email')}
    className="bg-black/50 border-white/10 text-white placeholder:text-neutral-500 focus:border-primary/50 focus:ring-primary/20 transition-all duration-300 rounded-xl h-12"
    placeholder="Enter your email address"
            />
            {form.formState.errors.email && (
                    <p className="text-sm text-red-400 mt-1">{form.formState.errors.email.message}</p>
                  )}
                </div>

            <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium text-neutral-300">
            Message
            </Label>
            <Textarea
    id="message"
    {...form.register('message')}
    className="bg-black/50 border-white/10 text-white placeholder:text-neutral-500 focus:border-primary/50 focus:ring-primary/20 transition-all duration-300 rounded-xl min-h-32 resize-none"
    placeholder="Tell us about your project or inquiry"
            />
            {form.formState.errors.message && (
                    <p className="text-sm text-red-400 mt-1">{form.formState.errors.message.message}</p>
                  )}
                </div>

            {/* Enhanced Submit Button */}
            <Button
    type="submit"
    className="group relative w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white font-semibold text-base py-4 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 disabled:opacity-50 disabled:hover:scale-100 overflow-hidden"
    disabled={form.formState.isSubmitting}
            >
            {/* Button background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Button content */}
            <div className="relative flex items-center justify-center space-x-2">
            <span>{form.formState.isSubmitting ? 'Sending...' : 'Send Message'}</span>
            {!form.formState.isSubmitting && (
                    <Send className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-1 group-hover:scale-110" />
                    )}
                  </div>

            {/* Loading dots */}
    {form.formState.isSubmitting && (
            <div className="absolute right-4 flex space-x-1">
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  )}
                </Button>
            </div>

            {/* Border glow effect */}
            <div className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500"
    style={{
            background: 'linear-gradient(135deg, transparent, rgba(255,255,255,0.03), transparent)',
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'xor'
                   }} />
            </form>
            </div>
            </div>
            </div>

            {/* Bottom fade effect */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
            </section>
  );
}
