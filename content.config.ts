import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    docs: defineCollection({
      source: "**/*.md",
      type: "page",
    }),
    blog: defineCollection({
      source: "blog/**/*.md",
      type: "page",
      schema: z.object({
        draft: z.boolean(),
        tag: z.array(z.string()),
        date: z.string(),
      }),
    }),
    example: defineCollection({
      source: "**/example/**/*.md",
      type: "page",
      schema: z.object({
        date: z.date(),
      }),
    }),
  },
});
