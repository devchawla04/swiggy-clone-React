import { useState } from "react";
import appLogo from "../assets/appLogo.png";
import { Link } from "react-router-dom";

import Shimmer from "./Shimmer";

const Navbar = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <>
      <div className="navbar">
        <div className="navLogo">
          <img src={appLogo} className="Logo" alt="Swiggy logo" />
        </div>
        <div>
          <ul className="navList">
            <li className="listItem">
              <Link className ="listItem" to="/">Home</Link>
            </li>
            <li className="listItem">
              <Link className ="listItem" to="/about">About Us</Link>
            </li>
            <li className="listItem">
            <Link className ="listItem" to="/contact">Contact Us</Link>
              </li>
            <li className="listItem">Cart</li>
            <button
              className="login"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
