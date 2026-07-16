import type { MarkdownInstance } from "astro";

export interface BlogPostFrontmatter {
  title: string;
  description: string;
  author: string;
  pubDate: string | Date;
  image: {
    url: string;
    alt: string;
  };
  tags: string[];
  layouts?: string;
}

export type BlogPostInstance = MarkdownInstance<BlogPostFrontmatter>;
