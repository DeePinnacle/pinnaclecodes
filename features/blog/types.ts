// features/blog/types.ts

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
  featured?: boolean;
  slug: string;
}