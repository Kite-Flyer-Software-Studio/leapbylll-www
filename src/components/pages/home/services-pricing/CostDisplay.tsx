import { IconCurrencyDollar } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/button";
import { Link } from "@/i18n/navigation";
import { CostBreakdown } from "./types";

interface CostDisplayProps {
  costs: CostBreakdown;
}

export const CostDisplay = ({ costs }: CostDisplayProps) => {
  const t = useTranslations("servicesPricing");

  return (
    <div className="relative rounded-2xl border border-neutral-200 bg-white p-4 sm:p-6 shadow-xl dark:border-neutral-800 dark:bg-neutral-900 w-full">
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
  );
};
