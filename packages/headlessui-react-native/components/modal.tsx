import React, { ReactNode } from "react";
import { Modal } from "react-native";

type DialogRootProps = {
  children: ReactNode;
};
const DialogRoot = ({ children }: DialogRootProps) => <Modal>{children}</Modal>;

const DialogButton = () => {};

export const Dialog = Object.assign(DialogRoot, {
  Button: DialogButton,
});
