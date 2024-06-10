"use client";
import React, { useState } from "react";
import ItemCard from "./itemCard";

const MenuCards = ({ items, onCardClick }) => {
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
    .slice(currentIndex, currentIndex + 4)
    .concat(items.slice(0, Math.max(0, 4 - (items.length - currentIndex))));

  return (
    <div className="h-96 mx-auto">
      <div className="h-full flex justify-between items-center">
        <button onClick={prevSlide} className="text-3xl font-bold p-2">
          &lt;
        </button>
        <div className="h-full flex">
          {visibleItems.map((item, index) => (
            <div key={index} className="h-full">
              <ItemCard
                image={item.image}
                name={item.name}
                description={item.description}
                price={item.price}
                onClick={() => onCardClick(item)}
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
