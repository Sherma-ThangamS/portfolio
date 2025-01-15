import React from "react";
import { motion } from "framer-motion"; // Import motion
import styles from "./Projects.module.css";

import projects from "../../data/projects.json"; // Ensure this path is correct
import { ProjectCard } from "./ProjectCard"; // Ensure ProjectCard is properly defined and exported
import { useNavigate } from "react-router-dom";
import Back from "../Icons/Back"; // Ensure Back is properly defined and exported

export const Projects = () => {
  const navigate = useNavigate();
  
  return (
      <section className={styles.container} id="projects">
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projects}>
          {projects.map((project, id) => (
            <ProjectCard key={id} project={project} />
          ))}
        </div>
      </section>
  );
};
