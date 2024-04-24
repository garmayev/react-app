import React from "react";
import {Text, View, StyleSheet} from "react-native";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text>This is Home Screen</Text>
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

export default HomeScreen
