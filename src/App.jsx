import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import React, { useState, useEffect } from 'react';
import { animateCircles } from "./hooks/useCircleAnimation";
import { useMousePosition } from "./hooks/useMousePosition";
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const circlesRef = React.useRef([]);

  useEffect(() => {
    const circles = circlesRef.current;
    useMousePosition(circles, setCoords)
  }, []);

  useEffect(() => {
    animateCircles(circlesRef, coords);
  }, [coords]);

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={
          <>
            <Home />
            <div className={styles.App}>
              {Array.from({ length: 18 }).map((_, index) => (
                <div
                  key={index}
                  ref={(el) => (circlesRef.current[index] = el)}
                  className={styles.circle}
                ></div>
              ))}
              <ParallaxProvider >
                <Navbar />
              </ParallaxProvider>
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Contact />
            </div>
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
