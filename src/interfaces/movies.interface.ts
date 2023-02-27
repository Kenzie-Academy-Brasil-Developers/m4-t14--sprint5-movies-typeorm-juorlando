import { DeepPartial, Repository } from "typeorm";
import { z } from "zod";
import { Movie } from "../entities";
import {
  movieCreateSchema,
  movieSchemaArray,
  returnMovieSchema,
  movieUpdateSchema
} from "../schemas";


type iMovie = z.infer<typeof movieCreateSchema>;
type iMovieReturn = z.infer<typeof returnMovieSchema>;
type iMoviesReturn = z.infer<typeof movieSchemaArray>;
type MovieUpdate = z.infer<typeof movieUpdateSchema>

type iMovieCreate = z.infer<typeof movieCreateSchema>;
type iMovieUpdate = DeepPartial<iMovie>;
type iMovieRepo = Repository<Movie>;


interface Pagination {
  prevPage: string | null;
  nextPage: string | null;
  count: number;
  data: iMoviesReturn;
}

export {
  iMovie,
  iMovieCreate,
  iMovieUpdate,
  iMovieRepo,
  iMovieReturn,
  iMoviesReturn,
  Pagination,
  MovieUpdate
};
