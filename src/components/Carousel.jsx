import React, { useState } from 'react';
import Banner1 from '/src/assets/images/banner-1.png';
import Banner2 from '/src/assets/images/banner-2.png';
import Banner3 from '/src/assets/images/banner-3.png';
const images = [Banner1, Banner2, Banner3];

const Carousel = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-lg ">
            {images.map((img, index) => (
                <img
                    key={index}
                    src={img}
                    alt={`Slide ${index}`}
                    className={`absolute top-0 left-0 sm:w-full sm:h-full object-cover transition-opacity duration-700 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'
                        }`}
                />
            ))}

            <button
                onClick={prevSlide}
                className="absolute  sm:top-1/2 top-[50px] left-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full text-sm sm:text-base"
            >
                ‹
            </button>
            <button
                onClick={nextSlide}
                className="absolute sm:top-1/2 top-[50px] right-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full text-sm sm:text-base"
            >
                ›
            </button>
        </div>

    );
};

export default Carousel;
