import React from "react";
import {
  Pressable,
  Modal as RNModal,
  ModalProps as RNModalProps,
  ScrollView,
  Text,
  TextProps,
  View,
  ViewProps,
} from "react-native";
import { UIContext } from "./useUIContext";

type ModalProps = {
  onClose: () => void;
  isOpen: boolean;
} & RNModalProps;

/** The main modal component. */
export const Modal = ({
  isOpen,
  onClose,
  accessibilityLabel = "Modal",
  children,
  transparent = true,
  ...rest
}: ModalProps) => {
  return (
    <UIContext.Provider value={{ onClose }}>
      <RNModal
        visible={isOpen}
        onRequestClose={onClose}
        accessible
        accessibilityLabel={accessibilityLabel}
        transparent
        {...rest}
      >
        <Pressable
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            cursor: "auto",
          }}
          onPress={onClose}
        >
          {children}
        </Pressable>
      </RNModal>
    </UIContext.Provider>
  );
};

export type ModalPanelProps = {
  scrollable?: boolean;
} & ViewProps;
/** This indicates the panel of your actual Modal. Clicking outside of this component will trigger the onClose of the Modal component. */
export const ModalPanel = ({
  accessibilityLabel = "Modal Panel",
  scrollable,
  ...props
}: ModalPanelProps) => {
  const Rest = () => (
    <Pressable onPress={(e) => e.stopPropagation()} style={{ cursor: "auto" }}>
      <View {...props} onStartShouldSetResponder={() => true} />
    </Pressable>
  );

  return scrollable ? (
    <ScrollView style={{ overflow: "scroll" }}>
      <Rest />
    </ScrollView>
  ) : (
    <Rest />
  );
};
/** This is the title for your Modal */
export const ModalTitle = ({
  accessibilityLabel = "Modal Title",
  ...props
}: TextProps) => {
  return <Text accessibilityLabel={accessibilityLabel} {...props} />;
};
