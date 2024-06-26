import React from "react";

const MenuListItem = ({ name, description, price, onClick }) => {
  return (
    <div className="flex" onClick={onClick}>
      <div className="flex flex-col">
        <h2 className="font-bold">{name}</h2>
        <p className="my-1">{description}</p>
        <div>{price}</div>
      </div>
    </div>
  );
};

export default MenuListItem;
