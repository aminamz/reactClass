import React, { useContext, useState } from "react";
import { CartContext, useCart } from "../context/CartContext";

export default function Cart() {
  const { cartItems } = useCart();
  
  console.log(cartItems);
  
  return (
    <div>
      Cart
      <button>add new </button>
    </div>
  );
}
