import { createContext, useContext } from "react";

export const UIContext = createContext<
  | {
      onClose: () => void;
      onOpen?: () => void;
      toggle?: () => void;
      isOpen?: boolean;
    }
  | undefined
>(undefined);

export const useUIContext = () => {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error("useModal must be used within a Provider");
  }
  return context;
};
