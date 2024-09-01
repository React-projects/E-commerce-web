import React from "react";
import "./NewLetter.css";
function NewLetter() {
  return (
    <div className="new-Letter">
      <h1>Get Exclusive Offer on Your Email</h1>
      <p>Subscribe to NewLetter and Stay Update</p>
      <div className="subscribe-input">
        <input type="email" placeholder="Your Email ..."   aria-label="Close" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default NewLetter;
