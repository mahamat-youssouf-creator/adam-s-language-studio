import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    { q: "What is the ideal lesson duration?", a: "Standard lesson is 60 minutes. For exam prep, I recommend 90-minute sessions. Trial lessons are 30 minutes." },
    { q: "What equipment do I need for online lessons?", a: "You need a computer/tablet/phone with webcam and microphone, stable internet, and Zoom or Skype installed." },
    { q: "Can I cancel or reschedule?", a: "Yes, you can cancel or reschedule free up to 24 hours before. Late cancellations are counted as completed lessons unless justified." },
    { q: "What levels do you accept?", a: "All levels from complete beginner (A0) to advanced (C1). We assess your level during the first lesson." },
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16"><span className="text-accent font-semibold text-sm uppercase">FAQ</span><h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">Frequently Asked Questions</h2></div>
        <Accordion type="single" collapsible className="space-y-4">{faqs.map((f, i) => <AccordionItem key={i} value={`item-${i}`} className="bg-card border-2 rounded-2xl px-6"><AccordionTrigger className="text-left hover:text-accent py-6"><span className="font-semibold pr-4">{f.q}</span></AccordionTrigger><AccordionContent className="text-muted-foreground pb-6">{f.a}</AccordionContent></AccordionItem>)}</Accordion>
      </div>
    </section>
  );
};

export default FAQ;
