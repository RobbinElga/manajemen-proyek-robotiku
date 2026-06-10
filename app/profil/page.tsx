import Link from "next/link";
import PartnerProfile from "@/components/PartnerProfile";
import TeamSection from "@/components/TeamSection";

export default function ProfilPage() {
  return (
    <>
      <section className="hero-band">
        <div className="mx-auto flex max-w-3xl items-center gap-4 px-4 py-6 sm:px-6">
          <Link
            href="/"
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 transition-colors duration-200 hover:bg-white/10 sm:text-sm"
          >
            ← Kembali
          </Link>
          <h1 className="text-base font-semibold tracking-tight sm:text-lg">
            Profil Mitra & Tim Kerja Praktik
          </h1>
        </div>
      </section>

      <div className="py-6">
        <PartnerProfile />
        <TeamSection />
      </div>
    </>
  );
}
