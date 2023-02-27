import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { appError } from "../errors";

const ensureNameCreate = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const findMovieName = await movieRepository.findOneBy({
    name: request.body.name,
  });

  if (findMovieName) {
    throw new appError("Movie already exists.", 409);
  }

  return next();
};

export { ensureNameCreate };
