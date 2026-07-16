"use client";

import { useEffect, useRef, useState } from "react";

export default function PressureMarker() {
  const markerRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const marker = markerRef.current;

    if (!marker) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.6,
      },
    );

    observer.observe(marker);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={markerRef}
      className="mb-7 flex w-full items-center gap-4"
    >
      <p className="shrink-0 text-xs uppercase tracking-[0.45em] text-white/55">
        Chapter Four — Pressure
      </p>

      <div className="relative h-px flex-1 overflow-visible bg-white/10">
        <span
          className={`absolute inset-y-0 left-0 block w-full origin-left bg-[#d91f26] shadow-[0_0_14px_rgba(217,31,38,0.55)] transition-transform duration-[1800ms] ease-out ${
            visible ? "scale-x-100" : "scale-x-0"
          }`}
        />

        <span
          className={`absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#d91f26] shadow-[0_0_18px_rgba(217,31,38,0.95)] transition-all delay-[1500ms] duration-700 ${
            visible ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        />
      </div>
    </div>
  );
}