import { hp, wp } from "../../constants/style/index";
import * as React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button as PButton } from "react-native-paper";
// import ScreenWrapper from '../ScreenWrapper';

const buttonVariants = {
  default: {
    mode: "contained",
    buttonColor: "#3D84F9",
    iconPosition: { flexDirection: "row-reverse" }
  },
  black: {
    mode: "contained",
    buttonColor: "#121212",
    iconPosition: { flexDirection: "row-reverse" },
    textColor: "#FFF"
  },
  gray: {
    mode: "contained-tonal",
    buttonColor: "#EAECEE",
    iconPosition: { flexDirection: "row" }
  },
  white: {
    mode: "contained-tonal",
    buttonColor: "#FFFFFF",
    textColor: "#1B59F8",
    iconPosition: { flexDirection: "row" }
  },
  outlined: {
    mode: "outlined",
    // buttonColor: "#EAECEE",
    textColor: "#283849"
  },
  request: {
    mode: "contained",
    buttonColor: "#6D8FE7",
    iconPosition: { flexDirection: "row-reverse" }
  },
  save: {
    mode: "contained",
    buttonColor: "#B6B6B6",
    iconPosition: { flexDirection: "row-reverse" }
  },
  red: {
    mode: "contained",
    buttonColor: "#FF5252",
    iconPosition: { flexDirection: "row-reverse" }
  }
};

export const Button = ({
  variant = "default",
  loading = false,
  size = "default",
  customIcon,
  children,
  // contentStyle,
  myStyle = {},
  ...props
}) => {
  return (
    <PButton
      mode={buttonVariants[variant].mode}
      buttonColor={buttonVariants[variant].buttonColor}
      onPress={() => {}}
      style={[styles.buttonStyle[size], myStyle]}
      textColor={buttonVariants[variant].textColor}
      contentStyle={[
        styles.contentStyle[size],
        buttonVariants[variant].iconPosition
        // ...contentStyle,
      ]}
      labelStyle={styles.labelStyle[size]}
      {...props}
    >
      {children}
    </PButton>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    default: {
      borderRadius: wp(10),
      marginVertical: hp(4),
      marginHorizontal: wp(4),
      justifyContent: "center",
      // alignItems: "center",
      height: hp(54)
      // width: "100%"
    },
    wide: {
      borderRadius: wp(10),
      marginVertical: hp(4),
      marginHorizontal: wp(4),
      justifyContent: "center",
      width: "100%",
      height: hp(54)
    },
    small: {
      borderRadius: wp(3),
      margin: hp(4),
      justifyContent: "center"
    },
    request: {
      borderRadius: wp(6),
      // margin: hp(4),
      justifyContent: "center",
      height: hp(30)
      // width: "100%"
    },
    tiny: {
      borderRadius: wp(37.2),
      // marginVertical: hp(4),
      marginHorizontal: wp(4),
      justifyContent: "center",
      // alignItems: "center",
      // marginLeft: 20,
      height: hp(38)
      // margin: 0,
      // width: wp(63),
      // width: "100%"
    }
  },
  contentStyle: {},
  labelStyle: {
    default: { fontSize: wp(20), lineHeight: hp(26), fontWeight: 600 },
    wide: {
      fontFamily: "Roboto-Medium",
      fontSize: wp(20),
      lineHeight: hp(26),
      fontWeight: 600
    },
    small: {
      fontSize: wp(16),
      lineHeight: hp(20),
      fontFamily: "Inter-SemiBold"
    },
    request: {
      fontSize: wp(11),
      lineHeight: hp(11),
      fontFamily: "Roboto-Medium"
    },
    tiny: { margin: 0 }
  }
});
