import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Award, Calendar } from "lucide-react";
import heroImage from "@/assets/teacher-hero.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-hero opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full">
              <span className="text-accent font-semibold">🎓 Basé à Londres</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Maîtrisez l'<span className="text-primary">Arabe</span> et l'
              <span className="text-accent">Anglais</span> avec un Professeur Expérimenté
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Cours personnalisés adaptés à votre niveau et vos objectifs. Apprenez avec
              confiance grâce à une méthode éprouvée et des résultats garantis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                variant="hero"
                size="xl"
                onClick={() => scrollToSection("contact")}
              >
                Réserver un Cours Gratuit
                <ArrowRight className="ml-2" />
              </Button>
              <Button
                variant="outline"
                size="xl"
                onClick={() => scrollToSection("services")}
              >
                Découvrir les Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Calendar className="text-accent" size={24} />
                </div>
                <div className="font-bold text-2xl text-foreground">10+</div>
                <div className="text-sm text-muted-foreground">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="text-accent" size={24} />
                </div>
                <div className="font-bold text-2xl text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Élèves formés</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="text-accent" size={24} />
                </div>
                <div className="font-bold text-2xl text-foreground">4.9/5</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="text-accent" size={24} />
                </div>
                <div className="font-bold text-2xl text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Taux de réussite</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:block animate-fade-in-up">
            <div className="relative">
              <div className="absolute -inset-4 gradient-gold opacity-20 blur-3xl rounded-full"></div>
              <img
                src={heroImage}
                alt="Adam Mahamat - Professeur de langues"
                className="relative rounded-3xl shadow-large w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
