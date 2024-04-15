import React from 'react';
import './Header.css'; // Make sure to create a corresponding CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo">LOGO</div>
      <nav className="navbar">
        <a href="/" className="nav-link">Home</a>
        <a href="/services" className="nav-link">Services</a>
        <div className="dropdown">
          <button className="dropbtn">Creators</button>
          <div className="dropdown-content">
            {/* Dropdown content links */}
          </div>
        </div>
        <a href="/pricing" className="nav-link">Pricing</a>
      </nav>
      <button className="contact-button">Contact Us</button>
    </header>
  );
};

export default Header;
