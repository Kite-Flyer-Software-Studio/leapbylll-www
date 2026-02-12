"use client";

import { useMemo, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { IconBrandWhatsapp, IconMail } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function ContactButtons() {
  const tWhatsApp = useTranslations("whatsapp");
  const tEmail = useTranslations("email");
  const locale = useLocale();
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  // WhatsApp message based on locale
  const whatsappUrl = useMemo(() => {
    const messages: Record<string, string> = {
      en: tWhatsApp("message"),
      "zh-HK": tWhatsApp("message"),
    };
    const message = encodeURIComponent(
      messages[locale] || messages.en
    );
    return `https://wa.me/85269792366?text=${message}`;
  }, [locale, tWhatsApp]);

  // Email URL
  const emailUrl = useMemo(() => {
    const subject = encodeURIComponent(tEmail("subject"));
    return `mailto:leap@lll.com.hk?subject=${subject}`;
  }, [tEmail]);

  return (
    <div className="fixed bottom-16 lg:bottom-16 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <div className="relative group">
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "group flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-200",
            "bg-[#25D366] hover:bg-[#20BA5A]",
            "hover:scale-110 active:scale-95"
          )}
          aria-label={tWhatsApp("tooltip")}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.1,
          }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={() => setHoveredButton("whatsapp")}
          onMouseLeave={() => setHoveredButton(null)}
        >
          <IconBrandWhatsapp className="h-7 w-7 text-white" />
        </motion.a>

        {/* Tooltip */}
        <AnimatePresence>
          {hoveredButton === "whatsapp" && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-full top-1/2 -translate-y-1/2 mr-3 pointer-events-none"
            >
              <div className="bg-neutral-900 dark:bg-neutral-800 text-white text-sm font-medium px-3 py-2 rounded-lg shadow-xl whitespace-nowrap">
                {tWhatsApp("tooltip")}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-neutral-900 dark:bg-neutral-800" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Email Button */}
      <div className="relative group">
        <motion.a
          href={emailUrl}
          className={cn(
            "group flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-200",
            "bg-emerald-600 hover:bg-emerald-700 dark:bg-blue-500 dark:hover:bg-blue-600",
            "hover:scale-110 active:scale-95"
          )}
          aria-label={tEmail("tooltip")}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={() => setHoveredButton("email")}
          onMouseLeave={() => setHoveredButton(null)}
        >
          <IconMail className="h-7 w-7 text-white" />
        </motion.a>

        {/* Tooltip */}
        <AnimatePresence>
          {hoveredButton === "email" && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-full top-1/2 -translate-y-1/2 mr-3 pointer-events-none"
            >
              <div className="bg-neutral-900 dark:bg-neutral-800 text-white text-sm font-medium px-3 py-2 rounded-lg shadow-xl whitespace-nowrap">
                {tEmail("tooltip")}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-neutral-900 dark:bg-neutral-800" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
