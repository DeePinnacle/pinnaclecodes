import type { ProcessInfoPoint, ProcessStep } from "./types"

/**
 * Development process steps — update this file to edit phases.
 * Steps render top-to-bottom with a connecting spine line.
 */
export const processSteps: ProcessStep[] = [
  {
    id: "discovery",
    index: "01",
    icon: "Search",
    title: "Discovery & scoping",
    description:
      "Every project starts with understanding — the problem, the users, and the constraints before touching a single line of code. I ask the hard questions early so the build phase is focused and intentional.",
    tags: ["Requirements", "User research", "Figma", "Brief"],
    highlight: true,
  },
  {
    id: "architecture",
    index: "02",
    icon: "Waypoints",
    title: "Architecture planning",
    description:
      "Before building, I design the data model, API contracts, and component hierarchy. This upfront investment prevents costly refactors mid-development and keeps the codebase predictable as it grows.",
    tags: ["System design", "TypeScript", "API contracts", "Data modelling"],
  },
  {
    id: "development",
    index: "03",
    icon: "Code2",
    title: "Development & iteration",
    description:
      "I build incrementally — UI layer first, then API integration, then backend services. Each layer is verified before the next is added. Clean commits, typed interfaces, and no business logic in components.",
    tags: ["React", "Next.js", "Node.js", "MongoDB", "Zod", "TanStack Query"],
  },
  {
    id: "review",
    index: "04",
    icon: "ClipboardCheck",
    title: "Review & optimisation",
    description:
      "Before shipping, I run a full performance audit, accessibility review, and code quality check. I treat Lighthouse scores as a hard constraint — not a nice-to-have — and address every regression.",
    tags: ["Lighthouse", "ESLint", "Accessibility", "Core Web Vitals", "Prettier"],
  },
  {
    id: "deployment",
    index: "05",
    icon: "Rocket",
    title: "Deployment & handoff",
    description:
      "The final phase covers CI/CD pipeline setup, environment configuration, documentation, and knowledge transfer. Code that can't be maintained by someone else isn't finished — it's just deferred technical debt.",
    tags: ["Vercel", "GitHub Actions", "Docker", "Documentation"],
  },
]

/* ------------------------------------------------------------------ */
/* /process page — hero copy and info row                              */
/* ------------------------------------------------------------------ */

export const PROCESS_EYEBROW = "My Process"

export const PROCESS_INTRO =
  "I follow a structured, proven process to turn complex problems into scalable, high-quality solutions. Here’s how I work."

export const PROCESS_PHASES = ["Plan", "Build", "Deliver", "Iterate"] as const

export const PROCESS_INFO_HEADING = "What you can expect"

export const PROCESS_INFO_POINTS: readonly ProcessInfoPoint[] = [
  {
    id: "updates",
    title: "Regular updates",
    description:
      "I work in iterative cycles and keep you updated along the way.",
    icon: "updates",
  },
  {
    id: "quality",
    title: "Clean, tested code",
    description:
      "Maintainable code built on best practices, tested before it ships.",
    icon: "quality",
  },
  {
    id: "docs",
    title: "Documentation included",
    description:
      "Every project is handed over with documentation your team can use.",
    icon: "docs",
  },
  {
    id: "support",
    title: "Ongoing support",
    description:
      "Help after launch for smooth operation and continuous improvement.",
    icon: "support",
  },
]