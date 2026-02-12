"use client";

import { motion } from "motion/react";

export const FounderFriendlyGraphic = () => (
  <div className="relative size-full flex items-center justify-center">
    {/* Motion lines showing speed/hustle */}
    {[...Array(4)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute h-0.5 rounded-full bg-white/30"
        style={{
          left: "10%",
          top: `${25 + i * 10}%`,
          width: "8px",
        }}
        animate={{
          x: ["0%", "120%"],
          opacity: [0, 0.6, 0],
          scaleX: [0.5, 1.5, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: i * 0.2,
          ease: "easeInOut",
        }}
      />
    ))}
    <motion.svg viewBox="0 0 80 80" fill="none" className="size-full" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      {/* Person walking/hustling - positioned on left, moving right */}
      <motion.g
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        {/* Head */}
        <motion.circle
          cx="32"
          cy="20"
          r="6"
          strokeWidth="2"
          fill="none"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2, type: "spring", stiffness: 200 }}
        />

        {/* Body - tilted forward showing hustle */}
        <motion.g animate={{ rotate: [0, -2, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
          <motion.path
            d="M32 26v16"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          />

          {/* Arms - one holding briefcase */}
          <motion.path
            d="M32 30l-6 6"
            strokeWidth="1.8"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          />
          <motion.path
            d="M32 30l8 8"
            strokeWidth="1.8"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            animate-later={{ rotate: [0, -5, 0] }}
          />
        </motion.g>

        {/* Legs - animated walking motion */}
        <motion.g>
          <motion.path
            d="M32 42l-6 16"
            strokeWidth="1.8"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1, rotate: [0, -3, 0] }}
            transition={{
              pathLength: { duration: 0.4, delay: 0.5 },
              rotate: { duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
            }}
          />
          <motion.path
            d="M32 42l6 16"
            strokeWidth="1.8"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1, rotate: [0, 3, 0] }}
            transition={{
              pathLength: { duration: 0.4, delay: 0.6 },
              rotate: { duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 },
            }}
          />
        </motion.g>

        {/* Briefcase/suitcase */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.7, type: "spring", stiffness: 180 }}
        >
          <motion.rect
            x="37"
            y="36"
            width="10"
            height="8"
            rx="1"
            strokeWidth="1.5"
            fill="none"
            animate={{ y: [0, -1, 0] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path d="M40 36v-2a1 1 0 011-1h2a1 1 0 011 1v2" strokeWidth="1.2" />
        </motion.g>
      </motion.g>

      {/* Destination target/goal */}
      <motion.g
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1, type: "spring", stiffness: 150 }}
      >
        <motion.circle
          cx="62"
          cy="50"
          r="8"
          strokeWidth="1.8"
          fill="none"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        />
        <motion.path
          d="M59 50l2 2 4-4"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.4, delay: 1.3 }}
        />
      </motion.g>
    </motion.svg>
  </div>
);
