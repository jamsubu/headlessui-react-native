import React, { ReactNode, useState } from "react";
import { View, ViewProps, PressableProps, Pressable } from "react-native";
import { UIContext, useUIContext } from "./useUIContext";

type DisclosureProps = {
  defaultOpen?: boolean;
} & ViewProps;

/**
 * The main disclosure component.
 */
export const Disclosure = ({
  defaultOpen = false,
  accessibilityLabel = "Disclosure",
  ...rest
}: DisclosureProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <UIContext.Provider
      value={{
        isOpen,
        onClose: () => setIsOpen(false),
        onOpen: () => setIsOpen(true),
        toggle: () => setIsOpen((prev) => !prev),
      }}
    >
      <View accessibilityLabel={accessibilityLabel} {...rest} />
    </UIContext.Provider>
  );
};

/**
 * The trigger component that toggles a Disclosure.
 */
export const DisclosureButton = ({
  accessibilityLabel = "Disclosure Button",
  ...rest
}: PressableProps) => {
  const { toggle } = useUIContext();

  return (
    <Pressable
      accessibilityLabel={accessibilityLabel}
      {...rest}
      onPress={toggle}
    />
  );
};

type DisclosurePanelProps = {
  children:
    | ReactNode
    | ((props: {
        close: ReturnType<typeof useUIContext>["onClose"];
      }) => ReactNode);
} & Omit<ViewProps, "children">;
/**
 * This component contains the contents of your disclosure.
 */
export const DisclosurePanel = ({
  children,
  accessibilityLabel = "Disclosure Panel",
  ...rest
}: DisclosurePanelProps) => {
  const { onClose, isOpen } = useUIContext();

  return (
    <View accessibilityLabel={accessibilityLabel} {...rest}>
      {typeof children === "function" ? children({ close: onClose }) : children}
    </View>
  );
};
