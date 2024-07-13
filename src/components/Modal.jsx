import React, { useState, useEffect } from "react";

const Modal = ({ show, onClose, selectedItem, onDelete }) => {
  const defaultPrice =
    selectedItem && selectedItem.price
      ? parseFloat(selectedItem.price.slice(1))
      : 0;

  const [selectedCombo, setSelectedCombo] = useState([]);
  const [ingredients, setIngredients] = useState({
    lettuce: "regular",
    tomato: "regular",
    cheese: "regular",
    bacon: "regular",
  });
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const [totalPrice, setTotalPrice] = useState(defaultPrice);
  const [view, setView] = useState('Burgers');

  const ingredientPrices = {
    cheese: 0.99,
    tomato: 1.18,
    bacon: 2.39,
  };

  useEffect(() => {
    if (selectedItem && selectedItem.price) {
      setTotalPrice(parseFloat(selectedItem.price.slice(1)));
    }
  }, [selectedItem]);

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

  const handleCheckboxChange = (ingredient) => {
    const newValue = ingredients[ingredient] === "none" ? "regular" : "none";
    handleIngredientChange(ingredient, newValue);
    setSelectedIngredient(ingredient);
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
          height: "95%",
          maxHeight: "95%",
          borderRadius: "12px",
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
              {selectedItem.categoryName === 'Burgers' && (
                <div>
                  <p className="text-gray-800 font-bold mb-2">Add to your meal</p>
                  <div className="mb-2 flex justify-between">
                    <button
                      className={`relative border rounded p-3 flex items-center justify-center ${
                        selectedCombo.includes("fries")
                          ? "border-yellow-500"
                          : "border-gray-200"
                      } text-gray-700`}
                      onClick={() => handleComboSelection("fries")}
                      style={{ width: "30%" }}
                    >
                      <span className="mr-2 text-3xl">🍟</span>Fries
                      {selectedCombo.includes("fries") && (
                        <span className="absolute top-0 right-0 mt-1 mr-1 flex items-center justify-center w-6 h-6 rounded-full bg-yellow-500 text-white">
                          ✓
                        </span>
                      )}
                    </button>
                    <button
                      className={`relative border rounded p-3 flex items-center justify-center ${
                        selectedCombo.includes("soda")
                          ? "border-yellow-500"
                          : "border-gray-200"
                      } text-gray-700`}
                      onClick={() => handleComboSelection("soda")}
                      style={{ width: "30%" }}
                    >
                      <span className="mr-2 text-3xl">🥤</span>Drinks
                      {selectedCombo.includes("soda") && (
                        <span className="absolute top-0 right-0 mt-1 mr-1 flex items-center justify-center w-6 h-6 rounded-full bg-yellow-500 text-white">
                          ✓
                        </span>
                      )}
                    </button>
                    <button
                      className={`relative border rounded p-3 flex items-center justify-center ${
                        selectedCombo.includes("iceCream")
                          ? "border-yellow-500"
                          : "border-gray-200"
                      } text-gray-700`}
                      onClick={() => handleComboSelection("iceCream")}
                      style={{ width: "30%" }}
                    >
                      <span className="mr-2 text-3xl">🍦</span>Desserts
                      {selectedCombo.includes("iceCream") && (
                        <span className="absolute top-0 right-0 mt-1 mr-1 flex items-center justify-center w-6 h-6 rounded-full bg-yellow-500 text-white">
                          ✓
                        </span>
                      )}
                    </button>
                  </div>
                  <div className="mt-2">
                    <p className="text-gray-800 font-bold mb-1">Customize Ingredients</p>
                    {Object.keys(ingredients).map((ingredient) => (
                      <div key={ingredient} className="mb-1 flex items-center">
                        <input
                          type="checkbox"
                          checked={ingredients[ingredient] !== "none"}
                          onChange={() => handleCheckboxChange(ingredient)}
                          className="mr-2 text-teal-900"
                        />
                        <span className="mr-2 capitalize text-gray-900">
                          {ingredient}
                        </span>
                        {selectedIngredient === ingredient && (
                          <div className="flex space-x-2 ml-auto">
                            <button
                              className={`px-2 py-1 rounded text-sm ${
                                ingredients[ingredient] === "light"
                                  ? "bg-teal-900 text-white"
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
                                  ? "bg-teal-900 text-white"
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
                                  ? "bg-teal-900 text-white"
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

              {selectedItem.categoryName === 'Drinks' && (
                <div>
                  <p className="text-gray-800 font-bold mb-2">Add to your meal</p>
                  <div className="mb-2 flex justify-between">
                    <button
                      className={`relative border rounded p-3 flex items-center justify-center ${
                        selectedCombo.includes("fries")
                          ? "border-yellow-500"
                          : "border-gray-200"
                      } text-gray-700`}
                      onClick={() => handleComboSelection("fries")}
                      style={{ width: "30%" }}
                    >
                      <span className="mr-2 text-3xl">🍟</span>Fries
                      {selectedCombo.includes("fries") && (
                        <span className="absolute top-0 right-0 mt-1 mr-1 flex items-center justify-center w-6 h-6 rounded-full bg-yellow-500 text-white">
                          ✓
                        </span>
                      )}
                    </button>
                    <button
                      className={`relative border rounded p-3 flex items-center justify-center ${
                        selectedCombo.includes("soda")
                          ? "border-yellow-500"
                          : "border-gray-200"
                      } text-gray-700`}
                      onClick={() => handleComboSelection("soda")}
                      style={{ width: "30%" }}
                    >
                      <span className="mr-2 text-3xl">🍔</span>Burgers
                      {selectedCombo.includes("soda") && (
                        <span className="absolute top-0 right-0 mt-1 mr-1 flex items-center justify-center w-6 h-6 rounded-full bg-yellow-500 text-white">
                          ✓
                        </span>
                      )}
                    </button>
                    <button
                      className={`relative border rounded p-3 flex items-center justify-center ${
                        selectedCombo.includes("iceCream")
                          ? "border-yellow-500"
                          : "border-gray-200"
                      } text-gray-700`}
                      onClick={() => handleComboSelection("iceCream")}
                      style={{ width: "30%" }}
                    >
                      <span className="mr-2 text-3xl">🍦</span>Desserts
                      {selectedCombo.includes("iceCream") && (
                        <span className="absolute top-0 right-0 mt-1 mr-1 flex items-center justify-center w-6 h-6 rounded-full bg-yellow-500 text-white">
                          ✓
                        </span>
                      )}
                    </button>
                  </div>
                  <div>
                    <p className="text-gray-800 font-bold mb-2">Customize Drink Size</p>
                    {/* Add content for drink customization */}
                    <p className="text-gray-600 mb-2">Drink customization options will go here.</p>
                  </div>
                </div>
              )}

              {selectedItem.categoryName === 'Desserts' && (
                <div>
                  <p className="text-gray-800 font-bold mb-2">Add to your meal</p>
                  <div className="mb-2 flex justify-between">
                    <button
                      className={`relative border rounded p-3 flex items-center justify-center ${
                        selectedCombo.includes("fries")
                          ? "border-yellow-500"
                          : "border-gray-200"
                      } text-gray-700`}
                      onClick={() => handleComboSelection("fries")}
                      style={{ width: "30%" }}
                    >
                      <span className="mr-2 text-3xl">🍟</span>Fries
                      {selectedCombo.includes("fries") && (
                        <span className="absolute top-0 right-0 mt-1 mr-1 flex items-center justify-center w-6 h-6 rounded-full bg-yellow-500 text-white">
                          ✓
                        </span>
                      )}
                    </button>
                    <button
                      className={`relative border rounded p-3 flex items-center justify-center ${
                        selectedCombo.includes("soda")
                          ? "border-yellow-500"
                          : "border-gray-200"
                      } text-gray-700`}
                      onClick={() => handleComboSelection("soda")}
                      style={{ width: "30%" }}
                    >
                      <span className="mr-2 text-3xl">🍔</span>Burgers
                      {selectedCombo.includes("soda") && (
                        <span className="absolute top-0 right-0 mt-1 mr-1 flex items-center justify-center w-6 h-6 rounded-full bg-yellow-500 text-white">
                          ✓
                        </span>
                      )}
                    </button>
                    <button
                      className={`relative border rounded p-3 flex items-center justify-center ${
                        selectedCombo.includes("iceCream")
                          ? "border-yellow-500"
                          : "border-gray-200"
                      } text-gray-700`}
                      onClick={() => handleComboSelection("iceCream")}
                      style={{ width: "30%" }}
                    >
                      <span className="mr-2 text-3xl">🥤</span>Drinks
                      {selectedCombo.includes("iceCream") && (
                        <span className="absolute top-0 right-0 mt-1 mr-1 flex items-center justify-center w-6 h-6 rounded-full bg-yellow-500 text-white">
                          ✓
                        </span>
                      )}
                    </button>
                  </div>
                  <div>
                    <p className="text-gray-800 font-bold mb-2">Customize Desserts</p>
                    <p className="text-gray-600 mb-2">Dessert customization options will go here.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        <div className="sticky bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-white flex space-x-2">
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded w-full mb-2"
            onClick={handleAddToCart}
          >
            Add to cart - ${totalPrice.toFixed(2)}
          </button>
          <button
            className="bg-red-500 text-white items-center w-10 h-10 rounded"
            onClick={() => onDelete(selectedItem.id)}
          >
            <svg
              fill="#ffffff"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="10 3 850 550"
              stroke="#ffffff"
              width="60"
              height="30"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <g>
                    <path
                      d="M381.163,57.799h-75.094C302.323,25.316,274.686,0,241.214,0c-33.471,0-61.104,25.315-64.85,57.799h-75.098
                          c-30.39,0-55.111,24.728-55.111,55.117v2.828c0,23.223,14.46,43.1,34.83,51.199v260.369c0,30.39,24.724,55.117,55.112,55.117
                          h210.236c30.389,0,55.111-24.729,55.111-55.117V166.944c20.369-8.1,34.83-27.977,34.83-51.199v-2.828
                          C436.274,82.527,411.551,57.799,381.163,57.799z M241.214,26.139c19.037,0,34.927,13.645,38.443,31.66h-76.879
                          C206.293,39.783,222.184,26.139,241.214,26.139z M375.305,427.312c0,15.978-13,28.979-28.973,28.979H136.096
                          c-15.973,0-28.973-13.002-28.973-28.979V170.861h268.182V427.312z M410.135,115.744c0,15.978-13,28.979-28.973,28.979H101.266
                          c-15.973,0-28.973-13.001-28.973-28.979v-2.828c0-15.978,13-28.979,28.973-28.979h279.897c15.973,0,28.973,13.001,28.973,28.979
                          V115.744z"
                    ></path>
                    <path
                      d="M171.144,422.863c7.218,0,13.069-5.853,13.069-13.068V262.641c0-7.216-5.852-13.07-13.069-13.07
                          c-7.217,0-13.069,5.854-13.069,13.07v147.154C158.074,417.012,163.926,422.863,171.144,422.863z"
                    ></path>
                    <path
                      d="M241.214,422.863c7.218,0,13.07-5.853,13.07-13.068V262.641c0-7.216-5.854-13.07-13.07-13.07
                          c-7.217,0-13.069,5.854-13.069,13.07v147.154C228.145,417.012,233.996,422.863,241.214,422.863z"
                    ></path>
                    <path
                      d="M311.284,422.863c7.217,0,13.068-5.853,13.068-13.068V262.641c0-7.216-5.852-13.07-13.068-13.07
                          c-7.219,0-13.07,5.854-13.07,13.07v147.154C298.213,417.012,304.067,422.863,311.284,422.863z"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
