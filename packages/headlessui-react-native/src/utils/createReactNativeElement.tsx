import React, { ReactNode } from "react";
import {
  COMPONENT_MAP,
  PropsType,
  ReactNativeComponentType,
} from "../constants";

export function createReactNativeElement<T extends ReactNativeComponentType>(
  type: T,
  props?: PropsType<T>,
  children?: ReactNode
) {
  const Component = COMPONENT_MAP[type];

  return React.createElement(
    // @ts-ignore
    Component,
    props,
    children
  );
}
