// Footer.js
import React from "react";
import styles from "./Footer.module.css"; // Assume we've created a corresponding CSS module
import logo from '../../assets/images/LogoWhite.png';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.blackBackground}></div>
      <div className={styles.footerContent}>
        <img
          className={styles.logo}
          src={logo}
          alt="Footer Logo"
        />
        <div className={styles.socialIcons}>
          {/* Social icons will go here */}
        </div>
        <div className={styles.divider}></div>
        <h2 className={styles.title}>Seasoned. Nimble. Remote.</h2>
        <p className={styles.description}>
          We’re a diverse and passionate team that takes ownership of your
          design and empower you to execute the roadmap. We stay light on our
          feet and truly enjoy delivering great work.
        </p>
        <div className={styles.buttonGroup}>
          {/* Button group will go here */}
        </div>
        <div className={styles.footerText}>
          © 2024 inGage Media. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
