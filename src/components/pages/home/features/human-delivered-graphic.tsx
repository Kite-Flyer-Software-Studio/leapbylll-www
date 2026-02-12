"use client";

import { motion } from "motion/react";

export const HumanDeliveredGraphic = () => (
  <div className="relative size-full">
    {/* Connection lines from person to document */}
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute h-px bg-white/30"
        style={{
          left: "38%",
          top: `${35 + i * 5}%`,
          width: "0%",
        }}
        animate={{
          width: ["0%", "18%"],
          opacity: [0, 0.6, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: i * 0.3 + 1,
          ease: "easeInOut",
        }}
      />
    ))}
    <motion.svg viewBox="0 0 48 48" fill="none" className="size-full" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" animate={{ y: [0, -2, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
      <motion.g animate={{ y: [0, -1, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}>
        <motion.circle cx="18" cy="14" r="5" strokeWidth="1.5" fill="none" initial={{ scale: 0, rotate: -90 }} animate={{ scale: 1, rotate: 0 }} transition={{ duration: 0.5, type: "spring", stiffness: 180 }} />
        <motion.path d="M10 38c0-4.4 3.6-8 8-8s8 3.6 8 8" strokeWidth="1.5" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }} />
      </motion.g>
      <motion.g animate={{ rotate: [0, 2, 0], y: [0, -1, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}>
        <motion.rect x="26" y="18" width="14" height="18" rx="2" strokeWidth="1.5" fill="none" initial={{ x: 14, opacity: 0, scale: 0.8 }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 120 }} />
        <motion.path d="M30 24h6M30 28h6M30 32h4" strokeWidth="1" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.7 }} />
        <motion.path d="M33 18v-4l4 2-4 2z" strokeWidth="1.5" initial={{ pathLength: 0, scale: 0 }} animate={{ pathLength: 1, scale: 1 }} transition={{ duration: 0.4, delay: 0.9, type: "spring", stiffness: 150 }} />
      </motion.g>
    </motion.svg>
  </div>
);
