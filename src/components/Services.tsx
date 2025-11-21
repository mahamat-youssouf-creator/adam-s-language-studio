import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, GraduationCap, BookMarked, FileCheck, Clock, MapPin } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: BookMarked,
      title: "Qur'an Recitation",
      subtitle: "Tajweed & Proper Pronunciation",
      description:
        "Learn to recite the Qur'an correctly with proper Tajweed rules. Master the pronunciation, rhythm, and melody of Qur'anic recitation under expert guidance.",
      features: ["Tajweed rules mastery", "Pronunciation correction", "Recitation practice", "Memorization techniques"],
      duration: "1h per session",
      format: "Online via Zoom/Skype",
      color: "primary",
    },
    {
      icon: BookOpen,
      title: "Qur'an Memorization",
      subtitle: "Hifz Program",
      description:
        "Structured Hifz program designed to help you memorize the Qur'an effectively. Personalized pace with proven memorization and retention techniques.",
      features: ["Personalized memorization plan", "Regular revision schedule", "Progress tracking", "One-on-one support"],
      duration: "1h per session",
      format: "Online via Zoom/Skype",
      color: "accent",
    },
    {
      icon: GraduationCap,
      title: "Islamic Studies",
      subtitle: "Principles & Values",
      description:
        "Comprehensive Islamic education covering fundamental beliefs, practices, ethics, and values. Learn authentic Islamic knowledge with proper understanding.",
      features: ["Islamic beliefs (Aqeedah)", "Islamic jurisprudence (Fiqh)", "Prophetic traditions", "Islamic ethics & values"],
      duration: "1h per session",
      format: "Online via Zoom/Skype",
      color: "primary",
    },
    {
      icon: FileCheck,
      title: "Arabic Language",
      subtitle: "For Qur'an Understanding",
      description:
        "Learn Classical Arabic to understand the Qur'an directly. Focus on grammar, vocabulary, and sentence structure relevant to Qur'anic texts.",
      features: ["Qur'anic Arabic grammar", "Vocabulary building", "Text comprehension", "Translation practice"],
      duration: "1h per session",
      format: "Online via Zoom/Skype",
      color: "accent",
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 space-y-4">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
            Comprehensive Islamic Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Personalized programs designed for learners at every level
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
