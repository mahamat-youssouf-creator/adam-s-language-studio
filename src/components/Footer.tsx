import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div><div className="flex items-center gap-2 mb-4"><div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center"><span className="text-accent-foreground font-bold text-xl">AM</span></div><div className="font-heading font-bold text-lg">Adam Mahamat</div></div><p className="text-sm opacity-80">Expert in teaching Arabic and English in London.</p></div>
          <div><h3 className="font-heading font-bold mb-4">Quick Links</h3><ul className="space-y-2">{["Home", "About", "Services", "Pricing"].map((l, i) => <li key={i}><button onClick={() => scrollToSection(l.toLowerCase())} className="text-sm opacity-80 hover:opacity-100">{l}</button></li>)}</ul></div>
          <div><h3 className="font-heading font-bold mb-4">Contact</h3><ul className="space-y-3"><li className="flex items-center gap-3"><Mail size={16} className="opacity-80" /><a href="mailto:adam.mahamat@example.com" className="text-sm opacity-80 hover:opacity-100">adam.mahamat@example.com</a></li><li className="flex items-center gap-3"><Phone size={16} className="opacity-80" /><a href="tel:+447XXXXXXXX" className="text-sm opacity-80 hover:opacity-100">+44 7XXX XXXXXX</a></li><li className="flex items-center gap-3"><MapPin size={16} className="opacity-80" /><span className="text-sm opacity-80">London, UK</span></li></ul></div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center"><p className="text-sm opacity-80">© 2025 Adam Mahamat. All rights reserved.</p></div>
      </div>
    </footer>
  );
};

export default Footer;
