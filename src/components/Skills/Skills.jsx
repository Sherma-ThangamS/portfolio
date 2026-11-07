import React, { useState } from "react";
import styles from "./Skills.module.css";
import skillsData from "../../data/skills.json";
import { getImageUrl } from "../../utils";
import {
  IconBrain,
  IconCode,
  IconDatabase,
  IconLayers,
  IconSparkles,
} from "../Icons/Icons";
import { motion, AnimatePresence } from "framer-motion";

const SkillIcon = ({ imageSrc, title, category, getFallbackIcon }) => {
  const [imgError, setImgError] = useState(false);

  if (!imageSrc || imgError) {
    return <div className={styles.customIcon}>{getFallbackIcon(category)}</div>;
  }

  return (
    <img
      src={getImageUrl(imageSrc)}
      alt={title}
      className={styles.skillImage}
      onError={() => setImgError(true)}
    />
  );
};

export const Skills = () => {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Skills" },
    { id: "systems", label: "Systems & Infra" },
    { id: "backend", label: "Backend & DB" },
    { id: "languages", label: "Languages" },
    { id: "frontend", label: "Frontend" },
    { id: "ai", label: "Applied AI" },
  ];

  const filteredSkills =
    filter === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === filter);

  const getFallbackIcon = (category) => {
    switch (category) {
      case "systems":
        return <IconLayers size={22} />;
      case "ai":
        return <IconBrain size={22} />;
      case "frontend":
        return <IconCode size={22} />;
      case "backend":
        return <IconDatabase size={22} />;
      default:
        return <IconCode size={22} />;
    }
  };

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionBadge}>
          <IconSparkles size={14} />
          <span>Technical Arsenal</span>
        </div>
        <h2 className={styles.sectionTitle}>Skills & Competencies</h2>
        <p className={styles.sectionSubtitle}>
          Specialized in Linux virtualization, high-concurrency backends, and low-latency systems.
        </p>
      </div>

      <div className={styles.container}>
        {/* Category Tabs */}
        <div className={styles.tabsWrapper}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.tabBtn} ${filter === cat.id ? styles.tabBtnActive : ""}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div layout className={styles.skillsGrid}>
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                className={styles.skillCard}
              >
                <div className={styles.skillIconContainer}>
                  <SkillIcon
                    imageSrc={skill.imageSrc}
                    title={skill.title}
                    category={skill.category}
                    getFallbackIcon={getFallbackIcon}
                  />
                </div>
                <div className={styles.skillInfo}>
                  <h4 className={styles.skillTitle}>{skill.title}</h4>
                  <span className={styles.skillLevel}>{skill.level || "Proficient"}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
