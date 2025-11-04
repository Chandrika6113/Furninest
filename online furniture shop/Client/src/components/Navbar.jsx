import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);  // Track login state
  const navigate = useNavigate();

  // Check localStorage for initial login state
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!token);  // Set login state based on token existence
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');  // Remove token from localStorage
    setIsLoggedIn(false);  // Update login state
    navigate('/login');  // Redirect to homepage
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1 className="brand-name">FurniNest</h1>
      </div>

      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}><li>Home</li></NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active-link' : ''}><li>About</li></NavLink>
        <NavLink to="/shop" className={({ isActive }) => isActive ? 'active-link' : ''}><li>Shop</li></NavLink>
        <NavLink to="/cart" className={({ isActive }) => isActive ? 'active-link' : ''}><li>Cart</li></NavLink>
        <NavLink to="/wishlist" className={({ isActive }) => isActive ? 'active-link' : ''}><li>Wishlist</li></NavLink>
        <NavLink to="/orders" className={({ isActive }) => isActive ? 'active-link' : ''}><li>Orders</li></NavLink>
        {isLoggedIn ? (
          <li onClick={handleLogout} className="logout-btn">Logout</li>
        ) : (
          <NavLink to="/login" className={({ isActive }) => isActive ? 'active-link' : ''}><li>Login</li></NavLink>
        )}
      </ul>

      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>
    </nav>
  );
};

export default Navbar;
