
import Image from 'next/image';

const partnerLogos = [
  { 
    src: "https://source.unsplash.com/150x60/?abstract,logo,minimalist", 
    alt: "Minimalist Company Logo", 
    hint: "abstract minimalist logo" 
  },
  { 
    src: "https://source.unsplash.com/150x60/?tech,logo,icon", 
    alt: "Tech Company Icon Logo", 
    hint: "tech icon logo" 
  },
  { 
    src: "https://source.unsplash.com/150x60/?geometric,logo,brand", 
    alt: "Geometric Brand Logo", 
    hint: "geometric brand logo" 
  },
  { 
    src: "https://source.unsplash.com/150x60/?corporate,logo,emblem", 
    alt: "Corporate Emblem Logo", 
    hint: "corporate emblem logo" 
  },
  { 
    src: "https://source.unsplash.com/150x60/?modern,logo,symbol", 
    alt: "Modern Symbol Logo", 
    hint: "modern symbol logo" 
  },
  { 
    src: "https://source.unsplash.com/150x60/?creative,logo,mark", 
    alt: "Creative Mark Logo", 
    hint: "creative mark logo" 
  },
];

export function PartnersBanner() {
  return (
    <section
      id="partners"
      className="py-16 md:py-20 bg-background text-foreground"
    >
      <div className="container mx-auto px-4 max-w-screen-xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12 md:mb-16">
          Our Clients and Brands We Partner With
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-10 items-center justify-items-center">
          {partnerLogos.map((logo, index) => (
            <div key={index} className="opacity-70 hover:opacity-100 transition-opacity duration-300 transform hover:scale-110">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={150}
                height={60}
                className="object-contain h-10 md:h-12 w-auto"
                data-ai-hint={logo.hint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
