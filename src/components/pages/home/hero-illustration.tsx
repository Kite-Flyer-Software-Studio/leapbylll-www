"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  IconCalculator,
  IconFileCheck,
  IconRocket,
  IconTrendingUp,
  IconCheck,
  IconSparkles,
  IconBuildingBank,
  IconChartBar,
  IconFileSearch,
} from "@tabler/icons-react";
import { useTranslations } from "next-intl";

export const HeroIllustration = () => {
  const t = useTranslations("hero.illustration");
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Parallax effects
  const rotateX = useTransform(smoothMouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(smoothMouseX, [-300, 300], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setActiveCard(null);
  };

  return (
    <div
      className="relative w-full rounded-[32px] overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1200px" }}
    >
      {/* Animated Background Gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-green-500/10 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-green-500/20 animate-gradient-shift" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />

        {/* Dotted Glow Background Effect */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(100,100,100,0.15)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.1)_1px,transparent_0)]" style={{ backgroundSize: "32px 32px" }} />
        </div>

        {/* Animated Sparkles */}
        <Sparkles />
      </div>

      {/* Main Content with Parallax */}
      <motion.div
        className="relative z-10 p-8 md:p-12"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Top Row - Service Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <InteractiveCard
            icon={<IconBuildingBank className="w-6 h-6" />}
            title={t("cards.smartAccounting")}
            isActive={activeCard === "accounting"}
            onHover={() => setActiveCard("accounting")}
            gradient="from-blue-500 to-cyan-500"
            delay={0.1}
          />
          <InteractiveCard
            icon={<IconFileCheck className="w-6 h-6" />}
            title={t("cards.compliance")}
            isActive={activeCard === "compliance"}
            onHover={() => setActiveCard("compliance")}
            gradient="from-purple-500 to-pink-500"
            delay={0.2}
          />
          <InteractiveCard
            icon={<IconCalculator className="w-6 h-6" />}
            title={t("cards.taxAdvisory")}
            isActive={activeCard === "tax"}
            onHover={() => setActiveCard("tax")}
            gradient="from-green-500 to-emerald-500"
            delay={0.3}
          />
          <InteractiveCard
            icon={<IconFileSearch className="w-6 h-6" />}
            title={t("cards.growthReady")}
            isActive={activeCard === "growth"}
            onHover={() => setActiveCard("growth")}
            gradient="from-orange-500 to-red-500"
            delay={0.4}
          />
        </div>

        {/* Center - Animated Growth Chart */}
        <div className="relative mb-6">
          <GrowthVisualization />
        </div>

        {/* Bottom Row - Stats */}
        <div className="grid grid-cols-3 gap-4">
          <StatCard
            icon={<IconCheck />}
            value="100%"
            label={t("stats.onTimeFiling")}
            delay={0.5}
          />
          <StatCard
            icon={<IconTrendingUp />}
            value="98%"
            label={t("stats.clientSatisfaction")}
            delay={0.6}
          />
          <StatCard
            icon={<IconChartBar />}
            value="24/7"
            label={t("stats.support")}
            delay={0.7}
          />
        </div>
      </motion.div>

      {/* Cursor Following Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${smoothMouseX}px ${smoothMouseY}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
        }}
      />
    </div>
  );
};

// Interactive Card Component with 3D Effect
const InteractiveCard = ({
  icon,
  title,
  isActive,
  onHover,
  gradient,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  isActive: boolean;
  onHover: () => void;
  gradient: string;
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      onHoverStart={onHover}
      whileHover={{ scale: 1.05, z: 20 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative rounded-xl p-4 cursor-pointer transition-all duration-300",
        "bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm",
        "border border-neutral-200 dark:border-neutral-800",
        "shadow-lg hover:shadow-2xl",
        isActive && "ring-2 ring-blue-500 ring-offset-2"
      )}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className={cn(
          "w-10 h-10 rounded-lg bg-gradient-to-br flex items-center justify-center text-white mb-2",
          gradient
        )}
      >
        {icon}
      </div>
      <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
        {title}
      </h3>

      {/* Hover Glow Effect */}
      <div
        className={cn(
          "absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300",
          isActive && "opacity-100"
        )}
        style={{
          background: `linear-gradient(135deg, ${gradient.replace("from-", "").replace("to-", "").split(" ").join(", ")})`,
          filter: "blur(20px)",
          zIndex: -1,
        }}
      />
    </motion.div>
  );
};

// Animated Growth Visualization
const GrowthVisualization = () => {
  const t = useTranslations("hero.illustration.growth");
  const tMilestones = useTranslations("hero.illustration.milestones");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(85), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="relative rounded-2xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md p-6 border border-neutral-200 dark:border-neutral-800 shadow-xl"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
            <IconTrendingUp className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              {t("title")}
            </h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              {t("subtitle")}
            </p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
            +{progress}%
          </div>
          <p className="text-xs text-neutral-600 dark:text-neutral-400">{t("yoyGrowth")}</p>
        </div>
      </div>

      {/* Animated Progress Bar */}
      <div className="h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
        />
      </div>

      {/* Milestone Markers */}
      <div className="mt-4 grid grid-cols-3 gap-2">
        <MilestoneMarker label={tMilestones("start")} active />
        <MilestoneMarker label={tMilestones("growth")} active />
        <MilestoneMarker label={tMilestones("scale")} />
      </div>
    </motion.div>
  );
};

const MilestoneMarker = ({ label, active }: { label: string; active?: boolean }) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className={cn(
          "w-3 h-3 rounded-full transition-colors duration-300",
          active
            ? "bg-gradient-to-r from-blue-500 to-purple-500"
            : "bg-neutral-300 dark:bg-neutral-700"
        )}
      />
      <span className="text-xs text-neutral-600 dark:text-neutral-400">{label}</span>
    </div>
  );
};

// Stat Card Component
const StatCard = ({
  icon,
  value,
  label,
  delay,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="relative rounded-xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm p-4 border border-neutral-200 dark:border-neutral-800 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white">
          {React.cloneElement(icon as React.ReactElement, { className: "w-4 h-4" })}
        </div>
      </div>
      <div className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
        {value}
      </div>
      <p className="text-xs text-neutral-600 dark:text-neutral-400">{label}</p>
    </motion.div>
  );
};

// Animated Sparkles Background
const Sparkles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        >
          <IconSparkles className="w-3 h-3" />
        </motion.div>
      ))}
    </div>
  );
};
