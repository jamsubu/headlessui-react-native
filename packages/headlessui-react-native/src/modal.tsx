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
import {
  RenderPropsCallableComponent,
  UIContext,
  useUIContext,
} from "./useUIContext";
import { CallableChildren } from "./callableChildren";

export type ModalProps = {
  onClose: () => void;
  isOpen: boolean;
} & RenderPropsCallableComponent<
  RNModalProps,
  {
    open: boolean;
  }
>;

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
    <UIContext.Provider value={{ onClose, isOpen }}>
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
          <CallableChildren children={children} props={{ open: !!isOpen }} />
        </Pressable>
      </RNModal>
    </UIContext.Provider>
  );
};

export type ModalPanelProps = {
  scrollable?: boolean;
} & RenderPropsCallableComponent<
  ViewProps,
  {
    open: boolean;
  }
>;
/** This indicates the panel of your actual Modal. Clicking outside of this component will trigger the onClose of the Modal component. */
export const ModalPanel = ({
  accessibilityLabel = "Modal Panel",
  scrollable,
  children,
  ...props
}: ModalPanelProps) => {
  const { isOpen } = useUIContext();

  const Rest = () => (
    <Pressable onPress={(e) => e.stopPropagation()} style={{ cursor: "auto" }}>
      <View {...props} onStartShouldSetResponder={() => true}>
        <CallableChildren children={children} props={{ open: !!isOpen }} />
      </View>
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

export type ModalTitleProps = RenderPropsCallableComponent<
  TextProps,
  {
    open: boolean;
  }
>;

/** This is the title for your Modal */
export const ModalTitle = ({
  accessibilityLabel = "Modal Title",
  children,
  ...props
}: ModalTitleProps) => {
  const { isOpen } = useUIContext();
  return (
    <Text accessibilityLabel={accessibilityLabel} {...props}>
      <CallableChildren children={children} props={{ open: !!isOpen }} />
    </Text>
  );
};
