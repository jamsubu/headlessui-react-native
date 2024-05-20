import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "headlessui-react-native";
import React from "react";
import { View, Text } from "react-native";

export function DisclosureExample() {
  return (
    <View>
      <Disclosure>
        <DisclosureButton>
          <Text>Hello button</Text>
        </DisclosureButton>
        <DisclosurePanel>
          <Text>I'm panel</Text>
        </DisclosurePanel>
      </Disclosure>
    </View>
  );
}
