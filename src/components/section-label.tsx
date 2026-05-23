export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
      {children}
    </p>
  );
}
