"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqItems = [
  {
    value: "item-1",
    question: "What services does Btruss IT Solutions offer?",
    answer: "Btruss IT Solutions offers a wide range of IT services including Mobile Application Development, Website Development, Web Application Development, Digital Marketing, Graphic Designing Services, AI Solutions, and Resource Outsourcing."
  },
  {
    value: "item-2",
    question: "How experienced is the team at Btruss IT?",
    answer: "Our team consists of highly skilled and experienced professionals dedicated to delivering top-notch IT solutions. We continuously update our skills to stay ahead of technological advancements."
  },
  {
    value: "item-3",
    question: "Can Btruss IT Solutions tailor services to specific industries?",
    answer: "Yes, we specialize in providing customized IT solutions tailored to the unique needs of various industries. We work closely with our clients to understand their specific requirements and deliver effective results."
  },
  {
    value: "item-4",
    question: "What makes Btruss different from other IT service providers?",
    answer: "Our commitment to innovation, client-centric approach, and focus on delivering measurable results set us apart. We prioritize quality, reliability, and long-term partnerships."
  },
  {
    value: "item-5",
    question: "How can I get in touch with Btruss IT Solutions for an inquiry?",
    answer: "You can reach us through the contact form on our website, email us at info@btruss.com, or call us at our provided phone number. We're always ready to discuss your project."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-inlogic-dark-bg text-inlogic-text-light">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="md:pr-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Got a question? Get your answer</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Can't find the answer you're looking for? Please chat to our friendly team. We are here to help you with any queries you might have about our services and products.
            </p>
            {/* Optional: Add a button here if needed, e.g., <Button>Chat With Us</Button> */}
          </div>
          <div>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item) => (
                <AccordionItem key={item.value} value={item.value} className="border-b-border/30">
                  <AccordionTrigger className="text-left text-lg hover:text-primary py-4 font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-1 pb-4 text-base">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
