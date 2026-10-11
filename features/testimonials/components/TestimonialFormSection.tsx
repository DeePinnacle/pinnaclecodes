import { TestimonialForm } from "./TestimonialForm";

export function TestimonialFormSection() {
  return (
    <section className="bg-dark-primary py-24">
      <div className="container mx-auto max-w-2xl px-6">
        <div className="mb-10 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-blue-600" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
              Share your experience
            </span>
            <div className="h-px w-8 bg-blue-600" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Worked with me? I&apos;d love to hear about it
          </h2>
        </div>
        <TestimonialForm />
      </div>
    </section>
  );
}