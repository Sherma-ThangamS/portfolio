import React from 'react'
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';
import { motion } from "framer-motion";

const Home = () => {
    return (
        <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className={styles.containerContentHome}
    >
    <>
            <div className={styles.contentText}>
                <h1 className={styles.title}>Hi, I'm SHERMA THANGAM S</h1>
                <p className={styles.description}>
                    I am computer science student with a keen eye for detail and a robust understanding of web development technologies. My passion lies in applying my skills to practical projects. I consider myself to be a lifelong learner.
                    <br />
                    <br />
                    As a quick learner, team player, and effective communicator, I bring focus and enthusiasm to every challenge. I thrive in collaborative environments and am driven by a passion for innovation and impactful solutions.
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
            </>
         </motion.div>
    )
}

export default Home