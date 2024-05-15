import { Slot } from "expo-router";
import * as React from "react";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Slot />
    </View>
  );
}
