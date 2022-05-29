import React, { useState } from "react";
import "./Navbar.css";
import Logo from "./Logo.png";

function Navbar() {
  return (
    <section className="navbar">
      <img src={Logo} alt="Logo" />


     <nav class="nav_links">
    <ul>
    <li><a href="#">Sign Up</a></li>
      <li><a href="#">Sign Up</a></li>
      <li><a href="#">Home</a></li>
    </ul>
  </nav>
     
  </section>
  );
}

export default Navbar;
