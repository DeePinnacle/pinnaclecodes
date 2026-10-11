// FeaturedBlogCard.tsx

"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { BlogPost } from "../types"

interface FeaturedBlogCardProps {
  post: BlogPost;
}

export function FeaturedBlogCard({
  post,
}: Readonly<FeaturedBlogCardProps>) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/2 p-8"
    >
      <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-blue-600 transition-transform duration-500 group-hover:scale-x-100" />

      <span className="inline-flex rounded-full border border-blue-600/30 bg-blue-600/10 px-3 py-1 text-xs text-blue-400">
        {post.category}
      </span>

      <h3 className="mt-6 text-3xl font-bold text-white">
        {post.title}
      </h3>

      <p className="mt-4 text-slate-400">
        {post.excerpt}
      </p>

      <div className="mt-8 flex items-center justify-between">
        <span className="text-sm text-slate-500">
          {post.readTime}
        </span>

        <Link
          href={`/blog/${post.slug}`}
          className="flex items-center gap-2 text-blue-500"
        >
          Read Article

          <ArrowUpRight
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            size={18}
          />
        </Link>
      </div>
    </motion.article>
  );
}