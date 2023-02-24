import { iMovie, iMovieReturn } from "../interface/movie.interface";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { Repository } from "typeorm";
import { returnMovieSchema } from "../schemas/movies.schema";

const createMovieService = async (
  movieData: iMovie
): Promise<iMovieReturn> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const movie = movieRepository.create(movieData);

  await movieRepository.save(movie);

  const newMovie = returnMovieSchema.parse(movie);

  return newMovie;
};

export { createMovieService };
