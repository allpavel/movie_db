import { useState, useEffect } from 'react';
import MovieService from '../API/MovieService';

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
};

export const useGetMovies = () => {
    const [movies, setMovies] = useState(initialState);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const getMovies = async (page, searchTerm = '') => {
        try {
            setIsLoading(true);
            const movies = await MovieService.getPopularMovies(page, searchTerm);
            setMovies(prev => ({
                ...movies,
                results:
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }));
        } catch (e) {
            setError(true);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getMovies(1);
    }, []);

    return { movies, isLoading, error };
}