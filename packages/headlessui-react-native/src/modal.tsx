import React from "react";
import {
  Pressable,
  PressableProps,
  Modal as RNModal,
  ModalProps as RNModalProps,
  Text,
  TextProps,
} from "react-native";

type ModalProps = {
  onClose: () => void;
  isOpen: boolean;
  scrollable?: boolean;
} & RNModalProps;

/** The main modal component. */
export const Modal = ({
  isOpen,
  onClose,
  scrollable,
  accessibilityLabel = "Modal",
  style,
  children,
  ...rest
}: ModalProps) => {
  return (
    <RNModal
      visible={isOpen}
      onRequestClose={onClose}
      accessible
      accessibilityLabel={accessibilityLabel}
      style={{ flex: 1 }}
      {...rest}
    >
      <Pressable style={{ flex: 1 }} onPress={onClose}>
        {children}
      </Pressable>
    </RNModal>
  );
};

/** This indicates the panel of your actual Modal. Clicking outside of this component will trigger the onClose of the Modal component. */
export const ModalPanel = ({
  accessibilityLabel = "Modal Panel",
  ...props
}: PressableProps) => (
  <Pressable
    onPress={(e) => {
      e.stopPropagation();
    }}
    accessibilityLabel={accessibilityLabel}
    {...props}
  />
);

export const ModalTitle = ({
  accessibilityLabel = "Modal Title",
  ...props
}: TextProps) => {
  return <Text accessibilityLabel={accessibilityLabel} {...props} />;
};
