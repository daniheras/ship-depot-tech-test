"use client";

import { Card } from "@/app/_shared/components/Card/Card";
import { SelectedMechanicCard } from "./SelectedMechanicCard";
import { useMechanicsContext } from "../../_context/mechanics/useMechanicsContext";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { ActiveCases } from "../charts/ActiveCases";
import { CasesPerMonth } from "../charts/CasesPerMonth";
import { CasesPerMonth as ICasesPerMonth, MechanicTotalCases } from "../../_server/schema";

const asideVariants: Variants = {
  visible: { x: 0, opacity: 1 },
  hidden: { x: -500, opacity: 0 },
};

interface DashboardAsideProps {
  chartsData: {
    mechanicTotalCases: MechanicTotalCases;
    mechanicCasesPerMonth: ICasesPerMonth;
  }
}

export const DashboardAside = ({ chartsData }: DashboardAsideProps) => {
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
              <Card>
                <h4 className="dark:text-gray-400 text-gray-700 font-semibold text-base mb-4">
                  Active cases
                </h4>
                <ActiveCases {...chartsData.mechanicTotalCases} />
              </Card>
              <Card className="flex-grow items-center relative">
                <h4 className="dark:text-gray-400 text-gray-700 font-semibold text-base mb-4">
                  Cases per month
                </h4>
                <CasesPerMonth data={chartsData.mechanicCasesPerMonth} />
              </Card>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};
