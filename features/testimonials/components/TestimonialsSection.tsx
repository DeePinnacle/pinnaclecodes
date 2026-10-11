// TestimonialsSection.tsx

import { TestimonialHeader } from "./TestimonialHeader";
import { TestimonialsCarousel } from "./TestimonialsCarousel";

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="bg-dark-primary py-24"
    >
      <div className="container mx-auto px-6">
        <TestimonialHeader />
        <TestimonialsCarousel />
      </div>
    </section>
  );
}