"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { useToast } from "@/hooks/use-toast";


export function CallToAction() {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Basic email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    console.log("Email submitted for demo:", email);
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Request Submitted!",
      description: `We've received your demo request for ${email}. We'll be in touch soon!`,
    });
    setEmail(''); // Clear input after submission
  };


  return (
    <section id="contact-cta" className="py-16 md:py-24 bg-inlogic-card-dark text-inlogic-text-light">
      <div 
        className="container mx-auto px-4 max-w-screen-md text-center bg-dots-pattern"
        style={{
          // Placeholder for a subtle grid/dots pattern if desired
          // backgroundImage: "url('/path-to-dots-pattern.svg')", 
        }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Ready to transform your business?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          Learn by example how to start a new project with us. Let's shape the future of your business together.
        </p>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4 items-center">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow bg-background text-foreground border-border focus:ring-primary h-12 text-base"
            required
          />
          <Button 
            type="submit" 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto h-12 transition-transform hover:scale-105"
          >
            Book a Demo
          </Button>
        </form>
      </div>
    </section>
  );
}
