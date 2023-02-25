import { z } from "zod";

const movieCreateSchema = z.object({
  name: z.string().max(50),
  description: z.string().nullable().optional(),
  duration: z.number().int(),
  price: z.number().int(),
});

const returnMovieSchema = movieCreateSchema.extend({
  id: z.number(),
});

const movieSchemaArray = returnMovieSchema.array();

const updateMovieSchema = movieCreateSchema.partial();

export {
  movieCreateSchema,
  returnMovieSchema,
  movieSchemaArray,
  updateMovieSchema,
};
