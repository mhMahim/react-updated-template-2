import { createContext, type Dispatch, type SetStateAction } from "react";

interface StateContextType {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  isSmall: boolean;
  setIsSmall: Dispatch<SetStateAction<boolean>>;
}

const StateContext = createContext<StateContextType | null>(null);

export { StateContext };
