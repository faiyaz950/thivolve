
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { CheckCircle, Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: 'Imtiyaz Ali',
    role: 'CEO & Founder',
    image: 'https://placehold.co/400x400.png',
    aiHint: 'professional headshot',
    social: {
      linkedin: '#',
    },
  },
  {
    name: 'Jane Doe',
    role: 'Chief Operating Officer',
    image: 'https://placehold.co/400x400.png',
    aiHint: 'corporate headshot',
    social: {
      linkedin: '#',
    },
  },
  {
    name: 'John Smith',
    role: 'Head of Technology',
    image: 'https://placehold.co/400x400.png',
    aiHint: 'developer headshot',
    social: {
      linkedin: '#',
    },
  },
    {
    name: 'Emily White',
    role: 'Lead Designer',
    image: 'https://placehold.co/400x400.png',
    aiHint: 'designer headshot',
    social: {
      linkedin: '#',
    },
  },
];

const cultureImages = [
  { src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjb2xsYWJvcmF0aXZlJTIwd29ya3xlbnwwfHx8fDE3NDg4NTAwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Collaborative work session', aiHint: 'collaborative work' },
  { src: 'https://images.unsplash.com/photo-1573496774439-c9a41c48716e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2V8ZW58MHx8fHwxNzQ4ODUwMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Modern office interior', aiHint: 'modern office' },
  { src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZ3xlbnwwfHx8fDE3NDg4NTAwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Team meeting in a conference room', aiHint: 'team meeting' },
];

const testimonials = [
    {
        quote: "Btruss transformed our digital presence with a stunning website and a brilliant marketing strategy. Their team is professional, creative, and truly dedicated to client success.",
        name: "Samantha Lee",
        role: "CEO of InnovateX",
        image: "https://placehold.co/100x100.png",
        aiHint: "woman headshot"
    },
    {
        quote: "The mobile app developed by Btruss has been a game-changer for our business. It's intuitive, fast, and our users love it. The development process was seamless from start to finish.",
        name: "Michael Chen",
        role: "Founder of HealthTrack",
        image: "https://placehold.co/100x100.png",
        aiHint: "man headshot"
    },
    {
        quote: "Working with Btruss on our AI integration project was a fantastic experience. They delivered a solution that has significantly improved our operational efficiency.",
        name: "David Rodriguez",
        role: "CTO of Datawise",
        image: "https://placehold.co/100x100.png",
        aiHint: "professional headshot"
    }
];

export default function AboutUsPage() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px] text-white flex items-center justify-center">
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <Image
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW18ZW58MHx8fHwxNzQ4ODUwMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Btruss team working collaboratively"
                data-ai-hint="business team"
                fill
                className="object-cover"
                priority
            />
            <div className="relative z-20 text-center p-4">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">About Btruss Services</h1>
                <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-neutral-200 drop-shadow-md">
                    Building the future with innovation, integrity, and a passion for excellence.
                </p>
            </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 max-w-screen-xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Are?</h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-1 gap-8 text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              <p>
                At Btruss Services Pvt Ltd, we stand as a dynamic multi-service company built on the foundation of innovation, reliability, and unwavering commitment to client success. Established with a clear vision to bridge the gap between cutting-edge technology and essential human services, we have emerged as a trusted partner for businesses and individuals seeking comprehensive solutions under one roof. What sets us apart is our unique ability to excel across multiple industries while maintaining the highest standards of quality and innovation. We are not just another service provider; we are solution architects who understand that today's businesses and individuals need partners who can adapt, evolve, and deliver across various domains. Our multidisciplinary approach allows us to see the bigger picture and provide integrated solutions that create synergies between different aspects of our clients' needs, spanning from cutting-edge IT services and mobile app development to compassionate healthcare solutions, secure payment processing, and comprehensive insurance coverage.
              </p>
              <p>
                Our success is driven by our exceptional team of passionate professionals who bring years of experience, fresh perspectives, and shared values to every project. We don't just serve our clients; we partner with them to understand their unique challenges, goals, and aspirations, building long-term relationships based on trust, transparency, and mutual respect. Innovation is woven into the DNA of our organization as we constantly explore new technologies, methodologies, and approaches that benefit our clients. From the initial consultation to project delivery and ongoing support, we maintain rigorous quality standards while fostering a collaborative work environment where creativity thrives and everyone contributes to our collective success. As we continue to grow and evolve, our commitment remains clear: to be the most trusted and innovative multi-service partner, helping businesses and individuals build a better future through excellence, sustainability, and ethical business practices that contribute positively to the broader society.
              </p>
            </div>
          </div>
        </section>

        {/* CEO Message Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 max-w-screen-xl">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">From The CEO's Desk</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                        At Btruss Services Pvt Ltd, we are committed to shaping the future by delivering innovative solutions that make a meaningful difference in our clients' lives. Our greatest strength lies in our exceptional team of dedicated professionals who bring passion, expertise, and unwavering commitment to every project we undertake.
                    </p>
                    <p>
                        Since our inception, we have built more than just a company – we have cultivated a family of talented individuals united by a shared vision of excellence. Their relentless pursuit of innovation and client satisfaction is what sets us apart in today's competitive landscape. With our client-first philosophy at the heart of everything we do, we have established ourselves as a trusted partner across diverse industries including IT services, healthcare, financial solutions, and insurance.
                    </p>
                    <p>
                        As we continue to expand our reach and impact, we remain deeply committed to sustainable practices and giving back to the communities we serve. We understand that true success is measured not just by business growth, but by the positive contributions we make to society and the environment.
                    </p>
                    <p>
                        Together, we are building a future where innovation meets responsibility, where technology serves humanity, and where every solution we deliver creates lasting value for our clients and communities.
                    </p>
                </div>
                <div className="mt-8">
                  <p className="font-bold text-lg text-foreground">Imtiyaz Ali</p>
                  <p className="text-muted-foreground italic">CEO & Founder, Btruss Services Pvt Ltd</p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <Image
                  src="https://placehold.co/500x600.png"
                  alt="Imtiyaz Ali, CEO of Btruss Services"
                  data-ai-hint="male CEO portrait"
                  width={500}
                  height={600}
                  className="rounded-xl shadow-2xl object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 max-w-screen-xl">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The passionate professionals driving our success and delivering excellence.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <div key={member.name} className="group text-center">
                  <div className="relative w-full aspect-square rounded-full overflow-hidden mx-auto max-w-[200px] shadow-lg mb-4 transform group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src={member.image}
                      alt={member.name}
                      data-ai-hint={member.aiHint}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                  <p className="text-primary">{member.role}</p>
                   <div className="mt-2">
                    <Link href={member.social.linkedin} passHref>
                      <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                        <Linkedin className="h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Culture Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 max-w-screen-xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Culture & Environment</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We believe in fostering a collaborative, innovative, and supportive environment where every team member can thrive. Our culture is built on a foundation of continuous learning, mutual respect, and a shared passion for excellence.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span>Empowering our team through skill development and professional growth opportunities.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span>Fostering a collaborative workspace where creativity and new ideas flourish.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span>Committing to a positive work-life balance and the well-being of our employees.</span>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <Image
                    src={cultureImages[0].src}
                    alt={cultureImages[0].alt}
                    data-ai-hint={cultureImages[0].aiHint}
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
                 <Image
                    src={cultureImages[1].src}
                    alt={cultureImages[1].alt}
                    data-ai-hint={cultureImages[1].aiHint}
                    width={400}
                    height={500}
                    className="rounded-lg shadow-lg row-span-2 transform hover:scale-105 transition-transform duration-300 object-cover"
                />
                 <Image
                    src={cultureImages[2].src}
                    alt={cultureImages[2].alt}
                    data-ai-hint={cultureImages[2].aiHint}
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 max-w-screen-xl">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        We are proud to build lasting partnerships based on trust and results.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-secondary p-8 rounded-xl shadow-lg flex flex-col">
                            <p className="text-muted-foreground mb-6 flex-grow italic">"{testimonial.quote}"</p>
                            <div className="flex items-center">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    data-ai-hint={testimonial.aiHint}
                                    width={50}
                                    height={50}
                                    className="rounded-full mr-4"
                                />
                                <div>
                                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

    