export default function PartnerProfile() {
  return (
    <section className="px-4 py-6 sm:px-8">
      <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/3 p-6 backdrop-blur-xl sm:p-8">
        <h2 className="text-lg font-bold tracking-tight sm:text-xl">Profil Mitra</h2>
        <div className="mt-5 flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/robotiku.jpg" alt="Logo Yayasan Tadika Cikal Mulia" className="h-16 w-16 object-contain sm:h-50 sm:w-50" />
            <img src="/yayasan.jpg" alt="Logo Yayasan Tadika Cikal Mulia" className="h-16 w-16 object-contain sm:h-50 sm:w-50" />
          </div>
          <p className="text-justify text-sm leading-relaxed text-white/70 sm:text-base">
            Yayasan Tadika Cikal Mulia merupakan sebuah yayasan pendidikan yang berlokasi di Kota
            Pontianak, Kalimantan Barat, yang di dalamnya terdapat unit usaha bernama Robotiku.
            Robotiku adalah program kursus terkait edukasi yang berfokus pada pengembangan
            keterampilan teknologi dan pemrograman bagi anak-anak usia sekolah. Program ini
            menawarkan dua jalur pendaftaran, yaitu pendaftaran mandiri bagi individu dan
            pendaftaran melalui instansi sekolah, sehingga menjangkau peserta didik secara lebih
            luas.
          </p>
        </div>
      </div>
    </section>
  );
}
