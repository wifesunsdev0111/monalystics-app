import { hp, wp } from "../../constants/style";
import { SelectList } from "react-native-dropdown-select-list";
import React, { useState } from "react";
import { View } from "react-native";
import { Text } from "../text";


export const IDSelect = ({
    myStyle,
}) => {
    const [ID, setID] = useState('');
    const data = [
        { key: 0, value: "Voters card" },
        { key: 1, value: "Drivers license" },
        { key: 2, value: "National Identity Card" },
        { key: 3, value: "International Passport" },
    ];
    return (
        <View style={myStyle}>
            <Text variant="bodyMedium" fontFamily="bold">Choose your ID</Text>
            <SelectList
                setSelected={(val) => setID(val)}
                data={data}
                save="value"
                boxStyles={{
                    borderRadius: hp(29),
                    marginVertical: hp(8),
                    height: hp(58),
                    width: "100%",
                    alignItems: "center",
                    paddingHorizontal: wp(32),
                    // borderBottomColor: "#333",
                    // borderBottomWidth: hp(2),
                }}
                fontFamily="Quicksand-Medium"
                dropdownTextStyles={{ fontSize: hp(16), color: "#566573" }}
                search={false}
                // defaultOption={{key:0, value: "male"}}
                inputStyles={{
                    fontSize: wp(16),
                    color: ID ? "#121A22" : "#9EA6AF",
                }}
                placeholder="Voters card"
                // dropdownShown={false}
                dropdownItemStyles={{
                    borderBottomWidth: hp(0.5),
                    borderBottomColor: "#BEC3C9",
                }}
                dropdownStyles={{
                    borderRadius: hp(19),
                    height: hp(248),
                    // padding: "13 60 27 0",
                    // borderColor: "#EAECEE",
                    // alignItems: "center",
                    boxShadow: "0 3 9.3 0 rgba(0, 0, 0, 0.13)",
                    // elevation: 1,
                    shadowColor: "rgba(0, 0, 0, 0.13)",
                    // shadowOffset: { width: 2, height: 2 },
                    // shadowOpacity: 0.5,
                    // shadowRadius: 5,
                    // borderRadius: 10,
                    // paddingVertical: 20,
                }}
            />
        </View>
    );
}