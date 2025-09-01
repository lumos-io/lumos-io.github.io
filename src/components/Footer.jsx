import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <p>© {new Date().getFullYear()} KubeScale. All rights reserved.</p>
        <div className="footer-links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
