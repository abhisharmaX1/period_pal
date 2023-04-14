import { CyclesContext } from "../context/CycleContext";
import { useContext } from "react";

export const useCyclesContext = () => {
  const context = useContext(CyclesContext);
  if (!context) {
    throw Error(
      "UseCyclesContext must be used inside an CyclesContextProvider"
    );
  }
  return context;
};
