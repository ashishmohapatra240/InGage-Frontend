// Header.js
import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/images/Logo.png";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img
          className={styles.logo}
          src={logo}
          alt="Logo"
        />
        <nav className={styles.navigation}>
          <a href="/" className={styles.navLink}>
            Home
          </a>
          <a href="/services" className={styles.navLink}>
            Services
          </a>
          <a href="/pricing" className={styles.navLink}>
            Pricing
          </a>
          <a href="/about" className={styles.navLink}>
            About
          </a>
        </nav>
        <button className={styles.contactButton}>Contact Us</button>
      </div>
    </div>
  );
};

export default Header;
