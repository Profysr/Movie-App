"use client";
import styles from "@/app/styles/contact.module.css";
import { Mulish } from "next/font/google";
import { useState } from "react";

const mulish = Mulish({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});
const ContactForm = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phoneNo: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const handleChange = (e) => {
    try {
      const name = e.target.name;
      const val = e.target.value;
      return setUser((prevVal) => ({ ...prevVal, [name]: val }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Content_Type: "application/json",
        },
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          phoneNo: user.phoneNo,
          message: user.message,
        }),
      });
      if (response.status === 200) {
        setUser({
          username: "",
          email: "",
          phoneNo: "",
          message: "",
        });
        setStatus("success");
      } else if (response.status === 500) {
        setStatus("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.contact_section}>
      <h2>
        We 'd love to hear <span> from you</span>
      </h2>
      <form className={styles.contact_form} onSubmit={handleSubmit}>
        <div className={styles.input_field}>
          <label className={styles.label} htmlFor="username">
            Enter Your Name
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter Your Name"
              className={mulish.className}
              onChange={handleChange}
              value={user.username}
            />
          </label>
        </div>
        <div className={styles.input_field}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className={mulish.className}
            onChange={handleChange}
            value={user.email}
          />
        </div>
        <div className={styles.input_field}>
          <label className={styles.label} htmlFor="phoneNo">
            Phone No
          </label>
          <input
            type="text"
            name="phoneNo"
            id="phoneNo"
            placeholder="Enter Your Phone No"
            className={mulish.className}
            onChange={handleChange}
            value={user.phoneNo}
          />
        </div>
        <div className={styles.input_field}>
          <label className={styles.label} htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="5"
            placeholder="Your Message"
            className={mulish.className}
            onChange={handleChange}
            value={user.message}
          />
        </div>
        <div className={styles.mapping}>
          {status === "success" && (
            <p className={styles.success_msg}>Message sent Successfully</p>
          )}
          {status === "error" && (
            <p className={styles.error_msg}>
              There occurred an error while submitting your message
            </p>
          )}
        </div>
        <div>
          <button type="submit" className={mulish.className}>
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
