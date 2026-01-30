import { IconCalculator, IconCurrencyDollar } from "@tabler/icons-react";
import { useTranslations } from "next-intl";

export const CostPlaceholder = () => {
  const t = useTranslations("servicesPricing");

  return (
    <div className="relative rounded-2xl border border-dashed border-neutral-300 bg-white p-4 sm:p-6 shadow-xl dark:border-neutral-700 dark:bg-neutral-900 w-full">
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
  );
};
