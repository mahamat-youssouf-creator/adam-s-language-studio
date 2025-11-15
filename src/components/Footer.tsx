import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const quickLinks = [
    { label: "Accueil", id: "hero" },
    { label: "À Propos", id: "about" },
    { label: "Services", id: "services" },
    { label: "Tarifs", id: "pricing" },
  ];

  const resourceLinks = [
    { label: "Témoignages", id: "testimonials" },
    { label: "Méthodologie", id: "methodology" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">AM</span>
              </div>
              <div>
                <div className="font-heading font-bold text-lg">Adam Mahamat</div>
                <div className="text-xs opacity-80">Professeur de Langues</div>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-6 leading-relaxed">
              Expert en enseignement de l'arabe et de l'anglais à Londres. Cours personnalisés
              pour tous niveaux.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-smooth"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-smooth"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-smooth"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://wa.me/447XXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-smooth"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-smooth"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Ressources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-smooth"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="flex-shrink-0 mt-1 opacity-80" size={16} />
                <a
                  href="mailto:adam.mahamat@example.com"
                  className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-smooth"
                >
                  adam.mahamat@example.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="flex-shrink-0 mt-1 opacity-80" size={16} />
                <a
                  href="tel:+447XXXXXXXX"
                  className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-smooth"
                >
                  +44 7XXX XXXXXX
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="flex-shrink-0 mt-1 opacity-80" size={16} />
                <span className="text-sm opacity-80">Londres, Royaume-Uni</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-80">
              © {currentYear} Adam Mahamat. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <button className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-smooth">
                Mentions Légales
              </button>
              <button className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-smooth">
                Politique de Confidentialité
              </button>
              <button className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-smooth">
                CGV
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
