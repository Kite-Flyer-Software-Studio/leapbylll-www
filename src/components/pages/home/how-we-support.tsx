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
              Launch Your Hong Kong Business with Confidence
            </h3>
          </div>

          <p className="mb-6 text-sm font-normal text-neutral-600 md:text-base dark:text-neutral-400">
            Get your company started on the right foot with our expert incorporation services.
          </p>

          <p className="mb-6 text-sm font-normal text-neutral-600 md:text-base dark:text-neutral-400">
            Starting a business in Hong Kong is exciting, but the paperwork can be overwhelming. We handle the compliance so you can focus on your big ideas. Our Hong Kong company formation package for businesses includes everything you need to launch quickly and legally.
          </p>

          <div className="mb-6">
            <h4 className="mb-3 text-sm text-neutral-700 dark:text-neutral-300">
              Services Included:
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                  <IconCheck className="h-3 w-3 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  <strong>Company Incorporation:</strong> We handle the full Hong Kong company incorporation and <strong>business registration</strong> process with the Companies Registry and Inland Revenue Department (IRD), including preparation of all necessary forms and submission of your incorporation documents.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                  <IconCheck className="h-3 w-3 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  <strong>Expert Tax Advice:</strong> We provide clear guidance on your initial obligations to the Inland Revenue Department (IRD) as a business owner and helping you understand <strong>Profits Tax filing</strong> requirements from day one.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                  <IconCheck className="h-3 w-3 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  <strong>Post-Incorporation Support:</strong> Once your company is live, we help you take the next steps, including guidance on opening a corporate bank account and setting up your <strong>initial accounting and bookkeeping</strong> system.
                </span>
              </li>
            </ul>
          </div>

          <p className="mb-6 text-sm font-normal text-neutral-600 md:text-base dark:text-neutral-400">
            <strong>Ready to start?</strong> Contact us today to start your new Hong Kong company!
          </p>

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
              The Engine Room of Your Hong Kong Business
            </h3>
          </div>

          <p className="mb-6 text-sm font-normal text-neutral-600 md:text-base dark:text-neutral-400">
            Let us handle the statutory paperwork and numbers, so you can focus on your business.
          </p>

          <p className="mb-6 text-sm font-normal text-neutral-600 md:text-base dark:text-neutral-400">
            Managing the day-to-day financial and regulatory obligations of a Hong Kong company takes time and expertise. Our comprehensive outsourced services act as your dedicated back-office team, ensuring everything runs smoothly and stays compliant.
          </p>

          <div className="mb-6">
            <h4 className="mb-3 text-sm text-neutral-700 dark:text-neutral-300">
              <strong>Our Core Business Support Services:</strong>
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                  <IconCheck className="h-3 w-3 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  <strong>Accounting & Bookkeeping Services: </strong> We manage your day-to-day finances, from recording transactions to preparing management accounts for annual audit and tax filing.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                  <IconCheck className="h-3 w-3 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  <strong>Company Secretarial Services: </strong> Stay compliant with the Companies Ordinance. We handle all <strong>ongoing statutory filings</strong>, including Annual Return, director changes, maintaining the <strong>Significant Controllers Register (SCR)</strong> and provision of <strong>Registered Office</strong> for your Hong Kong company.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                  <IconCheck className="h-3 w-3 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  <strong>Payroll & MPF Administration: </strong> Take the hassle out of paying your team. We provide <strong>payroll processing in Hong Kong</strong>, including salary calculations, MPF contributions, and the annual filing of <strong>Employers' Returns (IR56B)</strong>.
                </span>
              </li>
            </ul>
          </div>

          <p className="mb-6 text-sm font-normal text-neutral-600 md:text-base dark:text-neutral-400">
            <strong>Keep your business running smoothly.</strong> Contact us today to discuss how we can support your accounting and secretarial needs!
          </p>

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
              Yearly Compliance for Hong Kong Companies: Audit & Tax Filing Made Easy
            </h3>
          </div>

          <p className="mb-6 text-sm font-normal text-neutral-600 md:text-base dark:text-neutral-400">
            The financial year-end can be stressful for small business owners. Between tight deadlines and complex regulations, it's easy to feel overwhelmed. Our team helps you navigate your <strong>annual audit and tax filing requirements</strong>, giving you peace of mind and valuable insights into your financial health.
          </p>

          <div className="mb-6">
            <h4 className="mb-3 text-sm text-neutral-700 dark:text-neutral-300">
              <strong>Our Year-End Services Include:</strong>
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                  <IconCheck className="h-3 w-3 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  <strong>Hong Kong Statutory Audit:</strong> We provide a thorough <strong>audit of your financial statements</strong> in accordance with Hong Kong Financial Reporting Standards (HKFRS) and the Companies Ordinance. The result is an <strong>Independent Auditor's Report</strong> that satisfies the Inland Revenue Department (IRD) and builds trust with your banks and other stakeholders.

                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                  <IconCheck className="h-3 w-3 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  <strong>Profits Tax Return Filing:</strong> We handle the end-to-end filing of your <strong>Profits Tax Return</strong>. We prepare the necessary profits tax computation and supporting schedules, ensuring accuracy and compliance with IRD requirements. We also act as your <strong>tax representative</strong> to manage all correspondence with the tax authorities.
                </span>
              </li>
            </ul>
          </div>

          <p className="mb-6 text-sm font-normal text-neutral-600 md:text-base dark:text-neutral-400">
            <strong>Prepare for your year-end with confidence.</strong> Contact us today for a consultation on your audit and tax obligations!
          </p>

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
    <div id="how-we-support" className="relative z-20 py-8 lg:py-16 overflow-hidden flex flex-col items-center">
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