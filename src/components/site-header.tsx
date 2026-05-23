import { Phone } from "lucide-react";
import Link from "next/link";

import type { SiteContent } from "@/lib/content";

export function SiteHeader({ content }: { content: SiteContent }) {
  return (
    <header className="sticky top-0 z-50 border-b border-blue-200 bg-gradient-to-b from-white via-blue-50/30 to-slate-50 px-4 backdrop-blur-xl animate-drop-in shadow-sm">
      <div className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between gap-3 md:gap-5">
        <Link href="/" className="flex items-center gap-2 md:gap-3 group flex-shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="Y2K Computers"
            className="h-10 w-10 md:h-11 md:w-11 rounded-lg shadow-md shadow-blue-200"
          />
          <span className="hidden sm:block">
            <span className="block text-sm md:text-lg font-bold tracking-tight text-slate-900 glow-text">
              Y2K Computers
            </span>
            <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">
              Cyber Cafe
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-bold text-slate-700 md:flex">
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
        </nav>

        <a
          href={`tel:${content.contact.phone}`}
          className="inline-flex h-10 md:h-11 items-center gap-1 md:gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-3 md:px-4 text-xs md:text-sm font-bold text-white hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-blue-200 hover:shadow-blue-300 whitespace-nowrap flex-shrink-0"
        >
          <Phone size={16} className="md:size-[17px]" />
          <span className="hidden sm:inline">Call Now</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  );
}
