import React, { useState } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/images/Logo.png";

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <div className={styles.menuIcon} onClick={toggleNav}>
          ☰
        </div>
        <nav
          className={`${styles.navigation} ${
            isNavVisible ? styles.showNav : ""
          }`}
        >
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
    </header>
  );
};

export default Header;
