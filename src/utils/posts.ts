// src/utils/posts.ts
import type { BlogPostInstance } from "@/types/blog";

/**
 * 获取所有的博客文章并进行严格的类型标注
 */
export function getAllPosts(): BlogPostInstance[] {
  // 使用刚刚定义好的 BlogPostInstance 声明 glob 的返回值
  const posts = Object.values(
    import.meta.glob<BlogPostInstance>("../pages/posts/*.md", { eager: true }),
  );

  // 这里还可以顺便做一下排序（比如按发布时间倒序排列，个人博客很常用）
  return posts.sort(
    (a, b) => new Date(b.frontmatter.pubDate).getTime() - new Date(a.frontmatter.pubDate).getTime(),
  );
}
