import React, { useContext } from "react";
import "./CartItem.css";
import RemoveIcon from "../Assets/cart_cross_icon.png";
import { shopContext } from "../../Context/ShopContext";
const CartItems = () => {
  const { ProductData, cartItems, removeFromCart,getTotalCartAmount } = useContext(shopContext);
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {ProductData.map((product,i) => {
        if (cartItems[product.id] > 0) {
          return (
            <div key={i}>
              <div className="cartitems-format cartitems-format-main"  >
                <img
                  className="product-image"
                  src={product.image}
                  alt="cart-icon"
                />
                <p>{product.name}</p>
                <p>${product.new_price}</p>
                <button className="cartitems-quantity">
                  {cartItems[product.id]}
                </button>
                <p>${product.new_price * cartItems[product.id]}</p>
                <img
                  className="remove-icon"
                  src={RemoveIcon}
                  alt="remove-icon"
                  onClick={() => {
                    removeFromCart(product.id);
                  }}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-items">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
          </div>
          <div className="cartitems-total-items">
            <p>Shipping fee</p>
            <p>free</p>
          </div>
          <hr />
          <div className="cartitems-total-items">
            <p>Total</p>
            <p>${getTotalCartAmount()}</p>
            </div>
					<button>PROCESS TO CHECKOUT</button>
      </div>
      <div className="cartitems-promocode">
        <p>If you Have a PromoCode , Enter it here</p>

        <div className="cartitems-promobox">
          <input type="text" placeholder="Promo Code" aria-label="close" />
					<button>Submit</button>
        </div>
      </div>
        </div>
      
    </div>
  );
};

export default CartItems;
