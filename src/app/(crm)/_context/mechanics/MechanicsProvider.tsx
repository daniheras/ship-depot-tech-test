"use client";

import { createContext, ReactNode, useState } from "react";
import { Mechanic } from "../../types";

interface MechanicsContextType {
  mechanics: Mechanic[];
  selectedMechanic: number | null;
  setSelectedMechanic: (mechanicId: number | null) => void;
}

export const MechanicsContext = createContext<MechanicsContextType | undefined>(undefined);

export const MechanicsProvider = ({ children, mechanics = [] }: { children: ReactNode; mechanics?: Mechanic[] }) => {
  const [selectedMechanic, setSelectedMechanic] = useState<number | null>(null);

  return (
    <MechanicsContext.Provider value={{ mechanics, selectedMechanic, setSelectedMechanic }}>
      {children}
    </MechanicsContext.Provider>
  );
}