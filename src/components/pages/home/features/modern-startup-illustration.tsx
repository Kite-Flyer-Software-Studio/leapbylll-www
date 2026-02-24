"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

export const ModernStartupIllustration = () => {
  return (
    <div className="relative aspect-square max-w-[500px] overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
      <DottedGlowBackground
        className="opacity-40"
        gap={16}
        radius={1.5}
        color="#2b5d46"
        darkColor="#4e8d6f"
        glowColor="rgba(171, 223, 134, 0.7)"
        darkGlowColor="rgba(171, 223, 134, 0.5)"
      />
      <motion.div
        className="relative z-10 flex h-full w-full min-h-0 items-center justify-center p-6"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 150 }}
      >
        <div className="relative h-full w-full overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900 shadow-md">
          <Image
            src="/natalie-bar-9f.png"
            alt="Modern office with professional at laptop"
            fill
            className="object-cover object-center"
            sizes="(max-width: 500px) 100vw, 500px"
            priority
          />
        </div>
      </motion.div>
    </div>
  );
};
