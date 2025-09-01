import React from "react";

function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <h2>Simple Pricing</h2>
        <div className="pricing-card">
          <h3>Pro</h3>
          <p className="price">
            $99<span>/month</span>
          </p>
          <ul>
            <li>✔ Up to 100 nodes</li>
            <li>✔ Unlimited clusters</li>
            <li>✔ Priority support</li>
          </ul>
          <a href="#signup" className="btn">
            Start Free Trial
          </a>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
