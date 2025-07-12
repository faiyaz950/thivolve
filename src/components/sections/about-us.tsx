
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function AboutUs() {
  return (
    <section
      id="about-us"
      className="py-16 md:py-24 bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/bluebg.jpg')" }}
      data-ai-hint="The background image is set to bluebg.jpg from the public folder"
    >
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">Thinking Outside the Box with Btruss</h2>
            <p className="text-lg text-neutral-200 mb-6 leading-relaxed">
              At Btruss, we believe innovation is key to unlocking potential. We are a modern IT, healthcare, and financial services company, specializing in crafting bespoke solutions that drive growth and efficiency. Our team thrives on tackling complex challenges with creative strategies, ensuring our clients stay ahead in a dynamic landscape.
            </p>
            <p className="text-lg text-neutral-200 mb-8 leading-relaxed">
              We are service-oriented, committed to providing local solutions that are not only innovative but also reliable and impactful. Our core business spans IT development, healthcare support, credit card and insurance sales, AI integration, and resource outsourcing.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 hover:text-white transition-transform hover:scale-105 group"
              asChild
            >
              <Link href="#services">
                Explore Our Services <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          <div>
            <Image
              src="https://source.unsplash.com/600x450/?creative,collaboration"
              alt="Creative team brainstorming"
              data-ai-hint="creative collaboration"
              width={600}
              height={450}
              className="rounded-xl shadow-2xl object-cover w-full h-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
