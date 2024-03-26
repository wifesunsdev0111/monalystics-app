import { hp, wp, screenHeight, screenWidth } from "../constants/style";
import { StyleSheet, View, Image } from "react-native";
import React from "react";
import { List, } from "react-native-paper";
import { Text } from "./text";

export default function showRoute(pickUp, stops, destination) {
    return (
        <View style={styles.showRoute}>
            <View style={{
                borderLeftWidth: 1,
                borderStyle: 'dashed',
                borderColor: '#BEC3C9',
                // flex: 1,
                height: hp(220 - 30),
                position: "absolute",
                left: wp(10),
                top: hp(20),
                // marginVertical: hp(20),
                // paddingBottom: hp(50),
                // backgroundColor: "#444"
            }} />
            <List.Item
                key={"pickUp"}
                title={
                    <Text variant="bodyMedium" color="paragraph">
                        Pickup
                    </Text>
                }
                titleStyle={{ marginTop: hp(-10), width: wp(183), marginBottom: hp(4) }}
                description={
                    <Text
                        variant="bodyMedium"
                        color="link"
                        fontFamily="bold"
                    >
                        {pickUp.place}
                    </Text>
                }
                descriptionStyle={{ width: wp(183) }}
                left={(props) => (
                    <View style={{
                        backgroundColor: "#3B6BE8",
                        width: hp(20),
                        height: hp(20),
                        borderRadius: hp(10),
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <View style={{
                            backgroundColor: "#FFFFFF",
                            width: hp(8),
                            height: hp(8),
                            borderRadius: hp(10),
                        }}></View>
                    </View>
                )}
                right={(props) => (
                    <Text variant="bodyMedium" myStyle={{ color: "#727E8A", alignSelf: "flex-end", marginRight: -wp(20) }}>{pickUp.time}</Text>
                )}
                style={styles.listItem}
            />
            {stops && stops.map((stop, key) => (
                <List.Item
                    key={key}
                    title={
                        <Text variant="bodyMedium" color="paragraph">
                            Route stop
                        </Text>
                    }
                    titleStyle={{ marginTop: hp(-10), width: wp(183), marginBottom: hp(4) }}
                    description={
                        <Text
                            variant="bodyMedium"
                            color="link"
                            fontFamily="bold"
                        >
                            {stop.place}
                        </Text>
                    }
                    descriptionStyle={{ width: wp(183) }}
                    left={(props) => (
                        <View style={{
                            backgroundColor: "#C1D9F9",
                            width: hp(20),
                            height: hp(20),
                            borderRadius: hp(10),
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            {/* <View style={{
                    backgroundColor: "#FFFFFF",
                    width: hp(8),
                    height: hp(8),
                    borderRadius: hp(10),
                  }}></View> */}
                        </View>
                    )}
                    right={(props) => (
                        <Text variant="bodyMedium"
                            myStyle={{ color: "#727E8A", alignSelf: "flex-end", marginRight: -wp(20) }}>
                            {stop.time}
                        </Text>
                    )}
                    style={styles.listItem}
                />
            ))}
            <List.Item
                key={"destination"}
                title={
                    <Text variant="bodyMedium" color="paragraph">
                        Destination
                    </Text>
                }
                titleStyle={{ marginTop: hp(-10), width: wp(183), marginBottom: hp(4) }}
                description={
                    <Text
                        variant="bodyMedium"
                        color="link"
                        fontFamily="bold"
                    >
                        {destination.place}
                    </Text>
                }
                descriptionStyle={{ width: wp(183) }}
                left={(props) => (
                    <View style={{
                        backgroundColor: "#FFA500",
                        width: hp(20),
                        height: hp(20),
                        borderRadius: hp(10),
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <View style={{
                            backgroundColor: "#FFFFFF",
                            width: hp(8),
                            height: hp(8),
                            borderRadius: hp(10),
                        }}></View>
                    </View>
                )}
                right={(props) => (
                    <Text variant="bodyMedium" myStyle={{ color: "#727E8A", alignSelf: "flex-end", marginRight: -wp(20) }}>{destination.time}</Text>
                )}
                style={styles.listItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    showRoute: {
        marginHorizontal: wp(26),
        // flex: 1,
        height: hp(220),
        justifyContent: "space-between",
        marginVertical: hp(40),
    },
    listItem: {
        height: hp(44),
        alignItems: "center",
        // backgroundColor: "#444"
        // justifyContent: "center",
    },
})