"use client";

import { Button } from "@/components/ui/button";

export function TestimonialForm() {

  return (
    <form
      noValidate
      className="rounded-3xl border border-white/10 bg-[#0d0d0d] p-8"
    >
      <div className="mb-5">
        <label htmlFor="name" className="mb-1.5 block text-sm text-slate-300">
          Name
        </label>
        <input
          id="name"
          className="w-full rounded-lg border border-white/10 bg-[#050505] px-3 py-2.5 text-white outline-none transition-colors focus:border-blue-600"
        />
      </div>

      <div className="mb-5 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="role" className="mb-1.5 block text-sm text-slate-300">
            Role
          </label>
          <input
            id="role"
            className="w-full rounded-lg border border-white/10 bg-[#050505] px-3 py-2.5 text-white outline-none transition-colors focus:border-blue-600"
          />
        </div>

        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm text-slate-300">
            Company
          </label>
          <input
            id="company"
            className="w-full rounded-lg border border-white/10 bg-[#050505] px-3 py-2.5 text-white outline-none transition-colors focus:border-blue-600"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="quote" className="mb-1.5 block text-sm text-slate-300">
          Your testimony
        </label>
        <textarea
          id="quote"
          rows={5}
          className="w-full resize-none rounded-lg border border-white/10 bg-[#050505] px-3 py-2.5 text-white outline-none transition-colors focus:border-blue-600"
        />
      </div>
      <Button
        type="submit"
        className="w-full rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-500 disabled:opacity-60 sm:w-auto"
      >
        Submit testimony
      </Button>
    </form>
  );
}