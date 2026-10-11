export interface ServiceTag {
  label: string
  icon: string  // Lucide icon name string — resolved client-side
}

export interface ServiceItem {
  id: string
  index: string
  icon: string  // Lucide icon name string — resolved client-side
  title: string
  description: string
  tags: ServiceTag[]
  variant: "wide" | "default"
}

export interface ServicesData {
  eyebrow: string
  heading: string
  subheading: string
  services: ServiceItem[]
  cta: {
    availableText: string
    heading: string
    subheading: string
    primaryLabel: string
    primaryHref: string
    secondaryLabel: string
    secondaryHref: string
  }
}

export interface ServiceOffering {
  id: string
  title: string
  shortLabel: string            // Used in the interactive left-nav selector
  tagline: string
  description: string
  deliverables: string[]
  techHighlights: string[]
  idealFor: string
  notIdealFor: string           // Honest filter — sets expectations
  badge?: string
}

export interface ProcessStep {
  phase: string
  title: string
  description: string
}

export interface WorkingPrinciple {
  title: string
  description: string
}

export interface WontDo {
  label: string
  reason: string
}

export const servicesData: ServicesData = {
  eyebrow: "What I offer",
  heading: "Services built around your goals",
  subheading: "From idea to production — everything you need, nothing you don't.",

  services: [
    {
      id: "frontend",
      index: "01",
      icon: "LayoutTemplate",
      title: "Frontend development",
      description:
        "Pixel-perfect, responsive interfaces with smooth, purposeful interactions across every device and screen size.",
      tags: [
        { label: "React",         icon: "Atom" },
        { label: "Next.js",       icon: "Triangle" },
        { label: "Tailwind",      icon: "Wind" },
        { label: "Framer Motion", icon: "Play" },
      ],
      variant: "wide",
    },
    {
      id: "backend",
      index: "02",
      icon: "Server",
      title: "Backend development",
      description:
        "Scalable server systems, database architecture, and reliable business logic.",
      tags: [
        { label: "Node.js",  icon: "Server" },
        { label: "MongoDB",  icon: "Database" },
      ],
      variant: "default",
    },
    {
      id: "fullstack",
      index: "03",
      icon: "AppWindow",
      title: "Full stack applications",
      description:
        "End-to-end products from database schema to deployed, production-ready UI.",
      tags: [
        { label: "TypeScript", icon: "Code2" },
        { label: "Full stack", icon: "Layers" },
      ],
      variant: "default",
    },
    {
      id: "api",
      index: "04",
      icon: "Network",
      title: "API design & integration",
      description:
        "Well-documented REST APIs and clean third-party service integration.",
      tags: [
        { label: "REST", icon: "ArrowLeftRight" },
        { label: "Auth", icon: "Lock" },
      ],
      variant: "default",
    },
    {
      id: "performance",
      index: "05",
      icon: "Gauge",
      title: "Performance optimisation",
      description:
        "Faster load times, better Core Web Vitals, and leaner bundles.",
      tags: [
        { label: "Web Vitals", icon: "Activity" },
        { label: "Bundles",    icon: "Package" },
      ],
      variant: "default",
    },
    {
      id: "consulting",
      index: "06",
      icon: "Lightbulb",
      title: "Technical consulting",
      description:
        "Architecture reviews, stack decisions, and long-term technical strategy.",
      tags: [
        { label: "Architecture", icon: "GitBranch" },
        { label: "Strategy",     icon: "Map" },
      ],
      variant: "default",
    },
  ],

  cta: {
    availableText: "Available for new projects",
    heading: "Ready to build something great together?",
    subheading:
      "Let's turn your idea into a product that ships on time and performs in production.",
    primaryLabel: "Get in touch",
    primaryHref: "/contact",
    secondaryLabel: "View résumé",
    secondaryHref: "/resume.pdf",
  },
}

