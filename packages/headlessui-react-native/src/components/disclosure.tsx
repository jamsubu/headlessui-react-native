import React, { useState } from "react";
import { Pressable, PressableProps, Text, View, ViewProps } from "react-native";
import {
  PropsType,
  ReactNativeComponentProps,
  ReactNativeComponentType,
  RenderPropsCallableComponent,
} from "../constants";
import { UIContext, useUIContext } from "../hooks";
import { createReactNativeElement } from "../utils";
import { CallableChildren } from "./callable-children";
import { Menu } from "./dropdown-menu";

export type DisclosureProps = {
  defaultOpen?: boolean;
} & RenderPropsCallableComponent<
  ViewProps,
  { close: () => void; open: boolean }
>;

/**
 * The main disclosure component.
 */
export const Disclosure = ({
  defaultOpen = false,
  accessibilityLabel = "Disclosure",
  children,
  ...rest
}: DisclosureProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <UIContext.Provider
      value={{
        open: isOpen,
        onClose,
        onOpen,
        toggle,
      }}
    >
      <View accessibilityLabel={accessibilityLabel} {...rest}>
        <CallableChildren
          children={children}
          props={{ close: onClose, open: !!isOpen }}
        />
        <Menu as="Pressable">
          <Text>dsasda</Text>
        </Menu>
      </View>
    </UIContext.Provider>
  );
};

export type DisclosureButtonProps = RenderPropsCallableComponent<
  PressableProps,
  { open: boolean }
>;

/**
 * The trigger component that toggles a Disclosure.
 */
export const DisclosureButton = ({
  accessibilityLabel = "Disclosure Button",
  children,
  ...rest
}: DisclosureButtonProps) => {
  const { toggle, open } = useUIContext();

  return (
    <Pressable
      accessibilityLabel={accessibilityLabel}
      {...rest}
      onPress={toggle}
    >
      <CallableChildren children={children} props={{ open: !!open }} />
    </Pressable>
  );
};

export type DisclosurePanelProps = RenderPropsCallableComponent<
  ViewProps,
  { close: () => void; open: boolean }
>;

/**
 * This component contains the contents of your disclosure.
 */
export const DisclosurePanel = ({
  children,
  accessibilityLabel = "Disclosure Panel",
  ...rest
}: DisclosurePanelProps) => {
  const { onClose, open } = useUIContext();

  if (!open) return null;
  return (
    <View accessibilityLabel={accessibilityLabel} {...rest}>
      <CallableChildren
        children={children}
        props={{ close: onClose, open: !!open }}
      />
    </View>
  );
};

export const ExmapleDisclosurePanel = <
  T extends ReactNativeComponentType = "View"
>({
  as = "View" as T,
  children,
  ...props
}: ReactNativeComponentProps<T>) => {
  const { onClose, open } = useUIContext();

  if (!open) return null;

  const Component = createReactNativeElement(
    as,
    { ...(props as PropsType<T>), onPress: onClose },
    <CallableChildren
      children={children}
      props={{ close: onClose, open: !!open }}
    />
  );

  return Component;
};

<ExmapleDisclosurePanel>{}</ExmapleDisclosurePanel>;
