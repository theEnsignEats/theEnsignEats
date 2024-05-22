"use client"
import React, { useState, useEffect } from 'react';

const images = [
  '/carousel1.jpg',
  '/carousel2.jpg',
  '/carousel3.webp',
  '/carousel4.webp',
];

const CTA = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-64 my-8 w-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
        </div>
      ))}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Our Restaurant</h1>
        <p className="mb-6">Crafted with love by Ensign College students, our burgers bring you the taste of passion and dedication. Join us for a delightful experience!</p>
        <button className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          See Our Menu
        </button>
      </div>
    </div>
  );
};

export default CTA;
