import type { Metadata } from "next"
import type { JSX } from "react"
import { experiences } from "@/features/experience/data"
import { ExperienceSection } from "@/features/experience/components/ExperienceSection"

export const metadata: Metadata = {
  title: "Experience | PinnacleCodes",
  description:
    "A chronological record of professional roles, contract work, and freelance engagements — with the impact delivered at each step.",
  openGraph: {
    title: "Experience | PinnacleCodes",
    description:
      "Senior full-stack developer. 3+ years shipping production software across fintech, logistics, and SaaS.",
    type: "website",
  },
}


export default function ExperiencePage(): JSX.Element {
  return (
    <main>
      <PageHero />
      <ExperienceSection experiences={experiences} />
      <ExperienceCTA />
    </main>
  )
}

function PageHero(): JSX.Element {
  return (
    <section
      className="relative overflow-hidden bg-white py-20 dark:bg-dark-primary"
      aria-label="Experience page introduction"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] dark:opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #6b7280 1px, transparent 1px), linear-gradient(to bottom, #6b7280 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-600/5 blur-3xl dark:bg-blue-600/8"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-3">
            <span className="inline-block h-px w-7 bg-blue-600" aria-hidden="true" />
            <span className="text-[11px] font-medium uppercase tracking-widest text-blue-500">
              Career timeline
            </span>
          </div>

          {/* Heading */}
          <h1 className="mb-5 text-5xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white lg:text-6xl">
            Work that{" "}
            <span className="text-blue-600">
              shipped.
            </span>
          </h1>

          {/* Subheading */}
          <p className="mb-8 max-w-xl text-base leading-relaxed text-gray-500 dark:text-gray-500">
            Three years of professional software development — from early frontend freelance
            through full-stack contracts to owning product architecture end-to-end. Every role
            produced code in production.
          </p>

          {/* Quick-nav chips */}
          <ul className="flex flex-wrap items-center gap-2" aria-label="Quick highlights">
            {QUICK_HIGHLIGHTS.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-600 dark:border-gray-800 dark:bg-[#111111] dark:text-gray-400"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

const QUICK_HIGHLIGHTS = [
  "Full-Stack Development",
  "React & Next.js",
  "React Native & Expo",
  "Node.js & Laravel",
  "MongoDB & MySQL",
  "Open to Senior Roles",
] as const

function ExperienceCTA(): JSX.Element {
  return (
    <section
      className="border-t border-gray-100 bg-white py-20 dark:border-gray-800/60 dark:bg-dark-primary"
      aria-label="Next steps"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 rounded-2xl border border-gray-200 bg-gray-50 p-8 dark:border-gray-800 dark:bg-[#111111] lg:grid-cols-2 lg:gap-16 lg:p-12">

          {/* Left copy */}
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="inline-block h-px w-5 bg-blue-600" aria-hidden="true" />
              <span className="text-[11px] font-medium uppercase tracking-widest text-blue-500">
                Let&apos;s work together
              </span>
            </div>
            <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white lg:text-4xl">
              Ready to bring this experience to your team?
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-gray-500 dark:text-gray-500">
              I&apos;m open to senior full-stack roles, high-scope contract work, and technical
              co-founder conversations. If what you&apos;ve read aligns with what you&apos;re
              building, I want to hear about it.
            </p>
          </div>

          {/* Right actions */}
          <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Get in touch
              <ArrowRightIcon />
            </a>
            <a
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-colors duration-150 hover:border-blue-300 hover:text-blue-600 dark:border-gray-800 dark:bg-dark-primary dark:text-gray-300 dark:hover:border-blue-600/40 dark:hover:text-blue-400"
            >
              View projects
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function ArrowRightIcon(): JSX.Element {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}