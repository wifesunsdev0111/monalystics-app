import { hp, wp } from "../../constants/style";
import { SelectList } from "react-native-dropdown-select-list";
import React, { useState } from "react";
import { View } from "react-native";
import { Text } from "../text";


export const GenderSelect = ({
    myStyle,
}) => {
    const [gender, setGender] = useState('');
    const data = [
        { key: 0, value: "male" },
        { key: 1, value: "female" },
    ];
    return (
        <View style={myStyle}>
            <Text variant="bodyMedium">Gender</Text>
            <SelectList
                setSelected={(val) => setGender(val)}
                data={data}
                save="value"
                boxStyles={{
                    borderRadius: hp(29),
                    marginVertical: hp(8), 
                    height: hp(58),
                    width: "100%", 
                    alignItems: "center",
                    paddingHorizontal: wp(32),
                }}
                fontFamily="Quicksand-Medium"
                dropdownTextStyles={{ fontSize: hp(16) }}
                search={false}
                // defaultOption={{key:0, value: "male"}}
                inputStyles={{
                    fontSize: hp(16),
                    // color:"#9EA6AF",
                }}
                placeholder="Select gender"
            // dropdownShown={false}
            />
        </View>
    );
}