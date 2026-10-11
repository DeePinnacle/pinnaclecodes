# AGENT.md — PinnacleCodes Portfolio

> This document is the single source of truth for any AI coding agent, contributor, or automated system
> working on the PinnacleCodes project. Read it fully before writing a single line of code.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Why This Project, Why Now](#2-why-this-project-why-now)
3. [Success Criteria](#3-success-criteria)
4. [Tech Stack](#4-tech-stack)
5. [Architecture Overview](#5-architecture-overview)
6. [Folder Structure](#6-folder-structure)
7. [Coding Standards](#7-coding-standards)
8. [UI/UX Guidelines](#8-uiux-guidelines)
9. [Component Architecture](#9-component-architecture)
10. [Backend & API Layer](#10-backend--api-layer)
11. [State & Data Management](#11-state--data-management)
12. [Agent Behavior Rules](#12-agent-behavior-rules)
13. [Development Workflow](#13-development-workflow)
14. [Featured Projects Spec](#14-featured-projects-spec)
15. [Route Map](#15-route-map)
16. [Scaling & Maintenance](#16-scaling--maintenance)
17. [Out of Scope](#17-out-of-scope)

---

## 1. Project Overview

**Product name:** PinnacleCodes  
**Type:** Premium personal developer portfolio  
**Owner:** Senior full-stack developer  
**Status:** Active development

PinnacleCodes is a corporate-grade personal portfolio website built to present a senior full-stack developer's skills, projects, experience, and services to recruiters, potential clients, and collaborators. It is not a showcase of visual tricks — it is a demonstration of engineering craft, design precision, and professional identity.

The portfolio must communicate one thing above all else: *this developer builds production-quality software.*

**Brand identity:**

| Attribute   | Value                                  |
|-------------|----------------------------------------|
| Name        | PinnacleCodes                          |
| Style       | Professional corporate, minimal        |
| Primary     | Black `#0a0a0a`                        |
| Accent      | Electric Blue `#2563EB` / `#3B82F6`   |
| Tone        | Confident, technical, premium, precise |
| Typography  | Strong hierarchy, clean sans-serif     |

---

## 2. Why This Project, Why Now

The developer market is crowded. A GitHub profile and a LinkedIn page are table stakes — they do not differentiate. A recruiter or CTO spending 90 seconds reviewing a candidate needs to immediately understand:

- What this developer has built
- How they think about architecture
- Whether they can be trusted with a production codebase

A well-engineered portfolio *is* the proof of work. PinnacleCodes exists to make that case before a single interview question is asked. The timing is now because the developer is actively pursuing senior roles and client contracts — the cost of not having this is measured in missed opportunities every week.

---

## 3. Success Criteria

The portfolio is successful when:

- A recruiter or hiring manager can locate tech stack, projects, and contact information within 30 seconds
- The site achieves a Lighthouse score of ≥ 95 on Performance, Accessibility, and Best Practices
- The contact form successfully routes messages to the developer's inbox
- All featured projects are clearly explained with problem, solution, and tech stack
- The codebase is clean enough that a new contributor can understand it within 15 minutes
- Zero TypeScript errors, zero ESLint violations in production build
- Core Web Vitals pass on both mobile and desktop

---

## 4. Tech Stack

### Frontend

| Layer         | Technology                   | Rationale                                                          |
|---------------|------------------------------|--------------------------------------------------------------------|
| Framework     | Next.js 16 (App Router)      | RSC, streaming, file-based routing, built-in performance           |
| Language      | TypeScript (strict mode)     | Type safety, refactor confidence, self-documenting interfaces      |
| Styling       | Tailwind CSS v4              | Utility-first, no CSS drift, design system enforcement             |
| Animation     | Framer Motion                | Production-grade animation, gesture support, layout animations     |
| UI Primitives | Shadcn UI                    | Accessible, unstyled base components — owned, not imported         |
| Icons         | Lucide React                 | Consistent icon language, tree-shakeable                           |
| Forms         | React Hook Form + Zod        | Performant forms, schema-first validation, shared types            |
| Server State  | TanStack Query               | Caching, background refetch, loading/error state management        |

### Backend

| Layer        | Technology          | Rationale                                              |
|--------------|---------------------|--------------------------------------------------------|
| Runtime      | Node.js             | Unified JS ecosystem, fast API layer                   |
| API Routes   | Next.js Route Handlers | Co-located API, no separate server for light use cases |
| Database     | MongoDB + Mongoose  | Flexible schema for portfolio content, easy iteration  |
| Validation   | Zod                 | Shared schema between client and server                |

### Tooling

| Tool         | Purpose                              |
|--------------|--------------------------------------|
| ESLint       | Code quality enforcement             |
| Prettier     | Consistent formatting                |
| Husky        | Pre-commit hooks                     |
| lint-staged  | Lint only changed files              |

---

## 5. Architecture Overview

```
Browser
  └── Next.js App Router
        ├── Server Components (RSC)   ← Data fetching, layout, static content
        ├── Client Components         ← Interactivity, animation, form state
        └── Route Handlers (/api)     ← Backend logic (contact form, blog, etc.)
              └── Services Layer
                    └── MongoDB via Mongoose
```

**Core architecture principles:**

- **Server Components by default.** Only move to `"use client"` when the component requires browser APIs, user interaction, or animation.
- **Data flows down, events flow up.** No prop drilling beyond two levels — use context or TanStack Query.
- **Feature modules are self-contained.** A feature (e.g. `/features/projects`) owns its components, hooks, types, and API calls. It does not bleed into other features.
- **No fat components.** Logic belongs in hooks or services. Components render; they do not compute.
- **API routes are thin controllers.** Validation in Zod. Business logic in `/server/services`. Route handlers orchestrate, they do not implement.

---

## 6. Folder Structure

```
pinnacle-codes/
├── app/                          # Next.js App Router
│   ├── (site)/                   # Route group — public site
│   │   ├── page.tsx              # Home (/)
│   │   ├── about/page.tsx
│   │   ├── projects/
│   │   │   ├── page.tsx          # Projects index
│   │   │   └── [slug]/page.tsx   # Individual project
│   │   ├── skills/page.tsx
│   │   ├── experience/page.tsx
│   │   ├── services/page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   └── contact/page.tsx
│   ├── api/                      # Route Handlers
│   │   ├── contact/route.ts
│   │   └── blog/route.ts
│   ├── layout.tsx                # Root layout
│   ├── globals.css
│   └── not-found.tsx
│
├── components/                   # Shared, reusable UI components
│   ├── ui/                       # Shadcn primitives (Button, Input, Card…)
│   ├── layout/                   # Navbar, Footer, PageWrapper, Section
│   └── common/                   # AnimatedText, SectionHeading, Badge, Tag
│
├── features/                     # Domain-based feature modules
│   ├── projects/
│   │   ├── components/           # ProjectCard, ProjectGrid, ProjectDetail
│   │   ├── hooks/                # useProjects, useProjectBySlug
│   │   ├── types.ts
│   │   └── data.ts               # Static project data (until CMS)
│   ├── blog/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── types.ts
│   ├── experience/
│   │   ├── components/           # TimelineItem, TimelineList
│   │   └── data.ts
│   ├── skills/
│   │   ├── components/           # SkillBar, SkillCategory, SkillGrid
│   │   └── data.ts
│   └── contact/
│       ├── components/           # ContactForm, ContactInfo
│       └── schema.ts             # Zod schema shared with API
│
├── hooks/                        # Global custom hooks
│   ├── useScrollProgress.ts
│   ├── useMediaQuery.ts
│   └── useInView.ts
│
├── lib/                          # Utilities, config, helpers
│   ├── db.ts                     # MongoDB connection singleton
│   ├── utils.ts                  # cn(), formatDate(), etc.
│   ├── constants.ts              # Site-wide constants
│   └── metadata.ts               # SEO metadata helpers
│
├── server/                       # Backend-only logic
│   ├── models/                   # Mongoose models
│   │   ├── Contact.ts
│   │   └── BlogPost.ts
│   ├── services/                 # Business logic
│   │   ├── contact.service.ts
│   │   └── blog.service.ts
│   └── validators/               # Zod schemas for API input
│
├── types/                        # Global TypeScript types
│   ├── index.ts
│   ├── project.ts
│   └── api.ts
│
├── public/                       # Static assets
│   ├── images/
│   └── icons/
│
├── .env.local                    # Local environment variables (never committed)
├── .env.example                  # Template for required env vars
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── AGENT.md                      # This file
└── README.md
```

**Rules:**
- Never place feature-specific code inside `/components`. Components in that folder must be reusable across at least two features.
- Never import from `/server` in client components. Backend code does not touch the browser bundle.
- `/lib/db.ts` is the only file that initializes MongoDB. Never open a second connection anywhere.

---

## 7. Coding Standards

### TypeScript

```ts
// Always define explicit return types on functions
export async function getProjects(): Promise<Project[]> { ... }

// Always type component props with an interface, not inline
interface ProjectCardProps {
  project: Project
  variant?: 'featured' | 'grid'
}

// Never use `any`. Use `unknown` and narrow it.
// Never use non-null assertion (!) unless you have verified it is safe and left a comment.
```

- `strict: true` is non-negotiable in `tsconfig.json`
- Prefer `interface` over `type` for object shapes; `type` for unions and primitives
- All API responses must be typed — define response types in `/types/api.ts`
- Use `satisfies` operator for config objects to retain literal types

### Naming conventions

| Element              | Convention          | Example                    |
|----------------------|---------------------|----------------------------|
| Components           | PascalCase          | `ProjectCard.tsx`          |
| Hooks                | camelCase, `use` prefix | `useProjects.ts`       |
| Utilities            | camelCase           | `formatDate.ts`            |
| Constants            | SCREAMING_SNAKE     | `MAX_BLOG_PREVIEW_LENGTH`  |
| Types / Interfaces   | PascalCase          | `Project`, `ApiResponse`   |
| CSS classes          | kebab-case (Tailwind utilities only) |               |
| Route handlers       | `route.ts`          | `app/api/contact/route.ts` |
| Server services      | `*.service.ts`      | `contact.service.ts`       |

### Comments

- Write comments to explain *why*, not *what*
- Never comment out code and commit it — delete it; git has history
- Use JSDoc for exported utilities and hooks

```ts
/**
 * Sends contact form data to MongoDB and triggers an email notification.
 * Rate-limited to 3 submissions per IP per hour via middleware.
 */
export async function submitContact(data: ContactFormData): Promise<void>
```

### File length

- Components: aim for under 150 lines. If longer, extract sub-components.
- Services: aim for under 100 lines per function group. Split if needed.
- No file should exceed 300 lines without a strong reason.

---

## 8. UI/UX Guidelines

### Design system

| Token               | Value                                    |
|---------------------|------------------------------------------|
| Background          | `#0a0a0a` (near-black)                   |
| Surface             | `#111111` / `#1a1a1a`                    |
| Accent              | `#2563EB` (Electric Blue)                |
| Accent hover        | `#3B82F6`                                |
| Text primary        | `#F9FAFB`                                |
| Text muted          | `#6B7280`                                |
| Border              | `#1F2937`                                |
| Destructive         | `#EF4444`                                |
| Success             | `#10B981`                                |

### Typography

- Heading scale: `text-5xl` → `text-4xl` → `text-3xl` → `text-2xl` → `text-xl`
- Body: `text-base` (16px), line-height `1.7`
- Code: `font-mono`, `text-sm`
- Never more than three font weights in a single view: 400, 500, 700
- Letter spacing on display headings: `tracking-tight`

### Spacing system

All spacing follows Tailwind's 4px base grid. No arbitrary values unless absolutely necessary. If you need `px-[18px]`, question the design decision first.

### Animation rules

```ts
// All Framer Motion variants follow this signature
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
}
```

- Duration: `0.3s – 0.5s` for UI transitions. Never exceed `0.8s` for entrance animations.
- Easing: `easeOut` for entrances, `easeIn` for exits
- Stagger children with `staggerChildren: 0.08` — not more
- **No looping animations on the main thread.** No spinning decorations, pulsing blobs, or parallax abuse.
- Animate on scroll using `useInView` — elements outside the viewport are invisible and should not animate until they enter
- `prefers-reduced-motion` must be respected. Wrap all motion variants with the `useReducedMotion` hook from Framer Motion.

### Responsive design

- **Mobile-first.** Base styles are for mobile. Larger breakpoints use `md:`, `lg:`, `xl:` modifiers.
- Minimum tested viewport: 375px (iPhone SE)
- No horizontal scroll at any breakpoint
- Touch targets minimum 44×44px

### Accessibility

- All interactive elements must have `aria-label` if icon-only
- Color contrast ratio minimum 4.5:1 for body text, 3:1 for large text
- Focus styles must be visible and styled (not `outline: none` without replacement)
- All images must have descriptive `alt` text
- Keyboard navigation must work across all interactive elements
- Use semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`

---

## 9. Component Architecture

### Server vs. Client components

```
Default: Server Component
  ↓
Does it need: useState, useEffect, browser APIs, event listeners, animations?
  ↓ Yes
Make it a Client Component ("use client" at the top)
```

**Never make a parent Server Component a Client Component just because one child needs interactivity.** Extract the interactive part into its own client component and import it.

### Component structure template

```tsx
// components/common/SectionHeading.tsx

interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ title, subtitle, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      <h2 className="text-3xl font-bold tracking-tight text-white">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-base text-gray-400">{subtitle}</p>
      )}
    </div>
  )
}
```

- One component per file
- Named exports only (no default exports for components — improves refactor traceability)
- Props interface defined above the component, not inline
- No business logic inside JSX — compute first, render second

---

## 10. Backend & API Layer

### Route handler pattern

```ts
// app/api/contact/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { contactSchema } from '@/features/contact/schema'
import { submitContact } from '@/server/services/contact.service'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const parsed = contactSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 })
    }

    await submitContact(parsed.data)
    return NextResponse.json({ success: true }, { status: 201 })
  } catch (error) {
    console.error('[contact/route]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
```

**Rules:**
- Route handlers validate with Zod, delegate to services, return typed JSON
- All errors are caught and returned with appropriate HTTP status codes
- Never expose raw database errors to the client
- Log errors with `[module/route]` prefix for easy debugging

### Service pattern

```ts
// server/services/contact.service.ts

import { connectDB } from '@/lib/db'
import { ContactModel } from '@/server/models/Contact'
import type { ContactFormData } from '@/features/contact/schema'

export async function submitContact(data: ContactFormData): Promise<void> {
  await connectDB()
  await ContactModel.create(data)
  // Future: trigger email notification here
}
```

### MongoDB connection

```ts
// lib/db.ts — singleton pattern to prevent connection exhaustion in serverless

let cached = global.mongoose

export async function connectDB() {
  if (cached?.conn) return cached.conn
  // ... connect and cache
}
```

---

## 11. State & Data Management

### When to use what

| Scenario                            | Solution                             |
|-------------------------------------|--------------------------------------|
| Static content (projects, skills)   | Hard-coded in `/features/*/data.ts`  |
| Server data with caching needs      | TanStack Query (`useQuery`)          |
| Form state                          | React Hook Form                      |
| Global UI state (theme, modal open) | React Context or Zustand (if grows)  |
| URL state (filters, search params)  | `useSearchParams` (Next.js)          |

### TanStack Query conventions

```ts
// features/projects/hooks/useProjects.ts

export function useProjects() {
  return useQuery({
    queryKey: ['projects'],
    queryFn: () => fetch('/api/projects').then(r => r.json()),
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}
```

- Always define `staleTime` — no blind refetching
- Use `queryKey` arrays with enough specificity to avoid collisions
- Loading and error states must always be handled in UI — no silent failures

---

## 12. Agent Behavior Rules

These rules govern how the AI coding agent should behave when assisting with this project. They are non-negotiable.

### Decision-making hierarchy

```
1. Does existing code already solve this? → Reuse it.
2. Can a new shared component solve it? → Build that.
3. Is this feature-specific? → Build inside the feature module.
4. Is this a new library? → Ask before introducing it.
```

### What the agent must always do

- **Read existing code before writing new code.** Never assume file structure — verify it.
- **Follow the folder structure exactly.** No improvised locations for new files.
- **Use strict TypeScript.** No `any`, no implicit `any`, no casting without comment.
- **Keep components focused.** A component that renders UI does not also fetch data.
- **Respect the animation rules.** Never add a loop, a bounce, or a parallax without explicit instruction.
- **Write accessible HTML.** Every form input has a label. Every icon-only button has `aria-label`.
- **Validate API inputs.** Never trust raw `req.body` — always parse through Zod.
- **Never install a new dependency** without explaining: what it does, why existing tools can't do it, and its bundle size impact.

### What the agent must never do

- Never use `!important` in CSS
- Never use `any` in TypeScript
- Never put business logic in a component file
- Never mix server and client code in the same file
- Never use `useEffect` to fetch data — use TanStack Query
- Never hardcode colors outside the design token system
- Never introduce a state management library without discussion
- Never create duplicate components — search first
- Never commit `.env.local` or any secrets

### When the agent is unsure

State the ambiguity clearly. Propose two options with tradeoffs. Ask which direction to proceed. Do not guess silently and build the wrong thing.

---

## 13. Development Workflow

### Branch strategy

```
main              ← production-ready, protected
  └── dev         ← integration branch
        └── feat/section-name    ← feature branches
        └── fix/bug-description  ← bug fixes
        └── refactor/area        ← refactors
```

### Commit conventions (Conventional Commits)

```
feat(projects): add ProjectCard hover animation
fix(contact): resolve form submission error state
refactor(layout): extract PageWrapper from root layout
chore(deps): upgrade framer-motion to 11.x
docs(agent): update folder structure section
```

### Pre-commit checklist (enforced by Husky)

- [ ] TypeScript compiles with zero errors (`tsc --noEmit`)
- [ ] ESLint passes with zero warnings
- [ ] Prettier formatting applied
- [ ] No `console.log` left in production code (use a logger utility)

### Building a new feature — step-by-step

1. Define the data type in `/types` or the feature's `types.ts`
2. Build static data or API service first
3. Build the smallest unit component (e.g. `ProjectCard`)
4. Build the container/list component (e.g. `ProjectGrid`)
5. Build the page component and connect data
6. Add animation last, after logic is verified
7. Test at 375px, 768px, and 1440px viewports
8. Run Lighthouse and fix any regressions

---

## 14. Featured Projects Spec

Each project entry must conform to this data shape:

```ts
interface Project {
  slug: string
  title: string
  tagline: string              // One sentence, recruiter-readable
  problem: string              // What problem did this solve?
  solution: string             // How was it solved?
  stack: string[]              // Tech used
  features: string[]           // Key features, bullet-style
  architectureNote?: string    // For backend-heavy projects
  liveUrl?: string
  githubUrl?: string
  coverImage: string           // Path in /public/images/projects/
  featured: boolean
  year: number
}
```

### FinMate — Personal Finance Tracker

- **Problem:** Users lack a clear view of their spending patterns across categories and time
- **Stack:** Next.js, TypeScript, Tailwind, MongoDB, Mongoose, TanStack Query, Recharts
- **Key features:** Transaction categorization, monthly budget targets, spending analytics dashboard, CSV export
- **Architecture note:** Aggregation pipeline in MongoDB for analytics queries

### BookaDoc — Appointment Booking System

- **Problem:** Manual appointment booking creates scheduling conflicts and poor patient experience
- **Stack:** Next.js, TypeScript, Tailwind, Node.js, MongoDB, React Hook Form, Zod
- **Key features:** Doctor search by specialty, real-time slot availability, booking confirmation, cancellation flow
- **Architecture note:** Slot locking mechanism to prevent double-booking race conditions

### Expense Tracker API — Backend System

- **Problem:** Frontend teams need a clean, documented API to track and categorize expenses
- **Stack:** Node.js, Express, MongoDB, Mongoose, Zod, JWT authentication
- **Key features:** RESTful CRUD for expenses, category management, monthly summaries, token-based auth
- **Architecture note:** Controllers → Services → Repository pattern; full Postman collection provided

### PinnacleCodes — This Portfolio

- **Problem:** Generic developer profiles fail to demonstrate engineering craft or professional identity
- **Stack:** Next.js 16, TypeScript, Tailwind CSS v4, Framer Motion, Shadcn UI, MongoDB
- **Key features:** Animated project showcase, experience timeline, contact form with validation, blog

---

## 15. Route Map

| Route                  | Type          | Data Source         | Notes                              |
|------------------------|---------------|---------------------|------------------------------------|
| `/`                    | Static (RSC)  | `features/*/data`   | Hero, featured projects, skills CTA |
| `/about`               | Static (RSC)  | Hard-coded          | Bio, values, photo                  |
| `/projects`            | Static (RSC)  | `features/projects/data` | Grid of all projects           |
| `/projects/[slug]`     | Static (RSC)  | `features/projects/data` | Individual project detail      |
| `/skills`              | Static (RSC)  | `features/skills/data` | Categorized skills with levels  |
| `/experience`          | Static (RSC)  | `features/experience/data` | Timeline of roles            |
| `/services`            | Static (RSC)  | Hard-coded          | Service offerings + CTA             |
| `/blog`                | Dynamic (RSC) | MongoDB / API       | List of posts                       |
| `/blog/[slug]`         | Dynamic (RSC) | MongoDB / API       | Individual post                     |
| `/contact`             | Client + API  | POST `/api/contact` | Form → MongoDB + email notification |

---

## 16. Scaling & Maintenance

### When the project grows

- **CMS integration:** When blog content exceeds 10 posts or needs non-developer editing, migrate to Sanity or Contentlayer. Data shape in `/features/blog/types.ts` is already CMS-ready.
- **Authentication:** If a dashboard or admin panel is added, use NextAuth.js with MongoDB adapter.
- **Email notifications:** Abstract the email layer behind `server/services/email.service.ts` from day one. Start with Resend or Nodemailer, swap without touching route handlers.
- **Analytics:** Add Vercel Analytics or Plausible via a single `<Analytics />` component in `app/layout.tsx` — no instrumentation spread across pages.

### Performance budget

| Metric              | Target     |
|---------------------|------------|
| LCP                 | < 2.5s     |
| FID / INP           | < 100ms    |
| CLS                 | < 0.1      |
| Bundle (JS)         | < 200kb gzipped (initial load) |
| Lighthouse score    | ≥ 95 all categories |

### Regular maintenance

- Audit `npm outdated` monthly
- Review Lighthouse scores after each major section ships
- Keep `/types` and `/features/*/data.ts` in sync with the live site
- Archive project data rather than deleting — use `archived: true` flag

---

## 17. Out of Scope

The following are explicitly **not** being built in v1 to prevent scope creep:

- User accounts or authentication (no login wall)
- E-commerce or payment processing
- Real-time features (WebSockets, live chat)
- Multi-language / i18n support
- A full CMS admin UI
- PWA / offline support
- Dark/light mode toggle (dark is the permanent brand)
- External commenting system on blog

These may be revisited in future iterations. Decisions to add them require updating this document first.

---

*Last updated: June 2026*  
*Owner: PinnacleCodes — Senior Full-Stack Developer*  
*Version: 1.0.0*
