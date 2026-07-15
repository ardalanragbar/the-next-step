"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSection() {
  /*
    0 — صفحه کاملاً سیاه
    1 — نمایش Are You Ready
    2 — رشد خط قرمز
    3 — ظاهرشدن عکس
    4 — Chapter
    5 — تیتر اصلی
    6 — متن پایین و Scroll
  */
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 800),
      setTimeout(() => setPhase(2), 2300),

      // مقدمه مدت بیشتری روی صفحه می‌ماند
      setTimeout(() => setPhase(3), 6500),

      setTimeout(() => setPhase(4), 8400),
      setTimeout(() => setPhase(5), 9500),
      setTimeout(() => setPhase(6), 11100),
    ];

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-black">
      {/* تصویر اصلی Hero */}
      <Image
        src="/hero-barbell.JPG"
        alt="Barbell resting in a dark gym"
        fill
        priority
        quality={95}
        sizes="100vw"
        className={`object-cover object-center transition-[opacity,transform] duration-[2800ms] ease-out ${
          phase >= 3
            ? "scale-100 opacity-100"
            : "scale-[1.055] opacity-0"
        }`}
        style={{
          willChange: "opacity, transform",
        }}
      />

      {/* تیرگی روی تصویر */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-[2800ms] ${
          phase >= 3 ? "opacity-40" : "opacity-100"
        }`}
      />

      {/* گرادیان سینمایی */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/65 transition-opacity duration-[2400ms] ${
          phase >= 3 ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* مقدمه‌ی سیاه */}
      <div
        className={`absolute inset-0 z-40 flex items-center justify-center bg-black px-5 transition-opacity duration-[1800ms] ${
          phase >= 3 ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <div className="flex max-w-[92vw] flex-col items-center text-center">
          <div
            className={`whitespace-nowrap uppercase leading-none transition-all duration-[1500ms] ${
              phase >= 1
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{
              fontFamily: "var(--font-geist-sans), Arial, sans-serif",
              fontSize: "clamp(1rem, 2.1vw, 1.8rem)",
              fontWeight: 400,
              letterSpacing: "0.3em",
            }}
          >
            <span className="text-white">Are you </span>
            <span className="text-[#d91f26]">ready?</span>
          </div>

          <div className="mt-7 h-px w-28 overflow-hidden bg-white/15 sm:w-36">
            <span
              className={`block h-full w-full origin-left bg-[#d91f26] shadow-[0_0_18px_rgba(217,31,38,0.85)] transition-transform duration-[1700ms] ease-out ${
                phase >= 2 ? "scale-x-100" : "scale-x-0"
              }`}
            />
          </div>
        </div>
      </div>

      {/* نوشته‌های اصلی Hero */}
      <div className="relative z-30 w-full px-4 pb-16 md:px-8 md:pb-24 lg:px-12">
        <p
          className={`mb-5 flex items-center gap-4 text-xs uppercase tracking-[0.45em] text-white/60 transition-all duration-1000 ${
            phase >= 4
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
        >
          <span className="h-px w-9 bg-[#d91f26]" />
          Chapter One — The Weight
        </p>

        <h1
          className={`max-w-4xl text-5xl font-semibold uppercase leading-[0.88] tracking-[-0.04em] text-white transition-all duration-[1500ms] sm:text-6xl md:text-7xl lg:text-[5.8rem] ${
            phase >= 5
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          Some things
          <br />
          are too heavy
          <br />
          to carry forever
        </h1>

        <p
          className={`mt-8 max-w-sm text-xs uppercase leading-6 tracking-[0.18em] text-white/55 transition-all duration-[1200ms] ${
            phase >= 6
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          You only need light for the next step
        </p>
      </div>

      {/* راهنمای اسکرول */}
      <div
        className={`absolute bottom-10 right-6 z-30 hidden items-center gap-4 text-xs uppercase tracking-[0.35em] text-white/45 transition-all duration-1000 md:flex ${
          phase >= 6
            ? "translate-y-0 opacity-100"
            : "translate-y-5 opacity-0"
        }`}
      >
        <span className="h-px w-12 bg-[#d91f26]/70" />
        Scroll to begin
      </div>
    </section>
  );
}