import React, { useState } from "react";
import { ReactNativeComponentPropsType } from "../constants";
import { UIContext } from "../hooks";
import { createReactNativeElement } from "../utils";
import { CallableChildren } from "./callable-children";

/**
 * The main input component.
 */
export const Input = ({
  children,
  invalid = false,
  disabled = false,
  autoFocus = false,
  ...rest
}: ReactNativeComponentPropsType<
  "TextInput",
  { invalid?: boolean; disabled?: boolean; autoFocus: boolean }
> & { invalid?: boolean; disabled?: boolean; autoFocus: boolean }) => {
  const Component = createReactNativeElement("TextInput");

  return (
    <Component {...rest}>
      <CallableChildren
        children={children}
        props={{ invalid, disabled, autoFocus }}
      />
    </Component>
  );
};
