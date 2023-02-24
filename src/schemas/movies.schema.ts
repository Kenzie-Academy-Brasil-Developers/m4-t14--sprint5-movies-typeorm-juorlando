import { z } from "zod";

const movieSchema = z.object({
  name: z.string().max(50),
  description: z.string(),
  duration: z.number(),
  price: z.number(),
});

const returnMovieSchema = movieSchema.extend({
  id: z.number(),
});

export { movieSchema, returnMovieSchema };
