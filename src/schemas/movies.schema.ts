import { z } from "zod";

const movieCreateSchema = z.object({
  name: z.string().max(50),
  description: z.string().nullable().optional(),
  duration: z.number().int().positive(),
  price: z.number().int().positive(),
});

const returnMovieSchema = movieCreateSchema.extend({
  id: z.number(),
});

const movieSchemaArray = returnMovieSchema.array();

const movieUpdateSchema = z.object({
  name: z.string().max(50).optional(),
  description: z.string().nullable().optional(),
  duration: z.number().int().positive().optional(),
  price: z.number().int().positive().optional(),
});

export {
  movieCreateSchema,
  returnMovieSchema,
  movieSchemaArray,
  movieUpdateSchema
};
