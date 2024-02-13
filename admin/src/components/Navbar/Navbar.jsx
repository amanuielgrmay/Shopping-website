import React from "react";
import "./Navbar.css";
import navlogo from "../../Assets/logo.png";
import navProfile from "../../Assets/nav-profile.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo-container">
        <div className="nav-logo-div">
          <img src={navlogo} alt="" className="nav-logo" />
        </div>
        <div className="nav-logo-text">
          <h3>SHOPPER</h3>
          <p>Admin Panel</p>
        </div>
      </div>
      <img src={navProfile} className="nav-profile" alt="" />
    </div>
  );
};

export default Navbar;
