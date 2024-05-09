import { Modal, ModalPanel, ModalTitle } from "headlessui-react-native";
import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function HomeScreen() {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  return (
    <View>
      <Button title="open dialog" onPress={() => setIsOpen(true)} />
      <Modal onClose={onClose} isOpen={isOpen}>
        <View
          style={{
            flex: 1,
            backgroundColor: "red",
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        />
        <ModalPanel
          style={{
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            margin: 20,
            backgroundColor: "white",
          }}
        >
          <ModalTitle>dasojdasksdk</ModalTitle>
          <View>
            <Text>Im the only content</Text>
          </View>
        </ModalPanel>
      </Modal>
    </View>
  );
}
