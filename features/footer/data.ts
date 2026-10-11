import type { FooterData } from "./types"

export const footerData: FooterData = {
  brand: {
    name: "Pinnacle",
    accentName: "Codes",
    bio: "Building fast, scalable, and well-crafted web applications. I care about the details — from architecture decisions to the last pixel.",
    email: "officialdeepinnacle@gmail.com",
    location: "Federal Capital Territory FCT, Abuja, Nigeria",
    timezone: "GMT+1 · West Africa Time",
    available: true,
    availableText: "Available for freelance & remote",
  },

  socials: [
    { icon: "FaGithub",   label: "GitHub",     href: "https://github.com/deepinnacle" },
    { icon: "FaLinkedin", label: "LinkedIn",    href: "https://linkedin.com/in/kamaldeen-lawal-dev" },
    { icon: "FaXTwitter", label: "Twitter / X", href: "https://twitter.com/lawal_dev" },
    { icon: "FaHashnode", label: "Hashnode",    href: "https://hashnode.com/@lawal-dev" },
  ],

  stackTags: [
    { label: "React" },
    { label: "Next.js" },
    { label: "Node.js" },
    { label: "TypeScript" },
    { label: "MongoDB" },
    { label: "Tailwind" },
  ],

  navColumns: [
    {
      id: "general",
      heading: "General",
      links: [
        { label: "Home",     href: "/" },
        { label: "About me", href: "/about" },
        { label: "Projects", href: "/projects" },
        { label: "Blog",     href: "/blog" },
        { label: "Resume",   href: "/resume.pdf", badge: "PDF" },
      ],
    },
    {
      id: "work",
      heading: "Work",
      links: [
        { label: "Services",           href: "/services" },
        { label: "Experience",         href: "/experience" },
        { label: "Tech stack",         href: "/#skills" },
        { label: "Process",            href: "/process" },
        { label: "Start a project",    href: "/contact" },
        { label: "Book a consultation", href: "/contact" },
        { label: "Hire me →",          href: "/contact", accent: true },
      ],
    },
    {
      id: "community",
      heading: "Community",
      links: [
        { label: "Testimonials", href: "/#testimonials" },
        { label: "GitHub",       href: "https://github.com/deepinnacle" },
        { label: "LinkedIn",     href: "https://linkedin.com/in/kamaldeen-lawal-dev" },
        { label: "Twitter / X",  href: "https://twitter.com/lawal_dev" },
        { label: "Dev.to",       href: "https://dev.to/lawal-dev" },
        { label: "Hashnode",     href: "https://hashnode.com/@lawal-dev" },
        { label: "Report a bug", href: "/contact", accent: true },
      ],
    },
    {
      id: "legal",
      heading: "Legal",
      links: [
        { label: "Privacy policy",  href: "/privacy" },
        { label: "Terms of service", href: "/terms" },
        { label: "Refund policy",   href: "/refund" },
        { label: "Cookie policy",   href: "/cookies" },
      ],
    },
  ],

  feedback: {
    heading: "Help make this better",
    subtext:
      "Spotted a bug, typo, or something off? I'm always looking to improve — your feedback genuinely matters.",
    ctaLabel: "Send feedback",
    ctaHref: "/contact",
  },

  bottom: {
    copyright: "© 2026 Lawal Kamaldeen · PinnacleCodes. All rights reserved.",
    techCredit: "Next.js 16 · TypeScript · Tailwind CSS",
  },
}