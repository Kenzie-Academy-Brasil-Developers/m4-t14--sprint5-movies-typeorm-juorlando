import { Router } from "express";
import {
  createMovieContoller,
  deleteMovieController,
  listMovieController,
  updateMovieController,
} from "../controllers/movie.controller";
import { ensureValidateData } from "../middleware/ensureDataIsValid";
import { ensureName } from "../middleware/ensureMovieNameNotExist";
import { movieCreateSchema, movieUpdateSchema } from "../schemas/movies.schema";
import { ensureMovieExistsMiddleware } from "../middleware/ensureMovieExist.middleware";

const movieRoutes: Router = Router();

movieRoutes.post(
  "",
  ensureValidateData(movieCreateSchema),
  ensureName,
  createMovieContoller
);

movieRoutes.get("", listMovieController);

movieRoutes.delete("/:id", ensureMovieExistsMiddleware, deleteMovieController);

movieRoutes.patch(
  "/:id",
  ensureValidateData(movieUpdateSchema),
  ensureMovieExistsMiddleware,
  ensureName,
  updateMovieController
);


export { movieRoutes };
