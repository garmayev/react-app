import {Text, View, StyleSheet} from "react-native";
import {useEffect} from "react";


export default function PreloaderScreen(props) {
    const {loadingComplete} = props
    const complete = () => {
        setTimeout(() => {
            loadingComplete(true)
        }, 5000)
    }
    useEffect(() => {
        fetch("https://google.com")
            .then(complete)
    })

    return (
        <View style={styles.containerCentered}>
            <Text>Loading...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerCentered: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center"
    }
})
