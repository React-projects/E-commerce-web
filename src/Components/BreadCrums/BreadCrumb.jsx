import React from "react";
import'./BreadCrumb.css'
import ArrowIcon from '../Assets/breadcrum_arrow.png'
function BreadCrumb(props) {
  const { product } = props;
  return <div className="breadcrumb">
		HOME <img src={ArrowIcon} alt="arrow-icon" />SHOP<img src={ArrowIcon} alt="arrow-icon" />{product.category}<img src={ArrowIcon} alt="arrow-icon" /> {product.name}
	</div>
}

export default BreadCrumb;
