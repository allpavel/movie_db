import { useState, useEffect } from 'react';
import MovieService from '../API/MovieService';

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
};

export const useGetPopularMovies = () => {
    const [movies, setMovies] = useState(initialState);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoadingMoreMovies, setIsLoadingMoreMovies] = useState(false);

    const getMovies = async (searchTerm = '', page) => {
        try {
            setIsLoading(true);
            const movies = await MovieService.getPopularMovies(searchTerm, page);
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
        setMovies(initialState)
        getMovies(searchTerm, 1);
    }, [searchTerm]);

    useEffect(() => {
        if (!isLoadingMoreMovies) return;
        getMovies(searchTerm, movies.page + 1);
        setIsLoadingMoreMovies(false);
    }, [isLoadingMoreMovies, movies.page, searchTerm]);

    return { movies, isLoading, error, searchTerm, setSearchTerm, setIsLoadingMoreMovies };
}