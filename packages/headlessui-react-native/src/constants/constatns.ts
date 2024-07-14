import { Fragment } from "react";
import {
  ActivityIndicator,
  Button,
  DrawerLayoutAndroid,
  FlatList,
  Image,
  ImageBackground,
  InputAccessoryView,
  KeyboardAvoidingView,
  Modal,
  Pressable,
  RefreshControl,
  ScrollView,
  SectionList,
  StatusBar,
  Switch,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  VirtualizedList,
} from "react-native";

export const COMPONENT_MAP = {
  Fragment,
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Modal,
  Pressable,
  RefreshControl,
  ScrollView,
  SectionList,
  StatusBar,
  Switch,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  VirtualizedList,
  DrawerLayoutAndroid,
  TouchableNativeFeedback,
  InputAccessoryView,
};

export type ComponentMap = typeof COMPONENT_MAP;
