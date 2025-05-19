
import Link from 'next/link';
import Image from 'next/image';
import { Globe, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Our Services", // Changed title from "Products"
      links: [ // Updated links to reflect services
        { label: "IT Services", href: "#products" }, // Points to the updated section
        { label: "Healthcare Services", href: "#products" },
        { label: "Credit Card Sales", href: "#products" },
        { label: "Insurance Sales", href: "#products" },
        { label: "AI Services", href: "#products" },
        { label: "Resource Outsource", href: "#products" },
      ],
    },
    {
      title: "Key Areas", // Renamed from "Services" for clarity
      links: [
        { label: "IT Solutions", href: "#services" }, // Points to general services overview
        { label: "AI Innovation", href: "#services" },
        { label: "Healthcare Support", href: "#services" },
        { label: "Digital Marketing", href: "#services" }, // This is a sub-service of IT
        { label: "Resource Outsourcing", href: "#services" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#about-us" },
        { label: "Careers", href: "#" }, 
        { label: "Blog", href: "#" }, 
        { label: "Contact", href: "#contact-cta" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-inlogic-dark-bg text-inlogic-text-light border-t border-border/30 pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1 mb-8 md:mb-0">
            <Link href="/" className="inline-block mb-4">
              <Image 
                src="/btruss-logo.png" 
                alt="Btruss Logo" 
                width={130} 
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Our Btruss IT Solutions team are on a mission to provide you with IT solutions that transform your business. Innovation ensures we do this.
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title} className="md:col-span-1">
              <h5 className="font-semibold text-foreground mb-4">{section.title}</h5>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {currentYear} Btruss Services Pvt Ltd. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <Link key={social.label} href={social.href} aria-label={social.label} className="text-muted-foreground hover:text-primary transition-colors">
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
