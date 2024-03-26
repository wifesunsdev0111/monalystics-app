import { hp, wp } from "../../constants/style";
import { SelectList } from "react-native-dropdown-select-list";
import React, { useState } from "react";
import { Pressable, View } from "react-native";
import { Text } from "../text";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button } from "../button";
import { TextInput as ATextInput } from "react-native-paper";

export const DateSelect = ({
    myStyle
}) => {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    };

    const showDatepicker = () => {
        setShow(true);
    };

    return (
        <View style={myStyle}>
            <Text variant="bodyMedium">Pick a date</Text>
            <Pressable onPress={showDatepicker}>
            <ATextInput
                // onFocus={showDatepicker}
                editable={false}
                mode={"outlined"}
                theme={{
                    roundness: hp(29),
                }}
                style={[
                    {
                        marginVertical: hp(8),
                        fontSize: wp(16),
                        height: hp(58),
                        width: "100%",
                        paddingHorizontal: wp(20),
                    },
                ]}
                right={(
                    <ATextInput.Icon icon={"calendar-month-outline"} style={{ width: wp(24), height: wp(24) }} />
                )}
                value={date.toLocaleString('en-US', options)}
            />
            </Pressable>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={'date'}
                    is24Hour={true}
                    onChange={onChange}
                    dateFormat="dayofweek day month"
                />
            )}
        </View >
    );
}