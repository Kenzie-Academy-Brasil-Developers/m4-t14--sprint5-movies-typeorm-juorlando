import { movieSchema, returnMovieSchema } from "../schemas/movies.schema";
import { z } from "zod";

type iMovie = z.infer<typeof movieSchema>;
type iMovieReturn = z.infer<typeof returnMovieSchema>;

export { iMovie, iMovieReturn };
