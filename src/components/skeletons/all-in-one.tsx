"use client";

import { cn } from "@/lib/utils";
import {
  IconBuildingBank,
  IconFileText,
  IconCalculator,
  IconChecklist,
  IconReceiptTax,
} from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const SkeletonAllInOne = () => {
  const t = useTranslations("skeletons.allInOne");

  return (
    <div
      className="flex-1 rounded-t-3xl gap-2 flex items-center justify-center w-full h-full absolute inset-x-0 p-2"
      style={{
        transform: "rotateY(20deg) rotateX(20deg) rotateZ(-20deg)",
      }}
    >
      <Circle className="flex items-center justify-center border-neutral-200 dark:border-neutral-700 shadow-sm">
        <Image
          src="/logos/leapbylll-logo.png"
          alt="LEAP by LLL"
          width={80}
          height={80}
          className="w-20 h-auto"
        />

        {/* Incorporation */}
        <RevolvingCard className="[--initial-position:0deg] [--translate-position:140px] [--orbit-duration:30s] size-auto ring-0 shadow-none bg-transparent w-60">
          <SkeletonCard
            className="absolute bottom-0 left-12 max-w-[57%] z-30 bg-white dark:bg-neutral-800"
            icon={<IconBuildingBank className="size-4 text-green-600" />}
            title={t("incorporation")}
          />
        </RevolvingCard>

        {/* Company Secretarial */}
        <RevolvingCard className="[--initial-position:72deg] [--translate-position:160px] [--orbit-duration:20s] size-auto ring-0 shadow-none bg-transparent w-60">
          <SkeletonCard
            className="absolute bottom-0 left-12 max-w-[58%] z-30 bg-white dark:bg-neutral-800"
            icon={<IconFileText className="size-4 text-purple-500" />}
            title={t("companySecretarial")}
          />
        </RevolvingCard>

        {/* Accounting */}
        <RevolvingCard className="[--initial-position:144deg] [--translate-position:180px] [--orbit-duration:15s] size-auto ring-0 shadow-none bg-transparent w-60">
          <SkeletonCard
            className="absolute bottom-0 left-12 max-w-[54%] z-30 bg-white dark:bg-neutral-800"
            icon={<IconCalculator className="size-4 text-blue-600" />}
            title={t("accounting")}
          />
        </RevolvingCard>

        {/* Audit */}
        <RevolvingCard className="[--initial-position:216deg] [--translate-position:180px] [--orbit-duration:20s] size-auto ring-0 shadow-none bg-transparent w-60">
          <SkeletonCard
            className="absolute bottom-0 left-12 max-w-[40%] z-30 bg-white dark:bg-neutral-800"
            icon={<IconChecklist className="size-4 text-orange-500" />}
            title={t("audit")}
          />
        </RevolvingCard>

        {/* Tax Advisory */}
        <RevolvingCard className="[--initial-position:288deg] [--translate-position:180px] [--orbit-duration:25s] size-auto ring-0 shadow-none bg-transparent w-60">
          <SkeletonCard
            className="absolute bottom-0 left-12 max-w-[58%] z-30 bg-white dark:bg-neutral-800"
            icon={<IconReceiptTax className="size-4 text-red-500" />}
            title={t("taxAdvisory")}
          />
        </RevolvingCard>

      </Circle>
      <Circle className="shadow border-neutral-100 dark:border-neutral-700 size-60 bg-neutral-100/80 z-[9] dark:bg-neutral-800/80 relative"></Circle>
      <Circle className="shadow border-neutral-100 dark:border-neutral-700 size-80 bg-neutral-100/60 z-[8] dark:bg-neutral-800/60"></Circle>
      <Circle className="shadow border-neutral-100 dark:border-neutral-700 size-100 bg-neutral-100/40 z-[7] dark:bg-neutral-800/40"></Circle>
      <Circle className="shadow border-neutral-100 dark:border-neutral-700 size-120 bg-neutral-100/20 z-[6] dark:bg-neutral-800/20"></Circle>
    </div>
  );
};

const SkeletonCard = ({
  icon, 
  title,
  description,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  description?: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "max-w-[85%] h-fit my-auto bg-transparent mx-auto w-full p-3 rounded-2xl border border-neutral-200 dark:border-neutral-700 shadow-2xl",
        className
      )}
    >
      <div className="flex gap-3 items-center">
        {icon}
        <p className="text-xs font-normal text-black dark:text-white">
          {title}
        </p>
      </div>
      {description && (
        <p className="text-[10px] text-neutral-400 dark:text-neutral-400 font-normal mt-3">
          {description}
        </p>
      )}
    </div>
  );
};

const RevolvingCard = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "size-10 flex absolute inset-0 m-auto items-center justify-center bg-white dark:bg-transparent border border-transparent shadow-black/10 ring-1 ring-black/10 rounded-sm animate-orbit [--translate-position:120px] [--orbit-duration:10s]",
        className
      )}
    >
      {children}
    </div>
  );
};

const Circle = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "size-40 bg-white absolute inset-0 dark:bg-neutral-800 shrink-0 border z-[10] border-transparent rounded-full m-auto",
        className
      )}
    >
      {children}
    </div>
  );
};
