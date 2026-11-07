import React from "react";
import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Skills } from "./components/Skills/Skills";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import Profiles from "./components/Profile/Profiles";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className={styles.app}>
      {/* Background ambient glowing auras */}
      <div className={styles.bgAura1}></div>
      <div className={styles.bgAura2}></div>

      {/* Fixed Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className={styles.mainContent}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Profiles />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
