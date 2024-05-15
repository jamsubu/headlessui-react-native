import { ModalExample } from "headlessui-react-native-example-ui";
import { View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ModalExample />
    </View>
  );
}
