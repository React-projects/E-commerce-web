import React from 'react'
import './Offers.css'
import ExclusiveImage from '../Assets/exclusive_image.png'
function Offers() {
	return (
		<div className='offers'>
			<div className="offers-left">
				<h1>Exclusive</h1>
				<h1>Offer for you</h1>
				<p>ONLY ON BEST SELLER PRODUCT</p>
				<button>Check Now</button>
			</div>
			<div className="offers-right">
				<img src={ExclusiveImage} alt="exclusive-image" />
			</div>
		</div>
	)
}

export default Offers
