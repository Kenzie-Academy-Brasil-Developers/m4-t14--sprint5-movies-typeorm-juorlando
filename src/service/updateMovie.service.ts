import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Movie } from "../entities"
import {iUpdateMovie, iMovieUpdate} from "../interfaces"
import { returnMovieSchema } from "../schemas/movies.schema"

const updateMovieService =async (movieData: iMovieUpdate, movieId: number): Promise<iUpdateMovie | void> => {

    const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)


    const oldData = await movieRepository.findOneBy({
        id: movieId
    })

    const movie = movieRepository.create({
        ...oldData,
        ...movieData
    })

    await movieRepository.save(movie)

    const newMovie = returnMovieSchema.parse(movie)

    return newMovie
}

export {updateMovieService}