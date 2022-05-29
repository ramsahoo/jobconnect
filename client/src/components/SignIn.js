import React from "react";
import "./SignIn.css";
import Jcppl from "./jcppl.png";

function SignIn() {
  return (
    <section className="navbar">
      <span class="dot">
        <img class="jcppl" src={Jcppl} alt="jcppl" />
        <div class="form-container">
          <form class="register-form">
            <input
              id="first-name"
              class="form-field"
              type="text"
              placeholder="Username"
              name="username"
            />

            <input
              id="last-name"
              class="form-field"
              type="text"
              placeholder="Password"
              name="password"
            />

            <button class="form-field" type="submit">
              Sign In
            </button>
          </form>
        </div>
      </span>
    </section>
  );
}

export default SignIn;
