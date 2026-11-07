import React from "react";
import styles from "./Hero.module.css";
import {
  IconGithub,
  IconLinkedIn,
  IconMail,
  IconExternal,
  IconCode,
} from "../Icons/Icons";
import { HeroTerminal } from "./HeroTerminal";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.heroContainer}>
        {/* Left Column: Content */}
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className={styles.heroTitle}>
            Hi, I'm <span className={styles.gradientName}>Sherma Thangam S</span>
          </h1>

          <div className={styles.roleWrapper}>
            <span className={styles.rolePrefix}>Specializing in</span>
            <span className={styles.roleHighlight}>
              Systems Engineering & Cloud Infrastructure
            </span>
          </div>

          <p className={styles.heroDescription}>
            Systems & Cloud Infrastructure Engineer at <strong>Zoho Corporation</strong>. Focused on
            Linux virtualization (KVM, QEMU, Libvirt), hypervisor orchestration, and high-concurrency
            distributed backends. LeetCode Knight (Top 2% worldwide, 2,000+ rating).
          </p>

          {/* Action CTAs */}
          <div className={styles.ctaGroup}>
            <a href="#projects" className={styles.primaryBtn}>
              <span>Explore My Work</span>
              <IconExternal size={16} />
            </a>
            <a href="#contact" className={styles.secondaryBtn}>
              <IconMail size={16} />
              <span>Get In Touch</span>
            </a>
            <a
              href="https://www.linkedin.com/in/sshermathangam/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.outlineBtn}
            >
              <IconLinkedIn size={16} />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Social Links Row */}
          <div className={styles.socialRow}>
            <span className={styles.socialLabel}>Connect:</span>
            <a
              href="https://github.com/Sherma-ThangamS"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              title="GitHub Profile"
            >
              <IconGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/sshermathangam/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              title="LinkedIn Profile"
            >
              <IconLinkedIn size={18} />
            </a>
            <a
              href="mailto:sshermathangam@gmail.com"
              className={styles.socialIcon}
              title="Send an Email"
            >
              <IconMail size={18} />
            </a>
            <a
              href="https://leetcode.com/u/SHERMA_THANGAM_S/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              title="LeetCode Profile"
            >
              <IconCode size={18} />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Interactive Systems Terminal */}
        <motion.div
          className={styles.heroVisual}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <HeroTerminal />
        </motion.div>
      </div>

      {/* Highlights & Metrics Ribbon */}
      <div className={styles.statsRibbon}>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>Top 2%</span>
          <span className={styles.statLabel}>LeetCode Global (2,000+ Rating)</span>
        </div>
        <div className={styles.statDivider}></div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>900+</span>
          <span className={styles.statLabel}>Algorithmic Problems Solved</span>
        </div>
        <div className={styles.statDivider}></div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>Java SE 11</span>
          <span className={styles.statLabel}>Oracle Certified Professional</span>
        </div>
        <div className={styles.statDivider}></div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>BITS Pilani 🥈</span>
          <span className={styles.statLabel}>Hackathon 2nd Place (10-Member Lead)</span>
        </div>
      </div>
    </section>
  );
};
