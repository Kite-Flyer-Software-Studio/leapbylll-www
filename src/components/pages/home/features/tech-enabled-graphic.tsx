"use client";

import { motion } from "motion/react";

export const TechEnabledGraphic = () => (
  <div className="relative size-full">
    {/* Digital particles flowing across screen */}
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute h-0.5 rounded-full bg-white/50"
        style={{
          left: "10%",
          top: `${25 + i * 12}%`,
          width: "2px",
        }}
        animate={{
          x: ["0%", "300%"],
          opacity: [0, 1, 0],
          width: ["2px", "20px", "2px"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: i * 0.4,
          ease: "easeInOut",
        }}
      />
    ))}
    <motion.svg viewBox="0 0 48 48" fill="none" className="size-full" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <motion.rect x="6" y="10" width="36" height="26" rx="2" strokeWidth="1.5" fill="none" initial={{ pathLength: 0, scale: 0.9 }} animate={{ pathLength: 1, scale: 1 }} transition={{ duration: 0.6, type: "spring", stiffness: 150 }} />
      <motion.g>
        <motion.path d="M12 20h24" strokeWidth="1.5" initial={{ pathLength: 0, x: -10 }} animate={{ pathLength: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.3, type: "spring", stiffness: 100 }} />
        <motion.path d="M12 26h18" strokeWidth="1.5" initial={{ pathLength: 0, x: -10 }} animate={{ pathLength: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.45, type: "spring", stiffness: 100 }} />
        <motion.path d="M12 32h12" strokeWidth="1.5" initial={{ pathLength: 0, x: -10 }} animate={{ pathLength: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.6, type: "spring", stiffness: 100 }} />
      </motion.g>
      <motion.rect x="30" y="30" width="6" height="4" rx="1" strokeWidth="1.5" fill="none" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: [0, 1, 1, 0.3], scale: [0, 1, 1, 0] }} transition={{ duration: 2, delay: 0.8, repeat: Infinity, repeatDelay: 0.5, ease: "easeInOut" }} />
    </motion.svg>
  </div>
);
