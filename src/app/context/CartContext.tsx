/* eslint-disable */
"use client";
import React, { ReactNode, useState } from "react";
import CartContext from "./CartCreation";
// import CartContext from "./CartCreation";

const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  let [products, setProducts] = useState<any>([]);

  const addProduct = (product: any) => {
    setProducts((item: any) => [product, ...item]);
    return "Product has been added!"
  };
  const removeProduct = (id: string) => {
    setProducts(products.filter((product: any) => product._id !== id));
    return "Product has been removed!";
  };

  return (
    <CartContext.Provider value={{ products, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;