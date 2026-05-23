import type { Metadata } from "next";
import "./globals.css";
import { getSiteContent } from "@/lib/content";
import { WhatsAppButton } from "@/components/whatsapp-button";

export const metadata: Metadata = {
  title: "Y2K Computers - Cyber Cafe",
  description:
    "Premium digital services including ticket booking, printing, passport services, and online form filing. Fast, reliable, and professional.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = await getSiteContent();

  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
        <WhatsAppButton phoneNumber={content.contact.phone} />
      </body>
    </html>
  );
}
