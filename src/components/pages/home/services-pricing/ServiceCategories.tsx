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
