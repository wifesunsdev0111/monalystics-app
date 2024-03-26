import { hp, wp } from "../../constants/style/index";
import * as React from "react";
import { View } from "react-native";
import { TextInput as ATextInput, HelperText, Icon } from "react-native-paper";
import { Text } from "../text";

export const TextInput = ({
  placeholder,
  label,
  label_annotation,
  secureTextEntry,
  mode = "outlined",
  rightIcon,
  leftIcon,
  style,
  rightIconStyle,
  errorMsg = null,
  myStyle,
  myTheme,
  ...props
}) => {
  return (
    <View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {label && <Text variant="authLabel">{label}</Text>}
        {label_annotation && (
          <Text variant="annotation"> {label_annotation}</Text>
        )}
      </View>

      <ATextInput
        mode={mode}
        placeholder={placeholder}
        placeholderTextColor="#778289"
        secureTextEntry={secureTextEntry}
        theme={{
          roundness: hp(10),
          ...myTheme
          // backgroundColor: "white",
          // colors: { primary: "#fff", underlineColor: "transparent" },
        }}
        // underlineColor="#fff"
        style={{
          fontFamily: "Roboto-Light",
          marginVertical: hp(8),
          fontSize: wp(18),
          height: hp(54),
          width: "100%",
          paddingHorizontal: wp(10),
          backgroundColor: "white",
          ...myStyle
        }}
        //   left={
        //     <ATextInput.Icon
        //       icon="magnify"
        //       color={"black"}
        //       //   onPress={() => {
        //       //     changeIconColor("outlineLeftIcon");
        //       //   }}
        //     />
        //   }
        right={
          rightIcon && (
            <ATextInput.Icon icon={rightIcon} style={rightIconStyle} />
          )
        }
        left={leftIcon && <ATextInput.Icon icon={leftIcon} />}
        {...props}
      />
      {errorMsg ? (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon source="alert-circle-outline" size={hp(19)} color="#F18275" />
          <HelperText
            type="error"
            // visible={errorMsg ? true : false}
            padding="none"
            style={{
              color: "#F18275",
              fontSize: wp(13),
              paddingLeft: wp(10),
              paddingBottom: hp(6)
            }}
          >
            {errorMsg}
          </HelperText>
        </View>
      ) : (
        // <></>
        <View style={{ paddingVertical: hp(10) }} />
      )}
    </View>
  );
};
