"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight, ExternalLink, Shield, Zap, Globe, Users } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

interface Particle {
  id: number;
  style: React.CSSProperties;
}

export function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    const newParticles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        style: {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDuration: `${3 + Math.random() * 4}s`,
          animationDelay: `${Math.random() * 2}s`,
        }
    }));
    setParticles(newParticles);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100064775103394&mibextid=ZbWKwL", label: "Facebook", color: "hover:text-blue-400" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-sky-400" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/btruss-services-pvt-ltd/", label: "LinkedIn", color: "hover:text-blue-500" },
    { icon: Instagram, href: "https://www.instagram.com/btruss_services?igsh=MWxxdHA2Y3VteDF5bw==", label: "Instagram", color: "hover:text-pink-400" },
    { icon: Youtube, href: "www.youtube.com/@faiyazmujtaba2598", label: "YouTube", color: "hover:text-red-500" },
  ];

  const footerNav = [
    {
      title: "Company",
      icon: Users,
      links: [
        { label: "About Us", href: "/about-us" },
        { label: "Careers", href: "#" },
        { label: "Press", href: "#" },
        { label: "Leadership", href: "#" },
      ]
    },
    {
      title: "Services",
      icon: Zap,
      links: [
        { label: "Website Development", href: "/services/website-development" },
        { label: "Mobile App Development", href: "/services/mobile-app-development" },
        { label: "Graphics Design", href: "/services/graphics-design" },
        { label: "SEO & Digital Marketing", href: "/services/seo-and-digital-marketing" },
      ]
    },
    {
      title: "Resources",
      icon: Globe,
      links: [
        { label: "Blog", href: "#" },
        { label: "Case Studies", href: "/#our-work" },
        { label: "Support", href: "/#contact" },
        { label: "Documentation", href: "#" },
      ]
    },
    {
      title: "Legal",
      icon: Shield,
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Cookie Policy", href: "#" },
        { label: "GDPR", href: "#" },
      ]
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "info@thivolveservices.com",
      href: "mailto:info@thivolveservices.com",
      description: "Get in touch for partnerships"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 93552 46234",
      href: "tel:+919355246234",
      description: "24/7 support available"
    },
    {
      icon: MapPin,
      label: "Address",
      value: "First Floor Bhagwati Garden Extension, Dwarka Mor New Delhi, 110059",
      href: "#",
      description: "Visit our headquarters"
    },
  ];

  return (
    <footer ref={ref} className="relative bg-black text-white overflow-hidden">
      {/* Enhanced Background layers with dynamic elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-neutral-900/20" />
        <div className="absolute inset-0 bg-gradient-radial from-primary/[0.03] via-transparent to-transparent" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/[0.02] to-purple-500/[0.01] rounded-full blur-3xl animate-pulse opacity-40" style={{ animationDuration: '12s' }} />
        <div className="absolute bottom-40 right-1/3 w-80 h-80 bg-gradient-to-l from-primary/[0.015] to-blue-500/[0.01] rounded-full blur-3xl animate-pulse opacity-30" style={{ animationDuration: '16s', animationDelay: '6s' }} />
        <div className="absolute top-1/2 left-1/6 w-64 h-64 bg-gradient-to-br from-white/[0.005] to-primary/[0.01] rounded-full blur-2xl animate-pulse opacity-50" style={{ animationDuration: '14s', animationDelay: '4s' }} />
        
        {/* Dynamic mouse-following gradient */}
        <div 
          className="absolute w-96 h-96 bg-gradient-radial from-primary/[0.01] to-transparent rounded-full blur-3xl transition-all duration-1000 pointer-events-none"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
        
        {/* Enhanced grid pattern */}
        <div className="absolute inset-0 opacity-[0.008]" style={{ backgroundImage: `radial-gradient(circle at 40px 40px, white 1px, transparent 0)`, backgroundSize: '80px 80px' }} />
        
        {/* Animated border lines */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
          <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent animate-pulse" style={{ animationDuration: '15s', animationDelay: '3s' }} />
          <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent animate-pulse" style={{ animationDuration: '12s', animationDelay: '7s' }} />
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-1 h-1 bg-primary/20 rounded-full animate-bounce"
              style={particle.style}
            />
          ))}
        </div>
      </div>

      <div className="relative container mx-auto px-6 max-w-screen-xl">
        <div className="pb-12">
          <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20 transition-all duration-1000", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12")}>
            {/* Enhanced Logo Section */}
            <div className="space-y-8">
              <div className="relative mt-8">
                <Link href="/" className="inline-block group">
                  <div className="relative p-4 rounded-3xl border border-primary/20 group-hover:border-primary/40 transition-all duration-700 group-hover:scale-110 bg-gradient-to-br from-neutral-900/20 to-neutral-900/5 backdrop-blur-sm">
                    <Image 
                      src="/thiweblogo.png"
                      alt="Thivolve Logo"
                      width={210}
                      height={70}
                      className="relative z-10"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-60 blur-xl transition-all duration-700" />
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-700" />
                  </div>
                </Link>
              </div>

              <div className="relative max-w-md">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
                    Innovative Solutions for Tomorrow
                  </h3>
                  <p className="text-neutral-400 leading-relaxed text-lg font-light">
                    Thivolve delivers excellence in IT, healthcare, and financial services with cutting-edge technology and unmatched expertise. Transforming businesses through digital innovation.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {["Innovation", "Excellence", "Trust", "Growth"].map((tag, index) => (
                    <span
                      key={tag}
                      className={cn(
                        "px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl text-sm text-primary font-medium backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-primary/40",
                        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                      )}
                      style={{ transitionDelay: `${index * 100 + 800}ms` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link 
                  href="/#contact" 
                  className="inline-flex items-center group px-8 py-4 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-primary/25 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <span className="font-semibold mr-3 relative z-10">Start Your Journey</span>
                  <ArrowRight className="h-5 w-5 transition-all duration-700 group-hover:translate-x-2 group-hover:scale-110 relative z-10" />
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 -z-10" />
                </Link>
              </div>
            </div>

            {/* Enhanced Contact Info */}
            <div className="space-y-6">
              <div className="mb-8 mt-8">
                <h3 className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
                  Let's Connect
                </h3>
                <p className="text-neutral-400 text-lg">Ready to transform your business? We're here to help.</p>
                <div className="mt-3 w-20 h-1 bg-gradient-to-r from-primary to-transparent rounded-full" />
              </div>
              
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <Link
                    key={contact.label}
                    href={contact.href}
                    className={cn(
                      "group flex items-center p-6 bg-gradient-to-r from-neutral-900/30 to-neutral-900/10 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 relative overflow-hidden",
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                    )}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
                    
                    <div className="relative z-10 p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20 group-hover:border-primary/40 transition-all duration-700 group-hover:scale-110 mr-6">
                      <contact.icon className="h-6 w-6 text-primary group-hover:text-primary/90 transition-colors duration-700" />
                      <div className="absolute inset-0 bg-primary/20 rounded-2xl opacity-0 group-hover:opacity-60 blur-lg transition-all duration-700" />
                    </div>
                    
                    <div className="flex-1 relative z-10">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-sm text-neutral-500 font-semibold uppercase tracking-wider">{contact.label}</p>
                        <ExternalLink className="h-4 w-4 text-neutral-500 group-hover:text-primary transition-all duration-700 group-hover:scale-110 opacity-0 group-hover:opacity-100" />
                      </div>
                      <p className="text-white group-hover:text-primary transition-colors duration-700 font-semibold mb-1">{contact.value}</p>
                      <p className="text-xs text-neutral-400 group-hover:text-neutral-300 transition-colors duration-700">{contact.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Navigation */}
          <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-20 transition-all duration-1000 delay-300", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12")}>
            {footerNav.map((section, sectionIndex) => (
              <div key={section.title} className="space-y-6 group">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20 group-hover:border-primary/40 transition-all duration-500">
                    <section.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-500">
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className={cn(
                          "group/link inline-flex items-center text-neutral-400 hover:text-white transition-all duration-500 hover:translate-x-3 relative py-2",
                          isVisible ? "opacity-100" : "opacity-0"
                        )}
                        style={{ transitionDelay: `${sectionIndex * 100 + linkIndex * 75 + 500}ms` }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-primary/60 rounded-full mr-4 opacity-0 group-hover/link:opacity-100 transition-all duration-500 scale-0 group-hover/link:scale-100" />
                        <span className="font-medium relative">
                          {link.label}
                          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-transparent group-hover/link:w-full transition-all duration-500" />
                        </span>
                        <ArrowRight className="h-3 w-3 ml-2 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all duration-500" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Enhanced Social + Newsletter */}
          <div className={cn("flex flex-col lg:flex-row items-center justify-between py-12 border-t border-white/10 transition-all duration-1000 delay-500", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
            <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8 mb-8 lg:mb-0">
              <div className="text-center sm:text-left">
                <h4 className="text-xl font-bold text-white mb-2">Join Our Community</h4>
                <span className="text-neutral-400 font-medium">Connect with us on social media</span>
              </div>
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className={cn(
                      "group relative p-4 bg-gradient-to-br from-neutral-900/40 to-neutral-900/20 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-700 hover:scale-110 hover:shadow-2xl hover:shadow-primary/20",
                      social.color
                    )}
                    style={{ transitionDelay: `${index * 100 + 700}ms` }}
                  >
                    <social.icon className="h-6 w-6 text-neutral-400 group-hover:scale-110 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-700" />
                    
                    {/* Enhanced tooltip */}
                    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black/90 backdrop-blur-sm border border-primary/30 rounded-xl text-sm text-white opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none whitespace-nowrap">
                      <span className="font-medium">Follow us on {social.label}</span>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary/30" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="text-center sm:text-right">
                <h4 className="text-lg font-bold text-white mb-1">Stay Ahead</h4>
                <span className="text-neutral-400 font-medium text-sm">Get the latest updates & insights</span>
              </div>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-6 py-3 bg-neutral-900/60 border border-white/10 rounded-l-2xl text-white placeholder-neutral-500 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-500 backdrop-blur-sm min-w-[240px]"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white rounded-r-2xl border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/25 font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom bar */}
        <div className={cn("border-t border-white/10 py-8 transition-all duration-1000 delay-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <p className="text-neutral-500 text-sm font-medium">
                © {currentYear} <span className="text-primary font-semibold">Thivolve Services Pvt Ltd</span>. All rights reserved.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse" />
                <div className="w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="w-2 h-2 bg-primary/80 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
                <span className="text-xs text-neutral-500 ml-2">Always Online</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center space-x-2 text-neutral-500 text-sm">
                <span>Crafted with</span>
                <span className="text-red-500 animate-pulse">❤️</span>
                <span>in</span>
                <span className="text-primary font-semibold">India</span>
              </div>
              <div className="flex items-center space-x-3 text-neutral-500 text-sm">
                <span>Powered by</span>
                <div className="flex items-center space-x-1">
                  <Zap className="h-4 w-4 text-primary animate-pulse" />
                  <span className="text-primary font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                    Innovation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced border effects */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black via-black/95 to-transparent pointer-events-none" />
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-br-full blur-2xl" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full blur-2xl" />
    </footer>
  );
}
