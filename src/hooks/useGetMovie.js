import { useState, useEffect } from "react";
import MovieService from "../API/MovieService";

export const useGetMovie = (id) => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  const getMovies = async (id) => {
    try {
      const movie = await MovieService.getMovieById(id);
      const credits = await MovieService.getMovieCredits(id);
      const directors = credits.crew.filter(
        (member) => member.job.toLowerCase() === "director"
      );
      setMovie({
        ...movie,
        actors: credits.cast,
        directors,
      });
    } catch (error) {
      setLoadError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMovies(id);
  }, [id]);

  return { movie, isLoading, loadError };
};
