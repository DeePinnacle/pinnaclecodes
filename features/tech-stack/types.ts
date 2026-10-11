export interface Skill {
  label: string
  icon: string   // Lucide icon name — resolved client-side
  accent?: boolean  // highlights primary/signature skills in electric blue pill
}

export interface SkillCategory {
  id: string
  label: string
  icon: string   // Lucide icon name for the category header
  skills: Skill[]
}
