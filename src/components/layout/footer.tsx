
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);


  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const footerNav = [
    { title: "Company", links: [
      { label: "About Us", href: "/about-us" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
    ]},
    { title: "Services", links: [
      { label: "IT Solutions", href: "/services/it-services" },
      { label: "Healthcare Support", href: "/services/healthcare-services" },
      { label: "Financial Services", href: "/services/credit-card-sales" },
    ]},
     { title: "Resources", links: [
      { label: "Blog", href: "#" },
      { label: "Case Studies", href: "/portfolio" },
      { label: "Support", href: "/#contact" },
    ]},
  ];

  return (
    <footer className="bg-black text-neutral-300 border-t border-neutral-700 pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1 lg:col-span-1 mb-8 md:mb-0">
            <Link href="/" className="inline-block mb-4">
              <Image 
                src="/btrusssl.png" 
                alt="Btruss Logo" 
                width={130} 
                height={52}
              />
            </Link>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-xs">
              Innovative solutions for a connected world. Btruss delivers excellence in IT, healthcare, and financial services.
            </p>
          </div>

          {footerNav.map((section) => (
            <div key={section.title}>
              <h5 className="font-semibold text-white mb-4">{section.title}</h5>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-neutral-400 hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-neutral-700 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-neutral-500 text-center md:text-left">
            &copy; {currentYear} Btruss Services Pvt Ltd. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <Link key={social.label} href={social.href} aria-label={social.label} className="text-neutral-400 hover:text-primary transition-colors">
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
