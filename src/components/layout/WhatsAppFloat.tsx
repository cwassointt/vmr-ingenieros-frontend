import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/51922286991"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 h-12 w-12 grid place-items-center shadow-lg text-white transition-transform hover:scale-110"
      style={{ backgroundColor: "#25D366" }}
    >
      <MessageCircle size={22} strokeWidth={2} fill="currentColor" fillOpacity={0.15} />
    </a>
  );
}

