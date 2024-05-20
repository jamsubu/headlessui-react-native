import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "headlessui-react-native";
import React from "react";
import { View, Text, ViewStyle, TextStyle } from "react-native";

export function DisclosureExample() {
  return (
    <View>
      <Disclosure style={disclosureStyle}>
        <DisclosureButton style={disclosureButtonStyle}>
          {({ open }) => (
            <>
              <Text style={disclosureButtonTextStyle}>
                What is your refund policy?
              </Text>
              <Arrow rotate={open} />
            </>
          )}
        </DisclosureButton>
        <DisclosurePanel>
          <Text style={disclosurePannelTextStyle}>
            If you're unhappy with your purchase, we'll refund you in full.
          </Text>
        </DisclosurePanel>
      </Disclosure>
      <Disclosure style={disclosureStyle}>
        <DisclosureButton style={disclosureButtonStyle}>
          {({ open }) => (
            <>
              <Text style={disclosureButtonTextStyle}>
                Do you offer technical support?
              </Text>
              <Arrow rotate={open} />
            </>
          )}
        </DisclosureButton>
        <DisclosurePanel>
          <Text style={disclosurePannelTextStyle}>No.</Text>
        </DisclosurePanel>
      </Disclosure>
    </View>
  );
}

const disclosureStyle: ViewStyle = {
  width: 300,
  padding: 16,
  backgroundColor: "rgb(33, 150, 243)",
};
const disclosureButtonStyle: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};
const disclosureButtonTextStyle: TextStyle = { color: "white" };
const disclosurePannelTextStyle: TextStyle = { color: "rgba(0,0,0,0.7)" };

const Arrow = ({ rotate }: { rotate: boolean }) => (
  <View
    style={{
      width: 0,
      height: 0,
      borderStyle: "solid",
      borderWidth: 6,
      borderColor: "transparent",
      borderTopWidth: 0,
      borderBottomWidth: 10,
      borderBottomColor: "white",
      transform: [{ rotate: !rotate ? "180deg" : "0deg" }],
    }}
  />
);
