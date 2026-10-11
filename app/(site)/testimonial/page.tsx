import type { Metadata } from "next";
import { TestimonialsSection, TestimonialFormSection } from "@/features/testimonials";

export const metadata: Metadata = {
  title: "Testimonials | PinnacleCodes",
  description: "What clients and collaborators say about working with PinnacleCodes.",
};

export default function TestimonialsPage() {
  return (
    <main>
      <TestimonialsSection />
      <TestimonialFormSection />
    </main>
  );
}