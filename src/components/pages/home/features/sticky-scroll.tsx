"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { IconCheck } from "@tabler/icons-react";

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
    [0, 0.05, 0.5, 0.8, 1],
    [1, 1, 1, 1, 0],
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
