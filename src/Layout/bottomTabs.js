import { hp, wp, screenWidth } from "../constants/style";
import * as React from "react";
import {
  Avatar,
} from "react-native-paper";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import WalletScreen from "../screens/wallet/WalletScreen";
import ProfileScreen from "../screens/ProfileScreen";

import { View, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import { Text } from "../components/text";
import WalletSvg from "../../assets/icons/bottomnav/WalletSvg";
import HomeSvg from "../../assets/icons/bottomnav/HomeSvg";

const Tab = createBottomTabNavigator();

const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.mainContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel !== undefined ?
          options.tabBarLabel : options.title !== undefined ?
            options.title : route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <View key={index} style={[styles.mainItemContainer, { borderRightWidth: label == "notes" ? 3 : 0 }]}>
            <Pressable
              onPress={onPress}
              style={isFocused ? {
                backgroundColor: "#FFF",
                borderRadius: hp(26),
              } : {

              }}>
              <View style={{ justifyContent: 'center', alignItems: 'center', padding: 6 }}>
                {selectItem(label, isFocused)}
              </View>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
}

const selectItem = (label, isFocused) => {
  let result;
  switch (label) {
    case "Profile":
      result = isFocused ?
        (<View style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: hp(42),
          width: wp(90),
        }}>
          <View style={{
            borderColor: "#00000077",
            height: hp(41),
            width: hp(41),
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderRadius: hp(1000),
            borderStyle: 'dashed',
          }}>
            <Avatar.Image
              source={require("../../assets/images/avatar.png")}
              size={hp(34)}
            />
          </View>
          <Text variant="labelMedium" myStyle={{ marginLeft: wp(8) }}>{label}</Text>
        </View>) :
        (<View style={{
          borderColor: "#FFFFFF33",
          padding: hp(3),
          borderWidth: 1,
          borderRadius: hp(1000),
          borderStyle: 'dashed',
        }}>
          <Avatar.Image
            source={require("../../assets/images/avatar.png")}
            size={hp(34)}
          />
        </View>);
      break;
    case "Wallet":
      result = isFocused ?
        (<View style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: hp(42),
          width: wp(90),
        }}>
          <WalletSvg black={true} />
          <Text variant="labelMedium" myStyle={{ marginLeft: wp(8) }}>{label}</Text>
        </View>) :
        (<View style={{
          borderColor: "#FFFFFF33",
          height: hp(41),
          width: hp(41),
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 1,
          borderRadius: hp(1000),
        }}>
          <WalletSvg />
        </View>);
      break;
    case "Home":
      result = isFocused ?
        (<View style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: hp(42),
          width: wp(90),
        }}>
          <HomeSvg black={true} />
          <Text variant="labelMedium" myStyle={{ marginLeft: wp(8) }}>{label}</Text>
        </View>) :
        (<View style={{
          borderColor: "#FFFFFF33",
          height: hp(41),
          width: hp(41),
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 1,
          borderRadius: hp(1000),
        }}>
          <HomeSvg />
        </View>);
      break;
  }
  return result;
}

export default function HomeTabs() {
  return (
    // <NavigationContainer >
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          // position: "absolute",
          // left: 0,
          // bottom: 0,
          // elevation: 0,
          // borderTopWidth: 0,
          backgroundColor: "transparent"
        },
      }}
      sceneContainerStyle={{
        background: "transparent"
      }}
      // style={{ backgroundColor: "#333" }}
      // tabBar={(props) => <BottomNavigation {...props} />}
      tabBar={props => <TabBar {...props} />}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 25,
    alignSelf: "center",
    backgroundColor: "#121212",
    borderRadius: hp(1000),
  },
  mainItemContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: hp(7),
    // borderRadius: 1,
    // borderColor: "#121212",
  },
});