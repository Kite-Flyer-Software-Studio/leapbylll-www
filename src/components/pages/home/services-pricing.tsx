"use client";

import React, { useState } from "react";
import { Container } from "@/components/container";
import { Badge } from "@/components/badge";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { Button } from "@/components/button";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { ServiceCategories } from "./services-pricing/ServiceCategories";
import { CostCalculator } from "./services-pricing/CostCalculator";
import { CostBreakdown } from "./services-pricing/types";

export const ServicesPricing = () => {
  const t = useTranslations("servicesPricing");

  const [selectedServices, setSelectedServices] = useState<Set<string>>(new Set());
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(["accounting"]) // Default open accounting section
  );

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
        // Remove all accounting service selections
        ["accounting-small", "accounting-medium", "accounting-large"].forEach(id => {
          newSet.delete(id);
        });
      }

      if (prev.has(serviceId)) {
        newSet.delete(serviceId);
      } else {
        newSet.add(serviceId);
      }
      return newSet;
    });
  };

  const calculateCosts = (): CostBreakdown => {
    let monthly = 0;
    let yearly = 0;
    let oneTime = 0;

    // Service pricing data
    const servicePrices: Record<string, { price: number; period: "monthly" | "yearly" | "one-time"; hasNote?: boolean }> = {
      "accounting-small": { price: 800, period: "monthly" },
      "accounting-medium": { price: 1500, period: "monthly" },
      "accounting-large": { price: 2000, period: "monthly" },
      "incorporation-package": { price: 6500, period: "one-time", hasNote: true },
      "secretarial-annual": { price: 3500, period: "yearly" },
      "audit-basic": { price: 10000, period: "yearly" },
    };

    selectedServices.forEach((serviceId) => {
      const service = servicePrices[serviceId];
      if (service) {
        if (service.period === "monthly") {
          monthly += service.price;
        } else if (service.period === "yearly") {
          yearly += service.price;
        } else if (service.period === "one-time") {
          oneTime += service.price;
        }
      }
    });

    return { monthly, yearly, oneTime };
  };

  const costs = calculateCosts();
  const hasSelectedServices = selectedServices.size > 0;
  const hasIncorporationPackage = selectedServices.has("incorporation-package");

  return (
    <div id="services-pricing" className="py-20">
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
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 w-full">
          {/* Left Column - Service Categories */}
          <ServiceCategories
            expandedCategories={expandedCategories}
            onToggleCategory={toggleCategory}
            selectedServices={selectedServices}
            onToggleService={toggleService}
          />

          {/* Right Column - Cost Calculator Display */}
          <CostCalculator
            costs={costs}
            hasSelectedServices={hasSelectedServices}
            hasIncorporationPackage={hasIncorporationPackage}
          />
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg font-medium text-neutral-700 dark:text-neutral-300 mb-6">
            {t("cta.message")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as={Link} href="/get-quote" className="shadow-xl">
              {t("cta.contactForQuote")}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
