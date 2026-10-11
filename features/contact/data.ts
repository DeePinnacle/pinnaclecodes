import type { ContactData, StatItem, ProcessStep, FAQItem } from "./types"

export const contactData: ContactData = {
  heading: "Let's build something together.",
  subheading:
    "Whether you have a project in mind, need a developer for your team, or just want to say hello — I'd love to hear from you.",
  available: true,
  availableText: "Available for new projects",
  responseTime: "Usually replies within 24 hours",
  quoteText:
    "Every great product starts with a conversation. Let's start ours.",
  contacts: [
    {
      icon: "Mail",
      label: "Email",
      value: "officialdeepinnacle@gmial.com",
      href: "mailto:officialdeepinnacle@gmail.com",
    },
    {
      icon: "MapPin",
      label: "Location",
      value: "Nigeria · Remote worldwide",
    },
    {
      icon: "Clock",
      label: "Response time",
      value: "Within 24 hours on weekdays",
    },
    {
      icon: "Briefcase",
      label: "Open to",
      value: "Freelance · Remote · Contract",
    },
  ],
  socials: [
    {
      icon: "FaGithub",
      label: "GitHub",
      href: "https://github.com/deepinnacle",
    },
    {
      icon: "FaLinkedin",
      label: "LinkedIn",
      href: "https://linkedin.com/in/kamaldeen-lawal-dev",
    },
    {
      icon: "FaXTwitter",
      label: "Twitter / X",
      href: "https://twitter.com/lawal_dev",
    },
  ],
}

export const contactStats: StatItem[] = [
  {
    icon: "Clock",
    value: "< 24h",
    label: "Average response time",
  },
  {
    icon: "Globe2",
    value: "Remote",
    label: "Worldwide, timezone flexible",
  },
  {
    icon: "Users",
    value: "Freelance & FT",
    label: "Open engagement types",
  },
  {
    icon: "ThumbsUp",
    value: "100%",
    label: "Messages personally read",
  },
]

/** Steps shown in the "what happens after you hit send" section. */
export const contactProcessSteps: ProcessStep[] = [
  {
    icon: "MessageSquare",
    title: "Send your message",
    description:
      "Fill in the form with a few details about your project, timeline, or role — the more context, the better.",
  },
  {
    icon: "Reply",
    title: "Quick reply",
    description:
      "Expect a personal reply within 24 hours on weekdays, usually much sooner.",
  },
  {
    icon: "PhoneCall",
    title: "Discovery call",
    description:
      "A short 15–30 minute call to understand scope, constraints, and whether it's a good mutual fit.",
  },
  {
    icon: "FileCheck2",
    title: "Proposal & kickoff",
    description:
      "You'll receive a clear scope, timeline, and next steps — no vague promises, no scope creep.",
  },
]

export const contactFaqs: FAQItem[] = [
  {
    question: "What's your typical response time?",
    answer:
      "Most messages get a reply within 24 hours on weekdays, often the same day. If something is urgent, mention it in your subject line.",
  },
  {
    question: "Do you take on freelance and contract work?",
    answer:
      "Yes. I'm open to freelance projects, contract engagements, and remote full-time roles. Let me know which one you have in mind so I can tailor my reply.",
  },
  {
    question: "What's your usual tech stack?",
    answer:
      "Primarily Next.js, TypeScript, React, and Tailwind CSS on the frontend, with Node.js, Express, Laravel, and MongoDB on the backend depending on the project's needs.",
  },
  {
    question: "Do you work with clients in different timezones?",
    answer:
      "Yes, I regularly work with clients across different timezones and keep communication async-friendly, with overlap windows arranged when a live call is needed.",
  },
  {
    question: "What should I include in my message?",
    answer:
      "A short summary of the project or role, your timeline, and any relevant links (existing site, design files, job description) help me give you a useful first reply.",
  },
  {
    question: "Are you open to signing an NDA?",
    answer:
      "Absolutely. If your project requires confidentiality, I'm happy to sign an NDA before any detailed discussion begins.",
  },
]