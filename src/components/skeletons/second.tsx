"use client";

import { cn } from "@/lib/utils";
import {
  IconFileInvoice,
  IconReceipt,
  IconCalculator,
  IconChartBar,
  IconClock,
  IconFileCheck,
  IconAlertTriangle,
  IconBuildingBank,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

export const SkeletonTwo = () => {
  const cardItems = [
    {
      icon: <IconFileInvoice className="size-3" />,
      iconClassName: "bg-blue-500",
      title: "Invoice Processing",
      description: "Processed 12 invoices for Q1 2024",
      badge: (
        <div className="flex gap-1 items-center px-1 py-0.5 rounded-md border border-neutral-200 dark:border-neutral-200/10 dark:bg-neutral-200/10">
          <IconClock className="size-3" />
          <p className="text-[10px] font-bold text-neutral-600 dark:text-neutral-400">
            2m
          </p>
        </div>
      ),
    },
    {
      icon: <IconReceipt className="size-3" />,
      iconClassName: "bg-green-500",
      title: "Expense Tracking",
      description: "Categorized 45 transactions automatically",
      badge: (
        <div className="flex gap-1 items-center px-1 py-0.5 rounded-md bg-green-100 border border-green-200 dark:bg-green-100/10 dark:border-green-200/10">
          <p className="text-[10px] font-bold text-green-600 dark:text-green-500">COMPLETE</p>
        </div>
      ),
    },
    {
      icon: <IconCalculator className="size-3" />,
      iconClassName: "bg-purple-500",
      title: "Tax Calculation",
      description: "Estimated quarterly tax obligations",
      badge: (
        <div className="flex gap-1 items-center px-1 py-0.5 rounded-md bg-orange-100 border border-orange-200 dark:bg-orange-100/10 dark:border-orange-200/10">
          <p className="text-[10px] font-bold text-orange-500">PROCESSING</p>
        </div>
      ),
    },
    {
      icon: <IconFileCheck className="size-3" />,
      iconClassName: "bg-indigo-500",
      title: "Audit Preparation",
      description: "Compiled financial statements for annual audit",
      badge: (
        <div className="flex gap-1 items-center px-1 py-0.5 rounded-md border border-neutral-200 dark:border-neutral-200/10 dark:bg-neutral-200/10">
          <IconClock className="size-3" />
          <p className="text-[10px] font-bold text-neutral-600 dark:text-neutral-400">
            5m
          </p>
        </div>
      ),
    },
    {
      icon: <IconBuildingBank className="size-3" />,
      iconClassName: "bg-cyan-500",
      title: "Bank Reconciliation",
      description: "Matched 98% of bank transactions",
      badge: (
        <div className="flex gap-1 items-center px-1 py-0.5 rounded-md bg-green-100 border border-green-200 dark:bg-green-100/10 dark:border-green-200/10">
          <p className="text-[10px] font-bold text-green-600 dark:text-green-500">COMPLETE</p>
        </div>
      ),
    },
    {
      icon: <IconAlertTriangle className="size-3" />,
      iconClassName: "bg-red-500",
      title: "Compliance Alert",
      description: "Flagged 2 missing receipts for review",
      badge: (
        <div className="flex gap-1 items-center px-1 py-0.5 rounded-md bg-red-100 border border-red-200 dark:bg-red-100/10 dark:border-red-200/10">
          <p className="text-[10px] font-bold text-red-500">ATTENTION</p>
        </div>
      ),
    },
    {
      icon: <IconChartBar className="size-3" />,
      iconClassName: "bg-orange-500",
      title: "Monthly Report",
      description: "Generated financial performance report",
      badge: (
        <div className="flex gap-1 items-center px-1 py-0.5 rounded-md bg-orange-100 border border-orange-200 dark:bg-orange-100/10 dark:border-orange-200/10">
          <p className="text-[10px] font-bold text-orange-500">PROCESSING</p>
        </div>
      ),
    },
  ];

  return (
    <div className="flex-1 rounded-t-3xl gap-2 flex flex-col bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 mx-auto w-full h-full absolute inset-x-10 inset-y-2 pt-2 px-2">
      <Card>
        {cardItems.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="w-full"
          >
            <CardItem
              index={idx}
              key={item.title}
              icon={item.icon}
              iconClassName={item.iconClassName}
              title={item.title}
              description={item.description}
              badge={item.badge}
            />
          </motion.div>
        ))}
      </Card>
    </div>
  );
};

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="shadow-black/10 gap-4 border bg-white dark:bg-neutral-900 border-transparent ring-1 rounded-tl-[16px] ring-black/10 flex flex-col items-start flex-1">
      <div className="flex items-center gap-2 border-b w-full py-2 px-4">
        <IconCalculator className="size-4 text-blue-500" />
        <p className="text-sm font-bold text-neutral-800 dark:text-neutral-200">
          Smart Accounting Activity
        </p>
      </div>

      {children}
    </div>
  );
};

const CardItem = ({
  icon,
  iconClassName,
  title,
  description,
  badge,
  index,
}: {
  icon: React.ReactNode;
  iconClassName?: string;
  title: string;
  description: string;
  badge: React.ReactNode;
  index: number;
}) => {
  return (
    <div className="flex justify-between items-center w-full pl-4 relative overflow-hidden">
      <div className="items-center gap-2 flex">
        <div
          className={cn(
            "size-5 rounded-sm bg-blue-500 text-white flex items-center justify-center",
            iconClassName
          )}
        >
          {icon}
        </div>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {title}
        </p>
        {badge}
      </div>
      <motion.p className="text-sm text-neutral-500 dark:text-neutral-400 flex-nowrap max-w-[16rem] w-full text-left whitespace-nowrap">
        {description.split("").map((item, idx) => (
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: idx * 0.01 + index * 0.1 }}
            key={idx}
          >
            {item}
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
};
