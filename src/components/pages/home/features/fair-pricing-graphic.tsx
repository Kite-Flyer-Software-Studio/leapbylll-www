"use client";

import { motion } from "motion/react";

export const FairPricingGraphic = () => (
  <div className="relative size-full flex items-center justify-center p-3">
    {/* Subtle floating sparkles */}
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute h-1 w-1 rounded-full bg-white/30"
        style={{
          left: `${10 + i * 35}%`,
          top: `${8 + i * 30}%`,
        }}
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 2.5 + i * 0.3,
          repeat: Infinity,
          delay: i * 0.5,
          ease: "easeInOut",
        }}
      />
    ))}
    <motion.svg viewBox="0 0 80 80" fill="none" className="size-full" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      {/* Clipboard/document background */}
      <motion.rect
        x="16"
        y="8"
        width="48"
        height="64"
        rx="3"
        strokeWidth="1.8"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      {/* Checklist items - item 1 (checked) */}
      <motion.g initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.3, type: "spring", stiffness: 120 }}>
        <motion.circle cx="24" cy="20" r="3" strokeWidth="1.5" fill="none" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3, delay: 0.5, type: "spring", stiffness: 200 }} />
        <motion.path d="M22.5 20l1 1 2-2" strokeWidth="1.2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3, delay: 0.7 }} />
        <motion.path d="M32 20h24" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 0.6 }} />
      </motion.g>

      {/* Checklist items - item 2 (checked) */}
      <motion.g initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.5, type: "spring", stiffness: 120 }}>
        <motion.circle cx="24" cy="32" r="3" strokeWidth="1.5" fill="none" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3, delay: 0.7, type: "spring", stiffness: 200 }} />
        <motion.path d="M22.5 32l1 1 2-2" strokeWidth="1.2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3, delay: 0.9 }} />
        <motion.path d="M32 32h20" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 0.8 }} />
      </motion.g>

      {/* Checklist items - item 3 (unchecked) */}
      <motion.g initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.7, type: "spring", stiffness: 120 }}>
        <motion.circle cx="24" cy="44" r="3" strokeWidth="1.5" fill="none" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3, delay: 0.9, type: "spring", stiffness: 200 }} />
        <motion.path d="M32 44h16" strokeWidth="1.5" opacity="0.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 1 }} />
      </motion.g>

      {/* Checklist items - item 4 (unchecked) */}
      <motion.g initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.9, type: "spring", stiffness: 120 }}>
        <motion.circle cx="24" cy="56" r="3" strokeWidth="1.5" fill="none" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3, delay: 1.1, type: "spring", stiffness: 200 }} />
        <motion.path d="M32 56h18" strokeWidth="1.5" opacity="0.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 1.2 }} />
      </motion.g>

      {/* Pulsing highlight on checked items */}
      <motion.circle
        cx="24"
        cy="20"
        r="4"
        stroke="currentColor"
        strokeWidth="0.5"
        fill="none"
        opacity="0.3"
        animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, delay: 1.5 }}
      />
    </motion.svg>
  </div>
);
