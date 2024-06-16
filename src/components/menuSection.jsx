"use client";
import React, { useState } from "react";
import MenuCards from "./MenuCards";
import { MENU_ITEMS } from "../constants";

const MenuSection = ({ onCardClick }) => {
  return (
    <div className="mb-12">
      <div className="bg-purple-500r">
        <h1 className="w-fit mx-auto my-12 text-4xl text-white font-bold">
          Menu
        </h1>
        {MENU_ITEMS.map((category, index) => (
          <div key={index}>
            <h2 className=" text-orange-500 text-2xl font-bold m-16 mb-2">
              {category.categoryName}
            </h2>
            <MenuCards key={index} items={category.items} onCardClick={onCardClick} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
