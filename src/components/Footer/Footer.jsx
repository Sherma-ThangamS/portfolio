import React from "react";
import styles from "./Footer.module.css";
import {
  IconGithub,
  IconLinkedIn,
  IconMail,
  IconCode,
  IconArrowUp,
} from "../Icons/Icons";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <a href="#home" className={styles.logo}>
              <span className={styles.logoPrefix}>&lt;</span>
              <span className={styles.logoName}>Sherma</span>
              <span className={styles.logoDot}>.</span>
              <span className={styles.logoSuffix}>dev/&gt;</span>
            </a>
            <p className={styles.brandDesc}>
              Systems & Cloud Infrastructure Engineer focused on Linux virtualization, distributed backends, and hypervisor orchestration.
            </p>
          </div>

          <div className={styles.footerLinks}>
            <div className={styles.linksGroup}>
              <span className={styles.linksTitle}>Navigation</span>
              <ul className={styles.linksList}>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#feats">Feats</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className={styles.linksGroup}>
              <span className={styles.linksTitle}>Profiles</span>
              <ul className={styles.linksList}>
                <li>
                  <a
                    href="https://www.linkedin.com/in/sshermathangam/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Sherma-ThangamS"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://leetcode.com/u/SHERMA_THANGAM_S/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LeetCode
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.skillrack.com/faces/resume.xhtml?id=404936&key=ea67b0bd88fcf6de6c4fd1ec68d48af8f953ae4f"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SkillRack
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Sherma Thangam S. Crafted with passion & modern React.
          </p>

          <div className={styles.footerActions}>
            <div className={styles.socials}>
              <a
                href="https://github.com/Sherma-ThangamS"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="GitHub"
              >
                <IconGithub size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/sshermathangam/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="LinkedIn"
              >
                <IconLinkedIn size={16} />
              </a>
              <a
                href="mailto:sshermathangam@gmail.com"
                className={styles.socialBtn}
                aria-label="Email"
              >
                <IconMail size={16} />
              </a>
              <a
                href="https://leetcode.com/u/SHERMA_THANGAM_S/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="LeetCode"
              >
                <IconCode size={16} />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className={styles.backToTop}
              aria-label="Scroll to top"
            >
              <IconArrowUp size={16} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
