import type { ContactData } from "../types"
import { ContactInfoPanel } from "./ContactInfoPanel"
import { ContactForm } from "./ContactForm"
import { JSX } from "react/jsx-runtime"

interface ContactSectionProps {
  data: ContactData
}

export function ContactSection({ data }: Readonly<ContactSectionProps>): JSX.Element {
  return (
    <section
      className="relative bg-white py-24 dark:bg-dark-primary"
      aria-label="Contact Lawal Kamaldeen"
    >
      {/* Dot-grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, #6b7280 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section eyebrow */}
        <div className="mb-12 flex items-center gap-3">
          <div className="h-px w-7 bg-blue-600" aria-hidden="true" />
          <span className="text-[11px] font-medium uppercase tracking-widest text-blue-500">
            Contact
          </span>
        </div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left: rich info panel */}
          <ContactInfoPanel data={data} />

          {/* Right: contact form */}
          <ContactForm />
        </div>
      </div>
    </section>
  )
}