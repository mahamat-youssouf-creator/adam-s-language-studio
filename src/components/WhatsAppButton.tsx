import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number
    const phoneNumber = "447XXXXXXXX";
    const message = encodeURIComponent(
      "Bonjour Adam, je souhaite en savoir plus sur vos cours de langues."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      variant="secondary"
      size="icon"
      className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full shadow-gold hover:scale-110 transition-bounce"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <MessageCircle size={28} />
    </Button>
  );
};

export default WhatsAppButton;
