import { JSX } from "react/jsx-runtime"
import { AboutHero } from "@/features/about/components/AboutHero"
import { AboutIdentity } from "@/features/about/components/AboutIdentity"
import { AboutPhilosophy } from "@/features/about/components/AboutPhilosophy"
import { AboutTimeline } from "@/features/about/components/AboutTimeline"
import { AboutStack } from "@/features/about/components/AboutStack"
import { AboutProjectTeasers } from "@/features/about/components/AboutProjectTeasers"
import { CtaSection } from "@/features/cta"
import { ctaData } from "@/features/cta"
import { aboutData } from "@/features/about/data"
import { experiences } from "@/features/experience/data"
import { skillCategories } from "@/features/tech-stack/data"
import { featuredProjects } from "@/features/projects/data"

export default function AboutPage(): JSX.Element {
  return (
    <main>
      {/* 1. Hero */}
      <AboutHero />

      {/* 2. Identity split — headshot + bio + stats */}
      <AboutIdentity
        data={{
          paragraphs: aboutData.paragraphs,
          stats: aboutData.stats,
          openTo: aboutData.openTo,
          tags: aboutData.tags,
        }}
      />

      {/* 3. Development philosophy manifesto */}
      <AboutPhilosophy
        data={{
          philosophyHeading: aboutData.philosophyHeading,
          philosophyContent: aboutData.philosophyContent,
          philosophyPrinciples: aboutData.philosophyPrinciples,
        }}
      />

      {/* 4. Animated career timeline */}
      <AboutTimeline experiences={experiences} />

      {/* 5. Tech stack with context notes */}
      <AboutStack categories={skillCategories} />

      {/* 6. Featured project teasers */}
      <AboutProjectTeasers projects={featuredProjects} />

      {/* 7. CTA — reused from homepage */}
      <CtaSection data={ctaData} />
    </main>
  )
}