"use client";
import Image from 'next/image';
import FoodCard from '../components/FoodCard';
import { useCategory } from '../context/CategoryContext';
import { useState, useEffect } from 'react';

export default function MenuPage() {
  const [allItems, setAllItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const { selectedCategory } = useCategory();

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch('https://food-ordering-app-rust-three.vercel.app/foodItems.json', { cache: 'no-store' });
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        const categories = data?.categories || {};

        const items = Object.keys(categories).flatMap(category =>
          categories[category].map(item => (
            <FoodCard
              key={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              imageUrl={item.imageUrl}
              category={category}
              id={item.id}
            />
          ))
        );

        setAllItems(items);
        setFilteredItems(items);
      } catch (error) {
        console.error('Failed to load menu:', error);
      }
    }

    loadData();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredItems(allItems);
    } else {
      const filtered = allItems.filter(item => item.props.category === selectedCategory);
      setFilteredItems(filtered);
    }
  }, [selectedCategory, allItems]);

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {filteredItems.map(item => (
        <div key={item.props.id} className="flex-none w-full sm:w-1/2 lg:w-1/3 xl:w-1/5">
          {item}
        </div>
      ))}
       {/* <div className="relative flex items-center justify-center min-h-screen bg-gray-900">
      <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-md"></div>
      <Image
        src="/assets/Animation.gif"
        autoPlay
        className="absolute inset-0 object-cover"
        style={{ zIndex: 1 }}
        height={100}
        width={100}
      />
      <div className="relative z-10 text-white text-xl">Loading...</div>
    </div> */}
    </div>
  );
}
