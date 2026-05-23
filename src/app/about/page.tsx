import { Check, Zap, Star, Users } from "lucide-react";

import { SectionLabel } from "@/components/section-label";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SmartImage } from "@/components/smart-image";
import { getSiteContent } from "@/lib/content";

export const dynamic = "force-dynamic";

export default async function AboutPage() {
  const content = await getSiteContent();

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50/20 to-slate-50 text-slate-900">
      <SiteHeader content={content} />

      <section className="px-4 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center animate-rise">
          <SmartImage
            src={content.owner.image}
            alt={content.owner.name}
            className="rounded-3xl object-cover shadow-xl shadow-blue-300 border border-blue-200 aspect-[4/5]"
          />
          <div>
            <SectionLabel>From Our Founder</SectionLabel>
            <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl glow-text">
              A Message from the Owner
            </h2>
            <blockquote className="mt-8 rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-6 text-lg leading-relaxed text-slate-700 italic">
              "{content.owner.message}"
            </blockquote>
            <div className="mt-8">
              <p className="text-xl font-bold text-slate-900">{content.owner.name}</p>
              <p className="text-blue-600 font-semibold">{content.owner.title}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="animate-rise">
            <SectionLabel>About Y2K Computers</SectionLabel>
            <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl glow-text">
              Premium Digital Services, Premium Quality.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 whitespace-pre-wrap">
              {content.about.body}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 animate-rise delay-2">
            <SmartImage
              src={content.about.image}
              alt={content.about.title}
              className="aspect-[4/5] rounded-2xl object-cover shadow-lg shadow-blue-200 border border-blue-200"
            />
            <div className="space-y-4 pt-12">
              {content.gallery.slice(0, 2).map((item) => (
                <SmartImage
                  key={item.title}
                  src={item.image}
                  alt={item.title}
                  className="aspect-[4/3] rounded-2xl object-cover shadow-sm border border-blue-200"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          <ValueCard
            icon={<Zap size={24} />}
            title="Fast Service"
            body="Quick turnaround without compromising on quality and professionalism."
          />
          <ValueCard
            icon={<Star size={24} />}
            title="Premium Quality"
            body="Industry-leading standards and attention to every detail in our services."
          />
          <ValueCard
            icon={<Users size={24} />}
            title="Customer First"
            body="Dedicated support and personalized solutions for every client."
          />
        </div>
      </section>

      <section className="px-4 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-slate-50 p-7 shadow-lg shadow-blue-200 md:grid-cols-[0.9fr_1.1fr] md:p-10 neon-border">
          <div>
            <SectionLabel>Our Values</SectionLabel>
            <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl glow-text">
              Built on trust and excellence.
            </h2>
          </div>
          <div className="grid gap-4">
            {[
              "Listen to understand your exact requirements and needs.",
              "Deliver solutions with transparent pricing and clear timelines.",
              "Maintain highest standards of professionalism in every interaction.",
              "Build long-term relationships based on reliability and quality.",
            ].map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl bg-blue-100 p-4 border border-blue-200">
                <Check className="mt-1 text-blue-600 shrink-0" size={20} />
                <p className="leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter content={content} />
    </main>
  );
}

function ValueCard({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <article className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-slate-50 p-6 hover-lift neon-border">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-blue-700">{title}</h3>
      <p className="mt-3 leading-7 text-slate-700">{body}</p>
    </article>
  );
}
