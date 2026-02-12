"use client";
import React, { useMemo } from "react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/button";
import { useTranslations, useLocale } from "next-intl";
import { IconBrandWhatsapp, IconMail } from "@tabler/icons-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const CTAWhatsapp = () => {
  const t = useTranslations("cta");
  const tWhatsApp = useTranslations("whatsapp");
  const tEmail = useTranslations("email");
  const locale = useLocale();

  // WhatsApp message based on locale
  const whatsappUrl = useMemo(() => {
    const messages: Record<string, string> = {
      en: tWhatsApp("message"),
      "zh-HK": tWhatsApp("message"),
    };
    const message = encodeURIComponent(messages[locale] || messages.en);
    return `https://wa.me/85269792366?text=${message}`;
  }, [locale, tWhatsApp]);

  // Email URL
  const emailUrl = useMemo(() => {
    const subject = encodeURIComponent(tEmail("subject"));
    return `mailto:leap@lll.com.hk?subject=${subject}`;
  }, [tEmail]);

  return (
    <section className="py-60 w-full  overflow-hidden relative z-30">
      <div className="bg-white dark:bg-black">
        <div className="mx-auto w-full relative z-20 sm:max-w-[40rem]  md:max-w-[48rem] lg:max-w-[64rem] xl:max-w-[80rem] bg-gradient-to-br from-[#2b5d46] dark:from-neutral-900 to-[#abdf86] sm:rounded-2xl">
          <div className="relative -mx-6   sm:mx-0 sm:rounded-2xl overflow-hidden px-6  md:px-8 ">
            <div
              className="absolute inset-0 w-full h-full opacity-10 bg-noise fade-vignette [mask-image:radial-gradient(#fff,transparent,75%)]"
              style={{
                backgroundImage: "url(/noise.webp)",
                backgroundSize: "30%",
              }}
            ></div>
            <div
              className="pointer-events-none absolute inset-y-0 right-0 select-none overflow-hidden rounded-2xl"
              style={{
                mask: "radial-gradient(33.875rem 33.875rem at calc(100% - 8.9375rem) 0, white 3%, transparent 70%)",
              }}
            ></div>

            <div className="relative px-6 pb-14 pt-20 sm:px-10 sm:pb-20 lg:px-[4.5rem]">
              <h2 className="text-center text-balance mx-auto text-3xl md:text-5xl font-semibold tracking-[-0.015em] text-white">
                Tell us about your business and let us know how we can help.
              </h2>
              <div className="relative z-10 mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                {/* WhatsApp Button */}
                <motion.a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "group flex items-center gap-3 px-6 py-3 rounded-full shadow-lg transition-all duration-200",
                    "bg-[#25D366] hover:bg-[#20BA5A]",
                    "hover:scale-105 active:scale-95"
                  )}
                  title={tWhatsApp("tooltip")}
                  aria-label={tWhatsApp("tooltip")}
                  initial={{ scale: 0.9, opacity: 0 }}
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
                  <IconBrandWhatsapp className="h-6 w-6 text-white" />
                  <span className="text-white font-medium text-sm md:text-base">
                    {tWhatsApp("button")}
                  </span>
                </motion.a>

                {/* Email Button */}
                <motion.a
                  href={emailUrl}
                  className={cn(
                    "group flex items-center gap-3 px-6 py-3 rounded-full shadow-lg transition-all duration-200",
                    "bg-white hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700",
                    "hover:scale-105 active:scale-95"
                  )}
                  title={tEmail("tooltip")}
                  aria-label={tEmail("tooltip")}
                  initial={{ scale: 0.9, opacity: 0 }}
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
                  <IconMail className="h-6 w-6 text-neutral-800 dark:text-white" />
                  <span className="text-neutral-800 dark:text-white font-medium text-sm md:text-base">
                    {tEmail("button")}
                  </span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
