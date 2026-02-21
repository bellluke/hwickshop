import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['home', 'baby', 'health', 'school', 'start', 'gift', 'pet']),
    articleType: z.enum(['checklist', 'top5', 'comparison', 'guide', 'starter-kit']),
    tags: z.array(z.string()).default([]),
    linkCount: z.number().default(0),
    readingTime: z.string().default('5분'),
    publishedAt: z.date(),
    updatedAt: z.date().optional(),
    budget: z
      .object({
        economy: z.string(),
        standard: z.string(),
        generous: z.string(),
      })
      .optional(),
    seasonal: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const collections = {
  articles,
};
