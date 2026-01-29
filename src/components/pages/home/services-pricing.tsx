"use client";

import React, { useState } from "react";
import { Container } from "@/components/container";
import { Badge } from "@/components/badge";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { Button } from "@/components/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import {
  IconChevronDown,
  IconCalculator,
  IconBuildingBank,
  IconFileText,
  IconFileCheck,
  IconSettings,
  IconCheck,
  IconCurrencyDollar,
} from "@tabler/icons-react";

type PricingPeriod = "monthly" | "yearly" | "one-time";

interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  period: PricingPeriod;
  included?: string[];
}

interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  services: Service[];
  customCTA?: {
    text: string;
    action: string;
  };
}

export const ServicesPricing = () => {
const t = useTranslations("servicesPricing");

const [selectedServices, setSelectedServices] = useState<Set<string>>(
  new Set()
);
const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
  new Set(["accounting"]) // Default open accounting section
);

const categories: ServiceCategory[] = [
  {
    id: "accounting",
    title: t("categories.accounting.title"),
    description: t("categories.accounting.description"),
    icon: <IconCalculator className="size-6" />,
    services: [
      {
        id: "accounting-small",
        name: t("categories.accounting.services.small.name"),
        description: t("categories.accounting.services.small.description"),
        price: 800,
        period: "monthly",
        included: [],
      },
      {
        id: "accounting-medium",
        name: t("categories.accounting.services.medium.name"),
        description: t("categories.accounting.services.medium.description"),
        price: 1200,
        period: "monthly",
        included: [],
      },
      {
        id: "accounting-large",
        name: t("categories.accounting.services.large.name"),
        description: t("categories.accounting.services.large.description"),
        price: 1600,
        period: "monthly",
        included: [],
      },
    ],
  },
  {
    id: "incorporation",
    title: t("categories.incorporation.title"),
    description: t("categories.incorporation.description"),
    icon: <IconBuildingBank className="size-6" />,
    services: [
      {
        id: "incorporation-package",
        name: t("categories.incorporation.packageName"),
        description: t("categories.incorporation.packageDescription"),
        price: 6000,
        period: "one-time",
        included: [
          t("categories.incorporation.included.item1"),
          t("categories.incorporation.included.item2"),
          t("categories.incorporation.included.item3"),
          t("categories.incorporation.included.item4"),
        ],
      },
    ],
  },
  {
    id: "secretarial",
    title: t("categories.secretarial.title"),
    description: t("categories.secretarial.description"),
    icon: <IconFileText className="size-6" />,
    services: [
      {
        id: "secretarial-annual",
        name: t("categories.secretarial.serviceName"),
        description: t("categories.secretarial.serviceDescription"),
        price: 3500,
        period: "yearly",
        included: [
          t("categories.secretarial.included.item1"),
          t("categories.secretarial.included.item2"),
          t("categories.secretarial.included.item3"),
          t("categories.secretarial.included.item4"),
        ],
      },
    ],
  },
  {
    id: "audit",
    title: t("categories.audit.title"),
    description: t("categories.audit.description"),
    icon: <IconFileCheck className="size-6" />,
    services: [
      {
        id: "audit-basic",
        name: t("categories.audit.serviceName"),
        description: t("categories.audit.serviceDescription"),
        price: 10000,
        period: "yearly",
        included: [
          t("categories.audit.included.item1"),
          t("categories.audit.included.item2"),
          t("categories.audit.included.item3"),
          t("categories.audit.included.item4"),
        ],
      },
    ],
    customCTA: {
      text: t("categories.audit.cta"),
      action: "/contact-us?service=audit",
    },
  },
  {
    id: "other",
    title: t("categories.other.title"),
    description: t("categories.other.description"),
    icon: <IconSettings className="size-6" />,
    services: [],
    customCTA: {
      text: t("categories.other.cta"),
      action: "/contact-us",
    },
  },
];

const toggleCategory = (categoryId: string) => {
  setExpandedCategories((prev) => {
    const newSet = new Set<string>();
    // Only one section open at a time - if clicking the same one, close it, otherwise open the new one
    if (!prev.has(categoryId)) {
      newSet.add(categoryId);
    }
    return newSet;
  });
};

