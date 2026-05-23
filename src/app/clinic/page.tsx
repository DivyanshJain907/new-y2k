import { Camera, Sparkles } from "lucide-react";

import { SectionLabel } from "@/components/section-label";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SmartImage } from "@/components/smart-image";
import { getSiteContent } from "@/lib/content";

export const dynamic = "force-dynamic";

export default async function ClinicPage() {
  const content = await getSiteContent();

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50/20 to-slate-50 text-slate-900">
      <SiteHeader content={content} />

      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div className="animate-rise">
            <SectionLabel>Gallery</SectionLabel>
            <h1 className="text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl glow-text">
              Explore Our Service Center
            </h1>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-700 animate-rise delay-2">
            Browse our modern facilities, professional workspace, and technology center. These images showcase our commitment to providing premium service.
          </p>
        </div>
      </section>

      <section className="px-4 pb-20 md:pb-28">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {content.gallery.map((item, index) => (
            <figure
              key={item.title}
              className={`rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-slate-50 p-3 hover-lift neon-border ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <SmartImage
                src={item.image}
                alt={item.title}
                className={`w-full rounded-xl object-cover image-zoom ${
                  index === 0 ? "aspect-[16/10] md:h-[520px]" : "aspect-[4/3]"
                }`}
              />
              <figcaption className="flex items-center justify-between p-4">
                <span className="font-bold text-blue-700">{item.title}</span>
                <Camera size={18} className="text-blue-600" />
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {["Comfortable Waiting Area", "Advanced Technology", "Professional Setup"].map(
            (item) => (
              <div
                key={item}
                className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-slate-50 p-6 neon-border"
              >
                <Sparkles className="mb-4 text-blue-600" size={23} />
                <h2 className="text-xl font-bold text-blue-700">{item}</h2>
                <p className="mt-3 leading-7 text-slate-700">
                  Designed to provide a premium, comfortable, and professional experience during every visit.
                </p>
              </div>
            ),
          )}
        </div>
      </section>

      <SiteFooter content={content} />
    </main>
  );
}
