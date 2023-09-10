import React from "react";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <p>
        We would love to hear from you! Whether you have a question, feedback,
        or a collaboration opportunity, feel free to reach out to us.
      </p>
      <h2>Email</h2>
      <p>
        For general inquiries, please email us at{" "}
        <a href="mailto:mohssinaouladelhadj@gmail.com">
          mohssinaouladelhadj@gmail.com
        </a>
        .
      </p>
      <h2>WhatsApp</h2>
      <p>
        You can also reach us on WhatsApp at{" "}
        <a href="https://wa.me/1234567890">+212 624-643204</a>.
      </p>
      <p>
        Our team is dedicated to providing prompt and helpful responses. We look
        forward to hearing from you!
      </p>
    </div>
  );
};

export default Contact;
