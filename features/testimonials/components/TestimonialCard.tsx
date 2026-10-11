// TestimonialCard.tsx

import { Star } from "lucide-react";
import { Testimonial } from "../types";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  testimonial: Testimonial;
  active?: boolean;
}

export function TestimonialCard({
  testimonial,
  active,
}: Readonly<TestimonialCardProps>) {
  return (
    <article
      className={cn(
        "relative h-full rounded-3xl border transition-all duration-300",
        active
          ? "border-blue-600/40 bg-[#081a3b] shadow-[0_0_50px_rgba(37,99,235,0.12)]"
          : "border-white/10 bg-[#0d0d0d] opacity-60"
      )}
    >
      <div className="p-8">
        <div className="mb-6 flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4 fill-yellow-500 text-yellow-500"
            />
          ))}
        </div>

        {testimonial.featured && active && (
          <div className="absolute right-6 top-6 rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-xs text-blue-400">
            Featured
          </div>
        )}

        <blockquote className="mb-8 text-lg italic leading-relaxed text-slate-300">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>

        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
            {testimonial.initials}
          </div>

          <div>
            <h3 className="font-semibold text-white">
              {testimonial.name}
            </h3>

            <p className="text-sm text-slate-400">
              {testimonial.role} · {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}