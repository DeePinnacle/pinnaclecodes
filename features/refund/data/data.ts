import type {
  RefundBannerContent,
  RefundExampleContent,
  RefundKeyTerm,
  RefundSection,
} from "../types"

export const REFUND_EYEBROW = "Refund Policy"

export const REFUND_INTRO =
  "At PinnacleCodes, we want every client to know exactly where they stand. This policy explains how payments and refunds work for the projects you submit to us, and how to request a refund if you need one."

// Section 07 promises an updated date on this page, so keep this current.
export const REFUND_LAST_UPDATED = {
  iso: "2026-10-08",
  label: "October 8, 2026",
} as const

export const REFUND_CONTACT_EMAIL = "officialdeepinnacle@gmail.com"

export const REFUND_KEY_TERMS: readonly RefundKeyTerm[] = [
  {
    id: "payment",
    title: "Deposit + balance",
    caption: "Deposit upfront, balance on delivery",
    icon: "wallet",
  },
  {
    id: "pro-rated",
    title: "Pro-rated refunds",
    caption: "Refunded for work not yet done",
    icon: "scale",
  },
  {
    id: "window",
    title: "7-day window",
    caption: "To request a refund after delivery",
    icon: "calendar",
  },
]

export const REFUND_SECTIONS: readonly RefundSection[] = [
  {
    id: "payment-structure",
    index: "01",
    title: "Payment Structure",
    body: "Every project is paid in two parts: a deposit upfront to begin work, and the remaining balance on delivery.",
    icon: "wallet",
  },
  {
    id: "refund-eligibility",
    index: "02",
    title: "When You Can Get a Refund",
    body: "If you cancel or end a project before it is finished, you are entitled to a refund for the work that has not yet been done. Work already completed is not refundable.",
    icon: "undo",
  },
  {
    id: "how-refunds-are-calculated",
    index: "03",
    title: "How Refunds Are Calculated",
    body: "Refunds are pro-rated against the agreed project scope. We take the payments you have made, subtract the value of the work completed up to the date of cancellation, and refund the difference. See the worked example below.",
    icon: "calculator",
  },
  {
    id: "refund-window",
    index: "04",
    title: "Refund Window After Delivery",
    body: "Once a project is delivered, you have 7 days to request a refund. A request must be made within 7 days of the delivery date, and covers only the parts of the agreed scope that were not delivered as agreed.",
    icon: "calendar",
  },
  {
    id: "how-to-request",
    index: "05",
    title: "How to Request a Refund",
    body: "Email us with your project name, the date of delivery or cancellation, and the reason for your request:",
    icon: "send",
    link: {
      label: REFUND_CONTACT_EMAIL,
      href: `mailto:${REFUND_CONTACT_EMAIL}?subject=Refund%20request`,
    },
  },
  {
    id: "what-happens-next",
    index: "06",
    title: "What Happens Next",
    body: "We review every request, confirm the amount using the calculation above, and let you know the outcome. Approved refunds are paid back to you using the method you originally paid with.",
    icon: "check",
  },
  {
    id: "changes-to-this-policy",
    index: "07",
    title: "Changes to This Policy",
    body: "We may update this Refund Policy from time to time. Any changes will be posted on this page with the updated date.",
    icon: "refresh",
  },
  {
    id: "contact-us",
    index: "08",
    title: "Contact Us",
    body: "If you have any questions about this Refund Policy or need to talk through a refund, feel free to reach out at:",
    icon: "mail",
    link: {
      label: REFUND_CONTACT_EMAIL,
      href: `mailto:${REFUND_CONTACT_EMAIL}`,
    },
  },
]

export const REFUND_EXAMPLE: RefundExampleContent = {
  title: "A worked example",
  description:
    "Say you paid a 50% deposit and 30% of the project is complete when you cancel. Your refund is the 20% difference.",
  rows: [
    { id: "paid", label: "You paid", value: "50%" },
    { id: "completed", label: "Work completed", value: "30%" },
    { id: "refund", label: "Your refund", value: "20%" },
  ],
  note: "Illustrative figures only, shown as a share of the project. Real amounts follow your agreed project scope.",
}

export const REFUND_BANNER: RefundBannerContent = {
  title: "Clear terms, no surprises.",
  description:
    "If something isn’t right with your project, talk to us early. Most issues are easiest to fix before they turn into a refund request.",
  ctaLabel: "Talk to Us",
  ctaHref: "/contact",
}