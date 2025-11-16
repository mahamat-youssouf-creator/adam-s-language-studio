import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, Zap } from "lucide-react";

const Pricing = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const plans = [
    {
      name: "Cours Individuel",
      price: "£45",
      period: "par heure",
      description: "Parfait pour commencer et tester",
      features: [
        "1 cours d'une heure",
        "Contenu personnalisé",
        "Supports de cours inclus",
        "Suivi par email",
        "Annulation 24h avant",
      ],
      icon: Star,
      popular: false,
      ctaText: "Réserver maintenant",
    },
    {
      name: "Pack 5 Séances",
      price: "£200",
      period: "soit £40/heure",
      description: "Le choix idéal pour progresser",
      features: [
        "5 cours d'une heure",
        "Programme personnalisé",
        "Supports de cours inclus",
        "Suivi régulier",
        "Flexibilité de planning",
        "Économie de £25",
      ],
      icon: Zap,
      popular: true,
      ctaText: "Choisir ce pack",
    },
    {
      name: "Pack 10 Séances",
      price: "£350",
      period: "soit £35/heure",
      description: "La meilleure offre pour exceller",
      features: [
        "10 cours d'une heure",
        "Programme sur mesure",
        "Tous supports inclus",
        "Suivi approfondi",
        "Priorité de planning",
        "Évaluation de progrès",
        "Économie de £100",
        "Garantie satisfaction",
      ],
      icon: Star,
      popular: false,
      ctaText: "Meilleure offre",
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Pricing
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Packages Adapted to Your Budget
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the package that suits you. All packages include the first free trial lesson.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative animate-fade-in-up hover:shadow-large transition-smooth ${
                plan.popular
                  ? "border-2 border-accent shadow-cyan scale-105 md:scale-110 bg-card/50 backdrop-blur"
                  : "border-2 border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold shadow-cyan">
                  ⭐ Most Popular
                </div>
              )}

              <CardContent className="p-8">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                      plan.popular ? "bg-accent/20" : "bg-primary/10"
                    }`}
                  >
                    <plan.icon
                      className={plan.popular ? "text-accent" : "text-primary"}
                      size={32}
                    />
                  </div>
                </div>

                {/* Name */}
                <h3 className="font-heading text-2xl font-bold text-center mb-2">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="text-center mb-4">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  </div>
                  <div className="text-muted-foreground text-sm">{plan.period}</div>
                </div>

                {/* Description */}
                <p className="text-center text-muted-foreground text-sm mb-6">
                  {plan.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check
                        className={`flex-shrink-0 ${
                          plan.popular ? "text-accent" : "text-primary"
                        }`}
                        size={20}
                      />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  variant={plan.popular ? "secondary" : "outline"}
                  size="lg"
                  className="w-full"
                  onClick={scrollToContact}
                >
                  {plan.ctaText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-card rounded-2xl shadow-medium px-8 py-6 max-w-2xl">
            <h4 className="font-heading text-xl font-bold mb-2">
              🎁 Special Offer for New Students
            </h4>
            <p className="text-muted-foreground">
              Enjoy a free 30-minute trial lesson to discover my method and
              set your learning goals together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
