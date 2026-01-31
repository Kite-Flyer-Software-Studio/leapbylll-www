import {
  IconCalculator,
  IconBuildingBank,
  IconFileText,
  IconFileCheck,
  IconSettings,
} from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { ServiceCategory } from "./types";
import { CategorySection } from "./CategorySection";

interface ServiceCategoriesProps {
  expandedCategories: Set<string>;
  onToggleCategory: (categoryId: string) => void;
  selectedServices: Set<string>;
  onToggleService: (serviceId: string, categoryId: string) => void;
}

export const ServiceCategories = ({
  expandedCategories,
  onToggleCategory,
  selectedServices,
  onToggleService,
}: ServiceCategoriesProps) => {
  const t = useTranslations("servicesPricing");

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
          price: 6500,
          period: "one-time",
          included: [
            t("categories.incorporation.included.item1"),
            t("categories.incorporation.included.item2"),
            t("categories.incorporation.included.item3"),
            t("categories.incorporation.included.item4"),
            t("categories.incorporation.included.item5"),
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
          ],
        },
      ],
    },
    {
      id: "audit",
      title: t("categories.audit.title"),
      description: t("categories.audit.description"),
      icon: <IconFileCheck className="size-6" />,
      services: [],
      customCTA: {
        text: t("categories.audit.cta"),
        action: "/get-quote",
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
        action: "/get-quote",
      },
    },
  ];

  return (
    <div className="space-y-4 w-full relative z-20">
      {categories.map((category) => (
        <CategorySection
          key={category.id}
          category={category}
          isExpanded={expandedCategories.has(category.id)}
          onToggle={() => onToggleCategory(category.id)}
          selectedServices={selectedServices}
          onToggleService={(serviceId) => onToggleService(serviceId, category.id)}
        />
      ))}
    </div>
  );
};
