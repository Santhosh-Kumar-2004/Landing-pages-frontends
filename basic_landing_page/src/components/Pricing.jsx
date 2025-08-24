import React from "react";
import "../styles/Pricing.css";

const PricingSection = () => {
  return (
    <section className="pricing-section">
      <h2 className="pricing-title">Our Pricing Plans</h2>
      <p className="pricing-subtitle">Choose the plan that fits your needs</p>
      <div className="pricing-cards">
        {/* Card 1 */}
        <div className="pricing-card glass">
          <h3>Basic</h3>
          <p className="price">$19<span>/month</span></p>
          <ul>
            <li>✔ 1 Project</li>
            <li>✔ 5 GB Storage</li>
            <li>✔ Community Support</li>
          </ul>
          <button className="btn-outline">Choose Basic</button>
        </div>

        {/* Card 2 (Featured) */}
        <div className="pricing-card glass featured">
          <h3>Pro</h3>
          <p className="price">$49<span>/month</span></p>
          <ul>
            <li>✔ 10 Projects</li>
            <li>✔ 50 GB Storage</li>
            <li>✔ Priority Support</li>
          </ul>
          <button className="btn-filled">Choose Pro</button>
        </div>

        {/* Card 3 */}
        <div className="pricing-card glass">
          <h3>Enterprise</h3>
          <p className="price">$99<span>/month</span></p>
          <ul>
            <li>✔ Unlimited Projects</li>
            <li>✔ 500 GB Storage</li>
            <li>✔ Dedicated Support</li>
          </ul>
          <button className="btn-outline">Choose Enterprise</button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
