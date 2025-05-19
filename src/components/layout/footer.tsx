import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Globe } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Btruss",
      links: [
        { label: "About us", href: "#about-us" },
        { label: "Newsroom", href: "#" },
        { label: "Careers", href: "#innovate" },
        { label: "Blog", href: "#our-work" }, // Mapping to Our Work as blog
      ],
    },
    {
      title: "Services",
      links: [
        { label: "IT Solutions", href: "#services" },
        { label: "Healthcare", href: "#services" },
        { label: "Financial Services", href: "#services" },
        { label: "Insurance", href: "#services" },
      ],
    },
    {
      title: "Partners",
      links: [
        { label: "Become a Partner", href: "#" },
        { label: "Partner Portal", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "#" },
        { label: "Contact Us", href: "#contact" },
        { label: "FAQs", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-background border-t border-border/30 pt-16 pb-8 text-foreground">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          {footerLinks.map((section) => (
            <div key={section.title} className={section.title === "Btruss" ? "col-span-2 md:col-span-2" : "col-span-1"}>
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
          <div className="col-span-2 lg:col-span-2">
            <h5 className="font-semibold text-foreground mb-4">Download Our App</h5>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start text-left hover:bg-muted">
                <Image src="https://placehold.co/24x24.png" data-ai-hint="play store icon" alt="Play Store" width={20} height={20} className="mr-2" />
                <div>
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </Button>
              <Button variant="outline" className="w-full justify-start text-left hover:bg-muted">
                <Image src="https://placehold.co/24x24.png" data-ai-hint="app store icon" alt="App Store" width={20} height={20} className="mr-2" />
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            <div className="flex items-center">
               <Globe className="w-5 h-5 mr-2 text-muted-foreground" />
              <Select defaultValue="en">
                <SelectTrigger className="w-[120px] text-sm text-muted-foreground bg-transparent border-0 shadow-none focus:ring-0 h-auto p-0">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-popover text-popover-foreground">
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="hi">Hindi</SelectItem>
                </SelectContent>
              </Select>
            </div>
             {/* Placeholder for Country Selector if needed */}
          </div>

          <div className="flex space-x-4 mb-6 md:mb-0">
            {socialLinks.map((social) => (
              <Link key={social.label} href={social.href} aria-label={social.label} className="text-muted-foreground hover:text-primary transition-colors">
                <social.icon className="w-6 h-6" />
              </Link>
            ))}
          </div>
          
          <p className="text-sm text-muted-foreground text-center md:text-right">
            &copy; {currentYear} Btruss Services Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
