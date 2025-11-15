import { Target, MessageCircle, BookOpen, TrendingUp } from "lucide-react";

const Methodology = () => {
  const steps = [
    {
      icon: Target,
      number: "01",
      title: "Évaluation Personnalisée",
      description:
        "Nous commençons par évaluer votre niveau actuel et définir ensemble vos objectifs d'apprentissage spécifiques.",
    },
    {
      icon: BookOpen,
      number: "02",
      title: "Programme Sur Mesure",
      description:
        "Je crée un programme personnalisé adapté à votre niveau, votre rythme et vos besoins particuliers.",
    },
    {
      icon: MessageCircle,
      number: "03",
      title: "Pratique Intensive",
      description:
        "L'accent est mis sur la pratique orale et l'immersion pour développer votre confiance et votre fluidité.",
    },
    {
      icon: TrendingUp,
      number: "04",
      title: "Suivi des Progrès",
      description:
        "Des évaluations régulières permettent de mesurer vos progrès et d'ajuster le programme si nécessaire.",
    },
  ];

  return (
    <section id="methodology" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Ma Méthodologie
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Un Apprentissage Structuré et Efficace
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Une approche en 4 étapes pour garantir votre succès
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Connector Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-accent/50 to-transparent -z-10"></div>
              )}

              <div className="bg-card rounded-3xl p-8 shadow-subtle hover:shadow-large transition-smooth h-full border-2 border-transparent group-hover:border-accent/30">
                {/* Number Badge */}
                <div className="inline-block mb-4 px-4 py-1 bg-accent/10 rounded-full">
                  <span className="text-accent font-bold">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-bounce">
                    <step.icon className="text-primary" size={32} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-bold mb-4">{step.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Key Principles */}
        <div className="mt-16 bg-card rounded-3xl shadow-medium p-8 md:p-12 animate-fade-in-up">
          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-8 text-center">
            Les Principes de Ma Méthode
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-accent text-2xl">🎯</span>
              </div>
              <h4 className="font-semibold text-lg mb-2">Approche Communicative</h4>
              <p className="text-sm text-muted-foreground">
                Privilégier la pratique et l'interaction pour une maîtrise naturelle
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-accent text-2xl">💡</span>
              </div>
              <h4 className="font-semibold text-lg mb-2">Immersion Progressive</h4>
              <p className="text-sm text-muted-foreground">
                Exposition graduelle à la langue dans des contextes réels et pratiques
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-accent text-2xl">🚀</span>
              </div>
              <h4 className="font-semibold text-lg mb-2">Adaptation Continue</h4>
              <p className="text-sm text-muted-foreground">
                Ajustement constant du programme selon vos progrès et vos besoins
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
