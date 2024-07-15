import React, { useState, useEffect } from "react";

const Modal = ({ show, onClose, selectedItem }) => {
  const defaultPrice =
    selectedItem && selectedItem.price
      ? parseFloat(selectedItem.price.slice(1))
      : 0;
  const [drinkOptions, setDrinkOptions] = useState({
    size: "medium",
  });

  const [quantity, setQuantity] = useState(1);

  const optionPrices = {
    small: -0.5,
    medium: 0,
    large: 0.5,
  };

  const [selectedCombo, setSelectedCombo] = useState([]);
  const [ingredients, setIngredients] = useState({
    lettuce: "regular",
    tomato: "regular",
    cheese: "regular",
    bacon: "regular",
  });
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const [totalPrice, setTotalPrice] = useState(defaultPrice);

  const ingredientPrices = {
    cheese: 0.99,
    tomato: 1.18,
    bacon: 2.39,
  };

  useEffect(() => {
    if (selectedItem && selectedItem.price) {
      setTotalPrice(parseFloat(selectedItem.price.slice(1)) * quantity);
    }
  }, [selectedItem, quantity]);

  const handleComboSelection = (combo) => {
    setSelectedCombo((prevCombo) => {
      if (prevCombo.includes(combo)) {
        return prevCombo.filter((c) => c !== combo);
      } else {
        return [...prevCombo, combo];
      }
    });
  };

  const handleIngredientChange = (ingredient, value) => {
    const priceDifference =
      value === "extra" ? ingredientPrices[ingredient] || 0 : 0;
    const previousValue = ingredients[ingredient];

    if (previousValue === "extra" && value !== "extra") {
      setTotalPrice(
        (prevTotal) => prevTotal - (ingredientPrices[ingredient] || 0)
      );
    } else if (previousValue !== "extra" && value === "extra") {
      setTotalPrice((prevTotal) => prevTotal + priceDifference);
    }

    setIngredients((prevIngredients) => ({
      ...prevIngredients,
      [ingredient]: value,
    }));
  };

  const handleOptionChange = (option, value) => {
    setDrinkOptions((prevOptions) => ({
      ...prevOptions,
      [option]: value,
    }));

    const priceDifference =
      optionPrices[value] - optionPrices[drinkOptions[option]];
    setTotalPrice((prevTotal) => prevTotal + priceDifference);
  };

  const handleCheckboxChange = (ingredient) => {
    const newValue = ingredients[ingredient] === "none" ? "regular" : "none";
    handleIngredientChange(ingredient, newValue);
    setSelectedIngredient(ingredient);
  };

  const handleQuantityChange = (amount) => {
    const newQuantity = quantity + amount;
    if (newQuantity > 0) {
      setQuantity(newQuantity);
      setTotalPrice(parseFloat(selectedItem.price.slice(1)) * newQuantity);
    }
  };

  const handleAddToCart = () => {
    // Add logic to handle adding the item to the cart
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        data-testid="modal-background"
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div
        className="relative bg-white p-8 rounded-lg shadow-lg z-50 flex flex-col"
        style={{
          width: "40%",
          maxWidth: "900px",
          maxHeight: "90vh",
          borderRadius: "12px",
          overflowY: "auto",
        }}
      >
        <button
          className="absolute top-4 left-4 text-black text-3xl"
          onClick={onClose}
        >
          &times;
        </button>
        {selectedItem && (
          <div className="flex flex-col justify-between flex-grow">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2 mt-6">
                {selectedItem.name}
              </h2>
              <p className="text-gray-600 mb-2">{selectedItem.description}</p>
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              {selectedItem.categoryName === "Burgers" && (
                <div>
                  <p className="text-gray-800 font-bold mb-2">
                    Add to your meal
                  </p>
                  <div className="mb-4 flex justify-between">
                    <button
                      className={`relative border rounded-3xl p-5 flex items-center justify-center ${
                        selectedCombo.includes("fries")
                          ? "border-yellow-500"
                          : "border-gray-200"
                      } text-gray-700`}
                      onClick={() => handleComboSelection("fries")}
                      style={{ width: "50%", height: "20%" }}
                    >
                      <span className="mr-2 text-3xl">🍟</span>Fries
                      {selectedCombo.includes("fries") && (
                        <span className="absolute top-0 right-0 mt-1 mr-1 flex items-center justify-center w-6 h-6 rounded-full bg-yellow-500 text-white">
                          ✓
                        </span>
                      )}
                    </button>
                    <div className="mx-2"></div>
                    <button
                      className={`relative border rounded-3xl p-5 flex items-center justify-center ${
                        selectedCombo.includes("soda")
                          ? "border-yellow-500"
                          : "border-gray-200"
                      } text-gray-700`}
                      onClick={() => handleComboSelection("soda")}
                      style={{ width: "50%", height: "20%" }}
                    >
                      <span className="mr-2 text-3xl">🥤</span>Soda Fountain
                      {selectedCombo.includes("soda") && (
                        <span className="absolute top-0 right-0 mt-1 mr-1 flex items-center justify-center w-6 h-6 rounded-full bg-yellow-500 text-white">
                          ✓
                        </span>
                      )}
                    </button>
                  </div>
                  {(selectedCombo.includes("fries") ||
                    selectedCombo.includes("soda")) && (
                    <div className="mb-2 flex justify-between">
                      <button
                        className={`relative border rounded-3xl p-5 flex items-center justify-center ${
                          drinkOptions.size === "small"
                            ? "border-yellow-500"
                            : "border-gray-200"
                        } text-gray-700`}
                        onClick={() => handleOptionChange("size", "small")}
                        style={{ width: "30%" }}
                      >
                        <span className="mr-2 text-3xl">S</span>Small
                        {drinkOptions.size === "small" && (
                          <span className="absolute top-0 right-0 mt-1 mr-1 flex items-center justify-center w-6 h-6 rounded-full bg-yellow-500 text-white">
                            ✓
                          </span>
                        )}
                      </button>
                      <button
                        className={`relative border rounded-3xl p-5 flex items-center justify-center ${
                          drinkOptions.size === "medium"
                            ? "border-yellow-500"
                            : "border-gray-200"
                        } text-gray-700`}
                        onClick={() => handleOptionChange("size", "medium")}
                        style={{ width: "30%" }}
                      >
                        <span className="mr-2 text-3xl">M</span>Medium
                        {drinkOptions.size === "medium" && (
                          <span className="absolute top-0 right-0 mt-1 mr-1 flex items-center justify-center w-6 h-6 rounded-full bg-yellow-500 text-white">
                            ✓
                          </span>
                        )}
                      </button>
                      <button
                        className={`relative border rounded-3xl p-5 flex items-center justify-center ${
                          drinkOptions.size === "large"
                            ? "border-yellow-500"
                            : "border-gray-200"
                        } text-gray-700`}
                        onClick={() => handleOptionChange("size", "large")}
                        style={{ width: "30%" }}
                      >
                        <span className="mr-2 text-3xl">L</span>Large
                        {drinkOptions.size === "large" && (
                          <span className="absolute top-0 right-0 mt-1 mr-1 flex items-center justify-center w-6 h-6 rounded-full bg-yellow-500 text-white">
                            ✓
                          </span>
                        )}
                      </button>
                    </div>
                  )}
                  <div className="mt-2">
                    <p className="text-gray-800 font-bold mb-1">
                      Customize Ingredients
                    </p>
                    {Object.keys(ingredients).map((ingredient) => (
                      <div key={ingredient} className="mb-1 flex items-center">
                        <input
                          type="checkbox"
                          checked={ingredients[ingredient] !== "none"}
                          onChange={() => handleCheckboxChange(ingredient)}
                          className="mr-2 text-black"
                        />
                        <span className="mr-2 capitalize text-gray-900">
                          {ingredient}
                        </span>
                        {selectedIngredient === ingredient && (
                          <div className="flex space-x-2 ml-auto">
                            <button
                              className={`px-2 py-1 rounded text-sm ${
                                ingredients[ingredient] === "light"
                                  ? "bg-yellow-500 text-white"
                                  : "bg-gray-200"
                              }`}
                              onClick={() =>
                                handleIngredientChange(ingredient, "light")
                              }
                            >
                              Light
                            </button>
                            <button
                              className={`px-2 py-1 rounded text-sm ${
                                ingredients[ingredient] === "regular"
                                  ? "bg-yellow-500 text-white"
                                  : "bg-gray-200"
                              }`}
                              onClick={() =>
                                handleIngredientChange(ingredient, "regular")
                              }
                            >
                              Regular
                            </button>
                            <button
                              className={`px-2 py-1 rounded text-sm ${
                                ingredients[ingredient] === "extra"
                                  ? "bg-yellow-500 text-white"
                                  : "bg-gray-200"
                              }`}
                              onClick={() =>
                                handleIngredientChange(ingredient, "extra")
                              }
                            >
                              Extra (+${ingredientPrices[ingredient] || "0.00"})
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedItem.categoryName === "Drinks" && (
                <div>
                  <div>
                    <p className="text-gray-800 text-lg font-bold mb-2">
                      Customize Your Drink
                    </p>
                    <div className="mb-2">
                      <label className="block mb-1 text-gray-800">
                        Select Size
                      </label>
                      <select
                        className="bg-white text-black custom-select w-full p-2 border rounded appearance-none"
                        value={drinkOptions.size}
                        onChange={(e) =>
                          handleOptionChange("size", e.target.value)
                        }
                      >
                        <option value="small">Small (-$0.50)</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large (+$0.50)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {selectedItem.categoryName === "Desserts" && <div></div>}
            </div>
          </div>
        )}
        <div className="sticky bottom-0 right-0 p-4 border-t border-gray-200 bg-white flex items-center justify-between">
          <div className="flex items-center">
            <button
              className="bg-white border-2 border-black text-black rounded-full h-6 w-6 flex items-center justify-center mr-4"
              onClick={() => handleQuantityChange(-1)}
            >
              <span className="text-lg font-bold">-</span>
            </button>
            <span className="px-4 py-2 text-black bg-gray-200 rounded-xl">
              {quantity}
            </span>
            <button
              className="bg-white border-2 border-black text-black rounded-full h-6 w-6 flex items-center justify-center ml-4"
              onClick={() => handleQuantityChange(1)}
            >
              <span className="text-lg font-bold">+</span>
            </button>
          </div>
          <button
            className="bg-yellow-500 text-white py-3 px-9 rounded-2xl"
            onClick={handleAddToCart}
          >
            Add to cart - ${totalPrice.toFixed(2)}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
