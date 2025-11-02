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
import { Mail, Phone, Send, MessageSquare, Sparkles } from 'lucide-react';
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
        "group relative flex items-center space-x-4 p-5 bg-gradient-to-br from-neutral-900/80 via-black to-neutral-950 backdrop-blur-2xl rounded-2xl border border-white/10 overflow-hidden transition-all duration-700 hover:scale-[1.03] hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/25 transform-gpu",
        isVisible ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-12 rotate-1"
      )}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      {/* Animated Gradient Border */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/30 via-blue-500/30 to-primary/30 blur-xl animate-spin-slow" style={{ animationDuration: '6s' }} />
      </div>

      {/* Card Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      {/* Shine Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>

      {/* Icon Container */}
      <div className="relative flex-shrink-0">
        <div className="relative p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl border border-primary/20 group-hover:border-primary/40 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
          <Icon className="h-6 w-6 text-primary group-hover:text-primary/90 transition-all duration-500" />

          {/* Icon Glow */}
          <div className="absolute inset-0 bg-primary/30 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
        </div>
      </div>

      {/* Text Content */}
      <div className="relative flex-1 min-w-0">
        <p className="text-sm md:text-base text-neutral-300 group-hover:text-white transition-colors duration-500 break-words font-medium">
          {text}
        </p>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/80 transition-all duration-700" />
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
      phone: '',
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
    { icon: Mail, text: "info@thivolve.com", href: "mailto:info@thivolve.com" },
    { icon: Phone, text: "+91 7091491397", href: "tel:+917091491397" },
  ];

  return (
    <section
      ref={ref}
      id="contact"
      className="relative py-24 bg-black overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        
        {/* Animated Orbs */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full filter blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] bg-blue-500/10 rounded-full filter blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="relative container mx-auto px-6 max-w-7xl">
        {/* Enhanced Header */}
        <div className={cn(
          "text-center mb-16 transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="relative inline-block mb-8">
            {/* Top Decorative Glow */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-primary/10 rounded-full filter blur-3xl animate-pulse" />
            
            <div className="relative">
              <h2 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-neutral-500 tracking-tight leading-tight mb-2">
                Contact Us
              </h2>
              <div className="flex items-center justify-center gap-2 mt-3">
                <MessageSquare className="w-5 h-5 text-primary animate-pulse" />
                <p className="text-lg text-primary font-bold uppercase tracking-widest">Let's Connect</p>
                <MessageSquare className="w-5 h-5 text-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>
            
            {/* Enhanced Underline */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full blur-md animate-pulse" />
          </div>
          
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed font-light">
            Get in touch with our team to help you with our services. We're here to <span className="text-primary font-semibold">answer any questions</span> you may have.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info Section */}
          <div className={cn(
            "transition-all duration-1000 delay-300",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          )}>
            <div className="relative mb-10">
              <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-500 mb-4 leading-tight">
                Get in Touch
              </h3>

              {/* Animated Underline */}
              <div className="relative w-20 h-1 bg-gradient-to-r from-primary to-primary/60 mb-6">
                <div className="absolute inset-0 bg-primary/30 blur-sm animate-pulse" />
              </div>

              <p className="text-base md:text-lg text-neutral-400 leading-relaxed">
                Whether you have a question about our services, want to discuss a project, or just want to say hello, we'd <span className="text-primary font-semibold">love to hear from you</span>.
              </p>
            </div>

            {/* Contact Details Cards */}
            <div className="space-y-5">
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

            {/* Quick Response Badge */}
            <div className={cn(
              "mt-8 transition-all duration-1000 delay-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-full backdrop-blur-xl">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-neutral-300 font-medium text-sm">
                  We typically respond within <span className="text-primary font-bold">24 hours</span>
                </span>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form Section */}
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
              className="relative p-8 bg-gradient-to-br from-neutral-900/80 via-black to-neutral-950 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden"
              id="contact-thivolve-form"
            >
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 via-blue-500/20 to-primary/20 blur-2xl animate-spin-slow" style={{ animationDuration: '10s' }} />
              </div>

              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '40px 40px'
                }} />
              </div>

              {/* Floating Particles */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-6 right-6 w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
                <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 right-8 w-1 h-1 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>

              <div className="relative z-10 space-y-5">
                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-semibold text-neutral-300 flex items-center gap-2">
                    Full Name
                    <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="name"
                    {...form.register('name')}
                    className="bg-black/60 border-white/10 text-white placeholder:text-neutral-500 focus:border-primary/50 focus:ring-primary/20 transition-all duration-300 rounded-xl h-12 hover:border-white/20"
                    placeholder="Enter your full name"
                  />
                  {form.formState.errors.name && (
                    <p className="text-sm text-red-400 mt-1">{form.formState.errors.name.message}</p>
                  )}
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold text-neutral-300 flex items-center gap-2">
                      Email Address
                      <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...form.register('email')}
                      className="bg-black/60 border-white/10 text-white placeholder:text-neutral-500 focus:border-primary/50 focus:ring-primary/20 transition-all duration-300 rounded-xl h-12 hover:border-white/20"
                      placeholder="your@email.com"
                    />
                    {form.formState.errors.email && (
                      <p className="text-sm text-red-400 mt-1">{form.formState.errors.email.message}</p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-semibold text-neutral-300 flex items-center gap-2">
                      Phone Number
                      <span className="text-neutral-500 text-xs">(Optional)</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...form.register('phone')}
                      className="bg-black/60 border-white/10 text-white placeholder:text-neutral-500 focus:border-primary/50 focus:ring-primary/20 transition-all duration-300 rounded-xl h-12 hover:border-white/20"
                      placeholder="+91 XXXXX XXXXX"
                    />
                    {form.formState.errors.phone && (
                      <p className="text-sm text-red-400 mt-1">{form.formState.errors.phone.message}</p>
                    )}
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-semibold text-neutral-300 flex items-center gap-2">
                    Message
                    <span className="text-primary">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    {...form.register('message')}
                    className="bg-black/60 border-white/10 text-white placeholder:text-neutral-500 focus:border-primary/50 focus:ring-primary/20 transition-all duration-300 rounded-xl min-h-36 resize-none hover:border-white/20"
                    placeholder="Tell us about your project or inquiry..."
                  />
                  {form.formState.errors.message && (
                    <p className="text-sm text-red-400 mt-1">{form.formState.errors.message.message}</p>
                  )}
                </div>

                {/* Enhanced Submit Button */}
                <Button
                  type="submit"
                  className="group relative w-full bg-gradient-to-r from-primary via-primary to-primary/90 hover:from-primary/90 hover:via-primary hover:to-primary text-white font-bold text-base py-6 rounded-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/40 disabled:opacity-50 disabled:hover:scale-100 overflow-hidden mt-6"
                  disabled={form.formState.isSubmitting}
                >
                  {/* Button Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                  {/* Button Content */}
                  <div className="relative flex items-center justify-center space-x-2">
                    <span>{form.formState.isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                    {!form.formState.isSubmitting && (
                      <Send className="h-5 w-5 transition-all duration-500 group-hover:translate-x-1 group-hover:scale-110" />
                    )}
                  </div>

                  {/* Loading Animation */}
                  {form.formState.isSubmitting && (
                    <div className="absolute right-4 flex space-x-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Fade Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </section>
  );
}