"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export default function ReleaseSection() {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const hasStartedRef = useRef(false);

  const [phase, setPhase] = useState(0);
  const [soundBlocked, setSoundBlocked] = useState(false);

  const stopBreathSound = useCallback(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;
  }, []);

  const playBreathSound = useCallback(async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      audio.pause();
      audio.currentTime = 0;
      audio.volume = 0.55;

      await audio.play();
      setSoundBlocked(false);
    } catch {
      setSoundBlocked(true);
    }
  }, []);

  useEffect(() => {
    const stage = stageRef.current;

    if (!stage) return;

    const clearTimers = () => {
      timersRef.current.forEach((timer) => clearTimeout(timer));
      timersRef.current = [];
    };

    const startSequence = () => {
      clearTimers();
      stopBreathSound();
      setPhase(0);
      setSoundBlocked(false);

      timersRef.current = [
        setTimeout(() => {
          setPhase(1);
          void playBreathSound();
        }, 900),

        setTimeout(() => setPhase(2), 2800),
        setTimeout(() => setPhase(3), 4500),
        setTimeout(() => setPhase(4), 6200),
        setTimeout(() => setPhase(5), 8200),
        setTimeout(() => setPhase(6), 10500),
      ];
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (
          entry.isIntersecting &&
          entry.intersectionRatio >= 0.65 &&
          !hasStartedRef.current
        ) {
          hasStartedRef.current = true;
          startSequence();
        }

        if (!entry.isIntersecting) {
          hasStartedRef.current = false;
          clearTimers();
          stopBreathSound();
          setPhase(0);
          setSoundBlocked(false);
        }
      },
      {
        threshold: [0, 0.65],
      },
    );

    observer.observe(stage);

    return () => {
      observer.disconnect();
      clearTimers();
      stopBreathSound();
    };
  }, [playBreathSound, stopBreathSound]);

  const revealAmount = () => {
    if (phase < 2) return 0;
    if (phase === 2) return 3;
    if (phase === 3) return 1;
    if (phase === 4) return 34;

    return 100;
  };

  const breatheScale = () => {
    if (phase === 2 || phase === 4) return 1.055;
    if (phase === 3) return 0.985;

    return 1;
  };

  const reveal = revealAmount();

  return (
    <section className="relative h-[320vh] bg-black">
      <div
        ref={stageRef}
        className="sticky top-0 h-screen overflow-hidden bg-black"
      >
        <audio
          ref={audioRef}
          src="/breath.mp3"
          preload="auto"
          playsInline
        />

        {/* تصویر اصلی */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            phase >= 2 ? "opacity-100" : "opacity-0"
          }`}
          style={{
            willChange: "opacity",
            transform: "translateZ(0)",
          }}
        >
          <Image
            src="/release-space.JPG"
            alt="A quiet and open gym space"
            fill
            quality={85}
            sizes="100vw"
            className={`object-cover object-center transition-transform duration-[3500ms] ease-out ${
              phase >= 5 ? "scale-100" : "scale-[1.04]"
            }`}
            style={{
              willChange: "transform",
              transformStyle: "preserve-3d",
            }}
          />

          <div
            className={`absolute inset-0 bg-black transition-opacity duration-[1800ms] ${
              phase >= 5 ? "opacity-30" : "opacity-50"
            }`}
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at center, transparent 8%, rgba(0,0,0,0.2) 52%, rgba(0,0,0,0.86) 100%)",
            }}
          />
        </div>

        {/* پرده سیاه بالا */}
        <div
          className="absolute left-0 top-0 z-20 h-1/2 w-full bg-black transition-transform duration-[1800ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
          style={{
            transform: `translate3d(0, -${reveal}%, 0)`,
            willChange: "transform",
          }}
        />

        {/* پرده سیاه پایین */}
        <div
          className="absolute bottom-0 left-0 z-20 h-1/2 w-full bg-black transition-transform duration-[1800ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
          style={{
            transform: `translate3d(0, ${reveal}%, 0)`,
            willChange: "transform",
          }}
        />

        {/* خط نور وسط */}
        <div
          className={`absolute left-1/2 top-1/2 z-30 h-px -translate-x-1/2 -translate-y-1/2 bg-white shadow-[0_0_24px_rgba(255,255,255,0.65)] transition-[width,opacity] duration-[1400ms] ${
            phase >= 2 && phase < 5 ? "opacity-70" : "opacity-0"
          }`}
          style={{
            width:
              phase === 2
                ? "34vw"
                : phase === 3
                  ? "24vw"
                  : phase === 4
                    ? "76vw"
                    : "0vw",
            willChange: "width, opacity",
          }}
        />

        {/* کلمه BREATHE */}
        <div className="absolute inset-0 z-40 flex items-center justify-center overflow-hidden px-6">
          <h2
            className={`font-[var(--font-barlow-condensed)] text-center text-7xl font-semibold uppercase leading-none tracking-[0.12em] text-white transition-[opacity,transform] duration-[1500ms] ease-in-out sm:text-8xl md:text-9xl lg:text-[12rem] ${
              phase >= 1 && phase < 5 ? "opacity-100" : "opacity-0"
            }`}
            style={{
              transform: `translate3d(0,0,0) scale(${breatheScale()})`,
              willChange: "transform, opacity",
            }}
          >
            Breathe
          </h2>
        </div>

        {/* جمله پایانی */}
        <div className="absolute inset-x-0 bottom-[9%] z-50 flex justify-center px-4">
          <div
            className={`flex flex-col items-center text-center transition-[opacity,transform] duration-[1600ms] ${
              phase >= 6
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{
              willChange: "transform, opacity",
            }}
          >
            <span className="mb-5 h-px w-12 bg-[#d91f26] shadow-[0_0_16px_rgba(217,31,38,0.7)]" />

            <p className="whitespace-nowrap text-[10px] uppercase tracking-[0.2em] text-white/75 sm:text-xs md:text-sm">
              You were never meant to carry everything
            </p>
          </div>
        </div>

        {/* وقتی مرورگر صدای خودکار را مسدود کند */}
        {soundBlocked && (
          <button
            type="button"
            onClick={() => void playBreathSound()}
            className="absolute bottom-6 right-6 z-[80] border border-white/25 bg-black/55 px-4 py-3 text-[10px] uppercase tracking-[0.25em] text-white/75 backdrop-blur-md transition hover:border-white/60 hover:text-white"
          >
            Enable sound
          </button>
        )}

        {/* Grain سبک */}
        <div
          className="pointer-events-none absolute inset-0 z-[60] opacity-[0.06] mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.45) 0.5px, transparent 0.5px)",
            backgroundSize: "4px 4px",
          }}
        />
      </div>
    </section>
  );
}