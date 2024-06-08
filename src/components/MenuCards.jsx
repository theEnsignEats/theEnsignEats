"use client";
import React, { useState } from "react";
import ItemCard from "./itemCard";

const MenuCards = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const visibleItems = items
    .slice(currentIndex, currentIndex + 3)
    .concat(items.slice(0, Math.max(0, 3 - (items.length - currentIndex))));

  return (
    <div className="h-96 relative max-w-5xl mx-auto">
      <div className="h-full flex justify-between items-center">
        <button onClick={prevSlide} className="text-3xl font-bold p-2">
          &lt;
        </button>
        <div className="h-full flex space-x-3">
          {visibleItems.map((item, index) => (
            <div key={index} className="h-full flex-shrink-3 w-1/3">
              <ItemCard
                image={item.image}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            </div>
          ))}
        </div>
        <button onClick={nextSlide} className="text-3xl font-bold p-2">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default MenuCards;
