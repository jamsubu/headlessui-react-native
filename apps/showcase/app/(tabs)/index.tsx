import { DialogTitle } from "headlessui-react-native";
import { useState } from "react";
import { Button, View } from "react-native";

export default function HomeScreen() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View>
      <Button title="open dialog" />
      <DialogTitle>Hello?</DialogTitle>
    </View>
  );
}
