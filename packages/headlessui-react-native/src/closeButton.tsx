import { Pressable, PressableProps } from "react-native";

import React from "react";
import { useUIContext } from "./useUIContext";

export const CloseButton = ({
  accessibilityLabel = "Close Button",
  ...props
}: PressableProps) => {
  const { onClose } = useUIContext();

  return (
    <Pressable
      onPress={onClose}
      accessibilityLabel={accessibilityLabel}
      {...props}
    />
  );
};
