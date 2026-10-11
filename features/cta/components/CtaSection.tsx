import { JSX } from "react/jsx-runtime"
import type { CtaData } from "../types"
import { CtaContent } from "./CtaContent"

interface CtaSectionProps {
  data: CtaData
}

export function CtaSection({ data }: Readonly<CtaSectionProps>): JSX.Element {
  return (
    <section
      className="relative bg-white py-24 dark:bg-dark-primary"
      aria-label="Call to action — work with Lawal Kamaldeen"
    >
      {/* Outer dot-grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, #6b7280 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-blue-900/40 bg-blue-950/10 px-6 py-14 dark:border-blue-900/40 dark:bg-blue-950/10 sm:px-12">

          {/* Radial glow */}
          <div
            className="pointer-events-none absolute -top-16 left-1/2 h-48 w-72 -translate-x-1/2"
            style={{
              background: "radial-gradient(ellipse at center, rgba(37,99,235,0.15) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          {/* Inner dot grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
            aria-hidden="true"
          />

          {/* Corner accents */}
          <div
            className="pointer-events-none absolute left-0 top-0 h-16 w-16 border-l-2 border-t-2 border-blue-600/30 dark:border-blue-600/20"
            style={{ borderRadius: "16px 0 0 0" }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute bottom-0 right-0 h-16 w-16 border-b-2 border-r-2 border-blue-600/30 dark:border-blue-600/20"
            style={{ borderRadius: "0 0 16px 0" }}
            aria-hidden="true"
          />

          {/* Only plain serializable data crosses the server→client boundary */}
          <div className="relative">
            <CtaContent data={data} />
          </div>
        </div>
      </div>
    </section>
  )
}