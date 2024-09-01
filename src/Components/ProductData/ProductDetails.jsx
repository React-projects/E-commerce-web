import React from "react";
import "./ProductDetails.css";
import StarIcon from "../Assets/star_icon.png";
import StarDullIcon from "../Assets/star_dull_icon.png";
function ProductDetails(props) {
  const { product } = props;
  return (
    <div className="productdetails">
      <div className="productdetails-left">
        <div className="productdetails-img-list">
          <img src={product.image} alt="product-image" />
          <img src={product.image} alt="product-image" />
          <img src={product.image} alt="product-image" />
          <img src={product.image} alt="product-image" />
        </div>

        <div className="productdetails-img">
          <img
            className="productdetails-main-img"
            src={product.image}
            alt="product-image"
          />
        </div>
      </div>

      <div className="productdetails-right">
        <h1>{product.name}</h1>
        <div className="productdetails-stars-rating">
          <img src={StarIcon} alt="star-icon" />
          <img src={StarIcon} alt="star-icon" />
          <img src={StarIcon} alt="star-icon" />
          <img src={StarIcon} alt="star-icon" />
          <img src={StarDullIcon} alt="star-icon" />
          <p>(122)</p>
        </div>
        <div className="productdetails-prices">
          <div className="productdetails-price-old">${product.old_price}</div>
          <div className="productdetails-price-new">${product.new_price}</div>
        </div>
        <div className="productdetails-description">
          A lightweight, usually knitted, pullover shirt, close-fitting and wi a
          round neckline and short sleeves, worn as an undershirt or outer
          garment.
        </div>
        <div className="productdetails-sizes">
          <h1>Select Size</h1>
          <div className="productdetails-select-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button>ADD TO CART</button>
        <p className="productdetails-category">
          <span>Category:</span> Women T -Shirt, Crop Topz
        </p>
        <p className="productdetails-category">
          <span>Tags:</span>Modern , Latest
        </p>
      </div>
    </div>
  );
}

export default ProductDetails;
