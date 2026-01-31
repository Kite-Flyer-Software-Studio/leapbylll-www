"use client";

import React from "react";
import { Badge } from "@/components/badge";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { Container } from "@/components/container";
import { cn } from "@/lib/utils";
import { SkeletonOne } from "@/components/skeletons/first";
import { SkeletonTwo } from "@/components/skeletons/second";
import { SkeletonThree } from "@/components/skeletons/third";
import { SkeletonAllInOne } from "@/components/skeletons/all-in-one";
import { useTranslations } from "next-intl";

export const Features = () => {
  const t = useTranslations("whyLeap");

  return (
    <div id="why-leap" className="relative z-20 py-10 lg:py-40 overflow-hidden flex flex-col items-center">
      <Badge>{t("badge")}</Badge>
      <Heading className="mt-4" as="h2">{t("heading")}</Heading>
      <Subheading className="text-center">
        {t("subheading")}
      </Subheading>

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 border-y border-neutral-200 dark:border-neutral-800 divide-neutral-200 dark:divide-neutral-800 mt-12">
          <div className="md:border-r border-neutral-200 dark:border-neutral-800">
            <CardContent>
              <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                {t("features.dedicatedCPA.title")}
              </h2>
              <CardDescription>
                {t("features.dedicatedCPA.description")}
              </CardDescription>
            </CardContent>
            <CardSkeleton>
              <SkeletonOne />
            </CardSkeleton>
          </div>
          <div className="border-t border-neutral-200 dark:border-neutral-800">
            <CardContent>
              <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                {t("features.smartAccounting.title")}
              </h2>
              <CardDescription>
                {t("features.smartAccounting.description")}
              </CardDescription>
            </CardContent>
            <CardSkeleton>
              <SkeletonTwo />
            </CardSkeleton>
          </div>
          <div className="md:border-r border-t border-neutral-200 dark:border-neutral-800">
            <CardContent>
              <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                {t("features.flexiblePricing.title")}
              </h2>
              <CardDescription>
                {t("features.flexiblePricing.description")}
              </CardDescription>
            </CardContent>
            <CardSkeleton>
              <SkeletonThree />
            </CardSkeleton>
          </div>
          <div className="border-t border-neutral-200 dark:border-neutral-800">
            <CardContent>
              <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                {t("features.allInOne.title")}
              </h2>
              <CardDescription>
                {t("features.allInOne.description")}
              </CardDescription>
            </CardContent>
            <CardSkeleton className="[perspective:1200px]">
              <SkeletonAllInOne />
            </CardSkeleton>
          </div>
        </div>
      </Container>
    </div>
  );
};

const CardContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-4 md:p-8">{children}</div>;
};

const CardDescription = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <p className="text-neutral-600 dark:text-neutral-400 mt-2 max-w-md text-balance">
      {children}
    </p>
  );
};

const CardSkeleton = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative h-80 sm:h-60 flex flex-col md:h-80 overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
};
