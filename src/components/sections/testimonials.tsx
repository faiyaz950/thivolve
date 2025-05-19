import { TestimonialCard } from '@/components/ui/testimonial-card';

const testimonials = [
  {
    id: '1',
    quote: "Btruss Services transformed our online presence with a stunning website and effective digital marketing. Highly recommend their IT services!",
    author: "Aarav Sharma",
    company: "Tech Solutions Inc.",
    avatarFallback: "AS",
    avatarSrc: "https://placehold.co/100x100.png",
    avatarHint: "professional headshot smiling South Asian man business suit warm approachable studio lighting"
  },
  {
    id: '2',
    quote: "The healthcare solutions provided were top-notch and tailored to our needs. Their team is professional and caring.",
    author: "Priya Singh",
    company: "Wellness Clinic Group",
    avatarFallback: "PS",
    avatarSrc: "https://placehold.co/100x100.png",
    avatarHint: "friendly portrait female doctor Indian descent white coat stethoscope exuding compassion soft background"
  },
  {
    id: '3',
    quote: "Switching to Btruss for our credit card processing was seamless. Their system is reliable and has boosted our efficiency.",
    author: "Rohan Patel",
    company: "E-commerce Innovators",
    avatarFallback: "RP",
    avatarSrc: "https://placehold.co/100x100.png",
    avatarHint: "headshot young confident businessman smart casual attire looking at camera blurred office background"
  },
   {
    id: '4',
    quote: "Finding the right insurance was made easy by Btruss. Their expert guidance gave us peace of mind for our business.",
    author: "Meera Iyer",
    company: "Future Secure Ltd.",
    avatarFallback: "MI",
    avatarSrc: "https://placehold.co/100x100.png",
    avatarHint: "portrait smiling professional woman dark hair blazer competence friendliness subtle office environment"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Real stories from satisfied partners who trust Btruss Services.
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
