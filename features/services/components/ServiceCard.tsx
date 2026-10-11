"use client"
import { JSX } from "react"
import { motion, useReducedMotion, Variants } from "motion/react"
import type { LucideIcon } from "lucide-react"
import type { ServiceItem } from "../data"

export interface ResolvedServiceTag {
  label: string
  Icon: LucideIcon
}

export interface ResolvedServiceItem extends Omit<ServiceItem, "icon" | "tags"> {
  Icon: LucideIcon
  tags: ResolvedServiceTag[]
}

interface ServiceCardProps {
  service: ResolvedServiceItem
  variants: Variants
  forceFullWidth?: boolean
}

export function ServiceCard({ service, variants, forceFullWidth = false }: Readonly<ServiceCardProps>): JSX.Element {
  const shouldReduceMotion = useReducedMotion()
  const { Icon } = service
  const isAccent = service.variant === "wide"

  return (
    <motion.div
      variants={shouldReduceMotion ? undefined : variants}
      className={[
        "group flex h-full flex-col rounded-2xl border p-6 transition-colors duration-200",
        isAccent && !forceFullWidth ? "lg:col-span-2" : "",
        isAccent
          ? "border-blue-900/40 bg-blue-950/20 hover:border-blue-600/60"
          : "border-gray-800 bg-[#111111] hover:border-blue-600/20",
      ].filter(Boolean).join(" ")}
    >
      <div className="mb-4 flex items-start justify-between">
        <div
          className={[
            "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border",
            isAccent
              ? "border-blue-900/50 bg-blue-950/40"
              : "border-blue-900/40 bg-blue-950/20",
          ].join(" ")}
        >
          <Icon className="h-[18px] w-[18px] text-blue-500" aria-hidden="true" />
        </div>
        <span className="text-[11px] font-medium tracking-wider text-gray-700">
          {service.index}
        </span>
      </div>

      <h3 className={["mb-1.5 text-sm font-medium", isAccent ? "text-blue-300" : "text-gray-100"].join(" ")}>
        {service.title}
      </h3>

      <p className="flex-1 text-xs leading-relaxed text-gray-500">
        {service.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {service.tags.map(({ label, Icon: TagIcon }) => (
          <span
            key={label}
            className="inline-flex items-center gap-1.5 rounded-full border border-gray-800 px-2.5 py-1 text-[11px] text-gray-600 transition-colors duration-150 group-hover:border-blue-900/40 group-hover:text-gray-500"
          >
            <TagIcon className="h-3 w-3 flex-shrink-0 text-blue-600" aria-hidden="true" />
            {label}
          </span>
        ))}
      </div>
    </motion.div>
  )
}