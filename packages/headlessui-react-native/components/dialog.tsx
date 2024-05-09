import React, { useContext, createContext } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  ViewProps,
  TextProps,
  ButtonProps,
  ModalProps,
} from "react-native";

type DialogContextType = {
  onClose: () => void;
};

const DialogContext = createContext<DialogContextType | undefined>(undefined);

const useDialogContext = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialogContext must be used within a Dialog");
  }
  return context;
};

type DialogProps = {
  onClose: () => void;
  isOpen: boolean;
  scrollable?: boolean;
} & ModalProps;

export const Dialog = ({
  isOpen,
  onClose,
  scrollable,
  accessibilityLabel = "Dialog",
  ...rest
}: DialogProps) => {
  return (
    <DialogContext.Provider value={{ onClose }}>
      <Modal
        visible={isOpen}
        transparent={true}
        onRequestClose={onClose}
        accessible
        accessibilityLabel={accessibilityLabel}
        {...rest}
      />
    </DialogContext.Provider>
  );
};

export const DialogPanel = ({
  accessibilityLabel = "Dialog Panel",
  ...props
}: ViewProps) => <View accessibilityLabel={accessibilityLabel} {...props} />;

export const DialogTitle = ({
  accessibilityLabel = "Dialog Title",
  ...props
}: TextProps) => {
  return <Text accessibilityLabel={accessibilityLabel} {...props} />;
};

export const CloseButton = ({
  onClose,
  title = "Close",
  accessibilityLabel = "Close",
  ...rest
}: { onClose?: () => void } & ButtonProps) => {
  const { onClose: contextOnClose } = useDialogContext();
  const handleClose = onClose || contextOnClose;
  return (
    <TouchableOpacity
      onPress={handleClose}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
    >
      <Text {...rest}>{title}</Text>
    </TouchableOpacity>
  );
};

export const Description = ({
  accessibilityLabel = "Description",
  ...props
}: TextProps) => <Text accessibilityLabel={accessibilityLabel} {...props} />;
