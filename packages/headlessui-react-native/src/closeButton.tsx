import { Button, ButtonProps } from "react-native";

import React from "react";
import { useUIContext } from "./useUIContext";

export const CloseButton = ({
  accessibilityLabel = "Close Button",
  ...props
}: ButtonProps) => {
  const { onClose } = useUIContext();

  return (
    <Button
      onPress={onClose}
      accessibilityLabel={accessibilityLabel}
      {...props}
    />
  );
};
