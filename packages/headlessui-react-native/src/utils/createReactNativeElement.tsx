import React from "react";
import { COMPONENT_MAP, ReactNativeComponentType } from "../constants";
export function createReactNativeElement<T extends ReactNativeComponentType>(
  as: T
) {
  const Component = COMPONENT_MAP[as] as React.ComponentClass<any>;
  return Component;
}
