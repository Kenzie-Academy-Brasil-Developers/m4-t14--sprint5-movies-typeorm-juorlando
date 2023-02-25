import { Request, Response } from "express";
import { iMovie, iMovieUpdate } from "../interface/movie.interface";
import { createMovieService } from "../service/createMovie.service";
import { listMovieService } from "../service/listMovie.service";
import { deleteMovieService } from "../service/deleteMovie.service";
import { updateMovieService } from "../service/updateMovie.service";

const createMovieContoller = async (request: Request, response: Response) => {
  const movieData: iMovie = request.body;

  const newMovie = await createMovieService(movieData);

  return response.status(201).json(newMovie);
};

const listMovieController = async (request: Request, response: Response) => {
  const movies = await listMovieService();

  return response.json(movies);
};

const updateMovieController = async (request: Request, response: Response) => {
  const movieData: iMovieUpdate = request.body;
  const movieId = parseInt(request.params.id);

  const updatedMovie = await updateMovieService(movieData, movieId);

  return response.json(updatedMovie);
};

const deleteMovieController = async (request: Request, response: Response) => {
  const movieId: number = parseInt(request.params.id);

  await deleteMovieService(movieId);

  return response.status(204).send();
};

export {
  createMovieContoller,
  listMovieController,
  updateMovieController,
  deleteMovieController,
};
