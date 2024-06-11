import {
  PropsType,
  ReactNativeComponentProps,
  ReactNativeComponentType,
} from "../constants";
import { useUIContext } from "../hooks";
import { createReactNativeElement } from "../utils";

export const CloseButton = <T extends ReactNativeComponentType = "Pressable">({
  as = "Pressable" as T,
  children,
  ...props
}: ReactNativeComponentProps<T>) => {
  const { onClose } = useUIContext();
  const Component = createReactNativeElement(
    as,
    { ...(props as PropsType<T>), onPress: onClose },
    children
  );

  return Component;
};
