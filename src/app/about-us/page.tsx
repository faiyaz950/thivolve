"use client";
    
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { CheckCircle, Linkedin, Quote, ArrowRight, Users, Target, Heart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import { VideoSection } from "@/components/sections/video-section";

// TypeScript Interfaces
interface TeamMember {
name: string;
role: string;
image: string;
social: {
linkedin: string;
};
}

interface Testimonial {
quote: string;
name: string;
role: string;
image: string;
}

interface CultureFeatureProps {
icon: React.ElementType;
title: string;
description: string;
index: number;
isVisible: boolean;
}

interface CultureImage {
id: number;
src: string;
alt: string;
title: string;
}

// Team Member Card Component
const TeamMemberCard = ({ member, index, isVisible }: {
member: TeamMember;
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
"group relative text-center transition-all duration-700 transform-gpu",
hasAnimated ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
)}
style={{ transitionDelay: `${index * 150}ms` }}
>
<div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-110" />
<div className="relative bg-gradient-to-br from-neutral-800/40 via-neutral-900/60 to-black/80 backdrop-blur-xl rounded-3xl border border-white/5 p-8 overflow-hidden hover:border-white/20 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-700 hover:scale-105">
<div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
<div className="relative mb-6">
<div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-500 group-hover:scale-110">
<Image
src={member.image}
alt={`${member.name} - ${member.role}`}
fill
className="object-cover transition-all duration-700 group-hover:scale-110 filter group-hover:brightness-110"
/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
</div>
<div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/60 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
</div>
<div className="relative">
<h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
{member.name}
</h3>
<p className="text-primary/80 mb-4 font-medium">{member.role}</p>
<div className="mt-4">
<Button
variant="ghost"
size="icon"
className="text-neutral-400 hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
asChild
aria-label={`Visit ${member.name}'s LinkedIn profile`}
>
<Link href={member.social.linkedin}>
<Linkedin className="h-5 w-5" />
</Link>
</Button>
</div>
</div>
<div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full animate-ping" />
<div className="absolute bottom-4 left-4 w-1 h-1 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
</div>
</div>
);
};

// Testimonial Card Component
const TestimonialCard = ({ testimonial, index, isVisible }: {
testimonial: Testimonial;
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
"group relative transition-all duration-700 transform-gpu h-full",
hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
)}
style={{ transitionDelay: `${index * 150}ms` }}
>
<div className="relative bg-gradient-to-br from-neutral-800/40 via-neutral-900/60 to-black/80 backdrop-blur-xl rounded-2xl border border-white/5 p-8 h-full flex flex-col overflow-hidden hover:border-white/20 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-700 hover:scale-105">
<div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
<div className="relative mb-6">
<Quote className="h-8 w-8 text-primary/60 group-hover:text-primary transition-colors duration-500" />
</div>
<div className="relative flex-grow">
<p className="text-neutral-300 mb-6 italic leading-relaxed group-hover:text-neutral-200 transition-colors duration-300">
"{testimonial.quote}"
</p>
</div>
<div className="relative flex items-center">
<div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 mr-4 group-hover:border-primary/40 transition-all duration-300">
<Image
src={testimonial.image}
alt={`${testimonial.name} - ${testimonial.role}`}
fill
className="object-cover"
/>
</div>
<div>
<p className="font-semibold text-white group-hover:text-primary transition-colors duration-300">
{testimonial.name}
</p>
<p className="text-sm text-neutral-400">{testimonial.role}</p>
</div>
</div>
<div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
</div>
</div>
);
};

// Culture Feature Component
const CultureFeature = ({ icon: Icon, title, description, index, isVisible }: CultureFeatureProps) => {
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
"flex items-start group transition-all duration-700 transform-gpu",
hasAnimated ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
)}
style={{ transitionDelay: `${index * 100}ms` }}
>
<div className="relative mr-4 mt-1">
<div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl border border-primary/20 group-hover:border-primary/40 transition-all duration-500 group-hover:scale-110">
<Icon className="h-5 w-5 text-primary group-hover:text-primary/90 transition-colors duration-300" />
</div>
<div className="absolute inset-0 bg-primary/20 rounded-xl opacity-0 group-hover:opacity-50 blur-lg transition-all duration-500" />
</div>
<div className="flex-1">
<h4 className="font-semibold text-white mb-1 group-hover:text-primary transition-colors duration-300">
{title}
</h4>
<p className="text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300 leading-relaxed">
{description}
</p>
</div>
</div>
);
};

