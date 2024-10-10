"use client"
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

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);



  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-black p-4">
          <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
            <div className="text-white font-bold text-3xl mb-4 lg:mb-0 hover:text-orange-600 hover:cursor-pointer">
              Foodies
            </div>
            <div className="lg:hidden">
              <button className="text-white focus:outline-none">
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
            <div className="lg:flex lg:flex-row lg:space-x-4 lg:mt-0 mt-4 flex flex-col items-center text-xl">
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
