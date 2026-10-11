// features/blog/data.ts

import { BlogPost } from "./types";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How I Structure Scalable Next.js Applications",
    excerpt:
      "A practical guide to feature-based architecture, maintainability, and long-term scalability.",
    category: "Architecture",
    readTime: "6 min read",
    publishedAt: "Jun 2026",
    featured: true,
    slug: "scalable-nextjs-applications",
  },
  {
    id: "2",
    title: "Building APIs That Frontend Developers Love",
    excerpt:
      "Patterns for creating predictable, maintainable backend systems.",
    category: "Backend",
    readTime: "5 min read",
    publishedAt: "May 2026",
    slug: "developer-friendly-apis",
  },
  {
    id: "3",
    title: "Improving Performance in Modern React Apps",
    excerpt:
      "Simple techniques that produce measurable improvements.",
    category: "Frontend",
    readTime: "4 min read",
    publishedAt: "Apr 2026",
    slug: "react-performance-guide",
  },
];