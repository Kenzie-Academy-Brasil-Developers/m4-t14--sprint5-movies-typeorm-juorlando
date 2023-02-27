import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import {
  iMoviesReturn,
  iPagination
} from "../interfaces/movies.interface";
import { movieSchemaArray } from "../schemas/movies.schema";

const listMovieService = async (payload: any): Promise<iPagination> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const page: number = Number(payload.page) || 1;
  const perPage: number = Number(payload.perPage) || 5;
  let sort: string = payload.sort
  let order: string = payload.order

  console.log(18, sort)
  console.log(19, order)

  if(!payload.sort){
    sort = "id"
  }

  if(!payload.order){
    order = "ASC"
  }

  console.log(29, sort)
  console.log(30, order)

  const [movie, total] = await movieRepository.findAndCount({
    order: {
      [sort]: order,
    },
    take: perPage,
    skip: perPage * (page - 1),
  });

  const movies: iMoviesReturn = movieSchemaArray.parse(movie);

  const baseUrl: string = `http://localhost:3000/movies`;

  let prevPage: string | null = `${baseUrl}?page=${
    page - 1
  }&perPage=${perPage}`;

  let nextPage: string | null = `${baseUrl}?page=${
    page + 1
  }&perPage=${perPage}`;

  perPage * page >= total
    ? (nextPage = null)
    : (nextPage = `${baseUrl}?page=${page - 1}&perPage=${perPage}`);

  page === 1
    ? (prevPage = null)
    : (prevPage = `${baseUrl}?page=${page - 1}&perPage=${perPage}`);

  const pagenation: iPagination = {
    prevPage,
    nextPage,
    count: total,
    data: movies,
  };

  return pagenation;
};

export { listMovieService };
