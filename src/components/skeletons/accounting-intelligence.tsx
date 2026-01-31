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

// HK Expertise Skeleton - Shows timeline of years
export const ExpertiseSkeleton = () => {
  const t = useTranslations("accountingIntelligence.skeletons.expertise");
  const [activeYear, setActiveYear] = useState(0);
  const years = [
    { year: t("year1990"), label: t("year1990Label") },
    { year: t("year2000"), label: t("year2000Label") },
    { year: t("year2010"), label: t("year2010Label") },
    { year: t("year2026"), label: t("year2026Label") },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveYear((prev) => (prev + 1) % years.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [years.length]);

  return (
    <div className="absolute inset-0 p-8 flex flex-col items-center justify-center">
      {/* Hong Kong Skyline Silhouette */}
      <div className="relative w-full max-w-xs mb-8">
        <motion.div
          className="flex items-end justify-center gap-1 h-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {[40, 60, 45, 70, 55, 75, 50, 65, 55, 80, 60, 70].map((height, i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-t from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 w-4 rounded-t"
              style={{ height: `${height}%` }}
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            />
          ))}
        </motion.div>
        
        {/* Sun/Badge */}
        <motion.div
          className="absolute -top-4 right-8 w-10 h-10 bg-yellow-400 dark:bg-yellow-300 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />
      </div>

      {/* Timeline */}
      <div className="relative w-full max-w-xs">
        {/* Timeline Line */}
        <div className="absolute left-0 right-0 top-6 h-0.5 bg-neutral-200 dark:bg-neutral-700" />
        
        {/* Year Markers */}
        <div className="relative flex justify-between">
          {years.map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setActiveYear(i)}
            >
              <motion.div
                className={cn(
                  "w-3 h-3 rounded-full border-2 mb-2 transition-colors",
                  activeYear === i
                    ? "bg-blue-500 border-blue-500 scale-125"
                    : "bg-white dark:bg-neutral-800 border-neutral-300 dark:border-neutral-600"
                )}
                animate={activeYear === i ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 0.3 }}
              />
              <span
                className={cn(
                  "text-xs font-medium transition-colors",
                  activeYear === i
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-neutral-500 dark:text-neutral-500"
                )}
              >
                {item.year}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Year Description */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeYear}
            className="mt-6 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              {years[activeYear].label}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Badge */}
      <motion.div
        className="mt-6 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <span className="text-xs font-semibold text-blue-700 dark:text-blue-300">
          {t("badge")}
        </span>
      </motion.div>
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

