import { Modal, ModalPanel, ModalTitle } from "headlessui-react-native";
import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);

  return (
    <View>
      <Button title="Open dialog" onPress={() => setIsOpen(true)} />
      <Modal onClose={onClose} isOpen={isOpen}>
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        />
        <ModalPanel
          style={{
            width: "50%",
            height: "20%",
            padding: 12,
            borderRadius: 10,
            backgroundColor: "white",
            justifyContent: "space-between",
          }}
        >
          <ModalTitle style={{ fontSize: 20, fontWeight: 700 }}>
            Payment successful
          </ModalTitle>
          <View>
            <Text>
              Your payment has been successfully submitted. We’ve sent you an
              email with all of the details of your order.
            </Text>
          </View>
          <Button title="Got it, thanks!" onPress={onClose} />
        </ModalPanel>
      </Modal>
    </View>
  );
}
