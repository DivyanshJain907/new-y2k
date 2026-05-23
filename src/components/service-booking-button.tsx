"use client";

import { ArrowRight } from "lucide-react";

interface ServiceBookingButtonProps {
  serviceName: string;
  phone?: string;
}

export function ServiceBookingButton({
  serviceName,
  phone,
}: ServiceBookingButtonProps) {
  const handleBooking = () => {
    if (!phone) return;

    // Clean phone number (remove spaces and special characters, but keep +)
    const cleanPhone = phone.replace(/[\s\-()]/g, "");

    // Create WhatsApp message
    const message = `Hi, I'm interested in booking "${serviceName}" service.`;
    const encodedMessage = encodeURIComponent(message);

    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleBooking}
      disabled={!phone}
      className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
    >
      Book Service
      <ArrowRight
        size={16}
        className="transition group-hover:translate-x-1"
      />
    </button>
  );
}
