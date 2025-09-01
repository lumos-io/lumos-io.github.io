import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <h1 className="logo">⚡KubeScale</h1>
        <ul className="nav-links">
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <a href="#signup" className="btn">
          Get Started
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
