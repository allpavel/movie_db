import { useState, useEffect } from "react";
import MovieService from "../API/MovieService";

export const useGetMovie = (id) => {
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [loadError, setLoadError] = useState(false);

    const getMovies = async (id) => {
        try {
            const response = await MovieService.getMovieById(id);
            setMovie(response);
        } catch (error) {
            setLoadError(error);
        } finally {
            setIsLoading(false);
        };
    };
    
    useEffect(() => {
        getMovies(id);
    }, []);

    console.log('useGetMovie');

    return {movie, isLoading, loadError};
}