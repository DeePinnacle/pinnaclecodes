import { z } from "zod"

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name is too long"),
  email: z
    .email("Please enter a valid email address"),
  subject: z
    .string()
    .min(4, "Subject must be at least 4 characters")
    .max(120, "Subject is too long"),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters")
    .max(2000, "Message is too long"),
})

export type ContactFormValues = z.infer<typeof contactSchema>

export interface ContactApiResponse {
  success: boolean
  message: string
}

export interface ContactInfo {
  icon: string
  label: string
  value: string
  href?: string
}

export interface SocialLink {
  icon: string
  label: string
  href: string
}

export interface ContactData {
  heading: string
  subheading: string
  available: boolean
  availableText: string
  contacts: ContactInfo[]
  socials: SocialLink[]
  responseTime: string
  quoteText: string
}

/** A single quick-trust stat shown in the ContactStats bar. */
export interface StatItem {
  icon: string
  value: string
  label: string
}

/** A single step in the "what happens after you reach out" process. */
export interface ProcessStep {
  icon: string
  title: string
  description: string
}

/** A single question/answer pair shown in the ContactFAQ accordion. */
export interface FAQItem {
  question: string
  answer: string
}