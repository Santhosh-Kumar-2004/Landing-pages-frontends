import React from "react";
import "../styles/Testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-left">
        <h2>What Our Customers Say</h2>
        <p>
          Hear real experiences from people who’ve used our services to grow,
          streamline, and succeed.
        </p>
        <button className="view-more-btn">View More</button>
      </div>

      <div className="testimonial-right">
        <div className="testimonial-card">
          <img src="/assets/user1.jpg" alt="Customer 1" />
          <h4>Sarah J.</h4>
          <p>“An absolute game-changer! The team is super professional.”</p>
        </div>
        <div className="testimonial-card">
          <img src="/assets/user2.jpg" alt="Customer 2" />
          <h4>David L.</h4>
          <p>“Smooth experience and great support. Highly recommended!”</p>
        </div>
        <div className="testimonial-card">
          <img src="/assets/user3.jpg" alt="Customer 3" />
          <h4>Priya S.</h4>
          <p>“CreativeX made our vision come alive. Thank you!”</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
    