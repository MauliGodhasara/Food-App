"use client";
import React from 'react';
import { useCart } from '../context/cartContext';


const Cart = () => {
  const { state, dispatch } = useCart();
  console.log("state", state);
  
  const getTotalPrice = () => {
    return state.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Cart</h2>
      <ul>
        {state.items.map(item => (
          <li key={item.id} className="mb-2 flex justify-between items-center">
            <span>{item.name} ({item.quantity})</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
            <button
              className="px-2 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              onClick={() => dispatch({ type: 'REMOVE_ALL', payload: { id: item.id } })}
            >
              Remove All
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-lg font-semibold">Total:</span>
        <span className="text-lg font-semibold">${getTotalPrice()}</span>
      </div>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        onClick={() => dispatch({ type: 'CLEAR_CART' })}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
