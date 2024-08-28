import React from "react";
import "./NewCollections.css";
import NewCollectionsData from "../Assets/new_collections";
import Item from "../Item/Item";
function NewCollections() {
  return (
    <div className="new-collections">
      <h1> NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
			{NewCollectionsData.map((item, i) => {
          return (
            <Item key={i} id={item.id} name={item.name} images={item.image} new_price={item.new_price}  old_price={item.old_price}/>
          );
        })}
			</div>
    </div>
  );
}

export default NewCollections;