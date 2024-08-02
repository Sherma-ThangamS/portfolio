import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { useParallax } from "react-scroll-parallax";
import { Navbar } from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const Hero = () => {
  const [toggle, setToggle]= useState(false);
  useEffect(()=>{
     setToggle(false)
  },[])
  
  const navigate=useNavigate();
  useEffect(() => {
    const container = document.querySelector(`.${styles.container}`);
    const containerContent=document.querySelector(`.${styles.containerContent}`)
    if (container) {
      container.classList.toggle(styles.active, toggle);
    }
    if(containerContent){
      containerContent.classList.toggle(styles.active, toggle);
    }
  }, [toggle]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
    <div className={styles.hero} onClick={()=>(toggle)? setToggle(!toggle):"toggle"}>
      <Navbar toggle={toggle} setToggle={setToggle} />
      <section className={styles.container}>
        <section className={styles.main}>
          <div className={styles.content}>
            <div className={styles.containerContent}>
              <div className={styles.contentText}>
                <h1 className={styles.title}>Hi, I'm SHERMA THANGAM S</h1>
                <p className={styles.description}>
                I am computer science student with a keen eye for detail and a robust understanding of web development technologies. My passion lies in applying my skills to practical projects. I consider myself to be a lifelong learner.
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
                </div>
            </div>
          <div className={`${styles.shadow} ${styles.one}`}></div>
          <div className={`${styles.shadow} ${styles.two}`}></div>
        </section>
        <div className={styles.links}>
      <ul
          onClick={() => {setToggle(!toggle)}}
        >
          <li>
            <button  onClick={()=>navigate("/about")}>About</button>
          </li>
          <li>
            <button  onClick={()=>navigate("/experience")}>Experience</button>
          </li>
          <li>
            <button  onClick={()=>navigate("/projects")}>Projects</button>
          </li>
          <li>
            <button onClick={()=>navigate("/contact")}>Contact</button>
          </li>
        </ul>
      </div>
      </section>
    </div>
     </motion.div>
  );
};
