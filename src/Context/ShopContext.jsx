import React, { createContext } from "react";
import { useState } from "react";

import ProductData from "../Components/Assets/all_product.js";
export const shopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < ProductData.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};
const ShopContextProvider = (props) => {
  // !state  all products
  const [cartItems, SetCartItems] = useState(getDefaultCart());
  //!function add to cart
  const addToCart = (itemId) => {
    SetCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  };
  //!function remove from cart

  const removeFromCart = (itemId) => {
    SetCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  //!function  to all products total in cart

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = ProductData.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };
  //!function number items in cart
  const numberItemsInCart = () => {

    let numberItems = 0;
    for (const item in cartItems) {

      if (cartItems[item] > 0) {
        numberItems += cartItems[item];
      }
    }
    return numberItems;
  };

  const contextValue = {
    ProductData,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    numberItemsInCart,
  };

  return (
    <shopContext.Provider value={contextValue}>
      {props.children}
    </shopContext.Provider>
  );
};
export default ShopContextProvider;
