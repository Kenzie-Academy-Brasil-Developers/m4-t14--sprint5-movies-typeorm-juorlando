import { Request, Response, NextFunction } from "express";
import { appError } from "../errors";

const ensureName = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const movieName = request.validatedMovie;

  if (movieName) {
    throw new appError("Movie already Exists!", 409);
  }

  return next();
};

export { ensureName };