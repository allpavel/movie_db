import React, { useState, useEffect } from 'react';
import { sliderImage } from './images';
import { Arrows } from './Arrows/Arrows';
import { Dots } from './Dots/Dots';
import { CarouselContent } from './CarouselContent/CarouselContent';

export const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselLength = sliderImage.length - 1;

    const prevImage = () => {
        const previousImage = activeIndex < 1 ? carouselLength : activeIndex - 1;
        setActiveIndex(previousImage);
    };

    const nextImage = () => {
        const followingImage = activeIndex === carouselLength ? 0 : activeIndex + 1;
        setActiveIndex(followingImage);
    }

    const handleDotClick = (dotIndex) => {
        setActiveIndex(dotIndex);
    }

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setActiveIndex(activeIndex === carouselLength ? 0 : activeIndex + 1);
    //     }, 3000);
    //     return () => clearInterval(interval);
    // }, [activeIndex]);

    return (
        <>  
            <CarouselContent activeIndex={activeIndex} sliderImage={sliderImage} />
            <Arrows prevImage={prevImage} nextImage={nextImage} />
            <Dots activeIndex={activeIndex} sliderImage={sliderImage} onClick={handleDotClick} />
        </>
    )
}