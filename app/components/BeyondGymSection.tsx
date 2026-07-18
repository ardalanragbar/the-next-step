"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function BeyondGymSection() {
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
        threshold: 0.25,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-[#050505]"
    >
      {/* Background image */}
      <Image
        src="/Beyond-road.jpg"
        alt="An empty road stretching toward the horizon"
        fill
        sizes="100vw"
        className={`object-cover object-center transition-transform duration-[5000ms] ease-out ${
          visible ? "scale-100" : "scale-105"
        }`}
      />

      {/* Dark overlays */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-[#050505]/45 to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/75 via-transparent to-[#050505]/20" />

      {/* Minimal direction arrow */}
      {visible && (
        <div
          className="pointer-events-none absolute left-1/2 top-[72%] z-[5] -translate-x-1/2"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 64"
            className="road-arrow h-16 w-6 md:h-20 md:w-7"
          >
            <path
              d="M12 60V10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
            />

            <path
              d="M5 18L12 9L19 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center px-4 py-24 md:px-8 lg:px-12">
        <div className="w-full max-w-3xl">
          {/* Chapter marker */}
          <div
            className={`mb-7 flex items-center gap-4 transition-all duration-1000 ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            <span className="block h-px w-10 bg-red-600" />

            <p className="text-[10px] font-medium uppercase tracking-[0.42em] text-white/65 sm:text-xs">
              Chapter Seven
            </p>
          </div>

          {/* Title */}
          <h2
            className={`text-3xl font-semibold uppercase leading-[0.92] tracking-[-0.04em] text-white transition-all delay-200 duration-1000 sm:text-4xl md:text-5xl lg:text-[4rem] ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <span className="block md:whitespace-nowrap">Beyond</span>
            <span className="block md:whitespace-nowrap">The Gym</span>
          </h2>

          {/* Story */}
          <div className="mt-10 max-w-2xl space-y-3 md:mt-12">
            <p
              className={`text-[11px] font-medium uppercase leading-[2] tracking-[0.27em] text-white/85 transition-all delay-500 duration-1000 sm:text-xs sm:tracking-[0.33em] ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
            >
              The strength you built...
            </p>

            <p
              className={`text-[11px] font-medium uppercase leading-[2] tracking-[0.27em] text-white/60 transition-all delay-700 duration-1000 sm:text-xs sm:tracking-[0.33em] ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
            >
              Was never meant to stay inside the gym.
            </p>

            <div
              className={`pt-4 transition-all delay-[1000ms] duration-1000 ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
            >
              <span className="mb-5 block h-px w-7 bg-white/35" />

              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-white sm:text-sm">
                Take it with you.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .road-arrow {
          color: rgba(255, 255, 255, 0.78);
          opacity: 0.18;
          filter:
            drop-shadow(0 0 3px rgba(255, 255, 255, 0.4))
            drop-shadow(0 0 9px rgba(220, 38, 38, 0.25));
          animation: arrow-light 3.2s ease-in-out infinite;
        }

        @keyframes arrow-light {
          0%,
          100% {
            opacity: 0.14;
            filter:
              drop-shadow(0 0 2px rgba(255, 255, 255, 0.2))
              drop-shadow(0 0 5px rgba(220, 38, 38, 0.12));
          }

          45%,
          55% {
            opacity: 0.9;
            filter:
              drop-shadow(0 0 5px rgba(255, 255, 255, 0.8))
              drop-shadow(0 0 14px rgba(220, 38, 38, 0.45));
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .road-arrow {
            animation: none;
            opacity: 0.65;
          }
        }
      `}</style>
    </section>
  );
}