import Image from 'next/image';

const partnerLogos = [
  { src: "https://placehold.co/150x60/FFFFFF/1A237E.png?text=Partner1", alt: "Partner 1 Logo", hint: "company logo monochrome abstract" },
  { src: "https://placehold.co/150x60/FFFFFF/1A237E.png?text=Partner2", alt: "Partner 2 Logo", hint: "tech company logo simple" },
  { src: "https://placehold.co/150x60/FFFFFF/1A237E.png?text=Partner3", alt: "Partner 3 Logo", hint: "corporate logo minimalist" },
  { src: "https://placehold.co/150x60/FFFFFF/1A237E.png?text=Partner4", alt: "Partner 4 Logo", hint: "global business logo modern" },
];

export function PartnersBanner() {
  return (
    <section id="partners" className="py-12 md:py-16 bg-inlogic-card-dark">
      <div className="container mx-auto px-4 max-w-screen-lg">
        <h2 className="text-2xl font-semibold text-center text-inlogic-text-light mb-10">Trusted by Leading Organizations</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partnerLogos.map((logo, index) => (
            <div key={index} className="opacity-70 hover:opacity-100 transition-opacity duration-300">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={150}
                height={60}
                className="object-contain"
                data-ai-hint={logo.hint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
