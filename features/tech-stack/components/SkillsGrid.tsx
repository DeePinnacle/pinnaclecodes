"use client"

import { motion, useReducedMotion, Variants } from "motion/react"
import { SkillCategoryBlock } from "./SkillCategoryBlock"
import type { ResolvedSkillCategory } from "./SkillCategoryBlock"
import { getSkillIcon } from "../icon-map"
import type { SkillCategory } from "../types"
import { JSX } from "react/jsx-runtime"

interface SkillsGridProps {
  categories: SkillCategory[]
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
}

/** Resolve all icon strings → stable LucideIcon refs outside of JSX render */
function resolveCategory(category: SkillCategory): ResolvedSkillCategory {
  return {
    id: category.id,
    label: category.label,
    CategoryIcon: getSkillIcon(category.icon),
    skills: category.skills.map((skill) => ({
      label: skill.label,
      Icon: getSkillIcon(skill.icon),
      accent: skill.accent,
    })),
  }
}

export function SkillsGrid({ categories }: Readonly<SkillsGridProps>): JSX.Element {
  const shouldReduceMotion = useReducedMotion()
  const resolved = categories.map(resolveCategory)

  return (
    <motion.div
      className="flex flex-col gap-10"
      variants={shouldReduceMotion ? undefined : containerVariants}
      initial={shouldReduceMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true }}
    >
      {resolved.map((category) => (
        <SkillCategoryBlock
          key={category.id}
          category={category}
          variants={itemVariants}
        />
      ))}
    </motion.div>
  )
}
