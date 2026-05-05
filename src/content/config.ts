import { defineCollection, z } from 'astro:content';

const tutorial = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum(['tutorial', 'qa', 'firmware', 'manual']),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { tutorial };
