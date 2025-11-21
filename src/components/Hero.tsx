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
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-mesh"></div>
      <div className="absolute inset-0 bg-background/80"></div>
      
      {/* Floating Shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full">
              <span className="text-accent font-semibold">🕌 Online Qur'an & Islamic Studies</span>
            </div>
            
          <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold mb-8 animate-fade-in leading-tight">
            Learn Qur'an & Islamic Studies
            <span className="block text-accent mt-4">with Expert Guidance</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl animate-fade-in leading-relaxed">
            Master Qur'anic recitation, memorization, and Islamic principles at Tordjok Academy. 
            15 years of expertise teaching students worldwide.
          </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <Button
                variant="hero"
                size="xl"
                onClick={() => scrollToSection("contact")}
                className="shadow-glow"
              >
                Start Free Trial
                <ArrowRight className="ml-2" />
              </Button>
              <Button
                variant="outline"
                size="xl"
                onClick={() => scrollToSection("services")}
              >
                View Programs
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Calendar className="text-accent" size={24} />
                </div>
                <div className="font-bold text-2xl text-foreground">15+</div>
                <div className="text-sm text-muted-foreground">Years experience</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="text-accent" size={24} />
                </div>
                <div className="font-bold text-2xl text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Students taught</div>
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
                <div className="text-sm text-muted-foreground">Success rate</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:block animate-fade-in-up">
            <div className="relative">
              <div className="absolute -inset-4 gradient-gold opacity-30 blur-3xl rounded-full animate-pulse"></div>
              <div className="relative overflow-hidden rounded-3xl shadow-glow">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/20 mix-blend-overlay"></div>
                <img
                  src={heroImage}
                  alt="Qur'an Teacher - Tordjok Academy"
                  className="relative w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
