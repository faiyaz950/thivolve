
import Image from 'next/image';

const partnerLogos = [
  { src: "https://source.unsplash.com/150x60/?company,logo,monochrome", alt: "Client 1 Logo", hint: "company logo monochrome" },
  { src: "https://source.unsplash.com/150x60/?tech,client,logo", alt: "Client 2 Logo", hint: "tech client logo" },
  { src: "https://source.unsplash.com/150x60/?partner,logo,simple", alt: "Client 3 Logo", hint: "partner logo simple" },
  { src: "https://source.unsplash.com/150x60/?corporate,partner,logo", alt: "Client 4 Logo", hint: "corporate partner logo" },
  { src: "https://source.unsplash.com/150x60/?startup,logo,minimalist", alt: "Client 5 Logo", hint: "startup logo minimalist" },
  { src: "https://source.unsplash.com/150x60/?enterprise,client,brand", alt: "Client 6 Logo", hint: "enterprise client brand" },
];

export function PartnersBanner() {
  return (
    <section 
      id="partners" 
      className="py-16 md:py-20 bg-background"
      style={{ 
        backgroundImage: "url('https://image.shutterstock.com/image-vector/abstract-red-lines-dots-pattern-600w-2122693829.jpg')", 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
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
