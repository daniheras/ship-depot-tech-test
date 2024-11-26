'use client'

import { Avatar } from "@/app/_shared/components/Avatar/Avatar";
import { useMechanicsContext } from "../../_context/mechanics/useMechanicsContext";

export const MechanicRowData = ({ mechanicId }: { mechanicId: string | null}) => {
  const { mechanics } = useMechanicsContext();
  const mechanic = mechanics.find((mechanic) => mechanic.id === mechanicId);

  return (
    <div className="flex gap-2 justify-center">
      <Avatar img={mechanic?.image} className="w-4 h-4 cursor-default" />
      <span>{ mechanic?.name || 'Not asigned yet' }</span>
    </div>
  );
};
