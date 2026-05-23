"use client";

import {
  Image as ImageIcon,
  LayoutDashboard,
  LogOut,
  MessageSquareText,
  Plus,
  Save,
  Trash2,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { SmartImage } from "@/components/smart-image";
import type { SiteContent } from "@/lib/content";
import type { ContactMessage } from "@/lib/messages";

type ArrayField = "stats" | "services" | "gallery" | "testimonials";

const emptyItems = {
  stats: { value: "", label: "" },
  services: { title: "", description: "", image: "" },
  gallery: { title: "", image: "" },
  testimonials: { name: "", quote: "" },
};

export function DashboardEditor({
  initialContent,
  initialMessages,
}: {
  initialContent: SiteContent;
  initialMessages: ContactMessage[];
}) {
  const router = useRouter();
  const [content, setContent] = useState(initialContent);
  const [status, setStatus] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  function updateNested<
    Section extends keyof SiteContent,
    Key extends keyof SiteContent[Section],
  >(section: Section, key: Key, value: SiteContent[Section][Key]) {
    setContent((current) => ({
      ...current,
      [section]: {
        ...current[section],
        [key]: value,
      },
    }));
  }

  function updateArrayItem<Field extends ArrayField>(
    field: Field,
    index: number,
    key: keyof SiteContent[Field][number],
    value: string,
  ) {
    setContent((current) => ({
      ...current,
      [field]: current[field].map((item, itemIndex) =>
        itemIndex === index ? { ...item, [key]: value } : item,
      ),
    }));
  }

  function addArrayItem(field: ArrayField) {
    setContent((current) => ({
      ...current,
      [field]: [...current[field], emptyItems[field]],
    }));
  }

  function removeArrayItem(field: ArrayField, index: number) {
    setContent((current) => ({
      ...current,
      [field]: current[field].filter((_, itemIndex) => itemIndex !== index),
    }));
  }

  async function saveContent() {
    setIsSaving(true);
    setStatus("");

    const response = await fetch("/api/admin/content", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(content),
    });

    setIsSaving(false);
    setStatus(response.ok ? "Saved changes." : "Could not save changes.");
    router.refresh();
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin");
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50/20 to-slate-50 text-slate-900">
      <header className="sticky top-0 z-20 border-b border-blue-200 bg-white/90 px-5 py-4 backdrop-blur-xl shadow-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-200">
              <LayoutDashboard size={21} />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                Admin Dashboard
              </p>
              <h1 className="text-2xl font-semibold text-slate-900">Y2K Computers</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {status ? <span className="text-sm text-slate-700">{status}</span> : null}
            <button
              onClick={saveContent}
              disabled={isSaving}
              className="inline-flex h-11 items-center gap-2 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 px-4 text-sm font-bold text-white shadow-lg shadow-blue-200 hover:from-blue-500 hover:to-purple-500 disabled:opacity-60"
            >
              <Save size={17} />
              {isSaving ? "Saving..." : "Save"}
            </button>
            <button
              onClick={logout}
              className="inline-flex h-11 items-center gap-2 rounded-md border border-blue-300 bg-blue-50 px-4 text-sm font-bold text-blue-700 hover:bg-blue-100"
            >
              <LogOut size={17} />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 lg:grid-cols-[1fr_380px]">
        <div className="space-y-6">
          <Panel title="Contact Messages">
            {initialMessages.length ? (
              <div className="grid gap-3">
                {initialMessages.map((message) => (
                  <article
                    key={message._id}
                    className="rounded-lg border border-blue-200 bg-blue-50 p-4"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-semibold text-slate-900">{message.name}</h3>
                        <p className="mt-1 text-sm text-slate-700">
                          {message.phone}
                          {message.email ? ` · ${message.email}` : ""}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1 rounded-md bg-blue-100 px-2 py-1 text-xs font-bold text-blue-700">
                        <MessageSquareText size={14} />
                        {new Date(message.createdAt).toLocaleString()}
                      </span>
                    </div>
                    <p className="mt-3 whitespace-pre-wrap leading-7 text-slate-700">
                      {message.message}
                    </p>
                  </article>
                ))}
              </div>
            ) : (
              <p className="rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm font-semibold text-slate-700">
                No messages yet.
              </p>
            )}
          </Panel>

          <Panel title="Hero">
            <TextInput
              label="Eyebrow"
              value={content.hero.eyebrow}
              onChange={(value) => updateNested("hero", "eyebrow", value)}
            />
            <TextInput
              label="Title"
              value={content.hero.title}
              onChange={(value) => updateNested("hero", "title", value)}
            />
            <TextArea
              label="Subtitle"
              value={content.hero.subtitle}
              onChange={(value) => updateNested("hero", "subtitle", value)}
            />
            <TextInput
              label="Hero image URL"
              value={content.hero.image}
              onChange={(value) => updateNested("hero", "image", value)}
            />
            <div className="grid gap-4 md:grid-cols-2">
              <TextInput
                label="Primary button"
                value={content.hero.primaryCta}
                onChange={(value) => updateNested("hero", "primaryCta", value)}
              />
              <TextInput
                label="Secondary button"
                value={content.hero.secondaryCta}
                onChange={(value) => updateNested("hero", "secondaryCta", value)}
              />
            </div>
          </Panel>

          <Panel title="About">
            <TextInput
              label="Title"
              value={content.about.title}
              onChange={(value) => updateNested("about", "title", value)}
            />
            <TextArea
              label="Body"
              value={content.about.body}
              onChange={(value) => updateNested("about", "body", value)}
            />
            <TextInput
              label="Image URL"
              value={content.about.image}
              onChange={(value) => updateNested("about", "image", value)}
            />
          </Panel>

          <ArrayPanel title="Stats" onAdd={() => addArrayItem("stats")}>
            {content.stats.map((item, index) => (
              <EditableRow
                key={index}
                title={`Stat ${index + 1}`}
                onRemove={() => removeArrayItem("stats", index)}
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <TextInput
                    label="Value"
                    value={item.value}
                    onChange={(value) =>
                      updateArrayItem("stats", index, "value", value)
                    }
                  />
                  <TextInput
                    label="Label"
                    value={item.label}
                    onChange={(value) =>
                      updateArrayItem("stats", index, "label", value)
                    }
                  />
                </div>
              </EditableRow>
            ))}
          </ArrayPanel>

          <ArrayPanel title="Services" onAdd={() => addArrayItem("services")}>
            {content.services.map((item, index) => (
              <EditableRow
                key={index}
                title={`Service ${index + 1}`}
                onRemove={() => removeArrayItem("services", index)}
              >
                <TextInput
                  label="Title"
                  value={item.title}
                  onChange={(value) =>
                    updateArrayItem("services", index, "title", value)
                  }
                />
                <TextArea
                  label="Description"
                  value={item.description}
                  onChange={(value) =>
                    updateArrayItem("services", index, "description", value)
                  }
                />
                <TextInput
                  label="Image URL"
                  value={item.image}
                  onChange={(value) =>
                    updateArrayItem("services", index, "image", value)
                  }
                />
              </EditableRow>
            ))}
          </ArrayPanel>

          <ArrayPanel title="Gallery" onAdd={() => addArrayItem("gallery")}>
            {content.gallery.map((item, index) => (
              <EditableRow
                key={index}
                title={`Gallery image ${index + 1}`}
                onRemove={() => removeArrayItem("gallery", index)}
              >
                <TextInput
                  label="Title"
                  value={item.title}
                  onChange={(value) =>
                    updateArrayItem("gallery", index, "title", value)
                  }
                />
                <TextInput
                  label="Image URL"
                  value={item.image}
                  onChange={(value) =>
                    updateArrayItem("gallery", index, "image", value)
                  }
                />
              </EditableRow>
            ))}
          </ArrayPanel>

          <ArrayPanel
            title="Testimonials"
            onAdd={() => addArrayItem("testimonials")}
          >
            {content.testimonials.map((item, index) => (
              <EditableRow
                key={index}
                title={`Testimonial ${index + 1}`}
                onRemove={() => removeArrayItem("testimonials", index)}
              >
                <TextInput
                  label="Name"
                  value={item.name}
                  onChange={(value) =>
                    updateArrayItem("testimonials", index, "name", value)
                  }
                />
                <TextArea
                  label="Quote"
                  value={item.quote}
                  onChange={(value) =>
                    updateArrayItem("testimonials", index, "quote", value)
                  }
                />
              </EditableRow>
            ))}
          </ArrayPanel>

          <Panel title="Contact">
            <div className="grid gap-4 md:grid-cols-2">
              <TextInput
                label="Phone"
                value={content.contact.phone}
                onChange={(value) => updateNested("contact", "phone", value)}
              />
              <TextInput
                label="Email"
                value={content.contact.email}
                onChange={(value) => updateNested("contact", "email", value)}
              />
            </div>
            <TextInput
              label="Address"
              value={content.contact.address}
              onChange={(value) => updateNested("contact", "address", value)}
            />
            <TextInput
              label="Hours"
              value={content.contact.hours}
              onChange={(value) => updateNested("contact", "hours", value)}
            />
            <TextInput
              label="Map link"
              value={content.contact.mapUrl}
              onChange={(value) => updateNested("contact", "mapUrl", value)}
            />
          </Panel>
        </div>

        <aside className="h-max rounded-lg border border-blue-200 bg-gradient-to-br from-blue-50 to-slate-50 p-4 shadow-sm lg:sticky lg:top-24 neon-border">
          <div className="mb-4 flex items-center gap-2 text-sm font-bold text-blue-600">
            <ImageIcon size={17} />
            Live Preview
          </div>
          <PreviewImage title="Hero" src={content.hero.image} />
          <PreviewImage title="About" src={content.about.image} />
          {content.gallery.slice(0, 2).map((item, index) => (
            <PreviewImage key={index} title={item.title} src={item.image} />
          ))}
        </aside>
      </div>
    </main>
  );
}

