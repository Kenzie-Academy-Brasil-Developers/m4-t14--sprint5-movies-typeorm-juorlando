import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { iMoviesReturn } from "../interfaces/movies.interface";
import { movieSchemaArray } from "../schemas/movies.schema";

const listMovieService = async (): Promise<iMoviesReturn> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const findMovies = await movieRepository.find({
    take: 3,
    skip: 3 * (1 - 1),
    order:{
      name: "ASC"
    }
  });

  const movies = movieSchemaArray.parse(findMovies);

  return movies;
};

export { listMovieService };
