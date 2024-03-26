import * as React from "react";
import { wp, hp } from "../../constants/style/index";
import { Card } from "react-native-paper";

import { StyleSheet } from "react-native";

export const CampaignCard = () => (
  <Card style={styles.cardContainer}>
    <Card.Content>ddddddddddddddddddd</Card.Content>
  </Card>
);

const styles = StyleSheet.create({
  cardContainer: {
    margin: hp(10),
    alignItems: "center",
    // paddingHorizontal: hp(100),

    borderRadius: hp(10),
    backgroundColor: "#FFFFFF"
  }
});