const toggleService = (serviceId: string, categoryId: string) => {
  setSelectedServices((prev) => {
    const newSet = new Set(prev);

    // For accounting category, ensure only one option can be selected
    if (categoryId === "accounting") {
      const category = categories.find(c => c.id === categoryId);
      if (category) {
        // Remove all accounting service selections
        category.services.forEach(service => {
          newSet.delete(service.id);
        });
      }
    }

    if (prev.has(serviceId)) {
      newSet.delete(serviceId);
    } else {
      newSet.add(serviceId);
    }
    return newSet;
  });
};

const calculateCosts = () => {
  let monthly = 0;
  let yearly = 0;
  let oneTime = 0;

  categories.forEach((category) => {
    category.services.forEach((service) => {
      if (selectedServices.has(service.id)) {
        if (service.period === "monthly") {
          monthly += service.price;
        } else if (service.period === "yearly") {
          yearly += service.price;
        } else if (service.period === "one-time") {
          oneTime += service.price;
        }
      }
    });
  });

  return { monthly, yearly, oneTime };
};

const costs = calculateCosts();
const hasSelectedServices = selectedServices.size > 0;

return (
  <div id="services-pricing" className="py-20" >
    <Container>
      <div className="relative flex flex-col items-center">
        <Badge>{t("badge")}</Badge>
        <Heading as="h2" className="mt-4">
          {t("heading")}
        </Heading>

        <Subheading as="p" className="mt-6 max-w-3xl">
          {t("subheading")}
        </Subheading>
      </div>

      {/* Two Column Layout: Services Left, Cost Estimate Right */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-[minmax(600px,2fr)_minmax(350px,1fr)] gap-8 w-full">
        {/* Left Column - Service Categories */}
        <div className="space-y-4 w-full min-w-[600px] relative z-20">
          {categories.map((category) => (
            <CategorySection
              key={category.id}
              category={category}
              isExpanded={expandedCategories.has(category.id)}
              onToggle={() => toggleCategory(category.id)}
              selectedServices={selectedServices}
              onToggleService={(serviceId) => toggleService(serviceId, category.id)}
            />
          ))}
        </div>

        {/* Right Column - Cost Calculator Display */}
        <div className="w-full min-w-[350px] relative z-10">
          <div className="sticky top-24 w-full min-w-[350px]">
            <AnimatePresence mode="wait">
              {hasSelectedServices ? (
                <motion.div
                  key="cost-display"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="min-w-full"
                >
                  <div className="relative rounded-2xl border border-neutral-200 bg-white p-6 shadow-xl dark:border-neutral-800 dark:bg-neutral-900 w-full">
                    {/* Background gradient glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-green-500/5 rounded-2xl" />

                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                          <IconCurrencyDollar className="size-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                          {t("calculator.title")}
                        </h3>
                      </div>

                      <div className="space-y-3">
                        {costs.monthly > 0 && (
                          <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-4 bg-neutral-50 dark:bg-neutral-900/50">
                            <span className="text-xs text-neutral-600 dark:text-neutral-400 font-medium uppercase tracking-wide">
                              {t("calculator.monthly")}
                            </span>
                            <div className="mt-2">
                              <span className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                                HK${costs.monthly.toLocaleString()}
                              </span>
                              <span className="text-sm font-normal text-neutral-500 dark:text-neutral-400 ml-1">
                                / {t("calculator.perMonth")}
                              </span>
                            </div>
                          </div>
                        )}

                        {costs.yearly > 0 && (
                          <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-4 bg-neutral-50 dark:bg-neutral-900/50">
                            <span className="text-xs text-neutral-600 dark:text-neutral-400 font-medium uppercase tracking-wide">
                              {t("calculator.yearly")}
                            </span>
                            <div className="mt-2">
                              <span className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                                HK${costs.yearly.toLocaleString()}
                              </span>
                              <span className="text-sm font-normal text-neutral-500 dark:text-neutral-400 ml-1">
                                / {t("calculator.perYear")}
                              </span>
                            </div>
                          </div>
                        )}

                        {costs.oneTime > 0 && (
                          <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-4 bg-neutral-50 dark:bg-neutral-900/50">
                            <span className="text-xs text-neutral-600 dark:text-neutral-400 font-medium uppercase tracking-wide">
                              {t("calculator.oneTime")}
                            </span>
                            <div className="mt-2">
                              <span className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                                HK${costs.oneTime.toLocaleString()}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="mt-6 flex flex-col gap-3">
                        <Button as={Link} href="/get-quote" className="w-full">{t("cta.getQuote")}</Button>
                        <Button as={Link} href="/get-quote" variant="simple" className="w-full">
                          {t("cta.scheduleConsultation")}
                        </Button>
                      </div>

                      <p className="mt-4 text-xs text-center text-neutral-500 dark:text-neutral-400">
                        {t("calculator.disclaimer")}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="min-w-full"
                >
                  <div className="relative rounded-2xl border border-dashed border-neutral-300 bg-white p-6 shadow-xl dark:border-neutral-700 dark:bg-neutral-900 w-full">
                    {/* Background gradient glow - same as cost display */}
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-500/5 via-neutral-500/5 to-neutral-500/5 rounded-2xl" />

                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-6 opacity-30">
                        <div className="p-2 rounded-lg bg-neutral-200 dark:bg-neutral-700">
                          <IconCurrencyDollar className="size-6 text-neutral-400 dark:text-neutral-500" />
                        </div>
                        <h3 className="text-lg font-semibold text-neutral-500 dark:text-neutral-400">
                          {t("calculator.title")}
                        </h3>
                      </div>

                      <div className="text-center py-12">
                        <div className="mx-auto w-16 h-16 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center mb-4">
                          <IconCalculator className="size-8 text-neutral-400 dark:text-neutral-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                          {t("calculator.selectServices")}
                        </h3>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">
                          {t("calculator.selectServicesDescription")}
                        </p>
                      </div>

                      <div className="mt-6 flex flex-col gap-3 opacity-30">
                        <div className="w-full h-10 rounded-full bg-neutral-200 dark:bg-neutral-800" />
                        <div className="w-full h-10 rounded-full bg-neutral-100 dark:bg-neutral-800/50" />
                      </div>

                      <div className="mt-4 h-4 opacity-0">
                        <p className="text-xs text-center">Placeholder</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <p className="text-lg font-medium text-neutral-700 dark:text-neutral-300 mb-6">
          {t("cta.message")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button as={Link} href="/get-quote" className="shadow-xl">{t("cta.contactForQuote")}</Button>
        </div>
      </div>
    </Container>
  </div>
);
};

const CategorySection = ({
  category,
  isExpanded,
  onToggle,
  selectedServices,
  onToggleService,
}: {
  category: ServiceCategory;
  isExpanded: boolean;
  onToggle: () => void;
  selectedServices: Set<string>;
  onToggleService: (serviceId: string) => void;
}) => {
  const hasServices = category.services.length > 0;
  const hasSelectedService = category.services.some(service =>
    selectedServices.has(service.id)
  );

  return (
    <div className="rounded-xl border border-neutral-200 bg-white overflow-hidden dark:border-neutral-800 dark:bg-neutral-900 w-full">
      {/* Category Header */}
      <button
        onClick={onToggle}
        className={cn(
          "w-full px-6 py-5 flex items-center justify-between transition-colors",
          "hover:bg-neutral-50 dark:hover:bg-neutral-800/50",
          isExpanded && "bg-neutral-50 dark:bg-neutral-800/50"
        )}
      >
        <div className="flex items-center gap-4 text-left min-w-0 flex-1">
          <div className={cn(
            "p-3 rounded-lg transition-colors",
            hasSelectedService
              ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
              : "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
          )}>
            {category.icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
              {category.title}
              {hasSelectedService && (
                <span className="inline-flex items-center justify-center p-1 rounded-full bg-green-100 dark:bg-green-900/30">
                  <IconCheck className="size-4 text-green-600 dark:text-green-400" />
                </span>
              )}
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
              {category.description}
            </p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <IconChevronDown className="size-5 text-neutral-400" />
        </motion.div>
      </button>

      {/* Category Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden w-full"
          >
            <div className="px-6 pb-6 pt-2 border-t border-neutral-200 dark:border-neutral-800 w-full">
              {hasServices ? (
                <div className="space-y-3 w-full">
                  {category.services.map((service) => (
                    <ServiceRow
                      key={service.id}
                      service={service}
                      isSelected={selectedServices.has(service.id)}
                      onToggle={() => onToggleService(service.id)}
                    />
                  ))}
                </div>
              ) : (
                <div className="py-6 text-center">
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                    {t("categories.other.availableServices")}
                  </p>
                  <ul className="inline-block text-left space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                    <li className="flex items-center gap-2">
                      <IconCheck className="size-4 text-green-600 dark:text-green-400" />
                      {t("categories.other.services.item1")}
                    </li>
                    <li className="flex items-center gap-2">
                      <IconCheck className="size-4 text-green-600 dark:text-green-400" />
                      {t("categories.other.services.item2")}
                    </li>
                    <li className="flex items-center gap-2">
                      <IconCheck className="size-4 text-green-600 dark:text-green-400" />
                      {t("categories.other.services.item3")}
                    </li>
                    <li className="flex items-center gap-2">
                      <IconCheck className="size-4 text-green-600 dark:text-green-400" />
                      {t("categories.other.services.item4")}
                    </li>
                  </ul>
                </div>
              )}

              {category.customCTA && (
                <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-800">
                  <Button variant="outline" className="w-full">
                    {category.customCTA.text}
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ServiceRow = ({
  service,
  isSelected,
  onToggle,
}: {
  service: Service;
  isSelected: boolean;
  onToggle: () => void;
}) => {
  const t = useTranslations("servicesPricing");

  const getPeriodBadge = (period: PricingPeriod) => {
    const badges = {
      monthly: {
        text: t("badges.monthly"),
        color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
      },
      yearly: {
        text: t("badges.yearly"),
        color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
      },
      "one-time": {
        text: t("badges.oneTime"),
        color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
      },
    };
    return badges[period];
  };

  const badge = getPeriodBadge(service.period);

  return (
    <div
      className={cn(
        "rounded-lg border p-4 transition-all cursor-pointer w-full",
        isSelected
          ? "border-blue-500 bg-blue-50 dark:border-blue-600 dark:bg-blue-950/20"
          : "border-neutral-200 bg-neutral-50 hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:border-neutral-700"
      )}
      onClick={onToggle}
    >
      <div className="flex items-start gap-4 w-full">
        {/* Checkbox */}
        <div className="mt-1 shrink-0">
          <div
            className={cn(
              "w-5 h-5 rounded border-2 flex items-center justify-center transition-colors",
              isSelected
                ? "bg-blue-600 border-blue-600 dark:bg-blue-500 dark:border-blue-500"
                : "border-neutral-300 dark:border-neutral-600"
            )}
          >
            {isSelected && <IconCheck className="size-3 text-white" />}
          </div>
        </div>

        {/* Service Details */}
        <div className="flex-1 min-w-0 w-full">
          <div className="flex items-start justify-between gap-4 w-full">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">
                  {service.name}
                </h4>
                <span
                  className={cn(
                    "px-2 py-0.5 rounded text-xs font-medium shrink-0",
                    badge.color
                  )}
                >
                  {badge.text}
                </span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                {service.description}
              </p>

              {service.included && service.included.length > 0 && (
                <ul className="space-y-1">
                  {service.included.map((item, index) => (
                    <li
                      key={index}
                      className="text-xs text-neutral-600 dark:text-neutral-400 flex items-center gap-2"
                    >
                      <IconCheck className="size-3 text-green-600 dark:text-green-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Price */}
            <div className="text-right shrink-0 w-32">
              <div className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                HK${service.price.toLocaleString()}
              </div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400">
                {service.period === "monthly" && t("calculator.perMonth")}
                {service.period === "yearly" && t("calculator.perYear")}
                {service.period === "one-time" && t("calculator.oneTimeLabel")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 
