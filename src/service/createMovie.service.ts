import { iMovieCreate, iMovieReturn} from "../interface/movie.interface";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { Repository } from "typeorm";
import { returnMovieSchema } from "../schemas/movies.schema";

const createMovieService = async (
  movieData: iMovieCreate
): Promise<iMovieReturn> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const movie: Movie = movieRepository.create(movieData);

  await movieRepository.save(movie);

  const newMovie = returnMovieSchema.parse(movie);

  return newMovie;
};

export { createMovieService };
