import React, { useState } from "react";
import styles from "./Contact.module.css";
import {
  IconMail,
  IconLinkedIn,
  IconGithub,
  IconMapPin,
  IconCopy,
  IconCheck,
  IconSparkles,
} from "../Icons/Icons";
import { motion } from "framer-motion";

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  const emailAddress = "sshermathangam@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleInputChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatusMessage("Please fill in all required fields.");
      return;
    }

    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
      formState.subject || `Portfolio Contact from ${formState.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;

    window.location.href = mailtoUrl;
    setStatusMessage("Opening your email client to send the message...");
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionBadge}>
          <IconSparkles size={14} />
          <span>Get in Touch</span>
        </div>
        <h2 className={styles.sectionTitle}>Let's Connect & Collaborate</h2>
        <p className={styles.sectionSubtitle}>
          Have an opportunity, an idea to discuss, or want to build something extraordinary together? Feel free to reach out.
        </p>
      </div>

      <div className={styles.contactContainer}>
        {/* Left: Contact Info */}
        <motion.div
          className={styles.contactInfoCard}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className={styles.infoHeading}>Contact Information</h3>
          <p className={styles.infoSubtext}>
            I am actively exploring Systems Engineering, Cloud Infrastructure, and Core Distributed Backend opportunities globally and remotely.
          </p>

          <div className={styles.contactItems}>
            {/* Email */}
            <div className={styles.contactItem}>
              <div className={styles.itemIcon}>
                <IconMail size={20} />
              </div>
              <div className={styles.itemDetails}>
                <span className={styles.itemLabel}>Email Address</span>
                <div className={styles.emailRow}>
                  <a href={`mailto:${emailAddress}`} className={styles.itemValue}>
                    {emailAddress}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className={styles.copyBtn}
                    title="Copy Email Address"
                  >
                    {copied ? (
                      <>
                        <IconCheck size={14} className={styles.copiedIcon} />
                        <span className={styles.copiedText}>Copied!</span>
                      </>
                    ) : (
                      <>
                        <IconCopy size={14} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* LinkedIn */}
            <div className={styles.contactItem}>
              <div className={styles.itemIcon}>
                <IconLinkedIn size={20} />
              </div>
              <div className={styles.itemDetails}>
                <span className={styles.itemLabel}>LinkedIn Profile</span>
                <a
                  href="https://www.linkedin.com/in/sshermathangam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.itemValue}
                >
                  linkedin.com/in/sshermathangam
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div className={styles.contactItem}>
              <div className={styles.itemIcon}>
                <IconGithub size={20} />
              </div>
              <div className={styles.itemDetails}>
                <span className={styles.itemLabel}>GitHub Profile</span>
                <a
                  href="https://github.com/Sherma-ThangamS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.itemValue}
                >
                  github.com/Sherma-ThangamS
                </a>
              </div>
            </div>

            {/* Location */}
            <div className={styles.contactItem}>
              <div className={styles.itemIcon}>
                <IconMapPin size={20} />
              </div>
              <div className={styles.itemDetails}>
                <span className={styles.itemLabel}>Location</span>
                <span className={styles.itemValue}>Chennai, Tamil Nadu, India</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Message Form */}
        <motion.div
          className={styles.formCard}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className={styles.formTitle}>Send a Quick Message</h3>
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formLabel}>
                Your Name <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formState.name}
                onChange={handleInputChange}
                placeholder="e.g. Alex Johnson"
                className={styles.formInput}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>
                Your Email <span className={styles.required}>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formState.email}
                onChange={handleInputChange}
                placeholder="alex@example.com"
                className={styles.formInput}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.formLabel}>
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formState.subject}
                onChange={handleInputChange}
                placeholder="Collaboration, Job Opportunity, etc."
                className={styles.formInput}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>
                Your Message <span className={styles.required}>*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formState.message}
                onChange={handleInputChange}
                placeholder="Write your message here..."
                className={styles.formTextarea}
              ></textarea>
            </div>

            {statusMessage && (
              <div className={styles.statusBox}>{statusMessage}</div>
            )}

            <button type="submit" className={styles.submitBtn}>
              <IconMail size={18} />
              <span>Send Message</span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
