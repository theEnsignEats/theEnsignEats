import React from "react";

const ItemCard = ({ image, name, description, price, onClick }) => {
  return (
    <div
      className="mx-6 flex flex-col justify-between w-64 h-full min-h-96 bg-white rounded-lg overflow-hidden"
      onClick={onClick}
    >
      <img
        className="w-full h-56 object-cover overflow-hidden mb-2"
        src={image}
        alt={name}
      />

      <div className="h-max">
        <h2 className="text-black text-xl font-bold mb-2 px-3">{name}</h2>

        <p className="text-gray-700 text-sm mb-4 px-3">{description}</p>

        <div className="text-black text-lg font-semibold p-3">{price}</div>
      </div>
    </div>
  );
};

export default ItemCard;
