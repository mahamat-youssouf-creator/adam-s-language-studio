import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    { name: "Sarah L.", role: "Arabic student", image: "👩‍💼", rating: 5, text: "Adam is an exceptional teacher! In 6 months, I went from beginner to intermediate level in Arabic." },
    { name: "Mohammed K.", role: "IELTS preparation", image: "👨‍💻", rating: 5, text: "Thanks to Adam, I got 7.5 on IELTS! His exam techniques helped me achieve my goal." },
    { name: "Fatima B.", role: "Quranic Arabic", image: "👩‍🎓", rating: 5, text: "Quality teaching with a respectful approach. Adam perfectly masters Tajweed rules." },
    { name: "James R.", role: "Professional English", image: "👨‍💼", rating: 5, text: "My professional English skills improved considerably. Adam adapts each lesson to my needs." },
    { name: "Amina D.", role: "Beginner Arabic", image: "👩", rating: 5, text: "Highly recommend! Adam is very educational and makes learning Arabic accessible." },
    { name: "David M.", role: "Conversational English", image: "👨", rating: 5, text: "Excellent teacher who emphasizes oral practice. My fluency improved enormously." },
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">What My Students Say</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i} className="glass-card animate-fade-in-up hover:shadow-glow transition-smooth border-2 border-border hover:border-accent/50">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">{[...Array(t.rating)].map((_, j) => <Star key={j} className="text-accent fill-accent" size={18} />)}</div>
                <p className="text-muted-foreground mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-2xl">{t.image}</div>
                  <div><div className="font-semibold">{t.name}</div><div className="text-sm text-muted-foreground">{t.role}</div></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
