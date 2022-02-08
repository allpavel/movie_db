import React from 'react';

export const Arrows = ({ prevImage, nextImage }) => {
    return (
        <div className='arrows'>
            <span className='prev' onClick={prevImage}>&#10094;</span>
            <span className='prev' onClick={nextImage}>&#10095;</span>
        </div>
    )
}