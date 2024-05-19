import React, { createContext, useContext, useState } from "react";
import { View, ViewProps } from "react-native";

const DisclosureContext = createContext<
  { onClose: () => void; isOpen: boolean } | undefined
>(undefined);

const useDisclosure = () => {
  const context = useContext(DisclosureContext);
  if (!context) {
    throw new Error("useDisclosure must be used within a ModalProvider");
  }
  return context;
};

type DisclosureProps = {
  defaultOpen: boolean;
} & ViewProps;

/**
 * The main disclosure component.
 */
export const Disclosure = ({
  defaultOpen = false,
  ...rest
}: DisclosureProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <DisclosureContext.Provider
      value={{ isOpen, onClose: () => setIsOpen(false) }}
    >
      <View {...rest} />
    </DisclosureContext.Provider>
  );
};

/**
 * The trigger component that toggles a Disclosure.
 */
export const DisclosureButton = () => <View></View>;
/**
 * This component contains the contents of your disclosure.
 */
export const DisclosurePanel = () => {
  const { isOpen } = useDisclosure();
  return <View>is Open?{isOpen}</View>;
};
