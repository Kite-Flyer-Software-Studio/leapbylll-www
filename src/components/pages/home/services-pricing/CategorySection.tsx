import { cn } from "@/lib/utils";
import { IconChevronDown, IconCheck } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Button } from "@/components/button";
import { ServiceCategory } from "./types";
import { ServiceRow } from "./ServiceRow";
import { Link } from "@/i18n/navigation";

interface CategorySectionProps {
  category: ServiceCategory;
  isExpanded: boolean;
  onToggle: () => void;
  selectedServices: Set<string>;
  onToggleService: (serviceId: string) => void;
}

export const CategorySection = ({
  category,
  isExpanded,
  onToggle,
  selectedServices,
  onToggleService,
}: CategorySectionProps) => {
  const t = useTranslations("servicesPricing");
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
          "w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between transition-colors",
          "hover:bg-neutral-50 dark:hover:bg-neutral-800/50",
          isExpanded && "bg-neutral-50 dark:bg-neutral-800/50"
        )}
      >
        <div className="flex items-center gap-3 sm:gap-4 text-left min-w-0 flex-1">
          <div className={cn(
            "p-2 sm:p-3 rounded-lg transition-colors shrink-0",
            hasSelectedService
              ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
              : "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
          )}>
            {category.icon}
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-2 flex-wrap">
              <span className="truncate">{category.title}</span>
              {hasSelectedService && (
                <span className="inline-flex items-center justify-center p-1 rounded-full bg-green-100 dark:bg-green-900/30 shrink-0">
                  <IconCheck className="size-4 text-green-600 dark:text-green-400" />
                </span>
              )}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1">
              {category.description}
            </p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 ml-2"
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
            <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 border-t border-neutral-200 dark:border-neutral-800 w-full">
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
                  {category.id === "audit" ? (
                    <>
                      <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                        {t("categories.audit.serviceDescription")}
                      </p>
                      <ul className="inline-block text-left space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                        <li className="flex items-center gap-2">
                          <IconCheck className="size-4 text-green-600 dark:text-green-400" />
                          {t("categories.audit.included.item1")}
                        </li>
                        <li className="flex items-center gap-2">
                          <IconCheck className="size-4 text-green-600 dark:text-green-400" />
                          {t("categories.audit.included.item2")}
                        </li>
                        <li className="flex items-center gap-2">
                          <IconCheck className="size-4 text-green-600 dark:text-green-400" />
                          {t("categories.audit.included.item3")}
                        </li>
                      </ul>
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
                </div>
              )}

              {category.customCTA && (
                <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-800 text-center">
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                    {t(`categories.${category.id}.ctaHelp`)}
                  </p>
                  <Button
                    as={Link}
                    href={category.customCTA.action}
                    variant="outline"
                    className="w-full"
                  >
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
