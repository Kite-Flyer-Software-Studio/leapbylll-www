"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IconCircleArrowLeft } from "@tabler/icons-react";

const Logo = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-neutral-300"
    >
      <path
        d="M20 4L4 12V28L20 36L36 28V12L20 4Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="w-full h-full p-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl">
      {/* Dashboard Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex items-center gap-2 mb-6"
      >
        <div className="flex gap-2">
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="w-3 h-3 rounded-full bg-[#FF5F57]"
          ></motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="w-3 h-3 rounded-full bg-[#FEBC2E]"
          ></motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="w-3 h-3 rounded-full bg-[#28C840]"
          ></motion.div>
        </div>
      </motion.div>

      {/* Dashboard Content */}
      <div className="flex flex-col md:flex-row h-full gap-4">
        {/* Left Panel - CPA Profile */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
          className="flex-shrink-0 bg-neutral-50 dark:bg-neutral-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-4">
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="rounded-full bg-gradient-to-br from-blue-500 to-blue-600 overflow-hidden ring-2 ring-white dark:ring-neutral-700"
              >
                <div className="w-14 h-14 flex items-center justify-center text-white font-bold text-xl">
                  CPA
                </div>
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-neutral-800"
              />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="space-y-1"
            >
              <div className="text-[10px] md:text-xs font-medium text-neutral-400 tracking-wider">
                YOUR DEDICATED ADVISOR
              </div>
              <div className="text-xs md:text-lg font-semibold bg-gradient-to-r from-neutral-800 to-neutral-600 dark:from-neutral-200 dark:to-neutral-400 bg-clip-text text-transparent">
                Natalie Luk, CPA
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Panel - Messaging Interface */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
          className="flex-1 bg-neutral-50 dark:bg-neutral-800 relative p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
        >
          <motion.div
            whileHover={{ x: -5 }}
            className="flex items-center text-neutral-300 dark:text-neutral-600 mx-2 absolute top-4 left-0"
          >
            <IconCircleArrowLeft className="w-6 h-6 hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors cursor-pointer" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col h-full justify-center items-center text-neutral-400"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Logo />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-sm text-center mt-2"
            >
              Direct messaging with your CPA
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
              className="text-xs text-neutral-400 dark:text-neutral-500 text-center mt-1"
            >
              Ask about cap tables, cash flow, or tax planning
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
