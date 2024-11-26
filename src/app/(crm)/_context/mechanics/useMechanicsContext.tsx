import { useContext } from "react";
import { MechanicsContext } from "./MechanicsProvider";

export const useMechanicsContext = () => {
  const context = useContext(MechanicsContext);
  if (context === undefined) {
    throw new Error("useMechanicsContext must be used within a MechanicsProvider");
  }
  return context;
}