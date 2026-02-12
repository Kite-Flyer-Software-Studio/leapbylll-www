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

  // Get FAQ items count dynamically
  const faqCount = 10; // Maximum expected FAQs
  const faqs = [];
  for (let i = 0; i < faqCount; i++) {
    if (t.has(`items.${i}.question`)) {
      faqs.push({
        question: t(`items.${i}.question`),
        answer: t(`items.${i}.answer`),
      });
    } else {
      break;
    }
  }

  return (
    <div className="relative z-20 py-10 lg:py-20 w-full">
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
  answer: string;
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
                className="text-neutral-600 dark:text-neutral-400 whitespace-pre-line"
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
