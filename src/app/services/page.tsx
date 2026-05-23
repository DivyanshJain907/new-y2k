import { ArrowRight, CheckCircle2 } from "lucide-react";

import { SectionLabel } from "@/components/section-label";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SmartImage } from "@/components/smart-image";
import { getSiteContent } from "@/lib/content";

export const dynamic = "force-dynamic";

export default async function ServicesPage() {
  const content = await getSiteContent();

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50/20 to-slate-50 text-slate-900">
      <SiteHeader content={content} />

      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl animate-rise">
          <SectionLabel>Our Services</SectionLabel>
          <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl glow-text">
            Premium Digital Services for Every Need
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            Discover our comprehensive range of digital services designed to meet your everyday needs with professional quality and fast turnaround times.
          </p>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {content.services.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-slate-50 p-3 hover-lift neon-border"
            >
              <SmartImage
                src={service.image}
                alt={service.title}
                className="aspect-[4/3] w-full rounded-xl object-cover image-zoom"
              />
              <div className="p-5">
                <h2 className="text-xl font-bold tracking-tight text-blue-700">
                  {service.title}
                </h2>
                <p className="mt-3 leading-7 text-slate-700">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700"
                >
                  Book Service
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-100 to-purple-50 px-4 py-20 md:py-28 border-y border-blue-200">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel>How We Work</SectionLabel>
            <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl glow-text">
              Simple process from start to finish.
            </h2>
          </div>
          <div className="grid gap-4">
            {[
              "Contact us or visit our center",
              "Discuss your requirements and get a quote",
              "Fast, professional service delivery",
              "Receive your completed service with quality assurance",
            ].map((step, index) => (
              <div
                key={step}
                className="flex items-center gap-4 rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-slate-50 p-5 neon-border"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-700">
                  {index + 1}
                </span>
                <CheckCircle2 className="text-blue-600" size={21} />
                <p className="font-bold text-slate-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter content={content} />
    </main>
  );
}
