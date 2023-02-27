import { DeepPartial, Repository } from "typeorm";
import { z } from "zod";
import { Movie } from "../entities";
import {
  movieCreateSchema,
  movieSchemaArray,
  returnMovieSchema,
  returnMovieUpdateSchema
} from "../schemas";


type iMovie = z.infer<typeof movieCreateSchema>;
type iMovieReturn = z.infer<typeof returnMovieSchema>;
type iMoviesReturn = z.infer<typeof movieSchemaArray>;
type MovieUpdate = z.infer<typeof returnMovieUpdateSchema>

type iMovieCreate = z.infer<typeof movieCreateSchema>;
type iMovieUpdate = DeepPartial<iMovie>;
type iMovieRepo = Repository<Movie>;


interface Pagination {
  prevPage: string | null;
  nextPage: string | null;
  count: number;
}

interface iPagination extends Pagination {
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
  iPagination,
  MovieUpdate
};
