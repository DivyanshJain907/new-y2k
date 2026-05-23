import { ArrowRight, Clock3, Mail, MapPin, Phone } from "lucide-react";

import { SectionLabel } from "@/components/section-label";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SmartImage } from "@/components/smart-image";
import { getSiteContent } from "@/lib/content";

import { ContactForm } from "./contact-form";

export const dynamic = "force-dynamic";

export default async function ContactPage() {
  const content = await getSiteContent();

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50/20 to-slate-50 text-slate-900">
      <SiteHeader content={content} />

      <section className="px-4 py-10 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="animate-rise flex flex-col justify-between rounded-3xl bg-gradient-to-br from-blue-100 to-slate-50 p-6 text-slate-900 shadow-lg shadow-blue-200 border border-blue-200 md:p-10 neon-border">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
                Contact
              </p>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl glow-text">
                Get In Touch With Us Today
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                Reach out to Y2K Computers for any service inquiries, bookings, or questions. Our team is ready to help you.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${content.contact.phone}`}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-5 font-bold text-white hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-blue-200"
                >
                  <Phone size={19} />
                  Call Now
                </a>
                <a
                  href={`mailto:${content.contact.email}`}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-blue-300 bg-blue-50 px-5 font-bold text-blue-700 hover:border-blue-400 hover:bg-blue-100"
                >
                  <Mail size={19} />
                  Send Email
                </a>
              </div>
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-blue-200">
              <SmartImage
                src={content.gallery[0]?.image || content.hero.image}
                alt="Y2K Computers service center"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
          </div>

          <div className="grid gap-4 animate-rise delay-2">
            <ContactForm />
            <div className="grid gap-3 sm:grid-cols-2">
              <ContactCard icon={<Phone size={22} />} title="Phone" value={content.contact.phone} />
              <ContactCard icon={<Mail size={22} />} title="Email" value={content.contact.email} />
              <ContactCard icon={<MapPin size={22} />} title="Address" value={content.contact.address} />
              <ContactCard icon={<Clock3 size={22} />} title="Hours" value={content.contact.hours} />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 md:pb-24">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-slate-50 shadow-lg shadow-blue-200 lg:grid-cols-[1fr_0.85fr] neon-border">
          <div className="bg-gradient-to-br from-blue-100 to-slate-50 p-6 border-r border-blue-200 md:p-10">
            <SectionLabel>Location</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl glow-text">
              Visit Y2K Computers
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-slate-700">
              {content.contact.address}
            </p>
            <a
              href={`https://www.google.com/maps/search/${encodeURIComponent(content.contact.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-5 font-bold text-white hover:from-blue-500 hover:to-purple-500 sm:w-max shadow-lg shadow-blue-200"
            >
              Open Map
              <ArrowRight size={18} />
            </a>
          </div>
          <div className="min-h-72 bg-gradient-to-br from-slate-100 to-blue-50 p-5 text-slate-900 md:p-8">
            <iframe
              className="h-full w-full rounded-2xl border border-blue-200"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.573088887455!2d77.72974932346924!3d28.83849737248627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c6d0b0000001%3A0x0!2sSri%20Sai%20Mandir%20Rd%2C%20MDA%20Colony%2C%20Moradabad!5e0!3m2!1sen!2sin!4v1684756890"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: "none" }}
            />
          </div>
        </div>
      </section>

      <SiteFooter content={content} />
    </main>
  );
}

function ContactCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex min-h-32 gap-4 rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-slate-50 p-4 hover-lift neon-border md:p-5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
          {title}
        </span>
        <span className="mt-1 block break-words leading-7 text-slate-700">
          {value}
        </span>
      </span>
    </div>
  );
}
