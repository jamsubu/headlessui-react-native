import { ComponentProps, ReactNode } from "react";
import { ComponentMap } from "./constatns";

export type ReactNativeComponentType = keyof ComponentMap;

export type ReactNativeComponentPropsType<
  T extends ReactNativeComponentType,
  U = unknown
> = Omit<ComponentProps<ComponentMap[T]>, "children"> & {
  children: ReactNode | ((props: U) => ReactNode);
  as?: T;
};
