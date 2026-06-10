import { CSSProperties } from "react";
import { getDateLabel, hexToRgba, PHASE_STYLES, TimelineItem } from "@/lib/timeline";
import PhaseIcon from "./PhaseIcon";

export default function TimelineEntry({
  item,
  isToday,
  isFirst,
  isLast,
  completed,
  onToggle,
}: {
  item: TimelineItem;
  isToday: boolean;
  isFirst: boolean;
  isLast: boolean;
  completed: boolean;
  onToggle: () => void;
}) {
  const { day, date, month } = getDateLabel(item.date);
  const style = PHASE_STYLES[item.phase];

  const cardStyle = {
    "--accent-glow": hexToRgba(style.color, 0.35),
    "--accent-border": hexToRgba(style.color, 0.45),
  } as CSSProperties;

  const dotRingClass = completed
    ? "ring-2 ring-emerald-400 ring-offset-2 ring-offset-[#0a0a0a]"
    : isToday
      ? "ring-2 ring-white ring-offset-2 ring-offset-[#0a0a0a]"
      : "";

  return (
    <div className="flex gap-4 sm:gap-6">
      {/* Date column */}
      <div className="flex w-14 shrink-0 flex-col items-end pt-4 text-right sm:w-20">
        <span className="text-xl font-bold tracking-tight sm:text-2xl">{date}</span>
        <span className="text-xs text-white/40 sm:text-sm">{day}</span>
        <span className="text-xs text-white/40 sm:text-sm">{month}</span>
      </div>

      {/* Dot + line column */}
      <div className="flex flex-col items-center">
        {isFirst ? <div className="flex-1" /> : <div className="w-px flex-1 bg-white/10" />}
        <div
          className={`my-1 h-4 w-4 shrink-0 rounded-full ${dotRingClass}`}
          style={{
            background: style.color,
            boxShadow: `0 0 10px ${hexToRgba(style.color, 0.6)}`,
          }}
        />
        {isLast ? <div className="flex-1" /> : <div className="w-px flex-1 bg-white/10" />}
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
        className="timeline-card mb-6 min-w-0 flex-1 cursor-pointer rounded-2xl border border-white/10 bg-white/3 p-4 backdrop-blur-xl transition-colors duration-200 sm:p-5"
        style={cardStyle}
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span
            className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium"
            style={{
              borderColor: hexToRgba(style.color, 0.4),
              color: style.color,
              background: hexToRgba(style.color, 0.1),
            }}
          >
            <PhaseIcon phase={item.phase} className="h-3.5 w-3.5" />
            {item.phase}
          </span>
          <div className="flex items-center gap-1.5">
            {isToday && (
              <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-medium text-white">
                Hari ini
              </span>
            )}
            {completed && (
              <span className="rounded-full bg-emerald-400/15 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                Selesai
              </span>
            )}
          </div>
        </div>
        <p
          className={`mt-2 text-sm leading-relaxed sm:text-base ${
            completed ? "text-white/40 line-through" : "text-white/80"
          }`}
        >
          {item.activity}
        </p>
      </div>
    </div>
  );
}
