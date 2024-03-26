import { hp, wp } from "../constants/style";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text } from "../components/text";
import { Button } from "../components/button";
import { TextInput } from "../components/input";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { SET_USER_TYPE } from "../core/redux/types";
import GoogleSvg from "../../assets/icons/GoogleSvg";

const SignUpScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  // console.log(auth);
  const JoinAsDriver = () => {
    navigation?.push("JoinDriver");
    dispatch({ type: SET_USER_TYPE, payload: true });
    console.log("Join as Driver", auth);
  };

  const JoinAsPassenger = () => {
    navigation?.push("SignHome");
    dispatch({ type: SET_USER_TYPE, payload: false });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.textWrap_top}>
          <Text variant="welcomeLight" style={styles.textCenter}>
            Welcome! Create account as influencer
          </Text>
        </View>
        <View style={styles.textWrap}>
          <TextInput label={"Fullname"} placeholder={"Enter your name"} />
        </View>
        <View style={styles.textWrap}>
          <TextInput label={"Email"} placeholder={"Enter your email"} />
        </View>
        <View style={styles.textWrap}>
          <TextInput
            label={"Sectors"}
            placeholder={"Beauty, Food"}
            label_annotation={"(separate with comma)"}
          />
        </View>
        <View style={styles.textWrap}>
          <TextInput
            label={"Social media"}
            placeholder={"@username, @username"}
            label_annotation={"(separate with comma)"}
          />
        </View>
        <View style={styles.textWrap}>
          <TextInput
            label={"Password"}
            secureTextEntry={true}
            placeholder={"Enter your password"}
          />
        </View>
        <View style={styles.buttonWrap}>
          <Button variant="black" size="wide" onPress={JoinAsDriver}>
            Sign Up
          </Button>
          <Button
            size="wide"
            variant="outlined"
            icon={() => <GoogleSvg />}
            onPress={JoinAsPassenger}
          >
            Sign Up with Google
          </Button>
        </View>
        <View style={styles.linkWrap}>
          <Text variant="authBottom" color="paragraph">
            Already have an account?{" "}
          </Text>
          <TouchableOpacity onPress={() => navigation?.push("SigninHome")}>
            <Text variant="authBottom" color="link" under={true}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    height: hp(751)
    // height: 800,
  },
  textWrap_top: {
    flex: 1,
    paddingHorizontal: wp(25),
    paddingBottom: hp(10),
    paddingTop: hp(20)

    // backgroundColor: "#22d",
  },
  textWrap: {
    flex: 3,
    paddingHorizontal: wp(25)

    // backgroundColor: "#22d",
  },
  textCenter: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  buttonWrap: {
    flex: 4,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: hp(25),
    paddingTop: hp(30),
    width: "100%"
    // backgroundColor: "#0f0",
  },
  linkWrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "row",
    paddingTop: hp(10)
    // paddingTop: hp(60)
    // paddingTop: 50,
    // backgroundColor: "#0ef",
  }
});
