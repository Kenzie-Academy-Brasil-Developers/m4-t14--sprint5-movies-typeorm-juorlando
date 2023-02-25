import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { appError } from "../errors";

const ensureName = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const userRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const findMovie = await userRepository.findOne({
    where: {
      name: request.body.name,
    },
  });

  if (findMovie) {
    throw new appError("Movie already exists.", 409);
  }

  return next();
};

export { ensureName };
