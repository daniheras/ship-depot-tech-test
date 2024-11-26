"use client";

import { createContext, ReactNode, useState } from "react";
import { Mechanic } from "../../_server/schema";

interface MechanicsContextType {
  mechanics: Mechanic[];
  selectedMechanic: string | null;
  setSelectedMechanic: (mechanicId: string | null) => void;
}

export const MechanicsContext = createContext<MechanicsContextType | undefined>(undefined);

export const MechanicsProvider = ({ children, mechanics = [] }: { children: ReactNode; mechanics?: Mechanic[] }) => {
  const [selectedMechanic, setSelectedMechanic] = useState<string | null>(null);

  return (
    <MechanicsContext.Provider value={{ mechanics, selectedMechanic, setSelectedMechanic }}>
      {children}
    </MechanicsContext.Provider>
  );
}