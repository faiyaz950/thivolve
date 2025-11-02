"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, ArrowRight, ExternalLink, Shield, Zap, Globe, Users, Sparkles, Rocket } from 'lucide-react';
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

    const newParticles: Particle[] = Array.from({ length: 15 }, (_, i) => ({
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
    { icon: Linkedin, href: "https://www.linkedin.com/company/thivolve-services-pvt-ltd/", label: "LinkedIn", color: "hover:text-blue-500" },
    { icon: Instagram, href: "https://www.instagram.com/thivolve_services?igsh=MWxxdHA2Y3VteDF5bw==", label: "Instagram", color: "hover:text-pink-400" },
    { icon: Youtube, href: "www.youtube.com/@faiyazmujtaba2598", label: "YouTube", color: "hover:text-red-500" },
  ];

  const footerNav = [
    {
      title: "Services",
      icon: Zap,
      links: [
        { label: "Website Development", href: "/services/website-development" },
        { label: "Mobile App Development", href: "/services/mobile-app-development" },
        { label: "Custom Software Development", href: "/services/custom-software-development" },
        { label: "Graphics Design", href: "/services/graphics-design" },
        { label: "SEO & Digital Marketing", href: "/services/seo-and-digital-marketing" },
        { label: "AI Services", href: "/services/ai-services" },
      ]
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "info@thivolve.com",
      href: "mailto:info@thivolve.com",
      description: "Get in touch for partnerships"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7091491397",
      href: "tel:+917091491397",
      description: "24/7 support available"
    },
  ];

  return (
    <footer ref={ref} className="relative bg-black text-white overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        
        {/* Animated Orbs */}
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full filter blur-[120px] animate-pulse" />
        <div className="absolute bottom-40 right-1/3 w-[400px] h-[400px] bg-blue-500/10 rounded-full filter blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Dynamic Mouse-Following Gradient */}
        <div 
          className="absolute w-96 h-96 bg-gradient-radial from-primary/[0.02] to-transparent rounded-full blur-3xl transition-all duration-1000 pointer-events-none"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
              style={particle.style}
            />
          ))}
        </div>
      </div>

      <div className="relative container mx-auto px-6 max-w-7xl">
        <div className="pb-12">
          <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 pt-16 transition-all duration-1000", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12")}>
            {/* Enhanced Logo & Brand Section */}
            <div className="space-y-8">
              <div className="relative">
                <Link href="/" className="inline-block group">
                  <div className="relative p-4 rounded-3xl border border-primary/20 group-hover:border-primary/40 transition-all duration-700 group-hover:scale-110 bg-gradient-to-br from-neutral-900/30 to-neutral-900/10 backdrop-blur-xl overflow-hidden">
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    
                    <Image 
                      src="/thivolvelogos.png"
                      alt="Thivolve Logo"
                      width={210}
                      height={70}
                      className="relative z-10"
                      priority
                    />
                    
                    {/* Logo Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700" />
                  </div>
                </Link>
              </div>

              <div className="relative max-w-md space-y-6">
                <div>
                  <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400 mb-3">
                    Innovative Solutions for Tomorrow
                  </h3>
                  <p className="text-neutral-400 leading-relaxed text-base">
                    Thivolve delivers excellence in IT, healthcare, and financial services with cutting-edge technology and unmatched expertise.
                  </p>
                </div>
                
                {/* Value Tags */}
                <div className="flex flex-wrap gap-2">
                  {["Innovation", "Excellence", "Trust", "Growth"].map((tag, index) => (
                    <span
                      key={tag}
                      className={cn(
                        "px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl text-sm text-primary font-semibold backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20",
                        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                      )}
                      style={{ transitionDelay: `${index * 100 + 500}ms` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Enhanced CTA Button */}
                <Link 
                  href="/#contact" 
                  className="inline-flex items-center group px-8 py-4 bg-gradient-to-r from-primary via-primary to-primary/90 hover:from-primary/90 hover:via-primary hover:to-primary text-white rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40 relative overflow-hidden"
                >
                  {/* Button Shine */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  
                  <Rocket className="h-5 w-5 mr-3 relative z-10 group-hover:rotate-12 transition-transform duration-500" />
                  <span className="font-bold relative z-10">Start Your Journey</span>
                  <ArrowRight className="h-5 w-5 ml-3 transition-all duration-700 group-hover:translate-x-2 relative z-10" />
                </Link>
              </div>
            </div>

            {/* Enhanced Contact Cards */}
            <div className="space-y-6">
              <div className="mb-6">
                <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400 mb-2">
                  Let's Connect
                </h3>
                <p className="text-neutral-400 text-base">Ready to transform your business? We're here to help.</p>
                <div className="mt-3 w-24 h-1 bg-gradient-to-r from-primary to-transparent rounded-full" />
              </div>
              
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <Link
                    key={contact.label}
                    href={contact.href}
                    className={cn(
                      "group flex items-center p-5 bg-gradient-to-br from-neutral-900/70 via-black to-neutral-950 backdrop-blur-2xl rounded-2xl border border-white/10 hover:border-primary/40 transition-all duration-700 hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/25 relative overflow-hidden",
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                    )}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/30 via-blue-500/30 to-primary/30 blur-xl animate-spin-slow" style={{ animationDuration: '8s' }} />
                    </div>

                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    
                    <div className="relative z-10 p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl border border-primary/20 group-hover:border-primary/40 transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 mr-5">
                      <contact.icon className="h-6 w-6 text-primary" />
                      <div className="absolute inset-0 bg-primary/30 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-700" />
                    </div>
                    
                    <div className="flex-1 relative z-10">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider">{contact.label}</p>
                        <ExternalLink className="h-4 w-4 text-neutral-500 group-hover:text-primary transition-all duration-700 group-hover:scale-110 opacity-0 group-hover:opacity-100" />
                      </div>
                      <p className="text-white group-hover:text-primary transition-colors duration-700 font-bold mb-1">{contact.value}</p>
                      <p className="text-xs text-neutral-400 group-hover:text-neutral-300 transition-colors duration-700">{contact.description}</p>
                    </div>

                    {/* Bottom Accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/80 transition-all duration-700" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Navigation Grid */}
          <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 transition-all duration-1000 delay-300", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12")}>
            {footerNav.map((section, sectionIndex) => (
              <div key={section.title} className="space-y-5 group">
                <div className="flex items-center space-x-2 mb-5">
                  <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl border border-primary/20 group-hover:border-primary/40 transition-all duration-500 group-hover:scale-110">
                    <section.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-black text-white group-hover:text-primary transition-colors duration-500">
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className={cn(
                          "group/link inline-flex items-center text-neutral-400 hover:text-white transition-all duration-500 hover:translate-x-2 relative",
                          isVisible ? "opacity-100" : "opacity-0"
                        )}
                        style={{ transitionDelay: `${sectionIndex * 100 + linkIndex * 50 + 400}ms` }}
                      >
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-primary/60 rounded-full mr-3 opacity-0 group-hover/link:opacity-100 transition-all duration-500 scale-0 group-hover/link:scale-100" />
                        <span className="font-medium text-sm relative">
                          {link.label}
                          <div className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-transparent group-hover/link:w-full transition-all duration-500" />
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
                <h4 className="text-xl font-black text-white mb-1 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Join Our Community
                </h4>
                <span className="text-neutral-400 font-medium text-sm">Connect with us on social media</span>
              </div>
              <div className="flex items-center space-x-3">
                {socialLinks.map((social, index) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className={cn(
                      "group relative p-4 bg-gradient-to-br from-neutral-900/60 to-neutral-900/30 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-primary/40 transition-all duration-700 hover:scale-110 hover:shadow-2xl hover:shadow-primary/25 overflow-hidden",
                      social.color
                    )}
                    style={{ transitionDelay: `${index * 100 + 600}ms` }}
                  >
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent -translate-x-full -translate-y-full group-hover:translate-x-full group-hover:translate-y-full transition-transform duration-1000" />
                    
                    <social.icon className="h-5 w-5 text-neutral-400 group-hover:scale-110 transition-all duration-500 relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-700" />
                    
                    {/* Tooltip */}
                    <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-black/90 backdrop-blur-sm border border-primary/30 rounded-xl text-xs text-white opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none whitespace-nowrap z-20">
                      <span className="font-semibold">{social.label}</span>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary/30" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="text-center sm:text-right">
                <h4 className="text-base font-black text-white mb-1">Stay Ahead</h4>
                <span className="text-neutral-400 font-medium text-xs">Get latest updates & insights</span>
              </div>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-5 py-3 bg-neutral-900/70 border border-white/10 rounded-l-2xl text-white placeholder-neutral-500 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-500 backdrop-blur-sm min-w-[220px] text-sm"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white rounded-r-2xl border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/30 font-bold text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className={cn("border-t border-white/10 py-8 transition-all duration-1000 delay-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <p className="text-neutral-500 text-sm font-medium">
                © {currentYear} <span className="text-primary font-bold">Thivolve Services Pvt Ltd</span>. All rights reserved.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse" />
                <div className="w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="w-2 h-2 bg-primary/80 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                <span className="text-xs text-neutral-500 ml-2 font-semibold">Always Online</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center space-x-2 text-neutral-500 text-sm">
                <span>Crafted with</span>
                <span className="text-red-500 animate-pulse text-base">❤️</span>
                <span>in</span>
                <span className="text-primary font-bold">India</span>
              </div>
              <div className="flex items-center space-x-2 text-neutral-500 text-sm">
                <span>Powered by</span>
                <div className="flex items-center space-x-1">
                  <Zap className="h-4 w-4 text-primary animate-pulse" />
                  <span className="text-primary font-black bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    Innovation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Border Effects */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-transparent rounded-br-full blur-2xl" />
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full blur-2xl" />

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); opacity: 0.3; }
          50% { transform: translateY(-20px); opacity: 0.6; }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}
