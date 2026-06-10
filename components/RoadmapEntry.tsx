import { getDateLabel, hexToRgba, PHASE_STYLES, TimelineItem } from "@/lib/timeline";
import PhaseIcon from "./PhaseIcon";

export default function RoadmapEntry({
  item,
  isToday,
  side,
  completed,
  onToggle,
}: {
  item: TimelineItem;
  isToday: boolean;
  side: "left" | "right";
  completed: boolean;
  onToggle: () => void;
}) {
  const { day, date, month } = getDateLabel(item.date);
  const style = PHASE_STYLES[item.phase];

  return (
    <div className="grid grid-cols-[2.5rem_1fr] items-start gap-x-3 sm:grid-cols-[1fr_3rem_1fr] sm:items-center sm:gap-x-5">
      {/* Dot */}
      <div
        className={`relative col-start-1 row-start-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full sm:col-start-2 sm:justify-self-center ${
          isToday ? "ring-2 ring-white ring-offset-2 ring-offset-[#0a0a0a]" : ""
        }`}
        style={{
          background: style.color,
          boxShadow: `0 0 12px ${hexToRgba(style.color, 0.45)}`,
        }}
      >
        <PhaseIcon phase={item.phase} className="h-5 w-5 text-[#1a1a1a]" />
        {completed && (
          <span className="absolute -right-1 -bottom-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-400 ring-2 ring-[#0a0a0a]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0a0a0a"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-2.5 w-2.5"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          </span>
        )}
      </div>

      {/* Card */}
      <div
        role="button"
        tabIndex={0}
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggle();
          }
        }}
        className={`col-start-2 row-start-1 cursor-pointer rounded-2xl p-4 transition-all duration-200 hover:-translate-y-0.5 sm:p-5 ${
          side === "left" ? "sm:col-start-1" : "sm:col-start-3"
        }`}
        style={{ background: style.color, opacity: completed ? 0.5 : 1 }}
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-semibold tracking-wide text-[#1a1a1a]/70 sm:text-sm">
            {date} {month} · {day}
          </span>
          <div className="flex items-center gap-1.5">
            {isToday && (
              <span className="rounded-full bg-black/15 px-2.5 py-0.5 text-xs font-medium text-[#1a1a1a]">
                Hari ini
              </span>
            )}
            {completed && (
              <span className="rounded-full bg-black/15 px-2.5 py-0.5 text-xs font-medium text-[#1a1a1a]">
                Selesai
              </span>
            )}
          </div>
        </div>
        <p
          className={`mt-2 text-sm leading-relaxed font-medium text-[#1a1a1a] sm:text-base ${
            completed ? "line-through opacity-80" : ""
          }`}
        >
          {item.activity}
        </p>
      </div>
    </div>
  );
}
