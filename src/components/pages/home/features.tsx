"use client";

import React from "react";
import { Badge } from "@/components/badge";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { Container } from "@/components/container";
import { cn } from "@/lib/utils";
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
        <div className="mt-28">
          <CardSkeleton className="[perspective:1200px] w-140">
            <SkeletonAllInOne />
          </CardSkeleton>
        </div>
      </Container>
    </div>
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
        "relative h-full sm:h-60 flex flex-col md:h-80",
        className
      )}
    >
      {children}
    </div>
  );
};
