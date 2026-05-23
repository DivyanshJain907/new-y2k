import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber: string;
}

export function WhatsAppButton({ phoneNumber }: WhatsAppButtonProps) {
  const cleanPhoneNumber = phoneNumber.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhoneNumber}?text=Hi%20Y2K%20Computers`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-125 hover:shadow-green-500/50 md:bottom-8 md:right-8 hover:-translate-y-1 active:scale-95"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
}
