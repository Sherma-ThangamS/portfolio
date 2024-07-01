import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { useParallax } from "react-scroll-parallax";

export const Hero = () => {
  const parallax = useParallax<HTMLDivElement>({
    rotateY: [0, 360],
  });
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm SHERMA THANGAM S</h1>
        <p className={styles.description}>
        I'm a computer science student well-versed in both machine learning and frontend development.
        </p>
        <a href="mailto:sshermathangam@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/hero.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
