"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { FairPricingGraphic } from "./fair-pricing-graphic";
import { FounderFriendlyGraphic } from "./founder-friendly-graphic";
import { TechEnabledGraphic } from "./tech-enabled-graphic";
import { HumanDeliveredGraphic } from "./human-delivered-graphic";

export const ModernStartupIllustration = () => {
  const bentoCards = [
    { graphic: <FairPricingGraphic />, label: "Fair pricing", gradient: "from-emerald-500 to-teal-500" },
    { graphic: <FounderFriendlyGraphic />, label: "Founder-friendly", gradient: "from-rose-500 to-pink-500" },
    { graphic: <TechEnabledGraphic />, label: "Tech-enabled", gradient: "from-cyan-500 to-blue-500" },
    { graphic: <HumanDeliveredGraphic />, label: "Human-delivered", gradient: "from-amber-500 to-orange-500" },
  ];

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
      <div className="relative z-10 flex h-full flex-col gap-3 p-6">
        <div className="grid flex-1 grid-cols-2 gap-3 min-h-0">
          {bentoCards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 12, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                type: "spring",
                stiffness: 150,
              }}
              whileHover={{
                scale: 1.03,
                y: -2,
                transition: { duration: 0.2 },
              }}
              className={cn(
                "group relative flex min-h-[110px] flex-col overflow-hidden rounded-xl bg-white/90 shadow-md backdrop-blur-sm dark:bg-neutral-900/90 dark:shadow-neutral-950/50",
                "border border-neutral-200/80 dark:border-neutral-700/80",
                "hover:shadow-xl hover:shadow-emerald-500/10 dark:hover:shadow-emerald-500/20",
              )}
            >
              {/* Shimmer effect on hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                />
              </div>
              <div
                className={cn(
                  "absolute inset-0 rounded-xl bg-gradient-to-br p-3 pb-10 text-white [&>svg]:size-full",
                  card.gradient,
                )}
              >
                {card.graphic}
              </div>
              <motion.span
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 + 0.3 }}
                className="relative z-10 mt-auto px-2 pb-2 text-center text-lg font-semibold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
              >
                {card.label}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
