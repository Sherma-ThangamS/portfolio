import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { IconGithub, IconLinkedIn, IconMenu, IconClose } from "../Icons/Icons";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "about", "skills", "experience", "projects", "feats", "contact"];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Feats", href: "#feats", id: "feats" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
      <div className={styles.navContainer}>
        <a href="#home" className={styles.logo}>
          <span className={styles.logoPrefix}>&lt;</span>
          <span className={styles.logoName}>Sherma</span>
          <span className={styles.logoDot}>.</span>
          <span className={styles.logoSuffix}>dev/&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`${styles.navLink} ${
                    activeSection === link.id ? styles.navLinkActive : ""
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className={styles.headerActions}>
          <a
            href="https://github.com/Sherma-ThangamS"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            aria-label="GitHub Profile"
          >
            <IconGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/sshermathangam/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            aria-label="LinkedIn Profile"
          >
            <IconLinkedIn size={20} />
          </a>
          <a href="#contact" className={styles.ctaButton}>
            Let's Talk
          </a>
          <button
            className={styles.mobileToggle}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <IconClose size={24} /> : <IconMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`${styles.mobileDrawer} ${isOpen ? styles.mobileDrawerOpen : ""}`}>
        <ul className={styles.mobileNavList}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={`${styles.mobileNavLink} ${
                  activeSection === link.id ? styles.mobileNavLinkActive : ""
                }`}
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className={styles.mobileCtaWrapper}>
            <a href="#contact" className={styles.mobileCta} onClick={handleLinkClick}>
              Let's Connect
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
