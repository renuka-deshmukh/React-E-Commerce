import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">

          {/* Company Info */}
          <div className="col-md-3 mb-4">
            <h4 className="fw-bold text-success">BlinkCart 🛒</h4>
            <p className="small">
              Your one-stop shop for groceries, fashion, and essentials — 
              delivered fast at your doorstep!
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/products" className="text-light text-decoration-none">Products</Link></li>
              <li><Link to="/cart" className="text-light text-decoration-none">Cart</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none">Contact Us</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Customer Service</h5>
            <ul className="list-unstyled">
              <li><Link to="/faq" className="text-light text-decoration-none">FAQs</Link></li>
              <li><Link to="/privacy" className="text-light text-decoration-none">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-light text-decoration-none">Terms & Conditions</Link></li>
              <li><Link to="/returns" className="text-light text-decoration-none">Return Policy</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Follow Us</h5>
            <div className="d-flex gap-3 fs-4">
              <a href="https://facebook.com" className="text-light"><FaFacebook /></a>
              <a href="https://instagram.com" className="text-light"><FaInstagram /></a>
              <a href="https://twitter.com" className="text-light"><FaTwitter /></a>
              <a href="https://linkedin.com" className="text-light"><FaLinkedin /></a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <hr className="border-light" />
        <div className="text-center small">
          © {new Date().getFullYear()} <span className="text-success">BlinkCart</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
