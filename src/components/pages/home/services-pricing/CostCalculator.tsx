import { motion, AnimatePresence } from "framer-motion";
import { CostBreakdown } from "./types";
import { CostDisplay } from "./CostDisplay";
import { CostPlaceholder } from "./CostPlaceholder";

interface CostCalculatorProps {
  costs: CostBreakdown;
  hasSelectedServices: boolean;
}

export const CostCalculator = ({ costs, hasSelectedServices }: CostCalculatorProps) => {
  return (
    <div className="w-full relative z-10">
      <div className="lg:sticky top-24 w-full">
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
              <CostDisplay costs={costs} />
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
              <CostPlaceholder />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
