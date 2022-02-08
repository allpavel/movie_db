import React, { useEffect, useState } from 'react';
import MovieService from '../API/MovieService';
import { Carousel } from '../components/Carousel/Carousel';

export const Movies = () => {
    const [movies, setMovies] = useState();

    const getMovies = async () => {
        const movies = await MovieService.getPopularMovies();
        console.log(movies);
    }

    // useEffect(() => {
    //     getMovies();
    // }, [])

    return (
        <>
            <Carousel />
        </>
        
    )
};