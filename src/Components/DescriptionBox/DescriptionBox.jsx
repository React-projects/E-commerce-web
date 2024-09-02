import React from "react";
import "./DescriptionBox.css";
function DescriptionBox() {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
      <p>
          Ecommerce or "electronic commerce" is the trading of goods and
          services online. The internet allows individuals and businesses to buy
          and sell an increasing amount of physical goods, digital goods, and
          services electronically.
        </p>
        <p>
          Ecommerce offers people the convenience of shopping from their
          computers, phones, tablets, and other devices. They visit websites,
          social media pages, and other virtual channels to find what they’re
          looking for. Entrepreneurs, startups, small and medium-sized
          businesses, and large retailers can all use ecommerce to reach
          customers across the globe. Selling online might be a business’s sole
          revenue source, or it might be part of a multi-channel selling
          strategy. For example, a large brick-and-mortar retailer might adopt
          an online sales channel, or an entrepreneur might sell a small number
          of specialty handcrafted goods through a social media site like
          Facebook, Instagram, or Pinterest.
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox;
