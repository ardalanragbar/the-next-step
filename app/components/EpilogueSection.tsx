"use client";

import { useEffect, useRef, useState } from "react";

export default function EpilogueSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const beginAgain = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-[#050505] text-white"
    >
      {/* Red atmosphere */}
      <div
        className="epilogue-glow pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full sm:h-[38rem] sm:w-[38rem]"
        aria-hidden="true"
      />

      {/* Grain */}
      <div
        className="epilogue-grain pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      {/* Top cinematic line */}
      <div
        className={`pointer-events-none absolute left-1/2 top-0 h-28 w-px -translate-x-1/2 bg-gradient-to-b from-transparent to-white/15 transition-all delay-300 duration-[1800ms] ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      />

      {/* Bottom cinematic line */}
      <div
        className={`pointer-events-none absolute bottom-0 left-1/2 h-24 w-px -translate-x-1/2 bg-gradient-to-t from-transparent to-white/10 transition-all delay-1000 duration-[1800ms] ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-5 py-32 sm:px-8">
        <div className="mx-auto w-full max-w-5xl text-center">
          {/* Intro */}
          <div
            className={`mb-9 transition-all duration-1000 ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            <div className="mx-auto mb-5 h-px w-10 bg-red-600" />

            <p className="text-[10px] font-medium uppercase tracking-[0.38em] text-white/50 sm:text-xs sm:tracking-[0.48em]">
              The journey doesn&apos;t end here
            </p>
          </div>

          {/* Main title */}
          <h2
            className={`text-3xl font-semibold uppercase leading-[0.92] tracking-[-0.04em] text-white transition-all delay-200 duration-1000 sm:text-4xl md:text-5xl lg:text-[4rem] ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <span className="block">The Next Step</span>

            <span className="mt-1 block text-white/45">Is Yours</span>
          </h2>

          {/* Supporting text */}
          <p
            className={`mx-auto mt-10 max-w-2xl text-[10px] font-medium uppercase leading-[2.1] tracking-[0.24em] text-white/45 transition-all delay-500 duration-1000 sm:mt-12 sm:text-xs sm:tracking-[0.34em] ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-7 opacity-0"
            }`}
          >
            Everything before this prepared you
            <span className="block">for what comes next.</span>
          </p>

          {/* Begin again */}
          <div
            className={`mt-12 transition-all delay-700 duration-1000 sm:mt-14 ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-7 opacity-0"
            }`}
          >
            <button
              type="button"
              onClick={beginAgain}
              className="group relative inline-flex items-center gap-5 overflow-hidden border border-white/20 px-7 py-4 text-[10px] font-medium uppercase tracking-[0.38em] text-white/65 transition-all duration-500 hover:border-white/55 hover:text-white sm:text-xs"
            >
              <span className="absolute inset-0 -translate-x-full bg-white/[0.06] transition-transform duration-500 group-hover:translate-x-0" />

              <span className="relative z-10">Begin Again</span>

              <span className="relative z-10 -translate-y-px text-sm transition-transform duration-500 group-hover:-translate-y-1">
                ↑
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Designer signature */}
      <div
        className={`absolute bottom-7 left-0 z-20 w-full px-5 text-center transition-all delay-[1100ms] duration-1000 sm:bottom-9 ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0"
        }`}
      >
        <div className="mx-auto mb-4 h-px w-7 bg-red-600/75" />

        <p className="text-[8px] font-medium uppercase tracking-[0.38em] text-white/30 sm:text-[9px] sm:tracking-[0.44em]">
          Designed &amp; Developed by
        </p>

        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/80 sm:text-xs sm:tracking-[0.36em]">
          Ardalan Ragbar
        </p>
      </div>

      <style jsx>{`
        .epilogue-glow {
          background: radial-gradient(
            circle,
            rgba(127, 29, 29, 0.2) 0%,
            rgba(127, 29, 29, 0.08) 38%,
            transparent 72%
          );
          filter: blur(18px);
          animation: epilogue-breathe 6s ease-in-out infinite;
        }

        .epilogue-grain {
          opacity: 0.055;
          background-image:
            radial-gradient(
              circle at 20% 30%,
              rgba(255, 255, 255, 0.45) 0.5px,
              transparent 0.8px
            ),
            radial-gradient(
              circle at 75% 65%,
              rgba(255, 255, 255, 0.35) 0.5px,
              transparent 0.8px
            );
          background-size:
            6px 6px,
            8px 8px;
          mix-blend-mode: soft-light;
        }

        @keyframes epilogue-breathe {
          0%,
          100% {
            opacity: 0.45;
            transform: translate(-50%, -50%) scale(0.94);
          }

          50% {
            opacity: 0.9;
            transform: translate(-50%, -50%) scale(1.08);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .epilogue-glow {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}