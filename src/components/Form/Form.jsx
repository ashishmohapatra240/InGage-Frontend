import React, { useState } from 'react';
import styles from './Form.module.css';

// Example of a modular input component
const InputField = ({ label, type, value, onChange, placeholder }) => (
  <div className={styles.section}>
    <div className={`${styles.titleContainer}`}>
      <span className={styles.title}>{label}</span>
      <span className={styles.asterisk}>*</span>
    </div>
    <div className={styles.inputContainer}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={styles.inputText}
        placeholder={placeholder}
        aria-label={label}
      />
    </div>
  </div>
);

const Form = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (process.env.NODE_ENV === 'development') {
      console.log('Form Data:', formData);
    }
    // Additional form submission logic here
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <InputField label="Username" type="text" value={formData.username} onChange={handleChange} placeholder="Enter your username" />
        <InputField label="Email Address" type="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
        <InputField label="Phone Number" type="tel" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" />
        {/* Message Field */}
        <div className={styles.section}>
          <div className={styles.titleContainer}>
            <span className={styles.title}>Message</span>
            <span className={styles.asterisk}>*</span>
          </div>
          <div className={styles.inputContainer}>
            <textarea
              value={formData.message}
              onChange={handleChange}
              className={styles.inputText}
              placeholder="Your message"
            />
          </div>
        </div>
        {/* Buttons */}
        <div className={styles.buttonContainer}>
          <button type="submit" className={`${styles.button} ${styles.submitButton}`}>Submit</button>
          <button type="button" className={`${styles.button} ${styles.connectButton}`}>Connect Now</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
