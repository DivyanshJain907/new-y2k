"use client";

import { Send } from "lucide-react";
import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function submitMessage(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSending(true);
    setStatus("");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setIsSending(false);

    if (!response.ok) {
      const body = (await response.json()) as { message?: string };
      setStatus(body.message || "Could not send message.");
      return;
    }

    setForm(initialForm);
    setStatus("Message sent. Our team will get back to you soon!");
  }

  return (
    <form
      onSubmit={submitMessage}
      className="rounded-2xl md:rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-slate-50 p-4 md:p-7 shadow-lg shadow-blue-200 neon-border"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
            Service Inquiry
          </p>
          <h2 className="mt-1 text-xl md:text-2xl font-bold tracking-tight text-slate-900">
            Send a message
          </h2>
        </div>
        <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700 sm:flex">
          <Send size={21} />
        </span>
      </div>
      <div className="mt-3 grid gap-2 md:gap-x-4 sm:grid-cols-2">
        <TextInput
          label="Name"
          value={form.name}
          onChange={(value) => updateField("name", value)}
          required
        />
        <TextInput
          label="Phone"
          value={form.phone}
          onChange={(value) => updateField("phone", value)}
          required
        />
      </div>
      <TextInput
        label="Email"
        type="email"
        value={form.email}
        onChange={(value) => updateField("email", value)}
      />
      <label className="mt-3 md:mt-4 block text-sm font-bold text-slate-700">
        Message
        <textarea
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          required
          maxLength={1000}
          className="mt-2 min-h-32 md:min-h-36 w-full resize-y rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 md:py-3 text-slate-900 outline-none focus:border-blue-400 focus:bg-blue-100 text-base"
        />
      </label>
      <div className="mt-4 md:mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          disabled={isSending}
          className="inline-flex h-11 md:h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 md:px-5 font-bold text-white hover:from-blue-500 hover:to-purple-500 disabled:opacity-60 sm:w-max shadow-lg shadow-blue-200 text-base"
        >
          <Send size={18} />
          {isSending ? "Sending..." : "Send Message"}
        </button>
        {status ? <p className="text-xs md:text-sm font-semibold text-blue-600">{status}</p> : null}
      </div>
    </form>
  );
}

function TextInput({
  label,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="mt-3 md:mt-4 block text-sm font-bold text-slate-700">
      {label}
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        type={type}
        required={required}
        className="mt-2 h-11 md:h-12 w-full rounded-lg border border-blue-200 bg-blue-50 px-3 text-base text-slate-900 outline-none focus:border-blue-400 focus:bg-blue-100"
      />
    </label>
  );
}
