import React, { useState } from "react";
import styles from "./Form.module.css";

const InputField = ({ label, type, name, value, onChange, placeholder }) => (
  <div className={styles.section}>
    <div className={`${styles.titleContainer}`}>
      <span className={styles.title}>{label}</span>
      <span className={styles.asterisk}>*</span>
    </div>
    <div className={styles.inputContainer}>
      <input
        type={type}
        name={name}
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
    influencerStatus: "",
    socialMediaPresence: "",
    followerCount: "",
    collaborationInterest: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3001/form/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response data:", data);
        alert(JSON.stringify(data, null, 2));
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to send data: " + error.message);
      });
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Are you an influencer?"
          type="text"
          name="influencerStatus"
          value={formData.influencerStatus}
          onChange={handleChange}
          placeholder="Yes or No"
        />
        <InputField
          label="Social Media Presence"
          type="text" // Changed from "email" to "text"
          name="socialMediaPresence"
          value={formData.socialMediaPresence}
          onChange={handleChange}
          placeholder="Your primary social media platform"
        />
        <InputField
          label="Follower Count"
          type="tel"
          name="followerCount"
          value={formData.followerCount}
          onChange={handleChange}
          placeholder="Approximate number of followers"
        />
        {/* Collaboration Interest Field */}
        <div className={styles.section}>
          <div className={styles.titleContainer}>
            <span className={styles.title}>Interest in Collaboration</span>
            <span className={styles.asterisk}>*</span>
          </div>
          <div className={styles.inputContainer}>
            <textarea
              name="collaborationInterest"
              value={formData.collaborationInterest}
              onChange={handleChange}
              className={styles.inputText}
              placeholder="Describe your interest in collaborations"
            />
          </div>
        </div>
        {/* Buttons */}
        <div className={styles.buttonContainer}>
          <button
            type="submit"
            className={`${styles.button} ${styles.submitButton}`}
          >
            Submit
          </button>
          <button
            type="button"
            className={`${styles.button} ${styles.connectButton}`}
          >
            Connect Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
