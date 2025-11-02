"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Sparkles, Zap, Rocket } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';
import { CoreValues } from './core-values';

export function AboutUs() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section
      id="about-us"
      ref={ref}
      className="relative py-24 bg-black text-white overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        
        {/* Animated Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full filter blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full filter blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        
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
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-primary/10 rounded-full filter blur-3xl animate-pulse" />
            
            <div className="relative">
              <h2 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-neutral-500 tracking-tight leading-tight mb-2">
                About Thivolve
              </h2>
              <div className="flex items-center justify-center gap-2 mt-3">
                <Rocket className="w-5 h-5 text-primary animate-pulse" />
                <p className="text-lg text-primary font-bold uppercase tracking-widest">Innovation Driven</p>
                <Rocket className="w-5 h-5 text-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>
            
            {/* Enhanced Underline */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full blur-md animate-pulse" />
          </div>
          
          <p className="text-xl text-neutral-300 max-w-4xl mx-auto leading-relaxed font-light">
            Transforming visions into reality through <span className="text-primary font-semibold">innovative solutions</span> and exceptional service that drive business growth.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          {/* Enhanced Image Side */}
          <div className={cn(
            "relative transition-all duration-1000 delay-300",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          )}>
            <div className="relative group">
              {/* Background Glow Effects */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/40 via-blue-500/40 to-primary/40 blur-xl animate-spin-slow" style={{ animationDuration: '8s' }} />
              </div>
              
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900/50 to-black backdrop-blur-sm">
                <Image
                  src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxjb2xsYWJvcmF0aW9uJTIwZ3JvdXB8ZW58MHx8fHwxNzQ4MzM2MzgwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Creative team collaborating on innovative solutions"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
                  onLoad={() => setImageLoaded(true)}
                />
                
                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Floating Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl border border-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse backdrop-blur-xl flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500/30 to-transparent rounded-xl border border-blue-500/40 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 backdrop-blur-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-blue-400" />
              </div>

              {/* Corner Accents */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full animate-pulse" />
              <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          {/* Enhanced Content Side */}
          <div className={cn(
            "space-y-8 transition-all duration-1000 delay-500",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          )}>
            <div className="space-y-6">
              <h3 className="text-4xl sm:text-5xl font-black leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400">
                  Thinking Outside the Box with{' '}
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary">
                  Innovation
                </span>
              </h3>
              
              <div className="space-y-5">
                <div className="relative pl-6 border-l-2 border-primary/30 hover:border-primary/60 transition-all duration-500">
                  <div className="absolute -left-1.5 top-2 w-3 h-3 bg-primary rounded-full animate-pulse" />
                  <p className="text-base text-neutral-300 leading-relaxed hover:text-neutral-200 transition-colors duration-300">
                    At Thivolve, we believe <span className="text-primary font-semibold">innovation is the key</span> to unlocking potential. As a modern IT services company, we specialize in crafting bespoke digital solutions—from dynamic websites and mobile apps to intelligent AI systems and custom software—that drive growth and efficiency.
                  </p>
                </div>
                
                <div className="relative pl-6 border-l-2 border-primary/30 hover:border-primary/60 transition-all duration-500">
                  <div className="absolute -left-1.5 top-2 w-3 h-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <p className="text-base text-neutral-300 leading-relaxed hover:text-neutral-200 transition-colors duration-300">
                    Our team thrives on tackling complex challenges with creative strategies, ensuring our clients stay ahead in today's dynamic digital landscape. We are committed to delivering solutions that are not only innovative and reliable but also create a <span className="text-primary font-semibold">significant and lasting impact</span> on your business.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Enhanced CTA Button */}
            <div className="pt-4">
              <Button
                variant="outline"
                size="lg"
                className="group relative border-2 border-primary/40 text-white hover:bg-primary/10 hover:text-white hover:border-primary/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40 backdrop-blur-sm bg-gradient-to-r from-primary/10 to-transparent overflow-hidden"
                asChild
              >
                <Link href="#services" className="flex items-center gap-3 px-8 py-6">
                  {/* Button Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  
                  <span className="relative z-10 font-bold text-lg">Explore Our Services</span>
                  <div className="relative z-10 flex items-center">
                    <ArrowRight className="h-6 w-6 transition-all duration-500 group-hover:translate-x-2" />
                    <ArrowRight className="absolute h-6 w-6 opacity-0 group-hover:opacity-30 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                  </div>
                </Link>
              </Button>
            </div>

            {/* Stats Mini Cards */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="p-4 bg-gradient-to-br from-neutral-900/70 via-black to-neutral-950 border border-white/10 rounded-xl hover:border-primary/30 transition-all duration-500 hover:scale-105">
                <p className="text-2xl font-black text-primary mb-1">26+</p>
                <p className="text-xs text-neutral-400 uppercase tracking-wide">Clients</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-neutral-900/70 via-black to-neutral-950 border border-white/10 rounded-xl hover:border-primary/30 transition-all duration-500 hover:scale-105">
                <p className="text-2xl font-black text-primary mb-1">31+</p>
                <p className="text-xs text-neutral-400 uppercase tracking-wide">Projects</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-neutral-900/70 via-black to-neutral-950 border border-white/10 rounded-xl hover:border-primary/30 transition-all duration-500 hover:scale-105">
                <p className="text-2xl font-black text-primary mb-1">3+</p>
                <p className="text-xs text-neutral-400 uppercase tracking-wide">Years</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <CoreValues />

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
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
}