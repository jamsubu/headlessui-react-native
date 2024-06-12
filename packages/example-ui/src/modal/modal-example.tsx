import { Modal, ModalPanel, ModalTitle } from "headlessui-react-native";
import React, { useState } from "react";
import {
  Button,
  Pressable,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

export function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View>
      <Button title="Open dialog" onPress={() => setIsOpen(true)} />
      <Modal onClose={() => setIsOpen(false)} open={isOpen}>
        <View style={modalContainerStyle}>
          <ModalPanel style={modalPanelStyle}>
            <ModalTitle style={modalTitleStyle}>Payment successful</ModalTitle>
            <View style={modalPanelContentStyle}>
              <Text>
                Your payment has been successfully submitted. We’ve sent you an
                email with all of the details of your order.
              </Text>
            </View>
            <Button title="Got it, thanks!" onPress={() => setIsOpen(false)} />
          </ModalPanel>
        </View>
      </Modal>
    </View>
  );
}
const modalContainerStyle: ViewStyle = {
  width: "100%",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
  padding: 40,
  cursor: "auto",
  /** backdrop color */
  backgroundColor: "rgba(0, 0, 0, 0.5)",
};
const modalPanelStyle = {
  padding: 20,
  width: 300,
  backgroundColor: "white",
};
const modalTitleStyle: TextStyle = { fontSize: 20, fontWeight: "700" };
const modalPanelContentStyle = { paddingTop: 20, paddingBottom: 20 };
