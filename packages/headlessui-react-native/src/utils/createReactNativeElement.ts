import { ComponentClass, ComponentProps, ComponentType } from "react";
import {
  COMPONENT_MAP,
  ComponentMap,
  ReactNativeComponentPropsType,
  ReactNativeComponentType,
} from "../constants";
export function createReactNativeElement<T extends ReactNativeComponentType>(
  as: T
) {
  const Component = COMPONENT_MAP[as] as ComponentType<
    ComponentProps<ComponentMap[T]>
  >;
  return Component;
}
