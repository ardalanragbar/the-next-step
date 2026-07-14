import type { Metadata } from "next";
import { Barlow_Condensed, Geist } from "next/font/google";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Next Step",
  description:
    "A cinematic journey through weight, silence, pressure, and transformation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${barlowCondensed.variable}`}
    >
      <body className="min-h-full bg-[#050505] text-white antialiased">
        <ReactLenis
          root
          options={{
            autoRaf: true,
            lerp: 0.065,
            smoothWheel: true,
            wheelMultiplier: 0.85,
            touchMultiplier: 1,
            syncTouch: false,
          }}
        />

        {children}
      </body>
    </html>
  );
}