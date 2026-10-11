'use client'


import { useState } from 'react'
import { useReducedMotion, motion, AnimatePresence } from 'framer-motion'
import type { ServiceOffering } from '@/features/services/data'

interface InteractiveServiceSelectorProps {
  services: ServiceOffering[]
}

export function InteractiveServiceSelector({ services }: InteractiveServiceSelectorProps) {
  const [activeId, setActiveId] = useState<string>(services[0]?.id ?? '')
  const shouldReduceMotion = useReducedMotion()

  const activeService = services.find((s) => s.id === activeId) ?? services[0]

  if (!activeService) return null

  return (
    <div className="grid grid-cols-1 gap-0 lg:grid-cols-[240px_1fr] lg:items-start">
      <nav
        aria-label="Service categories"
        className="flex flex-row gap-2 overflow-x-auto pb-4 lg:sticky lg:top-48 lg:self-start lg:flex-col lg:gap-1 lg:overflow-x-visible lg:pb-0 lg:pr-8"
      >
        {services.map((service) => {
          const isActive = service.id === activeId
          return (
            <button
              key={service.id}
              onClick={() => setActiveId(service.id)}
              aria-pressed={isActive}
              className={[
                'relative shrink-0 rounded-lg px-4 py-3 text-left text-sm font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]',
                'lg:w-full',
                isActive
                  ? 'bg-[#111111] text-[#F9FAFB]'
                  : 'text-[#6B7280] hover:bg-[#111111]/60 hover:text-[#F9FAFB]',
              ].join(' ')}
            >
              {/* Active indicator bar */}
              {isActive && (
                <motion.span
                  layoutId="service-nav-indicator"
                  className="absolute left-0 top-0 hidden h-full w-0.5 rounded-full bg-[#2563EB] lg:block"
                  transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  aria-hidden="true"
                />
              )}
              {/* Mobile active underline */}
              {isActive && (
                <motion.span
                  layoutId="service-tab-indicator"
                  className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-[#2563EB] lg:hidden"
                  transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  aria-hidden="true"
                />
              )}
              <span className="relative pl-3 lg:pl-4">{service.shortLabel}</span>
              {service.badge && (
                <span className="ml-2 rounded-full bg-[#2563EB]/15 px-1.5 py-0.5 text-[10px] font-semibold text-[#3B82F6]">
                  {service.badge}
                </span>
              )}
            </button>
          )
        })}
      </nav>

      {/* ── Detail panel ─────────────────────────────────────────────────── */}
      <div className="min-h-[520px] lg:border-l lg:border-[#1F2937] lg:pl-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? {} : { opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <ServiceDetail service={activeService} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

// ─── Detail panel content ──────────────────────────────────────────────────

interface ServiceDetailProps {
  service: ServiceOffering
}

function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <article>
      {/* Header */}
      <div className="mb-7">
        <h3 className="text-2xl font-bold tracking-tight text-[#F9FAFB] md:text-3xl">
          {service.title}
        </h3>
        <p className="mt-1.5 text-sm font-medium text-[#3B82F6]">{service.tagline}</p>
      </div>

      {/* Description */}
      <p className="mb-8 text-sm leading-[1.8] text-[#6B7280] md:text-base">
        {service.description}
      </p>

      {/* Two-col: Deliverables + Ideal for / Not ideal for */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

        {/* Deliverables */}
        <div className="rounded-xl border border-[#1F2937] bg-[#111111] p-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#6B7280]">
            What you get
          </p>
          <ul className="space-y-2.5">
            {service.deliverables.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-[#F9FAFB]">
                <span
                  className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563EB]"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Fit + Not ideal for */}
        <div className="flex flex-col gap-5">
          {/* Ideal for */}
          <div className="rounded-xl border border-[#10B981]/20 bg-[#10B981]/5 p-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#10B981]">
              Good fit
            </p>
            <p className="text-sm leading-relaxed text-[#F9FAFB]">{service.idealFor}</p>
          </div>

          {/* Not ideal for — the honest filter */}
          <div className="rounded-xl border border-[#EF4444]/20 bg-[#EF4444]/5 p-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#EF4444]">
              Not a fit if
            </p>
            <p className="text-sm leading-relaxed text-[#F9FAFB]">{service.notIdealFor}</p>
          </div>

          {/* Tech stack */}
          <div>
            <p className="mb-2.5 text-xs font-semibold uppercase tracking-widest text-[#6B7280]">
              Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {service.techHighlights.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-[#0a0a0a] px-2.5 py-1 font-mono text-xs text-[#6B7280] ring-1 ring-[#1F2937]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
