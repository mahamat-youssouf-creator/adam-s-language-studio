import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah L.",
      role: "Étudiante en arabe",
      image: "👩‍💼",
      rating: 5,
      text: "Adam est un professeur exceptionnel ! En 6 mois, je suis passée de débutante à un niveau intermédiaire en arabe. Sa patience et sa méthode m'ont vraiment aidée à prendre confiance.",
    },
    {
      name: "Mohammed K.",
      role: "Préparation IELTS",
      image: "👨‍💻",
      rating: 5,
      text: "Grâce à Adam, j'ai obtenu 7.5 à l'IELTS ! Ses techniques pour l'examen et sa maîtrise parfaite de l'anglais m'ont permis d'atteindre mon objectif pour mes études au Royaume-Uni.",
    },
    {
      name: "Fatima B.",
      role: "Cours d'arabe coranique",
      image: "👩‍🎓",
      rating: 5,
      text: "Un enseignement de qualité avec une approche respectueuse et bienveillante. Adam maîtrise parfaitement les règles de Tajweed et sait les transmettre avec clarté.",
    },
    {
      name: "James R.",
      role: "Cours d'anglais professionnel",
      image: "👨‍💼",
      rating: 5,
      text: "Mes compétences en anglais professionnel se sont considérablement améliorées. Adam adapte chaque cours à mes besoins spécifiques et m'a aidé à réussir mes présentations au travail.",
    },
    {
      name: "Amina D.",
      role: "Cours d'arabe débutant",
      image: "👩",
      rating: 5,
      text: "Je recommande vivement ! Adam est très pédagogue et sait rendre l'apprentissage de l'arabe accessible et agréable. Les cours sont toujours bien préparés et intéressants.",
    },
    {
      name: "David M.",
      role: "Cours d'anglais conversationnel",
      image: "👨",
      rating: 5,
      text: "Excellent professeur qui met l'accent sur la pratique orale. Ma fluidité en anglais s'est énormément améliorée en quelques mois seulement. Les séances sont dynamiques et motivantes.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Témoignages
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Ce Que Disent Mes Élèves
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            La satisfaction de mes élèves est ma plus grande fierté
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="glass-card animate-fade-in-up hover:shadow-glow transition-smooth border-2 border-border hover:border-accent/50 group"
            >
              <CardContent className="p-6 relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-smooth"></div>
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-accent fill-accent" size={18} />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-accent/10 rounded-2xl px-8 py-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-accent fill-accent" size={24} />
              ))}
            </div>
            <p className="font-heading text-3xl font-bold mb-1">4.9/5</p>
            <p className="text-muted-foreground">Basé sur plus de 150 avis vérifiés</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
