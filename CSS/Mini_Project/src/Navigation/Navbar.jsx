//import React from 'react'
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div id="fullbar">
      <nav>
        <h1>Perfumy</h1>
        <ul>
          <Link id="home" to="/">
            Home |
          </Link>
          <Link id="products" to="/Products">
            Products|
          </Link>
          <Link id="about" to="/AboutUs">
            About Us|
          </Link>
          <Link id="contact" to="/ContactUs">
            Contact Us|
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
