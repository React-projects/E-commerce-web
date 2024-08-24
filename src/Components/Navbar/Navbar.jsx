import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import CartIcon from "../Assets/cart_icon.png";
function Navbar() {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo-image" />
        <p> SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          Shop {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          Mens{menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("womans");
          }}
        >
          Womans{menu === "womans" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          kids{menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button> login</button>
        <img src={CartIcon} alt="cart-icon" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
}

export default Navbar;
