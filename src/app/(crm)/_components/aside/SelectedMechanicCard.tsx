"use client";

import { Avatar } from "@/app/_shared/components/Avatar/Avatar";
import { Card } from "@/app/_shared/components/Card/Card";
import { useMechanicsContext } from "../../_context/mechanics/useMechanicsContext";

export const SelectedMechanicCard = () => {
  const { selectedMechanic, mechanics } = useMechanicsContext();
  const mechanic = mechanics.find(
    (mechanic) => mechanic.id === selectedMechanic
  );

  return (
    <Card className="flex items-center gap-2 dark:bg-[url('/planet.webp')] bg-contain bg-blend-exclusion bg-no-repeat bg-right">
      <Avatar className="w-8 h-8 cursor-default" img={mechanic?.image} />
      <div className="flex flex-col justify-center">
        <span className="text-sm dark:text-gray-200 text-gray-800 font-medium">
          {mechanic?.name}
        </span>
        <span className="text-xs text-gray-400">Mechanic</span>
      </div>
    </Card>
  );
};
