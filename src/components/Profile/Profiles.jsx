import React from "react";
import styles from "./Profiles.module.css";
import profilesData from "../../data/profile.json";
import {
  IconTrophy,
  IconCode,
  IconExternal,
  IconSparkles,
  IconBrain,
} from "../Icons/Icons";
import { motion } from "framer-motion";

export const Profiles = () => {
  const getPlatformIcon = (iconName) => {
    switch (iconName) {
      case "research":
        return <IconBrain size={22} />;
      case "skillrack":
      case "gfg":
      case "leetcode":
      case "codechef":
      case "codeforces":
      default:
        return <IconCode size={22} />;
    }
  };

  const honors = [
    {
      icon: "🥈",
      title: "BITS Pilani Hackathon (2nd Place)",
      description: "Led a 10-member engineering team to 2nd place at BITS Pilani developing a real-time task planner (Mar 2025).",
    },
    {
      icon: "🏆",
      title: "Smart India Hackathon (SIH 2024)",
      description: 'Finalist / Built "Shinka Jinzai", an AI frame interpolation & video generation system for warehouse logistics.',
    },
    {
      icon: "📄",
      title: "Published Researcher",
      description: 'Co-authored research on "AI Hologram Video Generator" converting 2D video into 3D holograms (Semantic Scholar / ResearchGate).',
    },
    {
      icon: "🥇",
      title: "Technical Symposia & Project Expos",
      description: "Won prizes in state & national level collegiate symposiums including CSI Chennai & SRM Easwari events.",
    },
  ];

  return (
    <section id="feats" className={styles.featsSection}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionBadge}>
          <IconTrophy size={14} />
          <span>Milestones</span>
        </div>
        <h2 className={styles.sectionTitle}>Feats & Coding Profiles</h2>
        <p className={styles.sectionSubtitle}>
          Demonstrated algorithmic excellence, competitive problem solving, and published research.
        </p>
      </div>

      <div className={styles.container}>
        <div className={styles.profilesGrid}>
          {profilesData.map((item, index) => (
            <motion.a
              key={index}
              href={item.profile_url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.profileCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              style={{ "--card-accent": item.accent || "var(--color-primary)" }}
            >
              <div className={styles.cardTop}>
                <div className={styles.iconContainer}>
                  {getPlatformIcon(item.icon)}
                </div>
                <div className={styles.badgeWrapper}>
                  <span className={styles.platformBadge}>{item.stats}</span>
                  <div className={styles.externalIcon}>
                    <IconExternal size={15} />
                  </div>
                </div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.platformName}>{item.platform}</h3>
                <div className={styles.highlightBadge}>{item.badge}</div>
                <p className={styles.platformInfo}>{item.info}</p>
              </div>

              <div className={styles.cardFooter}>
                <span className={styles.verifyLink}>Verify Credentials &rarr;</span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Competition & Hackathon Highlights */}
        <div className={styles.awardsBox}>
          <h4 className={styles.awardsTitle}>
            <IconSparkles size={18} className={styles.trophyIcon} />
            <span>Hackathons & Honors</span>
          </h4>
          <div className={styles.awardsList}>
            {honors.map((honor, index) => (
              <div key={index} className={styles.awardItem}>
                <span className={styles.awardBullet}>{honor.icon}</span>
                <div>
                  <strong>{honor.title}</strong>: {honor.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profiles;
