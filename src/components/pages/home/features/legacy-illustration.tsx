"use client";

import { motion } from "motion/react";
import { IconBuildingSkyscraper } from "@tabler/icons-react";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

export const LegacyIllustration = () => (
  <div className="relative aspect-square max-w-[500px] overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
    <DottedGlowBackground
      className="opacity-30"
      gap={16}
      radius={1.5}
      color="#2b5d46"
      darkColor="#4e8d6f"
      glowColor="rgba(171, 223, 134, 0.7)"
      darkGlowColor="rgba(171, 223, 134, 0.5)"
    />
    {/* Floating particles around the video */}
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute h-2 w-2 rounded-full bg-[#abdf86]/20"
        style={{
          left: `${10 + i * 15}%`,
          top: `${15 + (i % 3) * 25}%`,
        }}
        animate={{
          y: [0, -15, 0],
          opacity: [0.2, 0.6, 0.2],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 3 + i * 0.3,
          repeat: Infinity,
          delay: i * 0.5,
          ease: "easeInOut",
        }}
      />
    ))}
    <div className="relative z-10 flex h-full items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="relative group"
      >
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="aspect-square h-[480px] w-[480px] rounded-lg object-cover shadow-lg"
            aria-label="LEAP by LLL office in Kowloon, Hong Kong — 40 years of established expertise"
          >
            <source
              src="https://tbguskbayvt1d7md.public.blob.vercel-storage.com/lll-office.mp4"
              type="video/mp4"
            />
          </video>
        </motion.div>
        {/* Badge with animation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute bottom-2 left-2 right-2 flex items-center gap-2 rounded-md bg-black/60 px-3 py-2 backdrop-blur-sm"
        >
          <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}>
            <IconBuildingSkyscraper className="h-4 w-4 shrink-0 text-[#abdf86]" />
          </motion.div>
          <span className="text-xs font-medium text-white">
            Kowloon, Hong Kong · Owned & managed in-house
          </span>
        </motion.div>
      </motion.div>
    </div>
  </div>
);
