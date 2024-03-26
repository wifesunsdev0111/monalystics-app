import { wp, hp } from "../../constants/style/index";
import * as React from "react";
import { View, StyleSheet, Image } from "react-native";
import { IconButton as PIconButton } from "react-native-paper";
// import ScreenWrapper from '../ScreenWrapper';

const buttonVariants = {
  default: {
    mode: "contained",
    buttonColor: "#3D84F9",
    iconPosition: "row-reverse",
    iconColor: "white",
  },
  black: {
    mode: "contained",
    buttonColor: "#121212",
    iconPosition: "row-reverse",
    iconColor: "white",
  },
  gray: {
    mode: "contained-tonal",
    buttonColor: "#EAECEE",
    iconPosition: "row",
  },
  white: {
    mode: "contained-tonal",
    buttonColor: "#ffffff",
    iconPosition: "row",
  },
};

export const IconButton = ({
  variant = "black",
  icon = "arrow-left",
  size = wp(20),
  containerColor = "",
  ...props
}) => {
  return (
    <PIconButton
      mode={buttonVariants[variant].mode}
      size={size}
      onPress={() => {}}
      icon={icon}
      iconColor={buttonVariants[variant].iconColor}
      containerColor={buttonVariants[variant].buttonColor}
      {...props}
    />
  );
};
