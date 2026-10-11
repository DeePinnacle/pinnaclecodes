import react, { JSX } from "react";
import { HeroSection } from "@/features/hero";
import { aboutData } from "@/features/about/data";
import { AboutSection } from "@/features/about/components/AboutSection";
import { ServicesSection } from "@/features/services/components/ServicesSection";
import { servicesData } from "@/features/services/data";
import { featuredProjects, FeaturedProjectsSection } from "@/features/projects";
import { SkillsSection } from "@/features/tech-stack/components/SkillsSection";
import { skillCategories } from "@/features/tech-stack/data";
import { ExperienceSection, experiences } from "@/features/experience";
import { ProcessSection, processSteps } from "@/features/process";
import { CtaSection, ctaData } from "@/features/cta";
import { TestimonialsSection } from "@/features/testimonials";
import { ContactSection, contactData } from "@/features/contact";
import { BlogSection } from "@/features/blog";
export default function HomePage(): JSX.Element {
  return (
    <main>
      <HeroSection />
      <AboutSection data={aboutData} />
      <ServicesSection data={servicesData} />
      <FeaturedProjectsSection projects={featuredProjects} />
      <SkillsSection categories={skillCategories} />
      <ExperienceSection experiences={experiences} />
      <ProcessSection steps={processSteps} />
      <CtaSection data={ctaData} />
      <TestimonialsSection />
      <ContactSection data={contactData} />
      <BlogSection />
    </main>
  );
}
