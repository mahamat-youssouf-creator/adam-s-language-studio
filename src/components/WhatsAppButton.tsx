import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleClick = () => {
    const phone = "447XXXXXXXX";
    const message = encodeURIComponent("Hello Adam, I'd like to know more about your language lessons.");
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <Button onClick={handleClick} variant="secondary" size="icon" className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full shadow-gold hover:scale-110 transition-bounce" aria-label="Contact us on WhatsApp">
      <MessageCircle size={28} />
    </Button>
  );
};

export default WhatsAppButton;
