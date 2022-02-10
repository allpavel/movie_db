import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetMovie } from '../hooks/useGetMovie';

export const MoviePage = () => {
    const params = useParams();
    const { movie, isLoading, loadError } = useGetMovie(params.id);

    console.log('MoviePage');
    console.log(movie);

    return (
        <h1>Movie</h1>
    );
};
