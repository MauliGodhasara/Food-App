import Image from 'next/image';
import { useCart } from '../context/cartContext';

export default function FoodCard({ id, name, description, price, imageUrl, category }) {
  const { state, dispatch } = useCart();

  const itemInCart = state.items.find(item => item.id === id);

  const addToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { id, name, description, price, imageUrl, category },
    });
  };

  const removeFromCart = () => {
    dispatch({
      type: 'REMOVE_ALL',
      payload: { id },
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 flex flex-col h-full">
      <div className="relative w-full h-56">
        <Image
          src={imageUrl}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <p className="text-gray-500 text-sm">{category}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg font-bold">${price}</span>
          {itemInCart ? (
            <button
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              onClick={removeFromCart}
            >
              Remove from Cart
            </button>
          ) : (
            <button
              className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              onClick={addToCart}
            >
              Add to Cart
            </button>
          )}
        </div>

        {itemInCart && (
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center space-x-2">
              <button
                className="px-2 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: { id } })}
              >
                -
              </button>
              <span className="text-lg">{itemInCart.quantity}</span>
              <button
                className="px-2 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                onClick={() => dispatch({ type: 'ADD_ITEM', payload: itemInCart })}
              >
                +
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
