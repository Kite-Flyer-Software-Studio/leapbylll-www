"use client";

import React, { useMemo, useState } from "react";
import { Subheading } from "@/components/subheading";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import { Link } from "@/i18n/navigation";

const ChevronDownIcon = (
  props: React.SVGProps<SVGSVGElement> & { rotated?: boolean },
) => {
  const { rotated, className, ...rest } = props;
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    >
      <path
        d="M3.75 6.5L8 10.75L12.25 6.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const AboutFAQs = () => {
  const t = useTranslations("aboutFaqs");
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const faqs = [
    {
      question: "Are you a licensed firm in Hong Kong?",
      answer: (
        <>
          Our team holds the <strong>Practising Certificate</strong> issued by the Accounting and Financial Reporting Council to CPA firms in Hong Kong and the <strong>TCSP License</strong> issued by the Companies Registry in Hong Kong.
          <br /><br />
          We are fully licensed, regulated, accountable, and fully qualified to handle every aspect of your business&apos;s financial and corporate compliance.
          <br /><br />
          You deal with one integrated team. We handle the regulatory complexity behind the scenes. All you experience is seamless, compliant, expert service.
        </>
      ),
    },
    {
      question: "Where are you based? Do you have an office I can visit?",
      answer: (
        <>
          We are proudly Hong Kong-based. Our team works from our office at Tsim Sha Tsui, and we welcome clients to visit. Unlike platforms that operate entirely virtually or outsource offshore, we believe in being accessible. You&apos;re not just a ticket number—you&apos;re our partner, and we&apos;re your neighbours.
        </>
      ),
    },
    {
      question: "How are you different from other online accounting services?",
      answer: (
        <>
          Great question. While we do not have the marketing budget of other service providers, our business models are fundamentally different in ways that matter deeply for your business&apos;s security and success.
          <br /><br />
          Some service providers are tech platforms that often outsource the actual accounting work. This can mean your financial data is sent to offshore teams or freelance bookkeepers you&apos;ll never meet. You interact with a customer service agent, not your accountant.
          <br /><br />
          We are a Hong Kong-based, family-run CPA firm. Every piece of work—from a receipt scanned in our system to your annual tax filing—is performed in-house by our own, local team of CPAs and accountants. Your dedicated advisor sits in our Hong Kong office, knows the local market intimately, and is directly accountable for your work.
          <br /><br />
          In short, we offer a true professional partnership, not a faceless, outsourced service. You get the efficiency of modern technology with the security, accountability, and strategic insight of a local expert partner.
        </>
      ),
    },
    {
      question: "What's the advantage of using one firm for everything?",
      answer: (
        <>
          Imagine building a house where the architect, builder, and inspector never speak. That&apos;s the risk with fragmented business services. Some service providers do not hold the license or qualification to provide the end-to-end solution that we offer. As for us, we have a fully qualified in-house team to handle all your business needs, from company secretarial services, to accounting, to audit and tax filings. This eliminates errors, saves you time managing multiple relationships, and allows for truly strategic, holistic advice.
        </>
      ),
    },
    {
      question: "Your website shows starting prices. Are these fixed, or do fees vary?",
      answer: (
        <>
          Our website shows starting from pricing because every business is different—and we believe you shouldn&apos;t pay for services you don&apos;t need or be squeezed into a rigid box that doesn&apos;t fit.
          <br /><br />
          Your actual fee depends on three main factors:
          <ul className="list-disc pl-6 mt-2 mb-2 space-y-1">
            <li>Transaction volume: A business with 50 monthly receipts requires less time than one with 500. We price fairly based on the actual work required.</li>
            <li>Complexity: Do you have multiple entities? Inventory? Multi-currency transactions? Cross-border operations? These factors influence the depth of work and expertise required.</li>
            <li>Service scope: We customise each engagement to your actual needs.</li>
          </ul>
          Here&apos;s what doesn&apos;t change:
          <ul className="list-disc pl-6 mt-2 mb-2 space-y-1">
            <li>You receive a clear, fixed-fee proposal before we start. No hourly billing surprises.</li>
            <li>We review your pricing annually. As your business evolves, we adjust together—fairly and transparently.</li>
          </ul>
          You pay for what you need, not a one-size-fits-none template.
          <br /><br />
          Contact us for a custom proposal. We&apos;ll listen first, then recommend a scope and fee that makes sense for your specific business.
        </>
      ),
    },
    {
      question: "Why can't you post your audit fees on the website?",
      answer: (
        <>
          Because an audit isn&apos;t a product—it&apos;s a professional engagement tailored to your specific business.
          <br /><br />
          Audit fees are driven by complexity, not revenue alone. Factors include:
          <ul className="list-disc pl-6 mt-2 mb-2 space-y-1">
            <li>Number of entities and inter-company transactions</li>
            <li>Inventory valuation and physical stocktake requirements</li>
            <li>Quality and timeliness of your financial records</li>
            <li>Specific reporting deadlines or shareholder requirements</li>
          </ul>
          We provide clear, fixed-fee proposals after a brief discovery discussion. You&apos;ll know exactly what you&apos;re investing before any work begins. No hourly billing surprises. No scope creep.
        </>
      ),
    },
    {
      question: "How do I switch from my current accountant or platform?",
      answer: (
        <>
          <strong>We handle the transition:</strong> Once you engage us, we coordinate directly with your current provider to obtain necessary records and open items.
          <br /><br />
          <strong>No disruption:</strong> We ensure your ongoing compliance deadlines are met during the switch.
          <br /><br />
          <strong>Clean handover:</strong> Our team reviews your historical data and cleans any inconsistencies, so you start fresh with accurate, organized books.
        </>
      ),
    },
  ];

  return (
    <div id="faqs" className="relative z-20 py-10 lg:py-20 w-full">
      <Container>
        <div className="flex flex-col items-center">
          <Badge>{t("badge")}</Badge>
          <Heading className="mt-4" as="h2">
            {t("heading")}
          </Heading>

          <Subheading as="p" className="mx-auto mt-6 max-w-lg text-center">
            {t("subheading")}
          </Subheading>

          <div className="mt-8 mb-12 flex w-full justify-center">
            <Button
              as={Link}
              href="/contact-us"
              variant="primary"
              className="w-full sm:w-auto"
            >
              {t("contactButton")}
            </Button>
          </div>

          <div className="w-full max-w-4xl border-t border-neutral-200 dark:border-neutral-800 divide-y divide-neutral-200 dark:divide-neutral-800">
            {faqs.map((item, index) => (
              <AccordionItem
                key={item.question}
                index={index}
                question={item.question}
                answer={item.answer}
                isOpen={openItems.has(index)}
                onToggle={() => toggle(index)}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

const AccordionItem = ({
  index,
  question,
  answer,
  isOpen,
  onToggle,
}: {
  index: number;
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  const [ref, { height }] = useMeasure();
  const targetHeight = useMemo(() => (isOpen ? height : 0), [isOpen, height]);

  return (
    <div className="w-full">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${index}`}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-4 md:px-8 py-6 text-left hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors"
      >
        <span className="text-base font-medium text-neutral-800 dark:text-neutral-100 flex-1 max-w-full">
          {question}
        </span>
        <motion.span
          className="inline-flex size-6 items-center justify-center rounded-md bg-neutral-100 dark:bg-neutral-800 flex-shrink-0"
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <ChevronDownIcon className="text-neutral-700 dark:text-neutral-300" />
        </motion.span>
      </button>

      <motion.div
        id={`faq-panel-${index}`}
        role="region"
        aria-hidden={!isOpen}
        initial={false}
        animate={{ height: targetHeight, opacity: isOpen ? 1 : 0 }}
        transition={{ height: { duration: 0.35 }, opacity: { duration: 0.2 } }}
        className="overflow-hidden px-4 md:px-8"
      >
        <div ref={ref} className="pr-2 pb-5 pl-2 sm:pr-0 sm:pl-0">
          <AnimatePresence mode="popLayout">
            {isOpen && (
              <motion.div
                key="content"
                initial={{ y: -6, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -6, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed"
              >
                {answer}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
