import React, { createContext } from "react";
 import ProductData from "../Components/Assets/all_product.js";

export const shopContext = createContext(null);
 const shopContextProvider = (props) => {
  const contextValue = { ProductData };
  return (
    <shopContext.Provider value={contextValue}>
      {props.children}
    </shopContext.Provider>
  );
};
export default shopContextProvider;
