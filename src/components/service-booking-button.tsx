"use client";

import { ArrowRight } from "lucide-react";

interface ServiceBookingButtonProps {
  serviceName: string;
  phone?: string;
}

// Default contact number fallback
const DEFAULT_PHONE = "+91 94122 36477";

export function ServiceBookingButton({
  serviceName,
  phone,
}: ServiceBookingButtonProps) {
  const handleBooking = () => {
    const phoneToUse = phone || DEFAULT_PHONE;

    // Clean phone number - remove all non-digits
    const phoneForWhatsApp = phoneToUse.replace(/\D/g, "");

    if (!phoneForWhatsApp) {
      console.error("No valid phone number available");
      return;
    }

    // Create WhatsApp message
    const message = `Hi, I'm interested in booking "${serviceName}" service.`;
    const encodedMessage = encodeURIComponent(message);

    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/${phoneForWhatsApp}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleBooking}
      className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
    >
      Book Service
      <ArrowRight
        size={16}
        className="transition group-hover:translate-x-1"
      />
    </button>
  );
}
