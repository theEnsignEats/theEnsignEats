import React from "react";

const ItemCard = ({ image, name, description, price }) => {
  return (
    <div className="w-full h-full max-w-xs bg-white rounded-lg shadow-md overflow-hidden aspect-[3/4]">
      <img className="w-full h-3/5 object-cover" src={image} alt={name} />
      <div className="p-3">
        <h2 className="text-black text-xl text-black font-bold mb-2">{name}</h2>
        <p className="text-gray-700 text-base mb-4">{description}</p>
        <div className="text-black text-lg text-black font-semibold">
          {price}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
