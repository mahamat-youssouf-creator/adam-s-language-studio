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
      <div className="container mx-auto px-4">
        <div className="text-center mb-16"><span className="text-accent font-semibold text-sm uppercase">Contact</span><h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">Book Your Free Lesson</h2></div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-card rounded-3xl shadow-medium p-8 border-2 border-border">
            <h3 className="font-heading text-2xl font-bold mb-6">Contact Form</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div><Label htmlFor="name">Full name *</Label><Input id="name" name="name" placeholder="Your name" required className="mt-2" /></div>
              <div><Label htmlFor="email">Email *</Label><Input id="email" name="email" type="email" placeholder="your.email@example.com" required className="mt-2" /></div>
              <div><Label htmlFor="message">Message *</Label><Textarea id="message" name="message" placeholder="Tell me about your learning goals..." rows={5} required className="mt-2" /></div>
              <Button type="submit" variant="secondary" size="lg" className="w-full" disabled={isSubmitting}>{isSubmitting ? "Sending..." : "Send message"}</Button>
            </form>
          </div>
          <div className="space-y-6">
            <div className="bg-card rounded-3xl shadow-medium p-8 border-2 border-border">
              <h3 className="font-heading text-2xl font-bold mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4"><Mail className="text-accent" size={24} /><a href="mailto:adam.mahamat@example.com" className="hover:text-accent">adam.mahamat@example.com</a></div>
                <div className="flex items-center gap-4"><Phone className="text-accent" size={24} /><a href="tel:+447XXXXXXXX" className="hover:text-accent">+44 7XXX XXXXXX</a></div>
                <div className="flex items-center gap-4"><MapPin className="text-accent" size={24} /><span>London, UK</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
