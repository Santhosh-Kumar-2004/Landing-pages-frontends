import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">

      {/* Top Banner */}
      <section className="contact-banner">
        <h1>Contact Us</h1>
      </section>

      {/* Contact Section */}
      <section className="contact-main">
        <div className="contact-left">
          <h2>Get in Touch</h2>
          <form>
            <input type="text" placeholder="Your Name*" required/>
            <input type="email" placeholder="Your Email*" required/>
            <input type="email" placeholder="Your Number" />
            <input type="text" placeholder="Subject" />
            <textarea rows="5" placeholder="Your Message" style={{ resize: 'none'}}></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-right">
          <div className="contact-grid">
            <div className="contact-item">
              <h4>Phone</h4>
              <p>+1 (123) 456-7890</p>
            </div>
            <div className="contact-item">
              <h4>Email</h4>
              <p>info@example.com</p>
            </div>
            <div className="contact-item">
              <h4>WhatsApp</h4>
              <p>+1 (987) 654-3210</p>
            </div>
            <div className="contact-item">
              <h4>Office</h4>
              <p>123 Main Street, New York, NY</p>
            </div>
          </div>

          {/* Google Map */}
          <div className="map-container">
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.5017495821645!2d-74.00594118459358!3d40.71277577933171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7a3a0460db7c1a5a!2sNew%20York!5e0!3m2!1sen!2sus!4v1600000000000"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="contact-cta">
        <div className="cta-overlay">
          <h2>Still have questions?</h2>
          <p>Our team is here to help. Let’s talk about your ideas and goals.</p>
          <button>Start Conversation</button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
