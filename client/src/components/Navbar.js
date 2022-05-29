import React, { useState } from "react";
import "./Navbar.css";
import Logo from "./Logo.png";
import { Button } from "./Button";

function Navbar() {
  const [button, setButton] = useState(true);

  return (
    <section className="navbar">
      <img src={Logo} alt="Logo" />

      <nav class="nav_links">
        <ul>
          <li>
            <a href="./components/SignUp.js" className="sign-up">
              Sign Up
            </a>
          </li>
          <li>
            <a href="./components/SignIn.js" className="sign-in">
              Sign In
            </a>
          </li>
          <li>
            <a href="#" className="home">
              Home
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Navbar;
