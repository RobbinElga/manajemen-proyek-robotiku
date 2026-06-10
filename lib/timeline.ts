export type Phase =
  | "Requirements Planning"
  | "User Design"
  | "Construction"
  | "Cutover"
  | "Buffer";

export interface TimelineItem {
  date: string; // "2026-06-15"
  week: number;
  activity: string;
  phase: Phase;
}

export interface PhaseStyle {
  color: string;
  label: string;
}

export const PHASES: Phase[] = [
  "Requirements Planning",
  "User Design",
  "Construction",
  "Cutover",
  "Buffer",
];

export const PHASE_STYLES: Record<Phase, PhaseStyle> = {
  "Requirements Planning": { color: "#A78BFA", label: "Requirements Planning" },
  "User Design": { color: "#34D399", label: "User Design" },
  Construction: { color: "#FB923C", label: "Construction" },
  Cutover: { color: "#FBBF24", label: "Cutover" },
  Buffer: { color: "#9CA3AF", label: "Buffer" },
};

export const timeline: TimelineItem[] = [
  // Week 1
  { date: "2026-06-15", week: 1, activity: "Analisis kebutuhan — observasi proses bisnis dan wawancara pemangku kepentingan", phase: "Requirements Planning" },
  { date: "2026-06-17", week: 1, activity: "Analisis kebutuhan — finalisasi kebutuhan fungsional dan non-fungsional seluruh modul", phase: "Requirements Planning" },
  { date: "2026-06-18", week: 1, activity: "Perancangan arsitektur sistem, ERD, dan skema basis data MySQL", phase: "User Design" },
  { date: "2026-06-19", week: 1, activity: "Desain wireframe seluruh modul dan antarmuka pengguna", phase: "User Design" },
  { date: "2026-06-20", week: 1, activity: "Review wireframe bersama pengguna, refinement, dan finalisasi rancangan", phase: "User Design" },

  // Week 2
  { date: "2026-06-23", week: 2, activity: "Setup Docker, inisialisasi proyek Laravel + Vue.js, konfigurasi MySQL", phase: "Construction" },
  { date: "2026-06-24", week: 2, activity: "Implementasi autentikasi dan manajemen role pengguna", phase: "Construction" },
  { date: "2026-06-25", week: 2, activity: "Implementasi landing page dan halaman profil Robotiku", phase: "Construction" },
  { date: "2026-06-26", week: 2, activity: "Implementasi form pendaftaran mandiri", phase: "Construction" },
  { date: "2026-06-27", week: 2, activity: "Implementasi form pendaftaran via instansi sekolah", phase: "Construction" },

  // Week 3
  { date: "2026-06-30", week: 3, activity: "Implementasi Canvas Robotiku — log aktivitas rekrutmen sekolah", phase: "Construction" },
  { date: "2026-07-01", week: 3, activity: "Implementasi status sekolah dan integrasi ke daftar instansi pendaftaran", phase: "Construction" },
  { date: "2026-07-02", week: 3, activity: "Implementasi Bayar Robotiku — tampilan tagihan per siswa", phase: "Construction" },
  { date: "2026-07-03", week: 3, activity: "Implementasi pencatatan pembayaran dan generate tautan wa.me", phase: "Construction" },
  { date: "2026-07-04", week: 3, activity: "Implementasi autentikasi admin sekolah dan orang tua di modul Bayar", phase: "Construction" },

  // Week 4
  { date: "2026-07-07", week: 4, activity: "Implementasi absensi dan pelaporan perkembangan siswa oleh trainer", phase: "Construction" },
  { date: "2026-07-08", week: 4, activity: "Implementasi dashboard pemantauan perkembangan oleh orang tua", phase: "Construction" },
  { date: "2026-07-09", week: 4, activity: "Implementasi Super Admin dashboard", phase: "Construction" },
  { date: "2026-07-10", week: 4, activity: "Integrasi seluruh modul dalam satu sistem", phase: "Construction" },
  { date: "2026-07-11", week: 4, activity: "Perbaikan bug hasil integrasi antar modul", phase: "Construction" },

  // Week 5
  { date: "2026-07-14", week: 5, activity: "Black Box Testing — modul landing page dan pendaftaran siswa", phase: "Cutover" },
  { date: "2026-07-15", week: 5, activity: "Black Box Testing — modul Canvas Robotiku", phase: "Cutover" },
  { date: "2026-07-16", week: 5, activity: "Black Box Testing — modul Bayar Robotiku dan manajemen murid", phase: "Cutover" },
  { date: "2026-07-17", week: 5, activity: "Black Box Testing — Super Admin dan pengujian integrasi keseluruhan", phase: "Cutover" },
  { date: "2026-07-18", week: 5, activity: "Perbaikan seluruh temuan hasil pengujian", phase: "Cutover" },

  // Week 6
  { date: "2026-07-21", week: 6, activity: "Deployment ke server produksi dan pengujian di lingkungan produksi", phase: "Cutover" },
  { date: "2026-07-22", week: 6, activity: "Buffer — perbaikan temuan pasca-deployment", phase: "Buffer" },
  { date: "2026-07-23", week: 6, activity: "Buffer — perbaikan temuan pasca-deployment lanjutan", phase: "Buffer" },
  { date: "2026-07-24", week: 6, activity: "Penyusunan user manual — panduan penggunaan per role pengguna", phase: "Buffer" },
  { date: "2026-07-25", week: 6, activity: "Penyusunan user manual lanjutan", phase: "Buffer" },

  // Week 7
  { date: "2026-07-28", week: 7, activity: "Finalisasi user manual", phase: "Buffer" },
  { date: "2026-07-29", week: 7, activity: "Persiapan materi presentasi hasil ke mitra", phase: "Buffer" },
  { date: "2026-07-30", week: 7, activity: "Penyusunan laporan Kerja Praktik", phase: "Buffer" },
  { date: "2026-07-31", week: 7, activity: "Penyusunan laporan Kerja Praktik lanjutan", phase: "Buffer" },
  { date: "2026-08-01", week: 7, activity: "Penyusunan laporan Kerja Praktik lanjutan", phase: "Buffer" },

  // Week 8
  { date: "2026-08-04", week: 8, activity: "Finalisasi laporan Kerja Praktik", phase: "Buffer" },
  { date: "2026-08-05", week: 8, activity: "Finalisasi laporan Kerja Praktik lanjutan", phase: "Buffer" },
  { date: "2026-08-06", week: 8, activity: "Presentasi hasil sistem kepada pihak Robotiku", phase: "Cutover" },
  { date: "2026-08-07", week: 8, activity: "Serah terima sistem dan user manual kepada instansi", phase: "Cutover" },
  { date: "2026-08-08", week: 8, activity: "Penutupan Kerja Praktik", phase: "Buffer" },
];

