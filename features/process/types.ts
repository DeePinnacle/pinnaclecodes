export type ProcessInfoIconName = "updates" | "quality" | "docs" | "support"

export interface ProcessStep {
  id: string
  index: string          // "01", "02", etc.
  icon: string           // Lucide icon name — resolved client-side
  title: string
  description: string
  tags: string[]         // tools / outputs for this phase
  highlight?: boolean    // accent treatment for a featured step
}


export interface ProcessInfoPoint {
  id: string
  title: string
  description: string
  icon: ProcessInfoIconName
}