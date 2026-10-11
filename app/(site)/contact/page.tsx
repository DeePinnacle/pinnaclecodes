import {
  ContactSection,
  ContactStats,
  ContactProcess,
  ContactFAQ,
  contactData,
  contactStats,
  contactProcessSteps,
  contactFaqs,
} from "@/features/contact"
import { JSX } from "react/jsx-runtime"

export default function ContactPage(): JSX.Element {
  return (
    <main>
      <ContactProcess steps={contactProcessSteps} />
      <ContactSection data={contactData} />
      <ContactStats stats={contactStats} />
      <ContactFAQ faqs={contactFaqs} />
    </main>
  )
}