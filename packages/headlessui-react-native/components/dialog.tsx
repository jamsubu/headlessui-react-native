import React, { useContext, createContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ViewProps,
  TextProps,
  ButtonProps,
  ScrollView,
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
} & ViewProps;

const Dialog = ({
  isOpen,
  onClose,
  scrollable,
  accessibilityLabel = "Dialog",
  ...rest
}: DialogProps) => {
  if (!isOpen) return null;

  const Component = scrollable ? ScrollView : View;
  return (
    <DialogContext.Provider value={{ onClose }}>
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
        accessibilityRole="alert"
        accessibilityLabel={accessibilityLabel}
        {...rest}
      >
        <TouchableWithoutFeedback
          onPress={onClose}
          accessibilityLabel="Close dialog"
        >
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />
        </TouchableWithoutFeedback>
        <Component>{rest.children}</Component>
      </View>
    </DialogContext.Provider>
  );
};

const DialogPanel = ({
  accessibilityLabel = "Dialog Panel",
  ...props
}: ViewProps) => (
  <View
    accessibilityRole="none"
    accessibilityLabel={accessibilityLabel}
    {...props}
  />
);

const DialogTitle = ({
  accessibilityLabel = "Dialog Title",
  ...props
}: TextProps) => {
  return (
    <Text
      accessibilityRole="header"
      accessibilityLabel={accessibilityLabel}
      {...props}
    />
  );
};

const CloseButton = ({
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

const Description = ({
  accessibilityLabel = "Description",
  ...props
}: TextProps) => (
  <Text
    accessibilityRole="text"
    accessibilityLabel={accessibilityLabel}
    {...props}
  />
);
