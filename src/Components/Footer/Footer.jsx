import React from "react";
import "./Footer.css";
import FooterLogo from "../Assets/logo_big.png";
import InstgramIcon from "../Assets/instagram_icon.png";
import PintesterIcon from "../Assets/pintester_icon.png";
import WhatsappIcon from "../Assets/whatsapp_icon.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={FooterLogo} alt="footer-logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li> Products</li>
        <li>Officer</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-socials">
        <div className="footer-icon-container">
          <img src={InstgramIcon} alt="instagram-Icon" />
        </div>
        <div className="footer-icon-container">
          <img src={PintesterIcon} alt="pintester-Icon" />
        </div>
        <div className="footer-icon-container">
          <img src={WhatsappIcon} alt="whatsapp-Icon" />
        </div>
      </div>
			<div className="footer-copyright">
				<hr />
				<p>Copyright @ 2024 - ALL Rights Reserved . </p>
			</div>
    </div>
  );
}

export default Footer;
