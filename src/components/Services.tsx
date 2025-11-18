import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, GraduationCap, BookMarked, FileCheck, Clock, MapPin } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Arabic Lessons",
      subtitle: "Beginner to Advanced",
      description:
        "Learn Modern Standard or Dialectal Arabic with a progressive method adapted to your level. Develop your reading, writing, conversation and comprehension skills.",
      features: ["Alphabet and phonetics", "Progressive grammar", "Everyday conversation", "Thematic vocabulary"],
      duration: "1h per session",
      format: "Online or in-person",
      color: "primary",
    },
    {
      icon: GraduationCap,
      title: "English Lessons",
      subtitle: "All Levels",
      description:
        "Improve your professional or conversational English with interactive lessons. Perfect your pronunciation, grammar and fluency.",
      features: ["Speaking & Listening", "Business English", "Advanced grammar", "Interview preparation"],
      duration: "1h per session",
      format: "Online or in-person",
      color: "accent",
    },
    {
      icon: BookMarked,
      title: "Quranic & Classical Arabic",
      subtitle: "Specialized Program",
      description:
        "Study Quranic Arabic with a respectful and academic approach. Learn Tajweed rules and understanding of classical texts.",
      features: ["Quranic reading (Tajweed)", "Guided memorization", "Textual understanding", "Classical Arabic"],
      duration: "1h per session",
      format: "Online or in-person",
      color: "primary",
    },
    {
      icon: FileCheck,
      title: "Exam Preparation",
      subtitle: "IELTS, TOEFL, Cambridge",
      description:
        "Prepare effectively for language tests with targeted exercises, mock exams and proven strategies to maximize your score.",
      features: ["Practice tests", "Exam strategies", "Detailed correction", "Personalized follow-up"],
      duration: "1h30 per session",
      format: "Online or in-person",
      color: "accent",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            My Services
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Lessons Tailored to Your Needs
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the program that matches your learning goals
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
              ✨ First trial lesson free for all new students
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
