import { hp, wp } from "../constants/style";
import { StyleSheet, View, Image } from "react-native";
import React from "react";
import { List, } from "react-native-paper";
import { Text } from "./text";
import StarGreySvg from "../../assets/icons/booking/StarGreySvg";
import StarYellowSvg from "../../assets/icons/booking/StarYellowSvg";

export default function RatingStars({ star, onValueChange }) {
    const starTotal = [1, 2, 3, 4, 5]
    const starActive = starTotal.map((value) => {
        return value <= star ? <StarYellowSvg key={value + 1} /> : <StarGreySvg key={value + 1} />
    })
    return (
        <View style={styles.ratingStars}>
            {starActive}
        </View>
    );
}

const styles = StyleSheet.create({
    ratingStars: {
        marginHorizontal: wp(26),
        // flex: 1,
        // height: hp(220),
        justifyContent: "space-between",
        marginVertical: hp(26),
        flexDirection: "row"
    },
    listItem: {
        height: hp(44),
        alignItems: "center",
        // backgroundColor: "#444"
        // justifyContent: "center",
    },
})