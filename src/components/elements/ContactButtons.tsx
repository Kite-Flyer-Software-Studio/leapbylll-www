"use client";

import { useMemo } from "react";
import { useTranslations, useLocale } from "next-intl";
import { IconBrandWhatsapp, IconMail } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function ContactButtons() {
  const tWhatsApp = useTranslations("whatsapp");
  const tEmail = useTranslations("email");
  const locale = useLocale();

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
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "group flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-200",
          "bg-[#25D366] hover:bg-[#20BA5A]",
          "hover:scale-110 active:scale-95"
        )}
        title={tWhatsApp("tooltip")}
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
      >
        <IconBrandWhatsapp className="h-7 w-7 text-white" />
      </motion.a>

      {/* Email Button */}
      <motion.a
        href={emailUrl}
        className={cn(
          "group flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-200",
          "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600",
          "hover:scale-110 active:scale-95"
        )}
        title={tEmail("tooltip")}
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
      >
        <IconMail className="h-7 w-7 text-white" />
      </motion.a>
    </div>
  );
}
