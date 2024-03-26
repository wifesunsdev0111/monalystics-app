import { hp, wp } from "../../constants/style";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Chip as PChip } from "react-native-paper";

export const Chip = ({ children, ...props }) => {
  const [selected, setSelected] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("#EAECEE");
  const [borderColor, setBorderColor] = useState("#BEC3C9");
  const [color, setColor] = useState("#566573");

  const onPress = () => {
    setSelected(!selected);
  };

  useEffect(() => {
    setBackgroundColor(selected ? "#E8F8FF" : "#EAECEE");
    setBorderColor(selected ? "#1696CC" : "#BEC3C9");
    setColor(selected ? "#158DBF" : "#566573");
  }, [selected]);
  return (
    <PChip
      mode="outlined"
      onPress={onPress}
      selected={selected}
      {...props}
      style={{
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        border: 1,
        borderRadius: wp(32),
        // padding: 5,
        // height: 45,
        justifyContent: "center",
        marginHorizontal: wp(5),
        // height: "100%",
        // paddingVertical: 10,
        marginVertical: hp(10),
        ...props.myStyle
      }}
      textStyle={{
        color: color,
        fontFamily: "Quicksand-Bold",
        fontSize: wp(14),
        fontWeight: 600,
        lineHeight: hp(20),
        letterSpacing: wp(-0.21),
        marginVertical: hp(15),
      }}
      showSelectedOverlay={true}
      showSelectedCheck={false}
    >
      {children}
    </PChip>
  );
};

const styles = StyleSheet.create({
  colorStyle: {
    default: { color: "#121A22" },
    paragraph: { color: "#566573" },
    label: { color: "#283849" },
    link: { color: "#18222C" },
  },
  underLineStyle: {
    textDecorationLine: "underline",
  },
  textAlignStyle: {
    default: { textAlign: "left" },
    center: { textAlign: "center" },
  },
});
