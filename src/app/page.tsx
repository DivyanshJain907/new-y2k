import {
  ArrowRight,
  Check,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";

import { SectionLabel } from "@/components/section-label";
import { ServiceBookingButton } from "@/components/service-booking-button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SmartImage } from "@/components/smart-image";
import { getSiteContent } from "@/lib/content";

export const dynamic = "force-dynamic";

export default async function Home() {
  const content = await getSiteContent();

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50/20 to-slate-50 text-slate-900">
      <SiteHeader content={content} />

      {/* Hero Section */}
      <section className="px-4 py-10 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
          <div className="animate-rise py-8">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-300 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">
              <Sparkles size={16} />
              {content.hero.eyebrow}
            </div>

            <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl glow-text">
              {content.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              {content.hero.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex h-13 items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 font-bold text-white shadow-lg shadow-blue-200 hover:from-blue-500 hover:to-purple-500 hover:-translate-y-0.5"
              >
                <Zap size={19} />
                {content.hero.primaryCta}
              </a>
              <a
                href="#services"
                className="inline-flex h-13 items-center gap-2 rounded-lg border border-blue-300 bg-blue-50 px-6 font-bold text-blue-700 hover:-translate-y-0.5 hover:border-blue-400 hover:bg-blue-100"
              >
                {content.hero.secondaryCta}
                <ArrowRight size={19} />
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
              {content.stats.map((stat) => (
                <div
                  key={`${stat.value}-${stat.label}`}
                  className="animate-rise rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-purple-50 p-4 shadow-sm hover-lift"
                >
                  <p className="text-3xl font-bold tracking-tight text-blue-700">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm font-medium leading-5 text-slate-700">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-rise delay-2">
            <div className="absolute -left-5 -top-5 hidden h-32 w-32 rounded-2xl bg-blue-200/30 md:block" />
            <div className="relative overflow-hidden rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-slate-50 p-3 shadow-lg shadow-blue-200 backdrop-blur">
              <SmartImage
                src={content.hero.image}
                alt={content.hero.title}
                className="aspect-[4/4.35] w-full rounded-xl object-cover image-zoom"
              />
              <div className="absolute bottom-7 left-7 right-7 rounded-xl border border-blue-300 bg-white p-5 shadow-lg shadow-blue-200 backdrop-blur">
                <p className="flex items-center gap-2 text-sm font-bold text-blue-700">
                  <Zap size={18} />
                  Quick Service Badge
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Fast, reliable, and professional service with premium quality assurance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="border-y border-blue-200 bg-gradient-to-r from-blue-50 to-slate-50 px-4 py-6 animate-rise">
        <div className="mx-auto grid max-w-7xl gap-4 text-sm font-bold text-slate-700 md:grid-cols-4">
          {[
            "Fast Processing",
            "Secure Services",
            "Expert Support",
            "24/7 Availability",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <Check className="text-blue-600" size={18} />
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-4 py-20 md:py-28 animate-rise">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <SectionLabel>Services</SectionLabel>
              <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl glow-text">
                Professional Services for Modern Needs
              </h2>
            </div>
            <a
              href="#contact"
              className="inline-flex h-12 w-max items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-5 font-bold text-white hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-blue-200"
            >
              Get Started
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {content.services.map((service) => (
              <article
                key={service.title}
                className="group rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-slate-50 p-3 transition neon-border hover:-translate-y-1"
              >
                <SmartImage
                  src={service.image}
                  alt={service.title}
                  className="aspect-[4/3] w-full rounded-xl object-cover image-zoom"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold tracking-tight text-blue-700">
                    {service.title}
                  </h3>
                  <p className="mt-3 min-h-16 text-sm leading-6 text-slate-700">
                    {service.description}
                  </p>
                  <ServiceBookingButton
                    serviceName={service.title}
                    phone={service.phone}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="px-4 py-20 md:py-28 animate-rise">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <SectionLabel>Gallery</SectionLabel>
            <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl glow-text">
              Our Modern Service Center
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
            {content.gallery.map((item, index) => (
              <figure
                key={item.title}
                className={index === 0 ? "md:row-span-2" : ""}
              >
                <SmartImage
                  src={item.image}
                  alt={item.title}
                  className={`w-full rounded-2xl object-cover shadow-sm image-zoom border border-blue-200 ${
                    index === 0 ? "aspect-[4/4.2] md:h-full" : "aspect-[4/3]"
                  }`}
                />
                <figcaption className="mt-3 font-bold text-slate-700">
                  {item.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="px-4 py-20 text-slate-900 md:py-28 animate-rise">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
                Customer Reviews
              </p>
              <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl glow-text">
                Trusted by Thousands of Satisfied Customers
              </h2>
            </div>
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-4xl font-bold text-blue-700">4.8/5</p>
              <p className="mt-1 text-sm font-medium text-slate-700">
                Average customer rating
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {content.testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.name}
                className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-slate-50 p-7 hover-lift"
              >
                <div className="mb-5 flex gap-1 text-blue-600">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-lg leading-8 text-slate-700">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="mt-6 font-bold text-blue-700">
                  {testimonial.name}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 py-20 md:py-28 animate-rise">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-slate-50 shadow-lg shadow-blue-200 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="bg-gradient-to-br from-blue-100 to-slate-50 p-7 md:p-12 border-r border-blue-200">
            <SectionLabel>Get In Touch</SectionLabel>
            <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl glow-text">
              Ready to Experience Premium Service?
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-8 text-slate-700">
              Contact us today to explore our services and discover how Y2K Computers can help you.
            </p>
            <a
              href={`tel:${content.contact.phone}`}
              className="mt-8 inline-flex h-13 items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 font-bold text-white hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-blue-200"
            >
              <Phone size={19} />
              Call Now
            </a>
          </div>

          <div className="grid gap-4 p-6 md:p-10">
            <ContactItem icon={<Phone size={20} />} label={content.contact.phone} />
            <ContactItem icon={<Mail size={20} />} label={content.contact.email} />
            <ContactItem icon={<MapPin size={20} />} label={content.contact.address} />
            <ContactItem icon={<Clock3 size={20} />} label={content.contact.hours} />
            <a
              href={content.contact.mapUrl}
              className="mt-2 inline-flex h-12 w-max items-center gap-2 rounded-lg border border-blue-300 bg-blue-50 px-5 font-bold text-blue-700 hover:border-blue-400 hover:bg-blue-100"
            >
              Open Map
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <SiteFooter content={content} />
    </main>
  );
}

function InfoCard({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-slate-50 p-5 shadow-sm neon-border">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-blue-700">{title}</h3>
      <p className="mt-2 leading-7 text-slate-700">{body}</p>
    </div>
  );
}

function ContactItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex gap-4 rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-slate-50 p-5 neon-border">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
        {icon}
      </span>
      <span className="self-center leading-7 text-slate-700">{label}</span>
    </div>
  );
}
