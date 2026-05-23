"use client";

import { LockKeyhole, Mail, ShieldCheck, Sparkles } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    setIsLoading(false);

    if (!response.ok) {
      setError("Email or password is incorrect.");
      return;
    }

    router.push("/admin/dashboard");
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50/20 to-slate-50 px-5 py-10 text-slate-900">
      <section className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl items-center gap-10 md:grid-cols-[1fr_440px]">
        <div className="relative">
          <div className="absolute -left-8 -top-10 h-40 w-40 rounded-full bg-blue-200/30 blur-3xl" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="Y2K Computers"
            className="mb-8 h-14 w-14 rounded-lg shadow-lg shadow-blue-200"
          />
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
            Admin CMS
          </p>
          <h1 className="max-w-2xl text-5xl font-semibold leading-[1.04] md:text-7xl">
            Manage your digital presence.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">
            Sign in to manage homepage content, services, gallery images,
            testimonials, and contact details.
          </p>
          <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
              <Sparkles className="mb-3 text-blue-600" size={20} />
              <p className="font-semibold text-slate-900">Premium admin control</p>
            </div>
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
              <ShieldCheck className="mb-3 text-blue-600" size={20} />
              <p className="font-semibold text-slate-900">Protected session</p>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-lg border border-blue-200 bg-white p-7 text-slate-900 shadow-lg shadow-blue-200 neon-border"
        >
          <h2 className="text-3xl font-semibold text-blue-700">Admin Login</h2>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            Enter your credentials to access the admin panel.
          </p>

          <label className="mt-7 block text-sm font-bold text-slate-700">Email</label>
          <div className="mt-2 flex items-center gap-3 rounded-md border border-blue-200 bg-blue-50 px-3 focus-within:border-blue-400 focus-within:bg-blue-100">
            <Mail size={18} className="text-blue-600" />
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="h-12 flex-1 bg-transparent text-slate-900 outline-none"
              type="email"
              required
            />
          </div>

          <label className="mt-4 block text-sm font-bold text-slate-700">Password</label>
          <div className="mt-2 flex items-center gap-3 rounded-md border border-blue-200 bg-blue-50 px-3 focus-within:border-blue-400 focus-within:bg-blue-100">
            <LockKeyhole size={18} className="text-blue-600" />
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="h-12 flex-1 bg-transparent text-slate-900 outline-none"
              type="password"
              required
            />
          </div>

          {error ? <p className="mt-4 text-sm text-red-600">{error}</p> : null}

          <button
            className="mt-7 h-12 w-full rounded-md bg-gradient-to-r from-blue-600 to-purple-600 font-bold text-white shadow-lg shadow-blue-200 hover:from-blue-500 hover:to-purple-500 disabled:cursor-not-allowed disabled:opacity-60"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </section>
    </main>
  );
}
