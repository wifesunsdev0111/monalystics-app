import { hp, wp } from "../../constants/style";
import { SelectList } from "react-native-dropdown-select-list";
import React, { useState } from "react";
import { View } from "react-native";
import { Text } from "../text";


export const BirthdaySelect = ({
    myStyle
}) => {
    const [month, setMonth] = useState('');
    const [date, setDate] = useState('');
    const [year, setYear] = useState('');
    const months = [
        { key: 1, value: "01" },
        { key: 2, value: "02" },
        { key: 3, value: "03" },
        { key: 4, value: "04" },
        { key: 5, value: "05" },
        { key: 6, value: "06" },
        { key: 7, value: "07" },
        { key: 8, value: "08" },
        { key: 9, value: "09" },
        { key: 10, value: "10" },
        { key: 11, value: "11" },
        { key: 12, value: "12" },
    ];
    let dates = [];
    for (let i = 0; i < 31; i++) {
        dates.push({ key: i + 1, value: (i + 1).toString().padStart(2, '0') })
    }
    let years = [];
    for (let i = 1969; i < 2050; i++) {
        years.push({ key: i + 1, value: (i + 1).toString() })
    }
    return (
        <View style={myStyle}>
            <Text variant="bodyMedium">Date of birth</Text>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                // backgroundColor: "#777",
            }}>
                <View style={{ width: wp(111), }}>
                    <SelectList
                        setSelected={(val) => setMonth(val)}
                        data={months}
                        save="value"
                        boxStyles={{
                            borderRadius: hp(29),
                            marginVertical: hp(8),
                            height: hp(58), width: "100%",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                        }}
                        fontFamily="Quicksand-Medium"
                        dropdownTextStyles={{ fontSize: hp(16) }}
                        search={false}
                        // defaultOption={{key:0, value: "male"}}
                        inputStyles={{
                            fontSize: hp(16),
                            // color:"#9EA6AF",
                        }}
                        placeholder="MM"
                        // dropdownShown={false}
                        maxHeight={hp(100)}
                    />
                </View>
                <View style={{ width: wp(111), }}>
                    <SelectList
                        setSelected={(val) => setDate(val)}
                        data={dates}
                        save="value"
                        boxStyles={{
                            borderRadius: hp(29),
                            marginVertical: hp(8),
                            height: hp(58), width: "100%",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                        }}
                        fontFamily="Quicksand-Medium"
                        dropdownTextStyles={{ fontSize: hp(16) }}
                        search={false}
                        // defaultOption={{key:0, value: "male"}}
                        inputStyles={{
                            fontSize: hp(16),
                            // color:"#9EA6AF",
                        }}
                        placeholder="DD"
                        maxHeight={hp(100)}
                    />
                </View>
                <View style={{ width: wp(111), }}>
                    <SelectList
                        setSelected={(val) => setYear(val)}
                        data={years}
                        save="value"
                        boxStyles={{
                            borderRadius: hp(29),
                            marginVertical: hp(8), height: hp(58),
                            width: "100%", alignItems: "center",
                            justifyContent: "space-evenly"
                        }}
                        fontFamily="Quicksand-Medium"
                        dropdownTextStyles={{ fontSize: hp(16) }}
                        search={false}
                        // defaultOption={{key:0, value: "male"}}
                        inputStyles={{
                            fontSize: hp(16),
                            // color:"#9EA6AF",
                        }}
                        placeholder="YYYY"
                        maxHeight={hp(100)}
                    />
                </View>
            </View>
        </View >
    );
}