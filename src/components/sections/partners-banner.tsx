
import Image from 'next/image';

const partnerLogos = [
  {
    src: "https://images.unsplash.com/photo-1614959604920-935a03f0116e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxjb21wYW55JTIwbG9nbyUyMG1vbm9jaHJvbWV8ZW58MHx8fHwxNzQ4MDc0ODI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Abstract Company Logo",
    hint: "company logo monochrome"
  },
  {
    src: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHx0ZWNoJTIwY2xpZW50JTIwbG9nb3xlbnwwfHx8fDE3NDgwNzQ4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Tech Client Logo",
    hint: "tech client logo"
  },
  {
    src: "https://images.unsplash.com/photo-1487260211189-670c54da558d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxwYXJ0bmVyJTIwbG9nbyUyMHNpbXBsZXxlbnwwfHx8fDE3NDgwNzQ4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Simple Partner Logo",
    hint: "partner logo simple"
  },
  {
    src: "https://images.unsplash.com/photo-1491336477066-31156b5e4f35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxjb3Jwb3JhdGUlMjBwYXJ0bmVyJTIwbG9nb3xlbnwwfHx8fDE3NDgwNzQ4MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Corporate Partner Mark",
    hint: "corporate partner logo"
  },
  {
    src: "https://images.unsplash.com/photo-1493552152660-f915ab47ae9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxzdGFydHVwJTIwbG9nbyUyMG1pbmltYWxpc3R8ZW58MHx8fHwxNzQ4MDc0ODI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Minimalist Startup Icon",
    hint: "startup logo minimalist"
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxlbnRlcnByaXNlJTIwY2xpZW50JTIwYnJhbmR8ZW58MHx8fHwxNzQ4MDc0ODI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Enterprise Brand Symbol",
    hint: "enterprise client brand"
  },
];

export function PartnersBanner() {
  return (
    <section
      id="partners"
      className="py-16 md:py-20 bg-background text-foreground"
    >
      <div className="container mx-auto px-4 max-w-screen-xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 md:mb-16 text-foreground">
          Our Clients and Brands We Partner With
        </h2>

        {/* Animated horizontal scrolling logo list */}
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0%,#000_10%,#000_90%,transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            {partnerLogos.map((logo, index) => (
              <li key={index}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={60}
                  className="object-contain h-10 md:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                  data-ai-hint={logo.hint}
                />
              </li>
            ))}
          </ul>
          {/* Duplicate for seamless scroll */}
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
            {partnerLogos.map((logo, index) => (
              <li key={`duplicate-${index}`}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={60}
                  className="object-contain h-10 md:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                  data-ai-hint={logo.hint}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
