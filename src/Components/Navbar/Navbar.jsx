import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import CartIcon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
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
          <Link style={{textDecoration:'none'}} to="/"> Shop</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link style={{textDecoration:'none'}} to="/mens"> Mens</Link>

          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("womans");
          }}
        >
          <Link to="womans" style={{textDecoration:'none'}}> Womans</Link>
          {menu === "womans" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids" style={{textDecoration:'none'}}> kids</Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
    
          <button> login</button>
        </Link>
        <Link to="/cart">
    
        <img src={CartIcon} alt="cart-icon" />
        </Link>

        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
}

export default Navbar;
