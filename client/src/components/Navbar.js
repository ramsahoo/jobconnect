import React, { useState } from "react";
import "./Navbar.css";
import Logo from "./Logo.png";
import { Link } from "react-router-dom";

function Navbar() {

  return (
    <section className="navbar">
      <img src={Logo} alt="Logo" />

      <nav class="nav_links">
        <ul>
          <li>
            <Link to='/signup' className="signup">
              Sign Up
            </Link>
          </li>
          <li>
            <Link to='/signin' className="signin">
              Sign In
            </Link>
          </li>
          <li>
            <Link to='/home' className="home">
              Home
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Navbar;
