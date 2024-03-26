import { wp, hp } from "../../constants/style/index";
import * as React from "react";
import { View, StyleSheet, Image } from "react-native";
import { SegmentedButtons as ASegButton } from "react-native-paper";
// import ScreenWrapper from '../ScreenWrapper';

export const SegButton = (props) => {
  return (
    <ASegButton
      //   value={value}
      //   onValueChange={setValue}
      buttons={[
        {
          value: true,
          label: "Rate driver",
          style: { ...styles.button, marginRight: wp(-5) },
          checkedColor: "#fff",
          uncheckedColor: "#727E8A",
          labelStyle: styles.label,
        },
        {
          value: false,
          //   icon: "train",
          checkedColor: "#fff",
          uncheckedColor: "#727E8A",
          label: "Rate passenger",
          style: { ...styles.button, marginLeft: wp(-5), width: wp(100) },
          labelStyle: styles.label,
        },
      ]}
      style={styles.group}
      theme={{
        colors: { secondaryContainer: "#3B6BE8" },
      }}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    height: hp(54.7),
    borderRadius: wp(30),
    borderWidth: 0,
    marginLeft: wp(5),

    // backgroundColor: "#121212",
    borderTopStartRadius: wp(30),
    borderTopEndRadius: wp(30),
    borderBottomEndRadius: wp(30),
    borderBottomStartRadius: wp(30),
  },
  group: {
    justifyContent: "center",
    backgroundColor: "#F4F5F6",
    borderRadius: wp(50),
    width: wp(257),
    height: hp(65.6),
    alignItems: "center"
  },
  label: {
    lineHeight: hp(20),
    fontSize: wp(12),
    paddingVertical: hp(8),
    fontWeight: 600
  },
});
