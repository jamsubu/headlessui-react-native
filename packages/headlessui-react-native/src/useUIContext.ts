import { createContext, useContext } from "react";

type UIContextValue = {
  onClose: () => void;
  onOpen?: () => void;
  toggle?: () => void;
  open?: boolean;
};

export const UIContext = createContext<UIContextValue | undefined>(undefined);

export const useUIContext = () => {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error("useUIContext must be used within a Provider");
  }
  return context;
};
