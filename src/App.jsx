import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Projects } from "./components/Projects/Projects";
import React, { useState, useEffect } from "react";
import { animateCircles } from "./hooks/useCircleAnimation";
import { useMousePosition } from "./hooks/useMousePosition";
import Loader from "./components/Loader/Loader";
import { AnimatePresence } from "framer-motion";

function App() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const circlesRef = React.useRef([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // useEffect(() => {
  //   const circles = circlesRef.current;
  //   useMousePosition(circles, setCoords);
  // }, []);

  // useEffect(() => {
  //   animateCircles(circlesRef, coords);
  // }, [coords]);

  return (
    <Router>
      <AppContent
        isLoading={isLoading}
        circlesRef={circlesRef}
        styles={styles}
      />
    </Router>
  );
}

function AppContent({ isLoading, circlesRef, styles }) {
  const location = useLocation(); // useLocation must be inside the Router context

  return (
    <div className={styles.App}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {/* {Array.from({ length: 28 }).map((_, index) => (
            <div
              key={index}
              ref={(el) => (circlesRef.current[index] = el)}
              className={styles.circle}
            ></div>
          ))} */}
          <AnimatePresence>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </>
      )}
    </div>
  );
}

export default App;
