import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "timeline-kp-progress-v1";

export function useCompletedDates() {
  const [completed, setCompleted] = useState<Set<string>>(new Set());

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setCompleted(new Set(JSON.parse(raw) as string[]));
    } catch {
      // ignore malformed/unavailable storage
    }
  }, []);

  const toggle = useCallback((date: string) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      if (next.has(date)) {
        next.delete(date);
      } else {
        next.add(date);
      }
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
      } catch {
        // ignore unavailable storage
      }
      return next;
    });
  }, []);

  return { completed, toggle };
}
