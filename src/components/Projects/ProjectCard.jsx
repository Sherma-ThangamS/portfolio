import React, { useState } from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import { IconExternal, IconGithub, IconSparkles } from "../Icons/Icons";
import { motion } from "framer-motion";

export const ProjectCard = ({ project }) => {
  const { title, imageSrc, description, points, skills, demo, source, category, featured } = project;
  const [imgError, setImgError] = useState(false);

  // Only show live demo if there is an active deployment (not a repo or paper link)
  const isLiveDemo = Boolean(
    demo &&
      !demo.includes("github.com") &&
      !demo.includes("semanticscholar.org") &&
      demo !== source
  );

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className={styles.projectCard}
    >
      <div className={`${styles.imageContainer} ${imgError ? styles.imageFallbackContainer : ""}`}>
        {!imgError && (
          <img
            src={getImageUrl(imageSrc)}
            alt={title}
            className={styles.projectImage}
            onError={() => setImgError(true)}
          />
        )}
        <div className={styles.imageOverlay}></div>
        {category && <span className={styles.categoryBadge}>{category}</span>}
        {featured && (
          <span className={styles.featuredBadge}>
            <IconSparkles size={12} />
            <span>Featured</span>
          </span>
        )}
      </div>

      <div className={styles.cardBody}>
        <h3 className={styles.projectTitle}>{title}</h3>

        {/* Bullet Points */}
        {points && points.length > 0 ? (
          <ul className={styles.projectPoints}>
            {points.map((point, idx) => (
              <li key={idx} className={styles.projectPoint}>
                {point}
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.projectDescription}>{description}</p>
        )}

        {/* Tech tags */}
        <div className={styles.skillsList}>
          {skills.map((skill, index) => (
            <span key={index} className={styles.skillPill}>
              {skill}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className={styles.cardActions}>
          {isLiveDemo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryAction}
            >
              <span>Live Demo</span>
              <IconExternal size={15} />
            </a>
          )}
          {source && (
            <a
              href={source}
              target="_blank"
              rel="noopener noreferrer"
              className={isLiveDemo ? styles.secondaryAction : styles.primaryAction}
              title="View Source Code"
            >
              <IconGithub size={16} />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
