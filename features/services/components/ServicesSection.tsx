import type { ServicesData } from "../data"
import { ServicesBento } from "./ServicesBento"
import { JSX } from "react";

interface ServicesSectionProps {
  data: ServicesData
}

export function ServicesSection({ data }: Readonly<ServicesSectionProps>): JSX.Element {
  return (
    <section
      className="relative bg-white py-24 dark:bg-dark-primary"
      aria-label="Services offered by Lawal Kamaldeen"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-10">
          <div className="mb-3 flex items-center gap-3">
            <div className="h-px w-7 bg-blue-600" aria-hidden="true" />
            <span className="text-[11px] font-medium uppercase tracking-widest text-blue-500">
              {data.eyebrow}
            </span>
          </div>
          <h2 className="mb-2 text-4xl font-bold leading-tight tracking-tight text-dark-primary dark:text-white lg:text-5xl">
            {data.heading}
          </h2>
          <p className="text-sm text-primary dark:text-gray-500">{data.subheading}</p>
        </div>

        {/* Bento grid */}
        <ServicesBento services={data.services} cta={data.cta} />
      </div>
    </section>
  )
}