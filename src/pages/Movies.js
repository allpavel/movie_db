import React from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../API/config';
import { HeroImage } from '../components/HeroImage/HeroImage';
import { useGetMovies } from '../hooks/useGetMovies';


export const Movies = () => {
    const { movies, isLoading, error } = useGetMovies();

    return (
        <>  
            {movies.results[0]
                ? <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movies.results[0].backdrop_path}`}
                    title={movies.results[0].original_title}
                    description={movies.results[0].overview}
                />
                : <h1>Nothing to show</h1>}
            <h1>Home Page</h1>
        </>        
    )
};