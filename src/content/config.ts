import { defineCollection, z } from "astro:content";

const servicios = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    price: z.string().optional(),
    icon: z.string(),
    urgent: z.boolean().default(false),
    features: z.array(z.string()).default([]),
  }),
});

const zonas = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    city: z.string(),
    description: z.string(),
    phone: z.string(),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default("Cerrajero 24"),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { servicios, zonas, blog };
