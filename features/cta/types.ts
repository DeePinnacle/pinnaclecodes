export interface CtaInfoCard {
  id: string
  icon: string       // Lucide icon name — resolved client-side
  label: string
  value: string
}

export interface CtaData {
  eyebrow: string
  heading: string
  subheading: string
  primaryCta: {
    label: string
    href: string
    icon: string
  }
  secondaryCta: {
    label: string
    href: string
    icon: string
  }
  infoCards: CtaInfoCard[]
  available: boolean
  availableText: string
}