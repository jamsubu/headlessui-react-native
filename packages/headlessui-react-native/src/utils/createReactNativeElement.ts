import { ComponentClass } from "react";
import { COMPONENT_MAP, ReactNativeComponentType } from "../constants";
export function createReactNativeElement<T extends ReactNativeComponentType>(
  as: T
) {
  const Component = COMPONENT_MAP[as] as ComponentClass<unknown>;
  return Component;
}
