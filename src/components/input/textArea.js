import { hp, wp } from "../../constants/style/index";
import * as React from "react";
import { View } from "react-native";
import { TextInput as ATextInput, HelperText, Icon } from "react-native-paper";
import { Text } from "../text";

export const TextArea = ({
  mode = "outlined",
  rightIcon = "send",
  leftIcon,
  style,
  rightIconStyle,
  myStyle,
  myTheme,
  ...props
}) => {
  return (
    <View >
      <ATextInput
        mode={mode}
        theme={{
          roundness: hp(30),
          borderWidth: 0,
          ...myTheme
          // backgroundColor: "white",
          // colors: { primary: "#fff", underlineColor: "transparent" },
        }}
        // underlineColor="#fff"
        style={
          {
            marginVertical: hp(8),
            fontSize: wp(16),
            height: hp(120),
            width: "100%",
            borderRadius: wp(30),
            backgroundColor: "#F4F5F6",
            paddingHorizontal: wp(30),
            borderColor: "#F4F5F6",
            ...myStyle
          }
        }
        contentStyle={{ borderRadius: wp(30) }}
        multiline
        label={'Leave a Review'}
        right={
          rightIcon && (
            <ATextInput.Icon icon={rightIcon} style={rightIconStyle}
            />
          )
        }
      />
    </View>
  );
};
