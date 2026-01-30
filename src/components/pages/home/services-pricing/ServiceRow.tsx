import { cn } from "@/lib/utils";
import { IconCheck } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { Service, PricingPeriod } from "./types";

interface ServiceRowProps {
  service: Service;
  isSelected: boolean;
  onToggle: () => void;
}

export const ServiceRow = ({ service, isSelected, onToggle }: ServiceRowProps) => {
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
        "rounded-lg border p-3 sm:p-4 transition-all cursor-pointer w-full",
        isSelected
          ? "border-blue-500 bg-blue-50 dark:border-blue-600 dark:bg-blue-950/20"
          : "border-neutral-200 bg-neutral-50 hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:border-neutral-700"
      )}
      onClick={onToggle}
    >
      <div className="flex items-start gap-3 sm:gap-4 w-full">
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
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 w-full">
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
                <ul className="space-y-1 mb-3 sm:mb-0">
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
            <div className="text-left sm:text-right shrink-0 sm:w-32">
              <div className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100">
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
