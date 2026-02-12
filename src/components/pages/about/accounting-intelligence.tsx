"use client";

import React, { useState } from "react";
import { Badge } from "@/components/badge";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { Container } from "@/components/container";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import {
  OCRSystemSkeleton,
  ExpertiseSkeleton,
  ReceiptHandlingSkeleton,
  StrategicAssetSkeleton,
  AuditReadySkeleton
} from "@/components/skeletons/accounting-intelligence";

export const AccountingIntelligence = () => {
  const t = useTranslations("accountingIntelligence");

  return (
    <div id="accounting-intelligence" className="relative z-20 py-10 lg:py-20 overflow-hidden flex flex-col items-center">
      <Badge>{t("badge")}</Badge>
      <Heading className="mt-4" as="h2">{t("heading")}</Heading>
      <Subheading className="text-center">
        {t("subheading")}
      </Subheading>

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 border-y border-neutral-200 dark:border-neutral-800 divide-neutral-200 dark:divide-neutral-800 mt-12">
          {/* OCR System - Top Left */}
          <div className="md:border-r border-neutral-200 dark:border-neutral-800">
            <CardContent>
              <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                {t("features.ocrSystem.title")}
              </h2>
              <CardDescription>
                {t("features.ocrSystem.description")}
              </CardDescription>
            </CardContent>
            <CardSkeleton>
              <OCRSystemSkeleton />
            </CardSkeleton>
          </div>

          {/* HK Expertise - Top Right */}
          <div className="border-t md:border-t-0 border-neutral-200 dark:border-neutral-800">
            <CardContent>
              <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                {t("features.expertise.title")}
              </h2>
              <CardDescription>
                {t("features.expertise.description")}
              </CardDescription>
            </CardContent>
            <CardSkeleton>
              <ExpertiseSkeleton />
            </CardSkeleton>
          </div>

          {/* Receipt Handling - Middle Left */}
          <div className="md:border-r border-t border-neutral-200 dark:border-neutral-800">
            <CardContent>
              <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                {t("features.receiptHandling.title")}
              </h2>
              <CardDescription>
                {t("features.receiptHandling.description")}
              </CardDescription>
            </CardContent>
            <CardSkeleton>
              <ReceiptHandlingSkeleton />
            </CardSkeleton>
          </div>

          {/* Strategic Asset - Middle Right */}
          <div className="border-t border-neutral-200 dark:border-neutral-800">
            <CardContent>
              <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                {t("features.strategicAsset.title")}
              </h2>
              <CardDescription>
                {t("features.strategicAsset.description")}
              </CardDescription>
            </CardContent>
            <CardSkeleton>
              <StrategicAssetSkeleton />
            </CardSkeleton>
          </div>
        </div>

        {/* Audit Ready - Full Width Bottom */}
        <div className="border-x border-b border-neutral-200 dark:border-neutral-800">
          <CardContent>
            <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
              {t("features.auditReady.title")}
            </h2>
            <CardDescription>
              {t("features.auditReady.description")}
            </CardDescription>
          </CardContent>
          <CardSkeleton className="h-96">
            <AuditReadySkeleton />
          </CardSkeleton>
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
