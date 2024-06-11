import { ReactNode } from "react";
import {
  PropsType,
  ReactNativeComponentProps,
  ReactNativeComponentType,
} from "../constants";
import { createReactNativeElement } from "../utils";

export const MenuButton = <T extends ReactNativeComponentType>({
  as = "Button" as T,
  children,
  ...rest
}: {
  as?: T;
  children?: ReactNode;
} & PropsType<T>) => {
  // The rest props need to be typed correctly based on the component type
  const props = rest as PropsType<T>;

  const Component = createReactNativeElement(as, props, children);
  return Component;
};

export const Menu = <T extends ReactNativeComponentType = "View">({
  as = "View" as T,
  children,
  ...rest
}: ReactNativeComponentProps<T>) => {
  // The rest props need to be typed correctly based on the component type
  const props = rest as PropsType<T>;

  const Component = createReactNativeElement(as, props, children);
  return Component;
};
