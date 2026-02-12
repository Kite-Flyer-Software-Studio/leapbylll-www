"use client";

import React, { useRef } from "react";
import Image from "next/image";

import { Badge } from "@/components/badge";
import { Heading } from "@/components/heading";
import { Container } from "@/components/container";
import { cn } from "@/lib/utils";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { useTranslations } from "next-intl";

import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";
import {
  IconRocket,
  IconCheck,
  IconBuildingSkyscraper,
} from "@tabler/icons-react";


const LegacyIllustration = () => (
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
    {/* Floating particles around the image */}
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
          <Image
            src="/stability.png"
            alt="LEAP by LLL office in Kowloon, Hong Kong — 40 years of established expertise"
            height={500}
            width={500}
            className="rounded-lg shadow-lg"
          />
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

const FairPricingGraphic = () => (
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
const FounderFriendlyGraphic = () => (
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
const TechEnabledGraphic = () => (
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
const HumanDeliveredGraphic = () => (
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

const ModernStartupIllustration = () => {
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
                className="relative z-10 mt-auto px-2 pb-2 text-center text-xs font-semibold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
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

const features1 = [
  {
    icon: <IconRocket className="h-8 w-8 text-neutral-200" />,
    title: "The Stability of a 40-Year Legacy",
    valueProps: [
      "Deep expertise and seasoned advice built over decades of experience.",
      "Everything owned, managed, and done at our office in Kowloon, Hong Kong; never outsourced.",
    ],
    content: <LegacyIllustration />,
  },
  {
    icon: <IconRocket className="h-8 w-8 text-neutral-200" />,
    title: "The Energy of a Modern Startup",
    valueProps: [
      "Fair pricing, no corporate jargon, and a founder-friendly mindset.",
      "Proprietary smart accounting system; tech-enabled, human-delivered.",
    ],
    content: <ModernStartupIllustration />,
  },
];

export const Features = () => {
  const t = useTranslations("whyLeap");

  return (
    <div id="why-leap" className="relative z-20 py-10 lg:py-20 overflow-hidden flex flex-col items-center">
      <Badge>{t("badge")}</Badge>
      <Heading className="mt-4" as="h2">{t("heading")}</Heading>
      <Container>
        <div className="mt-2">
          {/* <CardSkeleton className="[perspective:1200px] w-140">
            <SkeletonAllInOne />
          </CardSkeleton> */}
          <StickyScroll content={features1} />
        </div>
      </Container>
    </div>
  );
};

export const StickyScroll = ({
  content,
}: {
  content: { title: string; valueProps: string[]; icon?: React.ReactNode }[];
}) => {
  return (
    <div className="">
      <motion.div className="relative mx-auto hidden h-full max-w-7xl flex-col justify-between p-10 lg:flex">
        {content.map((item, index) => (
          <ScrollContent key={item.title + index} item={item} index={index} />
        ))}
      </motion.div>
      <motion.div className="relative mx-auto flex max-w-7xl flex-col justify-between p-10 lg:hidden">
        {content.map((item, index) => (
          <ScrollContentMobile
            key={item.title + index}
            item={item}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  );
};

export const ScrollContent = ({
  item,
  index,
}: {
  item: {
    title: string;
    valueProps: string[];
    icon?: React.ReactNode;
    content?: React.ReactNode;
  };
  index: number;
}) => {
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const translate = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const translateContent = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.5, 0.7, 1],
    [0, 1, 1, 0, 0],
  );

  const opacityContent = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0, 0, 1, 1, 0],
  );

  return (
    <motion.div
      ref={ref}
      transition={{ duration: 0.3 }}
      key={item.title + index}
      className="relative my-20 grid grid-cols-2 gap-8"
    >
      <div className="w-full">
        <motion.div
          style={{ y: translate, opacity: index === 0 ? opacityContent : 1 }}
          className=""
        >
          <motion.h2 className="mt-2 inline-block max-w-md bg-gradient-to-b from-white to-white bg-clip-text text-left text-2xl md:text-4xl font-bold text-black dark:text-whitelg:text-4xl">
            {item.title}
          </motion.h2>

          <ul className="mt-4 space-y-3">
            {item.valueProps.map((prop, i) => (
              <li key={i} className="flex items-start gap-3 max-w-sm">
                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <IconCheck className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-lg text-neutral-500">
                  {prop}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      <motion.div
        key={item.title + index}
        style={{ y: translateContent, opacity: opacity }}
        className="h-full w-full self-start rounded-md"
      >
        {item.content && item.content}
      </motion.div>
    </motion.div>
  );
};

export const ScrollContentMobile = ({
  item,
  index,
}: {
  item: {
    title: string;
    valueProps: string[];
    icon?: React.ReactNode;
    content?: React.ReactNode;
  };
  index: number;
}) => {
  return (
    <motion.div
      transition={{ duration: 0.3 }}
      key={item.title + index}
      className="relative my-8 flex flex-col md:flex-row md:gap-20"
    >
      <div className="w-full">
        <motion.div className="mb-6">
          <motion.h2 className="mt-2 inline-block bg-gradient-to-b from-white to-white bg-clip-text text-left text-2xl md:text-4xl font-bold text-black dark:text-white lg:text-4xl">
            {item.title}
          </motion.h2>

          <ul className="mt-4 space-y-3">
            {item.valueProps.map((prop, i) => (
              <li key={i} className="flex items-start gap-3 max-w-sm">
                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <IconCheck className="w-3 h-3 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-sm font-medium text-neutral-500 md:text-base">
                  {prop}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      <motion.div
        key={item.title + index}
        className="mb-8 w-full self-start rounded-md"
      >
        {item.content && item.content}
      </motion.div>
    </motion.div>
  );
};


// const CardSkeleton = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children?: React.ReactNode;
// }) => {
//   return (
//     <div
//       className={cn(
//         "relative h-full sm:h-60 flex flex-col md:h-80",
//         className
//       )}
//     >
//       {children}
//     </div>
//   );
// };