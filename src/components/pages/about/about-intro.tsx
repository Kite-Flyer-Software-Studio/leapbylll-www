"use client";

import React from "react";
import { Badge } from "@/components/badge";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { Container } from "@/components/container";
import { useTranslations } from "next-intl";

const LLL_OFFICE_VIDEO_URL =
  "https://tbguskbayvt1d7md.public.blob.vercel-storage.com/dad-luk-nat-luk.mp4";

export const AboutIntro = () => {
  const t = useTranslations("aboutIntro");

  return (
    <div id="about" className="flex flex-col pt-24 md:pt-40 pb-40 relative overflow-hidden">
      <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
        <div className="flex flex-col items-start justify-start">
          <Badge>{t("badge")}</Badge>
          <Heading className="mt-4 text-left">
            {t("heading")}
          </Heading>
          <Subheading className="mt-6 mr-auto text-left">
            {t.rich("description.part1", {
              strong: (chunks) => <strong className="font-semibold">{chunks}</strong>,
            })}
            <br /> <br />
            {t.rich("description.part2", {
              strong: (chunks) => <strong className="font-semibold">{chunks}</strong>,
            })}
            <br /> <br />
            {t.rich("description.part3", {
              strong: (chunks) => <strong className="font-semibold">{chunks}</strong>,
            })}
          </Subheading>
        </div>
        <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 p-2">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="aspect-square xs:h-[300px] xs:w-[300px] sm:h-[450px] sm:w-[450px] lg:h-[600px] lg:w-[600px] rounded-2xl object-cover"
            aria-label={t("imageAlt")}
          >
            <source src={LLL_OFFICE_VIDEO_URL} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};
