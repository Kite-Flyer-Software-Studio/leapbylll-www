"use client";

import { Link } from "@/i18n/navigation";
import React from "react";
import { Logo } from "@/components/Logo";
import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations("footer");

  const navigation = [
    {
      name: t("links.whoWeServe"),
      href: "/#who-we-serve",
    },
    {
      name: t("links.whyLeap"),
      href: "/#why-leap",
    },
    {
      name: t("links.howItWorks"),
      href: "/#how-it-works",
    },
    {
      name: t("links.servicesPricing"),
      href: "/#services-pricing",
    },
  ];

  const quickLinks = [
    {
      name: t("links.getQuote"),
      href: "/get-quote",
    },
    {
      name: t("links.contactUs"),
      href: "/contact-us",
    },
  ];
  // const legal = [
  //   {
  //     name: t("links.privacyPolicy"),
  //     href: "#",
  //   },
  //   {
  //     name: t("links.termsOfService"),
  //     href: "#",
  //   },
  // ];
  const socials = [
    {
      name: t("links.linkedin"),
      href: "https://www.linkedin.com/company/louis-lai-luk-cpa-limited/",
    },
  ];
  return (
    <div className="relative">
      <div className="border-t border-neutral-100  dark:border-neutral-800 px-8 pt-20 pb-32 relative bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto text-sm text-neutral-500 dark:text-neutral-400 flex sm:flex-row flex-col justify-between items-start ">
          <div>
            <div className="mr-4  md:flex mb-4">
              <Logo />
            </div>
            <div>{t("copyright")}</div>
            <div className="mt-2">{t("allRightsReserved")}</div>
          </div>
          <div className="grid grid-cols-3 gap-10 items-start mt-10 md:mt-0">
            <div className="flex justify-center space-y-4 flex-col mt-4">
              <div className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                {t("navigation")}
              </div>
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  className="transition-colors hover:text-black text-muted dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex justify-center space-y-4 flex-col mt-4">
              <div className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                {t("legal")}
              </div>
              {/* {legal.map((link) => (
                <Link
                  key={link.name}
                  className="transition-colors hover:text-black text-muted dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ))} */}
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  className="transition-colors hover:text-black text-muted dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex justify-center space-y-4 flex-col mt-4">
              <div className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                {t("social")}
              </div>
              {socials.map((link) => (
                <Link
                  key={link.name}
                  className="transition-colors hover:text-black text-muted dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-5xl md:text-9xl lg:text-[15rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 dark:from-neutral-950 to-neutral-200 dark:to-neutral-800 inset-x-0">
        LEAP BY LLL
      </p>
    </div>
  );
};
