import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    titleEn: z.string().optional(),
    category: z.enum([
      'power-meter',
      'jumbo-display',
      'ntp-clock',
      'haiwell',
    ]),
    model: z.string(),
    image: image(),
    gallery: z.array(image()).optional(),
    specs: z.array(z.object({
      label: z.string(),
      value: z.string(),
    })),
    price: z.string().default('ติดต่อสอบถาม'),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    pdf: z.string().optional(),
  }),
});

export const collections = { products };
