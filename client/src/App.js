import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
