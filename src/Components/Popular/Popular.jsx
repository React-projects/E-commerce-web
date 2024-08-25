import React from "react";
import "./Popular.css";
import dataProduct from "../Assets/data";
import Item from "../Item/Item";

function Popular() {
  return (
    <div className="popular">
      <h1>POPULAR IN WOMAN</h1>
      <hr />
      <div className="popular-item">
        {dataProduct.map((item, i) => {
          return (
            <Item key={i} id={item.id} name={item.name} images={item.image} new_price={item.new_price}  old_price={item.old_price}/>
          );
        })}
      </div>
    </div>
  );
}

export default Popular;
