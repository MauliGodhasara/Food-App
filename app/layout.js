"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import { CategoryProvider } from "./context/CategoryContext";

import CartModal from "./components/CartModal";
import { useState } from "react";
import { CartProvider } from "./context/cartContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // To handle the mobile menu

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // To toggle the menu on mobile

  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-black p-4">
          <div className="container mx-auto flex flex-row justify-between items-center">
            {/* Logo Section */}
            <div className="text-white font-bold text-3xl hover:text-orange-600 hover:cursor-pointer">
              Foodies
            </div>

            {/* Hamburger Button for Mobile */}
            <div className="lg:hidden">
              <button
                className="text-white focus:outline-none"
                onClick={toggleMenu}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex lg:flex-row lg:space-x-4 items-center text-xl">
              <a href="/" className="text-white px-4 py-2 hover:text-orange-600">
                Home
              </a>
              <a href="/menu" className="text-white px-4 py-2 hover:text-orange-600">
                Menu
              </a>
              <button
                className="relative text-white px-4 py-2 hover:text-orange-600"
                onClick={openCart}
              >
                Cart
              </button>
            </div>
          </div>

          {/* Mobile Menu - Conditional rendering */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 flex flex-col items-center space-y-2 text-lg">
              <a href="/" className="text-white px-4 py-2 hover:text-orange-600">
                Home
              </a>
              <a href="/menu" className="text-white px-4 py-2 hover:text-orange-600">
                Menu
              </a>
              <button
                className="relative text-white px-4 py-2 hover:text-orange-600"
                onClick={openCart}
              >
                Cart
              </button>
            </div>
          )}
        </nav>

        <CartProvider>
          <CategoryProvider>
            <div>{children}</div>
          </CategoryProvider>
          <CartModal isOpen={isCartOpen} onClose={closeCart} />
        </CartProvider>

        <Footer />
      </body>
    </html>
  );
}
