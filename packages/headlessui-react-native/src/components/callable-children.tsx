import { ReactNode } from "react";

export const CallableChildren = <T,>({
  children,
  props,
}: {
  children: ReactNode | ((props: T) => ReactNode);
  props: T;
}) => (typeof children === "function" ? children(props) : children);
