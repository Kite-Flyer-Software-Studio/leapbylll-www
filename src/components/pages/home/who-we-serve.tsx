"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
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
  IconBrain,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export const WhoWeServe = () => {
  const t = useTranslations("whoWeServe");

  const targets = [
    {
      title: t("targets.soloEntrepreneurs.title"),
      description: t("targets.soloEntrepreneurs.description"),
      description2: t("targets.soloEntrepreneurs.description2"),
      icon: <IconUser className="size-6" />,
      type: "solution" as const,
    },
    {
      title: t("targets.startupCompanies.title"),
      description: t("targets.startupCompanies.description"),
      description2: t("targets.startupCompanies.description2"),
      icon: <IconRocket className="size-6" />,
      type: "solution" as const,
    },
    {
      title: t("targets.growingSMEs.title"),
      description: t("targets.growingSMEs.description"),
      description2: t("targets.growingSMEs.description2"),
      icon: <IconBuildingSkyscraper className="size-6" />,
      type: "solution" as const,
    },
  ];

  return (
    <div id="who-we-serve" className="relative overflow-hidden py-20">
      <Container>
        <div className="relative flex flex-col items-center">
          <Badge>{t("badge")}</Badge>
          <Heading as="h2" className="mt-4">
            {t("heading")}
          </Heading>

          <Subheading as="p" className="mt-6 max-w-3xl">
            {t("subheading")}
          </Subheading>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2">
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
  const t = useTranslations("whoWeServe.middleCard");
  const texts = [
    t("statuses.deadlineTracked"),
    t("statuses.filingsComplete"),
    t("statuses.booksAuditReady")
  ];
  const [activeText, setActiveText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveText((prev) => (prev + 1) % texts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [texts.length]);

  const metrics = [
    { label: t("metrics.filingsOnTime"), width: 98 },
    { label: t("metrics.clientSatisfaction"), width: 95 },
    { label: t("metrics.complianceRate"), width: 100 },
  ];

  return (
    <div className="relative flex min-h-40 flex-col justify-end overflow-hidden rounded-lg bg-neutral-50 p-4 md:p-5 dark:bg-neutral-900">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#404040_1px,transparent_1px)] mask-radial-from-10% [background-size:10px_10px] shadow-xl"></div>

      <div className="flex items-center justify-center">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-white p-3 shadow-lg dark:border-neutral-700 dark:bg-neutral-800">
          <IconBrain className="size-6" />
        </div>
        <div className="mx-6 h-px w-16 bg-neutral-300 dark:bg-neutral-700"></div>
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md bg-neutral-200 p-px shadow-xl dark:bg-neutral-700">
          <div className="absolute inset-0 scale-[1.4] animate-spin rounded-full bg-conic [background-image:conic-gradient(at_center,transparent,rgb(59_130_246)_20%,transparent_30%)] [animation-duration:2s]"></div>
          <div className="absolute inset-0 scale-[1.4] animate-spin rounded-full bg-conic [background-image:conic-gradient(at_center,transparent,rgb(168_85_247)_20%,transparent_30%)] [animation-delay:1s] [animation-duration:2s]"></div>
          <div className="relative z-20 flex h-full w-full items-center justify-center rounded-[5px] bg-white dark:bg-neutral-900">
            <Image
              src="/logos/leapbylll-logo.png"
              alt="LEAP by LLL"
              width={32}
              height={32}
              className="size-8"
            />
          </div>
        </div>
        <div className="mx-6 h-px w-16 bg-neutral-300 dark:bg-neutral-700"></div>
        <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-white p-3 shadow-lg dark:border-neutral-700 dark:bg-neutral-800">
          <IconRocket className="size-6" />
        </div>
      </div>
      <div className="relative z-20 flex flex-col items-center justify-center">
        <div className="mb-3 h-10 w-px bg-neutral-300 dark:bg-neutral-700"></div>
        <div className="rounded-sm border border-blue-500 bg-blue-50 px-2 py-0.5 text-xs text-blue-500 dark:bg-blue-900 dark:text-white">
          {t("managed")}
        </div>
      </div>
      <div className="h-60 w-full translate-x-10 translate-y-10 overflow-hidden rounded-md bg-neutral-200 p-px shadow-xl dark:bg-neutral-700">
        <div className="absolute inset-0 scale-[1.4] animate-spin rounded-full bg-conic from-transparent via-blue-500 via-20% to-transparent to-30% blur-2xl [animation-duration:4s]"></div>
        <div className="absolute inset-0 scale-[1.4] animate-spin rounded-full bg-conic from-transparent via-purple-500 via-20% to-transparent to-30% blur-2xl [animation-delay:2s] [animation-duration:4s]"></div>
        <div className="relative z-20 h-full w-full rounded-[5px] bg-white dark:bg-neutral-900">
          <div className="flex items-center justify-between p-4">
            <div className="flex gap-1">
              <div className="size-2 rounded-full bg-red-400"></div>
              <div className="size-2 rounded-full bg-yellow-400"></div>
              <div className="size-2 rounded-full bg-green-400"></div>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                className="shadow-aceternity mr-2 flex items-center gap-1 rounded-sm bg-white px-2 py-1 text-xs text-neutral-500 dark:bg-neutral-700 dark:text-white"
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
          <div className="h-px w-full bg-neutral-200 dark:bg-neutral-800"></div>
          <div className="flex h-full flex-row">
            <div className="h-full w-14 bg-neutral-200 dark:bg-neutral-800" />
            <motion.div className="w-full gap-y-4 p-4">
              <h2 className="text-sm font-semibold text-neutral-800 dark:text-neutral-300">
                {t("dashboard")}
              </h2>

              <div className="mt-4 flex flex-col gap-y-3 mask-b-from-50%">
                {metrics.map((item, index) => (
                  <div key={item.label} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-neutral-600 dark:text-neutral-400">
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
                        className="h-full rounded-full bg-emerald-400 dark:bg-emerald-500"
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
  description2?: string;
  icon: React.ReactNode;
  type: "pain" | "solution";
}) => {
  const { title, description, description2, icon, type } = props;

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
      {description2 && (
        <p className="text-sm text-muted dark:text-muted-dark mt-2">{description2}</p>
      )}
    </div>
  );
};
