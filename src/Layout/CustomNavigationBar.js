import { hp, wp } from "../constants/style";
import { Appbar } from "react-native-paper";
import { getHeaderTitle } from "@react-navigation/elements";
import { IconButton } from "../components/button";
import { View, Image } from "react-native";
import { Text } from "../components/text";

export default function CustomNavigationBar({
  navigation,
  route,
  options,
  back
}) {
  const title = getHeaderTitle(options, route.name);

  // const route = useRoute();

  // Access the current screen name
  const currentScreen = route.name;
  console.log(currentScreen);

  return (
    <Appbar.Header
      style={[{ height: hp(70), backgroundColor: "#FFF" }, options.headerStyle]}
    >
      {back ? (
        <View
          style={{
            paddingLeft: wp(10),
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          {/* <Appbar.BackAction
            onPress={navigation.goBack}
            icon="arrow-left-circle"
          /> */}
          <IconButton
            size={wp(20)}
            variant={
              [
                "SafetyTools",
                "ContactSupport",
                "ScheduleTime",
                "RallyPoints"
              ].includes(currentScreen)
                ? "white"
                : "black"
            }
            onPress={() => {
              switch (currentScreen) {
                case "ScheduledTrip":
                  navigation.push("HomeTabs");
                  break;
                default:
                  navigation.goBack();
                  break;
              }
            }}
            icon={options.icon}
            style={{ marginRight: wp(16) }}
          />
          <Image
            source={require("../../assets/images/logo.png")} // Replace with the actual path of your logo image
            style={{ width: wp(160), height: hp(120), marginRight: wp(16) }}
            resizeMode="contain"
          />
          {/* {options.label && (
            <Text color="white" fontFamily="bold" myStyle={{ fontSize: wp(21), lineHeight: wp(21) }}>{options.label}</Text>
          )} */}
        </View>
      ) : null}
      <Appbar.Content
        title={options.label}
        color={
          [
            "SafetyTools",
            "ContactSupport",
            "ScheduleTime",
            "RallyPoints"
          ].includes(currentScreen)
            ? "white"
            : "black"
        }
      />
    </Appbar.Header>
  );
}
