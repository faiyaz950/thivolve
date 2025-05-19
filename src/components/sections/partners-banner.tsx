import Image from 'next/image';

const partnerLogos = [
  { src: "https://placehold.co/150x60/000000/FFFFFF.png?text=Client1", alt: "Client 1 Logo", hint: "company logo monochrome" },
  { src: "https://placehold.co/150x60/000000/FFFFFF.png?text=Client2", alt: "Client 2 Logo", hint: "tech client logo" },
  { src: "https://placehold.co/150x60/000000/FFFFFF.png?text=Client3", alt: "Client 3 Logo", hint: "partner logo simple" },
  { src: "https://placehold.co/150x60/000000/FFFFFF.png?text=Client4", alt: "Client 4 Logo", hint: "corporate partner logo" },
  { src: "https://placehold.co/150x60/000000/FFFFFF.png?text=Client5", alt: "Client 5 Logo", hint: "startup logo minimalist" },
  { src: "https://placehold.co/150x60/000000/FFFFFF.png?text=Client6", alt: "Client 6 Logo", hint: "enterprise client brand" },
];

export function PartnersBanner() {
  return (
    <section id="partners" className="py-16 md:py-20 bg-background">
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
                className="object-contain h-10 md:h-12 w-auto" // Adjusted for better scaling
                data-ai-hint={logo.hint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
