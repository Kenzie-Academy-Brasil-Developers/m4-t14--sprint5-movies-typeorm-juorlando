import { DeepPartial, Repository } from "typeorm";
import { z } from "zod";
import { Movie } from "../entities";
import {
  movieCreateSchema,
  movieSchemaArray,
  returnMovieSchema,
  updateMovieSchema,
} from "../schemas";

type iMovieCreate = z.infer<typeof movieCreateSchema>;
type iMovieUpdate = DeepPartial<Movie>;
type iMovieRepo = Repository<Movie>;

type iMovie = z.infer<typeof movieCreateSchema>;
type iMovieReturn = z.infer<typeof returnMovieSchema>;
type iMoviesReturn = z.infer<typeof movieSchemaArray>;
type iUpdateMovie = z.infer<typeof updateMovieSchema>;

export {
  iMovie,
  iMovieCreate,
  iMovieUpdate,
  iMovieRepo,
  iMovieReturn,
  iMoviesReturn,
  iUpdateMovie,
};
