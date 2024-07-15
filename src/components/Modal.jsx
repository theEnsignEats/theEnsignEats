import React, { useState, useEffect } from "react";

const Modal = ({ show, onClose, selectedItem }) => {

  const [order, setOrder] = useState(null);

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

  const handleAddToCart = async () => {
    // Prepare list of included and excluded ingredients with options
    const includedIngredients = [];
    const selectedOptions = [];
  
    Object.entries(ingredients).forEach(([ingredient, value]) => {
      if (value === "extra") {
        includedIngredients.push(`${ingredient.charAt(0).toUpperCase() + ingredient.slice(1)} (+Extra)`);
        selectedOptions.push(`${ingredient.charAt(0).toUpperCase() + ingredient.slice(1)} (+Extra)`);
      } else if (value === "regular") {
        includedIngredients.push(`${ingredient.charAt(0).toUpperCase() + ingredient.slice(1)} (Regular)`);
        selectedOptions.push(`${ingredient.charAt(0).toUpperCase() + ingredient.slice(1)} (Regular)`);
      } else if (value === "light") {
        includedIngredients.push(`${ingredient.charAt(0).toUpperCase() + ingredient.slice(1)} (Light)`);
        selectedOptions.push(`${ingredient.charAt(0).toUpperCase() + ingredient.slice(1)} (Light)`);
      }
    });
  
    // Create the cart item object
    const cartItem = {
      item: `${selectedItem.name} - ${selectedOptions.join(", ")}`,
      quantity: 1,
      price: parseFloat(totalPrice.toFixed(2)), // Ensure price is a number
    };
  
    // If order doesn't exist, create a new one
    if (!order) {
      const newOrder = {
        customerName: 'John Doe',  // Replace with actual customer data
        orderItems: [cartItem],
        orderTotal: cartItem.price,
      };
  
      // Update the local state with the new order
      setOrder(newOrder);
  
      // Log the new order object (for debugging)
      console.log('New Order:', newOrder);
  
      try {
        // Send newOrder to backend using POST request (for creating new order)
        const response = await fetch('/api/add-order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newOrder),
        });
  
        if (!response.ok) {
          throw new Error('Failed to add order');
        }
  
        const data = await response.json();
        console.log('Order successfully added:', data);
  
      } catch (error) {
        console.error('Error adding order:', error);
        // Handle error scenario (e.g., display error message to user)
      }
  
    } else {
      // Update existing order with new cart item and order total
      const updatedOrder = {
        ...order,
        orderItems: [...order.orderItems, cartItem],
        orderTotal: parseFloat((order.orderTotal + cartItem.price).toFixed(2)),
      };
  
      // Update local state with the updated order
      setOrder(updatedOrder);
  
      // Log the updated order object (for debugging)
      console.log('Updated Order:', updatedOrder);
  
      try {
        // Send updatedOrder to backend using PUT request (for updating existing order)
        const response = await fetch('/api/update-order', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedOrder),
        });
  
        if (!response.ok) {
          throw new Error('Failed to update order');
        }
  
        const data = await response.json();
        console.log('Order successfully updated:', data);
  
      } catch (error) {
        console.error('Error updating order:', error);
        // Handle error scenario (e.g., display error message to user)
      }
    }
  
    // Close the modal or perform other UI updates as needed
    onClose();
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
                  <span className="mr-2 text-3xl">🥤</span>Soda
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
                  <span className="mr-2 text-3xl">🍦</span>Ice Cream
                  {selectedCombo.includes("iceCream") && (
                    <span className="absolute top-0 right-0 mt-1 mr-1 flex items-center justify-center w-6 h-6 rounded-full bg-yellow-500 text-white">
                      ✓
                    </span>
                  )}
                </button>
              </div>
            </div>
            <div className="mt-2">
              <p className="text-gray-800 font-bold mb-1">Customize</p>
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
        <div className="sticky bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-white">
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded w-full"
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
