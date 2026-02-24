"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

// OCR System Skeleton - Shows document scanning animation
export const OCRSystemSkeleton = () => {
  const t = useTranslations("accountingIntelligence.skeletons.ocrSystem");
  const [scanProgress, setScanProgress] = useState(0);
  const [isScanning, setIsScanning] = useState(true);
  const [extractedData, setExtractedData] = useState<string[]>([]);

  useEffect(() => {
    if (isScanning && scanProgress < 100) {
      const timer = setTimeout(() => setScanProgress(scanProgress + 2), 50);
      return () => clearTimeout(timer);
    } else if (scanProgress >= 100 && isScanning) {
      setIsScanning(false);
      setTimeout(() => {
        setExtractedData([
          t("extractedAmount"),
          t("extractedVendor"),
          t("extractedDate"),
          t("extractedCategory"),
        ]);
        // Auto-restart after showing results for 3 seconds
        setTimeout(() => {
          setScanProgress(0);
          setIsScanning(true);
          setExtractedData([]);
        }, 3000);
      }, 300);
    }
  }, [scanProgress, isScanning, t]);

  return (
    <div className="absolute inset-0 p-8 flex flex-col items-center justify-center">
      {/* Document */}
      <motion.div
        className="relative w-48 h-64 bg-white dark:bg-neutral-800 rounded-lg shadow-2xl border-2 border-neutral-200 dark:border-neutral-700"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Receipt Header */}
        <div className="p-4 border-b border-neutral-200 dark:border-neutral-700">
          <div className="h-2 w-20 bg-neutral-300 dark:bg-neutral-600 rounded mb-2" />
          <div className="h-1.5 w-32 bg-neutral-200 dark:bg-neutral-700 rounded" />
        </div>

        {/* Receipt Lines */}
        <div className="p-4 space-y-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex justify-between">
              <div className="h-1.5 w-16 bg-neutral-200 dark:bg-neutral-700 rounded" />
              <div className="h-1.5 w-10 bg-neutral-300 dark:bg-neutral-600 rounded" />
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="absolute bottom-4 left-4 right-4 border-t-2 border-neutral-300 dark:border-neutral-600 pt-2">
          <div className="flex justify-between">
            <div className="h-2 w-12 bg-neutral-400 dark:bg-neutral-500 rounded" />
            <div className="h-2 w-16 bg-neutral-400 dark:bg-neutral-500 rounded" />
          </div>
        </div>

        {/* Scanning Line */}
        <AnimatePresence>
          {isScanning && (
            <motion.div
              className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-70"
              initial={{ top: 0 }}
              animate={{ top: `${scanProgress}%` }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            />
          )}
        </AnimatePresence>

        {/* Scan Overlay */}
        {isScanning && (
          <div className="absolute inset-0 bg-blue-500/5 pointer-events-none" />
        )}
      </motion.div>

      {/* Progress Bar */}
      {isScanning && (
        <motion.div
          className="mt-4 w-48"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="h-1.5 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-blue-500"
              style={{ width: `${scanProgress}%` }}
            />
          </div>
          <p className="text-xs text-center mt-2 text-neutral-600 dark:text-neutral-400">
            {t("scanning")} {scanProgress}%
          </p>
        </motion.div>
      )}

      {/* Extracted Data */}
      <AnimatePresence>
        {extractedData.length > 0 && (
          <motion.div
            className="mt-4 space-y-2 w-48"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            {extractedData.map((data, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2 text-xs bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded px-2 py-1.5"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <svg className="w-3 h-3 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-neutral-700 dark:text-neutral-300">{data}</span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// HK Expertise Skeleton - Shows accumulated expertise and certifications
export const ExpertiseSkeleton = () => {
  const t = useTranslations("accountingIntelligence.skeletons.expertise");
  const [activeYear, setActiveYear] = useState(0);
  const years = [
    {
      year: "1983",
      label: t("year1990Label"),
      percentage: 25
    },
    {
      year: "2000",
      label: t("year2000Label"),
      percentage: 50
    },
    {
      year: "2010",
      label: t("year2010Label"),
      percentage: 75
    },
    {
      year: "2026",
      label: t("year2026Label"),
      percentage: 100
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveYear((prev) => (prev + 1) % years.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [years.length]);

  return (
    <div className="absolute inset-0 p-6 flex flex-col items-center justify-center">
      {/* Main Visual - Growing Bar Chart */}
      <div className="relative w-full max-w-sm mb-6">
        <div className="flex items-end justify-between h-1 gap-3">
          {years.map((yearData, i) => {
            const isActive = activeYear >= i;
            const isCurrent = activeYear === i;

            return (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                {/* Bar */}
                <motion.div
                  className="w-full bg-neutral-100 dark:bg-neutral-800 rounded-t-lg overflow-hidden relative"
                  style={{ height: "100%" }}
                >
                  <motion.div
                    className={cn(
                      "w-full rounded-t-lg relative",
                      isCurrent
                        ? "bg-gradient-to-t from-blue-600 to-blue-400"
                        : isActive
                          ? "bg-gradient-to-t from-green-600 to-green-400"
                          : "bg-gradient-to-t from-neutral-300 to-neutral-200 dark:from-neutral-700 dark:to-neutral-600"
                    )}
                    initial={{ height: 0 }}
                    animate={{ height: isActive ? `${yearData.percentage}%` : 0 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      delay: i * 0.2
                    }}
                  >
                    {/* Shine effect on active */}
                    {isCurrent && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-transparent via-white/30 to-transparent"
                        animate={{
                          y: ["-100%", "200%"],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatDelay: 1,
                        }}
                      />
                    )}
                  </motion.div>
                </motion.div>

                {/* Year Label */}
                <motion.div
                  className={cn(
                    "text-xs font-bold transition-colors",
                    isCurrent
                      ? "text-blue-600 dark:text-blue-400"
                      : isActive
                        ? "text-green-600 dark:text-green-400"
                        : "text-neutral-400 dark:text-neutral-500"
                  )}
                  animate={isCurrent ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  {yearData.year}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Description */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeYear}
          className="text-center mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
            {years[activeYear].year}
          </p>
          <p className="text-xs text-neutral-600 dark:text-neutral-400">
            {years[activeYear].label}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Key Metric */}
      <motion.div
        className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-neutral-800 rounded-xl border-2 border-blue-100 dark:border-blue-900 shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center gap-2">
          <motion.div
            className="text-3xl"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            🇭🇰
          </motion.div>
          <div>
            <motion.div
              className="text-2xl font-bold text-blue-600 dark:text-blue-400"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            >
              40+
            </motion.div>
            <div className="text-[10px] text-neutral-600 dark:text-neutral-400 -mt-1">
              Years in HK
            </div>
          </div>
        </div>

        <div className="h-8 w-px bg-neutral-200 dark:bg-neutral-700" />

        <div className="text-center">
          <motion.div
            className="text-2xl font-bold text-green-600 dark:text-green-400"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 0.3 }}
          >
            100%
          </motion.div>
          <div className="text-[10px] text-neutral-600 dark:text-neutral-400 -mt-1">
            HK Expertise
          </div>
        </div>
      </motion.div>

      {/* Progress Indicator */}
      <div className="flex gap-1.5 mt-4">
        {years.map((_, i) => (
          <motion.div
            key={i}
            className={cn(
              "h-1.5 rounded-full transition-all",
              i === activeYear
                ? "w-8 bg-blue-500"
                : i < activeYear
                  ? "w-1.5 bg-green-500"
                  : "w-1.5 bg-neutral-300 dark:bg-neutral-600"
            )}
            animate={i === activeYear ? { width: [6, 32, 32] } : {}}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  );
};

// Receipt Handling Skeleton - Shows drag and drop animation
export const ReceiptHandlingSkeleton = () => {
  const t = useTranslations("accountingIntelligence.skeletons.receiptHandling");
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedCount, setUploadedCount] = useState(0);

  const handleDrop = () => {
    setIsDragging(false);
    setUploadedCount((prev) => (prev + 1) % 4);
  };

  return (
    <div className="absolute inset-0 p-6 flex flex-col items-center justify-center">
      {/* Upload Area */}
      <motion.div
        className={cn(
          "relative w-full max-w-xs h-48 border-2 border-dashed rounded-xl transition-all cursor-pointer",
          isDragging
            ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
            : "border-neutral-300 dark:border-neutral-600 hover:border-blue-400 dark:hover:border-blue-500"
        )}
        onMouseEnter={() => setIsDragging(true)}
        onMouseLeave={() => setIsDragging(false)}
        onClick={handleDrop}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          {/* Upload Icon */}
          <motion.svg
            className="w-12 h-12 text-neutral-400 dark:text-neutral-500 mb-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={isDragging ? { y: [-5, 0, -5] } : {}}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </motion.svg>

          <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400 text-center">
            {t("dropZoneText")}
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-1">
            {t("dropZoneSubtext")}
          </p>
        </div>

        {/* Floating Receipt Icons */}
        <AnimatePresence>
          {isDragging && (
            <>
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute w-8 h-10 bg-white dark:bg-neutral-700 rounded shadow-lg border border-neutral-200 dark:border-neutral-600"
                  initial={{ x: 100, y: -50, opacity: 0, rotate: 15 }}
                  animate={{
                    x: 50 + i * 20,
                    y: 50 + i * 15,
                    opacity: 1,
                    rotate: -5 + i * 5,
                  }}
                  exit={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="w-full h-1 bg-neutral-300 dark:bg-neutral-600 mt-1.5 rounded" />
                  <div className="w-3/4 h-0.5 bg-neutral-200 dark:bg-neutral-700 mt-1 ml-1 rounded" />
                  <div className="w-3/4 h-0.5 bg-neutral-200 dark:bg-neutral-700 mt-0.5 ml-1 rounded" />
                </motion.div>
              ))}
            </>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Processing Status */}
      <AnimatePresence>
        {uploadedCount > 0 && (
          <motion.div
            className="mt-4 flex items-center gap-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg px-4 py-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <motion.svg
              className="w-5 h-5 text-green-600 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </motion.svg>
            <span className="text-sm font-medium text-green-700 dark:text-green-300">
              {t("uploaded")} {uploadedCount} {t("receipts")}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-3 text-center">
        {t("clickToUpload")}
      </p>
    </div>
  );
};
