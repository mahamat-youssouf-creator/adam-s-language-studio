import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({ title: "Message sent!", description: "I'll reply as soon as possible. Thank you!" });
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-20 space-y-4">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Contact Us</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
            Start Your Learning Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Book your free trial lesson today and experience our expert teaching approach
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="glass-card rounded-3xl shadow-large p-8 md:p-10 border-2 border-border/50">
            <h3 className="font-heading text-2xl font-bold mb-8">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2"><Label htmlFor="name" className="text-base">Full Name *</Label><Input id="name" name="name" placeholder="Enter your name" required className="mt-2 h-12" /></div>
              <div className="space-y-2"><Label htmlFor="email" className="text-base">Email Address *</Label><Input id="email" name="email" type="email" placeholder="your.email@example.com" required className="mt-2 h-12" /></div>
              <div className="space-y-2"><Label htmlFor="message" className="text-base">Your Message *</Label><Textarea id="message" name="message" placeholder="Tell us about your learning goals and what you'd like to achieve..." rows={6} required className="mt-2" /></div>
              <Button type="submit" variant="secondary" size="lg" className="w-full h-12 text-base shadow-glow" disabled={isSubmitting}>{isSubmitting ? "Sending..." : "Send Message"}</Button>
            </form>
          </div>
          <div className="space-y-8">
            <div className="glass-card rounded-3xl shadow-large p-8 md:p-10 border-2 border-border/50">
              <h3 className="font-heading text-2xl font-bold mb-8">Get in touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-smooth"><Mail className="text-accent flex-shrink-0 mt-1" size={24} /><div><p className="text-sm text-muted-foreground mb-1">Email us</p><a href="mailto:adam.mahamat@example.com" className="font-medium hover:text-accent transition-smooth">adam.mahamat@example.com</a></div></div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-smooth"><Phone className="text-accent flex-shrink-0 mt-1" size={24} /><div><p className="text-sm text-muted-foreground mb-1">Call us</p><a href="tel:+447XXXXXXXX" className="font-medium hover:text-accent transition-smooth">+44 7XXX XXXXXX</a></div></div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-smooth"><MapPin className="text-accent flex-shrink-0 mt-1" size={24} /><div><p className="text-sm text-muted-foreground mb-1">Location</p><span className="font-medium">London, UK</span></div></div>
              </div>
            </div>
            <div className="bg-accent/10 rounded-2xl p-6 text-center border-2 border-accent/20">
              <p className="text-accent font-semibold text-lg">✨ First lesson completely free for new students!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
