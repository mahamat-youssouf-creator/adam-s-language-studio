import { CheckCircle2, BookOpen, Award, Target } from "lucide-react";
import teachingImage from "@/assets/teaching-session.jpg";

const About = () => {
  const highlights = [
    {
      icon: BookOpen,
      title: "Diplômes Certifiés",
      description: "Master en Linguistique et certifications TESOL/TEFL",
    },
    {
      icon: Award,
      title: "Méthode Éprouvée",
      description: "Approche communicative et immersive adaptée à chaque élève",
    },
    {
      icon: Target,
      title: "Résultats Garantis",
      description: "98% des élèves atteignent leurs objectifs en 6 mois",
    },
  ];

  const qualifications = [
    "Master en Linguistique Appliquée",
    "Certification TESOL (Teaching English to Speakers of Other Languages)",
    "Certification TEFL (Teaching English as a Foreign Language)",
    "Diplôme en Études Arabes Classiques",
    "Spécialisation en Arabe Coranique et Tajweed",
    "Plus de 10 ans d'expérience en enseignement",
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            À Propos
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Votre Partenaire pour la Maîtrise des Langues
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionné par l'enseignement, je mets mon expertise au service de votre réussite
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="animate-fade-in-up">
            <img
              src={teachingImage}
              alt="Séance d'enseignement en ligne"
              className="rounded-3xl shadow-large w-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="animate-fade-in-up">
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-6">
              Adam Mahamat - Professeur de Langues Certifié
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Basé à Londres depuis plus de 10 ans, je suis un professeur passionné spécialisé
              dans l'enseignement de l'arabe et de l'anglais. Ma mission est de rendre
              l'apprentissage des langues accessible, efficace et agréable pour tous mes élèves.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Que vous soyez débutant complet ou que vous souhaitiez perfectionner vos
              compétences, j'adapte ma méthode à votre profil et vos objectifs. Mon approche
              communicative privilégie la pratique orale et met l'accent sur la confiance en soi.
            </p>

            {/* Highlights */}
            <div className="grid gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 bg-card rounded-xl shadow-subtle hover:shadow-medium transition-smooth"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <item.icon className="text-accent" size={24} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Qualifications */}
        <div className="bg-card rounded-3xl shadow-medium p-8 md:p-12 animate-fade-in-up">
          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-8 text-center">
            Qualifications & Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {qualifications.map((qualification, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={20} />
                <span className="text-muted-foreground">{qualification}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
