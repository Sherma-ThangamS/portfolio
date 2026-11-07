import React, { useState } from "react";
import styles from "./Projects.module.css";
import projectsData from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import { IconSparkles, IconGithub } from "../Icons/Icons";
import { motion, AnimatePresence } from "framer-motion";

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filterTabs = ["All", "Systems & Distributed", "Full Stack", "AI / ML"];

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((proj) => proj.category === activeFilter);

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionBadge}>
          <IconSparkles size={14} />
          <span>Showcase</span>
        </div>
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
        <p className={styles.sectionSubtitle}>
          A selection of intelligent systems, full-stack applications, and research prototypes built with modern toolchains.
        </p>
      </div>

      <div className={styles.container}>
        {/* Category Filter Tabs */}
        <div className={styles.tabsWrapper}>
          {filterTabs.map((tab) => (
            <button
              key={tab}
              className={`${styles.filterTab} ${
                activeFilter === tab ? styles.filterTabActive : ""
              }`}
              onClick={() => setActiveFilter(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className={styles.projectsGrid}>
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA Banner */}
        <div className={styles.githubBanner}>
          <div className={styles.bannerContent}>
            <IconGithub size={32} className={styles.bannerIcon} />
            <div>
              <h4 className={styles.bannerTitle}>Want to see more code repositories?</h4>
              <p className={styles.bannerDesc}>
                Explore all open-source contributions, algorithms, and experimental repositories on GitHub.
              </p>
            </div>
          </div>
          <a
            href="https://github.com/Sherma-ThangamS"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.bannerBtn}
          >
            <span>Visit @Sherma-ThangamS</span>
          </a>
        </div>
      </div>
    </section>
  );
};
