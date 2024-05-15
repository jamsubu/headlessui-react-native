import { Modal, ModalPanel, ModalTitle } from "headlessui-react-native";
import React, { useState } from "react";
import { Button, Text, View } from "react-native";

export function ScrollableModalExample() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View>
      <Button title="Open dialog" onPress={() => setIsOpen(true)} />
      <Modal onClose={() => setIsOpen(false)} isOpen={isOpen}>
        <View
          style={{
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            padding: 40,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <ModalPanel
            style={{
              padding: 20,
              width: 300,
              backgroundColor: "white",
            }}
            scrollable
          >
            <ModalTitle style={{ fontSize: 20, fontWeight: "700" }}>
              Payment successful
            </ModalTitle>
            <View style={{ paddingTop: 20, paddingBottom: 20 }}>
              {Array.from({ length: 50 }).map((_, index) => (
                <Text key={index}>new line</Text>
              ))}
            </View>
            <Button title="Got it, thanks!" onPress={() => setIsOpen(false)} />
          </ModalPanel>
        </View>
      </Modal>
    </View>
  );
}
