import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { iMovieUpdate } from "../interfaces";
import { MovieUpdate } from "../interfaces/movies.interface";
import { returnMovieSchema } from "../schemas/movies.schema";

const updateMovieService = async (
  movieData: iMovieUpdate,
  movieId: number
): Promise<MovieUpdate> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const oldData: iMovieUpdate | null = await movieRepository.findOneBy({
    id: movieId,
  });

  const movie = movieRepository.create({
    ...oldData,
    ...movieData,
  });

  await movieRepository.save(movie);

  const newMovie: MovieUpdate = returnMovieSchema.parse(movie);

  return newMovie;
};

export { updateMovieService };
