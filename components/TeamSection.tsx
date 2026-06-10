const TEAM = [
  { name: "Elga Firmantara", nim: "NIM. H1101231004", photo: "/team/elga.jpeg", bidang: "Software Engineering" },
  { name: "Khoirul Fuad", nim: "NIM. H1101231036 ", photo: "/team/fuad.jpeg", bidang: "Business Intelligence & Data Analytics" },
  { name: "Rohim Amrullah", nim: "NIM. H1101231052", photo: "/team/rohim.jpeg", bidang: "Business Intelligence & Data Analytics" },
];

export default function TeamSection() {
  return (
    <section className="px-4 py-6 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-lg font-bold tracking-tight sm:text-xl">Tim Kerja Praktik</h2>
        <div className="mt-5 flex flex-col gap-3">
          {TEAM.map((member) => (
            <div
              key={member.nim}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/3 p-3 backdrop-blur-xl"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={member.photo}
                alt={member.name}
                className="aspect-square w-16 shrink-0 rounded-xl object-cover sm:w-50"
              />
              <div className="min-w- flex-1">
                <p className="truncate text-sm font-semibold text-white sm:text-2xl flex-1 mb-4 ">{member.name}</p>
                <p className="truncate text-xs text-white/50 sm:text-2xl flex-1 mb-4 ">{member.nim}</p>
                <p className="whitespace-nowrap text-[11px] text-white/75 sm:text-2xl">{member.bidang}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
