import { hp, wp } from "../../constants/style/index";
import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell
} from "react-native-confirmation-code-field";

const styles = StyleSheet.create({
  root: { flex: 1, padding: 20 },
  title: { textAlign: "center", fontSize: 30 },
  // codeFieldRoot: { marginTop: 20 },
  cell: {
    width: wp(64),
    height: hp(64),
    lineHeight: hp(60),
    fontSize: wp(24),
    borderWidth: 1,
    borderColor: "#00000030",
    textAlign: "center",
    borderRadius: wp(16)
  },
  focusCell: {
    borderColor: "#000"
  }
});

const CELL_COUNT = 4;

export const VerifyCodeInput = () => {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue
  });

  return (
    // <SafeAreaView style={styles.root}>
    <CodeField
      ref={ref}
      {...props}
      // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
      value={value}
      onChangeText={setValue}
      cellCount={CELL_COUNT}
      rootStyle={styles.codeFieldRoot}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={({ index, symbol, isFocused }) => (
        <Text
          key={index}
          style={[styles.cell, isFocused && styles.focusCell]}
          onLayout={getCellOnLayoutHandler(index)}
        >
          {symbol || (isFocused ? <Cursor /> : null)}
        </Text>
      )}
    />
    // </SafeAreaView>
  );
};
