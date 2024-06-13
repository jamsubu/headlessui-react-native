import React, { useState } from "react";
import {
  ReactNativeComponentPropsType,
  ReactNativeComponentType,
} from "../constants";
import { UIContext, useUIContext } from "../hooks";
import { createReactNativeElement } from "../utils";
import { CallableChildren } from "./callable-children";

const DisclosureDefaultComponent = "Fragment" as const;
/**
 * The main disclosure component.
 */
export const Disclosure = <
  T extends ReactNativeComponentType = typeof DisclosureDefaultComponent
>({
  as = DisclosureDefaultComponent as T,
  children,
  defaultOpen = false,
  ...rest
}: ReactNativeComponentPropsType<T, { open: boolean; close?: () => void }> & {
  defaultOpen?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);
  const toggle = () => setIsOpen((prev) => !prev);

  const Component = createReactNativeElement(as);

  return (
    <UIContext.Provider
      value={{
        open: isOpen,
        onClose,
        onOpen,
        toggle,
      }}
    >
      <Component {...rest}>
        <CallableChildren
          children={children}
          props={{ close: onClose, open: !!isOpen }}
        />
      </Component>
    </UIContext.Provider>
  );
};

const DisclosureButtonDefaultComponent = "Pressable" as const;
/**
 * The trigger component that toggles a Disclosure.
 */
export const DisclosureButton = <
  T extends ReactNativeComponentType = typeof DisclosureButtonDefaultComponent
>({
  as = DisclosureButtonDefaultComponent as T,
  children,
  ...rest
}: ReactNativeComponentPropsType<T, { open: boolean }>) => {
  const { toggle, open } = useUIContext();
  const Component = createReactNativeElement(as);

  return (
    <Component {...rest} onPress={toggle}>
      <CallableChildren children={children} props={{ open: !!open }} />
    </Component>
  );
};

const DisclosurePanelDefaultComponent = "View" as const;
/**
 * This component contains the contents of your disclosure.
 */
export const DisclosurePanel = <
  T extends ReactNativeComponentType = typeof DisclosurePanelDefaultComponent
>({
  as = DisclosurePanelDefaultComponent as T,
  children,
  ...rest
}: ReactNativeComponentPropsType<T, { open: boolean; close?: () => void }>) => {
  const { onClose, open } = useUIContext();
  const Component = createReactNativeElement(as);

  if (!open) return null;
  return (
    <Component {...rest}>
      <CallableChildren
        children={children}
        props={{ close: onClose, open: !!open }}
      />
    </Component>
  );
};
