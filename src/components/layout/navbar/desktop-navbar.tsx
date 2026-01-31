"use client";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/button";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from 'next-intl';
// import { LocaleSwitcher } from "./locale-switcher";

type Props = {
  navItems: {
    link: string;
    title: string;
    target?: "_blank";
  }[];
  visible: boolean;
};

export const DesktopNavbar = ({ navItems, visible }: Props) => {
  const t = useTranslations('nav');
  const [hovered, setHovered] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<number | null>(null);

  useEffect(() => {
    // Extract section IDs from navItems
    const sectionIds = navItems
      .map(item => {
        const match = item.link.match(/#(.+)$/);
        return match ? match[1] : null;
      })
      .filter(Boolean) as string[];

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Trigger when section is in the middle of viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const index = sectionIds.indexOf(sectionId);
          if (index !== -1) {
            setActiveSection(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Handle scroll to detect if we're at the hero (top of page)
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // If we're near the top (within first 100px), clear active section
      if (scrollPosition < 100) {
        setActiveSection(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navItems]);

  return (
    <motion.div
      onMouseLeave={() => {
        setHovered(null);
      }}
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "80%" : "100%",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: "900px",
      }}
      className={cn(
        "hidden lg:flex flex-row self-start bg-transparent dark:bg-transparent items-center justify-between py-2 max-w-7xl mx-auto px-4 rounded-full relative z-[60] w-full",
        visible && "bg-white/80 dark:bg-neutral-950/80"
      )}
    >
      <Logo logoClassName="pl-3" />
      <motion.div className="lg:flex flex-row flex-1 absolute inset-0 hidden items-center justify-center space-x-1 text-sm text-zinc-600 font-medium hover:text-zinc-800 transition duration-200">
        {navItems.map((navItem: any, idx: number) => {
          const isActive = activeSection === idx && hovered === null;
          const isHovered = hovered === idx;
          const shouldShowBackground = isActive || isHovered;

          return (
            <Link
              onMouseEnter={() => setHovered(idx)}
              className={cn(
                "relative px-3 py-2 transition-colors duration-200",
                (isActive || isHovered)
                  ? "text-neutral-900 dark:text-neutral-100 font-semibold" 
                  : "text-neutral-600 dark:text-neutral-300"
              )}
              key={`link=${idx}`}
              href={navItem.link}
            >
              {shouldShowBackground && (
                <motion.div
                  layoutId={isHovered ? "hovered" : "active"}
                  className="w-full h-full absolute inset-0 bg-gray-100 dark:bg-neutral-800 rounded-full"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
              <span className="relative z-20">{navItem.title}</span>
            </Link>
          );
        })}
      </motion.div>
      <div className="flex items-center gap-2">
        {/* <LocaleSwitcher /> */}
        <AnimatePresence mode="popLayout" initial={false}>
          {!visible && (
            <motion.div
              initial={{
                x: 100,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: [0, 0, 1],
              }}
              exit={{
                x: 100,
                opacity: [0, 0, 0],
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            >
            </motion.div>
          )}
        </AnimatePresence>
        <Button as={Link} href="/get-quote" className="hidden md:block">
          {t('bookConsult')}
        </Button>
      </div>
    </motion.div>
  );
};
