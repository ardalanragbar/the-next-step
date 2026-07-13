"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function ThresholdSection() {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const startedRef = useRef(false);

  // 0: سیاهی
  // 1: خط قرمز کامل
  // 2: محوشدن خط
  // 3: ظاهرشدن عکس
  // 4: Chapter
  // 5: تیتر
  // 6: Cross it
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const stage = stageRef.current;

    if (!stage) return;

    const clearTimers = () => {
      timersRef.current.forEach((timer) => clearTimeout(timer));
      timersRef.current = [];
    };

    const startSequence = () => {
      clearTimers();
      setPhase(0);

      timersRef.current = [
        setTimeout(() => setPhase(1), 700),
        setTimeout(() => setPhase(2), 3000),
        setTimeout(() => setPhase(3), 4200),
        setTimeout(() => setPhase(4), 6800),
        setTimeout(() => setPhase(5), 8000),
        setTimeout(() => setPhase(6), 10000),
      ];
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (
          entry.isIntersecting &&
          entry.intersectionRatio >= 0.7 &&
          !startedRef.current
        ) {
          startedRef.current = true;
          startSequence();
        }

        if (!entry.isIntersecting) {
          startedRef.current = false;
          clearTimers();
          setPhase(0);
        }
      },
      {
        threshold: [0, 0.7],
      },
    );

    observer.observe(stage);

    return () => {
      observer.disconnect();
      clearTimers();
    };
  }, []);

  return (
    <section className="relative h-[260vh] bg-black">
      <div
        ref={stageRef}
        className="sticky top-0 h-screen overflow-hidden bg-black"
      >
        {/* عکس */}
        <Image
          src="/threshold-red.JPG"
          alt="A symmetrical gym illuminated with red lights"
          fill
          quality={95}
          sizes="100vw"
          className={`object-cover object-center transition-[opacity,transform,filter] duration-[2400ms] ease-out ${
            phase >= 3
              ? "scale-100 opacity-100 blur-0"
              : "scale-110 opacity-0 blur-sm"
          }`}
        />

        {/* تیرگی روی عکس */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-[2400ms] ${
            phase >= 3 ? "opacity-50" : "opacity-100"
          }`}
        />

        {/* سایه سینمایی */}
        <div
          className={`absolute inset-0 transition-opacity duration-[2200ms] ${
            phase >= 3 ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background:
              "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.2) 42%, rgba(0,0,0,0.92) 100%)",
          }}
        />

        {/* فقط یک خط قرمز کامل */}
        <div
          className={`absolute inset-0 z-30 flex items-center justify-center transition-opacity duration-700 ${
            phase >= 2 ? "opacity-0" : "opacity-100"
          }`}
        >
          <span
            className={`block h-48 w-[2px] origin-center bg-[#e5252a] shadow-[0_0_30px_rgba(229,37,42,1)] transition-transform duration-[1700ms] ease-out ${
              phase >= 1 ? "scale-y-100" : "scale-y-0"
            }`}
          />
        </div>

        {/* نوشته‌ها */}
        <div className="relative z-20 flex h-full items-center justify-center px-6 text-center">
          <div className="w-full max-w-6xl">
            <p
              className={`mb-8 text-xs uppercase tracking-[0.45em] text-white/60 transition-all duration-1000 ${
                phase >= 4
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
            >
              Chapter Five — The Threshold
            </p>

            <h2
              className={`text-4xl font-semibold uppercase leading-[0.9] tracking-[-0.04em] text-white transition-all duration-[1500ms] sm:text-5xl md:text-7xl lg:text-[6rem] ${
                phase >= 5
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              Every path has
              <br />
              a threshold
            </h2>

            <p
              className={`mt-10 text-sm font-medium uppercase tracking-[0.55em] text-white transition-all duration-1000 ${
                phase >= 6
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
            >
              Cross it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}