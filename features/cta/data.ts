import type { CtaData } from "./types"

export const ctaData: CtaData = {
  eyebrow: "Let's work together",
  heading: "Let's build something great together.",
  subheading:
    "Open to freelance, remote, and contract opportunities. Drop a message — I respond fast.",
  primaryCta: {
    label: "Get in touch",
    href: "/contact",
    icon: "Mail",
  },
  secondaryCta: {
    label: "View résumé",
    href: "/resume.pdf",
    icon: "FileText",
  },
  available: true,
  availableText: "Available for new projects",
  infoCards: [
    {
      id: "location",
      icon: "MapPin",
      label: "Location",
      value: "Nigeria · Remote worldwide",
    },
    {
      id: "response",
      icon: "Clock",
      label: "Response time",
      value: "Within 24 hours",
    },
    {
      id: "open-to",
      icon: "Briefcase",
      label: "Open to",
      value: "Freelance · Remote · Contract",
    },
  ],
}