import type {
  PrivacyBadge,
  PrivacySection,
  PrivacyTrustContent,
} from "./types"

export const PRIVACY_EYEBROW = "Privacy Policy"

export const PRIVACY_INTRO =
  "At PinnacleCodes, we respect your privacy and are committed to protecting your personal data. This policy explains what information we collect, how we use it, and the steps we take to keep it safe."

// Section 7 promises an updated date on this page, so keep this current.
export const PRIVACY_LAST_UPDATED = {
  iso: "2026-10-04",
  label: "October 4, 2026",
} as const

export const PRIVACY_CONTACT_EMAIL = "officialdeepinnacle@gmail.com"

export const PRIVACY_BADGES: readonly PrivacyBadge[] = [
  { id: "safe", label: "Your Data Is Safe", icon: "user" },
  { id: "no-selling", label: "No Spam No Selling", icon: "shield" },
  { id: "control", label: "Full Control Always", icon: "lock" },
]

export const PRIVACY_SECTIONS: readonly PrivacySection[] = [
  {
    id: "information-we-collect",
    index: "01",
    title: "Information We Collect",
    body: "We collect basic information you provide (such as your name, email address, and message content) when you contact us or interact with this site.",
    icon: "user",
  },
  {
    id: "how-we-use-your-information",
    index: "02",
    title: "How We Use Your Information",
    body: "We use your information to respond to your inquiries, improve our services, and provide a better experience. We do not use your data for unrelated marketing purposes.",
    icon: "settings",
  },
  {
    id: "cookies-and-tracking",
    index: "03",
    title: "Cookies & Tracking",
    body: "We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and understand how our website is used.",
    icon: "cookie",
  },
  {
    id: "data-sharing",
    index: "04",
    title: "Data Sharing",
    body: "We do not sell, trade, or rent your personal information. We may share your data only with trusted service providers who help us operate the website.",
    icon: "share",
  },
  {
    id: "data-security",
    index: "05",
    title: "Data Security",
    body: "We implement industry-standard security measures to protect your information from unauthorized access, alteration, or disclosure.",
    icon: "shield",
  },
  {
    id: "your-rights",
    index: "06",
    title: "Your Rights",
    body: "You have the right to access, correct, or delete your personal information. You can also opt out of certain data collection practices at any time.",
    icon: "rights",
  },
  {
    id: "changes-to-this-policy",
    index: "07",
    title: "Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date.",
    icon: "refresh",
  },
  {
    id: "contact-us",
    index: "08",
    title: "Contact Us",
    body: "If you have any questions about this Privacy Policy or how we handle your data, feel free to reach out at:",
    icon: "mail",
    link: {
      label: PRIVACY_CONTACT_EMAIL,
      href: `mailto:${PRIVACY_CONTACT_EMAIL}`,
    },
  },
]

export const PRIVACY_TRUST: PrivacyTrustContent = {
  title: "Security. Respect. Your Trust.",
  description: "Your privacy isn’t just a policy — it’s a promise.",
  signature: "PinnacleCodes",
}