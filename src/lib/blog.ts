// Blog data layer — reads MDX files from content/blog at build time.
// To add a new post: drop a new `.mdx` file into content/blog/ with the
// frontmatter fields below. No code changes required.

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime?: string;
  coverImage?: string;
  draft?: boolean;
}

export interface PostSource extends PostMeta {
  content: string;
}

function readPostFile(slug: string): PostSource | null {
  const fullPath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? "",
    description: data.description ?? "",
    date: data.date ? String(data.date) : "",
    tags: Array.isArray(data.tags) ? data.tags : [],
    readingTime: data.readingTime,
    coverImage: data.coverImage,
    draft: Boolean(data.draft),
    content,
  };
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getPostSource(slug: string): PostSource | null {
  const post = readPostFile(slug);
  if (!post || post.draft) return null;
  return post;
}

export function getPostMetas(): PostMeta[] {
  return getPostSlugs()
    .map((slug) => readPostFile(slug))
    .filter((post): post is PostSource => post !== null && !post.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(({ content, ...meta }) => meta);
}
