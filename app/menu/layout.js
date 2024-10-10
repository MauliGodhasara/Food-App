"use client";
import { useCategory } from '../context/CategoryContext'; // Adjust path as necessary
import { useEffect, useState, Children } from 'react';

export default function MenuLayout({ children }) {
  const { selectedCategory, setSelectedCategory, categories } = useCategory();
  const [filteredItems, setFilteredItems] = useState([]);

  // useEffect(() => {
  //   const childrenArray = Children.toArray(children);

  //   // Debug: Log children and their props
  //   console.log("childrenArray", childrenArray);

  //   if (selectedCategory === 'all') {
  //     setFilteredItems(childrenArray);
  //   } else {
  //     console.log("Selected Category:", selectedCategory);
      
  //     const filtered = childrenArray.filter(item => {
  //       console.log("Item props:", item.props);
  //       const itemCategory = item.props?.category?.toString() || '';
  //       return itemCategory === selectedCategory;
  //     });
  //     console.log("Filtered Items:", filtered);
      
  //     setFilteredItems(filtered);
  //   }
  // }, [selectedCategory, children]);

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 min-h-screen p-6">
      <h2 className="text-center text-4xl font-bold text-white mb-6">Menu</h2>
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 mx-2 text-lg font-semibold text-white rounded-lg shadow-md transition-transform transform hover:scale-105 ${selectedCategory === 'all' ? 'bg-yellow-500' : 'bg-gray-700'} hover:bg-yellow-400`}
        >
          All
        </button>
        {Object.keys(categories || {}).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 mx-2 text-lg font-semibold text-white rounded-lg shadow-md transition-transform transform hover:scale-105 ${selectedCategory === category ? 'bg-yellow-500' : 'bg-gray-700'} hover:bg-yellow-400`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <div >
        {children}
      </div>
    </div>
  );
}
