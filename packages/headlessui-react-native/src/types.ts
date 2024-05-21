import { ReactNode } from "react";
import { ViewProps, PressableProps } from "react-native";

export type RenderPropsCallableComponent<
  T extends ViewProps | PressableProps,
  /* props to return */
  U extends unknown
> = {
  children: ReactNode | ((props: U) => ReactNode);
} & Omit<T, "children">;
