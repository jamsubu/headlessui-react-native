import { router } from "expo-router";
import { Button, View } from "react-native";

export default function Page() {
  return (
    <View>
      <Button title="sitemap" onPress={() => router.push("/_sitemap")}></Button>
    </View>
  );
}
