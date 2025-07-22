"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Award, Target, Users, Lightbulb, Heart, Shield } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

const CoreValue = ({ icon: Icon, title, description, index, isVisible }: {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
  isVisible: boolean;
}) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      const timer = setTimeout(() => setHasAnimated(true), index * 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible, index, hasAnimated]);

  return (
    <div
      className={cn(
        "group relative p-8 bg-gradient-to-br from-neutral-800/40 via-neutral-900/60 to-black/80 backdrop-blur-xl rounded-2xl border border-white/5 overflow-hidden transition-all duration-700 transform-gpu hover:scale-105 hover:border-white/20 hover:shadow-2xl hover:shadow-primary/20",
        hasAnimated ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-16 rotate-3"
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
        <div className="absolute top-1/2 -left-1 w-1 h-1 bg-white/20 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Icon container with enhanced styling */}
      <div className="relative flex justify-center items-center mb-6">
        <div className="relative p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/10 group-hover:border-primary/30 transition-all duration-500 group-hover:scale-110">
          <Icon className="h-8 w-8 text-primary group-hover:text-primary/90 transition-all duration-500 filter drop-shadow-lg group-hover:drop-shadow-2xl" />
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-primary/20 rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-all duration-500 animate-pulse" />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300 text-center">
          {title}
        </h3>
        
        <p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300 leading-relaxed text-center">
          {description}
        </p>
        
        {/* Animated underline */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-full transition-all duration-700" />
      </div>
      
      {/* Subtle border glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
           style={{
             background: 'linear-gradient(135deg, transparent, rgba(255,255,255,0.03), transparent)',
             mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
             maskComposite: 'xor'
           }} />
    </div>
  );
};

export function AboutUs() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [imageLoaded, setImageLoaded] = useState(false);

  const coreValues = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We embrace cutting-edge technologies to deliver solutions that keep you ahead of the competition."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our priority. We build lasting partnerships through exceptional service and support."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We maintain the highest standards in everything we do, ensuring reliable and impactful results."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every solution is designed with measurable outcomes and tangible business value in mind."
    },
    {
      icon: Heart,
      title: "Passionate Team",
      description: "Our dedicated professionals bring expertise, creativity, and commitment to every project."
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "We prioritize data security and build trust through transparency and reliable service delivery."
    }
  ];

  return (
    <section
      id="about-us"
      ref={ref}
      className="relative py-20 md:py-32 bg-black text-white overflow-hidden"
    >
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        {/* Multi-layer gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/[0.02] to-transparent" />
        
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        </div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative container mx-auto px-6 max-w-screen-xl">
        {/* Enhanced header */}
        <div className={cn(
          "text-center mb-16 md:mb-20 transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="relative inline-block">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400 mb-6 tracking-tight">
              About Btruss
            </h2>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-3 h-3 bg-primary rounded-full animate-ping" />
            <div className="absolute -top-2 -right-6 w-2 h-2 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          
          <div className="relative max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-neutral-400 leading-relaxed font-light">
              Transforming visions into reality through innovative solutions and exceptional service
            </p>
            
            {/* Subtle accent line */}
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6 animate-pulse" />
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 md:mb-32">
          {/* Content side */}
          <div className={cn(
            "space-y-8 transition-all duration-1000 delay-300",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          )}>
            <div className="space-y-6">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400 leading-tight">
                Thinking Outside the Box with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
                  Innovation
                </span>
              </h3>
              
              <div className="space-y-6">
                <p className="text-lg text-neutral-300 leading-relaxed">
                  At Btruss, we believe innovation is the key to unlocking potential. We are a modern IT, healthcare, and financial services company, specializing in crafting bespoke solutions that drive growth and efficiency.
                </p>
                <p className="text-lg text-neutral-300 leading-relaxed">
                  Our team thrives on tackling complex challenges with creative strategies, ensuring our clients stay ahead in today's dynamic business landscape. We deliver solutions that are innovative, reliable, and impactful.
                </p>
              </div>
              
              {/* Stats inline */}
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-primary via-primary to-primary/80">50+</div>
                  <div className="text-sm text-neutral-400 uppercase tracking-wide">Happy Clients</div>
                </div>
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-primary via-primary to-primary/80">5+</div>
                  <div className="text-sm text-neutral-400 uppercase tracking-wide">Industries</div>
                </div>
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-primary via-primary to-primary/80">3+</div>
                  <div className="text-sm text-neutral-400 uppercase tracking-wide">Years Experience</div>
                </div>
              </div>
            </div>
            
            {/* Enhanced CTA section */}
            <div className="pt-6">
              <Button
                variant="outline"
                size="lg"
                className="group relative border-2 border-primary/30 text-white hover:bg-primary/10 hover:text-white hover:border-primary/60 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 backdrop-blur-sm bg-gradient-to-r from-primary/5 to-transparent"
                asChild
              >
                <Link href="#services" className="flex items-center gap-3 px-8 py-4">
                  <span className="font-semibold text-lg">Explore Our Services</span>
                  <div className="relative">
                    <ArrowRight className="h-6 w-6 transition-all duration-500 group-hover:translate-x-2" />
                    <ArrowRight className="absolute inset-0 h-6 w-6 opacity-0 group-hover:opacity-30 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                  </div>
                </Link>
              </Button>
            </div>
          </div>

          {/* Image side with enhanced effects */}
          <div className={cn(
            "relative transition-all duration-1000 delay-500",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          )}>
            <div className="relative group">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-3xl blur-2xl transform rotate-6 scale-105 opacity-0 group-hover:opacity-100 transition-all duration-700" />
              
              {/* Main image container */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm">
                <Image
                  src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxjb2xsYWJvcmF0aW9uJTIwZ3JvdXB8ZW58MHx8fHwxNzQ4MzM2MzgwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Creative team collaborating on innovative solutions"
                  data-ai-hint="creative collaboration"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105 filter group-hover:brightness-110"
                  onLoad={() => setImageLoaded(true)}
                />
                
                {/* Image overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Corner accents */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-primary/60 rounded-full animate-pulse" />
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl border border-primary/30 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse backdrop-blur-sm" />
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-br from-white/10 to-transparent rounded-xl border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 backdrop-blur-sm" />
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className={cn(
          "transition-all duration-1000 delay-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {/* Enhanced header section */}
          <div className="text-center mb-16 md:mb-20">
            <div className="relative inline-block">
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400 mb-6 tracking-tight">
                Our Core Values
              </h3>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-3 h-3 bg-primary rounded-full animate-ping" />
              <div className="absolute -top-2 -right-6 w-2 h-2 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            
            <div className="relative max-w-2xl mx-auto">
              <p className="text-lg md:text-xl text-neutral-400 leading-relaxed font-light">
                The principles that guide everything we do and drive our commitment to excellence
              </p>
              
              {/* Subtle accent line */}
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6 animate-pulse" />
            </div>
          </div>
          
          {/* Values grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
            {coreValues.map((value, index) => (
              <CoreValue
                key={value.title}
                icon={value.icon}
                title={value.title}
                description={value.description}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}