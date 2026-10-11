"use client"
import { JSX } from "react";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import { Button } from "@/components/ui/button"
import { HeroBadge } from "./HeroBadge"
import { HeroStats } from "./HeroStats"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
}

export function HeroContent(): JSX.Element {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className="flex flex-col gap-6"
      variants={shouldReduceMotion ? {} : containerVariants}
      initial={shouldReduceMotion ? "visible" : "hidden"}
      animate="visible"
    >
      {/* Availability badge */}
      <HeroBadge />

      {/* Headline */}
      <motion.h1
        variants={shouldReduceMotion ? {} : itemVariants}
        transition={{ease: "easeOut"}}
        className="text-5xl font-bold leading-tight tracking-tight text-gray-200 lg:text-7xl"
      >
        Building Scalable Web/Mobile Applications &amp; Modern Digital Experiences
        <span className="hero-caret ml-1 inline-block font-light text-blue-500" aria-hidden="true">
          |
        </span>
      </motion.h1>

      {/* Supporting paragraph */}
      <motion.p
        variants={shouldReduceMotion ? {} : itemVariants}
        transition={{ease: "easeOut"}}
        className="max-w-2xl text-base leading-[1.7] text-gray-400"
      >
        Hi, I&apos;m Lawal Kamaldeen — a full stack developer passionate about building
        responsive frontend interfaces, scalable backend systems, and high-performance
        web/mobile applications using modern technologies.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        variants={shouldReduceMotion ? {} : itemVariants}
        transition={{ease: "easeOut"}}
        className="md:flex md:flex-wrap md:items-center md:gap-4"
      >
        <Button asChild size="lg" className="bg-blue-600 text-white h-14 w-3/4 md:w-1/2 hover:bg-blue-500">
          <Link href="/projects">
            View My Work
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>

        <Button
          asChild
          variant="outline"
          size="lg"
          className="border-gray-700 bg-transparent text-dark-primary h-14 w-3/4 mt-3 hover:bg-white/5 hover:b-gray-500 md:mt-0 md:w-2/5 dark:text-white"
        >
          <Link href="/contact">
            <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
            Hire Me
          </Link>
        </Button>
      </motion.div>

      {/* Trust text */}
      <motion.p
        variants={shouldReduceMotion ? {} : itemVariants}
        className="text-sm tracking-widest text-gray-600 uppercase"
      >
        Frontend &bull; Backend &bull; APIs &bull; Full Stack Solutions
      </motion.p>

      {/* Mini stats */}
      <HeroStats />
    </motion.div>
  )
}
