import { hp, wp } from "../../constants/style/index"
import React, { useState } from "react";
import { View, TextInput, Alert, StyleSheet, Image } from "react-native";
import APhoneInput from "react-native-phone-input";
import CountryPicker from "react-native-country-picker-modal";
import { Button, Icon } from "react-native-paper";

export const PhoneInput = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countryPickerVisible, setCountryPickerVisible] = useState(false);

  const onSelectCountry = (country) => {
    setCountryCode(country.cca2);
    setSelectedCountry(country);
    setCountryPickerVisible(false);
  };

  const onSubmit = () => {
    // Perform your desired action with
    // the phone number and country code
    Alert.alert(
      "Form Submitted",
      `Phone Number: ${phoneNumber} 
                    \nCountry Code: ${countryCode}`
    );
  };

  const toggleCountryPicker = () => {
    setCountryPickerVisible(!countryPickerVisible);
  };

  return (
    <>
      <APhoneInput
        value={phoneNumber}
        initialCountry="ng"
        onChangePhoneNumber={(number) => setPhoneNumber(number)}
        onPressFlag={toggleCountryPicker}
        flagStyle={styles.flagStyle}
        textProps={{ placeholder: "number" }}
        textStyle={styles.textStyle}
        renderFlag={({ imageSource }) => (
          <Button
            icon={() => (
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <Image source={imageSource} style={styles.flagImage} />
                <Icon source="chevron-down" size={wp(20)} />
              </View>
            )}
            style={styles.flagButton}
            contentStyle={styles.flagButtonContent}
            mode="outlined"
          />
        )}
        style={styles.phoneInput}
      />
      {countryPickerVisible && (
        <CountryPicker
          withFilter={true}
          withFlagButton={true}
          withCountryNameButton={true}
          onSelect={onSelectCountry}
          onClose={() => setCountryPickerVisible(false)}
          visible={countryPickerVisible}
          containerButtonStyle={styles.countryPickerButton}
          closeButtonImageStyle={styles.countryPickerCloseButton}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  phoneInput: {
    height: hp(58),
    width: "100%",
    marginBottom: hp(20),
  },
  flagStyle: {
    width: wp(35),
    height: hp(25),
    borderRadius: wp(5),
  },
  textStyle: {
    borderWidth: 1,
    height: hp(58),
    borderRadius: wp(29),
    paddingLeft: wp(20),
  },
  flagImage: {
    width: wp(32),
    height: hp(22),
    borderRadius: hp(5),
    marginHorizontal: wp(5),
  },
  flagButton: { height: hp(58), borderRadius: hp(29) },
  flagButtonContent: {
    marginVertical: hp(16),
    justifyContent: "center",
    display: "flex",
  },
});
