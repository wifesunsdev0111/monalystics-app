import { hp, wp } from "../../constants/style";
import React, { useState } from "react";
import { Pressable, View } from "react-native";
import { Text } from "../text";
import DateTimePicker from '@react-native-community/datetimepicker';
import { TextInput as ATextInput } from "react-native-paper";

export const TimeSelect = ({
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
        hour: '2-digit',
        minute: '2-digit',
    };

    const showDatepicker = () => {
        setShow(true);
    };

    return (
        <View style={myStyle}>
            <Text variant="bodyMedium">Pick up by?</Text>
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
                        <ATextInput.Icon icon={"timer-outline"} style={{ width: wp(24), height: wp(24) }} />
                    )}
                    value={date.toLocaleString('en-US', options)}
                />
            </Pressable>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={'time'}
                    is24Hour={true}
                    onChange={onChange}
                // dateFormat="dayofweek day month"
                // format="HH:mm"
                />
            )}
        </View >
    );
}