import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message envoyé !",
      description: "Je vous répondrai dans les plus brefs délais. Merci !",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "adam.mahamat@example.com",
      link: "mailto:adam.mahamat@example.com",
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "+44 7XXX XXXXXX",
      link: "tel:+447XXXXXXXX",
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "Londres, Royaume-Uni",
      link: null,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Message WhatsApp",
      link: "https://wa.me/447XXXXXXXX",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Contact
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Réservez Votre Cours Gratuit
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Prêt à commencer votre parcours d'apprentissage ? Contactez-moi dès maintenant !
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <div className="bg-card rounded-3xl shadow-medium p-8 border-2 border-border">
              <h3 className="font-heading text-2xl font-bold mb-6">
                Formulaire de Contact
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Nom complet *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Votre nom"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="votre.email@exemple.com"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+44 7XXX XXXXXX"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="course">Type de cours souhaité *</Label>
                  <Select name="course" required>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Sélectionnez un cours" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="arabic-beginner">Arabe - Débutant</SelectItem>
                      <SelectItem value="arabic-intermediate">
                        Arabe - Intermédiaire
                      </SelectItem>
                      <SelectItem value="arabic-advanced">Arabe - Avancé</SelectItem>
                      <SelectItem value="english-beginner">Anglais - Débutant</SelectItem>
                      <SelectItem value="english-intermediate">
                        Anglais - Intermédiaire
                      </SelectItem>
                      <SelectItem value="english-advanced">Anglais - Avancé</SelectItem>
                      <SelectItem value="quranic-arabic">Arabe Coranique</SelectItem>
                      <SelectItem value="exam-prep">Préparation aux examens</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Parlez-moi de vos objectifs d'apprentissage..."
                    rows={5}
                    required
                    className="mt-2"
                  />
                </div>

                <Button
                  type="submit"
                  variant="secondary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  En soumettant ce formulaire, vous acceptez d'être contacté concernant votre
                  demande.
                </p>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up space-y-8">
            <div className="bg-card rounded-3xl shadow-medium p-8 border-2 border-border">
              <h3 className="font-heading text-2xl font-bold mb-6">Informations de Contact</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <info.icon className="text-accent" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-foreground mb-1">{info.label}</div>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-muted-foreground hover:text-accent transition-smooth"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-muted-foreground">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-card rounded-3xl shadow-medium p-8 border-2 border-border">
              <h3 className="font-heading text-2xl font-bold mb-6">Zone d'Intervention</h3>
              <div className="aspect-video bg-muted rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="text-accent mx-auto mb-2" size={48} />
                  <p className="text-muted-foreground font-medium">
                    Londres - Zones 1 à 3
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Cours en présentiel disponibles
                  </p>
                </div>
              </div>
            </div>

            {/* Social proof */}
            <div className="bg-accent/10 rounded-3xl p-6 text-center">
              <p className="text-accent font-semibold text-lg mb-2">
                ⚡ Réponse sous 24h garantie
              </p>
              <p className="text-muted-foreground text-sm">
                Je m'engage à répondre à toutes les demandes dans les plus brefs délais
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
