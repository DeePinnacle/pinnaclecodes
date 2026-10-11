"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from "lucide-react";

import { testimonials } from "../data";
import { TestimonialCard } from "./TestimonialCard";

export function TestimonialsCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    containScroll: false,
  }, [Autoplay({ delay: 3000, playOnInit: true })]);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    const handleSelect = () => onSelect(emblaApi);

    emblaApi.on("select", handleSelect);

    return () => {
      emblaApi.off("select", handleSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div>
      {" "}
      <div ref={emblaRef} className="overflow-hidden">
        {" "}
        <div className="-ml-6 flex">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="min-w-0 flex-[0_0_85%] pl-6 md:flex-[0_0_55%]"
            >
              <TestimonialCard
                testimonial={testimonial}
                active={index === selectedIndex}
              />{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </div>
      <div className="mt-10 flex items-center justify-center gap-6">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => emblaApi?.scrollPrev()}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:border-blue-600"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to testimonial ${index + 1}`}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                selectedIndex === index ? "w-8 bg-blue-600" : "w-2 bg-white/20"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => emblaApi?.scrollNext()}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-600 text-blue-500 transition-colors hover:bg-blue-600 hover:text-white"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
