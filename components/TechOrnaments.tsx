export default function TechOrnaments() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-[1] overflow-hidden">
      <div className="animate-float-slow absolute -left-24 top-20 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="animate-float-slower absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="animate-float-slow absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="animate-spin-slow absolute right-10 top-1/4 h-40 w-40 rounded-full border border-dashed border-violet-400/20" />
      <div className="animate-spin-slower absolute bottom-1/4 left-1/4 h-56 w-56 rounded-full border border-dashed border-emerald-400/15" />
    </div>
  );
}
