import { ReactNode } from "react";

import {
  ActivityIndicatorProps,
  ButtonProps,
  DrawerLayoutAndroidProps,
  FlatListProps,
  ImageBackgroundProps,
  ImageProps,
  InputAccessoryViewProps,
  KeyboardAvoidingViewProps,
  ModalProps,
  PressableProps,
  RefreshControlProps,
  ScrollViewProps,
  SectionListProps,
  StatusBarProps,
  SwitchProps,
  TextInputProps,
  TextProps,
  TouchableHighlightProps,
  TouchableNativeFeedbackProps,
  TouchableOpacityProps,
  TouchableWithoutFeedbackProps,
  ViewProps,
  VirtualizedListProps,
} from "react-native";

export type RenderPropsCallableComponent<
  T extends ViewProps | PressableProps,
  /* props to return */
  U extends unknown
> = {
  children: ReactNode | ((props: U) => ReactNode);
} & Omit<T, "children">;

type ReactNativeComponentTypeMap = {
  ActivityIndicator: ActivityIndicatorProps;
  Button: ButtonProps;
  FlatList: FlatListProps<any>;
  Image: ImageProps;
  ImageBackground: ImageBackgroundProps;
  KeyboardAvoidingView: KeyboardAvoidingViewProps;
  Modal: ModalProps;
  Pressable: PressableProps;
  RefreshControl: RefreshControlProps;
  ScrollView: ScrollViewProps;
  SectionList: SectionListProps<any>;
  StatusBar: StatusBarProps;
  Switch: SwitchProps;
  Text: TextProps;
  TextInput: TextInputProps;
  TouchableHighlight: TouchableHighlightProps;
  TouchableOpacity: TouchableOpacityProps;
  TouchableWithoutFeedback: TouchableWithoutFeedbackProps;
  View: ViewProps;
  VirtualizedList: VirtualizedListProps<any>;
  DrawerLayoutAndroid: DrawerLayoutAndroidProps;
  TouchableNativeFeedback: TouchableNativeFeedbackProps;
  InputAccessoryView: InputAccessoryViewProps;
};
export type ReactNativeComponentType = keyof ReactNativeComponentTypeMap;

export type PropsType<T extends ReactNativeComponentType> =
  ReactNativeComponentTypeMap[T];

export type ReactNativeComponentProps<T extends ReactNativeComponentType> = {
  as?: T;
  children?: ReactNode;
} & PropsType<T>;