// Data
const teamMembers: TeamMember[] = [
{
  name: "Musarrat Fatima",
  role: "Director",
  image: "https://placehold.co/400x400.png",
  social: {
    linkedin: "https://linkedin.com/in/musarrat-fatima",
  },
},
{
  name: "Syed Ali Faraz Rizvi",
  role: "Chief Operating Officer",
  image: "https://placehold.co/400x400.png",
  social: {
    linkedin: "https://linkedin.com/in/syed-ali-faraz-rizvi",
  },
},
{
  name: "Syed Jafer Hussain",
  role: "Project Manager",
  image: "https://placehold.co/400x400.png",
  social: {
    linkedin: "https://linkedin.com/in/syed-jafer-hussain",
  },
},
{
  name: "Faiyaz Mujtaba",
  role: "Lead Engineer",
  image: "https://placehold.co/400x400.png",
  social: {
    linkedin: "https://linkedin.com/in/faiyaz-mujtaba",
  },
},
];

const cultureImages: CultureImage[] = [
{
  id: 1,
  src: "/officefour.jpeg",
  alt: "Team brainstorming session in modern office",
  title: "Creative Collaboration",
},
{
  id: 2,
  src: "/officethree.jpeg",
  alt: "Employees enjoying a team-building activity",
  title: "Team Bonding",
},
];

const galleryImages: CultureImage[] = [
{
  id: 1,
  src: "/officeteamg.jpeg",
  alt: "Modern office interior showing workspace design",
  title: "",
},
{
  id: 2,
  src: "/officethree.jpeg",
  alt: "Contemporary office environment with modern amenities",
  title: "",
},
{
  id: 3,
  src: "/officeteam.jpeg",
  alt: "Team collaboration in conference room during meeting",
  title: "",
},
{
  id: 4,
  src: "/officefive.jpeg",
  alt: "Open-plan office with employees working",
  title: "",
},
{
  id: 5,
  src: "/officesix.jpeg",
  alt: "Team discussion in a meeting room",
  title: "",
},
{
  id: 6,
  src: "/officeteamb.jpeg",
  alt: "Modern office lounge area",
  title: "",
},
];

const testimonials: Testimonial[] = [
{
  quote: "Btruss transformed our digital presence with a stunning website and a brilliant marketing strategy. Their team is professional, creative, and truly dedicated to client success.",
  name: "Syed Sayam Hussain",
  role: "CEO of Globolosys Fashion",
  image: "https://placehold.co/100x100.png",
},
{
  quote: "The mobile app developed by Btruss has been a game-changer for our business. It's intuitive, fast, and our users love it. The development process was seamless from start to finish.",
  name: "Tp Singh",
  role: "Founder of Gts Car Rental",
  image: "https://placehold.co/100x100.png",
},
{
  quote: "Working with Btruss on our AI integration project was a fantastic experience. They delivered a solution that has significantly improved our operational efficiency.",
  name: "Harsh Singh Rajput",
  role: "CTO of Datawise",
  image: "https://placehold.co/100x100.png",
},
];

const cultureFeatures: CultureFeatureProps[] = [
{
  icon: Users,
  title: "Collaborative Excellence",
  description: "Empowering our team through skill development and professional growth opportunities.",
  index: 0,
  isVisible: false,
},
{
  icon: Target,
  title: "Innovation Focus",
  description: "Fostering a collaborative workspace where creativity and new ideas flourish.",
  index: 1,
  isVisible: false,
},
{
  icon: Heart,
  title: "Work-Life Balance",
  description: "Committing to a positive work-life balance and the well-being of our employees.",
  index: 2,
  isVisible: false,
},
];

export { teamMembers, cultureImages, galleryImages };

