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
      name: "Single Lesson",
      price: "£45",
      period: "per hour",
      description: "Perfect to start and test",
      features: [
        "1 hour lesson",
        "Personalized content",
        "Course materials included",
        "Email follow-up",
        "24h cancellation",
      ],
      icon: Star,
      popular: false,
      ctaText: "Book now",
    },
    {
      name: "5 Session Pack",
      price: "£200",
      period: "£40/hour",
      description: "The ideal choice for progress",
      features: [
        "5 one-hour lessons",
        "Personalized program",
        "Course materials included",
        "Regular follow-up",
        "Flexible scheduling",
        "£25 savings",
      ],
      icon: Zap,
      popular: true,
      ctaText: "Choose this pack",
    },
    {
      name: "10 Session Pack",
      price: "£350",
      period: "£35/hour",
      description: "Best offer to excel",
      features: [
        "10 one-hour lessons",
        "Custom program",
        "All materials included",
        "In-depth follow-up",
        "Priority scheduling",
        "Progress evaluation",
        "£100 savings",
        "Satisfaction guarantee",
      ],
      icon: Star,
      popular: false,
      ctaText: "Best offer",
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
            Plans Adapted to Your Budget
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the plan that suits you. All packs include the first free trial lesson.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative animate-fade-in-up transition-smooth overflow-hidden ${
                plan.popular
                  ? "glass-card border-2 border-accent shadow-glow scale-105 md:scale-110"
                  : "glass-card border-2 border-border hover:shadow-large"
              }`}
            >
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 animate-gradient"></div>
              )}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold shadow-gold">
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
              Get a free 30-minute trial lesson to discover my method and define
              your learning goals together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
