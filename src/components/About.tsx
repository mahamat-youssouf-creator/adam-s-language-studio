import { CheckCircle2, BookOpen, Award, Target } from "lucide-react";
import teachingImage from "@/assets/teaching-session.jpg";

const About = () => {
  const highlights = [
    {
      icon: BookOpen,
      title: "Certified Degrees",
      description: "Master's in Linguistics and TESOL/TEFL certifications",
    },
    {
      icon: Award,
      title: "Proven Method",
      description: "Communicative and immersive approach adapted to each student",
    },
    {
      icon: Target,
      title: "Guaranteed Results",
      description: "98% of students achieve their goals within 6 months",
    },
  ];

  const qualifications = [
    "Master's in Applied Linguistics",
    "TESOL Certification (Teaching English to Speakers of Other Languages)",
    "TEFL Certification (Teaching English as a Foreign Language)",
    "Diploma in Classical Arabic Studies",
    "Specialization in Quranic Arabic and Tajweed",
    "Over 10 years of teaching experience",
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            About Me
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Your Partner in Language Mastery
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about teaching, I put my expertise at the service of your success
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="animate-fade-in-up">
            <img
              src={teachingImage}
              alt="Online teaching session"
              className="rounded-3xl shadow-large w-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="animate-fade-in-up">
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-6">
              Adam Mahamat - Certified Language Teacher
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Based in London for over 10 years, I am a passionate teacher specializing
              in teaching Arabic and English. My mission is to make language learning
              accessible, effective and enjoyable for all my students.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Whether you are a complete beginner or want to perfect your skills, I adapt
              my method to your profile and goals. My communicative approach emphasizes
              oral practice and focuses on building confidence.
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
