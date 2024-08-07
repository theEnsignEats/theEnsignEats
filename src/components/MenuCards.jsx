"use client";
import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import MenuListItem from "./menuListItem";

const MenuCards = ({ items, onCardClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    <div className="md:h-96 mx-auto">
      <div
        className={`h-full flex ${
          isMobile ? "flex-col" : "justify-between items-center"
        }`}
      >
        {!isMobile && (
          <button onClick={prevSlide} className="text-3xl font-bold p-2">
            &lt;
          </button>
        )}
        <div className={`h-full ${isMobile ? "flex-col px-12 mb-12" : "flex"}`}>
          {isMobile
            ? items.map((item, index) => (
                <div key={index} className="my-5">
                  <MenuListItem
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    onClick={() => onCardClick(item)}
                  />
                </div>
              ))
            : visibleItems.map((item, index) => (
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
        {!isMobile && (
          <button onClick={nextSlide} className="text-3xl font-bold p-2">
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default MenuCards;
