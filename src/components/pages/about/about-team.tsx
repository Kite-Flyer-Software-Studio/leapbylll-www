"use client";

import React from "react";
import { Badge } from "@/components/badge";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { FocusCards } from "@/components/ui/focus-cards";
import { useTranslations } from "next-intl";

export const AboutTeam = () => {
  const t = useTranslations("aboutTeam");

  const teamMembers = [
    {
      title: t("team.danny.name"),
      subtitle: t("team.danny.title"),
      description: t("team.danny.description"),
      src: "/dad-luk.png",
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
      src: "/nat-luk.png",
      linkedIn: "https://www.linkedin.com/in/natalie-luk/",
    },
  ];

  return (
    <div
      id="team"
      className="relative z-20 py-10 lg:py-20 overflow-hidden flex flex-col items-center"
    >
      <Badge>{t("badge")}</Badge>
      <Heading className="mt-4" as="h2">
        {t("heading")}
      </Heading>
      <Subheading className="text-center">{t("subheading")}</Subheading>

      <div className="mt-12 w-full">
        <FocusCards cards={teamMembers} />
      </div>
    </div>
  );
};
