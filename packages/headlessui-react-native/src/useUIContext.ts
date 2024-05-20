import { ReactNode, createContext, useContext } from "react";
import { ViewProps, PressableProps } from "react-native";

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
    throw new Error("useModal must be used within a Provider");
  }
  return context;
};

export type RenderPropsCallableComponent<
  T extends ViewProps | PressableProps,
  /* props to return */
  U extends unknown
> = {
  children: ReactNode | ((props: U) => ReactNode);
} & Omit<T, "children">;
