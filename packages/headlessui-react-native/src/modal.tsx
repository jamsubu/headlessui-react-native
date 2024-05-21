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
import { UIContext, useUIContext } from "./useUIContext";
import { CallableChildren } from "./callableChildren";
import { RenderPropsCallableComponent } from "./types";

export type ModalProps = {
  onClose: () => void;
  open: boolean;
} & RenderPropsCallableComponent<
  RNModalProps,
  {
    open: boolean;
  }
>;

/** The main modal component. */
export const Modal = ({
  open,
  onClose,
  accessibilityLabel = "Modal",
  children,
  transparent = true,
  ...rest
}: ModalProps) => {
  return (
    <UIContext.Provider value={{ onClose, open: open }}>
      <RNModal
        visible={open}
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
          <CallableChildren children={children} props={{ open: !!open }} />
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
  const { open } = useUIContext();

  const Rest = () => (
    <Pressable onPress={(e) => e.stopPropagation()} style={{ cursor: "auto" }}>
      <View {...props} onStartShouldSetResponder={() => true}>
        <CallableChildren children={children} props={{ open: !!open }} />
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
  const { open } = useUIContext();
  return (
    <Text accessibilityLabel={accessibilityLabel} {...props}>
      <CallableChildren children={children} props={{ open: !!open }} />
    </Text>
  );
};
