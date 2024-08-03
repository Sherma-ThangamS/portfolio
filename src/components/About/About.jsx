import React, { useEffect } from "react";
import { motion } from "framer-motion"; // Import motion
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import Back from "../Icons/Back";
import { defineElement } from "@lordicon/element";
import lottie from "lottie-web";
import { useNavigate } from "react-router-dom";

export const About = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
      // transition={{ duration: 0.5, ease: "easeInOut" }} // Add transition settings
    >
      <section className={styles.container} id="about">
        <div
          onClick={() => navigate("/")}
          style={{
            position: "absolute",
            left: "-150px",
            top: "-60px",
            cursor: "pointer",
          }}
        >
          <Back />
        </div>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
          <img
            src='https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/a6016a2f184edaf900a7f86fa3db9c30-1661328032/Chompers_Twitter/make-pixel-art-anime-style-game-style-additional-animation.gif'
            alt="Me sitting with a laptop"
            className={styles.aboutImage}
          />
          <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
              <img
                src={getImageUrl("about/cursorIcon.png")}
                alt="Cursor icon"
              />
              <div className={styles.aboutItemText}>
                <h3>Full Stack Developer</h3>
                <p>
                As a full-stack developer, I craft responsive, optimized
                applications with a keen eye for detail and design.
                </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
              <div className={styles.aboutItemText}>
                <h3>Machine Learning Engineer</h3>
                <p>
                  Passionate machine learning engineer with experience in
                  predictive modeling and generative modeling
                </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
              <div className={styles.aboutItemText}>
                <h3>Data Science</h3>
                <p>
                  I have hands-on experience in Pandas, NumPy, Scikit-Learn, and
                  TensorFlow, key tools for data manipulation, analysis, and
                  machine learning.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </motion.div>
  );
};
