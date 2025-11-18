import { Target, MessageCircle, BookOpen, TrendingUp } from "lucide-react";

const Methodology = () => {
  const steps = [
    { icon: Target, number: "01", title: "Personalized Assessment", description: "We assess your level and define your learning goals together." },
    { icon: BookOpen, number: "02", title: "Custom Program", description: "I create a personalized program adapted to your needs." },
    { icon: MessageCircle, number: "03", title: "Intensive Practice", description: "Emphasis on oral practice and immersion to build confidence." },
    { icon: TrendingUp, number: "04", title: "Progress Tracking", description: "Regular assessments to measure progress and adjust the program." },
  ];

  return (
    <section id="methodology" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16"><span className="text-accent font-semibold text-sm uppercase">My Methodology</span><h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">Structured Learning</h2></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">{steps.map((s, i) => <div key={i} className="bg-card rounded-3xl p-8 shadow-subtle hover:shadow-large transition-smooth"><div className="inline-block mb-4 px-4 py-1 bg-accent/10 rounded-full"><span className="text-accent font-bold">{s.number}</span></div><div className="mb-6"><div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center"><s.icon className="text-primary" size={32} /></div></div><h3 className="font-heading text-xl font-bold mb-4">{s.title}</h3><p className="text-muted-foreground">{s.description}</p></div>)}</div>
      </div>
    </section>
  );
};

export default Methodology;
