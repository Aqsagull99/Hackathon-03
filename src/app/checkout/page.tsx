"use client";

import React, { useState } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const CheckoutPage = () => {
  // Sample cart data (this can come from context, API, or props)
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Item 1", price: 20, quantity: 2 },
    { id: 2, name: "Item 2", price: 30, quantity: 1 },
  ]);

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Handle quantity update
  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-4 text-primary">Checkout</h1>
      <p className="text-lg text-gray-600">Complete your purchase below:</p>

      <div className="mt-6 bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>

        {/* Render dynamic cart items */}
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center mb-3 border-b pb-2"
          >
            <div>
              <p className="text-gray-700">{item.name}</p>
              <p className="text-sm text-gray-500">
                ${item.price} x {item.quantity}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() =>
                  updateQuantity(item.id, Math.max(1, item.quantity - 1))
                }
                className="px-2 py-1 bg-gray-200 text-gray-800 rounded"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="px-2 py-1 bg-gray-200 text-gray-800 rounded"
              >
                +
              </button>
            </div>
          </div>
        ))}

        {/* Display total price */}
        <p className="text-lg font-semibold text-gray-800 mt-4">
          Total: ${totalPrice}
        </p>

        {/* Payment Button */}
        <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-opacity-90 mt-4">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;