const DAY_NAMES_ID = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
const MONTH_NAMES_ID = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember",
];

export function parseDate(dateStr: string): Date {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date(y, m - 1, d);
}

export function formatISODate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function getDateLabel(dateStr: string): { day: string; date: number; month: string } {
  const d = parseDate(dateStr);
  return {
    day: DAY_NAMES_ID[d.getDay()],
    date: d.getDate(),
    month: MONTH_NAMES_ID[d.getMonth()],
  };
}

export interface WeekGroup {
  week: number;
  label: string;
  items: TimelineItem[];
}

export function groupByWeek(items: TimelineItem[]): WeekGroup[] {
  const map = new Map<number, TimelineItem[]>();
  for (const item of items) {
    if (!map.has(item.week)) map.set(item.week, []);
    map.get(item.week)!.push(item);
  }

  return Array.from(map.entries()).map(([week, weekItems]) => {
    const first = parseDate(weekItems[0].date);
    const last = parseDate(weekItems[weekItems.length - 1].date);
    const firstMonth = MONTH_NAMES_ID[first.getMonth()];
    const lastMonth = MONTH_NAMES_ID[last.getMonth()];
    const monthLabel =
      firstMonth === lastMonth
        ? `${firstMonth} ${last.getFullYear()}`
        : `${firstMonth}–${lastMonth} ${last.getFullYear()}`;

    return {
      week,
      label: `Minggu ${week} · ${monthLabel}`,
      items: weekItems,
    };
  });
}

export function getWeekCompletion(items: TimelineItem[], todayStr: string): { done: number; total: number } {
  const done = items.filter((item) => item.date <= todayStr).length;
  return { done, total: items.length };
}

export function hexToRgba(hex: string, alpha: number): string {
  const value = hex.replace("#", "");
  const r = parseInt(value.substring(0, 2), 16);
  const g = parseInt(value.substring(2, 4), 16);
  const b = parseInt(value.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
