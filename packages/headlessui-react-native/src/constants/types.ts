import { ReactNode } from "react";

import { PressableProps, ViewProps } from "react-native";
import { ComponentMap } from "./constatns";

export type RenderPropsCallableComponent<
  T extends ViewProps | PressableProps,
  /* props to return */
  U extends unknown
> = {
  children: ReactNode | ((props: U) => ReactNode);
} & Omit<T, "children">;

export type ReactNativeComponentType = keyof ComponentMap;

export type ReactNativeComponentPropsType<
  T extends ReactNativeComponentType,
  U = unknown
> = Omit<React.ComponentProps<ComponentMap[T]>, "children"> & {
  children: ReactNode | ((props: U) => ReactNode);
  as?: T;
};
