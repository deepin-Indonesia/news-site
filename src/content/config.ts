import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    author: z.string().default('deepin Indonesia'),
    description: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = { posts };
