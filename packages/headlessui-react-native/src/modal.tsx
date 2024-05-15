import React, { createContext, useContext } from "react";
import {
  Button,
  ButtonProps,
  Pressable,
  Modal as RNModal,
  ModalProps as RNModalProps,
  ScrollView,
  Text,
  TextProps,
  View,
  ViewProps,
} from "react-native";

type ModalProps = {
  onClose: () => void;
  isOpen: boolean;
} & RNModalProps;

const ModalContext = createContext<{ onClose: () => void } | undefined>(
  undefined
);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

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
    <ModalContext.Provider value={{ onClose }}>
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
    </ModalContext.Provider>
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

/** This is the close button for your Modal */
export const CloseButton = ({
  accessibilityLabel = "Close Button",
  ...props
}: ButtonProps) => {
  const { onClose } = useModal();

  return (
    <Button
      onPress={onClose}
      accessibilityLabel={accessibilityLabel}
      {...props}
    />
  );
};