export const SERVICES: ServiceOffering[] = [
  {
    id: 'fullstack-web',
    shortLabel: 'Full-Stack Apps',
    title: 'Full-Stack Web Applications',
    tagline: 'End-to-end product engineering — from database schema to deployed UI.',
    description:
      'I architect and build production-ready web applications using Next.js, TypeScript, and Node.js. Every layer is designed for performance, maintainability, and real-world scale. This is not MVP-and-move-on work — it is a foundation you can build on for years.',
    deliverables: [
      'React / Next.js frontend with App Router and server components',
      'RESTful API layer with typed contracts and Zod validation',
      'MongoDB or PostgreSQL database with clean data models',
      'Authentication flows — session, JWT, OAuth',
      'CI/CD and deployment pipelines on Vercel or Railway',
      'Documented handoff with environment setup and architecture notes',
    ],
    techHighlights: ['Next.js 16', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS v4'],
    idealFor:
      'Startups and indie founders who need a single engineer to own the entire stack from zero to launch — and leave behind code a team can grow.',
    notIdealFor:
      'Projects where the stack has already been decided by committee and the brief is to just implement tickets.',
    badge: 'Core Service',
  },
  {
    id: 'frontend-engineering',
    shortLabel: 'Frontend Engineering',
    title: 'Frontend Engineering',
    tagline: 'Precision UI built for performance, accessibility, and longevity.',
    description:
      'I turn designs and product specs into pixel-precise, accessible interfaces. My frontend work is not just visual — every component is typed, tested across viewports, and built to live in a real codebase without accumulating debt. If your frontend is a mess of untyped props, rogue useEffects, and zero accessibility, I have fixed this exact problem before.',
    deliverables: [
      'Component system built with Shadcn UI and Tailwind CSS v4',
      'Framer Motion animation with prefers-reduced-motion support',
      'Responsive layouts tested at 375px, 768px, and 1440px',
      'Form systems built with React Hook Form and Zod validation',
      'Lighthouse ≥ 95 across all Core Web Vitals',
      'Full TypeScript — no any, no implicit types, no surprises',
    ],
    techHighlights: ['React', 'Tailwind CSS v4', 'Framer Motion', 'Shadcn UI', 'Zod'],
    idealFor:
      'Teams with a backend in place that need a senior frontend engineer to own the UI layer — someone who ships quality, not just velocity.',
    notIdealFor:
      'Teams that measure output in lines of code per day or want a developer who will build whatever is asked without pushing back on poor decisions.',
  },
  {
    id: 'api-backend',
    shortLabel: 'API & Backend',
    title: 'API & Backend Systems',
    tagline: 'Clean, documented, production-hardened APIs other engineers enjoy working with.',
    description:
      'I design and build backend systems that other developers can actually understand. Clear controller → service → repository layers, schema-first validation, comprehensive error handling. The kind of API you can hand off to a team without a six-hour onboarding call, because the intent is written into the structure.',
    deliverables: [
      'Express.js or Next.js Route Handler APIs',
      'Zod schema validation on every endpoint — no raw req.body',
      'MongoDB aggregation pipelines for analytics and reporting',
      'JWT authentication with role-based access control',
      'Postman collections and OpenAPI documentation',
      'Rate limiting, error logging, and structured responses',
    ],
    techHighlights: ['Node.js', 'Express.js', 'MongoDB', 'Zod', 'JWT'],
    idealFor:
      'Frontend teams that need a solid API layer, or products requiring a standalone backend service with real documentation.',
    notIdealFor:
      'Teams looking for the fastest possible API with no tests and no documentation, shipped in a weekend.',
  },
  {
    id: 'mobile-apps',
    shortLabel: 'Mobile Apps',
    title: 'Mobile App Development',
    tagline: 'Cross-platform iOS and Android apps — one codebase, native feel.',
    description:
      'I build mobile applications with React Native and Expo that feel native on both iOS and Android. Because I work across the full stack, the mobile app and the API it talks to are designed together — not bolted onto each other after the fact. Shared TypeScript types, consistent auth patterns, and a single engineer who owns both ends.',
    deliverables: [
      'React Native + Expo app targeting iOS and Android',
      'Shared TypeScript types between mobile client and API',
      'Navigation with Expo Router or React Navigation',
      'Offline support and optimistic UI with async storage',
      'Push notifications via Expo Notifications',
      'App Store and Google Play submission and release pipeline',
    ],
    techHighlights: ['React Native', 'Expo', 'TypeScript', 'Expo Router', 'EAS Build'],
    idealFor:
      'Founders and product teams who need a mobile app that shares logic and types with an existing web backend — without hiring a separate mobile team.',
    notIdealFor:
      'Projects that need deeply platform-specific native modules or complex hardware integrations that go beyond what Expo\'s ecosystem supports well.',
    badge: 'New',
  },
  {
    id: 'consulting',
    shortLabel: 'Technical Consulting',
    title: 'Technical Consulting & Code Review',
    tagline: 'An experienced eye on your architecture before problems compound.',
    description:
      'Sometimes you need a second opinion before you commit. On the data model. On the authentication approach. On whether to build or buy. I provide structured code reviews, architecture assessments, and clear written recommendations grounded in production experience — not opinions formed from a tutorial.',
    deliverables: [
      'Full codebase audit with written findings and priority ranking',
      'Architecture diagram and concrete improvement proposal',
      'TypeScript migration planning and phased execution plan',
      'Performance bottleneck identification with specific fixes',
      'Developer experience review — tooling, CI, folder structure',
      'One follow-up call to walk through findings and answer questions',
    ],
    techHighlights: ['TypeScript', 'Next.js', 'System Design', 'Performance', 'DX'],
    idealFor:
      'CTOs, tech leads, and engineering teams who want an outside perspective on a critical technical decision or a codebase that has grown beyond its original design.',
    notIdealFor:
      'Teams that want validation for a decision already made, not an honest evaluation of it.',
    badge: 'High Impact',
  },
]

export const PROCESS_STEPS: ProcessStep[] = [
  {
    phase: 'Discovery',
    title: 'Understand before building',
    description:
      'Before writing a line of code, I need to understand what you are actually building, who it is for, and what success looks like. A 30-minute call usually gets us there. If it takes longer, the problem is probably more complex than either of us realised — and that is good to know early.',
  },
  {
    phase: 'Proposal',
    title: 'Scope in writing',
    description:
      'You receive a written proposal: deliverables, timeline, tech approach, and cost. No ambiguity, no hidden work. If scope changes mid-project, we discuss it before I build it — not after.',
  },
  {
    phase: 'Build',
    title: 'Weekly delivery, not weekly updates',
    description:
      'Work happens in weekly sprints with async progress drops. You see real, working software — not status reports about software. Feedback is fast and specific.',
  },
  {
    phase: 'Handoff',
    title: 'Clean, documented, genuinely yours',
    description:
      'Every project ends with documented code, environment setup, and a walkthrough session. You own everything outright. No vendor lock-in, no black boxes, no "only I know how this works."',
  },
]

export const WORKING_PRINCIPLES: WorkingPrinciple[] = [
  {
    title: 'Production-quality or nothing',
    description:
      'I do not ship prototypes dressed as products. Every codebase I deliver is strictly typed, linted, tested across breakpoints, and structured so the next engineer does not curse my name.',
  },
  {
    title: 'I push back when I should',
    description:
      'If a technical decision will create problems in three months, I say so now — with a concrete alternative, not just a concern. You hired an engineer, not an order-taker.',
  },
  {
    title: 'Architecture before aesthetics',
    description:
      'A beautiful UI built on a fragile data model is technical debt in a trenchcoat. I design the data layer first, then build the experience on top of it.',
  },
  {
    title: 'Communication that respects your time',
    description:
      'You will not be chasing me for updates. I keep a consistent async cadence — clear, specific, always moving. If I am blocked, you know before the day is out.',
  },
]

export const WONT_DO_LIST: WontDo[] = [
  {
    label: 'Pre-decided tech, just implement',
    reason:
      'If the architecture is locked and the brief is "build what the spec says," you need a contractor. I do my best work when I can own the technical decisions.',
  },
  {
    label: 'No-documentation projects',
    reason:
      'Code without documentation is a liability. If the timeline does not allow for a documented handoff, it is not a timeline I will agree to.',
  },
  {
    label: "Well handle TypeScript later",
    reason:
      'There is no later. I work in strict TypeScript on everything. It is not a preference — it is how I ensure the code I deliver is maintainable.',
  },
  {
    label: 'Copy-paste from StackOverflow and ship',
    reason:
      'Every pattern I use, I understand. If I borrow an approach, I can explain it, modify it, and own it. No black-box code in production.',
  },
]
