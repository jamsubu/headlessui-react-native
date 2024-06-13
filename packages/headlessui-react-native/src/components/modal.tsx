import React, { ReactNode } from "react";
import {
  Pressable,
  Modal as RNModal,
  ModalProps as RNModalProps,
} from "react-native";
import {
  ReactNativeComponentPropsType,
  ReactNativeComponentType,
} from "../constants";
import { UIContext, useUIContext } from "../hooks";
import { CallableChildren } from "./callable-children";
import { createReactNativeElement } from "../utils";

export type ModalProps = {
  children: ReactNode | ((props: { open: boolean }) => ReactNode);
} & Omit<RNModalProps, "children"> & {
    onClose: () => void;
    open: boolean;
  };

/** The main modal component. */
export const Modal = ({
  open,
  onClose,
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
        transparent
        {...rest}
      >
        <Pressable style={{ flex: 1, cursor: "auto" }} onPress={onClose}>
          <CallableChildren children={children} props={{ open: !!open }} />
        </Pressable>
      </RNModal>
    </UIContext.Provider>
  );
};

const ModalPanelDefaultComponent = "View" as const;
/** This indicates the panel of your actual Modal. Clicking outside of this component will trigger the onClose of the Modal component. */
export const ModalPanel = <
  T extends ReactNativeComponentType = typeof ModalPanelDefaultComponent
>({
  as = ModalPanelDefaultComponent as T,
  children,
  ...rest
}: ReactNativeComponentPropsType<T, { open: boolean }>) => {
  const { open } = useUIContext();
  const Component = createReactNativeElement(as);

  return (
    <Pressable onPress={(e) => e.stopPropagation()} style={{ cursor: "auto" }}>
      <Component {...rest} onStartShouldSetResponder={() => true}>
        <CallableChildren children={children} props={{ open: !!open }} />
      </Component>
    </Pressable>
  );
};

const ModalTitleDefaultComponent = "Text" as const;
/** This is the title for your Modal */
export const ModalTitle = <
  T extends ReactNativeComponentType = typeof ModalTitleDefaultComponent
>({
  as = ModalTitleDefaultComponent as T,
  children,
  ...rest
}: ReactNativeComponentPropsType<T, { open: boolean }>) => {
  const { open } = useUIContext();
  const Component = createReactNativeElement(as);

  return (
    <Component {...rest}>
      <CallableChildren children={children} props={{ open: !!open }} />
    </Component>
  );
};
