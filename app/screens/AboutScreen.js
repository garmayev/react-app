import React from "react";
import {StyleSheet, Text, View} from "react-native";

const AboutScreen = () => {
    return (
        <View>
            <Text>This is About Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        padding: 10,
        paddingHorizontal: 15
    }
})

export default AboutScreen
