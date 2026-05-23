import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import type { SiteContent } from "@/lib/content";

export function SiteFooter({ content }: { content: SiteContent }) {
  return (
    <footer className="border-t border-blue-200 bg-gradient-to-b from-slate-50 to-white px-4 py-8 md:py-14 text-slate-800">
      <div className="mx-auto grid max-w-7xl gap-6 md:gap-10 sm:grid-cols-2 lg:grid-cols-[1.15fr_0.85fr_0.85fr]">
        <div>
          <Link href="/" className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="Y2K Computers"
              className="h-12 w-12 rounded-lg shadow-md shadow-blue-200"
            />
            <span>
              <span className="block text-lg md:text-xl font-bold text-slate-900">Y2K Computers</span>
              <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                Cyber Cafe
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-md text-sm md:text-base leading-6 md:leading-7 text-slate-600">
            Your trusted destination for premium digital services including ticket booking, printing, passport assistance, and online form filing.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Pages
          </h3>
          <div className="mt-5 grid gap-3 text-slate-700">
            <Link href="/" className="hover:text-blue-600 transition">
              Home
            </Link>
            <Link href="/services" className="hover:text-blue-600 transition">
              Services
            </Link>
            <Link href="/about" className="hover:text-blue-600 transition">
              About
            </Link>
            <Link href="/clinic" className="hover:text-blue-600 transition">
              Gallery
            </Link>
            <Link href="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Contact
          </h3>
          <div className="mt-5 grid gap-4 text-sm text-slate-700">
            <FooterItem icon={<Phone size={17} />} label={content.contact.phone} />
            <FooterItem icon={<Mail size={17} />} label={content.contact.email} />
            <FooterItem icon={<MapPin size={17} />} label={content.contact.address} />
            <FooterItem icon={<Clock3 size={17} />} label={content.contact.hours} />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 md:mt-12 flex max-w-7xl flex-col justify-center gap-2 md:gap-3 border-t border-blue-200 pt-4 md:pt-6 text-xs md:text-sm text-slate-600 md:flex-row md:justify-between">
        <p className="text-center md:text-left">&copy; 2026 Y2K Computers. All rights reserved.</p>
        <p className="text-center hidden md:block">
          Premium Cyber Cafe • Fast • Reliable • Professional
        </p>
        <p className="text-center md:text-right">
          Developed by{" "}
          <a
            href="https://thejainagency.shop"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-600 hover:text-blue-700 transition"
          >
            The Jain Agency
          </a>
        </p>
      </div>
    </footer>
  );
}

function FooterItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex gap-3">
      <span className="mt-0.5 text-blue-600">{icon}</span>
      <span className="leading-6">{label}</span>
    </div>
  );
}
