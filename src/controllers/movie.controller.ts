import { Request, Response } from "express";
import { iMovie, iMovieReturn } from "../interface/movie.interface";
import { createMovieService } from "../service/createMovie.service";

const createMovieContoller = async (
  request: Request,
  response: Response
) => {

    const movieData: iMovie = request.body

    const newMovie = await createMovieService(movieData)

    return response.status(201).json(newMovie)
};

const getMovieController = async (request: Request, response: Response) => {

    
}

export { createMovieContoller };
