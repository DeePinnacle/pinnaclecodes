"use client"

import { useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import type { FAQItem } from "../types"
import { JSX } from "react/jsx-runtime"

interface ContactFAQProps {
  faqs: FAQItem[]
}

export function ContactFAQ({ faqs }: Readonly<ContactFAQProps>): JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      className="relative bg-gray-50/50 py-24 dark:bg-white/2"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-center gap-3">
          <div className="h-px w-7 bg-blue-600" aria-hidden="true" />
          <span className="text-[11px] font-medium uppercase tracking-widest text-blue-500">
            FAQ
          </span>
        </div>

        <h2
          id="faq-heading"
          className="mb-10 text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white lg:text-4xl"
        >
          Common questions
        </h2>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            const panelId = `faq-panel-${index}`
            const buttonId = `faq-trigger-${index}`

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-[#111111]"
              >
                <button
                  id={buttonId}
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-blue-500 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={shouldReduceMotion ? undefined : { height: 0, opacity: 0 }}
                      animate={shouldReduceMotion ? undefined : { height: "auto", opacity: 1 }}
                      exit={shouldReduceMotion ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-4 text-xs leading-relaxed text-gray-500 dark:text-gray-500">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}