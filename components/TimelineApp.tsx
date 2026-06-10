"use client";

import { useMemo, useState } from "react";
import FadeIn from "./FadeIn";
import PasswordModal from "./PasswordModal";
import RoadmapView from "./RoadmapView";
import TimelineEntry from "./TimelineEntry";
import { useCompletedDates } from "@/hooks/useCompletedDates";
import {
  Phase,
  PHASES,
  PHASE_STYLES,
  WeekGroup,
  getWeekCompletion,
  hexToRgba,
} from "@/lib/timeline";

const PROGRESS_PASSWORD = "270505";

type FilterValue = "Semua" | Phase;
type ViewMode = "general" | "roadmap";

export default function TimelineApp({
  weeks,
  today,
}: {
  weeks: WeekGroup[];
  today: string;
}) {
  const [filter, setFilter] = useState<FilterValue>("Semua");
  const [view, setView] = useState<ViewMode>("general");
  const [pendingDate, setPendingDate] = useState<string | null>(null);
  const { completed, toggle } = useCompletedDates();

  const totalItems = useMemo(
    () => weeks.reduce((sum, week) => sum + week.items.length, 0),
    [weeks]
  );

  const codeCompletedDates = useMemo(
    () => new Set(weeks.flatMap((week) => week.items.filter((item) => item.status === "selesai").map((item) => item.date))),
    [weeks]
  );
  const effectiveCompleted = useMemo(
    () => new Set([...completed, ...codeCompletedDates]),
    [completed, codeCompletedDates]
  );

  const progress = totalItems > 0 ? Math.round((effectiveCompleted.size / totalItems) * 100) : 0;

  const filteredWeeks = useMemo(() => {
    if (filter === "Semua") return weeks;
    return weeks
      .map((week) => ({
        ...week,
        items: week.items.filter((item) => item.phase === filter),
      }))
      .filter((week) => week.items.length > 0);
  }, [weeks, filter]);

  const requestToggle = (date: string) => setPendingDate(date);

  const handleConfirm = (password: string) => {
    if (password !== PROGRESS_PASSWORD) return false;
    if (pendingDate) toggle(pendingDate);
    setPendingDate(null);
    return true;
  };

  return (
    <div className="relative min-h-screen">
      {/* Sticky header */}
      <header className="hero-band sticky top-0 z-20 backdrop-blur-xl">
        <div className="px-4 py-4 sm:px-8">
          <div className="flex items-center justify-between gap-4">
            <h1 className="text-base font-semibold tracking-tight sm:text-lg">
              Timeline KP <span className="text-white/40">—</span>{" "}
              <span className="text-white/60">Robotiku 2026</span>
            </h1>
            <span className="shrink-0 text-xs font-medium text-white/50 sm:text-sm">
              {progress}% selesai
            </span>
          </div>

          {/* Progress bar */}
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-violet-400 via-emerald-400 to-amber-400 transition-all duration-700 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Phase filter tabs */}
          <div className="no-scrollbar mt-4 flex gap-2 overflow-x-auto pb-1">
            <FilterPill active={filter === "Semua"} onClick={() => setFilter("Semua")} color="#ffffff">
              Semua
            </FilterPill>
            {PHASES.map((phase) => (
              <FilterPill
                key={phase}
                active={filter === phase}
                onClick={() => setFilter(phase)}
                color={PHASE_STYLES[phase].color}
              >
                {phase}
              </FilterPill>
            ))}
          </div>

          {/* View switcher */}
          <div className="mt-4 inline-flex rounded-full border border-white/10 bg-white/5 p-1 text-xs font-medium sm:text-sm">
            <button
              onClick={() => setView("general")}
              className={`rounded-full px-3.5 py-1.5 transition-colors duration-200 ${
                view === "general" ? "bg-white text-[#0a0a0a]" : "text-white/60"
              }`}
            >
              General
            </button>
            <button
              onClick={() => setView("roadmap")}
              className={`rounded-full px-3.5 py-1.5 transition-colors duration-200 ${
                view === "roadmap" ? "bg-white text-[#0a0a0a]" : "text-white/60"
              }`}
            >
              Roadmap
            </button>
          </div>
        </div>
      </header>

      <main className="px-4 pt-8 pb-24 sm:px-8">
        {/* Phase legend */}
        <div className="mb-10 flex flex-wrap gap-x-5 gap-y-2">
          {PHASES.map((phase) => (
            <div key={phase} className="flex items-center gap-2 text-xs text-white/50 sm:text-sm">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{
                  background: PHASE_STYLES[phase].color,
                  boxShadow: `0 0 8px ${hexToRgba(PHASE_STYLES[phase].color, 0.6)}`,
                }}
              />
              {phase}
            </div>
          ))}
        </div>

        {filteredWeeks.length === 0 && (
          <p className="py-12 text-center text-white/40">Tidak ada aktivitas untuk fase ini.</p>
        )}

        {filteredWeeks.length > 0 && view === "general" &&
          filteredWeeks.map((week) => {
            const completion = getWeekCompletion(week.items, effectiveCompleted);
            return (
              <section key={week.week} className="mb-12 last:mb-0">
                <FadeIn className="mb-6 flex items-end justify-between gap-4">
                  <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{week.label}</h2>
                  <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/60">
                    {completion.done}/{completion.total} hari
                  </span>
                </FadeIn>

                <div className="flex flex-col gap-0">
                  {week.items.map((item, index) => (
                    <FadeIn key={item.date}>
                      <TimelineEntry
                        item={item}
                        isToday={item.date === today}
                        isFirst={index === 0}
                        isLast={index === week.items.length - 1}
                        completed={effectiveCompleted.has(item.date)}
                        onToggle={() => requestToggle(item.date)}
                      />
                    </FadeIn>
                  ))}
                </div>
              </section>
            );
          })}

        {filteredWeeks.length > 0 && view === "roadmap" && (
          <RoadmapView weeks={filteredWeeks} today={today} completed={effectiveCompleted} onToggle={requestToggle} />
        )}
      </main>

      {pendingDate && (
        <PasswordModal onClose={() => setPendingDate(null)} onConfirm={handleConfirm} />
      )}
    </div>
  );
}

function FilterPill({
  active,
  onClick,
  color,
  children,
}: {
  active: boolean;
  onClick: () => void;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="shrink-0 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all duration-200 sm:text-sm"
      style={
        active
          ? {
              color: "#0a0a0a",
              background: color,
              borderColor: color,
              boxShadow: `0 0 16px ${hexToRgba(color, 0.5)}`,
            }
          : {
              color: "rgba(255,255,255,0.6)",
              background: "rgba(255,255,255,0.04)",
              borderColor: "rgba(255,255,255,0.1)",
            }
      }
    >
      {children}
    </button>
  );
}
