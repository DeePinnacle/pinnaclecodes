import type { Project, ProjectCategory } from "./types"

// Ordered newest → oldest (by year, then by month within the same year)
export const projects: Project[] = [
  {
    slug: "siyas-accessories",
    title: "Siya's Accessories",
    category: "frontend",
    tagline:
      "A catalogue-style landing page for a Lokoja-based fashion jewellery and accessories brand — elegant, trendy, and built to turn browsing into WhatsApp orders.",
    problem:
      "A growing fashion accessories brand had no online storefront, so customers couldn't browse products or order easily outside of social media.",
    solution:
      "Built a fashion-first landing page with a browsable product catalogue and category tabs. Every product card opens WhatsApp with a prefilled message, so ordering takes one tap — no checkout required in V1.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Motion"],
    features: [
      "Catalogue-style product showcase",
      "Category tabs (earrings, necklaces, bracelets, rings and more)",
      "Product cards with prefilled WhatsApp order messages",
      "Floating WhatsApp, tap-to-call and tap-to-email buttons",
      "Brand-matched blue and navy colour system",
      "Smooth motion animations",
    ],
    architectureNote:
      "Built from a written AGENT.md spec; orders route through WhatsApp deep links instead of an online payment flow.",
    coverImage: "/siyasaccessories.png",
    icon: "ShoppingCart",
    featured: true,
    year: 2026,
    role: "Developer",
    clientType: "Client",
    liveUrl: "https://siyasaccessories.vercel.app/",
    githubUrl: "https://github.com/DeePinnacle/siyasaccessories.vercel.app/", 
  },
  {
    slug: "educore-saas-erp",
    title: "EduCore SaaS ERP",
    category: "full-stack",
    tagline:
      "A school management ERP for Nigerian primary and secondary schools — students, fees, grading, timetables and communication in one platform, designed to grow into multi-school SaaS.",
    problem:
      "Many schools in Nigeria still manage admissions, attendance, results and fees with paper records and disconnected spreadsheets.",
    solution:
      "Designed a modular ERP covering the full school workflow, with a Next.js dashboard, a typed Express API, and a PostgreSQL database. The MVP serves a single school, but the architecture supports multi-school SaaS later.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Motion",
      "TanStack Query",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Recharts",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
    ],
    features: [
      "Student, teacher and parent management",
      "Admissions and attendance tracking",
      "Academic records, grading and reports",
      "Classes, subjects and timetables",
      "Fees, invoices, payments and receipts",
      "Announcements and notifications",
    ],
    architectureNote:
      "Multi-school-ready architecture with custom JWT auth in HttpOnly cookies and an abstracted payment layer (Paystack, Flutterwave, Monnify). Frontend on Vercel, backend on Render.",
    coverImage: "/educore.png",
    icon: "Server",
    featured: true,
    year: 2026,
    role: "Developer",
    clientType: "Personal",
    liveUrl: "https://educore-erp-saas.vercel.app/",
    githubUrl: "https://github.com/DeePinnacle/educore",
  },
  {
    slug: "synchub-creative-center",
    title: "The Synchub Creative Center",
    category: "full-stack",
    tagline:
      "The official website for Synchub Creative Center, an Abuja creative hub — a dark, high-energy platform for events, galleries, testimonials and sponsorship.",
    problem:
      "A growing creative hub needed one polished online home to showcase its space, promote its events and attract sponsors and community members.",
    solution:
      "Built a full-stack Next.js site with a dark-first design system, an animated navigation experience, an image gallery with lightbox, testimonials and a sponsorship section.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Motion",
      "TanStack Query",
      "Prisma",
      "PostgreSQL",
    ],
    features: [
      "Dark-first design with a green and blue gradient accent",
      "Navbar with dropdown menus and an animated mobile sheet",
      "Gallery with lightbox modal",
      "Testimonials section",
      "Animated sponsorship section",
      "Event promotion pages",
    ],
    architectureNote:
      "Built from a comprehensive AGENT.md spec that governs architecture and design decisions across the codebase.",
    coverImage: "/synchub.png",
    icon: "CalendarCheck",
    featured: true,
    year: 2026,
    role: "Developer",
    clientType: "Client",
    liveUrl: "https://thesynchubcreativecenter.com/",
    githubUrl: "https://github.com/DeePinnacle/synchubcreativespace",
  },
  {
    slug: "finmate",
    title: "FinMate",
    category: "frontend",
    tagline:
      "A clean, modern landing page for FinMate, a personal finance web app — built to explain the product and move visitors toward signing up.",
    problem:
      "A personal finance product needs a clear, trustworthy first impression to explain what it does and convince visitors to try it.",
    solution:
      "Designed and built a responsive marketing page with a clear product story, strong calls to action and smooth motion.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Motion"],
    features: [
      "Responsive, mobile-first layout",
      "Clear product story and calls to action",
      "Smooth motion animations",
      "Fast, optimised Next.js build deployed on Vercel",
    ],
    coverImage: "/finmate.png",
    icon: "BarChart3",
    featured: true,
    year: 2025,
    role: "Designer",
    clientType: "Personal",
    liveUrl: "https://finmate-webapp.vercel.app/",
    githubUrl: "https://github.com/DeePinnacle/finmate",
  },
  {
    slug: "agob-synergy",
    title: "Agob Synergy",
    category: "frontend",
    tagline:
      "A professional, responsive landing page for Agob Synergy — a polished online presence that presents the business with clarity and credibility.",
    problem:
      "The business needed a professional web presence to introduce itself and make it easy for prospects to get in touch.",
    solution:
      "Designed and built a modern landing page with a clear structure, strong visual hierarchy and subtle animation.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Motion"],
    features: [
      "Responsive, mobile-first layout",
      "Clear sections and calls to action",
      "Smooth motion animations",
      "Fast, optimised Next.js build deployed on Vercel",
    ],
    coverImage: "/agob.png",
    icon: "Code2",
    featured: true,
    year: 2025,
    role: "Designer",
    clientType: "Client",
    liveUrl: "https://agob-synergy.vercel.app/",
    githubUrl: "https://github.com/DeePinnacle/agob-synergy",
  },
  {
    slug: "acelux",
    title: "Acelux",
    category: "frontend",
    tagline:
      "A sleek, modern landing page for Acelux — designed to make a strong first impression and guide visitors to take action.",
    problem:
      "The brand needed a distinctive web presence that looks premium and communicates what it offers quickly.",
    solution:
      "Designed and built a refined landing page with a strong visual identity, clear sections and smooth animation.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Motion"],
    features: [
      "Responsive, mobile-first layout",
      "Clear sections and calls to action",
      "Smooth motion animations",
      "Fast, optimised Next.js build deployed on Vercel",
    ],
    coverImage: "/acelux.png",
    icon: "Code2",
    featured: true,
    year: 2025,
    role: "Designer",
    clientType: "Client",
    liveUrl: "https://acelux.vercel.app/",
    githubUrl: "https://github.com/DeePinnacle/acelux",
  },
  {
    slug: "usraya-printing-press",
    title: "Usraya Printing Press",
    category: "frontend",
    tagline:
      "A bold, professional landing page for Usraya Printing Press — presenting the business's printing services and making it easy for customers to reach out.",
    problem:
      "A printing business needed an online presence that showcases its services and builds trust with new customers.",
    solution:
      "Designed and built a responsive landing page that presents the services clearly and keeps contact one click away.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Motion"],
    features: [
      "Responsive, mobile-first layout",
      "Clear services presentation",
      "Smooth motion animations",
      "Fast, optimised Next.js build deployed on Vercel",
    ],
    coverImage: "/usraya.png",
    icon: "Code2",
    featured: false,
    year: 2024,
    role: "Designer",
    clientType: "Client",
    liveUrl: "https://usrayaprintingpress.vercel.app/",
    githubUrl: "https://github.com/DeePinnacle/Usrayaprintingpress",
  },
  {
    slug: "wavebudget-landing-page",
    title: "Wavebudget Landing Page",
    category: "frontend",
    tagline:
      "The marketing landing page for Wavebudget, a fintech budgeting product — a clear, conversion-focused first impression for the app.",
    problem:
      "A fintech product needs a landing page that explains the value of the app quickly and builds trust with new visitors.",
    solution:
      "Designed and built a clean, responsive landing page with a clear product story and strong calls to action.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    features: [
      "Responsive, mobile-first layout",
      "Clear product story and calls to action",
      "Accessible shadcn/ui component foundation",
      "Fast, optimised Next.js build deployed on Vercel",
    ],
    coverImage: "/wavebudget.png",
    icon: "BarChart3",
    featured: false,
    year: 2024,
    role: "Designer",
    clientType: "Client",
    liveUrl: "https://wavebudget-demo.vercel.app/",
    githubUrl: "https://github.com/DeePinnacle/wavebudget-landingpage",
  },
  {
    slug: "odinaka-innovation",
    title: "Odinaka Innovation",
    category: "frontend",
    tagline:
      "A modern, animated landing page for Odinaka Innovation — a confident online presence that presents the brand with clarity.",
    problem:
      "The business needed a professional web presence to introduce itself and give visitors an easy way to engage.",
    solution:
      "Designed and built a modern landing page with a clear structure, strong visual hierarchy and smooth animation.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Motion"],
    features: [
      "Responsive, mobile-first layout",
      "Clear sections and calls to action",
      "Smooth motion animations",
      "Fast, optimised Next.js build deployed on Vercel",
    ],
    coverImage: "/odinaka.png",
    icon: "Code2",
    featured: false,
    year: 2024,
    role: "Designer",
    clientType: "Client",
    liveUrl: "https://odinaka-innovation.vercel.app/",
    githubUrl: "https://github.com/DeePinnacle/odinaka-innovation",
  },
  {
    slug: "deeja-collections",
    title: "Deeja Collections",
    category: "experiment",
    tagline:
      "A stylish landing page for Deeja Collections — a simple, elegant first step into the brand's online presence.",
    problem:
      "The brand needed a clean, attractive landing page to introduce itself online.",
    solution:
      "Designed and built a lightweight, responsive landing page with a clear layout and a focus on presentation.",
    stack: ["Next.js"],
    features: [
      "Responsive, mobile-first layout",
      "Clean, presentation-focused design",
      "Fast Next.js build deployed on Vercel",
    ],
    coverImage: "/deejacollections.png",
    icon: "ShoppingCart",
    featured: false,
    year: 2023,
    role: "Designer",
    clientType: "Client",
    liveUrl: "https://deeja-collections.vercel.app/",
    githubUrl: "https://github.com/DeePinnacle/DeejaCollections",
  },
]

export const featuredProjects = projects.filter((p) => p.featured)

export const projectCategories = [
  "all",
  "full-stack",
  "backend",
  "frontend",
  "open-source",
  "experiment",
] as const

export const projectCategoryLabels = {
  "full-stack": "Full Stack",
  backend: "Backend",
  frontend: "Frontend",
  "open-source": "Open Source",
  experiment: "Experiment",
} satisfies Record<ProjectCategory, string>

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

/** Wraps around, so the first project has a previous and the last has a next. */
export function getAdjacentProjects(slug: string): { previous: Project; next: Project } | undefined {
  const index = projects.findIndex((project) => project.slug === slug)
  const previous = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]

  if (index === -1 || !previous || !next) return undefined

  return { previous, next }
}