// BlogCard.tsx

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BlogPost } from "../types";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: Readonly<BlogCardProps>) {
  return (
    <motion.article
      whileHover={{ x: 4 }}
      className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/2 p-6 transition-colors hover:border-blue-600/40"
    >
      <p className="text-sm text-blue-500">
        {post.category}
      </p>

      <h3 className="mt-3 text-xl font-semibold text-white">
        {post.title}
      </h3>

      <p className="mt-3 flex-1 text-sm text-slate-400">
        {post.excerpt}
      </p>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-xs text-slate-500">
          {post.readTime}
        </span>

        <Link
          href={`/blog/${post.slug}`}
          className="flex items-center gap-2 text-sm text-blue-500 transition-colors hover:text-blue-400"
          aria-label={`Read more: ${post.title}`}
        >
          Read More

          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </motion.article>
  );
}