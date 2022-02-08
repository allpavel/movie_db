import React from 'react';

export const CarouselContent = ({ sliderImage }) => {
    return (
        <section>
            {sliderImage.map((slide, index) => (
                <div key={index}>
                    <img src={slide.src} alt='' />
                    <h2>{slide.title}</h2>
                </div>
            ))}
        </section>
    )
}