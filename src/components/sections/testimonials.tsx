import { TestimonialCard } from '@/components/ui/testimonial-card';

const testimonials = [
  {
    id: '1',
    quote: "Btruss Services transformed our online presence. Their IT solutions are top-tier!",
    author: "Aarav Sharma",
    company: "Tech Solutions Inc.",
    avatarFallback: "AS",
    avatarSrc: "https://placehold.co/100x100.png",
    avatarHint: "professional headshot smiling South Asian man"
  },
  {
    id: '2',
    quote: "The healthcare solutions were tailored perfectly to our needs. Exceptional team.",
    author: "Priya Singh",
    company: "Wellness Clinic Group",
    avatarFallback: "PS",
    avatarSrc: "https://placehold.co/100x100.png",
    avatarHint: "friendly portrait female doctor Indian"
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-secondary"> {/* Light Mint Green */}
      <div className="container mx-auto px-4 max-w-screen-lg"> {/* Slightly narrower for focus */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Real stories from satisfied partners who trust Btruss Digital Hub.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              author={testimonial.author}
              company={testimonial.company}
              avatarSrc={testimonial.avatarSrc}
              avatarFallback={testimonial.avatarFallback}
              avatarHint={testimonial.avatarHint}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
