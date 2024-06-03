"use client";
import React, { useState, useEffect } from 'react';
const images = [
  '/cheeseburger-8678826_1280.jpg',
  '/ice-cream-1274894_1280.jpg',
  '/drink-462776_1280.jpg',
];
const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };
  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => handleNext(), 3000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);
  return (
    <div className="relative w-full max-w-6xl h-[600px] mx-auto overflow-hidden bg-gray-100">
      <div className="carousel-inner relative w-full h-full flex">
        {images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
              index === activeIndex ? 'z-10 opacity-100' : 'z-0 opacity-0'
            }`}
          />
        ))}
      </div>
      <button
        type="button"
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 px-3 py-2 rounded-full bg-gray-800/70 hover:bg-gray-800/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white z-20"
        data-testid="prev-button"
      >
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        type="button"
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 px-3 py-2 rounded-full bg-gray-800/70 hover:bg-gray-800/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white z-20"
        data-testid="next-button"
      >
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              index === activeIndex ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setActiveIndex(index)}
            data-testid={`dot-${index}`}
          />
        ))}
      </div>
    </div>
  );
};
export default Carousel;
