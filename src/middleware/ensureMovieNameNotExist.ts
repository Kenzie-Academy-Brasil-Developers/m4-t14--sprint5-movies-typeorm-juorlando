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
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const findMovieName = await movieRepository.findOneBy({
    name: request.body.name,
});

  const findMovie = await movieRepository.findOneBy({
      id: parseInt(request.params.id),
  });

  if (findMovieName) {    
    
      if(findMovie?.id !== parseInt(request.params.id)){
        
        throw new appError("Movie already exists.", 409);
      }

  }


  return next();
};

export { ensureName };
