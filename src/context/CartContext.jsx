import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return <CartContext.Provider value={{ cartItems, addItemToCart, clearCart }}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
