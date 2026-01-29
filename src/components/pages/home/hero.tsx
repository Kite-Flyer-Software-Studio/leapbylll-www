"use client";

import Balancer from "react-wrap-balancer";
import { Button } from "@/components/button";
import { HiArrowRight } from "react-icons/hi2";
import { Badge } from "@/components/badge";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

import { useRouter } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { useTranslations } from 'next-intl';
import { HeroIllustration } from "./hero-illustration";

export const Hero = () => {
  const router = useRouter();
  const t = useTranslations('hero');

  return (
    <div className="flex flex-col min-h-screen pt-20 md:pt-40 relative overflow-hidden">
      <motion.div
        initial={{
          y: 40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
        }}
        className="flex justify-center"
      >
        <Badge>
          {t('badge')}
        </Badge>
      </motion.div>
      <motion.h1
        initial={{
          y: 40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
        }}
        className="text-2xl md:text-4xl lg:text-8xl font-semibold max-w-6xl mx-auto text-center mt-6 relative z-10"
      >
        <Balancer>{t('title')}</Balancer>
      </motion.h1>
      <motion.p
        initial={{
          y: 40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
          delay: 0.2,
        }}
        className="text-center mt-6 text-base md:text-xl text-muted dark:text-muted-dark max-w-3xl mx-auto relative z-10"
      >
        <Balancer>
          {t('subtitle')}
        </Balancer>
      </motion.p>
      <motion.div
        initial={{
          y: 80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
          delay: 0.4,
        }}
        className="flex items-center gap-4 justify-center mt-6 relative z-10"
      >
        <Button as={Link} href="/get-quote">{t('getStarted')}</Button>
        <Button
          variant="simple"
          as={Link}
          href="#services-pricing"
          className="flex space-x-2 items-center group"
        >
          <span>{t('contactUs')}</span>
          <HiArrowRight className="text-muted group-hover:translate-x-1 stroke-[1px] h-3 w-3 transition-transform duration-200 dark:text-muted-dark" />
        </Button>
      </motion.div>
      <motion.div initial={{
        y: 80,
        opacity: 0,
      }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
          delay: 0.6,
        }} className="mt-10 relative z-10">
        <p
          className={twMerge(
            "text-neutral-400 text-sm text-center ml-8 relative z-40",
            "text-center"
          )}
        >
          {t('backedBy')}
        </p>
      </motion.div>
      <div className="mt-20 relative">
        <HeroIllustration />
        <div className="absolute inset-x-0 bottom-0 h-40 w-full bg-gradient-to-b from-transparent via-white to-white dark:via-black/50 dark:to-black scale-[1.1] pointer-events-none" />
      </div>
    </div >
  );
};
