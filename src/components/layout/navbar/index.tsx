"use client";
import { DesktopNavbar } from "./desktop-navbar";
import { MobileNavbar } from "./mobile-navbar";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useTranslations } from 'next-intl';
import { usePathname } from '@/i18n/navigation';
import { useState } from "react";

export function NavBar() {
  const t = useTranslations('nav');
  const pathname = usePathname();

  // Navigation items - adjust links based on current page
  const navItems = [
    {
      title: t('whoWeServe'),
      link: pathname === '/contact-us' || pathname === '/get-quote' ? "/#who-we-serve" : "#who-we-serve",
    },
    {
      title: t('accountingIntelligence'),
      link: pathname === '/contact-us' || pathname === '/get-quote' ? "/#accounting-intelligence" : "#accounting-intelligence",
    },
    {
      title: t('features'),
      link: pathname === '/contact-us' || pathname === '/get-quote' ? "/#why-leap" : "#why-leap",
    },
    {
      title: t('howItWorks'),
      link: pathname === '/contact-us' || pathname === '/get-quote' ? "/#how-it-works" : "#how-it-works",
    },
    {
      title: t('servicesPricing'),
      link: pathname === '/contact-us' || pathname === '/get-quote' ? "/#services-pricing" : "#services-pricing",
    },
    {
      title: t('contactUs'),
      link: "/contact-us",
    },
  ];

  const { scrollY } = useScroll();
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.nav className="w-full fixed top-0 inset-x-0 z-50">
      <div className="hidden lg:block w-full">
        <DesktopNavbar navItems={navItems} visible={visible} />
      </div>
      <div className="flex h-full w-full items-center lg:hidden ">
        <MobileNavbar navItems={navItems} visible={visible} />
      </div>
    </motion.nav>
  );
}
