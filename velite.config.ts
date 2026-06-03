import { defineConfig, s } from "velite";

export default defineConfig({
  collections: {
    blog: {
      name: "blog",
      pattern: "blog/*.mdx",
      schema: s.object({
        title: s.string(),
        description: s.string(),
        date: s.isodate(),
        tags: s.array(s.string()).optional().default([]),
        readingTime: s.string().optional(),
        coverImage: s.string().optional(),
        draft: s.boolean().optional().default(false),
        content: s.markdown(),
      }).transform((post) => {
        const slug = post.$path.replace("blog/", "").replace(".mdx", "");
        return { ...post, slug };
      }),
    },
  },
});