import React from "react";
import styles from "./About.module.css";
import {
  IconBrain,
  IconCode,
  IconDatabase,
  IconLayers,
  IconSparkles,
} from "../Icons/Icons";
import { motion } from "framer-motion";

export const About = () => {
  const pillars = [
    {
      icon: <IconLayers size={24} />,
      title: "Virtualization & Cloud Infra",
      description:
        "Kernel-level virtualization, hypervisor orchestration, and automated VM lifecycle management using KVM, QEMU, Libvirt, and NUMA-aware core tuning.",
      tags: ["KVM", "QEMU", "Libvirt", "NUMA Pinning", "Linux Internals"],
    },
    {
      icon: <IconDatabase size={24} />,
      title: "High-Concurrency Systems",
      description:
        "Transaction-safe distributed backends utilizing PostgreSQL row-level locks, Redis Pub/Sub, BullMQ task queues, and async event daemons.",
      tags: ["PostgreSQL Locks", "Redis Pub/Sub", "BullMQ", "Socket.IO", "Docker"],
    },
    {
      icon: <IconCode size={24} />,
      title: "Algorithmic Problem Solving",
      description:
        "Top 2% global ranking on LeetCode (Knight, 2,000+ rating) with over 900+ competitive problems solved across complex data structures.",
      tags: ["LeetCode Knight", "Codeforces", "Java SE 11", "Go", "Data Structures"],
    },
    {
      icon: <IconBrain size={24} />,
      title: "Applied AI & Retrieval (RAG)",
      description:
        "Context-grounded intelligent tools with LangChain, FAISS vector indexing, Gemini Pro, and specialized training via Amazon ML Summer School.",
      tags: ["LangChain", "FAISS", "Gemini Pro", "PyTorch", "RAG"],
    },
  ];

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionBadge}>
          <IconSparkles size={14} />
          <span>Profile & Focus</span>
        </div>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <p className={styles.sectionSubtitle}>
          Building high-performance virtualization infrastructure, distributed backend engines, and scalable systems.
        </p>
      </div>

      <div className={styles.container}>
        {/* Top Overview Banner Card */}
        <motion.div
          className={styles.overviewCard}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.overviewContent}>
            <h3 className={styles.overviewHeading}>
              Systems & Cloud Infrastructure Engineer
            </h3>
            <p className={styles.overviewText}>
              I specialize in low-level Linux systems, virtualization, and distributed backend architectures. Currently building enterprise hypervisor compute automation at <strong>Zoho Corporation</strong>, I bridge the gap between kernel-level virtualization and high-throughput application backends.
            </p>
          </div>

          <div className={styles.overviewPills}>
            <span className={styles.pillItem}>Linux Kernel & KVM</span>
            <span className={styles.pillItem}>Distributed Systems</span>
            <span className={styles.pillItem}>High-Concurrency Engines</span>
            <span className={styles.pillItem}>LeetCode Knight (2000+)</span>
            <span className={styles.pillItem}>Oracle Certified Java 11</span>
          </div>
        </motion.div>

        {/* 4 Balanced Architectural Pillars */}
        <div className={styles.pillarsGrid}>
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              className={styles.pillarCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className={styles.pillarHeader}>
                <div className={styles.pillarIconWrapper}>{pillar.icon}</div>
                <span className={styles.pillarIndex}>0{index + 1}</span>
              </div>
              <h4 className={styles.pillarTitle}>{pillar.title}</h4>
              <p className={styles.pillarDescription}>{pillar.description}</p>
              <div className={styles.pillarTags}>
                {pillar.tags.map((tag) => (
                  <span key={tag} className={styles.tagPill}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
