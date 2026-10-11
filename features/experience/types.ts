export interface ExperienceItem {
  id: string
  role: string
  company: string
  type: "Full-time" | "Contract" | "Freelance" | "Part-time" | "Internship"
  location: string
  period: string
  year: string          // short year label shown on the timeline node pill
  current: boolean
  highlights: string[]  // achievement bullets shown with → prefix
  stack: string[]
  description?: string  // optional short summary paragraph
}