import { hp, wp } from "./src/constants/style";
import { StatusBar } from "expo-status-bar";
import { useMaterial3Theme } from "@pchmn/expo-material3-theme";
import { useColorScheme, StyleSheet, Platform } from "react-native";
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme
} from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets
} from "@react-navigation/stack";
import {
  configureFonts,
  MD3LightTheme,
  MD3DarkTheme,
  PaperProvider,
  adaptNavigationTheme
} from "react-native-paper";
import merge from "deepmerge";
import { useFonts } from "expo-font";
import { Provider, useSelector } from "react-redux";
import { store, persistor } from "./src/core/redux/store";
import { PersistGate } from "redux-persist/integration/react";
// import Permissions from "react-native-permissions";

import SplashScreen from "./src/screens/SplashScreen";
import CustomNavigationBar from "./src/Layout/CustomNavigationBar";
import SigninHomeScreen from "./src/screens/SigninHomeScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import ExistingCampaigns from "./src/screens/ExistingCampaigns";
import Profile from "./src/screens/Profile";
import CampaignDetail from "./src/screens/CampaignDetail";

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme
});

const Stack = createStackNavigator();

// Platform.OS === "android" && StatusBar.setBackgroundColor("transparent");
// Platform.OS === "android" && StatusBar.setTranslucent(true);

export default function App() {
  const [loaded] = useFonts({
    "Roboto-Light": require("./assets/fonts/static/Roboto-Light.ttf"),
    "Roboto-Medium": require("./assets/fonts/static/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/static/Roboto-Regular.ttf"),
    "Inter-Light": require("./assets/fonts/static/Inter-Light.ttf"),
    "Inter-Regular": require("./assets/fonts/static/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/static/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/static/Inter-SemiBold.ttf")
  });

  // First, define base font that will be used across the app.
  // For MD3 this will apply to all base typography variants:
  // displaySmall, headlineMedium, titleLarge etc.

  const baseFont = {
    fontFamily: Platform.select({
      ios: "Roboto-Medium",
      android: "Roboto-Medium",
      default: "Roboto-Medium"
    })
    // fontWeight: "400",
    // letterSpacing: 0.5,
    // lineHeight: 18,
    // fontSize: 16,
    // fontColor: "#FFFF00"
  };

  const baseVariants = configureFonts({ config: baseFont });

  // Then, define custom fonts for different variants

  const customVariants = {
    // Customize individual base variants:
    headlineSmall: {
      ...baseVariants.headlineSmall,
      fontFamily: "Inter-SemiBold",
      fontSize: wp(24),
      lineHeight: hp(32)
    },

    bodyMedium: {
      ...baseVariants.bodyMedium,
      fontFamily: "Inter-Regular",
      fontSize: wp(14),
      fontWeight: 400,
      letterSpacing: wp(-0.21),
      lineHeight: hp(20)
    },

    welcomeLight: {
      ...baseVariants.welcomeLight,
      fontFamily: "Roboto-Regular",
      fontSize: wp(20),
      fontWeight: 400,
      letterSpacing: wp(-0.21),
      lineHeight: hp(30)
    },

    authLabel: {
      ...baseVariants.authLabel,
      fontFamily: "Roboto-Medium",
      fontSize: wp(24),
      fontWeight: 500,
      letterSpacing: wp(-0.21),
      lineHeight: hp(38)
    },

    authBottom: {
      ...baseVariants.welcomeLight,
      fontFamily: "Roboto-Regular",
      fontSize: wp(16),
      fontWeight: 400,
      letterSpacing: wp(-0.21),
      lineHeight: hp(20)
    },

    annotation: {
      ...baseVariants.welcomeLight,
      fontFamily: "Roboto-Light",
      fontSize: wp(14),
      fontWeight: 400,
      letterSpacing: wp(-0.21),
      lineHeight: hp(20)
    },

    headlineMedium: {
      ...baseVariants.headlineMedium,
      fontFamily: "Inter-SemiBold",
      // fontWeight: 700,
      fontSize: wp(16),
      lineHeight: hp(20)
    },

    listTitle: {
      ...baseVariants.listTitle,
      fontFamily: "Inter-SemiBold",
      fontSize: wp(14),
      lineHeight: hp(18)
    },

    listName: {
      ...baseVariants.listName,
      fontFamily: "Inter-Medium",
      fontSize: wp(12),
      lineHeight: hp(16)
    },
    listInfluencer: {
      ...baseVariants.listInfluencer,
      fontFamily: "Inter-Regular",
      fontSize: wp(11),
      lineHeight: hp(15)
    },
    profileDetail: {
      ...baseVariants.listName,
      fontFamily: "Inter-Light",
      fontSize: wp(12),
      lineHeight: hp(16)
    }
  };

  // Finally, merge base variants with your custom tokens
  // and apply custom fonts to your theme.

  const fonts = configureFonts({
    config: {
      ...baseVariants,
      ...customVariants
    }
  });

  // const theme = useTheme();
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme();

  const CombinedDefaultTheme = merge({ ...MD3LightTheme, fonts }, LightTheme);
  const CombinedDarkTheme = merge({ ...MD3DarkTheme, fonts }, DarkTheme);

  const paperTheme =
    colorScheme === "dark"
      ? { ...CombinedDarkTheme, colors: { ...theme.dark } }
      : { ...CombinedDefaultTheme, colors: { ...theme.light } };

  if (!loaded) {
    return null;
  }

  // Permissions.check("camera").then((response) => {
  //   if (response === "authorized") {
  //     // Permission is already granted
  //   } else {
  //     Permissions.request("camera").then((response) => {
  //       if (response === "authorized") {
  //         // Permission is now granted
  //       } else {
  //         // Permission was denied
  //       }
  //     });
  //   }
  // });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={paperTheme}>
          <NavigationContainer theme={paperTheme}>
            <StatusBar style="dark" translucent={true} hidden={false} />
            <Stack.Navigator
              initialRouteName="Splash"
              screenOptions={{
                // headerShown: false,
                // headerMode: 'screen',
                cardStyle: { backgroundColor: "#FFFFFF" },
                header: (props) => <CustomNavigationBar {...props} />,
                ...TransitionPresets.SlideFromRightIOS
              }}
            >
              <Stack.Screen
                name="Splash"
                component={SplashScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SigninHome"
                component={SigninHomeScreen}
                options={{
                  title: "Signin Home"
                  // headerStyle: { backgroundColor: "#FFF" },
                }}
              />
              <Stack.Screen
                name="SignupHome"
                component={SignUpScreen}
                // options={{ ...TransitionPresets.DefaultTransition }}
              />
              <Stack.Screen
                name="ExistingCampaigns"
                component={ExistingCampaigns}
              />
              <Stack.Screen name="Profile" component={Profile} />
              <Stack.Screen name="CampaignDetail" component={CampaignDetail} />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
