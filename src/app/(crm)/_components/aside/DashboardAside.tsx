"use client";

import { Card } from "@/app/_shared/components/Card/Card";
import { SelectedMechanicCard } from "./SelectedMechanicCard";
import { useMechanicsContext } from "../../_context/mechanics/useMechanicsContext";
import { AnimatePresence, motion, Variants } from "framer-motion";

const asideVariants: Variants = {
  visible: { x: 0, opacity: 1 },
  hidden: { x: -500, opacity: 0 },
};

export const DashboardAside = () => {
  const { selectedMechanic } = useMechanicsContext();

  return (
    <AnimatePresence mode="popLayout">
      {selectedMechanic && (
        <motion.aside
          key={selectedMechanic}
          className="w-[400px] flex flex-col"
          variants={asideVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ type: "tween" }}
        >
          <div className="flex flex-col flex-grow">
            <h3 className="dark:text-gray-400 text-gray-700 font-semibold text-xl mb-4">
              Selected Mechanic
            </h3>
            <div className="flex flex-col flex-grow gap-2">
              <SelectedMechanicCard />
              <Card className="flex-grow">Content placeholder</Card>
              <Card>Content placeholder</Card>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};
