"use client";

import Balancer from "react-wrap-balancer";
import { Button } from "@/components/button";
import { HiArrowRight } from "react-icons/hi2";
import { Badge } from "@/components/badge";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { useRef } from "react";
import { useInView } from "framer-motion";

import { useRouter } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { useTranslations } from 'next-intl';
import { HeroIllustration } from "./hero-illustration";
import { FlipWords } from "@/components/ui/flip-words";

export const Hero = () => {
  const router = useRouter();
  const t = useTranslations('hero');
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <div className="flex flex-col min-h-screen pt-24 md:pt-40 relative overflow-hidden">
      <motion.h1
        ref={titleRef}
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
        className="text-3xl md:text-4xl lg:text-8xl font-semibold max-w-6xl mx-auto text-center relative z-10"
      >
        <Balancer>
          <RoughNotationGroup show={isTitleInView}>
            {t('title.part1')}{" "}
            <RoughNotation
              type="highlight"
              animationDuration={2000}
              iterations={3}
              color="#22c55e80"
              multiline
            >
              <span className="text-currentColor">{t('title.accountant')}</span>
            </RoughNotation>{" "}
            {t('title.part2')}{" "}
            <RoughNotation
              type="underline"
              animationDuration={2000}
              iterations={10}
              color="#22c55e"
            >
              {t('title.startToGrowth')}
            </RoughNotation>.
          </RoughNotationGroup>
        </Balancer>
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
          delay: 0.1,
        }}
        className="text-center mt-12 text-lg md:text-2xl font-medium text-neutral-700 dark:text-neutral-300 max-w-4xl mx-auto relative z-10"
      >
        <Balancer>
          {t('badge')}
        </Balancer>
      </motion.p>
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
            delay: 0.2,
          }}
          className="text-center mt-6 text-base md:text-xl text-muted dark:text-muted-dark max-w-3xl mx-auto relative z-10"
        >
          <Balancer>
            {t('subtitle.prefix')}{" "}
            <FlipWords
              words={t.raw('subtitle.businessTypes')}
              duration={3000}
              className="font-semibold text-neutral-900 dark:text-neutral-100"
            />{" "}
            {t('subtitle.suffix1')}
            <br />
            {t('subtitle.suffix2')}
          </Balancer>
        </motion.div>
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
          className="flex items-center gap-4 justify-center mt-6 relative z-10 px-4"
        >
          <Button as={Link} href="/get-quote" className="text-center">{t('getStarted')}</Button>
          <Button
            variant="simple"
            as={Link}
            href="#services-pricing"
            className="flex space-x-2 items-center group text-center"
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
              "text-neutral-400 text-sm text-center relative z-40",
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