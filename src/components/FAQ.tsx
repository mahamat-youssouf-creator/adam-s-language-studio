import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Quelle est la durée idéale d'un cours ?",
      answer:
        "La durée standard d'un cours est de 60 minutes, ce qui permet un bon équilibre entre concentration et efficacité. Pour la préparation aux examens, je recommande des séances de 90 minutes. Les cours d'essai sont de 30 minutes pour découvrir ma méthode.",
    },
    {
      question: "Quel matériel dois-je prévoir pour les cours en ligne ?",
      answer:
        "Pour les cours en ligne, vous aurez besoin d'un ordinateur, tablette ou smartphone avec webcam et microphone, une connexion internet stable, et Zoom ou Skype installé. Je fournis tous les supports de cours (documents PDF, exercices) par email avant chaque séance.",
    },
    {
      question: "Puis-je annuler ou reporter un cours ?",
      answer:
        "Oui, vous pouvez annuler ou reporter un cours gratuitement jusqu'à 24 heures avant l'heure prévue. En cas d'annulation tardive (moins de 24h), le cours sera considéré comme effectué, sauf en cas d'urgence justifiée.",
    },
    {
      question: "Quels niveaux acceptez-vous ?",
      answer:
        "J'accepte tous les niveaux, du grand débutant (A0) au niveau avancé (C1). Lors du premier cours, nous évaluons ensemble votre niveau actuel pour créer un programme parfaitement adapté à vos besoins et objectifs.",
    },
    {
      question: "Les cours sont-ils disponibles en ligne ou en présentiel ?",
      answer:
        "Je propose les deux formats. Les cours en ligne se font via Zoom ou Skype, ce qui offre une grande flexibilité. Les cours en présentiel se déroulent à Londres (zones 1-3). Le contenu et la qualité sont identiques quel que soit le format choisi.",
    },
    {
      question: "Combien de temps faut-il pour voir des progrès ?",
      answer:
        "Les premiers progrès sont généralement visibles dès les premières semaines, notamment en compréhension et vocabulaire de base. Pour atteindre un niveau conversationnel solide, comptez 3 à 6 mois avec un rythme de 2 cours par semaine. Les progrès varient selon votre engagement et votre pratique personnelle.",
    },
    {
      question: "Proposez-vous des cours pour enfants ?",
      answer:
        "Oui, je propose des cours adaptés aux enfants à partir de 7 ans. J'utilise une approche ludique et interactive avec des jeux, des chansons et des activités adaptées à leur âge pour maintenir leur attention et leur motivation.",
    },
    {
      question: "Comment se passe le premier cours gratuit ?",
      answer:
        "Le cours d'essai gratuit dure 30 minutes. C'est l'occasion de faire connaissance, d'évaluer votre niveau, de discuter de vos objectifs et de vous présenter ma méthode. Aucun engagement n'est requis, et vous décidez ensuite si vous souhaitez continuer.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Questions Fréquemment Posées
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Vous avez des questions ? Voici les réponses aux interrogations les plus courantes
          </p>
        </div>

        <div className="animate-fade-in-up">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border-2 border-border rounded-2xl px-6 hover:border-accent/30 transition-smooth shadow-subtle"
              >
                <AccordionTrigger className="text-left hover:text-accent transition-smooth py-6">
                  <span className="font-semibold text-lg pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional Help */}
        <div className="mt-12 text-center animate-fade-in-up">
          <div className="inline-block bg-accent/10 rounded-2xl px-8 py-6">
            <p className="text-foreground font-semibold mb-2">
              Vous avez d'autres questions ?
            </p>
            <p className="text-muted-foreground">
              N'hésitez pas à me contacter directement, je serai ravi de vous répondre !
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
