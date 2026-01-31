"use client";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { Button } from "@/components/button";
import { Logo } from "@/components/Logo";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from 'next-intl';
import { LocaleSwitcher } from "./locale-switcher";

type Props = {
  navItems: {
    link: string;
    title: string;
  }[];
  visible: boolean;
};

export const MobileNavbar = ({ navItems, visible }: Props) => {
  const [open, setOpen] = useState(false);
  const t = useTranslations('nav');

  return (
    <>
      {/* Fixed CTA Button at bottom - Mobile only */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="fixed bottom-0 left-0 right-0 lg:hidden z-40 p-4 pb-safe"
      >
        <Button
          as={Link}
          href="/get-quote"
          className="w-full shadow-lg text-center justify-center"
        >
          {t('bookConsult')}
        </Button>
      </motion.div>

      <motion.div
        animate={{
          backdropFilter: visible ? "blur(10px)" : "none",
          boxShadow: visible
            ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
            : "none",
          width: visible ? "90%" : "100%",
          y: visible ? 20 : 0,
          borderRadius: "2rem",
          paddingRight: visible ? "12px" : "0px",
          paddingLeft: visible ? "12px" : "0px",
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 50,
        }}
        className={cn(
          "flex relative flex-col lg:hidden w-full justify-between items-center bg-transparent max-w-[calc(100vw-2rem)] mx-auto px-0 py-2 z-50",
          visible && "bg-white/80 dark:bg-neutral-950/80"
        )}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <Logo />
          <div className="flex items-center gap-2 relative z-[60]">
            <LocaleSwitcher className="scale-90" />
            <button
              onClick={() => setOpen(!open)}
              className="p-1 -m-1 cursor-pointer relative"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <IconX
                className={cn(
                  "text-black dark:text-white transition-all duration-200 pointer-events-none",
                  open ? "opacity-100 scale-100" : "opacity-0 scale-0 absolute inset-0"
                )}
              />
              <IconMenu2
                className={cn(
                  "text-black dark:text-white transition-all duration-200 pointer-events-none",
                  !open ? "opacity-100 scale-100" : "opacity-0 scale-0 absolute inset-0"
                )}
              />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex rounded-lg absolute top-16 bg-white dark:bg-neutral-950 inset-x-0 z-50 flex-col items-start justify-start gap-4 w-full px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            >
              {/* <div className="w-full border-b border-neutral-200 dark:border-neutral-800 pb-4 mb-4">
                <LocaleSwitcher className="w-full justify-start" />
              </div> */}
              {navItems.map((navItem: any, idx: number) => (
                <Link
                  key={`link=${idx}`}
                  href={navItem.link}
                  onClick={() => setOpen(false)}
                  className="relative text-neutral-600 dark:text-neutral-300"
                >
                  <motion.span className="block">{navItem.title}</motion.span>
                </Link>
              ))}

              <Button
                as={Link}
                onClick={() => setOpen(false)}
                href="/get-quote"
                className="block md:hidden w-full text-center"
              >
                {t('bookConsult')}
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};
