import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { useParallax } from "react-scroll-parallax";
import { Navbar } from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./Home";
import { About } from "../About/About";
import { Experience } from "../Experience/Experience";
import { Projects } from "../Projects/Projects";
import { Contact } from "../Contact/Contact";

export const Hero = () => {
  const [toggle, setToggle] = useState(false);
  const [page, setPage] = useState("Home");
  useEffect(() => {
    setToggle(false)
  }, [])

  const navigate = useNavigate();
  useEffect(() => {
    const container = document.querySelector(`.${styles.containerHero}`);
    const containerContent = document.querySelector(`.${styles.containerContent}`)
    if (container) {
      container.classList.toggle(styles.active, toggle);
    }
    if (containerContent) {
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
      <div className={styles.hero} onClick={() => (toggle) ? setToggle(!toggle) : "toggle"}>
        <Navbar toggle={toggle} setToggle={setToggle} />
        <section className={styles.containerHero}>
          <section className={styles.mainHero}>
            <div className={styles.contentHero}>
              <div className={styles.containerContent}>
                {page === "Home" && <Home />}
                {page === "About" && <About />}
                {page === "Experience" && <Experience />}
                {page === "Projects" && <Projects />}
                {page === "Contact" && <Contact />}
              </div>
            </div>
            <div className={`${styles.shadow} ${styles.one}`}></div>
            <div className={`${styles.shadow} ${styles.two}`}></div>
          </section>
          <div className={styles.links}>
            <ul
              onClick={() => { setToggle(!toggle) }}
            >
              <li>
                <button onClick={() => setPage("Home")} style={page==="Home"? {'color':'red'}:{}}>Hero</button>
              </li>
              <li>
                <button onClick={() => setPage("About")} style={page==="About"? {'color':'red'}:{}}>About</button>
              </li>
              <li>
                <button onClick={() => setPage("Experience")} style={page==="Experience" ? {'color':'red'}:{}}>Experience</button>
              </li>
              <li>
                <button onClick={() => setPage("Projects")} style={page==="Projects" ? {'color':'red'}:{}}>Projects</button>
              </li>
              <li>
                <button onClick={() => setPage("Contact")} style={page==="Contact"? {'color':'red'}:{}}>Contact</button>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </motion.div>
  );
};
