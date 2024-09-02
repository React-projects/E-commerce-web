import React, { useState, useContext } from "react";

import "./Navbar.css";
import logo from "../Assets/logo.png";
import CartIcon from "../Assets/cart_icon.png";
import { NavLink } from "react-router-dom";
import { shopContext } from "../../Context/ShopContext";
function Navbar() {
  const [menu, setMenu] = useState("shop");
  const { numberItemsInCart } = useContext(shopContext);

  return (
    <div className="navbar">
      <NavLink style={{ textDecoration: "none" }} to="/">
        <div className="nav-logo">
          <img src={logo} alt="Logo-image" />
          <p> SHOPPER</p>
        </div>
      </NavLink>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <NavLink style={{ textDecoration: "none" }} to="/">
            {" "}
            Shop
          </NavLink>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <NavLink style={{ textDecoration: "none" }} to="/mens">
            {" "}
            Mens
          </NavLink>

          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("womans");
          }}
        >
          <NavLink to="womans" style={{ textDecoration: "none" }}>
            {" "}
            Womans
          </NavLink>
          {menu === "womans" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <NavLink to="/kids" style={{ textDecoration: "none" }}>
            {" "}
            kids
          </NavLink>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <NavLink to="/login">
          <button> login</button>
        </NavLink>
        <NavLink to="/cart">
          <img src={CartIcon} alt="cart-icon" />
        </NavLink>

        < div className="nav-cart-count">{numberItemsInCart()}</div>
      </div>
    </div>
  );
}

export default Navbar;
