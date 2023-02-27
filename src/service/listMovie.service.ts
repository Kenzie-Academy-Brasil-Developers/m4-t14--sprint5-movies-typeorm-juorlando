import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { iMoviesReturn, iPagination } from "../interfaces/movies.interface";
import { movieSchemaArray } from "../schemas/movies.schema";

const listMovieService = async (payload: any): Promise<iPagination> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  let page: number = Number(payload.page) || 1;
  let perPage: number = Number(payload.perPage) || 5;
  let sort: string = payload.sort;
  let order: string = payload.order;

  if (perPage <= 0 || perPage > 5) {
    perPage = 5;
  }

  if (page <= 0) {
    page = 1;
  }

  if (payload.sort !== "price" && payload.sort !== "duration") {
    sort = "id";
  }

  if (!payload.sort && payload.order === "DESC") {
    order = "ASC";
  }

  if (payload.order !== "ASC" && payload.order !== "DESC") {
    order = "ASC";
  }

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