export default function AboutUsPage() {
const heroRef = useScrollAnimation({ threshold: 0.1 });
const whoWeAreRef = useScrollAnimation({ threshold: 0.2 });
const ceoRef = useScrollAnimation({ threshold: 0.2 });
const teamRef = useScrollAnimation({ threshold: 0.2 });
const cultureRef = useScrollAnimation({ threshold: 0.2 });
const testimonialsRef = useScrollAnimation({ threshold: 0.2 });
const galleryRef = useScrollAnimation({ threshold: 0.2 });

return (
<div className="bg-black text-white">
<Header />
<main>
<section
ref={heroRef.ref}
className="relative min-h-screen flex items-center justify-center overflow-hidden"
>
<div className="absolute inset-0">
<Image
src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW18ZW58MHx8fHwxNzQ4ODUwMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
alt="Btruss team working collaboratively"
fill
className="object-cover opacity-20"
priority
/>
<div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
<div className="absolute inset-0 opacity-30">
<div
className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl animate-pulse"
style={{ animationDuration: "4s" }}
                            />
                            <div
                            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl animate-pulse"
style={{ animationDuration: "6s", animationDelay: "2s" }}
                                                  />
                                                  </div>
                                                  <div
className="absolute inset-0 opacity-[0.02]"
style={{
backgroundImage: `radial-gradient(circle at 25px 25px, white 1px, transparent 0)`,
backgroundSize: "50px 50px",
}}
                />
                </div>
                <div
className={cn(
"relative z-20 text-center px-6 max-w-4xl mx-auto transition-all duration-1000",
heroRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
)}
>
<div className="relative inline-block mb-6">
<h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400 tracking-tight">
About Btruss
</h1>
<div className="absolute -top-6 -left-6 w-4 h-4 bg-primary rounded-full animate-ping" />
<div
className="absolute -top-4 -right-8 w-3 h-3 bg-primary/60 rounded-full animate-pulse"
style={{ animationDelay: "1s" }}
                         />
                         </div>
                         <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed font-light mb-12 max-w-3xl mx-auto">
                         Building the future with innovation, integrity, and a passion for excellence that transforms businesses and empowers communities.
                         </p>
                         <Button
variant="outline"
size="lg"
className="group relative border-2 border-primary/40 text-white hover:bg-primary/10 hover:text-white hover:border-primary/60 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 backdrop-blur-sm bg-gradient-to-r from-primary/10 to-transparent px-8 py-6 text-lg"
asChild
>
<Link href="#who-we-are" className="flex items-center gap-3">
<span className="font-semibold">Discover Our Story</span>
<ArrowRight className="h-6 w-6 transition-all duration-500 group-hover:translate-x-2" />
</Link>
</Button>
<div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-8 animate-pulse" />
</div>
</section>
<section
id="who-we-are"
ref={whoWeAreRef.ref}
className="relative py-20 md:py-32 bg-black overflow-hidden"
>
<div className="absolute inset-0">
<div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-black" />
<div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/[0.02] to-transparent" />
<div className="absolute inset-0 opacity-10">
<div
className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary/20 rounded-full filter blur-3xl animate-pulse"
style={{ animationDuration: "5s" }}
                            />
                            </div>
                            </div>
                            <div className="relative container mx-auto px-6 max-w-screen-xl">
                            <div
className={cn(
"text-center mb-16 md:mb-20 transition-all duration-1000",
whoWeAreRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
)}
>
<div className="relative inline-block">
<h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400 mb-6 tracking-tight">
Who We Are
</h2>
<div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
</div>
</div>
<div
className={cn(
"max-w-6xl mx-auto space-y-8 transition-all duration-1000 delay-300",
whoWeAreRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
)}
>
<div className="relative bg-gradient-to-br from-neutral-800/20 via-neutral-900/30 to-black/40 backdrop-blur-xl rounded-3xl border border-white/5 p-8 md:p-12 overflow-hidden hover:border-white/10 transition-all duration-700">
<div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-50" />
<div className="relative space-y-6 text-lg md:text-xl text-neutral-300 leading-relaxed">
<p>
At <span className="text-primary font-semibold">Btruss Services Pvt Ltd</span>, we stand as a dynamic multi-service company built on the foundation of innovation, reliability, and unwavering commitment to client success. Established with a clear vision to bridge the gap between cutting-edge technology and essential human services, we have emerged as a trusted partner for businesses and individuals seeking comprehensive solutions under one roof.
</p>
<p>
What sets us apart is our unique ability to excel across multiple industries while maintaining the highest standards of quality and innovation. We are not just another service provider; we are <span className="text-primary font-semibold">solution architects</span> who understand that today's businesses need partners who can adapt, evolve, and deliver across various domains—from cutting-edge IT services and mobile app development to compassionate healthcare solutions, secure payment processing, and comprehensive insurance coverage.
</p>
<p>
Our success is driven by our exceptional team of passionate professionals who bring years of experience, fresh perspectives, and shared values to every project. Innovation is woven into the DNA of our organization as we constantly explore new technologies, methodologies, and approaches that benefit our clients, building long-term relationships based on <span className="text-primary font-semibold">trust, transparency, and mutual respect</span>.
</p>
</div>
<div className="absolute top-6 right-6 w-3 h-3 bg-primary/40 rounded-full animate-pulse" />
<div className="absolute bottom-6 left-6 w-2 h-2 bg-white/20 rounded-full animate-ping" />
</div>
</div>
</div>
</section>
<section
ref={ceoRef.ref}
className="relative py-20 md:py-32 bg-gradient-to-br from-neutral-900/50 via-black to-neutral-900/50 overflow-hidden"
>
<div className="absolute inset-0">
<div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/[0.01] to-transparent" />
<div className="absolute inset-0 opacity-20">
<div
className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse"
style={{ animationDuration: "6s" }}
                            />
                            </div>
                            </div>
                            <div className="relative container mx-auto px-6 max-w-screen-xl">
                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                            <div
className={cn(
"order-2 lg:order-1 transition-all duration-1000",
ceoRef.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
)}
>
<div className="relative">
<h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400 mb-8 tracking-tight">
From The Founder's Desk
</h2>
<div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
<p>
At Btruss Services Pvt Ltd, we are committed to shaping the future by delivering innovative solutions that make a meaningful difference in our clients' lives. Our greatest strength lies in our exceptional team of dedicated professionals who bring passion, expertise, and unwavering commitment to every project we undertake.
</p>
<p>
Since our inception, we have built more than just a company – we have cultivated a family of talented individuals united by a shared vision of excellence. Their relentless pursuit of innovation and client satisfaction is what sets us apart in today's competitive landscape.
</p>
<p>
As we continue to expand our reach and impact, we remain deeply committed to sustainable practices and giving back to the communities we serve. We understand that true success is measured not just by business growth, but by the positive contributions we make to society and the environment.
</p>
<p className="text-primary/90 font-medium">
Together, we are building a future where innovation meets responsibility, where technology serves humanity, and where every solution we deliver creates lasting value for our clients and communities.
</p>
</div>
<div className="mt-10 pt-6 border-t border-white/10">
<p className="font-bold text-xl text-white mb-1">Imtiyaz Ali</p>
<p className="text-primary italic font-medium">CEO & Founder, Btruss Services Pvt Ltd</p>
</div>
</div>
</div>
<div
className={cn(
"order-1 lg:order-2 transition-all duration-1000 delay-300",
ceoRef.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
)}
>
<div className="relative group">
<div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-3xl blur-2xl transform rotate-3 scale-105 opacity-0 group-hover:opacity-100 transition-all duration-700" />
<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm">
<Image
src="/mintubhai.jpeg"
alt="Imtiyaz Ali, CEO of Btruss Services"
width={500}
height={600}
className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105 filter group-hover:brightness-110"
/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
</div>
<div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl border border-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse backdrop-blur-sm" />
<div
className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-br from-white/10 to-transparent rounded-xl border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 backdrop-blur-sm"
/>
</div>
</div>
</div>
</div>
</section>
<section
ref={teamRef.ref}
className="relative py-20 md:py-32 bg-black overflow-hidden"
>
<div className="absolute inset-0">
<div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-black" />
<div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/[0.02] to-transparent" />
<div className="absolute inset-0 opacity-20">
<div
className="absolute top-1/3 right-1/3 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl animate-pulse"
style={{ animationDuration: "7s" }}
                            />
                            </div>
                            </div>
                            <div className="relative container mx-auto px-6 max-w-screen-xl">
                            <div
className={cn(
"text-center mb-16 md:mb-20 transition-all duration-1000",
teamRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
)}
>
<div className="relative inline-block">
<h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400 mb-6 tracking-tight">
Meet Our Team
</h2>
<div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
</div>
<p className="text-xl text-neutral-400 max-w-3xl mx-auto mt-6 leading-relaxed">
The passionate professionals driving our success and delivering excellence across every project.
</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
{teamMembers.map((member, index) => (
  <TeamMemberCard
  key={member.name}
  member={member}
  index={index}
  isVisible={teamRef.isVisible}
  />
  ))}
</div>
</div>
</section>
<section
ref={cultureRef.ref}
className="relative py-20 md:py-32 bg-gradient-to-br from-neutral-900/50 via-black to-neutral-900/50 overflow-hidden"
>
<div className="absolute inset-0">
<div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/[0.01] to-transparent" />
<div className="absolute inset-0 opacity-20">
<div
className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse"
style={{ animationDuration: "6s" }}
                            />
                            </div>
                            </div>
                            <div className="relative container mx-auto px-6 max-w-screen-xl">
                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                            <div
className={cn(
"transition-all duration-1000",
cultureRef.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
)}
>
<div className="relative">
<h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400 mb-8 tracking-tight">
Our Culture & Environment
</h2>
<p className="text-xl text-neutral-300 leading-relaxed mb-12">
We believe in fostering a collaborative, innovative, and supportive environment where every team member can thrive. Our culture is built on continuous learning, mutual respect, and a shared passion for excellence.
</p>
<div className="space-y-8">
{cultureFeatures.map((feature, index) => (
  <CultureFeature
  key={feature.title}
  icon={feature.icon}
  title={feature.title}
  description={feature.description}
  index={index}
  isVisible={cultureRef.isVisible}
  />
  ))}
</div>
</div>
</div>
<div
className={cn(
"transition-all duration-1000 delay-300",
cultureRef.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
)}
>
<div className="grid grid-cols-1 gap-6">
{cultureImages.map((image) => (
  <div
  key={image.id}
  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm hover:border-white/20 transition-all duration-700 hover:scale-105"
  >
  <Image
  src={image.src}
  alt={image.alt}
  width={400}
  height={200}
  className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-110 filter group-hover:brightness-110"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  <div className="absolute bottom-4 left-4 text-white text-lg font-semibold drop-shadow-md">
  {image.title}
  </div>
  </div>
  ))}
      </div>
  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl border border-primary/40 animate-pulse backdrop-blur-sm" />
  <div
  className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-white/10 to-transparent rounded-xl border border-white/20 animate-pulse backdrop-blur-sm"
  style={{ animationDelay: "1s" }}
      />
  </div>
  </div>
  </div>
  </section>
  
  <section
  ref={galleryRef.ref}
  className="relative py-20 md:py-32 bg-gradient-to-br from-neutral-900/50 via-black to-neutral-900/50 overflow-hidden"
  >
  <div className="absolute inset-0">
  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/[0.01] to-transparent" />
  <div className="absolute inset-0 opacity-20">
  <div
  className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse"
  style={{ animationDuration: "7s" }}
  />
  </div>
  </div>
  <div className="relative container mx-auto px-6 max-w-screen-xl">
  <div
  className={cn(
  "text-center mb-16 md:mb-20 transition-all duration-1000",
  galleryRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
  )}
  >
  <div className="relative inline-block">
  <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400 mb-6 tracking-tight">
  Our Office Gallery
      </h2>
  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
  </div>
  <p className="text-xl text-neutral-400 max-w-3xl mx-auto mt-6 leading-relaxed">
  A glimpse into our modern workspace where creativity and collaboration thrive.
  </p>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {galleryImages.map((image) => (
  <div
  key={`gallery-${image.id}`}
  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm hover:border-white/20 transition-all duration-700 hover:scale-105"
  >
  <Image
  src={image.src}
  alt={image.alt}
  width={400}
  height={300}
  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 filter group-hover:brightness-110"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  <div className="absolute bottom-4 left-4 text-white text-lg font-semibold drop-shadow-md">
  {image.title}
  </div>
  </div>
  ))}
  </div>
  </div>
  </section>
  <section
  ref={testimonialsRef.ref}
  className="relative py-20 md:py-32 bg-black overflow-hidden"
  >
  <div className="absolute inset-0">
  <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-black" />
  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/[0.02] to-transparent" />
  <div className="absolute inset-0 opacity-20">
  <div
  className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl animate-pulse"
  style={{ animationDuration: "8s" }}
  />
  </div>
  </div>
  <div className="relative container mx-auto px-6 max-w-screen-xl">
  <div
  className={cn(
  "text-center mb-16 md:mb-20 transition-all duration-1000",
  testimonialsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
  )}
  >
  <div className="relative inline-block">
  <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400 mb-6 tracking-tight">
  What Our Clients Say
  </h2>
  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
  </div>
  <p className="text-xl text-neutral-400 max-w-3xl mx-auto mt-6 leading-relaxed">
  We are proud to build lasting partnerships based on trust, results, and exceptional service delivery.
  </p>
  </div>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
  {testimonials.map((testimonial, index) => (
  <TestimonialCard
  key={index}
  testimonial={testimonial}
  index={index}
  isVisible={testimonialsRef.isVisible}
  />
  ))}
  </div>
  <div
  className={cn(
  "text-center mt-16 md:mt-20 transition-all duration-1000 delay-500",
  testimonialsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
  )}
  >
  <div className="relative inline-block">
  <Button
  variant="outline"
  size="lg"
  className="group relative border-2 border-primary/40 text-white hover:bg-primary/10 hover:text-white hover:border-primary/60 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 backdrop-blur-sm bg-gradient-to-r from-primary/10 to-transparent px-8 py-6 text-lg"
  asChild
  >
  <Link href="/contact" className="flex items-center gap-3">
  <span className="font-semibold">Start Your Journey With Us</span>
  <ArrowRight className="h-6 w-6 transition-all duration-500 group-hover:translate-x-2" />
  </Link>
  </Button>
  <div className="absolute inset-0 bg-primary/20 rounded-full opacity-0 group-hover:opacity-50 blur-2xl transition-all duration-500 scale-150" />
  </div>
  </div>
  </div>
  </section>
  </main>
  <Footer />
  </div>
  );
}
