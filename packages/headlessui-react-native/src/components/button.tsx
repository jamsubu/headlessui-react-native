import React from "react";
import { ReactNativeComponentPropsType } from "../constants";
import { createReactNativeElement } from "../utils";

export const Button = ({
  ...rest
}: ReactNativeComponentPropsType<"Button">) => {
  const Component = createReactNativeElement("Button");

  return <Component {...rest}></Component>;
};
