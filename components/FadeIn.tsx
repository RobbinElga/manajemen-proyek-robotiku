"use client";

import { useEffect, useRef, useState } from "react";

let sharedObserver: IntersectionObserver | null = null;
const visibilityCallbacks = new WeakMap<Element, () => void>();

function getObserver(): IntersectionObserver {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visibilityCallbacks.get(entry.target)?.();
            sharedObserver?.unobserve(entry.target);
            visibilityCallbacks.delete(entry.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );
  }
  return sharedObserver;
}

export default function FadeIn({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = getObserver();
    visibilityCallbacks.set(el, () => setVisible(true));
    observer.observe(el);

    return () => {
      observer.unobserve(el);
      visibilityCallbacks.delete(el);
    };
  }, []);

  return (
    <div ref={ref} className={`${visible ? "fade-in-up" : "opacity-0"} ${className ?? ""}`}>
      {children}
    </div>
  );
}
