import React from "react";
import {
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  ViewProps,
  TextProps,
  ButtonProps,
  ScrollView,
} from "react-native";

type DialogProps = {
  onClose: () => void;
  isOpen: boolean;
  scrollable?: boolean;
};

const Dialog = ({
  isOpen,
  onClose,
  scrollable,
  ...rest
}: DialogProps & ViewProps) => {
  if (!isOpen) return null;

  const Component = scrollable ? ScrollView : View;
  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // optional overlay
      }}
      {...rest}
    >
      <TouchableWithoutFeedback onPress={onClose}>
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
  );
};

// Clicking outside the DialogPanel component will close the dialog,
// so keep that in mind when deciding which styles to apply to which elements.

const DialogPanel = (props: ViewProps) => (
  <TouchableWithoutFeedback>
    <View {...props} />
  </TouchableWithoutFeedback>
);

const DialogTitle = (props: TextProps) => {
  return <Text {...props} />;
};

// component that will close the nearest dialog ancestor when clicked.
const CloseButton = ({
  onClose,
  ...rest
}: {
  onClose: () => void;
} & ButtonProps) => {
  return <Button {...rest} onPress={onClose} />;
};

const useClose = (onClose: () => void) => {
  const close = () => {
    onClose();
  };
  return close;
};

const Description = (props: TextProps) => <Text {...props} />;
