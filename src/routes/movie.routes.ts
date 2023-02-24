import { Router } from "express";
import { createMovieContoller } from "../controllers/movie.controller";
import { ensureValidateData } from "../middleware/ensureDataIsValid";
import { ensureName } from "../middleware/ensureMovieNameNotExist";
import { movieSchema } from "../schemas/movies.schema";

const movieRoutes: Router = Router();

movieRoutes.post("", ensureValidateData(movieSchema), ensureName, createMovieContoller)

export { movieRoutes };
