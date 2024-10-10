import React from 'react';
import Image from 'next/image';
import { useCart } from '../context/cartContext';

const CartModal = ({ isOpen, onClose }) => {
  const { state, dispatch } = useCart();

  const getTotalPrice = () => {
    return state.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg animate-fadeIn">
        <h2 className="text-xl font-semibold mb-4 text-center">Your Cart</h2>
        {state.items.length === 0 ? (
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-700 animate-fadeIn">Your cart is empty!</p>
            <button
              className="mt-6 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors animate-fadeIn"
              onClick={onClose}
            >
              Continue Browsing
            </button>
          </div>
        ) : (
          <>
            <ul>
              {state.items.map((item) => (
                <li key={item.id} className="mb-4 flex items-center">
                  <div className="relative w-16 h-16 mr-4 flex-shrink-0">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <button
                        className="px-2 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                        onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: { id: item.id } })}
                      >
                        -
                      </button>
                      <span className="text-lg">{item.quantity}</span>
                      <button
                        className="px-2 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                        onClick={() => dispatch({ type: 'ADD_ITEM', payload: item })}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="text-right flex flex-col items-end">
                    <span className="block text-lg font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <button
                      className="mt-2 px-2 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                      onClick={() => dispatch({ type: 'REMOVE_ALL', payload: { id: item.id } })}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-lg font-semibold">${getTotalPrice()}</span>
            </div>
         
    
        <button
          className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          onClick={onClose}
        >
          Close
        </button>
        </>
            )}
      </div>
    </div>
  );
};

export default CartModal;
