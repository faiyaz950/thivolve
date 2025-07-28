"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

export function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/btruss_services?igsh=MWxxdHA2Y3VteDF5bw==", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const footerNav = [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about-us" },
        { label: "Careers", href: "#" },
        { label: "Press", href: "#" },
        { label: "Leadership", href: "#" },
      ]
    },
    {
      title: "Services",
      links: [
        { label: "IT Solutions", href: "/services/it-services" },
        { label: "Healthcare Support", href: "/services/healthcare-services" },
        { label: "Financial Services", href: "/services/credit-card-sales" },
        { label: "AI Services", href: "/services/ai-services" },
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "#" },
        { label: "Case Studies", href: "/#our-work" },
        { label: "Support", href: "/#contact" },
        { label: "Documentation", href: "#" },
      ]
    },
    {
      title: "Legal",
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
      value: "info@btrussservices.com",
      href: "mailto:info@btrussservices.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+918340715516 +919355246234",
      href: "mob +918340715516 +919355246234"
    },
    {
      icon: MapPin,
      label: "Address",
      value: "First Floor Bhagwati Garden Extension, Dwarka Mor New Delhi, 110059",
      href: "#"
    },
  ];

  return (
    <footer ref={ref} className="relative bg-black text-white overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-neutral-900/20" />
        <div className="absolute inset-0 bg-gradient-radial from-primary/[0.03] via-transparent to-transparent" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/[0.02] rounded-full blur-3xl animate-pulse opacity-40" style={{ animationDuration: '12s' }} />
        <div className="absolute bottom-40 right-1/3 w-80 h-80 bg-primary/[0.015] rounded-full blur-3xl animate-pulse opacity-30" style={{ animationDuration: '16s', animationDelay: '6s' }} />
        <div className="absolute top-1/2 left-1/6 w-64 h-64 bg-white/[0.005] rounded-full blur-2xl animate-pulse opacity-50" style={{ animationDuration: '14s', animationDelay: '4s' }} />
        <div className="absolute inset-0 opacity-[0.008]" style={{ backgroundImage: `radial-gradient(circle at 40px 40px, white 1px, transparent 0)`, backgroundSize: '80px 80px' }} />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
        </div>
      </div>

      <div className="relative container mx-auto px-6 max-w-screen-xl">
        <div className="pt-20 pb-12">
          <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20 transition-all duration-1000", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12")}>
            {/* Logo Section */}
            <div className="space-y-8">
              <div className="relative">
                <Link href="/" className="inline-block group">
                  <div className="relative p-3 rounded-2xl border border-primary/20 group-hover:border-primary/40 transition-all duration-500 group-hover:scale-110">
                    <Image 
                      src="/whitelogo.png"
                      alt="Btruss Logo"
                      width={210}
                      height={70}
                      className=""
                      priority
                    />
                    <div className="absolute inset-0 bg-primary/20 rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-all duration-500" />
                  </div>
                </Link>
              </div>

              <div className="relative max-w-md">
                <p className="text-neutral-400 leading-relaxed text-lg font-light mb-6">
                  Innovative solutions for a connected world. Btruss delivers excellence in IT, healthcare, and financial services with cutting-edge technology and unmatched expertise.
                </p>
                <Link 
                  href="/#contact" 
                  className="inline-flex items-center group px-6 py-3 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/25"
                >
                  <span className="font-semibold mr-3">Get Started Today</span>
                  <ArrowRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-1 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-primary/20 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 -z-10" />
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-8 relative">
                Get In Touch
                <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-primary to-transparent" />
              </h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <Link
                    key={contact.label}
                    href={contact.href}
                    className={cn(
                      "group flex items-center p-4 bg-gradient-to-r from-neutral-900/20 to-neutral-900/10 backdrop-blur-sm rounded-xl border border-white/5 hover:border-white/15 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-primary/10",
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                    )}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="p-3 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20 group-hover:border-primary/40 transition-all duration-500 group-hover:scale-110 mr-4">
                      <contact.icon className="h-5 w-5 text-primary group-hover:text-primary/90 transition-colors duration-500" />
                      <div className="absolute inset-0 bg-primary/20 rounded-xl opacity-0 group-hover:opacity-50 blur-lg transition-all duration-500" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-neutral-500 font-medium">{contact.label}</p>
                      <p className="text-white group-hover:text-primary transition-colors duration-500 font-medium">{contact.value}</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-neutral-500 group-hover:text-primary transition-all duration-500 group-hover:scale-110 opacity-0 group-hover:opacity-100" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-16 transition-all duration-1000 delay-300", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12")}>
            {footerNav.map((section, sectionIndex) => (
              <div key={section.title} className="space-y-6">
                <h3 className="text-lg font-bold text-white relative pb-3">
                  {section.title}
                  <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className={cn(
                          "group inline-flex items-center text-neutral-400 hover:text-white transition-all duration-300 hover:translate-x-2 relative",
                          isVisible ? "opacity-100" : "opacity-0"
                        )}
                        style={{ transitionDelay: `${sectionIndex * 100 + linkIndex * 50 + 500}ms` }}
                      >
                        <div className="w-1 h-1 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="font-medium">{link.label}</span>
                        <div className="absolute bottom-0 left-4 w-0 h-px bg-gradient-to-r from-primary to-transparent group-hover:w-full transition-all duration-300" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social + Newsletter */}
          <div className={cn("flex flex-col sm:flex-row items-center justify-between py-8 border-t border-white/5 transition-all duration-1000 delay-500", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
            <div className="flex items-center space-x-6 mb-6 sm:mb-0">
              <span className="text-neutral-400 font-medium">Follow us:</span>
              {socialLinks.map((social, index) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="group relative p-3 bg-gradient-to-br from-neutral-900/30 to-neutral-900/10 backdrop-blur-sm rounded-xl border border-white/5 hover:border-primary/30 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                  style={{ transitionDelay: `${index * 100 + 700}ms` }}
                >
                  <social.icon className="h-5 w-5 text-neutral-400 group-hover:text-primary transition-colors duration-500" />
                  <div className="absolute inset-0 bg-primary/10 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500" />
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-black border border-primary/20 rounded-lg text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    {social.label}
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-neutral-400 font-medium whitespace-nowrap">Stay updated:</span>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-neutral-900/50 border border-white/10 rounded-l-xl text-white placeholder-neutral-500 focus:outline-none focus:border-primary/50 transition-colors duration-300 backdrop-blur-sm"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white rounded-r-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={cn("border-t border-white/5 py-8 flex flex-col sm:flex-row items-center justify-between transition-all duration-1000 delay-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
          <div className="flex items-center space-x-6 mb-4 sm:mb-0">
            <p className="text-neutral-500 text-sm">
              © {currentYear} Btruss Services Pvt Ltd. All rights reserved.
            </p>
            <div className="hidden sm:flex items-center space-x-1">
              <div className="w-2 h-2 bg-primary/40 rounded-full animate-pulse" />
              <div className="w-1 h-1 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <span className="text-neutral-500 text-sm">Made with ❤️ in India</span>
            <div className="flex items-center space-x-2 text-neutral-500 text-sm">
              <span>Powered by</span>
              <span className="text-primary font-semibold">Innovation</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none" />
    </footer>
  );
}
