import { View } from "react-native";
import ModalExample from "./components/modal";

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
