import React, { useState } from "react";
import styles from "./Experience.module.css";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import {
  IconBriefcase,
  IconCalendar,
  IconMapPin,
  IconSparkles,
} from "../Icons/Icons";
import { motion } from "framer-motion";

const CompanyLogo = ({ imageSrc, organisation }) => {
  const [imgError, setImgError] = useState(false);

  if (imgError || !imageSrc) {
    return <span className={styles.logoFallback}>{organisation.slice(0, 2)}</span>;
  }

  return (
    <img
      src={getImageUrl(imageSrc)}
      alt={`${organisation} logo`}
      className={styles.companyLogo}
      onError={() => setImgError(true)}
    />
  );
};

export const Experience = () => {
  return (
    <section id="experience" className={styles.experienceSection}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionBadge}>
          <IconSparkles size={14} />
          <span>Career Journey</span>
        </div>
        <h2 className={styles.sectionTitle}>Experience & Training</h2>
        <p className={styles.sectionSubtitle}>
          Industry experience and selective programs focused on hypervisor engineering, cloud infrastructure, and systems automation.
        </p>
      </div>

      <div className={styles.timelineContainer}>
        {history.map((item, index) => (
          <motion.div
            key={index}
            className={styles.timelineItem}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            {/* Timeline Node */}
            <div className={styles.timelineNode}>
              <div className={styles.nodeIconWrapper}>
                <IconBriefcase size={18} />
              </div>
              {index !== history.length - 1 && <div className={styles.timelineLine}></div>}
            </div>

            {/* Experience Card */}
            <div className={styles.experienceCard}>
              <div className={styles.cardHeader}>
                <div className={styles.companyInfo}>
                  <div className={styles.logoWrapper}>
                    <CompanyLogo imageSrc={item.imageSrc} organisation={item.organisation} />
                  </div>
                  <div>
                    <h3 className={styles.roleTitle}>{item.role}</h3>
                    <div className={styles.orgName}>{item.organisation}</div>
                  </div>
                </div>

                <div className={styles.metaBadgeGroup}>
                  {item.type && <span className={styles.typeBadge}>{item.type}</span>}
                  <div className={styles.dateBadge}>
                    <IconCalendar size={13} />
                    <span>{`${item.startDate} — ${item.endDate}`}</span>
                  </div>
                  {item.location && (
                    <div className={styles.locationBadge}>
                      <IconMapPin size={13} />
                      <span>{item.location}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Responsibilities */}
              <ul className={styles.experienceList}>
                {item.experiences.map((exp, expIdx) => (
                  <li key={expIdx} className={styles.experiencePoint}>
                    {exp}
                  </li>
                ))}
              </ul>

              {/* Technologies Used */}
              {item.skills && item.skills.length > 0 && (
                <div className={styles.techPills}>
                  {item.skills.map((skill, sIdx) => (
                    <span key={sIdx} className={styles.techPill}>
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
