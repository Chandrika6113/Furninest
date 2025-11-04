import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="footer-logo">
          <img
            src="/logo.png.jpg"
            alt="FurniNest Logo"
          />

          <p>Discover the perfect blend of comfort and elegance with FurniNest furniture. Make your home your haven.</p>
        </div>
      </div>
      <div className="footer-section">
        <h3>Main Menu</h3>
        <ul className="footer-links">
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/cart">Add to Cart</a></li>
          <li><a href="/wishlist">Wish List</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Contact</h3>
        <p>Email: contact@furninest.com</p>
        <p>Phone: +123 456 7890</p>
      </div>
    </footer>
  );
};

export default Footer;
