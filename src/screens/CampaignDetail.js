import React from "react";
import { hp, wp } from "../constants/style";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import { Text } from "../components/text";
import { Button } from "../components/button";

const campaign_detail = {
  image: require("../../assets/images/Thomas.png"),
  title: "Company name",
  detail:
    "Full description, In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
  infuluencer: "0 Influencers engaged"
};

const campaigns = [
  {
    image: require("../../assets/images/Thomas.png"),
    title: "Summer campaign",
    name: "Company name",
    influencer: "0 Influencers engaged"
  },
  {
    image: require("../../assets/images/Thomas-1.png"),
    title: "Summer campaign",
    name: "Company name",
    influencer: "1 Influencers engaged"
  },
  {
    image: require("../../assets/images/Thomas-2.png"),
    title: "Summer campaign",
    name: "Company name",
    influencer: "4 Influencers engaged"
  }
];

const CampaignDetail = ({ navigation }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={true}
      style={{ backgroundColor: "#f9f9f9" }}
    >
      <View style={styles.container}>
        <View style={styles.listWrap}>
          <Text variant="headlineMedium" style={styles.textWrap}>
            Summer campaign
          </Text>
        </View>
        <React.Fragment>
          <View style={styles.divider}></View>
          <View style={styles.listWrapItem}>
            <View style={styles.imageWrap}>
              <Image
                source={campaign_detail.image}
                style={{
                  width: wp(50),
                  height: hp(50),
                  resizeMode: "cover"
                }}
              />
            </View>

            <View style={styles.buttonWrap}>
              <Button size="request" variant="request" onPress={() => {}}>
                Request
              </Button>
            </View>
          </View>
          <View style={styles.summery}>
            <Text variant="listTitle" style={{ color: "#000000" }}>
              {campaign_detail.title}
            </Text>
            <Text variant="profileDetail" style={{ color: "#3E3E3E" }}>
              {campaign_detail.detail}
            </Text>
            <Text variant="listInfluencer" style={{ color: "#00A4FF" }}>
              {campaign_detail.infuluencer}
            </Text>
          </View>
        </React.Fragment>
      </View>
      <View style={styles.container}>
        <View style={styles.listWrap}>
          <Text variant="headlineMedium" style={styles.textWrapSimilar}>
            Similar campaigns
          </Text>
          <View style={styles.buttonWrap}>
            <Button size="small" variant="white" onPress={() => {}}>
              See more
            </Button>
          </View>
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
              <View style={{ flex: 5, justifyContent: "left" }}>
                <Text variant="listTitle" style={{ color: "#000000" }}>
                  {campaign.title}
                </Text>
                <Text variant="listName" style={{ color: "#000000" }}>
                  {campaign.name}
                </Text>
                <Text variant="listInfluencer" style={{ color: "#00A4FF" }}>
                  {campaign.influencer}
                </Text>
              </View>
            </View>
          </React.Fragment>
        ))}
      </View>
    </ScrollView>
  );
};

export default CampaignDetail;

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
  textWrapSimilar: {
    color: "rgba(0, 0, 0, 0.5)"
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
