import Hero from "@/components/Hero";
import TechOrnaments from "@/components/TechOrnaments";
import TimelineApp from "@/components/TimelineApp";
import { formatISODate, groupByWeek, timeline } from "@/lib/timeline";

export default function Home() {
  const weeks = groupByWeek(timeline);
  const today = formatISODate(new Date());

  return (
    <>
      <TechOrnaments />
      <Hero />
      <TimelineApp weeks={weeks} today={today} />
    </>
  );
}
