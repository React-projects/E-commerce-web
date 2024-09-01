import React from "react";
import "./Css/LogInSighUp.css";
function LogIngSignUp() {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="username"  aria-label="Close"  />
          <input type="email" placeholder="your email " aria-label="Close"  />
          <input type="password" placeholder="your password"  aria-label="Close" />
        </div>
				<button> Create Account</button>
				<p className="loginsignup-login"> Already Have Account <span>LogIn Here</span></p>
				<div className="loginsignup-agree">
					<input type="checkbox" aria-label="Close"  name=""  id=""/>
					<p>by continuing , i Agree to the terms of use & privity policy</p>

				</div>
      </div>
    </div>
  );
}

export default LogIngSignUp;
