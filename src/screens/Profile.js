import React from "react";
import { hp, wp } from "../constants/style";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import { Text } from "../components/text";
import { Button } from "../components/button";

const campaigns = [
  {
    image: require("../../assets/images/Thomas.png"),
    title: "Company name",
    category: "Beauty, Food, Movies",
    social: "@TikTok, @Instagram"
  }
];

const Profile = ({ navigation }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={true}
      style={{ backgroundColor: "#f9f9f9" }}
    >
      <View style={styles.container}>
        <View style={styles.listWrap}>
          <Text variant="headlineMedium" style={styles.textWrap}>
            Profile
          </Text>
        </View>
        {campaigns.map((campaign, index) => (
          <React.Fragment key={index}>
            <View style={styles.divider}></View>
            <View style={styles.listWrapItem}>
              <View style={styles.imageWrap}>
                <Image
                  source={campaign.image}
                  style={{
                    width: wp(50),
                    height: hp(50),
                    resizeMode: "cover"
                  }}
                />
              </View>

              <View style={styles.buttonWrap}>
                <Button
                  size="request"
                  variant="request"
                  onPress={() => navigation?.push("CampaignDetail")}
                >
                  Edit
                </Button>
              </View>
            </View>
            <View style={styles.summery}>
              <Text variant="listTitle" style={{ color: "#000000" }}>
                {campaign.title}
              </Text>
              <Text variant="profileDetail" style={{ color: "#3E3E3E" }}>
                {campaign.category}
              </Text>
              <Text variant="profileDetail" style={{ color: "#3E3E3E" }}>
                {campaign.social}
              </Text>
            </View>
          </React.Fragment>
        ))}
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    marginVertical: hp(10),
    marginHorizontal: wp(20),
    backgroundColor: "#FFFFFF"
  },
  listWrap: {
    paddingLeft: wp(10),
    width: "100%",
    height: hp(48),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: hp(10)
  },
  listWrapItem: {
    padding: hp(8),
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  },
  textWrap: {
    color: "#197BBD"
  },
  imageWrap: {
    flex: 1,
    width: "100%"
  },
  buttonWrap: {
    justifyContent: "flex-end",
    alignItems: "center"
  },
  divider: {
    height: 1,
    width: "98%",
    backgroundColor: "#ECE4E4"
  },
  summery: {
    padding: hp(10)
  }
});
