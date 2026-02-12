"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Badge } from "@/components/badge";
import { Heading } from "@/components/heading";
import { Container } from "@/components/container";
import { useTranslations } from "next-intl";
import { Subheading } from "@/components/subheading";
import { Button } from "@/components/button";
import { Link } from "@/i18n/navigation";
import {
  IconFlag,
  IconSettings,
  IconChecklist,
  IconCheck,
} from "@tabler/icons-react";

export function HowWeSupport() {
  const t = useTranslations("howWeSupport");
  const data = [
    {
      title: "Start",
      subtitle: "Lay Your Foundation",
      content: (
        <div>
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">
              <IconFlag className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-neutral-800 md:text-2xl dark:text-neutral-200">
              Launch with Confidence
            </h3>
          </div>

          <p className="mb-6 text-sm font-normal text-neutral-600 md:text-base dark:text-neutral-400">
            Get your Hong Kong business started on the right foot.
          </p>

          <div className="mb-6">
            <h4 className="mb-3 text-sm font-semibold text-neutral-700 dark:text-neutral-300">
              Services Included:
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                  <IconCheck className="h-3 w-3 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  Business Incorporation (Company Formation)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                  <IconCheck className="h-3 w-3 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  Initial Business Registration & IRD Advice
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                  <IconCheck className="h-3 w-3 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  Post-Incorporation Guidance (Banking, initial accounting setup)
                </span>
              </li>
            </ul>
          </div>

          <Button
            variant="primary"
            as={Link}
            href="/get-quote"
            className="mt-4"
          >
            Begin Your Venture
          </Button>
        </div>
      ),
    },
    {
      title: "Operate",
      subtitle: "Run Smoothly & Strategically",
      content: (
        <div>
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-300 dark:bg-blue-900/30">
              <IconSettings className="h-5 w-5 text-green-700 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-neutral-800 md:text-2xl dark:text-neutral-200">
              The Engine Room of Your Business
            </h3>
          </div>

          <p className="mb-6 text-sm font-normal text-neutral-600 md:text-base dark:text-neutral-400">
            Let us handle the statutory paperwork and numbers, so you can focus on your business.
          </p>

          <div className="mb-6">
            <h4 className="mb-3 text-sm font-semibold text-neutral-700 dark:text-neutral-300">
              Services Included:
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                  <IconCheck className="h-3 w-3 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  Accounting & Bookkeeping (with our proprietary OCR software)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                  <IconCheck className="h-3 w-3 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  Company Secretarial Services (Ongoing statutory filings)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                  <IconCheck className="h-3 w-3 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  Payroll & MPF Administration
                </span>
              </li>
            </ul>
          </div>

          <Button
            variant="primary"
            as={Link}
            href="/get-quote"
            className="mt-4"
          >
            Power Your Operations
          </Button>
        </div>
      ),
    },
    {
      title: "Comply & Scale",
      subtitle: "Meet Obligations & Fuel Growth",
      content: (
        <div>
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-700 dark:bg-purple-900/30">
              <IconChecklist className="h-5 w-5 text-white dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-neutral-800 md:text-2xl dark:text-neutral-200">
              Validate, Comply, and Look Ahead
            </h3>
          </div>

          <p className="mb-6 text-sm font-normal text-neutral-600 md:text-base dark:text-neutral-400">
            Meet your annual obligations with rigor and turn compliance into a strategic tool for building credibility and planning your next phase.
          </p>

          <div className="mb-6">
            <h4 className="mb-3 text-sm font-semibold text-neutral-700 dark:text-neutral-300">
              Services Included:
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                  <IconCheck className="h-3 w-3 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  Profits Tax Filing & Optimization
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                  <IconCheck className="h-3 w-3 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  Annual Audit
                </span>
              </li>
            </ul>
          </div>

          <Button
            variant="primary"
            as={Link}
            href="/get-quote"
            className="mt-4"
          >
            Secure Your Future
          </Button>
        </div>
      ),
    },
  ];
  return (
    <div id="how-we-support" className="relative z-20 py-10 lg:py-20 overflow-hidden flex flex-col items-center">
      <Badge>{t("badge")}</Badge>
      <Heading className="mt-4" as="h2">{t("heading")}</Heading>
      <Subheading as="p" className="mt-6 max-w-3xl">
        {t("subheading")}
      </Subheading>

      <Container>
        <div className="relative w-full overflow-clip">
          <Timeline data={data} />
        </div>
      </Container>
    </div>
  );
}