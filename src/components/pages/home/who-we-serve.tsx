"use client";

import React, { useEffect, useState } from "react";
import { Container } from "@/components/container";
import { Badge } from "@/components/badge";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import {
  IconAlertTriangle,
  IconUsers,
  IconFileAlert,
  IconUser,
  IconRocket,
  IconBuildingSkyscraper,
  IconSettings,
  IconBrain,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const WhoWeServe = () => {
  const painPoints = [
    {
      title: "Deadline disasters",
      description: "Emails ignored, questions unanswered until penalty notices arrive",
      icon: <IconAlertTriangle className="size-6" />,
      type: "pain" as const,
    },
    {
      title: "Fragmented providers",
      description: "No one takes ownership – your accountant, secretary, and auditor keep pointing fingers.",
      icon: <IconUsers className="size-6" />,
      type: "pain" as const,
    },
    {
      title: "Year-end shocks",
      description: "Missed deadlines, penalty letters, and messy records you have to clean up later.",
      icon: <IconFileAlert className="size-6" />,
      type: "pain" as const,
    },
  ];

  const targets = [
    {
      title: "Solo entrepreneurs",
      description:
        "Solo entrepreneurs launching their first business",
      icon: <IconUser className="size-6" />,
      type: "solution" as const,
    },
    {
      title: "Start-up companies",
      description:
        "Start-up companies needing structure and investor-ready numbers",
      icon: <IconRocket className="size-6" />,
      type: "solution" as const,
    },
    {
      title: "Growing SMEs",
      description:
        "Growing SMEs preparing for larger teams, funding, or expansion",
      icon: <IconBuildingSkyscraper className="size-6" />,
      type: "solution" as const,
    },
  ];

  return (
    <div id="who-we-serve" className="relative overflow-hidden py-20">
      <Container>
        <div className="relative flex flex-col items-center">
          <Badge>Who We Serve</Badge>
          <Heading as="h2" className="mt-4">
            Built for founders who can&apos;t afford compliance mistakes
          </Heading>

          <Subheading as="p" className="mt-6 max-w-3xl">
            From missed deadlines to fragmented providers, we understand the
            compliance chaos that founders face. LEAP by LLL transforms these
            pain points into predictable, manageable processes.
          </Subheading>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            {painPoints.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
          <MiddleCard />
          <div className="grid grid-cols-1 gap-4">
            {targets.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

const MiddleCard = () => {
  const texts = ["Deadline tracked", "Filings complete", "Books audit-ready"];
  const [activeText, setActiveText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveText((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex min-h-40 flex-col justify-end overflow-hidden rounded-lg bg-neutral-50 p-4 md:p-5 dark:bg-neutral-900">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#404040_1px,transparent_1px)] [background-size:10px_10px]"></div>

      <div className="relative z-20 flex items-center justify-center">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-white p-3 shadow-lg dark:border-neutral-700 dark:bg-neutral-800">
          <IconBrain className="size-8" />
        </div>
        <div className="mx-4 h-px w-12 bg-neutral-300 dark:bg-neutral-700"></div>
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md bg-neutral-200 p-px shadow-xl dark:bg-neutral-700">
          <div className="absolute inset-0 scale-[1.4] animate-spin rounded-full bg-gradient-conic from-transparent via-blue-500 via-20% to-transparent to-30% [animation-duration:2s]"></div>
          <div className="absolute inset-0 scale-[1.4] animate-spin rounded-full bg-gradient-conic from-transparent via-purple-500 via-20% to-transparent to-30% [animation-delay:1s] [animation-duration:2s]"></div>
          <div className="relative z-20 flex h-full w-full items-center justify-center rounded-[5px] bg-white dark:bg-neutral-900">
            <IconSettings className="size-6 animate-spin [animation-duration:3s]" />
          </div>
        </div>
        <div className="mx-4 h-px w-12 bg-neutral-300 dark:bg-neutral-700"></div>
        <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-white p-3 shadow-lg dark:border-neutral-700 dark:bg-neutral-800">
          <IconRocket className="size-8" />
        </div>
      </div>

      <div className="relative z-20 mt-4 flex flex-col items-center justify-center">
        <div className="mb-2 h-8 w-px bg-neutral-300 dark:bg-neutral-700"></div>
        <div className="rounded-sm border border-blue-500 bg-blue-50 px-2 py-0.5 text-xs text-blue-500 dark:bg-blue-900/30 dark:text-blue-400">
          Managed
        </div>
      </div>

      <div className="mt-4 h-60 w-full translate-x-10 translate-y-10 overflow-hidden rounded-md border border-neutral-200 bg-white p-px shadow-xl dark:border-neutral-700 dark:bg-neutral-800">
        <div className="absolute inset-0 scale-[1.4] animate-spin rounded-full bg-gradient-conic from-transparent via-blue-500 via-20% to-transparent to-30% blur-2xl [animation-duration:4s]"></div>
        <div className="absolute inset-0 scale-[1.4] animate-spin rounded-full bg-gradient-conic from-transparent via-purple-500 via-20% to-transparent to-30% blur-2xl [animation-delay:2s] [animation-duration:4s]"></div>
        <div className="relative z-20 h-full w-full rounded-[5px] bg-white dark:bg-neutral-900">
          <div className="flex items-center justify-between border-b border-neutral-200 p-4 dark:border-neutral-800">
            <div className="flex gap-1.5">
              <div className="size-2.5 rounded-full bg-red-400"></div>
              <div className="size-2.5 rounded-full bg-yellow-400"></div>
              <div className="size-2.5 rounded-full bg-green-400"></div>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                className="flex items-center gap-1.5 rounded-sm border border-neutral-200 bg-white px-2 py-1 text-xs text-neutral-600 shadow-sm dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                key={activeText}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="size-1.5 rounded-full bg-green-500"></div>
                <motion.span key={activeText}>{texts[activeText]}</motion.span>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex h-full flex-row">
            <div className="h-full w-14 border-r border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900" />
            <motion.div className="w-full gap-y-4 p-4">
              <h2 className="text-sm font-semibold text-neutral-800 dark:text-neutral-300">
                Dashboard
              </h2>

              <div className="mt-4 flex flex-col gap-y-3">
                {[
                  { label: "Filings On-Time", width: 98 },
                  { label: "Client Satisfaction", width: 95 },
                  { label: "Compliance Rate", width: 100 },
                ].map((item, index) => (
                  <div key={item.label} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted dark:text-muted-dark">
                        {item.label}
                      </span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-700">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.width}%` }}
                        transition={{
                          duration: 1.2,
                          delay: 0.4 + index * 0.1,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-blue-500 dark:bg-blue-600"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = (props: {
  title: string;
  description: string;
  icon: React.ReactNode;
  type: "pain" | "solution";
}) => {
  const { title, description, icon, type } = props;

  const isPain = type === "pain";
  const bgColor = isPain
    ? "bg-red-50 dark:bg-red-950/20"
    : "bg-green-50 dark:bg-green-950/20";
  const hoverBg = isPain
    ? "hover:bg-red-100/50 dark:hover:bg-red-950/30"
    : "hover:bg-green-100/50 dark:hover:bg-green-950/30";
  const borderColor = isPain
    ? "hover:border-red-200 dark:hover:border-red-900/50"
    : "hover:border-green-200 dark:hover:border-green-900/50";
  const iconColor = isPain
    ? "text-red-600 dark:text-red-400"
    : "text-green-600 dark:text-green-400";
  const titleColor = isPain
    ? "text-red-900 dark:text-red-100"
    : "text-green-900 dark:text-green-100";

  return (
    <div
      className={cn(
        "group relative z-10 rounded-lg border border-transparent p-4 transition duration-200 md:p-5",
        bgColor,
        hoverBg,
        borderColor
      )}
    >
      <div className={cn("flex items-center gap-2", iconColor)}>
        {icon}
      </div>
      <h3 className={cn("mt-4 mb-2 text-lg font-semibold", titleColor)}>
        {title}
      </h3>
      <p className="text-sm text-muted dark:text-muted-dark">{description}</p>
    </div>
  );
};
