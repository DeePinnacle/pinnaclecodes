import { JSX } from "react";
import { HeroContent } from "./HeroContent"
import { HeroVisual } from "./HeroVisual"


export function HeroSection(): JSX.Element {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-white dark:bg-[#0a0a0a]"
      aria-label="Hero — Lawal Kamaldeen, Full Stack Developer"
    >
      {/* Dot-grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #9ca3af 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      {/* Content container */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 py-20 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Left: text content */}
        <HeroContent />

        {/* Right: visual — rendered below on mobile via flex-col ordering */}
        <div className="mt-16 w-full lg:mt-0">
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}
