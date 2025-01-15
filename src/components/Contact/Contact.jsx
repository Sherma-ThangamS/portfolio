import React from "react";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import { useNavigate } from "react-router-dom";
import Back from "../Icons/Back";

export const Contact = () => {
  const navigate=useNavigate();
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:sshermathangam@gmail.com">sshermathangam@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/sherma-thangam-s-a9815825a/">linkedin.com/sherma-thangam-s</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Sherma-ThangamS">github.com/Sherma-ThangamS</a>
        </li>
      </ul>
    </footer>
  );
};
