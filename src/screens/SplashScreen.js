import { hp, wp, screenHeight, screenWidth } from "../constants/style";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { StyleSheet, Image, View, SafeAreaView } from "react-native";
import { Text } from "../components/text";
import { Button } from "../components/button";
import { useDispatch, useSelector } from "react-redux";

const SplashScreen = ({ navigation }) => {
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  return (
    <>
      <View style={styles.mainWrap}>
        <Image
          source={require("../../assets/images/splash.png")}
          style={styles.imageWrapStyle}
        />
        <View style={styles.footerWrapStyle}>
          <View style={styles.footerTextWrap}>
            <Text variant="headlineSmall">Welcome to Monalystics</Text>
            <Text variant="" color="label" myStyle={{ marginTop: hp(7) }}>
              Welcome to monalystics, Harness the Power of Social Media
              Insights, Forge Lucrative Influencer Partnerships, and Outsmart
              Your Competitors. Let us redefine success together!
            </Text>
          </View>
          <View style={styles.footerButtonWrap}>
            <Button
              size="small"
              icon={"arrow-right"}
              onPress={() => navigation?.push("SigninHome")}
              variant="black"
            >
              Get Started
            </Button>
          </View>
        </View>
      </View>
    </>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  mainWrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  imageWrapStyle: {
    width: "100%",
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
    // height: hp(screenHeight),
    // width: wp(screenWidth),
    backgroundColor: "#444"
  },
  footerWrapStyle: {
    flex: 2
  },
  footerTextWrap: {
    flex: 4,
    justifyContent: "center",
    // marginHorizontal: wp(20),
    width: wp(322)
  },
  footerButtonWrap: {
    flex: 1,
    width: wp(162),
    marginLeft: wp(-10)
    // backgroundColor: "#ff4"
  }
});
