import React, { useContext } from "react";
import "./Css/ShopCategory.css";
import { shopContext } from "../Context/ShopContext";
import DropdownIcon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
function ShopCategory(props) {
  const { ProductData } = useContext(shopContext);
  return (
    <div className="shop-category">
      <img
        className="shopcategory-banner"
        src={props.banner}
        alt="category-banner"
      />
      <div className="shopcategory-indexsort">
        <p>
          <span> showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort By
          <img src={DropdownIcon} alt="dropdown-icon" />
        </div>
      </div>

      <div className="shopcategory-product">
        {ProductData.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                images={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-Loading">Explore More</div>
    </div>
  );
}

export default ShopCategory;
