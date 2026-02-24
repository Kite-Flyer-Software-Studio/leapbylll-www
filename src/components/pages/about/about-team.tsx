"use client";

import React from "react";
import { Badge } from "@/components/badge";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { FocusCards } from "@/components/ui/focus-cards";
import { useTranslations } from "next-intl";

export const AboutTeam = () => {
  const tIntro = useTranslations("aboutIntro");
  const t = useTranslations("aboutTeam");

  const teamMembers = [
    {
      title: t("team.danny.name"),
      subtitle: t("team.danny.title"),
      description: t("team.danny.description"),
      src: "/dadluk.png",
      linkedIn: "https://www.linkedin.com/in/danny-luk/",
    },
    {
      title: t("team.carmen.name"),
      subtitle: t("team.carmen.title"),
      description: t("team.carmen.description"),
      src: "/carmen-luk.png",
      linkedIn: "https://www.linkedin.com/in/carmen-luk/",
    },
    {
      title: t("team.natalie.name"),
      subtitle: t("team.natalie.title"),
      description: t("team.natalie.description"),
      src: "/natluk.png",
      linkedIn: "https://www.linkedin.com/in/natalie-luk/",
    },
  ];

  return (
    <div
      id="why-leap-by-lll"
      className="relative z-20 py-20 lg:py-28 overflow-hidden flex flex-col items-center"
    >
      <Badge>{tIntro("badge")}</Badge>
      <Heading className="mt-4" as="h2">
        {tIntro("heading")}
      </Heading>
      <Subheading className="mt-6 mr-auto text-left">
        {tIntro.rich("description.part1", {
          strong: (chunks) => <strong className="font-semibold">{chunks}</strong>,
        })}
        <br /> <br />
        {tIntro.rich("description.part2", {
          strong: (chunks) => <strong className="font-semibold">{chunks}</strong>,
        })}
        <br /> <br />
        {tIntro.rich("description.part3", {
          strong: (chunks) => <strong className="font-semibold">{chunks}</strong>,
        })}
      </Subheading>
      <div className="mt-12 w-full">
        <FocusCards cards={teamMembers} />
      </div>
    </div>
  );
};
