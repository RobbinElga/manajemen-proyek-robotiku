import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-band">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 px-4 py-12 text-center sm:px-6 sm:py-16">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/lgoo2.png" alt="Logo Robotiku" className="h-60 w-60 sm:h-60 sm:w-60" />
        <h1 className="whitespace-nowrap text-[clamp(0.85rem,4.2vw,2.25rem)] font-bold tracking-tight">
          Sistem Manajemen Proyek Kerja Praktik pada Robotiku
        </h1>
        <Link
          href="/profil"
          className="group inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-linear-to-r from-violet-500/30 via-fuchsia-500/20 to-emerald-500/30 px-5 py-2.5 text-xs font-semibold text-white shadow-[0_0_24px_rgba(167,139,250,0.35)] transition-all duration-200 hover:scale-105 hover:shadow-[0_0_32px_rgba(167,139,250,0.5)] sm:text-sm"
        >
          Lihat Profil Mitra & Tim Kerja Praktik
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </section>
  );
}
