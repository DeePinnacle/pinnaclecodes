"use client"

import type { LucideIcon } from "lucide-react"
import { JSX } from "react/jsx-runtime"

export interface ResolvedSkill {
  label: string
  Icon: LucideIcon
  accent?: boolean
}

interface SkillPillProps {
  skill: ResolvedSkill
}

export function SkillPill({ skill }: Readonly<SkillPillProps>): JSX.Element {
  const { Icon, label, accent } = skill

  return (
    <span
      className={[
        "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition-colors duration-200",
        accent
          ? "border-blue-900/50 bg-blue-950/30 text-blue-500 hover:border-blue-600/60 hover:bg-blue-950/50 dark:text-blue-300"
          : "border-gray-800 bg-[#111111] text-gray-500 hover:border-gray-700 hover:text-gray-400",
      ].join(" ")}
    >
      <Icon className={["h-3.5 w-3.5 shrink-0", accent ? "text-blue-500" : "text-gray-600"].join(" ")} aria-hidden="true" />
      {label}
    </span>
  )
}
