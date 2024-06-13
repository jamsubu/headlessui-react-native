import React from "react";
import {
  ReactNativeComponentPropsType,
  ReactNativeComponentType,
} from "../constants";
import { useUIContext } from "../hooks";
import { createReactNativeElement } from "../utils";

const CloseButtonDefaultComponent = "Pressable" as const;
export const CloseButton = <
  T extends ReactNativeComponentType = typeof CloseButtonDefaultComponent
>({
  as = CloseButtonDefaultComponent as T,
  children,
  ...rest
}: ReactNativeComponentPropsType<T>) => {
  const { onClose } = useUIContext();
  const Component = createReactNativeElement(
    as as typeof CloseButtonDefaultComponent
  );
  return <Component onPress={onClose} {...rest} />;
};