function Panel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-lg border border-blue-200 bg-gradient-to-br from-blue-50 to-slate-50 p-6 shadow-sm neon-border">
      <h2 className="text-2xl font-semibold text-blue-700">{title}</h2>
      <div className="mt-5 space-y-4">{children}</div>
    </section>
  );
}

function ArrayPanel({
  title,
  onAdd,
  children,
}: {
  title: string;
  onAdd: () => void;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-lg border border-blue-200 bg-gradient-to-br from-blue-50 to-slate-50 p-6 shadow-sm neon-border">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-2xl font-semibold text-blue-700">{title}</h2>
        <button
          onClick={onAdd}
          className="inline-flex h-10 items-center gap-2 rounded-md border border-blue-300 bg-blue-100 px-3 text-sm font-bold text-blue-700 hover:bg-blue-200"
        >
          <Plus size={16} />
          Add
        </button>
      </div>
      <div className="mt-5 space-y-4">{children}</div>
    </section>
  );
}

function EditableRow({
  title,
  onRemove,
  children,
}: {
  title: string;
  onRemove: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="font-semibold text-slate-700">{title}</h3>
        <button
          onClick={onRemove}
          className="inline-flex h-8 w-8 items-center justify-center rounded-md text-red-600 hover:bg-red-100"
          aria-label={`Remove ${title}`}
        >
          <Trash2 size={16} />
        </button>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function TextInput({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block text-sm font-bold text-slate-700">
      {label}
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 h-12 w-full rounded-md border border-blue-200 bg-white px-3 text-slate-900 outline-none focus:border-blue-400 focus:bg-blue-50"
      />
    </label>
  );
}

function TextArea({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block text-sm font-bold text-slate-700">
      {label}
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 min-h-32 w-full resize-y rounded-md border border-blue-200 bg-white px-3 py-3 text-slate-900 outline-none focus:border-blue-400 focus:bg-blue-50"
      />
    </label>
  );
}

function PreviewImage({ title, src }: { title: string; src: string }) {
  return (
    <div className="mb-4 overflow-hidden rounded-lg border border-blue-200 bg-blue-50">
      <SmartImage
        src={src}
        alt={title}
        className="aspect-[4/3] w-full bg-slate-200 object-cover"
      />
      <p className="truncate px-3 py-3 text-sm font-bold text-slate-700">{title}</p>
    </div>
  );
}
