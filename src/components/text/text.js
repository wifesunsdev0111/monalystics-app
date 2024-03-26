import * as React from "react";
import { StyleSheet } from "react-native";
import { Text as PText } from "react-native-paper";

export const Text = ({
  color = "default",
  under = false,
  fontFamily = "default",
  textAlign = "default",
  myStyle = {},
  children,
  onPress,
  ...props
}) => {
  return (
    <PText
      onPress={onPress}
      style={[
        styles.colorStyle[color],
        under ? styles.underLineStyle : "",
        styles.textAlignStyle[textAlign],
        styles.fontFamilyStyle[fontFamily],
        myStyle
      ]}
      {...props}
    >
      {children}
    </PText>
  );
};

const styles = StyleSheet.create({
  colorStyle: {
    default: { color: "#121A22" },
    paragraph: { color: "#566573" },
    label: { color: "#283849" },
    link: { color: "#18222C" },
    white: { color: "#fff" },
    red: { color: "#f00" },
    blue: { color: "#3B6BE8" },
    black: { color: "#000000" },
    place: { color: "#2C3E50" }
  },
  underLineStyle: {
    textDecorationLine: "underline"
  },
  textAlignStyle: {
    default: { textAlign: "left" },
    center: { textAlign: "center" }
  },
  fontFamilyStyle: {
    default: {},
    bold: { fontFamily: "Inter-SemiBold" },
    regular: { fontFamily: "Inter-Regular" }
  }
});
