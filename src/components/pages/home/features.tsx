"use client";

import React from "react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

import { Badge } from "@/components/badge";
import { Heading } from "@/components/heading";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { HiArrowRight } from "react-icons/hi2";
import { IconRocket } from "@tabler/icons-react";

import { LegacyIllustration } from "./features/legacy-illustration";
import { ModernStartupIllustration } from "./features/modern-startup-illustration";
import { StickyScroll } from "./features/sticky-scroll";

const features1 = [
  {
    icon: <IconRocket className="h-8 w-8 text-neutral-200" />,
    title: "The Stability of a 40-Year Legacy",
    valueProps: [
      "Deep expertise and seasoned advice built over decades of experience.",
      "Everything owned, managed, and done at our office in Kowloon, Hong Kong; never outsourced.",
    ],
    content: <LegacyIllustration />,
  },
  {
    icon: <IconRocket className="h-8 w-8 text-neutral-200" />,
    title: "The Energy of a Modern Startup",
    valueProps: [
      "Fair pricing, no corporate jargon, and a founder-friendly mindset.",
      "Proprietary smart accounting system; tech-enabled, human-delivered.",
    ],
    content: <ModernStartupIllustration />,
  },
];

export const Features = () => {
  const t = useTranslations("whyLeap");

  return (
    <div id="why-leap" className="relative z-20 py-10 lg:py-20 overflow-hidden flex flex-col items-center">
      <Badge>{t("badge")}</Badge>
      <Heading className="mt-4" as="h2">{t("heading")}</Heading>
      <Container>
        <div className="mt-2">
          {/* <CardSkeleton className="[perspective:1200px] w-140">
            <SkeletonAllInOne />
          </CardSkeleton> */}
          <StickyScroll content={features1} />
          <div className="flex items-center gap-4 justify-center relative z-10 px-4">
            <Button
              variant="simple"
              as={Link}
              href="/about"
              className="flex space-x-2 items-center group text-center"
            >
              <span>More About Us</span>
              <HiArrowRight className="text-muted group-hover:translate-x-1 stroke-[1px] h-3 w-3 transition-transform duration-200 dark:text-muted-dark" />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};