"use client"
import { createContext, useContext, useState, useEffect } from 'react';

const CategoryContext = createContext();

export function CategoryProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [categories, setCategories] = useState({});

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch('https://food-ordering-app-rust-three.vercel.app/foodItems.json', { cache: 'no-store' });
        if (!res.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await res.json();
        setCategories(data?.categories || {});
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    }

    fetchCategories();
  }, []);

  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory, categories }}>
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategory() {
  return useContext(CategoryContext);
}
