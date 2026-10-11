"use client"

import { motion, useReducedMotion, Variants } from "framer-motion"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { JSX } from "react/jsx-runtime"

const formVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const fieldVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
}

export function ContactForm(): JSX.Element {
  const shouldReduceMotion = useReducedMotion()

  const inputBase =
    "w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-gray-700 placeholder-gray-400 outline-none transition-colors duration-150 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 dark:bg-[#0d0d0d] dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-500"

//   const inputDefault = "border-gray-200 dark:border-gray-800"
//   const inputError   = "border-red-400 dark:border-red-600"

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-[#111111] sm:p-8">
      <h3 className="mb-1 text-base font-semibold text-gray-900 dark:text-white">
        Send a message
      </h3>
      <p className="mb-6 text-xs text-gray-400 dark:text-gray-600">
        Fill in the form and I&apos;ll get back to you as soon as possible.
      </p>
      <motion.form
        noValidate
        aria-label="Contact form"
        className="flex flex-col gap-4"
        variants={shouldReduceMotion ? undefined : formVariants}
        initial={shouldReduceMotion ? "visible" : "hidden"}
        animate="visible"
      >
        {/* Name + Email */}
        <motion.div
          variants={shouldReduceMotion ? undefined : fieldVariants}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-xs font-medium text-gray-500 dark:text-gray-400">
              Name <span className="text-red-400" aria-hidden="true">*</span>
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              placeholder="Lawal Kamaldeen"
              className={`${inputBase}`}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-xs font-medium text-gray-500 dark:text-gray-400">
              Email <span className="text-red-400" aria-hidden="true">*</span>
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              className={`${inputBase}`}
            />
          </div>
        </motion.div>

        {/* Subject */}
        <motion.div
          variants={shouldReduceMotion ? undefined : fieldVariants}
          className="flex flex-col gap-1.5"
        >
          <label htmlFor="subject" className="text-xs font-medium text-gray-500 dark:text-gray-400">
            Subject <span className="text-red-400" aria-hidden="true">*</span>
          </label>
          <input
            id="subject"
            type="text"
            placeholder="Project enquiry, collaboration, etc."
            className={`${inputBase}`}
          />
        </motion.div>

        {/* Message */}
        <motion.div
          variants={shouldReduceMotion ? undefined : fieldVariants}
          className="flex flex-col gap-1.5"
        >
          <label htmlFor="message" className="text-xs font-medium text-gray-500 dark:text-gray-400">
            Message <span className="text-red-400" aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            rows={6}
            placeholder="Tell me about your project, what you need, and any relevant details..."
            className={`${inputBase} resize-none`}
          />
        </motion.div>

        {/* Submit */}
        <motion.div variants={shouldReduceMotion ? undefined : fieldVariants}>
          <Button
            type="submit"
            size="lg"
            className="w-full bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-60 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-500"
          >
            <Send className="mr-2 h-4 w-4" aria-hidden="true" />
            Send message
          </Button>
        </motion.div>
      </motion.form>
    </div>
  )
}