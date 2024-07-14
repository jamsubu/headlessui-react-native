import React, { useEffect, useState } from "react";
import { Animated } from "react-native";
import { ReactNativeComponentPropsType } from "../constants";

const TransitionDefaultComponent = "View" as const;
export const Transition = <
  T extends
    | "View"
    | "FlatList"
    | "SectionList"
    | "Image"
    | "ScrollView" = typeof TransitionDefaultComponent
>({
  as = TransitionDefaultComponent as T,
  children,
  appear = true,
  unmount = true,
  beforeEnter,
  afterEnter,
  beforeLeave,
  afterLeave,
  ...rest
}: ReactNativeComponentPropsType<T> & {
  appear?: boolean;
  unmount?: boolean;
  beforeEnter?: () => void;
  afterEnter?: () => void;
  beforeLeave?: () => void;
  afterLeave?: () => void;
}) => {
  const Component = Animated[as] as Animated.AnimatedComponent<
    (typeof Animated)[typeof as]
  >;

  const [animation] = useState(new Animated.Value(appear ? 1 : 0));

  useEffect(() => {
    if (appear) {
      if (beforeEnter) beforeEnter();
      Animated.timing(animation, {
        toValue: 1,
        duration: 300,

        useNativeDriver: true,
      }).start(() => {
        if (afterEnter) afterEnter();
      });
    }
    return () => {
      if (beforeLeave) beforeLeave();
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        if (afterLeave) afterLeave();
      });
    };
  }, []);

  //@ts-ignore
  return <Component {...rest}></Component>;
};
