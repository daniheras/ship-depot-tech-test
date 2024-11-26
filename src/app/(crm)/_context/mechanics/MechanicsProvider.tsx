"use client";

import { createContext, ReactNode } from "react";
import { Mechanic } from "../../types";

export const MechanicsContext = createContext<Mechanic[]>([]);

export const MechanicsProvider = ({ children, mechanics = [] }: { children: ReactNode; mechanics?: Mechanic[] }) => {
  return (
    <MechanicsContext.Provider value={mechanics}>
      {children}
    </MechanicsContext.Provider>
  );
}