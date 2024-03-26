import { hp, wp } from "../../constants/style";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Chip as PChip } from "react-native-paper";

export const MiniChip = ({ children, ...props }) => {
  const [selected, setSelected] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("#EAECEE");
  const [borderColor, setBorderColor] = useState("#BEC3C9");
  const [color, setColor] = useState("#566573");

  const onPress = () => {
    setSelected(!selected);
  };

  useEffect(() => {
    setBackgroundColor(selected ? "#E8F8FF" : "#FFFFFF");
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
        borderWidth: 0,
        borderRadius: wp(50),
        // padding: 5,
        // height: 45,
        justifyContent: "center",
        marginHorizontal: wp(5),
        // height: "100%",
        // paddingVertical: 10,
        marginVertical: hp(12),
      }}
      textStyle={{
        color: color,
        fontFamily: "Quicksand-Bold",
        fontSize: wp(12),
        fontWeight: 600,
        lineHeight: hp(16),
        letterSpacing: wp(-0.21),
        marginVertical: hp(12),
      }}
      // icon={"bookmark"}
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
