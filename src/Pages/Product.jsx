import React, { useContext } from "react";
import "./Css/Product.css";
import { shopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import BreadCrumb from "../Components/BreadCrums/BreadCrumb";
import ProductDetails from "../Components/ProductData/ProductDetails";

function Product() {
  const { ProductData } = useContext(shopContext);
  const { productId } = useParams();
  const product = ProductData.find((e) => e.id === Number(productId));
  return (
    <div>
      <BreadCrumb product={product} />
      <ProductDetails product={product} />

    </div>
  );
}

export default Product;
