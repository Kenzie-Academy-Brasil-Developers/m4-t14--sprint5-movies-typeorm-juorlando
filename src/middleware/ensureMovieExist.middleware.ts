import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { appError } from "../errors";

const ensureMovieExistsMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const userRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const findMovie = await userRepository.findOne({
    where: {
      id: parseInt(request.params.id),
    },
  });

  if (!findMovie) {
    throw new appError("Movie not found", 404);
  }

  return next();
};

export { ensureMovieExistsMiddleware };
