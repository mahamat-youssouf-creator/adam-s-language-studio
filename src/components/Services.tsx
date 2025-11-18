import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, GraduationCap, BookMarked, FileCheck, Clock, MapPin } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Cours d'Arabe",
      subtitle: "Débutant à Avancé",
      description:
        "Apprenez l'arabe moderne standard ou dialectal avec une méthode progressive adaptée à votre niveau. Développez vos compétences en lecture, écriture, conversation et compréhension.",
      features: ["Alphabet et phonétique", "Grammaire progressive", "Conversation courante", "Vocabulaire thématique"],
      duration: "1h par session",
      format: "En ligne ou présentiel",
      color: "primary",
    },
    {
      icon: GraduationCap,
      title: "Cours d'Anglais",
      subtitle: "Tous Niveaux",
      description:
        "Améliorez votre anglais professionnel ou conversationnel avec des cours interactifs. Perfectionnez votre prononciation, votre grammaire et votre aisance à l'oral.",
      features: ["Speaking & Listening", "Business English", "Grammaire avancée", "Préparation entretiens"],
      duration: "1h par session",
      format: "En ligne ou présentiel",
      color: "accent",
    },
    {
      icon: BookMarked,
      title: "Arabe Coranique & Classique",
      subtitle: "Programme Spécialisé",
      description:
        "Étudiez l'arabe coranique avec une approche respectueuse et académique. Apprenez les règles de Tajweed et la compréhension des textes classiques.",
      features: ["Lecture coranique (Tajweed)", "Mémorisation guidée", "Compréhension textuelle", "Arabe classique"],
      duration: "1h par session",
      format: "En ligne ou présentiel",
      color: "primary",
    },
    {
      icon: FileCheck,
      title: "Préparation aux Examens",
      subtitle: "IELTS, TOEFL, Cambridge",
      description:
        "Préparez-vous efficacement aux tests de langue avec des exercices ciblés, des simulations d'examen et des stratégies éprouvées pour maximiser votre score.",
      features: ["Tests blancs", "Stratégies d'examen", "Correction détaillée", "Suivi personnalisé"],
      duration: "1h30 par session",
      format: "En ligne ou présentiel",
      color: "accent",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Mes Services
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Des Cours Adaptés à Vos Besoins
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choisissez le programme qui correspond à vos objectifs d'apprentissage
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group glass-card hover:shadow-glow transition-smooth animate-fade-in-up border-2 hover:border-accent/50 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-smooth"></div>
              <CardContent className="p-8 relative z-10">
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`flex-shrink-0 w-16 h-16 rounded-2xl ${
                      service.color === "accent" ? "bg-accent/10" : "bg-primary/10"
                    } flex items-center justify-center group-hover:scale-110 transition-bounce`}
                  >
                    <service.icon
                      className={service.color === "accent" ? "text-accent" : "text-primary"}
                      size={32}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-2xl font-bold mb-1">{service.title}</h3>
                    <p className="text-accent font-medium">{service.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 pt-6 border-t border-border">
                  <div className="flex items-center gap-2">
                    <Clock className="text-accent" size={18} />
                    <span className="text-sm text-muted-foreground">{service.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="text-accent" size={18} />
                    <span className="text-sm text-muted-foreground">{service.format}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-accent/10 rounded-2xl px-6 py-4">
            <p className="text-accent font-semibold">
              ✨ Première séance d'essai gratuite pour tous les nouveaux élèves
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
