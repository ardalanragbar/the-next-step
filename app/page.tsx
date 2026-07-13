import Image from "next/image";
import ThresholdSection from "./components/ThresholdSection";

export default function Home() {
  return (
    <main className="bg-[#050505] text-white">
      {/* HERO — THE WEIGHT */}
      <section className="relative flex min-h-screen items-end overflow-hidden">
        <Image
          src="/hero-barbell.JPG"
          alt="Barbell resting in a dark gym"
          fill
          priority
          quality={95}
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-black/45" />

        <div className="relative z-10 w-full px-4 pb-16 md:px-8 md:pb-24 lg:px-12">
          <p className="mb-5 text-xs uppercase tracking-[0.45em] text-white/60">
            Chapter One — The Weight
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold uppercase leading-[0.88] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[5.8rem]">
            Some things
            <br />
            are too heavy
            <br />
            to carry forever 
          </h1>

          <p className="mt-8 max-w-sm text-xs uppercase leading-6 tracking-[0.18em] text-white/55">
            You only need light for the next step
          </p>
        </div>

        <div className="absolute bottom-10 right-6 z-10 hidden items-center gap-4 text-xs uppercase tracking-[0.35em] text-white/45 md:flex">
          <span className="h-px w-12 bg-white/30" />
          Scroll to begin
        </div>
      </section>

      {/* CHAPTER TWO — SILENCE */}
      <section className="relative min-h-screen overflow-hidden bg-[#050505]">
  <div className="absolute inset-y-0 right-0 w-full md:w-[55%]">
    <Image
      src="/silence-gym.JPG"
      alt="An empty gym illuminated by soft window light"
      fill
      quality={95}
      sizes="(min-width: 768px) 55vw, 100vw"
      className="object-cover object-center"
    />

    <div className="absolute inset-0 bg-black/20" />
    <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-black/25 to-transparent" />
  </div>

  <div className="relative z-10 flex min-h-screen items-center px-4 md:px-8 lg:px-12">
    <div className="max-w-2xl">
      <p className="mb-6 text-xs uppercase tracking-[0.45em] text-white/55">
        Chapter Two — Silence
      </p>

      <h2 className="text-4xl font-semibold uppercase leading-[0.92] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
  You do not need to see
  <br />
  the whole path
  <br />
  Only the next step
</h2>

      <p className="mt-8 text-xs uppercase leading-6 tracking-[0.18em] text-white/55">
        Sometimes, the first step is to stop
      </p>
    </div>
  </div>
</section>
{/* CHAPTER THREE — THE FIRST STEP */}
<section className="relative min-h-screen overflow-hidden bg-[#050505]">
  <div className="absolute inset-y-0 left-0 w-full md:w-[52%]">
    <Image
      src="/first-step.JPG"
      alt="A dark staircase beside rows of dumbbells"
      fill
      quality={95}
      sizes="(min-width: 768px) 52vw, 100vw"
      className="object-cover object-center"
    />

    <div className="absolute inset-0 bg-black/20" />
    <div className="absolute inset-0 bg-gradient-to-l from-[#050505] via-black/25 to-transparent" />
  </div>

  <div className="relative z-10 flex min-h-screen items-center justify-end px-4 md:px-8 lg:px-12">
    <div className="max-w-2xl">
      <p className="mb-6 text-xs uppercase tracking-[0.45em] text-white/55">
        Chapter Three — The First Step
      </p>
<h2 className="text-3xl font-semibold uppercase leading-[0.92] tracking-[-0.04em] text-white sm:text-4xl md:text-5xl lg:text-[4.25rem]">
  <span className="block md:whitespace-nowrap">
    You do not need to 
  </span>

  <span className="block md:whitespace-nowrap">
   see the whole path
  </span>

  <span className="block md:whitespace-nowrap">
    Only the next step
  </span>
</h2>

      <p className="mt-8 text-xs uppercase leading-6 tracking-[0.18em] text-white/55">
        The way reveals itself to those who move
      </p>
    </div>
  </div>
</section>
{/* CHAPTER FOUR — PRESSURE */}
<section className="relative min-h-screen overflow-hidden bg-[#050505]">
  <div className="absolute inset-y-0 right-0 w-full md:w-[52%]">
    <Image
      src="/pressure-pullup.JPG"
      alt="Athlete performing a pull-up under pressure"
      fill
      quality={95}
      sizes="(min-width: 768px) 52vw, 100vw"
      className="object-cover object-center"
    />

    <div className="absolute inset-0 bg-black/20" />
    <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-black/35 to-transparent" />
  </div>

  <div className="relative z-10 flex min-h-screen items-center px-4 md:px-8 lg:px-12">
    <div className="w-full max-w-3xl">
      <p className="mb-6 text-xs uppercase tracking-[0.45em] text-white/55">
        Chapter Four — Pressure
      </p>

      <h2 className="text-3xl font-semibold uppercase leading-[0.92] tracking-[-0.04em] text-white sm:text-4xl md:text-5xl lg:text-[4rem]">
  <span className="block md:whitespace-nowrap">
    Pressure does not
  </span>

  <span className="block md:whitespace-nowrap">
    always break you
  </span>

  <span className="block md:whitespace-nowrap">
    Sometimes it reveals  you
  </span>

  <span className="block md:whitespace-nowrap">
     
  </span>
</h2>

      <p className="mt-8 text-xs uppercase leading-6 tracking-[0.18em] text-white/55">
        The body asks to stop  The will decides
      </p>
    </div>
  </div>
</section>
<ThresholdSection />
    </main>
  );
}