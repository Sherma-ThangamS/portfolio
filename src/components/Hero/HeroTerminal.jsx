import React, { useState } from "react";
import styles from "./HeroTerminal.module.css";
import { IconCode, IconCheck, IconCopy } from "../Icons/Icons";
import { motion, AnimatePresence } from "framer-motion";

export const HeroTerminal = () => {
  const [activeTab, setActiveTab] = useState("status");
  const [copied, setCopied] = useState(false);

  const tabs = [
    { id: "status", label: "sherma --status" },
    { id: "infra", label: "cat /proc/virt" },
    { id: "algos", label: "leetcode --rank" },
  ];

  const handleCopy = () => {
    const textToCopy =
      activeTab === "status"
        ? "sherma --status\nRole: Systems & Cloud Infrastructure @ Zoho\nVirtualization: KVM, QEMU, Libvirt\nBackend: PostgreSQL Locks, Redis Pub/Sub, BullMQ\nLeetCode: Knight (2000+ Rating, Top 2% Global)"
        : activeTab === "infra"
        ? "cat /proc/virt\nHypervisors: KVM / QEMU / Libvirt\nTopology: NUMA-aware core mapping\nEvent Daemons: Go & Java Async Callbacks"
        : "leetcode --rank\nTier: Knight\nRating: 2,000+\nGlobal: Top 2%\nSolved: 900+ DSA Problems";

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.terminalWrapper}>
      <div className={styles.ambientGlow}></div>

      <div className={styles.terminalWindow}>
        {/* Terminal Titlebar */}
        <div className={styles.titlebar}>
          <div className={styles.controls}>
            <span className={`${styles.dot} ${styles.dotRed}`}></span>
            <span className={`${styles.dot} ${styles.dotYellow}`}></span>
            <span className={`${styles.dot} ${styles.dotGreen}`}></span>
          </div>

          <div className={styles.title}>
            <span className={styles.hostUser}>sherma</span>
            <span className={styles.hostSep}>@</span>
            <span className={styles.hostBox}>infra-node-01</span>
            <span className={styles.hostPath}>:~/systems</span>
          </div>

          <button
            onClick={handleCopy}
            className={styles.copyBtn}
            title="Copy terminal output"
            aria-label="Copy terminal text"
          >
            {copied ? <IconCheck size={13} className={styles.copiedIcon} /> : <IconCopy size={13} />}
          </button>
        </div>

        {/* Command Switcher Tabs */}
        <div className={styles.commandBar}>
          <span className={styles.commandLabel}>EXEC:</span>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${styles.tabBtn} ${activeTab === tab.id ? styles.tabBtnActive : ""}`}
            >
              $ {tab.label}
            </button>
          ))}
        </div>

        {/* Terminal Body */}
        <div className={styles.terminalBody}>
          <AnimatePresence mode="wait">
            {activeTab === "status" && (
              <motion.div
                key="status"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
                className={styles.outputGroup}
              >
                <div className={styles.promptLine}>
                  <span className={styles.promptUser}>sherma@infra</span>
                  <span className={styles.promptArrow}>➜</span>
                  <span className={styles.promptCmd}>sherma --status</span>
                </div>

                <div className={styles.logLine}>
                  <span className={styles.logTagSys}>[ROLE]</span>
                  <span className={styles.logKey}>Company:</span>
                  <span className={styles.logValEm}>Zoho Corporation</span>
                </div>

                <div className={styles.logLine}>
                  <span className={styles.logTagSys}>[ROLE]</span>
                  <span className={styles.logKey}>Title:</span>
                  <span className={styles.logVal}>Systems & Cloud Infrastructure</span>
                </div>

                <div className={styles.logLine}>
                  <span className={styles.logTagSys}>[CORE]</span>
                  <span className={styles.logKey}>Virtualization:</span>
                  <span className={styles.logValCyan}>KVM • QEMU • Libvirt</span>
                </div>

                <div className={styles.logLine}>
                  <span className={styles.logTagSys}>[ARCH]</span>
                  <span className={styles.logKey}>Distributed:</span>
                  <span className={styles.logValPurple}>PostgreSQL Locks • Redis • BullMQ</span>
                </div>

                <div className={styles.logLine}>
                  <span className={styles.logTagSys}>[DSA]</span>
                  <span className={styles.logKey}>LeetCode:</span>
                  <span className={styles.logValAmber}>Knight (Top 2% • 2,000+ Rating)</span>
                </div>

                <div className={styles.logLine}>
                  <span className={styles.logTagOk}>[OK]</span>
                  <span className={styles.logKey}>State:</span>
                  <span className={styles.logValGreen}>ONLINE (throughput optimal)</span>
                </div>
              </motion.div>
            )}

            {activeTab === "infra" && (
              <motion.div
                key="infra"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
                className={styles.outputGroup}
              >
                <div className={styles.promptLine}>
                  <span className={styles.promptUser}>sherma@infra</span>
                  <span className={styles.promptArrow}>➜</span>
                  <span className={styles.promptCmd}>cat /proc/virt</span>
                </div>

                <div className={styles.logLine}>
                  <span className={styles.logTagSys}>[HYPERVISOR]</span>
                  <span className={styles.logVal}>Kernel-based Virtual Machine (KVM)</span>
                </div>

                <div className={styles.logLine}>
                  <span className={styles.logTagSys}>[TOPOLOGY]</span>
                  <span className={styles.logValCyan}>NUMA-aware CPU pinning & locality</span>
                </div>

                <div className={styles.logLine}>
                  <span className={styles.logTagSys}>[DAEMON]</span>
                  <span className={styles.logValPurple}>Go & Java async event callback runtime</span>
                </div>

                <div className={styles.logLine}>
                  <span className={styles.logTagOk}>[PIPELINE]</span>
                  <span className={styles.logValGreen}>Automated bare-metal VM provisioning</span>
                </div>
              </motion.div>
            )}

            {activeTab === "algos" && (
              <motion.div
                key="algos"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
                className={styles.outputGroup}
              >
                <div className={styles.promptLine}>
                  <span className={styles.promptUser}>sherma@infra</span>
                  <span className={styles.promptArrow}>➜</span>
                  <span className={styles.promptCmd}>leetcode --rank</span>
                </div>

                <div className={styles.logLine}>
                  <span className={styles.logTagAmber}>[BADGE]</span>
                  <span className={styles.logKey}>Tier:</span>
                  <span className={styles.logValAmber}>Knight Badge</span>
                </div>

                <div className={styles.logLine}>
                  <span className={styles.logTagSys}>[STATS]</span>
                  <span className={styles.logKey}>Global Standing:</span>
                  <span className={styles.logValCyan}>Top 2% Worldwide (2,000+ Rating)</span>
                </div>

                <div className={styles.logLine}>
                  <span className={styles.logTagSys}>[TOTAL]</span>
                  <span className={styles.logKey}>Problems Solved:</span>
                  <span className={styles.logValPurple}>900+ (LeetCode, CF, SkillRack)</span>
                </div>

                <div className={styles.logLine}>
                  <span className={styles.logTagOk}>[VERIFY]</span>
                  <span className={styles.logValGreen}>leetcode.com/u/SHERMA_THANGAM_S</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Active Terminal Input Cursor */}
          <div className={styles.activeLine}>
            <span className={styles.promptUser}>sherma@infra</span>
            <span className={styles.promptArrow}>➜</span>
            <span className={styles.activePath}>~/systems</span>
            <span className={styles.cursor}></span>
          </div>
        </div>
      </div>
    </div>
  );
};
