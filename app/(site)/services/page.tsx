import {
  SERVICES,
  PROCESS_STEPS,
  WORKING_PRINCIPLES,
  WONT_DO_LIST,
} from '@/features/services/data'
import { ServicesHero } from '@/features/services/components/ServicesHero'
import { InteractiveServiceSelector } from '@/features/services/components/InteractiveServiceSelector'
import { ProcessTimeline } from '@/features/services/components/ProcessTimeline'
import { WorkingPrinciples } from '@/features/services/components/WorkingPrinciples'
import { WontDoList } from '@/features/services/components/WontDoList'
import { ServicesCta } from '@/features/services/components/ServicesCta'
import { servicesData } from "@/features/services/data"
import { Variants } from "motion/react"


const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
}


export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-dark-primary">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <section aria-label="Services introduction" className="pb-20 pt-24 md:pt-32">
          <ServicesHero />
        </section>

        <section aria-labelledby="services-heading" className="pb-24">
          <SectionLabel eyebrow="What I build" id="services-heading">
            Services
          </SectionLabel>
          <div className="mt-10">
            <InteractiveServiceSelector services={SERVICES} />
          </div>
        </section>
        <hr className="border-[#1F2937]" />
        <section aria-labelledby="principles-heading" className="py-24">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">

            {/* Principles column */}
            <div>
              <SectionLabel eyebrow="How I work" id="principles-heading">
                Non-negotiables
              </SectionLabel>
              <p className="mb-10 mt-4 max-w-md text-sm leading-[1.75] text-[#6B7280]">
                These are the operating principles behind every project I take on.
                They are not values on a slide deck — they are how I actually work.
              </p>
              <WorkingPrinciples principles={WORKING_PRINCIPLES} />
            </div>

            {/* Engagement model — hard numbers, no filler */}
            <div>
              <SectionLabel eyebrow="The numbers" id="engagement-model-heading">
                Engagement model
              </SectionLabel>
              <div className="mt-10 grid grid-cols-2 gap-4">
                {ENGAGEMENT_STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-[#1F2937] bg-[#111111] p-6"
                  >
                    <p className="text-3xl font-bold tracking-tight text-[#F9FAFB]">
                      {stat.value}
                    </p>
                    <p className="mt-1.5 text-xs font-medium leading-snug text-[#6B7280]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs leading-[1.75] text-[#6B7280]">
                Available for short-term contracts and longer product engagements.
                Remote-first. Timezone-flexible for async collaboration.
              </p>
            </div>
          </div>
        </section>
        <hr className="border-[#1F2937]" />
        <section aria-labelledby="process-heading" className="py-24">
          <SectionLabel eyebrow="The process" id="process-heading">
            How an engagement works
          </SectionLabel>
          <p className="mb-14 mt-4 max-w-xl text-sm leading-[1.75] text-[#6B7280]">
            Every project follows the same four phases. Predictable structure
            means fewer surprises, faster decisions, and more time spent building.
          </p>
          <ProcessTimeline steps={PROCESS_STEPS} />
        </section>
        <hr className="border-[#1F2937]" />
        <section aria-labelledby="wont-do-heading" className="py-24">
          <SectionLabel eyebrow="Just as important" id="wont-do-heading">
            What I won&apos;t do
          </SectionLabel>
          <p className="mb-10 mt-4 max-w-xl text-sm leading-[1.75] text-[#6B7280]">
            Not every project is a good fit. These are the situations where I will
            decline — not because I cannot do the work, but because doing it well
            requires conditions that are not there.
          </p>
          <WontDoList items={WONT_DO_LIST} />
        </section>
        <section aria-label="Contact" className="pb-24">
          <ServicesCta cta={servicesData.cta} variants={itemVariants} />
        </section>

      </div>
    </main>
  )
}

interface SectionLabelProps {
  eyebrow: string
  id: string
  children: React.ReactNode
}

function SectionLabel({ eyebrow, id, children }: SectionLabelProps) {
  return (
    <div>
      <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="text-3xl font-bold tracking-tight text-[#F9FAFB] md:text-4xl"
      >
        {children}
      </h2>
    </div>
  )
}

const ENGAGEMENT_STATS = [
  { value: '3+', label: 'Years full-stack experience' },
  { value: '< 24h', label: 'Response on new inquiries' },
  { value: '100%', label: 'Remote — available globally' },
  { value: 'Weekly', label: 'Delivery cadence on projects' },
] as const
