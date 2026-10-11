"use client"

import { motion, useReducedMotion, Variants } from "motion/react"
import type { LucideIcon } from "lucide-react"
import { SkillPill } from "./SkillPill"
import type { ResolvedSkill } from "./SkillPill"
import { JSX } from "react/jsx-runtime"

export interface ResolvedSkillCategory {
  id: string
  label: string
  CategoryIcon: LucideIcon
  skills: ResolvedSkill[]
}

interface SkillCategoryBlockProps {
  category: ResolvedSkillCategory
  variants: Variants
}

export function SkillCategoryBlock({ category, variants }: Readonly<SkillCategoryBlockProps>): JSX.Element {
  const shouldReduceMotion = useReducedMotion()
  const { CategoryIcon } = category

  return (
    <motion.div
      variants={shouldReduceMotion ? undefined : variants}
      className="flex flex-col gap-4"
    >
      {/* Category label row */}
      <div className="flex items-center gap-3">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-blue-900/40 bg-blue-950/20">
          <CategoryIcon className="h-3.5 w-3.5 text-blue-500" aria-hidden="true" />
        </div>
        <span className="text-xs font-medium uppercase tracking-widest text-gray-500">
          {category.label}
        </span>
        {/* Separator line */}
        <div className="h-px flex-1 bg-gray-800/80" aria-hidden="true" />
      </div>

      {/* Pills */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <SkillPill key={skill.label} skill={skill} />
        ))}
      </div>
    </motion.div>
  )
}