// Strategic Asset Skeleton - Shows data transformation
export const StrategicAssetSkeleton = () => {
  const t = useTranslations("accountingIntelligence.skeletons.strategicAsset");
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStage((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const metrics = [
    { label: t("revenue"), value: "+32%", color: "text-green-600 dark:text-green-400" },
    { label: t("expenses"), value: "-8%", color: "text-blue-600 dark:text-blue-400" },
    { label: t("profit"), value: "+45%", color: "text-purple-600 dark:text-purple-400" },
  ];

  return (
    <div className="absolute inset-0 p-6 flex flex-col items-center justify-center">
      {/* Data Pipeline */}
      <div className="flex items-center gap-4 mb-8">
        {/* Raw Data */}
        <motion.div
          className="relative"
          animate={stage >= 0 ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 bg-neutral-200 dark:bg-neutral-700 rounded-lg flex items-center justify-center">
            <svg className="w-8 h-8 text-neutral-500 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <p className="text-xs text-center mt-1 text-neutral-600 dark:text-neutral-400">{t("rawData")}</p>
        </motion.div>

        {/* Arrow with animation */}
        <motion.svg
          className="w-8 h-8 text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          animate={stage >= 1 ? { x: [0, 5, 0] } : {}}
          transition={{ duration: 0.5, repeat: stage >= 1 ? 2 : 0 }}
        >
          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </motion.svg>

        {/* Processing */}
        <motion.div
          className="relative"
          animate={stage >= 1 ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center border-2 border-blue-500">
            <motion.svg
              className="w-8 h-8 text-blue-600 dark:text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={stage >= 1 ? { rotate: 360 } : {}}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </motion.svg>
          </div>
          <p className="text-xs text-center mt-1 text-neutral-600 dark:text-neutral-400">{t("processing")}</p>
        </motion.div>

        {/* Arrow */}
        <motion.svg
          className="w-8 h-8 text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          animate={stage >= 2 ? { x: [0, 5, 0] } : {}}
          transition={{ duration: 0.5, repeat: stage >= 2 ? 2 : 0 }}
        >
          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </motion.svg>

        {/* Insights */}
        <motion.div
          className="relative"
          animate={stage >= 2 ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <p className="text-xs text-center mt-1 text-neutral-600 dark:text-neutral-400">{t("insights")}</p>
        </motion.div>
      </div>

      {/* Metrics Display */}
      <AnimatePresence>
        {stage >= 2 && (
          <motion.div
            className="grid grid-cols-3 gap-3 w-full max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            {metrics.map((metric, i) => (
              <motion.div
                key={i}
                className="bg-white dark:bg-neutral-800 rounded-lg p-3 border border-neutral-200 dark:border-neutral-700 shadow-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="text-xs text-neutral-500 dark:text-neutral-400">{metric.label}</p>
                <p className={cn("text-lg font-bold mt-1", metric.color)}>{metric.value}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Audit Ready Skeleton - Full width, shows compliance checklist
export const AuditReadySkeleton = () => {
  const t = useTranslations("accountingIntelligence.skeletons.auditReady");
  const [completedItems, setCompletedItems] = useState<number[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const checklistItems = [
    { id: 1, label: t("item1"), icon: "📊" },
    { id: 2, label: t("item2"), icon: "🔍" },
    { id: 3, label: t("item3"), icon: "📝" },
    { id: 4, label: t("item4"), icon: "✅" },
    { id: 5, label: t("item5"), icon: "📈" },
    { id: 6, label: t("item6"), icon: "🎯" },
  ];

  useEffect(() => {
    if (completedItems.length < checklistItems.length) {
      const timer = setTimeout(() => {
        setCompletedItems([...completedItems, completedItems.length]);
      }, 800);
      return () => clearTimeout(timer);
    } else if (completedItems.length === checklistItems.length && !isGenerating) {
      const timer = setTimeout(() => {
        setIsGenerating(true);
        setTimeout(() => {
          setIsGenerating(false);
          setCompletedItems([]);
        }, 2000);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [completedItems, checklistItems.length, isGenerating]);

  return (
    <div className="absolute inset-0 p-8 flex items-center justify-center">
      <div className="w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side - Checklist */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-4">
              {t("checklistTitle")}
            </h3>
            {checklistItems.map((item, i) => (
              <motion.div
                key={item.id}
                className={cn(
                  "flex items-center gap-3 p-3 rounded-lg border transition-all",
                  completedItems.includes(i)
                    ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
                    : "bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700"
                )}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <motion.div
                  className={cn(
                    "flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center",
                    completedItems.includes(i)
                      ? "bg-green-500 border-green-500"
                      : "border-neutral-300 dark:border-neutral-600"
                  )}
                  animate={completedItems.includes(i) ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.3 }}
                >
                  {completedItems.includes(i) && (
                    <motion.svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </motion.svg>
                  )}
                </motion.div>
                <div className="flex-1">
                  <p className={cn(
                    "text-sm transition-colors",
                    completedItems.includes(i)
                      ? "text-green-700 dark:text-green-300 font-medium"
                      : "text-neutral-600 dark:text-neutral-400"
                  )}>
                    <span className="mr-2">{item.icon}</span>
                    {item.label}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Progress Bar */}
            <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
              <div className="flex justify-between text-xs text-neutral-600 dark:text-neutral-400 mb-2">
                <span>{t("progress")}</span>
                <span>{Math.round((completedItems.length / checklistItems.length) * 100)}%</span>
              </div>
              <div className="h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-green-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${(completedItems.length / checklistItems.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </div>

          {/* Right Side - Report Preview */}
          <div className="relative">
            <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-2xl border-2 border-neutral-200 dark:border-neutral-700 p-6 h-full">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-200 dark:border-neutral-700">
                <div>
                  <h4 className="text-sm font-bold text-neutral-800 dark:text-neutral-200">
                    {t("reportTitle")}
                  </h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                    {t("reportSubtitle")}
                  </p>
                </div>
                <motion.div
                  className={cn(
                    "px-2 py-1 rounded text-xs font-semibold",
                    completedItems.length === checklistItems.length
                      ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                      : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300"
                  )}
                  animate={
                    completedItems.length === checklistItems.length
                      ? { scale: [1, 1.05, 1] }
                      : {}
                  }
                >
                  {completedItems.length === checklistItems.length ? t("ready") : t("preparing")}
                </motion.div>
              </div>

              {/* Report Content Placeholder */}
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="space-y-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: completedItems.length >= i ? 1 : 0.3 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="h-2 bg-neutral-200 dark:bg-neutral-700 rounded w-1/4" />
                    <div className="h-1.5 bg-neutral-100 dark:bg-neutral-800 rounded w-full" />
                    <div className="h-1.5 bg-neutral-100 dark:bg-neutral-800 rounded w-5/6" />
                  </motion.div>
                ))}
              </div>

              {/* Generate Button */}
              <AnimatePresence>
                {completedItems.length === checklistItems.length && (
                  <motion.button
                    className="mt-6 w-full py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium text-sm shadow-lg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setIsGenerating(true);
                      setTimeout(() => {
                        setIsGenerating(false);
                        setCompletedItems([]);
                      }, 2000);
                    }}
                  >
                    {isGenerating ? (
                      <span className="flex items-center justify-center gap-2">
                        <motion.svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </motion.svg>
                        {t("generating")}
                      </span>
                    ) : (
                      t("generateReport")
                    )}
                  </motion.button>
                )}
              </AnimatePresence>
            </div>

            {/* Floating badges */}
            <AnimatePresence>
              {completedItems.length === checklistItems.length && !isGenerating && (
                <>
                  <motion.div
                    className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg"
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0 }}
                  >
                    ✓ {t("auditReady")}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
