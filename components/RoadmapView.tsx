import FadeIn from "./FadeIn";
import RoadmapEntry from "./RoadmapEntry";
import { WeekGroup } from "@/lib/timeline";

export default function RoadmapView({
  weeks,
  today,
  completed,
  onToggle,
}: {
  weeks: WeekGroup[];
  today: string;
  completed: Set<string>;
  onToggle: (date: string) => void;
}) {
  let counter = 0;

  return (
    <div className="mt-2">
      <div className="mb-8 flex justify-center">
        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-white/50 uppercase">
          Mulai
        </span>
      </div>

      {weeks.map((week) => (
        <section key={week.week} className="mb-10 last:mb-0">
          <FadeIn className="mb-5 text-center">
            <h2 className="text-lg font-bold tracking-tight sm:text-xl">{week.label}</h2>
          </FadeIn>

          <div className="relative">
            <div className="absolute top-0 bottom-0 left-5 w-px bg-white/10 sm:left-1/2 sm:-translate-x-1/2" />
            <div className="flex flex-col gap-6 sm:gap-8">
              {week.items.map((item) => {
                const side: "left" | "right" = counter % 2 === 0 ? "left" : "right";
                counter += 1;
                return (
                  <FadeIn key={item.date}>
                    <RoadmapEntry
                      item={item}
                      isToday={item.date === today}
                      side={side}
                      completed={completed.has(item.date)}
                      onToggle={() => onToggle(item.date)}
                    />
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      <div className="mt-2 flex justify-center">
        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-white/50 uppercase">
          Selesai
        </span>
      </div>
    </div>
  );
}
